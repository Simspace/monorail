import React, { useState } from 'react'
import * as A from 'fp-ts/Array'
import { flow, pipe } from 'fp-ts/function'
import { eqString } from 'fp-ts/lib/Eq'
import { foldMap, Forest, Tree } from 'fp-ts/lib/Tree'

import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow, visible } from '@monorail/helpers/exports'
import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import { xor } from '@monorail/sharedHelpers/fp-ts-ext/Array'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'

const TreeRowAlignmentBox = styled.div<{ cssToggle?: CSSProp }>(
  ({ cssToggle }) => css`
    ${flexFlow()};

    align-items: center;
    align-self: stretch;
    flex-shrink: 0;
    justify-content: center;
    width: 24px;
    overflow: hidden;
    position: relative;

    ${cssToggle}
  `,
)

const TreeRowDepthLine = styled.div<{ isVisible?: boolean }>(
  ({ isVisible = true }) => css`
    ${visible(isVisible)}

    background: ${getColor(Colors.Black12a)};
    height: 100%;
    width: 1px;
  `,
)

const TreeRowToggleContainer = styled.div`
  ${TreeRowDepthLine} {
    left: calc(50% - 0.5px);
    position: absolute;
  }
`

type Key = string

type TreeListProps<T> = {
  forest: Forest<T>
  getTreeNodeKey: (a: T) => Key
  startExpanded?: boolean
}

type Ancestor = {
  key: Key
  index: number
}

export type FlattenedNode<T> = {
  value: T
  depth: number
  ancestors: Array<Ancestor>
  isLeaf: boolean
  index: number
}

type TreeRowToggleAndDepthLineProps = {
  depth: number
  onClick: React.MouseEventHandler<HTMLButtonElement>
  isOpen: boolean
  isLeaf: boolean
  showDepthLine?: boolean
  cssToggle?: CSSProp
}

export function flattenWithDepth<T>(
  rootTree: Tree<T>,
  toKey: (a: T) => Key,
  startingIndex: number,
): Array<FlattenedNode<T>> {
  function flattenWithDepthInner(
    depth: number,
    ancestors: Array<Ancestor>,
    index: number,
  ): (currentTree: Tree<T>) => Array<FlattenedNode<T>> {
    return currentTree => {
      return [
        {
          value: currentTree.value,
          depth,
          ancestors,
          isLeaf: currentTree.forest.length === 0,
          index,
        },
        ...pipe(
          currentTree.forest,
          forest => forest.map((childTree, idx) => [childTree, idx] as const),
          A.chain(([childTree, childIdx]) => {
            return pipe(
              childTree,
              flattenWithDepthInner(
                depth + 1,
                ancestors.concat({ key: toKey(currentTree.value), index }),
                childIdx,
              ),
            )
          }),
        ),
      ]
    }
  }

  return flattenWithDepthInner(0, [], startingIndex)(rootTree)
}

export const TreeRowToggleAndDepthLine = (
  props: TreeRowToggleAndDepthLineProps,
) => {
  const {
    depth,
    isLeaf,
    isOpen,
    onClick,
    showDepthLine = true,
    cssToggle,
  } = props
  return (
    <>
      {Array(depth)
        .fill(depth)
        .map((_, idx: number) => (
          <TreeRowAlignmentBox key={idx}>
            <TreeRowDepthLine />
          </TreeRowAlignmentBox>
        ))}
      <TreeRowAlignmentBox css={cssToggle}>
        {!isLeaf && (
          <TreeRowToggleContainer>
            <IconButton
              icon={isOpen ? 'arrow_drop_down' : 'arrow_right'}
              display={ButtonDisplay.Chromeless}
              onClick={e => {
                e.stopPropagation()
                onClick(e)
              }}
            />
            {showDepthLine && <TreeRowDepthLine isVisible={isOpen} />}
          </TreeRowToggleContainer>
        )}
      </TreeRowAlignmentBox>
    </>
  )
}

export const useTreeList = <T extends unknown>(props: TreeListProps<T>) => {
  const { forest, getTreeNodeKey } = props
  const [openRows, setOpenRows] = useState<Array<Key>>(
    props.startExpanded
      ? forest.flatMap(x =>
          foldMap(A.getMonoid<Key>())(flow(getTreeNodeKey, A.of))(x),
        )
      : [],
  )

  const toggleNode = (nodeKey: Key) => {
    setOpenRows(xor(eqString)([nodeKey], openRows))
  }

  const rows = pipe(
    forest,
    f => f.map((tr, idx) => [tr, idx] as const),
    A.chain(([data, index]) =>
      flattenWithDepth(data, a => getTreeNodeKey(a), index),
    ),
  ).filter(row => {
    return (
      A.intersection(eqString)(
        openRows,
        row.ancestors.map(a => a.key),
      ).length === row.ancestors.length
    )
  })

  return { rows, toggleNode, openRows }
}

export const outlineNumbering = <T extends unknown>(
  row: FlattenedNode<T>,
  startingDepth: number = 0,
) => {
  return [
    ...row.ancestors.splice(startingDepth).map(a => a.index + 1),
    row.index + 1,
  ].join('.')
}
