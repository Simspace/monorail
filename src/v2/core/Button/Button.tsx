import React from 'react'
import * as MUI from '@material-ui/core'

import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import {
  BaseRRLinkWithPropDenylist,
  ReactRouterLinkProps,
} from '@monorail/v2/core/RouterLink/RouterLink'
import { OmitBannedProps, propBlockerConfig } from '@monorail/v2/shared/helpers'

export const DISPLAY = {
  Primary: 'primary',
  Outline: 'outline',
  Chromeless: 'chromeless',
  ChromelessContrast: 'chromelessContrast',
} as const

export type Display = typeof DISPLAY[keyof typeof DISPLAY]

export const SIZE = {
  Dense: 'dense',
  Compact: 'compact',
  Default: 'default',
  Large: 'large',
} as const

export type Size = typeof SIZE[keyof typeof SIZE]

//#region CSS
export const displayCss: Record<Display, CSSProp> = {
  [DISPLAY.Primary]: css`
    background-color: ${({ theme }) => theme.v2.ActionPrimary};

    &.Mui-focusVisible {
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      background-color: ${({ theme }) => theme.v2.Accent4};
    }
    &:active {
      background-color: ${({ theme }) => theme.v2.Accent3};
    }
    &[disabled] {
      background-color: ${({ theme }) => theme.v2.ActionDollop};
    }
  `,
  [DISPLAY.Outline]: css`
    color: ${({ theme }) => theme.v2.ActionPrimary};
    box-shadow: ${({ theme }) => `inset 0 0 0 1px ${theme.v2.ActionGraphic}`};

    &.Mui-focusVisible {
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      color: ${({ theme }) => theme.v2.Accent4};
      background-color: ${({ theme }) => theme.v2.ActionSmidgen};
      box-shadow: ${({ theme }) => `inset 0 0 0 1px ${theme.v2.ActionPrimary}`};

      &.Mui-focusVisible {
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 1px ${theme.v2.Accent4}, 0 0 0 3px ${theme.v2.ActionDollop}`};
      }
    }
    &:active {
      color: ${({ theme }) => theme.v2.Accent3};
      background-color: ${({ theme }) => theme.v2.ActionPinch};
      box-shadow: ${({ theme }) => `inset 0 0 0 1px ${theme.v2.Accent4}`};
    }
    &[disabled] {
      color: ${({ theme }) => theme.v2.ActionDollop};
    }
  `,
  [DISPLAY.Chromeless]: css`
    color: ${({ theme }) => theme.v2.ActionPrimary};

    &.Mui-focusVisible {
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      color: ${({ theme }) => theme.v2.Accent4};
      background-color: ${({ theme }) => theme.v2.ActionSmidgen};
    }
    &:active {
      color: ${({ theme }) => theme.v2.Accent3};
      background-color: ${({ theme }) => theme.v2.ActionPinch};
    }
    &[disabled] {
      color: ${({ theme }) => theme.v2.ActionDollop};
    }
  `,
  [DISPLAY.ChromelessContrast]: css`
    color: ${({ theme }) => theme.v2.FoundationPlate};

    &.Mui-focusVisible {
      box-shadow: ${({ theme }) => `0 0 0 3px ${theme.v2.ActionDollop}`};
    }
    &:hover {
      background-color: ${({ theme }) => theme.v2.Accent2};
    }
    &:active {
      background-color: ${({ theme }) => theme.v2.Accent3};
    }
    &[disabled] {
      color: ${({ theme }) => theme.v2.FoundationText4};
    }
  `,
}

const sizeCss: Record<Size, CSSProp> = {
  [SIZE.Dense]: css`
    height: 16px;
    padding: 0 7px;
  `,
  [SIZE.Compact]: css`
    height: 24px;
    padding: 0 7px;
  `,
  [SIZE.Default]: css`
    height: 24px;
    padding: 0 11px;
  `,
  [SIZE.Large]: css`
    height: 32px;
    padding: 0 15px;
  `,
}
//#endregion CSS

export type ButtonProps = OmitBannedProps<MUI.ButtonProps> & {
  display?: Display
  size?: Size
}

export const StyledButton = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.Button as typeof Button, // as-cast necessary in order to allow for additional Monorail pass-through props
)
  .withConfig(
    propBlockerConfig<ButtonProps>(['display', 'size']),
  )
  // Provide defaults
  .attrs(props => ({
    display: props.display ?? 'primary',
    size: props.size ?? 'default',
  }))`
  ${({ display }) => displayCss[display]}
  ${({ size }) => sizeCss[size]}
`

/**
 * Composition of Button + Link with appropriate visual defaults
 */
export function ButtonLink(props: ReactRouterLinkProps & ButtonProps) {
  const bannedPropsDefaults = { component: BaseRRLinkWithPropDenylist }

  return (
    <Button
      role="link" // override button default role
      display="chromeless"
      {...bannedPropsDefaults}
      {...props}
    />
  )
}
;(ButtonLink as any).muiName = (MUI.Button as any).muiName // eslint-disable-line

/**
 * A button is a thing that is clicked.
 *
 * - [Button | Material-UI](https://material-ui.com/components/buttons/#button)
 * - [Button | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=16730%3A198)
 */
export const Button = React.forwardRef((props: ButtonProps, ref) => {
  return <StyledButton ref={ref} {...props} />
})
;(Button as any).muiName = (MUI.Button as any).muiName // eslint-disable-line
