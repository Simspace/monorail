/* eslint-disable import/no-extraneous-dependencies */

import child_process from 'child_process'
import fs from 'fs/promises'
import glob from 'glob'
import path from 'path'
import { promisify } from 'util'

const exec = promisify(child_process.exec)

function rewriteSourceMap(content: string, srcPatch: string) {
  const dir = path.dirname(srcPatch)
  return JSON.stringify(
    Object.entries(JSON.parse(content))
      .map(([k, v]) =>
        k === 'sources'
          ? ([
              k,
              (v as Array<string>).map(source => {
                if (srcPatch.match(/dist\/_(.+)\//)) {
                  source = source.replace(/(.*)\.\.\/src(.*)/gm, '$1_src$2')
                } else {
                  source = source.replace(
                    /(.*)\.\.\/\.\.\/src(.*)/gm,
                    '$1_src$2',
                  )
                }
                source = path.relative(dir, path.join(dir, source))
                return source.startsWith('.') ? source : './' + source
              }),
            ] as const)
          : ([k, v] as const),
      )
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {}),
  )
}

function exists(path: string) {
  return fs.access(path).then(
    () => true,
    () => false,
  )
}

function getGlob(g: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    glob(g, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

function carry(
  key: string,
  source: Record<string, unknown>,
  target: Record<string, unknown>,
) {
  if (key in source) {
    target[key] = source[key]
  }
}

async function getPackageJson() {
  const content = await fs.readFile('./package.json', { encoding: 'utf-8' })
  return JSON.parse(content) as Record<string, unknown>
}

async function writePackageJson() {
  const originalManifest = await getPackageJson()
  const rawManifest: Record<string, unknown> = {}
  carry('name', originalManifest, rawManifest)
  carry('version', originalManifest, rawManifest)
  carry('private', originalManifest, rawManifest)
  carry('license', originalManifest, rawManifest)
  carry('repository', originalManifest, rawManifest)
  carry('gitHead', originalManifest, rawManifest)
  carry('bin', originalManifest, rawManifest)
  carry('dependencies', originalManifest, rawManifest)
  carry('peerDependencies', originalManifest, rawManifest)

  rawManifest.main = './index.js'
  rawManifest.module = './_esm/index.js'

  const exports: Record<string, unknown> = {}
  exports['.'] = {
    import: './_esm/index.js',
    require: './index.js',
  }
  exports['./*'] = {
    import: './_esm/*.js',
    require: './*.js',
  }
  rawManifest.exports = exports

  rawManifest.publishConfig = {
    access: 'restricted',
  }

  const content = JSON.stringify(rawManifest, null, 2)

  await fs.writeFile('./dist/package.json', content)
}

async function run() {
  if (await exists('dist')) {
    await exec('rm -rf dist')
  }

  await fs.mkdir('dist')

  await fs.mkdir('./dist/_src')
  await exec('cp -r ./src/* ./dist/_src')

  await fs.mkdir('./dist/_esm')
  await exec('cp -r ./build/esm/* ./dist/_esm')

  await exec('cp -r ./build/cjs/* ./dist')

  await exec('cp -r ./build/dts/* ./dist')

  await writePackageJson()

  const sourceMapPaths = await getGlob('dist/**/*.map')

  await Promise.all(
    sourceMapPaths.map(async path => {
      let content = await fs.readFile(path, { encoding: 'utf-8' })
      content = rewriteSourceMap(content, path)
      await fs.writeFile(path, content)
    }),
  )

  // eslint-disable-next-line no-console
  console.log('Done!')
}

run()
