import { ControllerStateAndHelpers } from 'downshift'
import { fromNullable } from 'fp-ts/lib/Option'
import React, { ReactElement, ReactNode, useRef } from 'react'

import { Colors, getColor } from '@monorail/helpers/color'
import { ellipsis, visible } from '@monorail/helpers/exports'
import { flexFlow } from '@monorail/helpers/flex'
import styled, { css } from '@monorail/helpers/styled-components'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import {
  IconsAndInputContainer,
  TextField,
} from '@monorail/visualComponents/inputs/TextField'

import { DropdownItem } from './DropdownItem'
import { DownshiftGetInputProps, DropdownType } from './helpers'

export declare interface RenderItemProps<T> {
  children?: ReactNode
  disabled?: boolean
  highlighted: boolean
  item: T
  selected: boolean
}

export type CustomRenderHandlerHook<T> = (
  props: RenderHandlerProps<T>,
) => ReactElement

export declare interface RenderHandlerProps<T> {
  customRender?: CustomRenderHandlerHook<T>
  downshiftProps: ControllerStateAndHelpers<T>
  handlerProps: DownshiftGetInputProps
}

export declare interface RenderListProps<T> {
  children: ReactNode
  downshiftProps: ControllerStateAndHelpers<T>
}

export declare interface DropdownRender<T> {
  handler: (props: RenderHandlerProps<T>) => ReactElement
  item: (props: RenderItemProps<T>) => ReactElement
  list?: (props: RenderListProps<T>) => ReactElement
}

export const DropdownPlaceholder = styled.span`
  ${ellipsis};

  color: ${getColor(Colors.Black54)};
  font-style: italic;
`

const HandlerWrapper = styled.div`
  ${flexFlow('row')}
  border-radius: inherit;
  flex: 1;
  min-height: 1rem;
  overflow: hidden;
  padding: 4px 30px 4px 8px;
  position: relative;
`

const StyledHandler = styled.div<{ searching: boolean }>(
  ({ searching = false }) => css`
    ${visible(!searching)}
    ${flexFlow('row')}
    ${ellipsis};

    align-items: center;
    flex: 1;
    pointer-events: none;
  `,
)

const TextFieldStyles = (searching: boolean = false) => css`
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;

  ${IconsAndInputContainer} {
    border-radius: inherit;
  }

  input {
    ${!searching && 'text-indent: -100vw;'};

    border-radius: inherit;
    cursor: pointer;
  }
`

const List = <T extends DropdownType>({
  children,
}: RenderListProps<T>): ReactElement => {
  return <>{children}</>
}

const Item = <T extends DropdownType>({
  children,
  disabled = false,
  highlighted = false,
  selected = false,
}: RenderItemProps<T>): ReactElement => {
  return (
    <DropdownItem
      selected={selected}
      highlighted={highlighted}
      disabled={disabled}
    >
      {children}
    </DropdownItem>
  )
}

const renderHandlerLabelDefault = <T extends DropdownType>({
  downshiftProps,
  handlerProps,
}: RenderHandlerProps<T>): ReactElement =>
  fromNullable(downshiftProps.selectedItem).fold(
    <DropdownPlaceholder>{handlerProps.placeholder}</DropdownPlaceholder>,
    item => <span css={ellipsis}>{downshiftProps.itemToString(item)}</span>,
  )

const Handler = <T extends DropdownType>({
  customRender = renderHandlerLabelDefault,
  downshiftProps,
  handlerProps,
}: RenderHandlerProps<T>): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { isOpen, inputValue } = downshiftProps

  const searching = isOpen && !isEmptyString(inputValue)

  return (
    <HandlerWrapper>
      <TextField
        {...handlerProps}
        css={TextFieldStyles(searching)}
        htmlValidation={false}
        iconLeft={searching ? 'search' : ''}
        iconRight={!searching ? 'arrow_drop_down' : ''}
        ref={inputRef}
        hideStdErr
      />
      <StyledHandler searching={searching}>
        {customRender({ handlerProps, downshiftProps })}
      </StyledHandler>
    </HandlerWrapper>
  )
}

export const useCustomHandler = <T extends DropdownType>(
  customRender: CustomRenderHandlerHook<T> = renderHandlerLabelDefault,
) => (props: RenderHandlerProps<T>): ReactElement => (
  <Handler {...props} customRender={customRender} />
)

export const useDefaultDropdownRender = <
  T extends DropdownType
>(): DropdownRender<T> => ({
  handler: Handler,
  item: Item,
  list: List,
})
