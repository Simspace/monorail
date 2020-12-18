import React from 'react'
import { Link } from 'react-router'
import * as MUI from '@material-ui/core'

import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import {
  DISPLAY as BUTTON_DISPLAY,
  displayCss as buttonDisplayCss,
  SIZE,
  Size,
} from '@monorail/v2/core/Button/Button'
import { OmitBannedProps, propBlockerConfig } from '@monorail/v2/shared/helpers'

const DISPLAY = {
  ...BUTTON_DISPLAY,
  ChromelessAction: 'chromelessAction',
} as const

export type Display = typeof DISPLAY[keyof typeof DISPLAY]

const SHAPE = {
  Square: 'square',
  Circle: 'circle',
} as const

type Shape = typeof SHAPE[keyof typeof SHAPE]

// #region CSS
const displayCss: Record<Display, CSSProp> = {
  ...buttonDisplayCss,
  [DISPLAY.Chromeless]: css`
    color: ${({ theme }) => theme.v2.FoundationText4};

    &.Mui-focusVisible {
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      color: ${({ theme }) => theme.v2.FoundationText3};
      background-color: ${({ theme }) => theme.v2.FoundationPinch};
    }
    &:active {
      color: ${({ theme }) => theme.v2.FoundationText3};
      background-color: ${({ theme }) => theme.v2.FoundationDash};
    }
    &[disabled] {
      color: ${({ theme }) => theme.v2.FoundationDollop};
    }
  `,
  [DISPLAY.ChromelessAction]: css`
    color: ${({ theme }) => theme.v2.ActionPrimary};

    &.Mui-focusVisible {
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      color: ${({ theme }) => theme.v2.Accent4};
      background-color: ${({ theme }) => theme.v2.InfoSmidgen};

      &.Mui-focusVisible {
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
      }
    }
    &:active {
      color: ${({ theme }) => theme.v2.Accent3};
      background-color: ${({ theme }) => theme.v2.InfoPinch};
    }
    &[disabled] {
      color: ${({ theme }) => theme.v2.ActionDollop};
    }
  `,
}

const shapeCss: Record<Shape, CSSProp> = {
  [SHAPE.Square]: css`
    border-radius: 4px;
  `,
  [SHAPE.Circle]: css`
    border-radius: 50%;
  `,
}

const sizeCss: Record<Size, CSSProp> = {
  [SIZE.Dense]: css``, // TODO
  [SIZE.Compact]: css``, // TODO
  [SIZE.Default]: css`
    font-size: 16px;
    height: 24px;
    width: 24px;
  `,
  [SIZE.Large]: css`
    font-size: 24px;
    height: 32px;
    width: 32px;
  `,
}
// #endregion CSS

export const StyledIconButton = styled(
  MUI.IconButton as typeof IconButton, // as-cast necessary in order to allow for additional Monorail pass-through props
)
  /**
   * Prevent passing Monorail props that are identically named as Material UI.
   *
   * In this situation, we have `size`, which
   * is our own Monorail prop that conflicts with Material's `size`. Since we specifically do not want devs using
   * Material visual props such as `size`, and passing our prop to the underlying Material component would cause
   * console errors, we configure styled-components not to do so.
   **/
  .withConfig(
    propBlockerConfig<IconButtonProps>(['display', 'shape', 'size']),
  )
  // Provide defaults
  .attrs(props => ({
    display: props.display ?? 'primary',
    shape: props.shape ?? 'circle',
    size: props.size ?? 'default',
  }))`
  ${({ display }) => displayCss[display]}
  ${({ shape }) => shapeCss[shape]}
  ${({ size }) => sizeCss[size]}
`

type IconButtonMonorailProps = {
  shape?: Shape
  display?: Display
  size?: Size
  /**
   * label is required, but allow for explicit opt-out if necessary. If this prop requirement falls down, we should
   * look into custom eslint rules instead
   */
  'aria-label': string | null
}

export type IconButtonProps = IconButtonMonorailProps &
  OmitBannedProps<MUI.IconButtonProps>

/**
 * IconButton is a Button with an Icon!
 *
 * - [IconButton | Material-UI](https://material-ui.com/components/buttons/#icon-buttons)
 * - [IconButton | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=16735%3A801)
 */
export function IconButton(props: IconButtonProps) {
  return <StyledIconButton {...props} />
}
;(IconButton as any).muiName = (MUI.IconButton as any).muiName // eslint-disable-line

type IconButtonLinkProps = IconButtonMonorailProps &
  OmitBannedProps<MUI.IconButtonProps<Link>>
/**
 * IconButton with component overridden to react-router `Link` component
 */
export function IconButtonLink(props: IconButtonLinkProps) {
  const newProps = {
    ...props,
    component: Link,
  } as IconButtonProps // type cast to not deal with polymorphic MUI+style-components madness
  return <IconButton {...newProps} />
}
;(IconButtonLink as any).muiName = (MUI.IconButton as any).muiName // eslint-disable-line
