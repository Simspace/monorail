import React from 'react'
import { Forest, make } from 'fp-ts/lib/Tree'

import {
  baseChromelessStyles,
  flexFlow,
  FontSizes,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import {
  TreeRowToggleAndDepthLine,
  useTreeList,
} from '@monorail/visualComponents/treeList/TreeList'
import { Text } from '@monorail/visualComponents/typography/Text'

export const TreeListContainer = styled.ul`
  ${flexFlow('column')};

  margin-top: 200px;
  height: 100%;
  width: 200px;
`

export const TreeRowContainer = styled.li`
  ${baseChromelessStyles()};
  ${flexFlow('row')};

  align-items: center;
  min-height: 32px;
  padding-left: 32px;
  width: 100%;
  margin-top: 0 !important;
`

export const mockData = [
  make(
    {
      nodeKey: '1',
      label: 'Top',
    },
    [
      make({ nodeKey: '2', label: 'Middle' }, [
        make({ nodeKey: '3', label: 'Bottom' }),
      ]),
    ],
  ),
  make(
    {
      nodeKey: '4',
      label: 'Top',
    },
    [make({ nodeKey: '5', label: 'Middle' }, [])],
  ),
]

export const TreeListController = () => {
  const getTreeNodeKey = treeNode => treeNode.nodeKey

  const treeListState = useTreeList({
    forest: mockData,
    getTreeNodeKey,
  })

  return (
    <TreeListContainer>
      {treeListState.rows.map(row => (
        <TreeRowContainer key={row.index}>
          <TreeRowToggleAndDepthLine
            depth={row.depth}
            onClick={() => treeListState.toggleNode(getTreeNodeKey(row.value))}
            isOpen={treeListState.openRows.includes(getTreeNodeKey(row.value))}
            isLeaf={row.isLeaf}
          />
          <Text fontSize={FontSizes.Title5} fontWeight={500} margin="0">
            {row.value.label}
          </Text>
        </TreeRowContainer>
      ))}
    </TreeListContainer>
  )
}
