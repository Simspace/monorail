import type {
  CSSObject,
  TypographyProps as MuiTypographyProps,
  TypographyTypeMap,
} from '@mui/material'
import { Typography as MuiTypography } from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'

import { excludeProps, styled } from '@monorail/utils'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    data1: true
    data2: true
    data3: true
    monoBody1: true
    monoBody2: true
    monoBody3: true
    alertTitle: true
    avatarInitials: true
    badgeLabel: true
    bottomNavActiveLabel: true
    buttonLarge: true
    buttonMedium: true
    buttonSmall: true
    chip: true
    inputLabel: true
    helperText: true
    inputText: true
    tableHeader: true
    listSubheader: true
    menuItem: true
    menuItemDense: true
    tabActive: true
    tabInactive: true
    tooltip: true
  }
}

export interface TypographyExtraProps {
  lineClamp?: number
}

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
  P = {},
> = MuiTypographyProps<D, P & TypographyExtraProps>

const TypographyRoot = styled(MuiTypography, {
  shouldForwardProp: excludeProps('lineClamp'),
})<TypographyProps>(({ lineClamp }) => ({
  ...(lineClamp !== undefined ? getLineClampStyles(lineClamp) : {}),
}))

/**
 *
 * Demos:
 *
 * - [Typography](https://simspace.github.io/monorail/main/storybook/?path=/docs/data-display-typography--default)
 * - [Breadcrumbs (MUI)](https://mui.com/material-ui/react-breadcrumbs/)
 * - [Typography (MUI)](https://mui.com/material-ui/react-typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/material-ui/api/typography/)
 */
export const Typography = TypographyRoot as OverridableComponent<
  TypographyTypeMap<TypographyExtraProps>
>

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
Typography.muiName = MuiTypography.muiName

function getLineClampStyles(lineClamp: number): CSSObject {
  if (lineClamp === 1) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  } else {
    return {
      display: '-webkit-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: 'vertical',
    }
  }
}

export * from '@mui/material/Typography'
