import React, { ChangeEvent, Component, MouseEvent, RefObject } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Overwrite } from 'typelevel-ts'

import { Icon, IconProps } from '@monorail/icon/Icon'
import { IconButton } from '@monorail/buttons/IconButton'
import {
  buttonTransition,
  Colors,
  getColor,
  FontSizes,
  flexFlow,
  typography,
  visible,
} from '@monorail/helpers/exports'
import { ButtonSize } from '@monorail/buttons/buttonTypes'

//
// Styles
//

const BBSearchIconPos = 3

export const BBSearchContainer = styled.label<BBSearchContainerProps>(
  ({ darkMode, cssOverrides }) => css`
    ${darkMode
      ? css`
          background: ${getColor(Colors.White, 0.2)};
          border: 1px solid ${getColor(Colors.White, 0.2)};

          &:hover {
            background: ${getColor(Colors.White, 0.22)};
          }

          &:focus {
            background: ${getColor(Colors.White, 0.24)};
          }
        `
      : css`
          border: 1px solid ${getColor(Colors.Black, 0.08)};

          &:hover {
            border-color: ${getColor(Colors.BrandLightBlue, 0.5)};
          }

          &:focus {
            border-color: ${getColor(Colors.BrandLightBlue)};
          }
        `};

    ${flexFlow('row')};
    border-radius: 100px;
    box-sizing: border-box;
    overflow: hidden; /* So the child element (BBSearchInput) doesn't cut into BBSearchContainer's border */
    position: relative; /* position: relative; so that BBSearchIcon can be positioned absolute to this. */
    height: 24px;
    flex-shrink: 0;

    ${cssOverrides};
  `,
)

const BBSearchIcon = styled(({ darkMode, ...otherProps }) => (
  <Icon {...otherProps} />
))<{ darkMode?: boolean } & IconProps>(
  ({ darkMode }) => css`
    color: ${darkMode && getColor(Colors.White)};
    left: 8px;
    pointer-events: none;
    position: absolute;
    top: ${BBSearchIconPos}px;
  `,
)

export const BBSearchInput = styled.input<BBSearchInputProps>(
  ({ darkMode }) => css`
    ${darkMode
      ? css`
          background: ${getColor(Colors.White, 0.2)};
          border: 0;
          color: ${getColor(Colors.White)};

          ::placeholder {
            color: ${getColor(Colors.White)};
          }

          &:hover {
            background: ${getColor(Colors.White, 0.22)};
          }

          &:focus {
            background: ${getColor(Colors.White, 0.24)};
          }
        `
      : css`
          border: 1px solid ${getColor(Colors.Black, 0.08)};

          ::placeholder {
            color: ${getColor(Colors.Black54)};
            font-style: italic;
            font-weight: 300;
          }

          &:hover {
            border-color: ${getColor(Colors.BrandLightBlue, 0.5)};
          }

          &:focus {
            border-color: ${getColor(Colors.BrandLightBlue)};
          }
        `};

    ${typography(500, FontSizes.Title5)};
    border: 0;
    flex: 1 1 100%;
    height: 100%;
    outline: none;
    padding: 0 22px 0 28px;

    border-radius: 100px;
    box-sizing: border-box;

    ${buttonTransition};
  `,
)

//
// Types
//

export type BBSearchContainerProps = {
  cssOverrides?: SimpleInterpolation
  searchRef?: RefObject<HTMLInputElement>
  darkMode: boolean
}

export type BBSearchInputProps = {
  darkMode: boolean
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  placeholder: string
  value?: string
}

type SearchProps = BBSearchContainerProps &
  Overwrite<
    BBSearchInputProps,
    {
      onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
    }
  >

//
// Component
//

export class Search extends Component<SearchProps> {
  static defaultProps = {
    darkMode: false,
    placeholder: 'Search',
  }

  render() {
    const {
      cssOverrides,
      darkMode,
      onChange,
      placeholder = 'Search',
      value,
      onClick,
      searchRef,
      ...otherProps
    } = this.props

    return (
      <BBSearchContainer
        cssOverrides={cssOverrides}
        darkMode={darkMode}
        {...otherProps}
      >
        <BBSearchIcon icon="search_icon" darkMode={darkMode} />

        <BBSearchInput
          className="new-input"
          darkMode={darkMode}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.currentTarget.value, event)
          }}
          placeholder={placeholder}
          type="text"
          value={value}
          onClick={onClick}
          ref={searchRef}
        />

        <IconButton
          darkMode
          cssOverrides={css`
            ${visible(!!value)};

            background: ${getColor(Colors.Black24)};
            border: 0;

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

            position: absolute;
            top: ${BBSearchIconPos}px;
            right: ${BBSearchIconPos}px;
          `}
          size={ButtonSize.Dense}
          icon="close"
          onClick={event => {
            event.preventDefault()
            onChange('')
          }}
        />
      </BBSearchContainer>
    )
  }
}
