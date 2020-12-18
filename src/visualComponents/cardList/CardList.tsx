import React, { ReactElement, ReactNode } from 'react'
import { Eq } from 'fp-ts/lib/Eq'
import { constVoid } from 'fp-ts/lib/function'
import * as RA from 'fp-ts/lib/ReadonlyArray'

import { Colors, flexFlow, getColor } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { Button } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import {
  renderDefaultEmptyState,
  renderDefaultOptionsList,
} from '@monorail/visualComponents/cardList/CardList.helpers'
import { useCardListForEditing } from '@monorail/visualComponents/cardList/CardList.hooks'
import { CardListSearchSection } from '@monorail/visualComponents/cardList/CardListSearchSection'
import { RenderChoiceProps } from '@monorail/visualComponents/cardList/OptionsList'
import { BBCardBackground } from '@monorail/visualComponents/cards/Cards'
import { Header, HeaderTitle } from '@monorail/visualComponents/header/Header'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'

const ListContainer = styled(ScrollAnimation)`
  padding-bottom: 4px;
`

const IconHeaderContainer = styled.div`
  ${flexFlow('row')}

  align-items: center;
`

export type CardListCommonProps<A> = {
  readonly selectedItems: ReadonlyArray<A>

  /**
   * Title to show in Header when in view mode
   */
  readonly headerTitle: ReactNode

  /**
   * Render an item as a row in the list of selected items
   */
  readonly renderSelectedItem: (item: A) => ReactElement

  /**
   * Render an empty state for the card content section
   */
  readonly renderEmptyState?: (params: {
    openSearch: () => void
    closeSearch: () => void
    isSearchOpen: boolean
  }) => ReactElement
}

export type CardListEditProps<A> = {
  readonly mode: 'edit'
  readonly allItems: ReadonlyArray<A>
  readonly onChangeSelectedItems: (value: ReadonlyArray<A>) => void

  /**
   * Title to show in Header when adding items (will default to `headerTitle`
   * prop if not provided)
   */
  readonly headerTitleAddingItemsMode?: ReactNode

  /**
   * Optional placeholder for search input
   */
  readonly searchPlaceholder?: string

  /**
   * Convert an item to an array of strings that can be matched on while
   * searching (defaults to using `primaryText` from `toListItem` prop)
   * NB: Search is *not* case-sensitive
   */
  readonly toSearchableStrings?: (item: A) => ReadonlyArray<string>

  /**
   * An `Eq` instance for distinguishing the subset of selected items from the
   * list of all items
   */
  readonly eq: Eq<A>

  readonly toListItem: (
    item: A,
  ) => { id: string; primaryText: string; secondaryText?: string }

  /**
   * Given the list of items converted to `RenderChoiceProps`, render as an
   * options list (defaults to `OptionsList` component)
   */
  readonly renderOptionsList?: (
    options: ReadonlyArray<RenderChoiceProps<A>>,
  ) => ReactElement
}

type CardListViewProps = {
  readonly mode: 'view'
}

export type CardListProps<A extends unknown> = CardListCommonProps<A> &
  (CardListEditProps<A> | CardListViewProps)

const CardListContentForEditing = <A extends unknown>(
  props: CardListCommonProps<A> & CardListEditProps<A>,
) => {
  const {
    headerTitle,
    headerTitleAddingItemsMode = headerTitle,
    renderEmptyState = renderDefaultEmptyState,
    renderOptionsList = renderDefaultOptionsList,
    renderSelectedItem,
    searchPlaceholder,
    selectedItems,
  } = props

  const {
    closeSearch,
    handleCancel,
    handleConfirm,
    isButtonDisabled,
    isSearchOpen,
    openSearch,
    options,
    searchValue,
    setSearchValue,
  } = useCardListForEditing(props)

  return (
    <>
      <Header
        cssHeaderRow={css`
          justify-content: space-between;
        `}
        title={
          isSearchOpen ? (
            <IconHeaderContainer>
              <IconButton
                display={ButtonDisplay.Chromeless}
                onClick={handleCancel}
                icon="circle_arrow_left"
                css={css`
                  color: ${getColor(Colors.BrandLightBlue)};
                  margin-right: 8px;

                  :hover {
                    color: ${getColor(Colors.BrandLightBlue, 0.88)};
                  }
                `}
              />
              <HeaderTitle>{headerTitleAddingItemsMode}</HeaderTitle>
            </IconHeaderContainer>
          ) : (
            headerTitle
          )
        }
        actions={
          isSearchOpen ? (
            <Button
              display={ButtonDisplay.Secondary}
              onClick={handleConfirm}
              disabled={isButtonDisabled}
            >
              Confirm
            </Button>
          ) : (
            <IconButton
              icon="add"
              display={ButtonDisplay.Chromeless}
              size={ButtonSize.Large}
              onClick={openSearch}
              css={css`
                color: ${getColor(Colors.BrandLightBlue)};

                :hover {
                  color: ${getColor(Colors.BrandLightBlue, 0.88)};
                }
              `}
            />
          )
        }
      />
      {isSearchOpen ? (
        <CardListSearchSection
          onSearchValueChange={setSearchValue}
          placeholder={searchPlaceholder}
          searchValue={searchValue}
        />
      ) : (
        <></>
      )}
      <ListContainer>
        {isSearchOpen
          ? renderOptionsList(options)
          : !RA.isEmpty(selectedItems)
          ? RA.map(renderSelectedItem)(selectedItems)
          : renderEmptyState({ isSearchOpen, openSearch, closeSearch })}
      </ListContainer>
    </>
  )
}

const CardListContentViewOnly = <A extends unknown>({
  headerTitle,
  renderSelectedItem,
  selectedItems,
  renderEmptyState = renderDefaultEmptyState,
}: CardListCommonProps<A> & CardListViewProps) => (
  <>
    <Header
      cssHeaderRow={css`
        justify-content: space-between;
      `}
      title={headerTitle}
    />
    <ListContainer>
      {!RA.isEmpty(selectedItems)
        ? RA.map(renderSelectedItem)(selectedItems)
        : renderEmptyState({
            openSearch: constVoid,
            closeSearch: constVoid,
            isSearchOpen: false,
          })}
    </ListContainer>
  </>
)

export const CardListContent = <A extends unknown>(props: CardListProps<A>) =>
  props.mode === 'edit' ? (
    <CardListContentForEditing {...props} />
  ) : (
    <CardListContentViewOnly {...props} />
  )

/**
 * @NOTE - Pete Murphy 2020-09-22 - Keeping this "wrapper" component separate in
 * case caller wants to, e.g., render a loading spinner inside while waiting for
 * `CardListProps` to resolve:
 *
 * @example
 * ```tsx
 * <CardListWrapper>
 *   {remoteLoadingFold(itemsRemoteData, items =>
 *     <CardListContent<ItemType>
 *       // ...
 *     />
 *   )}
 * </CardListWrapper>
 * ```
 */
export const CardListWrapper = styled(BBCardBackground)`
  height: 240px;
  width: 256px;
`

export const CardList = <A extends unknown>(props: CardListProps<A>) => (
  <CardListWrapper>
    <CardListContent {...props} />
  </CardListWrapper>
)
