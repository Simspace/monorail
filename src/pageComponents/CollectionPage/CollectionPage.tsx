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
    searchFilter,
    setCollectionView,
    tileRender,
    title,
  } = props

  return (
    <>
      <PageHeader
        title={title}
        actions={<ActionsContainer>{actions}</ActionsContainer>}
      />

      <Collection<T>
        cardRender={cardRender}
        collectionView={collectionView}
        columns={columns}
        data={data}
        searchFilter={searchFilter}
        setCollectionView={setCollectionView}
        tileRender={tileRender}
      />
    </>
  )
}
