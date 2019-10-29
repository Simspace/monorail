import Downshift, {
  ControllerStateAndHelpers,
  DownshiftProps,
  DownshiftState,
  StateChangeOptions,
} from 'downshift'
import { Do } from 'fp-ts-contrib/lib/Do'
import { fromNullable, none, Option, option } from 'fp-ts/lib/Option'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { isUndefined } from 'util'

import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Nullable } from '@monorail/sharedHelpers/typeLevel'

import { DropdownItemValue, DropdownType } from './helpers'
import { DropdownParser } from './parsers'

export type StateReducer<T> = (
  state: DownshiftState<T>,
) => (changes: StateChangeOptions<T>) => StateChangeOptions<T>

export declare interface BehaviorController<T> {
  stateReducer: StateReducer<T>
  getItems: (text: string) => Array<T>
  downshiftProps?: Partial<DownshiftState<T> & DownshiftProps<T>>
}

export type BehaviorControllerHook<T> = (
  collection: Array<T>,
  parser: DropdownParser<T>,
) => BehaviorController<T>

export const useAsFilter = <T extends DropdownType>(
  collection: Array<T>,
  parser: DropdownParser<T>,
): BehaviorController<T> => {
  /** Filtered Items on search **/
  const getItems = useCallback(
    (text: string) =>
      !isEmptyString(text)
        ? collection.filter(parser.includes(text))
        : collection,
    [collection, parser],
  )

  const stateReducer: StateReducer<T> = () => changes => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
        return {
          ...changes,
          inputValue: '',
        }

      case Downshift.stateChangeTypes.changeInput:
        return {
          ...changes,
          isOpen: true,
        }

      default:
        return changes
    }
  }

  /** Handle keyboard input for Filter dropdown */
  const onInputChange = (
    inputValue: string,
    { selectedItem, setHighlightedIndex }: ControllerStateAndHelpers<T>,
  ) => {
    const items = getItems(inputValue)

    const selectedIndex = fromNullable(selectedItem)
      .map(item => items.indexOf(item))
      .filter(index => index >= 0)
      .getOrElse(items.findIndex(parser.isActive))

    setHighlightedIndex(selectedIndex, { isOpen: true })
  }

  /** Handle input text change */
  const onStateChange = (
    options: StateChangeOptions<T>,
    downshiftProps: ControllerStateAndHelpers<T>,
  ) => {
    switch (options.type) {
      case Downshift.stateChangeTypes.changeInput:
        if (!isUndefined(options.inputValue)) {
          onInputChange(options.inputValue || '', downshiftProps)
        }
        break

      default:
        break
    }
  }

  return {
    getItems,
    downshiftProps: { onStateChange },
    stateReducer,
  }
}

export const useAsSelect = <T extends DropdownType>(
  collection: Array<T>,
  parser: DropdownParser<T>,
): BehaviorController<T> => {
  /** Input text value **/
  // Only used for Non Searchable
  const [inputText, setInputText] = useState('')
  const [clearInputTextDebounced] = useDebouncedCallback(
    () => setInputText(''),
    750,
  )

  const updateInputText = (text: string) => {
    clearInputTextDebounced()
    setInputText(text)
  }

  const getReducedStateForSelect: StateReducer<T> = state => changes => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
        return {
          ...changes,
          inputValue: state.inputValue,
        }

      case Downshift.stateChangeTypes.changeInput:
        return {
          ...changes,
          isOpen: state.isOpen,
        }

      default:
        return changes
    }
  }

  const stateReducer: StateReducer<T> = state => changes => {
    const reducedState = getReducedStateForSelect(state)(changes)

    if (reducedState.inputValue) {
      updateInputText(reducedState.inputValue)
    }

    return reducedState
  }

  /** Handle keyboard input for Select dropdown */
  const getIndexByTextMatch = (text: string, items: Array<T>) => {
    const activeItems = items.filter(parser.isActive)

    const index = activeItems.findIndex(parser.includes(text))

    return index >= 0 && activeItems.length !== items.length
      ? items.indexOf(activeItems[index])
      : index
  }

  const onInputChange = (
    inputValue: string = '',
    downshiftProps: ControllerStateAndHelpers<T>,
  ) => {
    const { isOpen, setHighlightedIndex, selectItem } = downshiftProps
    if (!isEmptyString(inputValue)) {
      const index = getIndexByTextMatch(inputValue, collection)

      if (index >= 0) {
        if (isOpen) {
          setHighlightedIndex(index)
        } else {
          selectItem(collection[index], { inputValue })
        }
      }
    }
  }

  const onStateChange = (
    options: StateChangeOptions<T>,
    downshiftProps: ControllerStateAndHelpers<T>,
  ) => {
    switch (options.type) {
      case Downshift.stateChangeTypes.changeInput:
        if (!isUndefined(options.inputValue)) {
          onInputChange(options.inputValue || '', downshiftProps)
        }
        break

      default:
        break
    }
  }

  return {
    getItems: () => collection,
    downshiftProps: { onStateChange, inputValue: inputText },
    stateReducer,
  }
}

export const useControlledDropdown = <T extends DropdownType>(props: {
  value?: T | DropdownItemValue
  collection: Array<T>
  parser: DropdownParser<T>
}): [
  Option<T>,
  Dispatch<SetStateAction<Option<T>>>,
  (prevItem: Nullable<T>, item: Nullable<T>) => boolean,
] => {
  const { value, collection, parser } = props
  /** Selected Dropdown Item **/
  const [selectedItem, setSelectedItem] = useState<Option<T>>(none)

  const hasItemChanged = (prevItem: Option<T>, newItem: Option<T>) =>
    prevItem.alt(newItem).fold(false, () =>
      Do(option)
        .bind('a', prevItem)
        .bind('b', newItem)
        .return(({ a, b }) => !parser.compare(a)(b))
        .getOrElse(true),
    )

  const updateSelectedItem = (item: Option<T>) => {
    if (hasItemChanged(selectedItem, item)) {
      setSelectedItem(item)
    }
  }

  const compare = (prevItem: Nullable<T>, item: Nullable<T>) =>
    hasItemChanged(fromNullable(prevItem), fromNullable(item))

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const newValue = fromNullable(value)
    /*
     * We need to check if the value or
     * the selectedItem are in the collection.
     */
    const updatedItem = selectedItem
      .chain(item => newValue.filter(parser.compare(item)))
      .alt(newValue)
      .mapNullable(item => collection.find(parser.compare(item)))

    updateSelectedItem(updatedItem)
  }, [value, collection])
  /* eslint-enable react-hooks/exhaustive-deps */

  return [selectedItem, setSelectedItem, compare]
}
