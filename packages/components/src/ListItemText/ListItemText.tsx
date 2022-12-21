import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material'
import { ListItemText as MuiListItemText } from '@mui/material'

import type { TypographyProps } from '../Typography.js'

export interface ListItemTextProps<
  PrimaryTypographyComponent extends React.ElementType = 'span',
  SecondaryTypographyComponent extends React.ElementType = 'p',
> extends Omit<
    MuiListItemTextProps<
      PrimaryTypographyComponent,
      SecondaryTypographyComponent
    >,
    'primaryTypographyProps' | 'secondaryTypographyProps'
  > {
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps?: TypographyProps<
    PrimaryTypographyComponent,
    { component?: PrimaryTypographyComponent }
  >
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps?: TypographyProps<
    SecondaryTypographyComponent,
    { component?: SecondaryTypographyComponent }
  >
}

/**
 *
 * Demos:
 *
 * - [List Item Text](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-list-listitemtext--default)
 * - [Lists (MUI)](https://mui.com/material-ui/react-list/)
 *
 * API:
 *
 * - [ListItemText API](https://mui.com/material-ui/api/list-item-text/)
 */
export const ListItemText = MuiListItemText as <
  PrimaryTypographyComponent extends React.ElementType = 'span',
  SecondaryTypographyComponent extends React.ElementType = 'p',
>(
  props: ListItemTextProps<
    PrimaryTypographyComponent,
    SecondaryTypographyComponent
  >,
) => JSX.Element

export * from '@mui/material/ListItemText'
