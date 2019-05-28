import React, { ChangeEvent, MouseEvent, RefObject } from 'react'
import { SimpleInterpolation } from 'styled-components'
import { Overwrite } from 'typelevel-ts'

import { ButtonSize } from '@monorail/buttons/buttonTypes'
import { IconButton } from '@monorail/buttons/IconButton'
import {
  BorderRadius,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
  visible,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, Mode, ThemeColors } from '@monorail/helpers/theme'
import { Icon } from '@monorail/icon/Icon'
import { FCwDP } from '@monorail/sharedHelpers/react'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

//
// Styles
//

const searchIconPosition = 4

export const SearchContainer = styled.label<SearchContainerProps>(
  ({ cssOverrides, theme: { mode } }) => css`
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
  ({ theme: { mode } }) => css`
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

    ${typography(400, FontSizes.Title5)};

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
  searchRef?: RefObject<HTMLInputElement>
}

export type SearchInputProps = {
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  value?: string
  name?: string
}

type DefaultProps = {
  placeholder: string
}

type SearchProps = SearchContainerProps &
  Overwrite<
    SearchInputProps,
    {
      onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
    }
  >

//
// Component
//

export const Search: FCwDP<SearchProps, DefaultProps> = ({
  cssOverrides,
  onChange,
  name,
  placeholder,
  value,
  onClick,
  searchRef,
  ...domProps
}) => (
  <SearchContainer cssOverrides={cssOverrides} {...domProps}>
    <Icon icon="search_icon" css={searchIconStyles} />

    <SearchInput
      className="new-input"
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value, event)
      }}
      placeholder={placeholder}
      type="text"
      value={value}
      onClick={onClick}
      ref={searchRef}
      name={name}
    />

    <IconButton
      cssOverrides={css`
        ${visible(!!value)};

        background: ${getColor(Colors.Black24)};
        border: 0;
        position: absolute;
        right: ${searchIconPosition}px;
        top: ${searchIconPosition}px;

        ${Icon} {
          color: ${getColor(Colors.White)};
        }

        &:hover {
          background: ${getColor(Colors.Black54)};

          &:before {
            background: transparent;
          }
        }

        &:active {
          background: ${getColor(Colors.Black24)};
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

Search.defaultProps = {
  placeholder: 'Search',
}

// tslint:enable
