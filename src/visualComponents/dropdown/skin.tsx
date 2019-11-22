import Downshift from 'downshift'
import { fromNullable, Option } from 'fp-ts/lib/Option'
import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react'

import {
  baseDisabledStyles,
  baseErrorBackgroundStyles,
  baseErrorBorderStyles,
  BorderRadius,
  borderRadius,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  defaultPopOverPosition,
  getOverlayPosition,
} from '@monorail/metaComponents/popOver/PopOver'
import { Portal } from '@monorail/metaComponents/portal/Portal'
import { isUndefined } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { StdErr } from '@monorail/visualComponents/inputs/StdErr'
import { Menu, MenuContent } from '@monorail/visualComponents/menu/Menu'

import { DropdownItem } from './DropdownItem'
import {
  DownshiftGetInputProps,
  DownshiftItemPropsGetter,
  DownshiftMenuPropsGetter,
  DropdownStateType,
  DropdownType,
} from './helpers'
import { InteractionController } from './interaction'
import { DropdownParser } from './parsers'
import { DropdownRender, useDefaultDropdownRender } from './render'

type DropdownContainerProps = CommonComponentType & {
  disabled: boolean
  error: boolean
}

const DropdownWrapper = styled.div`
  ${flexFlow('column')}

  flex: 1;
`

const DropdownContainer = styled.div<DropdownContainerProps>(
  ({ disabled, error }) => css`
    ${borderRadius(BorderRadius.Large)};
    ${flexFlow('column')};
    ${typography(400, FontSizes.Title5)};

    flex: 1;
    position: relative;
    width: 100%;

    ${error &&
      css`
        ${baseErrorBackgroundStyles};

        input {
          background: inherit;
          ${baseErrorBorderStyles};
        }
      `}

    ${disabled && baseDisabledStyles};
  `,
)

const HandlerContainer = styled.div<CommonComponentType>`
  ${flexFlow('column')};

  border-radius: inherit;
  flex: 1;
  pointer-events: auto;
  position: relative;
  width: 100%;
`

const MenuContainer = styled.div<CommonComponentType>`
  height: 100%;
  overflow: auto;
`

const ItemContainer = styled.div<CommonComponentType>``

export type DropdownSkinCommonType = {
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  document?: Document
  error?: Option<string>
  required?: boolean
  label?: string
  display?: DisplayType
}

export type DropdownSkinHookProps<T> = {
  parser: DropdownParser<T>
  interaction: InteractionController<T>
} & DropdownSkinCommonType &
  CommonComponentType

type DropdownSkinHookState<T> = (state: DropdownStateType<T>) => ReactElement

export type DropdownSkinHook<T> = (
  props: DropdownSkinHookProps<T>,
) => DropdownSkinHookState<T>

type DropdownSkinProps<T> = {
  skin: DropdownSkinHookProps<T>
  state: DropdownStateType<T>
  render: DropdownRender<T>
}
export const DropdownSkin = <T extends DropdownType>({
  skin,
  state,
  render,
}: DropdownSkinProps<T>): ReactElement<DropdownSkinProps<T>> => {
  /** Menu references **/
  const [menuTarget, setMenuTarget] = useState<HTMLDivElement>()
  const menuRef = useRef<HTMLDivElement>(null)

  /* eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
    if (menuRef && menuRef.current) {
      setMenuTarget(menuRef.current)
    }
  }, [menuRef.current])
  /* eslint-enable react-hooks/exhaustive-deps */

  const { items, downshiftProps } = state
  const { disabled, error, label, required, display, clearable } = skin

  const renderHandler = () => {
    const {
      getInputProps,
      itemToString,
      selectedItem,
      toggleMenu,
    } = downshiftProps
    const { interaction, placeholder } = skin

    const dropdownValue = fromNullable(selectedItem)
      .map(itemToString)
      .toUndefined()

    const inputOptions: DownshiftGetInputProps = {
      disabled,
      placeholder,
      onKeyDown: interaction.eventHandler(state),
      onClick: () =>
        toggleMenu({
          type: Downshift.stateChangeTypes.clickButton,
          highlightedIndex: fromNullable(selectedItem).fold(-1, item =>
            items.indexOf(item),
          ),
        }),
    }

    const handlerProps = { ...getInputProps(inputOptions), display }

    return (
      <HandlerContainer ref={menuRef}>
        {/* Hack for HTML5 required error state */}
        <select
          required={required}
          value={fromNullable(selectedItem)
            .map(itemToString)
            .toUndefined()}
          style={{ position: 'absolute', bottom: 0, left: 4, opacity: 0 }}
          tabIndex={-1}
        >
          {dropdownValue && <option value={dropdownValue} key={1}></option>}
        </select>

        <render.handler {...{ downshiftProps, handlerProps, clearable }} />
      </HandlerContainer>
    )
  }

  const renderList = () => {
    const { parser } = skin
    const {
      getItemProps,
      highlightedIndex,
      selectedItem,
      itemToString,
    } = downshiftProps

    return (
      <>
        {items.map((item: T, index: number) => {
          const itemProps = {
            item,
            disabled: !parser.isActive(item),
            highlighted: highlightedIndex === index,
            selected: fromNullable(selectedItem).fold(
              false,
              parser.compare(item),
            ),
          }

          const itemDownshiftProps = getItemProps({
            ...itemProps,
            index,
            key: `item-${index}`,
          }) as DownshiftItemPropsGetter<T>

          return (
            <ItemContainer {...itemDownshiftProps}>
              <render.item {...itemProps}>{itemToString(item)}</render.item>
            </ItemContainer>
          )
        })}
      </>
    )
  }

  const renderMenu = () => {
    const { document } = skin
    const { isOpen, getMenuProps, toggleMenu } = downshiftProps

    const menuProps = getMenuProps() as DownshiftMenuPropsGetter<T>
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
            toggleMenu({
              type: Downshift.stateChangeTypes.keyDownEscape,
              inputValue: '',
            })
          }
          width={width}
        >
          <MenuContainer {...menuProps}>
            {isOpen ? (
              items.length > 0 ? (
                renderList()
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

  const renderError = () => (
    <>
      {error &&
        error.fold(<></>, msg => (
          <div
            css={`
              position: absolute;
              left: 0;
              top: 100%;
            `}
          >
            <StdErr err={true} msg={msg} />
          </div>
        ))}
    </>
  )

  return (
    <DropdownWrapper>
      {label && (
        <Label
          label={label}
          required={required}
          err={!isUndefined(error) && error.isSome()}
          display={display}
        />
      )}
      <DropdownContainer
        disabled={!!disabled}
        error={!isUndefined(error) && error.isSome()}
      >
        {renderHandler()}
        {!disabled && renderMenu()}
        {renderError()}
      </DropdownContainer>
    </DropdownWrapper>
  )
}

const useDropdownHook = <T extends DropdownType>(
  render: DropdownRender<T>,
): DropdownSkinHook<T> => skin => state => (
  <DropdownSkin<T> render={render} state={state} skin={skin} />
)

export const useDropdownSkin = <T extends DropdownType>(
  skin: DropdownSkinHookProps<T>,
) => useDropdownHook<T>(useDefaultDropdownRender<T>())(skin)

export const useDropdownCustomSkin = <T extends DropdownType>(
  render: Partial<DropdownRender<T>>,
) =>
  useDropdownHook<T>({
    ...useDefaultDropdownRender(),
    ...render,
  })
