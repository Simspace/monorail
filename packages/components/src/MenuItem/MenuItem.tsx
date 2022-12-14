import type { MenuItemTypeMap } from '@mui/material'
import { MenuItem as MuiMenuItem } from '@mui/material'

import type { ExtendButtonBase, OverrideProps } from '@monorail/types'

export interface MenuItemExtraProps {
  value?: string | number | ReadonlyArray<string> | {}
}

export type MenuItemProps<
  D extends React.ElementType = MenuItemTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<MenuItemTypeMap<P & MenuItemExtraProps, D>, D>

/**
 *
 * Demos:
 *
 * - [Menu Item](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/navigation-menu-menuitem--default)
 * - [Menus](https://mui.com/material-ui/react-menu/)
 *
 * API:
 *
 * - [MenuItem API](https://mui.com/material-ui/api/menu-item/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
export const MenuItem = MuiMenuItem as ExtendButtonBase<
  MenuItemTypeMap<MenuItemExtraProps>
>

export * from '@mui/material/MenuItem'
