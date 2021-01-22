import React from 'react'

import {
  Colors,
  FontSizes,
  FontWeights,
  getColor,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import { Text } from '@monorail/visualComponents/typography/Text'

const TotalRow = styled.div`
  display: flex;
  padding: 4px 22px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${getColor(Colors.Grey94)};
  height: 36px;
  position: sticky;
  bottom: 0;
`

export type SelectionSummaryBarProps<T> = {
  sortedData: Array<T>
  totalItems: number
  totalSelectedItems: number
}

/**
 * Default "Pagination" component for `ReactTableSelect`.
 * Shows selection and items-in-table summaries.
 */
export const SelectionSummaryBar = <T extends unknown>(
  props: SelectionSummaryBarProps<T>,
) => {
  return (
    <TotalRow>
      <div>
        <Text fontSize={FontSizes.Title5} fontWeight={FontWeights.Bold}>
          {props.totalSelectedItems}
        </Text>
        <Text fontSize={FontSizes.Title5} fontWeight={FontWeights.Book}>
          {' '}
          selected
        </Text>
      </div>
      <div>
        <Text fontSize={FontSizes.Title5} fontWeight={FontWeights.Bold}>
          {props.sortedData.length}
        </Text>
        <Text fontSize={FontSizes.Title5} fontWeight={FontWeights.Book}>
          {' '}
          out of{' '}
        </Text>
        <Text fontSize={FontSizes.Title5} fontWeight={FontWeights.Bold}>
          {props.totalItems}
        </Text>
        <Text fontSize={FontSizes.Title5} fontWeight={FontWeights.Book}>
          {' '}
          Shown
        </Text>
      </div>
    </TotalRow>
  )
}
