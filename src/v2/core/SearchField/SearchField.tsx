import React, { ChangeEvent } from 'react'
import * as MUI from '@material-ui/core'

import styled, { css } from '@monorail/helpers/styled-components'
import { matchOn, matchOnI } from '@monorail/sharedHelpers/matchers'
import { isEmptyString, isNil } from '@monorail/sharedHelpers/typeGuards'
import { IconButton } from '@monorail/v2/core/IconButton/IconButton'
import * as Icons from '@monorail/v2/icons/Icons'
import {
  OmitBannedProps,
  undefinedStyleError,
} from '@monorail/v2/shared/helpers'

// #region CSS
const searchFieldBaseCss = css`
  border-radius: 1000px;
`

const searchFieldClearCss = css`
  height: unset;
  width: unset;
  color: ${({ theme }) => theme.v2.FoundationDollop};

  &:focus,
  &:hover {
    background-color: unset;
    box-shadow: unset;
    color: ${({ theme }) => theme.v2.FoundationPinch};
  }

  &:active {
    color: ${({ theme }) => theme.v2.FoundationDash};
  }
`
// #endregion CSS

type SearchFieldEndAdornmentProps = {
  shouldHide: boolean
  onClick: () => void
}

const SearchFieldEndAdornment = (props: SearchFieldEndAdornmentProps) => (
  <MUI.InputAdornment
    position="end"
    // Adornment must be hidden but still flow the UI in order to maintain width
    css={`
      ${props.shouldHide
        ? css`
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s ${MUI.duration.shorter}ms,
              opacity ${MUI.duration.shorter}ms ${MUI.easing.easeOut};
          `
        : css`
            visibility: visible;
            opacity: 1;
            transition: opacity ${MUI.duration.shorter}ms ${MUI.easing.easeOut};
          `}
    `}
  >
    <IconButton
      display="chromeless"
      css={searchFieldClearCss}
      onClick={props.onClick}
      aria-label="clear search"
    >
      <Icons.Cancel titleAccess="clear search" />
    </IconButton>
  </MUI.InputAdornment>
)

export const StyledOutlinedInput = styled(
  MUI.OutlinedInput as typeof SearchField, // as-cast necessary in order to allow for additional Monorail pass-through props
)`
  ${searchFieldBaseCss}
`

type ClearableSearchFieldProps = Pick<
  SearchFieldProps,
  'value' | 'inputRef' | 'onChange'
> & {
  /**
   * Callback when clear button is clicked
   */
  onClear: () => void
}

export const useClearableSearchField = (props: ClearableSearchFieldProps) => {
  // Hook into potential existing ref in order to focus on input after clicking 'clear'
  const _localInputRef = React.useRef<HTMLInputElement>(null)
  const inputRef = props.inputRef ?? _localInputRef

  // Turn optionally uncontrolled component to be controlled
  const [searchValue, setSearchValue] = MUI.useControlled<string>({
    controlled: props.value,
    default: '',
    name: 'SearchField',
  })

  const shouldHideClearAdornment = isEmptyString(searchValue)

  return {
    searchFieldProps: {
      inputRef,
      value: searchValue,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
        props.onChange?.(e)
      },
      endAdornment: (
        <SearchFieldEndAdornment
          shouldHide={shouldHideClearAdornment}
          onClick={() => {
            setSearchValue('') // Only functions for uncontrolled
            props.onClear?.()
            if (inputRef.current) {
              inputRef.current.value = ''
              inputRef.current.dispatchEvent(
                new Event('input', { bubbles: true }),
              )
            }
            inputRef.current?.focus()
          }}
        />
      ),
    },
  }
}

type SearchFieldMonorailProps = {
  value?: string // Clarify `unknown` MUI prop

  // This actually constricts the ref type to disallow callback-refs. This shouldn't be a problem in practice.
  // - DS 2020-09-25
  inputRef?: React.RefObject<HTMLInputElement> // Clarify `any` MUI prop
}

export type SearchFieldProps = SearchFieldMonorailProps &
  OmitBannedProps<Omit<MUI.OutlinedInputProps, 'inputRef'>>

/**
 * Basic input styled as a search field
 */
export function SearchField(props: SearchFieldProps) {
  return (
    <StyledOutlinedInput
      placeholder="Search"
      type="text"
      startAdornment={
        <MUI.InputAdornment position="start">
          <Icons.Search />
        </MUI.InputAdornment>
      }
      inputProps={{ 'aria-label': 'search', ...props.inputProps }}
      {...props}
    />
  )
}
;(SearchField as any).muiName = (MUI.OutlinedInput as any).muiName // eslint-disable-line

/**
 * `SearchField` composed with `useClearableSearch`
 *
 * TODO: If we don't like separate `SearchField` and `SearchFieldClearable`, we can change it to
 * `<SearchField clearable={true} />` and create a `SearchFieldBase`.
 */
export function SearchFieldClearable(
  props: ClearableSearchFieldProps & SearchFieldProps,
) {
  const { onClear, onChange, inputRef, value, ...restProps } = props

  const { searchFieldProps } = useClearableSearchField({
    onClear,
    onChange,
    inputRef,
    value,
  })

  return <SearchField {...restProps} {...searchFieldProps} />
}
;(SearchFieldClearable as any).muiName = (SearchField as any).muiName // eslint-disable-line
