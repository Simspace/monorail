import React from 'react'
import * as MUI from '@material-ui/core'

import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import * as Icons from '@monorail/v2/icons/Icons'
import { OmitBannedProps, propBlockerConfig } from '@monorail/v2/shared/helpers'

const SIZE = {
  Default: 'default',
  Large: 'large',
} as const

type Size = typeof SIZE[keyof typeof SIZE]

//#region Icons used in Toggle
const iconCss = css`
  border-radius: 50%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.v2.FoundationPlate};

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.14))
    drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2));
`

const iconSizeCss: Record<Size, CSSProp> = {
  [SIZE.Default]: css`
    width: 10px;
    height: 10px;
    padding: 1px;
  `,
  [SIZE.Large]: css`
    width: 14px;
    height: 14px;
    padding: 2px;
  `,
}

type ToggleIconProps = { size?: Size }

const CheckedIcon = styled(Icons.Check)
  .withConfig(
    propBlockerConfig<ToggleIconProps>(['size']),
  )
  .attrs((props: ToggleIconProps) => ({
    size: props.size ?? SIZE.Default,
  }))`
  ${({ size }) => iconSizeCss[size]}
  ${iconCss}
`

const UncheckedIcon = styled(Icons.Close)
  .withConfig(
    propBlockerConfig<ToggleIconProps>(['size']),
  )
  .attrs((props: ToggleIconProps) => ({
    size: props.size ?? SIZE.Default,
  }))`
  ${({ size }) => iconSizeCss[size]}
  ${iconCss}
`
//#endregion

//#region Toggle CSS
const baseCss = css`
  padding: 0;
  overflow: visible;

  & .MuiSwitch-switchBase {
    color: ${({ theme }) => theme.v2.FoundationGraphic};
  }
  & .Mui-checked {
    color: ${({ theme }) => theme.v2.ActionPrimary};

    + .MuiSwitch-track {
      background-color: ${({ theme }) => theme.v2.ActionPrimary};
      opacity: 1;
    }
  }
  & .MuiSwitch-track {
    background-color: ${({ theme }) => theme.v2.FoundationGraphic};
    opacity: 1;
  }

  & .Mui-focusVisible {
    + .MuiSwitch-track {
      box-shadow: ${({ theme }) =>
        `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
  }
`

const sizeCss: Record<Size, CSSProp> = {
  [SIZE.Default]: css`
    width: 20px;
    height: 12px;

    & .MuiSwitch-switchBase {
      padding: 1px;
    }
    & .Mui-checked {
      transform: translateX(8px);
    }
    & .MuiSwitch-track {
      border-radius: 6px;
    }
  `,
  [SIZE.Large]: css`
    width: 30px;
    height: 18px;

    & .MuiSwitch-switchBase {
      padding: 2px;
    }
    & .Mui-checked {
      transform: translateX(12px);
    }
    & .MuiSwitch-track {
      border-radius: 9px;
    }
  `,
}
//#endregion

export type ToggleProps = OmitBannedProps<MUI.SwitchProps> & {
  size?: Size
}

export const StyledSwitch = styled(MUI.Switch as typeof Toggle)
  .withConfig(
    propBlockerConfig<ToggleProps>(['size']),
  )
  .attrs(props => ({
    size: props.size ?? SIZE.Default,
  }))`
  ${({ size }) => sizeCss[size]}
  ${baseCss}
`

/**
 * Toggle switch
 *
 * - Use a (boolean) Toggle when its change performs an instantaneous action
 *   - [Toggle vs Checkbox](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)
 * - [Switch | Material-UI](https://material-ui.com/components/switches/#switch)
 * - [Toggle | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=2233%3A9077)
 */
export function Toggle(props: ToggleProps) {
  const { size, ...restProps } = props

  return (
    <StyledSwitch
      size={size}
      icon={<UncheckedIcon size={size} />}
      checkedIcon={<CheckedIcon size={size} />}
      {...restProps}
    />
  )
}
;(Toggle as any).muiName = (MUI.Switch as any).muiName // eslint-disable-line
