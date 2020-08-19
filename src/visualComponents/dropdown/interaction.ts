import Downshift from 'downshift'
import { lookup } from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { StateReducer } from './behavior'
import {
  DownshiftKeyboardEvent,
  DropdownStateType,
  DropdownType,
  nextHighlightedIndex,
} from './helpers'
import { DropdownParser } from './parsers'

export declare interface InteractionController<T> {
  eventHandler: (
    props: DropdownStateType<T>,
  ) => (event: DownshiftKeyboardEvent) => void
  stateReducer: StateReducer<T>
}

export type KeyboardInteractionHook<T> = (
  parser: DropdownParser<T>,
) => InteractionController<T>

export const useKeyboardInteraction = <T extends DropdownType>(options?: {
  openOnInteraction: boolean
}) => (parser: DropdownParser<T>): InteractionController<T> => {
  const { openOnInteraction = false } = options || {}

  const stateReducer: StateReducer<T> = state => changes => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
        return {
          ...changes,
          inputValue: '',
        }

      case Downshift.stateChangeTypes.keyDownEscape:
      case Downshift.stateChangeTypes.blurInput:
        return { type: changes.type, inputValue: '', isOpen: false }

      case Downshift.stateChangeTypes.changeInput:
        return {
          ...changes,
          isOpen: changes.isOpen || state.isOpen || openOnInteraction,
          highlightedIndex: state.highlightedIndex,
        }

      default:
        return changes
    }
  }

  // Keyboard event handling and interaction
  const cursorInteraction = (key: string, state: DropdownStateType<T>) => {
    const { items, downshiftProps } = state
    const {
      highlightedIndex,
      isOpen,
      setHighlightedIndex,
      selectItem,
      selectedItem,
    } = downshiftProps

    const activeItems = items.filter(parser.isActive)

    const initialIndex = pipe(
      O.fromNullable(highlightedIndex),
      O.chain(index => lookup(index, items)),
      O.alt<T>(() => O.fromNullable(selectedItem)),
      O.fold(
        () => -1,
        item => activeItems.indexOf(item),
      ),
    )

    const indexValue = nextHighlightedIndex(
      key,
      initialIndex,
      activeItems.length - 1,
    )

    if (isOpen || openOnInteraction) {
      setHighlightedIndex(items.indexOf(activeItems[indexValue]), {
        isOpen: true,
      })
    } else {
      selectItem(activeItems[indexValue], {
        inputValue: '',
        isOpen: false,
      })
    }
  }

  const eventHandler = (state: DropdownStateType<T>) => (
    event: DownshiftKeyboardEvent,
  ) => {
    const { items, downshiftProps } = state
    const {
      isOpen,
      selectedItem,
      selectHighlightedItem,
      toggleMenu,
    } = downshiftProps

    switch (event.key) {
      case 'Enter':
        if (isOpen) {
          selectHighlightedItem({ inputValue: '' })
        } else {
          toggleMenu({
            type: Downshift.stateChangeTypes.keyDownEnter,
            highlightedIndex: pipe(
              O.fromNullable(selectedItem),
              O.fold(
                () => -1,
                item => items.indexOf(item),
              ),
            ),
          })
        }
        event.preventDownshiftDefault = true
        event.preventDefault()
        break
      case 'Home':
      case 'End':
      case 'PageDown':
      case 'PageUp':
      case 'ArrowUp':
      case 'ArrowDown':
        // Update Highlighted item
        cursorInteraction(event.key, state)
        event.preventDownshiftDefault = true
        event.preventDefault()
        break
      default:
        return
    }
  }

  return { eventHandler, stateReducer }
}
