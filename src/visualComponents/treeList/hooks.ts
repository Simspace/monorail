import * as React from 'react'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as Task from 'fp-ts/Task'
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Tree'

import * as TF from '@monorail/sharedHelpers/fp-ts-ext/Tree'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'

import { MenuAction } from '../actionsMenu/ActionsMenu'
import { ActionReturn } from './TreeView'

const negateCurried2 = <A, B, F extends (a: A) => (b: B) => boolean>(f: F) => (
  a: A,
) => (b: B) => !f(a)(b)

const ifNode = (condition: boolean) => (
  action: MenuAction,
): MenuAction | undefined => (condition ? action : undefined)

type ForestFunctions<A, K> = {
  forest: T.Forest<A>
  addChild: <E>(
    makeChild: (fromNode: T.Tree<A>) => TE.TaskEither<E, T.Tree<A>>,
  ) => (key: K) => TE.TaskEither<E, T.Forest<A>>
  addRoot: (newRoot: A) => void
  duplicate: (
    key: K,
  ) => <E>(
    modify: (a: A) => TE.TaskEither<E, A>,
  ) => TE.TaskEither<E, T.Forest<A>>
  remove: (key: K) => void
  moveUp: (key: K) => O.Option<T.Forest<A>>
  moveDown: (key: K) => O.Option<T.Forest<A>>
  moveInto: (key: K) => O.Option<T.Forest<A>>
  canMoveUp: (key: K) => boolean
  canMoveDown: (key: K) => boolean
  canMoveInto: (key: K) => boolean
}

export const useForestFunctions = <A, K>(
  forest: T.Forest<A>,
  getKey: (a: A) => K,
): ForestFunctions<A, K> => {
  const addChild = React.useCallback(
    <E>(mc: (fromNode: T.Tree<A>) => TE.TaskEither<E, T.Tree<A>>) => (key: K) =>
      pipe(
        forest,
        TF.addChildWhereAsync((t: T.Tree<A>) => getKey(t.value) === key)(mc),
      ),
    [forest, getKey],
  )

  const addRoot = React.useCallback(
    (node: A) => pipe(forest, TF.addRoot(node)),
    [forest],
  )

  const duplicate = React.useCallback(
    (key: K) => <E>(modify: (a: A) => TE.TaskEither<E, A>) =>
      pipe(
        forest,
        TF.duplicateWhereAsync((t: T.Tree<A>) => getKey(t.value) === key)(
          modify,
        ),
      ),
    [forest, getKey],
  )
  const remove = React.useCallback(
    (key: K) =>
      pipe(
        forest,
        TF.removeWhere((t: T.Tree<A>) => getKey(t.value) === key),
      ),
    [forest, getKey],
  )
  const move = React.useCallback(
    (
      func: typeof TF['moveInto'],
      fallback: typeof TF['moveInto'] = () => () => O.none,
    ) => (key: K) =>
      pipe(
        forest,
        func(t => getKey(t.value) === key),
        O.alt(() =>
          pipe(
            forest,
            fallback(t => getKey(t.value) === key),
          ),
        ),
      ),
    [forest, getKey],
  )
  const moveUp = React.useCallback(
    (key: K) => move(TF.moveLeft, TF.moveUpBefore)(key),
    [move],
  )
  const moveDown = React.useCallback(
    (key: K) => move(TF.moveRight, TF.moveUpAfter)(key),
    [move],
  )
  const moveInto = React.useCallback((key: K) => move(TF.moveInto)(key), [move])

  const canMove = React.useCallback(
    (
      check: typeof TF['isLeftmost'],
      secondaryCheck: typeof TF['isLeftmost'] = () => () => false,
    ) => (key: K) =>
      pipe(
        forest,
        check(t => getKey(t.value) === key),
        c =>
          c ||
          pipe(
            forest,
            secondaryCheck(t => getKey(t.value) === key),
          ),
      ),
    [forest, getKey],
  )

  const canMoveUp = React.useCallback(
    (key: K) => canMove(negateCurried2(TF.isLeftmost), TF.hasParent)(key),
    [canMove],
  )
  const canMoveDown = React.useCallback(
    (key: K) => canMove(negateCurried2(TF.isRightmost), TF.hasParent)(key),
    [canMove],
  )
  const canMoveInto = React.useCallback(
    (key: K) => canMove(negateCurried2(TF.isRightmost))(key),
    [canMove],
  )

  const res = React.useMemo(
    () => ({
      forest,
      addChild,
      addRoot,
      duplicate,
      remove,
      moveUp,
      moveDown,
      moveInto,
      canMoveUp,
      canMoveDown,
      canMoveInto,
    }),
    [
      addChild,
      addRoot,
      canMoveDown,
      canMoveInto,
      canMoveUp,
      duplicate,
      forest,
      moveDown,
      moveInto,
      moveUp,
      remove,
    ],
  )

  return res
}

export const useTreeViewCreateChildAction = <A, K>(
  { addChild }: Pick<ForestFunctions<A, K>, 'addChild'>,
  createNode: (fromNode: T.Tree<A>) => TE.TaskEither<unknown, T.Tree<A>>,
) =>
  React.useCallback(
    (key: K): MenuAction<ActionReturn<K>> => ({
      label: 'Create Child',
      iconName: 'add_box',
      onClick: onClickParent =>
        pipe(
          key,
          addChild(createNode),
          Task.map(() => onClickParent()),
          Task.map(() => ({ tag: 'nodeOpen', key, nodeOpen: true })),
        ),
    }),
    [addChild, createNode],
  )

type MovementChecks = 'canMoveDown' | 'canMoveInto' | 'canMoveUp'

type MovementFuncNames = 'moveUp' | 'moveDown' | 'moveInto'
type MovementFuncs<K> = { [F in MovementFuncNames]: (key: K) => void }

export const useTreeViewMoveActions = <A, K>(
  ffs: Pick<ForestFunctions<A, K>, MovementChecks> & MovementFuncs<K>,
): ((key: K) => Array<MenuAction<ActionReturn<K>>>) => {
  const {
    canMoveUp,
    canMoveDown,
    canMoveInto,
    moveUp,
    moveDown,
    moveInto,
  } = ffs
  const getMoveActions = React.useCallback(
    (key: K) =>
      [
        ifNode(canMoveUp(key))({
          label: 'Move Up',
          iconName: 'arrow_upward',
          onClick: onClickParent => {
            moveUp(key)
            onClickParent()
          },
        }),
        ifNode(canMoveDown(key))({
          label: 'Move Down',
          iconName: 'arrow_downward',
          onClick: onClickParent => {
            moveDown(key)
            onClickParent()
          },
        }),
        ifNode(canMoveInto(key))({
          label: 'Move Into',
          iconName: 'arrow_forward',
          onClick: onClickParent => {
            moveInto(key)
            onClickParent()
          },
        }),
      ].filter(isNotNil),
    [canMoveUp, canMoveDown, canMoveInto, moveUp, moveDown, moveInto],
  )
  return getMoveActions
}

export const useTreeViewActions = <A, K>(
  ffs: Pick<ForestFunctions<A, K>, MovementChecks | 'addChild'> &
    MovementFuncs<K>,
  createNode: (fromNode: T.Tree<A>) => TE.TaskEither<unknown, T.Tree<A>>,
): ((key: K) => Array<MenuAction<ActionReturn<K>>>) => {
  const create = useTreeViewCreateChildAction(ffs, createNode)
  const moves = useTreeViewMoveActions(ffs)
  const getActions = React.useCallback(
    (key: K): Array<MenuAction<ActionReturn<K>>> => {
      const keyedMoves = moves(key)
      return keyedMoves.length
        ? [create(key), { type: 'divider' }, ...keyedMoves]
        : [create(key)]
    },
    [create, moves],
  )
  return getActions
}
