import React, { ChangeEvent, ReactElement } from 'react'
import ReactTable, { TableProps } from 'react-table'

import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import styled, { ThemeProvider } from '@monorail/helpers/styled-components'
import { ActionsContainer } from '@monorail/visualComponents/actions/Actions'
import {
  TableColumns,
  useSort,
} from '@monorail/visualComponents/dataTable/ReactTable'
import { Search, SearchProps } from '@monorail/visualComponents/inputs/Search'
import { SearchController } from '@monorail/visualComponents/inputs/SearchController'
import {
  PageHeader,
  PageHeaderProps,
} from '@monorail/visualComponents/pageHeader/PageHeader'

type Props<I> = Partial<TableProps<I>> & {
  actions?: PageHeaderProps['actions']
  title: PageHeaderProps['title']
  isLoading?: boolean
  searchProps?: {
    // TODO - show just use SearchProps
    onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
    value?: string
  }
}

const TableContainer = styled.div`
  ${flexFlow('row')};

  background: ${getColor(Colors.White)};
  flex: 1;
  overflow: hidden;
`

const SearchWrapper = styled.div`
  flex: 0 0 48px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: hsla(0, 0%, 99%, 1);
  border-bottom: 1px solid ${getColor(Colors.Grey90)};
`

export const TablePage = <T extends unknown>(
  props: Props<T>,
): ReactElement<Props<T>> => {
  const {
    actions,
    title,
    isLoading = false,
    searchProps,
    ...otherProps
  } = props

  const [sorted, onSortedChange] = useSort(otherProps.defaultSorted)

  return (
    <>
      <PageHeader
        title={title}
        actions={<ActionsContainer>{actions}</ActionsContainer>}
      />
      {searchProps !== undefined ? (
        <SearchWrapper>
          <Search {...searchProps} />
        </SearchWrapper>
      ) : null}
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
