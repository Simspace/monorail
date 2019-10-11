import Downshift, {
  ControllerStateAndHelpers,
  DownshiftState,
  GetInputPropsOptions,
  PropGetters,
  StateChangeOptions,
} from 'downshift'
import { Do } from 'fp-ts-contrib/lib/Do'
import { fromNullable, none, option, Option, some } from 'fp-ts/lib/Option'
import React, {
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'

import {
  baseDisabledStyles,
  baseErrorBackgroundStyles,
  baseErrorBorderStyles,
  BorderRadius,
  borderRadius,
  flexFlow,
  FontSizes,
  typography,
  visible,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  defaultPopOverPosition,
  getOverlayPosition,
} from '@monorail/metaComponents/popOver/PopOver'
import { Portal } from '@monorail/metaComponents/portal/Portal'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { DropdownItem } from '@monorail/visualComponents/dropdown/DropdownItem'
import {
  DropdownItemType,
  DropdownItemValue,
  getHighlightedItem,
  nextHighlightedIndex,
  parseAsDropdownItem,
} from '@monorail/visualComponents/dropdown/helpers'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr'
import {
  TextField,
  TextFieldProps,
} from '@monorail/visualComponents/inputs/TextField'
import { Menu, MenuContent } from '@monorail/visualComponents/menu/Menu'

export type RenderItemProps<D> = {
  item: D
  selected: boolean
  highlighted: boolean
}
export type RenderHandlerProps<D> = {
  item: D | null
  placeholder: string
  isOpen: boolean
  disabled: boolean
}
export type DropdownChangeHandler<D> = (
  item?: D,
  downshiftProps?: ControllerStateAndHelpers<D>,
) => void

export type DropdownProps<D = DropdownItemType> = CommonComponentType &
  ErrorProps & {
    itemToDropdownType?: (item: D) => DropdownItemType
    renderItem?: (props: RenderItemProps<D>) => ReactElement
    renderHandler?: (props: RenderHandlerProps<D>) => ReactElement
    items: Array<D>
    matchItem?: (item: D, text: string) => boolean
    value?: DropdownItemValue
    onChange?: DropdownChangeHandler<D>
    document?: Document
    placeholder?: string
    disabled?: boolean
    searchable?: boolean
  }

const DropdownContainer = styled.div<CommonComponentType>`
  ${typography(400, FontSizes.Title5)};

  position: relative;
  width: 256px;
  max-width: 100%;
`

type RootContainerProps = CommonComponentType & {
  disabled: boolean
}

const RootContainer = styled.div<RootContainerProps>(
  ({ disabled }) => css`
    ${borderRadius(BorderRadius.Large)};
    ${flexFlow('row')};
    ${typography(400, FontSizes.Title5)};

    margin: auto;
    position: relative;

    ${disabled && baseDisabledStyles}
  `,
)

const TextFieldStyles = (
  searching: boolean = false,
  err: boolean = false,
) => css`
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;

  input {
    ${err && baseErrorBackgroundStyles}
    ${err && baseErrorBorderStyles}
    ${!searching && 'text-indent: -100vw;'};

    border-radius: inherit;
    cursor: pointer;
  }

  ${Icon} {
    bottom: 50%;
    margin-bottom: -0.5em;
  }
`

const HandlerContainer = styled.div<CommonComponentType>`
  border-radius: inherit;
  display: block;
  pointer-events: auto;
  position: relative;
  width: 100%;
`

const MenuContainer = styled.div<CommonComponentType>`
  height: 100%;
  overflow: auto;
`

const ItemContainer = styled.div<CommonComponentType>``

const Handler = styled.div<CommonComponentType>`
  min-height: 1rem;
  padding: 4px 30px 4px 8px;
  pointer-events: none;
  position: relative;
`

/** Partial definitions to Solve Downshift typing */
type DownshiftGetInputProps = GetInputPropsOptions & Partial<TextFieldProps>
type DownshiftRootPropsGetter<D> = PropGetters<D>['getRootProps']
type DownshiftItemPropsGetter<D> = PropGetters<D>['getItemProps']
type DownshiftMenuPropsGetter<D> = PropGetters<D>['getMenuProps']
type DownshiftKeyboardEvent = KeyboardEvent & {
  preventDownshiftDefault?: boolean
}

export const Dropdown = <D extends unknown = DropdownItemType>({
  searchable = false,
  placeholder = '...',
  disabled = false,
  items: collection,
  value,
  onChange,
  itemToDropdownType,
  matchItem,
  renderHandler,
  renderItem,
  err,
  ...domProps
}: DropdownProps<D>): ReactElement<DropdownProps<D>> => {
  const [inputText, setInputText] = useState('')
  const [menuTarget, setMenuTarget] = useState<HTMLDivElement>()

  const [clearInputTextDebounced] = useDebouncedCallback(
    () => setInputText(''),
    750,
  )

  const inputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const getDropdownItem = useCallback(
    (item: D) =>
      itemToDropdownType ? itemToDropdownType(item) : parseAsDropdownItem(item),
    [itemToDropdownType],
  )

  const dropdownItemToString = (item: D) => getDropdownItem(item).label

  const matchItemByLabel = useCallback(
    (item: D, text: string): boolean => {
      const itemProps = getDropdownItem(item)
      const label = itemProps.label.trim().toLowerCase()

      return label.includes(text.trim().toLowerCase())
    },
    [getDropdownItem],
  )

  const matchItemCallback = useCallback(
    (text: string) => (item: D) => (matchItem || matchItemByLabel)(item, text),
    [matchItem, matchItemByLabel],
  )

  const filteredItems = useMemo(
    () =>
      searchable ? collection.filter(matchItemCallback(inputText)) : collection,
    [searchable, collection, inputText, matchItemCallback],
  )

  const [selectedDropdownItem, setSelectedDropdownItem] = useState<Option<D>>(
    none,
  )

  const shouldUpdateSelectedItem = (item: Option<D>) =>
    Do(option)
      .bind('newItem', item)
      .bind('currentItem', selectedDropdownItem)
      .return(
        ({ newItem, currentItem }) =>
          getDropdownItem(newItem).value !== getDropdownItem(currentItem).value,
      )
      .getOrElse(true)

  const updateSelectedItem: DropdownChangeHandler<D> = (
    item,
    downshiftProps,
  ) => {
    const itemOption = fromNullable(item)

    if (shouldUpdateSelectedItem(itemOption)) {
      setSelectedDropdownItem(itemOption)

      if (onChange) {
        onChange(item, downshiftProps)
      }
    }
  }

  const updateInputText = (text: string) => {
    if (text !== inputText) {
      setInputText(text)
    }
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    /*
     * We need to check if the value is in the collection,
     * or if the selectedItem is in the collection.
     */

    const updatedItem = some(value)
      .alt(selectedDropdownItem.map(item => getDropdownItem(item).value))
      .mapNullable(val =>
        collection.find(item => getDropdownItem(item).value === val),
      )

    if (shouldUpdateSelectedItem(updatedItem)) {
      setSelectedDropdownItem(updatedItem)
    }
  }, [value, collection])

  useLayoutEffect(() => {
    if (menuRef && menuRef.current) {
      setMenuTarget(menuRef.current)
    }
  }, [menuRef.current])
  /* eslint-enable react-hooks/exhaustive-deps */

  // Item handling
  const isActiveItem = (item: D) => !getDropdownItem(item).disabled

  /** Handle keyboard input for non search dropdown */
  const setFilterHighlighted = ({
    setHighlightedIndex,
  }: ControllerStateAndHelpers<D>) => {
    const items = filteredItems
    const selectedIndex = selectedDropdownItem
      .map(item => items.indexOf(item))
      .getOrElse(-1)

    setHighlightedIndex(
      selectedIndex >= 0 ? selectedIndex : items.findIndex(isActiveItem),
    )
  }

  const getIndexToHighlight = (textValue: string, items: Array<D>) => {
    const activeItems = items.filter(isActiveItem)

    const index = activeItems.findIndex(matchItemCallback(textValue))

    return index >= 0 && activeItems.length !== items.length
      ? items.indexOf(activeItems[index])
      : index
  }

  const setSelectHighlighted = (
    inputValue: string,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    const { isOpen, setHighlightedIndex } = downshiftProps
    if (!isEmptyString(inputValue)) {
      const index = getIndexToHighlight(inputValue, collection)

      if (index >= 0) {
        if (isOpen) {
          setHighlightedIndex(index)
        } else {
          updateSelectedItem(collection[index], downshiftProps)
        }
      }
    }
  }

  const onSearchInputChange = (
    inputValue: string = '',
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    if (searchable) {
      setFilterHighlighted(downshiftProps)
    } else {
      clearInputTextDebounced()
      setSelectHighlighted(inputValue, downshiftProps)
    }
  }

  // Downshift state reducer
  const stateReducer = (
    state: DownshiftState<D>,
    changes: StateChangeOptions<D>,
  ) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.clickButton:
      case Downshift.stateChangeTypes.keyDownEnter:
        return {
          ...changes,
          inputValue: '',
        }
      case Downshift.stateChangeTypes.keyDownEscape:
      case Downshift.stateChangeTypes.blurInput:
      case Downshift.stateChangeTypes.mouseUp:
        return { inputValue: '', isOpen: false }

      case Downshift.stateChangeTypes.changeInput:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: searchable || state.isOpen,
        }

      default:
        return changes
    }
  }

  // Keyboard event handling and interaction
  const cursorInteraction = (
    key: string,
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    const { isOpen, setHighlightedIndex, selectItem } = downshiftProps

    const activeItems = items.filter(isActiveItem)

    const indexValue = nextHighlightedIndex(
      key,
      getHighlightedItem(items, downshiftProps)
        .alt(selectedDropdownItem)
        .fold(-1, item => activeItems.indexOf(item)),
      activeItems.length - 1,
    )

    if (isOpen) {
      setHighlightedIndex(items.indexOf(activeItems[indexValue]))
    } else {
      selectItem(activeItems[indexValue], {
        inputValue: '',
        isOpen: false,
      })
    }
  }

  const onKeyDownHandler = (
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => (event: DownshiftKeyboardEvent) => {
    const { isOpen, selectHighlightedItem, toggleMenu } = downshiftProps

    switch (event.key) {
      case 'Enter':
        if (isOpen) {
          selectHighlightedItem({ inputValue: '' })
        } else {
          toggleMenu({
            type: Downshift.stateChangeTypes.keyDownEnter,
            highlightedIndex: selectedDropdownItem.fold(-1, item =>
              items.indexOf(item),
            ),
          })
          event.preventDownshiftDefault = true
        }
        break
      case 'Home':
      case 'End':
      case 'PageDown':
      case 'PageUp':
      case 'ArrowUp':
      case 'ArrowDown':
        // Update Highlighted item
        cursorInteraction(event.key, items, downshiftProps)
        event.preventDownshiftDefault = true
        event.preventDefault()
        break
      default:
        return
    }
  }

  const renderDefaultHandler = (downshiftProps: ControllerStateAndHelpers<D>) =>
    selectedDropdownItem.fold(placeholder, downshiftProps.itemToString)

  const renderHandlerNode = (
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ): ReactNode => {
    const { getInputProps, isOpen, toggleMenu, inputValue } = downshiftProps

    const searching = isOpen && searchable && !isEmptyString(inputValue)

    const inputProps: DownshiftGetInputProps = {
      disabled,
      placeholder,
      onKeyDown: onKeyDownHandler(items, downshiftProps),
      onClick: () =>
        toggleMenu({
          type: Downshift.stateChangeTypes.clickButton,
          highlightedIndex: selectedDropdownItem.fold(-1, item =>
            items.indexOf(item),
          ),
        }),
    }

    return (
      <HandlerContainer ref={menuRef}>
        <TextField
          css={TextFieldStyles(searching, err)}
          {...getInputProps(inputProps)}
          disabled={disabled}
          iconLeft={searching ? 'search' : ''}
          iconRight={!searching ? 'arrow_drop_down' : ''}
          ref={inputRef}
          hideStdErr
        />
        <Handler css={visible(!searching)}>
          {renderHandler
            ? renderHandler({
                item: selectedDropdownItem.toNullable(),
                placeholder,
                isOpen,
                disabled,
              })
            : renderDefaultHandler(downshiftProps)}
        </Handler>
      </HandlerContainer>
    )
  }

  const renderDefaultItem = (
    props: RenderItemProps<DropdownItemType>,
  ): ReactElement => (
    <DropdownItem
      selected={props.selected}
      highlighted={props.highlighted}
      disabled={props.item.disabled}
    >
      {props.item.label}
    </DropdownItem>
  )

  const RenderItemsList = ({
    items,
    downshiftProps,
  }: {
    items: Array<D>
    downshiftProps: ControllerStateAndHelpers<D>
  }): ReactElement => {
    const { getItemProps, highlightedIndex } = downshiftProps

    const renderList = useCallback(
      () =>
        items.map((item: D, index: number) => {
          const dropdownItem = getDropdownItem(item)
          const itemProps = getItemProps({
            item,
            index,
            key: `item-${index}`,
            disabled: dropdownItem.disabled,
          }) as DownshiftItemPropsGetter<D>

          const isSelected = selectedDropdownItem.exists(
            selected => selected === item,
          )

          return (
            <ItemContainer {...itemProps}>
              {renderItem
                ? renderItem({
                    item,
                    selected: isSelected,
                    highlighted: highlightedIndex === index,
                  })
                : renderDefaultItem({
                    item: dropdownItem,
                    selected: isSelected,
                    highlighted: highlightedIndex === index,
                  })}
            </ItemContainer>
          )
        }),
      [items, highlightedIndex, getItemProps],
    )

    return <>{renderList()}</>
  }

  const renderMenu = (
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    const { isOpen, getMenuProps, toggleMenu } = downshiftProps

    const menuProps = getMenuProps() as DownshiftMenuPropsGetter<D>
    const position = menuTarget
      ? getOverlayPosition({ target: menuTarget })
      : defaultPopOverPosition
    const width = menuTarget ? menuTarget.getBoundingClientRect().width : 0

    return (
      <Portal document={document}>
        <Menu
          css={css`
            ${MenuContent} {
              padding: 0;
            }
          `}
          isOpen={isOpen}
          position={position}
          togglePopOver={() =>
            toggleMenu({ type: Downshift.stateChangeTypes.keyDownEscape })
          }
          width={width}
        >
          <MenuContainer {...menuProps}>
            {isOpen ? (
              items.length > 0 ? (
                <RenderItemsList
                  items={items}
                  downshiftProps={downshiftProps}
                />
              ) : (
                <DropdownItem selected={false} highlighted={false} disabled>
                  No results
                </DropdownItem>
              )
            ) : (
              <></>
            )}
          </MenuContainer>
        </Menu>
      </Portal>
    )
  }

  const onStateChange = (
    options: StateChangeOptions<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    switch (options.type) {
      case Downshift.stateChangeTypes.changeInput:
        if (options.inputValue) {
          onSearchInputChange(options.inputValue, downshiftProps)
        }
        break

      default:
        break
    }
  }

  return (
    <DropdownContainer {...domProps}>
      <Downshift
        initialSelectedItem={selectedDropdownItem.toNullable()}
        inputValue={inputText}
        itemToString={dropdownItemToString}
        onChange={updateSelectedItem}
        stateReducer={stateReducer}
        onInputValueChange={updateInputText}
        onStateChange={onStateChange}
      >
        {(downshiftProps: ControllerStateAndHelpers<D>) => {
          const { getRootProps } = downshiftProps
          const items = filteredItems

          return (
            <RootContainer
              {...(getRootProps() as DownshiftRootPropsGetter<D>)}
              disabled={disabled}
            >
              {renderHandlerNode(items, downshiftProps)}
              {!disabled && renderMenu(items, downshiftProps)}
            </RootContainer>
          )
        }}
      </Downshift>
    </DropdownContainer>
  )
}
