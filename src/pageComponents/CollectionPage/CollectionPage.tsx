import React, { ReactElement } from 'react'

import { ActionsContainer } from '@monorail/visualComponents/actions/Actions'
import {
  Collection,
  CollectionProps,
} from '@monorail/visualComponents/collection/Collection'
import { CompareSearchType } from '@monorail/visualComponents/inputs/SearchController'
import {
  PageHeader,
  PageHeaderProps,
} from '@monorail/visualComponents/pageHeader/PageHeader'

export type SearchFilterType<T> = (params: {
  item: T
  compareSearch: CompareSearchType
  value: string
}) => boolean

type Props<I> = CollectionProps<I> & {
  actions?: PageHeaderProps['actions']
  title: PageHeaderProps['title']
}

export const CollectionPage = <T extends unknown>(
  props: Props<T>,
): ReactElement<Props<T>> => {
  const {
    actions,
    cardRender,
    collectionView,
    columns,
    data,
    filters,
    isLoading,
    pivotBy,
    setCollectionView,
    title,
    NoDataComponent,
    PaginationComponent,
    pageSize,
    showPagination,
  } = props

  const renderCollection = () => {
    if ('searchInput' in props) {
      return (
        <Collection<T>
          cardRender={cardRender}
          collectionView={collectionView}
          columns={columns}
          data={data}
          filters={filters}
          isLoading={isLoading}
          pivotBy={pivotBy}
          searchInput={props.searchInput}
          setCollectionView={setCollectionView}
          NoDataComponent={NoDataComponent}
          PaginationComponent={PaginationComponent}
          pageSize={pageSize}
          showPagination={showPagination}
        />
      )
    } else if ('searchFilter' in props) {
      return (
        <Collection<T>
          cardRender={cardRender}
          collectionView={collectionView}
          columns={columns}
          data={data}
          filters={filters}
          isLoading={isLoading}
          pivotBy={pivotBy}
          searchFilter={props.searchFilter}
          setCollectionView={setCollectionView}
          NoDataComponent={NoDataComponent}
          PaginationComponent={PaginationComponent}
          pageSize={pageSize}
          showPagination={showPagination}
        />
      )
    } else {
      throw new Error(
        'Need to pass searchInput or searchFilter prop to CollectionPage.',
      )
    }
  }

  return (
    <>
      <PageHeader
        title={title}
        actions={<ActionsContainer>{actions}</ActionsContainer>}
      />

      {renderCollection()}
    </>
  )
}
