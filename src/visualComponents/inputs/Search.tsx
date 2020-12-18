import React, { ChangeEvent, FC, MouseEvent, RefObject } from 'react'
import { SimpleInterpolation } from 'styled-components'

import {
  BorderRadius,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typographyFont,
  visible,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, Mode, ThemeColors } from '@monorail/helpers/theme'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { Icon } from '@monorail/visualComponents/icon/Icon'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

//
// Styles
//

const searchIconPosition = 4

export const SearchContainer = styled.label<SearchContainerProps>(
  ({ cssOverrides, width, theme: { mode } }) => css`
    ${mode === Mode.Dark
      ? css`
          background: ${getThemeColor(ThemeColors.PrimaryColor, 0.2)};

          &:hover {
            background: ${getThemeColor(ThemeColors.PrimaryColor, 0.22)};
          }

          &:active {
            background: ${getThemeColor(ThemeColors.PrimaryColor, 0.24)};
          }
        `
      : css`
          background: ${getThemeColor(ThemeColors.SecondaryColor)};
        `};

    ${isNotNil(width) &&
      css`
        width: ${width}px;
      `}

    ${borderRadius(BorderRadius.Round)};
    ${flexFlow('row')};

    box-sizing: border-box;
    overflow: hidden; /* So the child element (BBSearchInput) doesn't cut into BBSearchContainer's border */
    position: relative; /* position: relative; so that BBSearchIcon can be positioned absolute to this. */
    height: 24px;
    flex-shrink: 0;

    ${cssOverrides};
  `,
)

const searchIconStyles = css`
  color: ${({ theme: { mode } }) =>
    mode === Mode.Dark && getColor(Colors.White)};
  left: 8px;
  pointer-events: none;
  position: absolute;
  top: ${searchIconPosition}px;
`

export const SearchInput = styled.input<SearchInputProps>(
  ({ width, theme: { mode } }) => css`
    ${mode === Mode.Dark
      ? css`
          border-color: transparent;

          &:hover {
            border-color: transparent;
          }

          &:focus {
            border-color: ${getThemeColor(ThemeColors.PrimaryColor)};
          }
        `
      : css`
          border-color: ${getThemeColor(ThemeColors.PrimaryColor, 0.08)};

          &:hover {
            border-color: ${getThemeColor(ThemeColors.ActionPrimary, 0.5)};
          }

          &:focus {
            border-color: ${getThemeColor(ThemeColors.ActionPrimary)};
          }
        `};

    ${isNotNil(width) &&
      css`
        width: ${width}px;
      `}

    ${typographyFont(400, FontSizes.Title5)};

    background: transparent;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    color: ${getThemeColor(ThemeColors.Text900)};
    flex: 1 1 100%;
    height: 100%;
    outline: none;
    padding: 0 22px 0 28px;

    /* Override search styling coming from bootstrap.scss */
    &[type='search'] {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${getThemeColor(ThemeColors.Text500)};
      font-style: italic;
      font-weight: 300;
    }

    ${buttonTransition};
  `,
)

//
// Types
//

export type SearchContainerProps = {
  cssOverrides?: SimpleInterpolation
  width?: number
  searchRef?: React.Ref<HTMLInputElement>
}

export type SearchInputProps = {
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  onBlur?: (event?: ChangeEvent<HTMLInputElement>) => void
  value?: string
  width?: number
  name?: string
}

export type SearchProps = SearchContainerProps &
  SearchInputProps & {
    onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
  }

//
// Component
//

export const Search: FC<SearchProps> = props => {
  const {
    cssOverrides,
    onChange,
    name,
    placeholder = 'Search',
    value,
    width,
    onClick,
    onBlur,
    searchRef,
    ...domProps
  } = props

  return (
    <SearchContainer cssOverrides={cssOverrides} width={width} {...domProps}>
      <Icon icon="search" cssOverrides={searchIconStyles} />

      <SearchInput
        className="new-input"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event.currentTarget.value, event)
        }}
        placeholder={placeholder}
        value={value}
        width={width}
        onClick={onClick}
        onBlur={onBlur}
        ref={searchRef}
        name={name}
        type="search"
      />

      <IconButton
        cssOverrides={css`
          ${visible(!!value)};

          background: ${getColor(Colors.Black24a)};
          border: 0;
          position: absolute;
          right: ${searchIconPosition}px;
          top: ${searchIconPosition}px;

          ${Icon} {
            color: ${getColor(Colors.White)};
          }

          &:hover {
            background: ${getColor(Colors.Black54a)};

            &:before {
              background: transparent;
            }
          }

          &:active {
            background: ${getColor(Colors.Black24a)};
          }
        `}
        size={ButtonSize.Dense}
        icon="close"
        onClick={event => {
          event.preventDefault()
          onChange('')
        }}
      />
    </SearchContainer>
  )
}

// tslint:enable
