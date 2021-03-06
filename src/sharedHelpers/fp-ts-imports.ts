// Modules for which we don't yet have extensions
// If we add extensions for these, change the import to the fp-ts-ext module, and re-export the base module from there.
import * as RD from '@devexperts/remote-data-ts'
import * as Apl from 'fp-ts/lib/Applicative'
import * as IOE from 'fp-ts/lib/IOEither'
import * as Mn from 'fp-ts/lib/Monoid'
import * as NEA from 'fp-ts/lib/NonEmptyArray'
import { pipe } from 'fp-ts/lib/pipeable'
import * as Re from 'fp-ts/lib/Reader'
import * as RNEA from 'fp-ts/lib/ReadonlyNonEmptyArray'
import * as RR from 'fp-ts/lib/ReadonlyRecord'
import * as RS from 'fp-ts/lib/ReadonlySet'
import * as RT from 'fp-ts/lib/ReadonlyTuple'
import * as Sg from 'fp-ts/lib/Semigroup'
import * as Tup from 'fp-ts/lib/Tuple'
import * as W from 'fp-ts/lib/Writer'

import * as Ap from '@monorail/sharedHelpers/fp-ts-ext/Apply'
import * as A from '@monorail/sharedHelpers/fp-ts-ext/Array'
import * as E from '@monorail/sharedHelpers/fp-ts-ext/Either'
import * as Eq from '@monorail/sharedHelpers/fp-ts-ext/Eq'
import * as Fld from '@monorail/sharedHelpers/fp-ts-ext/Foldable'
import {
  constant,
  flow,
  identity,
  not,
  tuple,
} from '@monorail/sharedHelpers/fp-ts-ext/function'
import * as IO from '@monorail/sharedHelpers/fp-ts-ext/IO'
import * as M from '@monorail/sharedHelpers/fp-ts-ext/Map'
import * as O from '@monorail/sharedHelpers/fp-ts-ext/Option'
import * as Ord from '@monorail/sharedHelpers/fp-ts-ext/Ord'
import * as RTE from '@monorail/sharedHelpers/fp-ts-ext/ReaderTaskEither'
import * as RA from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArray'
import * as RAOZ from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArrayOrZipper'
import * as RAZ from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArrayZipper'
import * as RM from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyMap'
import * as R from '@monorail/sharedHelpers/fp-ts-ext/Record'
import * as S from '@monorail/sharedHelpers/fp-ts-ext/Set'
import * as Show from '@monorail/sharedHelpers/fp-ts-ext/Show'
import * as T from '@monorail/sharedHelpers/fp-ts-ext/Task'
import * as TE from '@monorail/sharedHelpers/fp-ts-ext/TaskEither'
import * as Th from '@monorail/sharedHelpers/fp-ts-ext/These'
import * as Tree from '@monorail/sharedHelpers/fp-ts-ext/Tree'

export {
  A,
  Ap,
  Apl,
  constant,
  E,
  Eq,
  Fld,
  flow,
  IO,
  IOE,
  identity,
  M,
  Mn,
  NEA,
  not,
  O,
  Ord,
  pipe,
  R,
  RA,
  RAOZ,
  RAZ,
  RD,
  RM,
  RNEA,
  Re,
  RR,
  RS,
  RT,
  RTE,
  S,
  Sg,
  Show,
  T,
  TE,
  Th,
  Tree,
  Tup,
  tuple,
  W,
}
