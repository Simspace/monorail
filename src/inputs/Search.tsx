import React, { ChangeEvent, MouseEvent, Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon, IconProps } from 'icon/Icon'
import { IconButton } from 'buttons/IconButton'
import {
  buttonTransiton,
  Colors,
  colors,
  FontSizes,
  typography,
  visible,
} from 'CommonStyles'
import { Overwrite } from 'src/common/util/CoreUtils'

//
// Styles
//

export const BBSearchContainer = styled<BBSearchContainerProps, 'div'>('div')`
  position: relative; /* position: relative; so that BBSearchIcon can be positioned absolute to this. */
  height: 24px;

  ${({ css: cssOverrides }) => cssOverrides};
`

const BBSearchIcon = styled<{ darkMode?: boolean } & IconProps>(
  ({ darkMode, ...otherProps }) => <Icon {...otherProps} />,
)`
  color: ${({ darkMode }) => darkMode && colors(Colors.White)};
  left: 8px;
  pointer-events: none;
  position: absolute;
  top: 4px;
`

const BBSearchInput = styled<BBSearchInputProps, 'input'>('input')`
  ${({ darkMode }) =>
    darkMode
      ? css`
          background: ${colors(Colors.White, 0.2)};
          border: 0;
          color: ${colors(Colors.White)};

          ::placeholder {
            color: ${colors(Colors.White)};
          }

          &:hover {
            background: ${colors(Colors.White, 0.22)};
          }

          &:focus {
            background: ${colors(Colors.White, 0.24)};
          }
        `
      : css`
          border: 1px solid ${colors(Colors.Black, 0.08)};

          ::placeholder {
            color: ${colors(Colors.Black54)};
          }

          &:hover {
            border-color: ${colors(Colors.BrandLightBlue, 0.5)};
          }

          &:focus {
            border-color: ${colors(Colors.BrandLightBlue)};
          }
        `};

  ${typography(500, FontSizes.Title5)};
  border-radius: 100px;
  box-sizing: border-box;
  height: 100%;
  outline: none;
  padding: 0 22px 0 28px;
  width: 100%;

  ${buttonTransiton};
`

//
// Types
//

type BBSearchContainerProps = {
  css?: SimpleInterpolation
}

type BBSearchInputProps = {
  darkMode: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: MouseEvent<HTMLInputElement>) => void
  placeholder: string
  value: string
}

type SearchProps = BBSearchContainerProps &
  Overwrite<
    BBSearchInputProps,
    {
      onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
    }
  > & {}

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
      css: overrideCss,
      darkMode,
      onChange,
      placeholder = 'Search',
      value,
      onClick,
    } = this.props

    return (
      <BBSearchContainer css={overrideCss}>
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
        />

        <IconButton
          circle
          css={css`
            ${visible(!!value)};

            position: absolute;
            top: 4px;
            right: 4px;
          `}
          dense
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
