import { ControllerStateAndHelpers } from 'downshift'
import * as O from 'fp-ts/lib/Option'
import React, { ReactElement, ReactNode, useRef } from 'react'
import { pipe } from 'fp-ts/lib/pipeable'

import { Colors, getColor } from '@monorail/helpers/color'
import { ellipsis, visible } from '@monorail/helpers/exports'
import { flexFlow } from '@monorail/helpers/flex'
import styled, { css } from '@monorail/helpers/styled-components'
import { isEmptyString, isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import {
  IconsAndInputContainer,
  TextField,
} from '@monorail/visualComponents/inputs/TextField'

import { ButtonDisplay, ButtonSize } from '../buttons/buttonTypes'
import { IconButton } from '../buttons/IconButton'

import { DropdownItem } from './DropdownItem'
import { DownshiftGetInputProps, DropdownType } from './helpers'
import { DropdownParser } from './parsers'

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
  display?: DisplayType
  clearable?: boolean
}

export declare interface RenderListProps<T> {
  children: ReactNode
  downshiftProps: ControllerStateAndHelpers<T>
  items: Array<T>
  parser: DropdownParser<T>
}

export declare interface DropdownRender<T> {
  handler: (props: RenderHandlerProps<T>) => ReactElement
  item: (props: RenderItemProps<T>) => ReactElement
  list?: (props: RenderListProps<T>) => ReactElement
}

export const DropdownPlaceholder = styled.span`
  ${ellipsis};

  color: ${getColor(Colors.Black54a)};
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
  pipe(
    O.fromNullable(downshiftProps.selectedItem),
    O.fold(
      () => (
        <DropdownPlaceholder>{handlerProps.placeholder}</DropdownPlaceholder>
      ),
      item => <span css={ellipsis}>{downshiftProps.itemToString(item)}</span>,
    ),
  )

const Handler = <T extends DropdownType>({
  customRender = renderHandlerLabelDefault,
  downshiftProps,
  handlerProps,
  clearable = true,
}: RenderHandlerProps<T>): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { display = DisplayType.Edit, ...textFieldProps } = handlerProps
  const { isOpen, inputValue } = downshiftProps

  const searching = isOpen && !isEmptyString(inputValue)

  return display === DisplayType.Edit ? (
    <HandlerWrapper>
      <TextField
        {...textFieldProps}
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
      {isNotNil(downshiftProps.selectedItem) && clearable && (
        <IconButton
          icon="close"
          display={ButtonDisplay.Chromeless}
          size={ButtonSize.Dense}
          onClick={() => downshiftProps.clearSelection()}
          css={css`
            margin: auto 0;
          `}
        ></IconButton>
      )}
    </HandlerWrapper>
  ) : (
    customRender({ handlerProps, downshiftProps })
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
