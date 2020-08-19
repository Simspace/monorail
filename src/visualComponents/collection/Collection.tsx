import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
} from 'react'
import ReactTable, { TableProps } from 'react-table'

import {
  basePrimaryStyles,
  baseSecondaryStyles,
} from '@monorail/helpers/baseStyles'
import { BorderRadius } from '@monorail/helpers/borderRadius'
import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import styled, { css, ThemeProvider } from '@monorail/helpers/styled-components'
import { ThemeColors } from '@monorail/helpers/theme'
import {
  assertNever,
  isNil,
  isNotNil,
} from '@monorail/sharedHelpers/typeGuards'
import { StyledButton } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonsBarMode,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { ButtonsBar } from '@monorail/visualComponents/buttonsBar/ButtonsBar'
import { BBCardGrid } from '@monorail/visualComponents/cards/Cards'
import {
  ComponentPropsGetterR,
  ResizerComponent,
  TableColumns,
  TBodyComponent,
  ThComponent,
  ThComponentProps,
  TheadComponent,
  TheadComponentContainer,
  TheadComponentProps,
  TrGroupComponent,
  useSort,
  NoDataComponentVertical,
} from '@monorail/visualComponents/dataTable/ReactTable'
import { DebouncedSearch } from '@monorail/visualComponents/inputs/DebouncedSearch'
import {
  CompareSearchType,
  SearchController,
} from '@monorail/visualComponents/inputs/SearchController'
import { CollectionPaginationComponent } from './CollectionPaginationComponent'
import { all } from '@monorail/sharedHelpers/fp-ts-ext/Array'

const CollectionContainer = styled.div`
  ${flexFlow('row')};

  background: ${getColor(Colors.White)};
  flex: 1;
  overflow: hidden;
`

const ControlsContainer = styled.div(
  ({ cardViewWithoutFilters }: { cardViewWithoutFilters: boolean }) => css`
    ${flexFlow('row')};

    align-items: center;
    background: ${getColor(Colors.Grey99)};
    height: 40px;
    margin-top: 4px;
    padding: 0 32px 0 30px; /* Button Bar has a 2px gap that we are making up here. */
    ${cardViewWithoutFilters
      ? `border-bottom: 1px solid ${getColor(Colors.Grey90)};`
      : null}
  `,
)

export enum CollectionView {
  Table = 'table',
  Card = 'card',
}

export type SearchFilterType<T> = (params: {
  item: T
  compareSearch: CompareSearchType
  value: string
}) => boolean

type ReactTableComponentProps<T> = {
  children: ReactElement
  item?: T
  style?: { [key: string]: number | string }
}

type ReactTableComponent<T> = (
  props: ReactTableComponentProps<T>,
) => ReactElement<ReactTableComponentProps<T>>

type SearchFilter<T> = {
  searchFilter: SearchFilterType<T>
}

type SearchInput = {
  searchInput: ReactNode
}

export type CollectionProps<T> = {
  // required
  collectionView: CollectionView
  columns: TableColumns<T>
  data: TableProps<T>['data']
  setCollectionView: (collectionView: CollectionView) => void
  // optional
  cardRender?: (item: T) => ReactElement
  filters?: Array<ReactElement>
  isLoading?: boolean
  NoDataComponent?: () => ReactElement
  PaginationComponent?: () => ReactElement
  pageSize?: number
  showPagination?: boolean
  pivotBy?: Array<string>
} & (SearchFilter<T> | SearchInput)

const PAGE_SIZE = 20

export const Collection = <T extends unknown>(
  props: CollectionProps<T>,
): ReactElement<CollectionProps<T>> => {
  const {
    cardRender,
    collectionView,
    columns,
    data,
    isLoading = false,
    pivotBy,
    setCollectionView,
    NoDataComponent = () => <NoDataComponentVertical />,
    PaginationComponent = CollectionPaginationComponent,
    pageSize = PAGE_SIZE,
    showPagination,
  } = props

  const [sorted, onSortedChange] = useSort()
  const getReactTableComponentProps: ComponentPropsGetterR<T> = useCallback(
    (_finalState, rowInfo) => {
      if (!isNil(rowInfo)) {
        return {
          item: rowInfo.original,
        }
      }

      return
    },
    [],
  )

  const getTrComponent: ReactTableComponent<T> = useCallback(
    ({ item, children }) => {
      if (!isNil(item)) {
        switch (collectionView) {
          case CollectionView.Card:
            return isNotNil(cardRender) ? cardRender(item) : children
          case CollectionView.Table:
            return children
          default:
            assertNever(collectionView)
            return children
        }
      }

      return children
    },
    [cardRender, collectionView],
  )

  const getTbodyComponent: ReactTableComponent<T> = useCallback(
    ({ children, ...domProps }) => {
      switch (collectionView) {
        case CollectionView.Card:
          return <BBCardGrid>{children}</BBCardGrid>
        case CollectionView.Table:
          return <TBodyComponent {...domProps}>{children}</TBodyComponent>
        default:
          assertNever(collectionView)
          return <></>
      }
    },
    [collectionView],
  )

  const getTrGroupComponent: ReactTableComponent<T> = useCallback(
    ({ item, children, ...domProps }) => {
      if (
        isNotNil(item) &&
        collectionView === CollectionView.Card &&
        isNotNil(cardRender)
      ) {
        return cardRender(item)
      }

      return <TrGroupComponent {...domProps}>{children}</TrGroupComponent>
    },
    [collectionView, cardRender],
  )

  const theadOnTableViewOnly = all(
    columns,
    column => column.filterable === false && column.sortable === false,
  )
  const renderCollection = useCallback(
    ({
      passedSearchInput,
      passedData,
    }: {
      passedSearchInput: ReactNode
      passedData: TableProps<T>['data']
    }) => (
      <>
        <ControlsContainer
          cardViewWithoutFilters={
            theadOnTableViewOnly && collectionView === CollectionView.Card
          }
        >
          {isNotNil(cardRender) && (
            <ButtonsBar size={ButtonSize.Default} mode={ButtonsBarMode.Toolbar}>
              <IconButton
                isActive={collectionView === CollectionView.Table}
                onClick={() => setCollectionView(CollectionView.Table)}
                icon="view_headline"
              />
              <IconButton
                isActive={collectionView === CollectionView.Card}
                onClick={() => setCollectionView(CollectionView.Card)}
                icon="view_module"
              />
            </ButtonsBar>
          )}

          <FilterContainer>{props.filters}</FilterContainer>
          {passedSearchInput}
        </ControlsContainer>

        <CollectionContainer>
          <ThemeProvider
            theme={theme => ({
              ...theme,
              size: { ...theme.size, table: { margin: 32 } },
            })}
          >
            <ReactTable<T>
              css={collectionView === CollectionView.Card ? theadOverrides : ''}
              sorted={sorted}
              onSortedChange={onSortedChange}
              columns={columns}
              data={passedData}
              getTrGroupProps={getReactTableComponentProps}
              getTrProps={getReactTableComponentProps}
              loading={isLoading}
              pageSize={pageSize}
              pivotBy={pivotBy}
              TbodyComponent={getTbodyComponent}
              TrComponent={getTrComponent}
              TrGroupComponent={getTrGroupComponent}
              showPagination={showPagination || passedData.length > pageSize}
              PaginationComponent={PaginationComponent}
              NoDataComponent={NoDataComponent}
              TheadComponent={(
                theadProps: PropsWithChildren<TheadComponentProps>,
              ) => (
                <CollectionTheadComponent
                  collectionView={collectionView}
                  tableViewOnly={theadOnTableViewOnly}
                  {...theadProps}
                />
              )}
              ThComponent={(thProps: PropsWithChildren<ThComponentProps>) => (
                <CollectionThComponent
                  collectionView={collectionView}
                  {...thProps}
                />
              )}
            />
          </ThemeProvider>
        </CollectionContainer>
      </>
    ),
    [
      collectionView,
      props.filters,
      sorted,
      onSortedChange,
      columns,
      getReactTableComponentProps,
      isLoading,
      pivotBy,
      getTbodyComponent,
      getTrComponent,
      getTrGroupComponent,
      NoDataComponent,
      setCollectionView,
      PaginationComponent,
      cardRender,
      pageSize,
      showPagination,
      theadOnTableViewOnly,
    ],
  )

  if ('searchInput' in props) {
    return renderCollection({
      passedSearchInput: props.searchInput,
      passedData: data,
    })
  } else if ('searchFilter' in props) {
    return (
      <SearchController>
        {({ compareSearch, value, onChange }) => {
          const filteredData = data.filter(item =>
            props.searchFilter({ item, compareSearch, value }),
          )

          return renderCollection({
            passedSearchInput: (
              <DebouncedSearch
                onChange={onChange}
                value={value}
                name={'collection-filter'}
                placeholder={`Search`}
                css={`
                  width: 256px;
                  margin: auto 0 auto auto;
                `}
              />
            ),
            passedData: filteredData,
          })
        }}
      </SearchController>
    )
  } else {
    throw new Error(
      'Need to pass searchInput or searchFilter prop to Collection.',
    )
  }
}

const theadOverrides = css`
  ${TheadComponentContainer} {
    ${flexFlow('row', 'wrap')};

    height: auto;
    min-height: 40px;
    padding: 4px 26px;
  }
`

const CollectionTheadComponent: FC<TheadComponentProps & {
  collectionView: CollectionView
  tableViewOnly: boolean
}> = ({ style, collectionView, tableViewOnly, ...otherProps }) => {
  switch (collectionView) {
    case CollectionView.Card:
      return tableViewOnly ? null : <TheadComponent {...otherProps} />
    case CollectionView.Table:
      return <TheadComponent style={style} {...otherProps} />
  }
}

const thComponentOverrides = css`
  width: auto;
  padding-right: 27px;

  &:first-of-type {
    padding-left: 6px;
  }

  ${ResizerComponent} {
    display: none;
  }

  ${StyledButton} {
    ${baseSecondaryStyles(ThemeColors.BrandSecondary)};

    color: ${getColor(Colors.Black74a)};
    border-radius: ${BorderRadius.Small}px 0 0 ${BorderRadius.Small}px;
    margin-top: 4px;
    margin-bottom: 4px;

    &.is-active {
      ${basePrimaryStyles(ThemeColors.BrandSecondary)}
    }

    &:last-of-type {
      border-radius: 0 ${BorderRadius.Small}px ${BorderRadius.Small}px 0;
      overflow: visible;
      transform: translateX(1px);
    }

    &:first-of-type {
      border-radius: ${BorderRadius.Small}px 0 0 ${BorderRadius.Small}px;
      overflow: hidden;
      transform: translateX(0);

      &::before {
        content: none;
      }
    }
  }
`

const CollectionThComponent: FC<ThComponentProps & {
  collectionView: CollectionView
}> = ({ style, collectionView, ...otherProps }) => {
  switch (collectionView) {
    case CollectionView.Card:
      return <ThComponent css={thComponentOverrides} {...otherProps} />
    case CollectionView.Table:
      return <ThComponent style={style} {...otherProps} />
  }
}

const FilterContainer = styled.section`
  ${flexFlow('row')}
  flex-grow: 1;
  justify-content: flex-end;
`
