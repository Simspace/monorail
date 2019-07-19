import React, { ReactElement } from 'react'
import ReactTable, { TableProps } from 'react-table'

import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import styled from '@monorail/helpers/styled-components'
import { assertNever, isNil } from '@monorail/sharedHelpers/typeGuards'
import {
  ButtonsBarMode,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { ButtonsBar } from '@monorail/visualComponents/buttonsBar/ButtonsBar'
import { BBCardGrid } from '@monorail/visualComponents/cards/Cards'
import {
  ComponentPropsGetterR,
  TableColumns,
  TBodyComponent,
  TrGroupComponent,
} from '@monorail/visualComponents/dataTable/ReactTable'
import { Search } from '@monorail/visualComponents/inputs/Search'
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
}) => boolean

type ReactTableComponentProps<T> = {
  children: ReactElement
  item?: T
}

type ReactTableComponent<T> = (
  props: ReactTableComponentProps<T>,
) => ReactElement<ReactTableComponentProps<T>>

export type CollectionProps<I> = {
  cardRender: (item: I) => ReactElement
  columns: TableColumns<I>
  data: TableProps<I>['data']
  searchFilter: SearchFilterType<I>
  collectionView: CollectionView
  setCollectionView: (collectionView: CollectionView) => void
}

export const Collection = <T extends unknown>(
  props: CollectionProps<T>,
): ReactElement<CollectionProps<T>> => {
  const {
    cardRender,
    columns,
    data,
    searchFilter,
    collectionView,
    setCollectionView,
  } = props

  const getReactTableComponentProps: ComponentPropsGetterR<T> = (
    finalState,
    rowInfo,
  ) => {
    if (!isNil(rowInfo)) {
      return {
        item: rowInfo.original,
      }
    }

    return
  }

  const getTrComponent: ReactTableComponent<T> = ({ item, children }) => {
    if (!isNil(item)) {
      switch (collectionView) {
        case CollectionView.Card:
          return cardRender(item)
        case CollectionView.Table:
          return children
        default:
          assertNever(collectionView)
          return <></>
      }
    }

    return children
  }

  const getTbodyComponent: ReactTableComponent<T> = ({
    children,
    ...domProps
  }) => {
    switch (collectionView) {
      case CollectionView.Card:
        return <BBCardGrid>{children}</BBCardGrid>
      case CollectionView.Table:
        return <TBodyComponent {...domProps}>{children}</TBodyComponent>
      default:
        assertNever(collectionView)
        return <></>
    }
  }

  const getTrGroupComponent: ReactTableComponent<T> = ({
    item,
    children,
    ...domProps
  }) => {
    if (!isNil(item) && collectionView === CollectionView.Card) {
      return cardRender(item)
    }

    return <TrGroupComponent {...domProps}>{children}</TrGroupComponent>
  }

  return (
    <SearchController>
      {({ compareSearch, value, onChange }) => {
        const filteredData = data.filter(item =>
          searchFilter({ item, compareSearch }),
        )
        return (
          <>
            <ControlsContainer>
              <ButtonsBar
                size={ButtonSize.Default}
                mode={ButtonsBarMode.Toolbar}
              >
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

              <Search
                onChange={onChange}
                value={value}
                css={`
                  width: 256px;
                  margin: auto 0 auto auto;
                `}
              />
            </ControlsContainer>

            <CollectionContainer>
              <ReactTable<T>
                columns={columns}
                data={filteredData}
                getTrGroupProps={getReactTableComponentProps}
                getTrProps={getReactTableComponentProps}
                TbodyComponent={getTbodyComponent}
                TrComponent={getTrComponent}
                TrGroupComponent={getTrGroupComponent}
                pageSize={filteredData.length}
              />
            </CollectionContainer>
          </>
        )
      }}
    </SearchController>
  )
}
