import madge, { MadgeConfig } from 'madge'
import fs from 'fs'
import { constVoid, pipe } from 'fp-ts/lib/function'
import * as R from 'fp-ts/lib/ReadonlyRecord'
import * as A from 'fp-ts/lib/ReadonlyArray'
import * as O from 'fp-ts/lib/Option'
import * as str from 'fp-ts/lib/string'
import * as TE from 'fp-ts/lib/TaskEither'
import * as T from 'fp-ts/lib/Task'

const unsafeSplitInput = (s: string): [string, string] =>
  s.split('/') as [string, string]

const normalizeInput = (input: Record<string, ReadonlyArray<string>>) => {
  const keys = Object.keys(input).filter(s => s !== 'index.js')
  const out: Record<string, ReadonlyArray<string>> = {}
  for (const k of keys) {
    const outKeys = Object.keys(out)
    const [dir, file] = unsafeSplitInput(k)
    const f0 = file.split('.')[0]
    const deps = input[k]
    const filteredDeps = pipe(
      deps,
      A.filterMap(dep => {
        const [dirDep, fileDep] = unsafeSplitInput(dep)
        const f = fileDep.split('.')[0]
        if (dirDep === dir) {
          if (f === dirDep) {
            return O.none
          } else {
            return O.some(`${dirDep}/${f}`)
          }
        } else {
          if (f === dirDep || f === 'index') {
            return O.some(dirDep)
          } else {
            return O.some(`${dirDep}/${f}`)
          }
        }
      }),
    )
    if (A.isNonEmpty(filteredDeps) || !A.elem(str.Eq)(dir)(outKeys)) {
      if (dir !== f0 && f0 !== 'index') {
        out[`${dir}/${f0}`] = filteredDeps
      } else {
        out[dir] = filteredDeps
      }
    }
  }
  return out
}

const processRawData = (input: Record<string, ReadonlyArray<string>>) => {
  input = normalizeInput(input)
  // Pull out every dependency
  const allDependencies = pipe(
    input,
    R.reduceWithIndex(str.Ord)([] as string[], (k, acc, deps) => [
      k,
      ...acc,
      ...deps,
    ]),
    A.uniq(str.Eq),
  )
  // Pull out all non empty dependencies
  const allNonEmptyDependencies = pipe(input, R.filter(A.isNonEmpty), R.keys)
  // Filter all dependencies, finding ones with no dependencies
  const noDependencies = pipe(
    allDependencies,
    A.difference(str.Eq)(allNonEmptyDependencies),
    A.sort(str.Ord),
  )

  // loop and diff the dependencies
  let remaining: Record<string, ReadonlyArray<string>> = pipe(
    input,
    R.filterWithIndex(k => !A.elem(str.Eq)(k)(noDependencies)),
  )
  let union: ReadonlyArray<string> = noDependencies.slice()
  let output: Array<Record<string, ReadonlyArray<string>>> = []

  while (R.keys(remaining).length > 0) {
    const { left: rem, right: out } = pipe(
      remaining,
      R.partitionWithIndex((k, deps) => {
        if (A.elem(str.Eq)(k)(union)) {
          return false
        }
        for (const d of deps) {
          if (!A.elem(str.Eq)(d)(union)) {
            return false
          }
        }
        return true
      }),
    )
    union = pipe(union, A.union(str.Eq)(R.keys(out)))
    remaining = rem
    output.push(out)
    if (R.keys(out).length === 0) {
      break
    }
  }

  return {
    0: noDependencies,
    ...pipe(
      output,
      A.reduceWithIndex({}, (i, b, a) => ({ ...b, [i + 1]: a })),
    ),
  }
}

const mkdir = (
  path: fs.PathLike,
  options: fs.MakeDirectoryOptions,
): TE.TaskEither<NodeJS.ErrnoException, void> =>
  pipe(
    TE.taskify<
      fs.PathLike,
      fs.MakeDirectoryOptions,
      NodeJS.ErrnoException,
      string
    >(fs.mkdir)(path, options),
    TE.map(constVoid),
  )

const stat = TE.taskify(fs.stat)

const ensureDirExists = (dir: string) =>
  pipe(
    stat(dir),
    TE.map(stats => stats.isDirectory()),
    TE.matchEW(
      err =>
        err.code === 'ENOENT' ? mkdir(dir, { recursive: true }) : TE.left(err),
      (b): TE.TaskEither<Error, void> =>
        b
          ? TE.right(undefined)
          : TE.left(new Error(`File ${dir} exists but is not a directory`)),
    ),
  )

const writeFile = TE.taskify<
  fs.PathLike,
  string | Buffer,
  NodeJS.ErrnoException,
  void
>(fs.writeFile)

const toError = (err: unknown): Error =>
  err instanceof Error ? err : new Error(String(err))

const program = (source: string, config: MadgeConfig) =>
  pipe(
    TE.tryCatch(() => madge(source, config), toError),
    TE.bindTo('madgeInstance'),
    TE.bind('rawDependencyGraph', ({ madgeInstance }) =>
      TE.right(madgeInstance.obj()),
    ),
    TE.bind('dependencyList', ({ rawDependencyGraph }) =>
      TE.right(processRawData(rawDependencyGraph)),
    ),
    TE.chainFirst(() => ensureDirExists('dependency-list-output')),
    TE.chain(({ madgeInstance, rawDependencyGraph, dependencyList }) =>
      TE.sequenceArray([
        pipe(
          TE.tryCatch(() => madgeInstance.svg(), toError),
          TE.chain(svg =>
            writeFile('dependency-list-output/dependency_graph.svg', svg),
          ),
        ),
        writeFile(
          'dependency-list-output/raw_dependency_graph.json',
          JSON.stringify(rawDependencyGraph),
        ),
        writeFile(
          'dependency-list-output/dependency_list.json',
          JSON.stringify(dependencyList),
        ),
      ]),
    ),
    TE.matchE(
      err =>
        T.fromIO<void>(() => {
          console.error(err)
          process.exit(1)
        }),
      () =>
        T.fromIO<void>(() => {
          process.exit(0)
        }),
    ),
  )

const config: MadgeConfig = {
  fileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  excludeRegExp: [
    /^test$/,
    /(.+)test.([jt]sx?)/,
    /svg-icons/,
    /use(.+).([jt]sx?)/,
    /^styled.js/,
    /colors\/(.+)/,
    /styles\/(.+)/,
    /utils\/(.+)/,
    /(.+).d.ts/,
    /(.+)spec.([jt]sx?)/,
    /(.+)Classes.([jt]sx?)/,
    /(.+)Context.([jt]sx?)/,
    /(.+)utils.([jt]sx?)/,
    /(.+)\/(?!index)[a-z](.+)/,
  ],
  rankdir: 'RL',
}

const source = process.argv.slice(-1)[0]

if (!source) {
  console.error('Please specify a source to analyze')
  process.exit(1)
}

program(source, config)()
