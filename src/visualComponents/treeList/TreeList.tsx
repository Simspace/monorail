import React, { useState } from 'react'
import { eqString } from 'fp-ts/lib/Eq'
import { Forest, Tree } from 'fp-ts/lib/Tree'
import { chain, intersection } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'

import { xor } from '@monorail/sharedHelpers/fp-ts-ext/Array'
import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow, visible } from '@monorail/helpers/exports'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'

const TreeRowAlignmentBox = styled.div<{ cssToggle?: CSSProp }>(
  ({ cssToggle }) => css`
    ${flexFlow()};

    align-items: center;
    flex-shrink: 0;
    height: 100%;
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
    left: 50%;
    position: absolute;
  }
`

type TreeListProps<A> = {
  forest: Forest<A>
  getTreeNodeKey: (a: A) => string
}

type Ancestor = {
  key: string
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
  onClick: () => void
  isOpen: boolean
  isLeaf: boolean
  showDepthLine?: boolean
  cssToggle?: CSSProp
}

export function flattenWithDepth<T>(
  rootTree: Tree<T>,
  toKey: (a: T) => string,
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
          chain(([childTree, childIdx]) => {
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
              onClick={onClick}
            />
            {showDepthLine && <TreeRowDepthLine isVisible={isOpen} />}
          </TreeRowToggleContainer>
        )}
      </TreeRowAlignmentBox>
    </>
  )
}

export const useTreeList = <A extends unknown>(props: TreeListProps<A>) => {
  const { forest, getTreeNodeKey } = props
  const [openRows, setOpenRows] = useState<Array<string>>([])

  const toggleNode = (nodeKey: string) => {
    setOpenRows(xor(eqString)([nodeKey], openRows))
  }

  const rows = pipe(
    forest,
    f => f.map((tr, idx) => [tr, idx] as const),
    chain(([data, index]) =>
      flattenWithDepth(data, a => getTreeNodeKey(a), index),
    ),
  ).filter(row => {
    return (
      intersection(eqString)(
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
