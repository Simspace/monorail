import Downshift, {
  ControllerStateAndHelpers,
  DownshiftState,
  GetInputPropsOptions,
  PropGetters,
  StateChangeOptions,
} from 'downshift'
import React, { Component, createRef, KeyboardEvent, ReactNode } from 'react'

import {
  baseDisabledStyles,
  BorderRadius,
  borderRadius,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
  visible,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  defaultPopOverPosition,
  getOverlayPosition,
} from '@monorail/metaComponents/popOver/PopOver'
import { Portal } from '@monorail/metaComponents/portal/Portal'
import {
  hasKey,
  isEmptyString,
  isNil,
  isNumber,
  isTrue,
} from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import {
  TextField,
  TextFieldProps,
} from '@monorail/visualComponents/inputs/TextField'
import { Menu, MenuContent } from '@monorail/visualComponents/menu/Menu'

export type DropdownItemValue = string | number | object | undefined

export type DropdownItemType = {
  value: DropdownItemValue
  label: string
  disabled?: boolean
}

// DropdownItemType Typeguard
export const isDropdownItem = (item: unknown) =>
  hasKey(item, 'value') && hasKey(item, 'label')

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

export type DropdownProps<D = DropdownItemType> = CommonComponentType & {
  itemToDropdownType?: (item: D) => DropdownItemType
  renderItem?: (props: RenderItemProps<D>) => ReactNode
  renderHandler?: (props: RenderHandlerProps<D>) => ReactNode
  items: Array<D>
  matchItem?: (item: D, text: string) => boolean
  value?: DropdownItemValue
  onChange?: (item?: D) => void
  document?: Document
  placeholder: string
  disabled: boolean
  searchable: boolean
}

const DropdownContainer = styled.div<CommonComponentType>`
  ${typography(400, FontSizes.Title5)};

  position: relative;
  width: 100%;
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

const TextFieldStyles = (searching: boolean = false) => css`
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  input {
    ${!searching && 'text-indent: -100vw;'}
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

type StyledItemProps = {
  selected: boolean
  highlighted: boolean
  disabled?: boolean
}

export const Item = styled.div<StyledItemProps>(
  ({ selected, highlighted, disabled }) => css`
    position: relative;
    cursor: pointer;
    display: block;
    text-align: left;
    line-height: 1em;
    font-size: 11px;
    padding: 8px;

    ${disabled
      ? css`
          cursor: default;
          opacity: 0.24;
        `
      : css`
          ${highlighted &&
            css`
              background: ${getColor(Colors.Black24, 0.16)};
            `};
          ${selected &&
            css`
              background: ${getColor(Colors.BrandLightBlue, 0.2)};
            `};

          ${highlighted &&
            selected &&
            css`
              background: ${getColor(Colors.BrandLightBlue, 0.24)};
            `};
        `};
  `,
)

const getKeyboardMoveDelta = (key: string) => {
  switch (key) {
    case 'ArrowLeft':
    case 'PageUp':
      return -10
    case 'ArrowRight':
    case 'PageDown':
      return 10
    case 'ArrowUp':
      return -1
    case 'ArrowDown':
      return 1
    default:
      return 0
  }
}
const getKeyboardMoveIndex = (key: string, initial: number, max: number) => {
  switch (key) {
    case 'Home':
      return 0
    case 'End':
      return max
    default:
      return initial + getKeyboardMoveDelta(key)
  }
}

const getNewHighlightedIndex = (key: string, initial: number, max: number) => {
  const index = getKeyboardMoveIndex(key, initial, max)

  return index < 0 ? 0 : index >= max ? max : index
}

const getMenuWidth = (element: HTMLDivElement) => {
  return element.getBoundingClientRect().width
}

/** Partial definitions to Solve Downshift typing */
type DownshiftGetInputProps = GetInputPropsOptions & Partial<TextFieldProps>
type DownshiftRootPropsGetter<D> = PropGetters<D>['getRootProps']
type DownshiftItemPropsGetter<D> = PropGetters<D>['getItemProps']
type DownshiftMenuPropsGetter<D> = PropGetters<D>['getMenuProps']
type DownshiftKeyboardEvent = KeyboardEvent & {
  preventDownshiftDefault?: boolean
}

type DropdownState = {
  keyboardEventTime: number
}

export class Dropdown<D = DropdownItemType> extends Component<
  DropdownProps<D>,
  DropdownState
> {
  static defaultProps = {
    placeholder: '...',
    disabled: false,
    searchable: true,
  }

  state: DropdownState = {
    keyboardEventTime: 0,
  }

  inputRef = createRef<TextField>()
  menuRef = createRef<HTMLDivElement>()

  // Item handling
  getItemByValue = () => {
    const { items, value } = this.props
    return items.find(item => this.getDropdownItem(item).value === value)
  }

  getDropdownItem = (item: unknown): DropdownItemType => {
    const { itemToDropdownType } = this.props
    if (item) {
      if (itemToDropdownType) {
        return itemToDropdownType(item as D)
      } else if (isDropdownItem(item)) {
        return item as DropdownItemType
      }
    }

    return {
      value: String(item),
      label: String(item),
      disabled: false,
    }
  }

  isActiveItem = (item: D) => !this.getDropdownItem(item).disabled

  matchItemByLabel = (item: D, text: string): boolean => {
    const itemProps = this.getDropdownItem(item)
    const label = itemProps.label.trim().toLowerCase()

    return label.indexOf(text.trim().toLowerCase()) === 0
  }

  matchItem = (text: string) => (item: D) =>
    (this.props.matchItem || this.matchItemByLabel)(item, text)

  getItems = (text: string = '') => {
    const { items, searchable } = this.props
    return searchable && !isEmptyString(text)
      ? items.filter(this.matchItem(text))
      : items
  }

  /** Handle keyboard input for non search dropdown */
  getIndexToHighlight = (textValue: string, items: Array<D>) => {
    const activeItems = items.filter(this.isActiveItem)

    const activeIndex = activeItems.findIndex(item =>
      this.matchItemByLabel(item, textValue),
    )

    return activeIndex >= 0 && activeItems.length !== items.length
      ? items.indexOf(activeItems[activeIndex])
      : activeIndex
  }

  handleNonSearchInputChange = (
    state: DownshiftState<D>,
    changes: StateChangeOptions<D>,
  ) => {
    const { keyboardEventTime } = this.state
    const eventTime = Date.now()
    const timeout = eventTime - keyboardEventTime > 750

    // Debounce key interaction
    const textValue = changes.inputValue
      ? changes.inputValue.slice(timeout ? -1 : 0)
      : ''

    const newChanges = {
      ...changes,
      isOpen: state.isOpen,
      inputValue: textValue,
    }

    if (!isEmptyString(textValue)) {
      const items = this.getItems()
      const indexValue = this.getIndexToHighlight(textValue, items)

      if (indexValue >= 0) {
        if (state.isOpen) {
          newChanges.highlightedIndex = indexValue
        } else {
          newChanges.selectedItem = items[indexValue]
        }
      }
    }

    this.setState(() => ({ keyboardEventTime: eventTime }))

    return newChanges
  }

  setDefaultHighlightedIndex = (
    inputValue: string,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    const { selectedItem, setHighlightedIndex } = downshiftProps
    const items = this.getItems(inputValue)
    const selectedIndex = selectedItem ? items.indexOf(selectedItem) : -1

    setHighlightedIndex(
      selectedIndex >= 0 ? selectedIndex : items.findIndex(this.isActiveItem),
    )
  }

  onSearchInputChange = (
    inputValue: string,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    if (this.props.searchable && downshiftProps.isOpen) {
      this.setDefaultHighlightedIndex(inputValue, downshiftProps)
    }
  }

  // Downshift state reducer
  stateReducer = (state: DownshiftState<D>, changes: StateChangeOptions<D>) => {
    const { searchable } = this.props

    switch (changes.type) {
      case Downshift.stateChangeTypes.blurInput:
      case Downshift.stateChangeTypes.keyDownEscape:
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickButton:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          inputValue: '',
        }

      case Downshift.stateChangeTypes.changeInput:
        if (searchable) {
          return {
            ...changes,
            highlightedIndex: state.highlightedIndex,
          }
        } else {
          return this.handleNonSearchInputChange(state, changes)
        }

      default:
        break
    }

    return changes
  }

  // Keyboard event handling and interaction
  getActiveIndex = (
    activeItems: Array<D>,
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    const { highlightedIndex, selectedItem } = downshiftProps

    if (!isNil(highlightedIndex) && highlightedIndex >= 0) {
      return activeItems.indexOf(items[highlightedIndex])
    } else if (selectedItem) {
      return activeItems.indexOf(selectedItem)
    } else {
      return -1
    }
  }

  cursorInteraction = (
    key: string,
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => {
    const { isOpen, setHighlightedIndex, selectItem } = downshiftProps

    const activeItems = (isOpen ? items : this.props.items).filter(
      this.isActiveItem,
    )

    const indexValue = getNewHighlightedIndex(
      key,
      this.getActiveIndex(activeItems, items, downshiftProps),
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

  onKeyDownHandler = (
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ) => (event: DownshiftKeyboardEvent) => {
    const {
      highlightedIndex,
      isOpen,
      selectHighlightedItem,
      selectedItem,
      toggleMenu,
    } = downshiftProps

    switch (event.key) {
      case 'Enter':
        if (isOpen) {
          if (!isNil(highlightedIndex)) {
            selectHighlightedItem({ inputValue: '' })
          }
        } else {
          toggleMenu({
            type: Downshift.stateChangeTypes.keyDownEnter,
            highlightedIndex: selectedItem && items.indexOf(selectedItem),
            inputValue: '',
          })
        }
        event.preventDownshiftDefault = true
        break
      case 'Home':
      case 'End':
      case 'PageDown':
      case 'PageUp':
      case 'ArrowUp':
      case 'ArrowDown':
        // Update Highlighted item
        event.preventDownshiftDefault = true
        event.preventDefault()

        this.cursorInteraction(event.key, items, downshiftProps)
        break
      default:
        return
    }

    this.setState(() => ({ keyboardEventTime: 0 }))
  }

  renderDefaultHandler = (downshiftProps: ControllerStateAndHelpers<D>) => {
    const { itemToString, selectedItem } = downshiftProps
    const { placeholder } = this.props

    return selectedItem ? itemToString(selectedItem) : placeholder
  }

  renderHandlerNode = (
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ): ReactNode => {
    const {
      getInputProps,
      isOpen,
      toggleMenu,
      selectedItem,
      inputValue,
    } = downshiftProps

    const { disabled, placeholder, searchable, renderHandler } = this.props

    const searching = isOpen && searchable && !isEmptyString(inputValue)

    const inputProps: DownshiftGetInputProps = {
      disabled,
      placeholder,
      onKeyDown: this.onKeyDownHandler(items, downshiftProps),
      onClick: () => {
        toggleMenu({
          type: Downshift.stateChangeTypes.clickButton,
          inputValue: '',
        })
      },
    }

    return (
      <HandlerContainer ref={this.menuRef}>
        <TextField
          css={TextFieldStyles(searching)}
          {...getInputProps(inputProps)}
          disabled={disabled}
          iconLeft={searching ? 'search' : ''}
          iconRight={!searching ? 'arrow_drop_down' : ''}
          ref={this.inputRef}
        />
        <Handler css={visible(!searching)}>
          {renderHandler
            ? renderHandler({
                item: selectedItem,
                placeholder,
                isOpen,
                disabled,
              })
            : this.renderDefaultHandler(downshiftProps)}
        </Handler>
      </HandlerContainer>
    )
  }

  renderDefaultItem = (props: RenderItemProps<DropdownItemType>) => (
    <Item
      selected={props.selected}
      highlighted={props.highlighted}
      disabled={props.item.disabled}
    >
      {props.item.label}
    </Item>
  )

  renderItemsList = (
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ): ReactNode => {
    const { getItemProps, selectedItem, highlightedIndex } = downshiftProps

    const { renderItem } = this.props

    return items.map((item: D, index: number) => {
      const dropdownItem = this.getDropdownItem(item)
      const itemProps = getItemProps({
        item,
        index,
        key: `item-${index}`,
        disabled: dropdownItem.disabled,
      }) as DownshiftItemPropsGetter<D>

      return (
        <ItemContainer {...itemProps}>
          {renderItem
            ? renderItem({
                item,
                selected: selectedItem === item,
                highlighted: highlightedIndex === index,
              })
            : this.renderDefaultItem({
                item: dropdownItem,
                selected: selectedItem === item,
                highlighted: highlightedIndex === index,
              })}
        </ItemContainer>
      )
    })
  }

  renderMenu = (
    items: Array<D>,
    downshiftProps: ControllerStateAndHelpers<D>,
  ): ReactNode => {
    const { isOpen, getMenuProps, closeMenu, toggleMenu } = downshiftProps

    const menuProps = getMenuProps() as DownshiftMenuPropsGetter<D>
    const position = this.menuRef.current
      ? getOverlayPosition(this.menuRef.current)
      : defaultPopOverPosition
    const width = this.menuRef.current ? getMenuWidth(this.menuRef.current) : 0

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
          closingAnimationCompleted={closeMenu}
          togglePopOver={() => {
            toggleMenu({
              type: Downshift.stateChangeTypes.keyDownEscape,
              inputValue: '',
            })
          }}
          width={width}
        >
          <MenuContainer {...menuProps}>
            {items.length > 0 ? (
              this.renderItemsList(items, downshiftProps)
            ) : (
              <Item selected={false} highlighted={false} disabled>
                No results
              </Item>
            )}
          </MenuContainer>
        </Menu>
      </Portal>
    )
  }

  render() {
    const { disabled, onChange, ...domProps } = this.props

    return (
      <DropdownContainer {...domProps}>
        <Downshift
          initialSelectedItem={this.getItemByValue()}
          itemToString={(item: D) => this.getDropdownItem(item).label}
          onChange={onChange}
          stateReducer={this.stateReducer}
          onInputValueChange={this.onSearchInputChange}
        >
          {(downshiftProps: ControllerStateAndHelpers<D>) => {
            const { isOpen, getRootProps, inputValue } = downshiftProps
            const items = this.getItems(isOpen ? inputValue || '' : '')

            return (
              <RootContainer
                {...getRootProps() as DownshiftRootPropsGetter<D>}
                disabled={disabled}
              >
                {this.renderHandlerNode(items, downshiftProps)}
                {!disabled && this.renderMenu(items, downshiftProps)}
              </RootContainer>
            )
          }}
        </Downshift>
      </DropdownContainer>
    )
  }
}
