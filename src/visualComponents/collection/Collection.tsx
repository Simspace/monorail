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
import { assertNever, isNil } from '@monorail/sharedHelpers/typeGuards'
import { StyledButton } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonsBarMode,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { ButtonsBar } from '@monorail/visualComponents/buttonsBar/ButtonsBar'
import { BBCardGrid } from '@monorail/visualComponents/cards/Cards'
import { EmptyTable } from '@monorail/visualComponents/dataStates/DataStates'
import {
  ComponentPropsGetterR,
  NoDataContainer,
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
} from '@monorail/visualComponents/dataTable/ReactTable'
import { DebouncedSearch } from '@monorail/visualComponents/inputs/DebouncedSearch'
import {
  CompareSearchType,
  SearchController,
} from '@monorail/visualComponents/inputs/SearchController'

const CollectionContainer = styled.div`
  ${flexFlow('row')};

  background: ${getColor(Colors.White)};
  flex: 1;
  overflow: hidden;
`

const ControlsContainer = styled.div`
  ${flexFlow('row')};

  align-items: center;
  background: ${getColor(Colors.Grey99)};
  height: 40px;
  margin-top: 4px;
  padding: 0 32px 0 30px; /* Button Bar has a 2px gap that we are making up here. */
`

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
  cardRender: (item: T) => ReactElement
  collectionView: CollectionView
  columns: TableColumns<T>
  data: TableProps<T>['data']
  isLoading?: boolean
  setCollectionView: (collectionView: CollectionView) => void
  pivotBy?: Array<string>
  NoDataComponent?: () => ReactElement
} & (SearchFilter<T> | SearchInput)

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
    NoDataComponent = () => (
      <NoDataContainer>
        <EmptyTable />
      </NoDataContainer>
    ),
  } = props

  const [sorted, onSortedChange] = useSort()

  const getReactTableComponentProps: ComponentPropsGetterR<T> = useCallback(
    (finalState, rowInfo) => {
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
            return cardRender(item)
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
      if (!isNil(item) && collectionView === CollectionView.Card) {
        return cardRender(item)
      }

      return <TrGroupComponent {...domProps}>{children}</TrGroupComponent>
    },
    [collectionView, cardRender],
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
        <ControlsContainer>
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
              pageSize={passedData.length}
              pivotBy={pivotBy}
              TbodyComponent={getTbodyComponent}
              TrComponent={getTrComponent}
              TrGroupComponent={getTrGroupComponent}
              NoDataComponent={NoDataComponent}
              TheadComponent={(
                theadProps: PropsWithChildren<TheadComponentProps>,
              ) => (
                <CollectionTheadComponent
                  collectionView={collectionView}
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
      columns,
      getReactTableComponentProps,
      getTbodyComponent,
      getTrComponent,
      getTrGroupComponent,
      isLoading,
      onSortedChange,
      setCollectionView,
      sorted,
      NoDataComponent,
      pivotBy,
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

const CollectionTheadComponent: FC<
  TheadComponentProps & { collectionView: CollectionView }
> = ({ style, collectionView, ...otherProps }) => {
  switch (collectionView) {
    case CollectionView.Card:
      return <TheadComponent {...otherProps} />
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

    color: ${getColor(Colors.Black74)};
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

const CollectionThComponent: FC<
  ThComponentProps & { collectionView: CollectionView }
> = ({ style, collectionView, ...otherProps }) => {
  switch (collectionView) {
    case CollectionView.Card:
      return <ThComponent css={thComponentOverrides} {...otherProps} />
    case CollectionView.Table:
      return <ThComponent style={style} {...otherProps} />
  }
}
