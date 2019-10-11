import React, { ReactElement } from 'react'
import ReactTable, { TableProps } from 'react-table'

import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import styled, { ThemeProvider } from '@monorail/helpers/styled-components'
import { ActionsContainer } from '@monorail/visualComponents/actions/Actions'
import {
  TableColumns,
  useSort,
} from '@monorail/visualComponents/dataTable/ReactTable'
import {
  PageHeader,
  PageHeaderProps,
} from '@monorail/visualComponents/pageHeader/PageHeader'

type Props<I> = Partial<TableProps<I>> & {
  actions?: PageHeaderProps['actions']
  title: PageHeaderProps['title']
  isLoading?: boolean
}

const TableContainer = styled.div`
  ${flexFlow('row')};

  background: ${getColor(Colors.White)};
  flex: 1;
  overflow: hidden;
`

export const TablePage = <T extends unknown>(
  props: Props<T>,
): ReactElement<Props<T>> => {
  const { actions, title, isLoading = false, ...otherProps } = props

  const [sorted, onSortedChange] = useSort(otherProps.defaultSorted)

  return (
    <>
      <PageHeader
        title={title}
        actions={<ActionsContainer>{actions}</ActionsContainer>}
      />

      <TableContainer>
        <ThemeProvider
          theme={theme => ({
            ...theme,
            size: { ...theme.size, table: { margin: 32 } },
          })}
        >
          <ReactTable<T>
            {...otherProps}
            loading={isLoading}
            sorted={sorted}
            onSortedChange={onSortedChange}
          />
        </ThemeProvider>
      </TableContainer>
    </>
  )
}
