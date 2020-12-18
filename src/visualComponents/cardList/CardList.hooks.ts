import { useEffect, useMemo, useState } from 'react'
import { flow } from 'fp-ts/lib/function'
import { O, pipe, RA } from '@monorail/sharedHelpers/fp-ts-imports'

import { useToggle } from '@monorail/helpers/hooks'
import { xor } from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArray'
import { elemLocaleLowerCase } from '@monorail/sharedHelpers/strings'
import {
  CardListCommonProps,
  CardListEditProps,
} from '@monorail/visualComponents/cardList/CardList'
import { RenderChoiceProps } from '@monorail/visualComponents/cardList/OptionsList'

export const useCardListForEditing = <A>(
  params: CardListCommonProps<A> & CardListEditProps<A>,
) => {
  const {
    allItems,
    eq,
    onChangeSelectedItems,
    toListItem,
    toSearchableStrings = flow(params.toListItem, item => [item.primaryText]),
    selectedItems,
  } = params
  const [searchValue, setSearchValue] = useState('')
  const [selectedItemsLocal, setSelectedItemsLocal] = useState<
    ReadonlyArray<A>
  >(selectedItems)

  const [isSearchOpen, openSearch, closeSearch] = useToggle(false)

  useEffect(() => {
    // @NOTE - Pete Murphy 2020-09-22 - Overwrite local state with parent state
    // when parent state changes. If we were mounting and unmounting the
    // "options list" when toggling the `isSearchOpen` state, this would be
    // covered by initializing `selectedItemsLocal` with `selectedItems`, but
    // since we're not, this is a sufficient approximation.
    setSelectedItemsLocal(selectedItems)
  }, [selectedItems])

  const isButtonDisabled = useMemo(
    () => RA.isEmpty(xor(eq)(selectedItemsLocal, selectedItems)),
    [eq, selectedItems, selectedItemsLocal],
  )

  const handleCancel = closeSearch

  const handleConfirm = () => {
    onChangeSelectedItems(selectedItemsLocal)
    closeSearch()
  }

  const handleToggleItem = (item: A) =>
    setSelectedItemsLocal(xor(eq)([item], selectedItemsLocal))

  const options = pipe(
    allItems,
    RA.filterMap<A, RenderChoiceProps<A>>(item =>
      toSearchableStrings(item).some(elemLocaleLowerCase(searchValue))
        ? O.some({
            item,
            type: 'checkbox',
            onChange: () => handleToggleItem(item),
            checked: RA.elem(eq)(item)(selectedItemsLocal),
            ...toListItem(item),
          })
        : O.none,
    ),
  )

  return {
    closeSearch,
    handleCancel,
    handleConfirm,
    isButtonDisabled,
    isSearchOpen,
    openSearch,
    options,
    searchValue,
    setSearchValue,
  } as const
}
