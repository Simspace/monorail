import { MenuList as MuiMenuList } from '@mui/material'

/**
 * A permanently displayed menu following https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/.
 * It's exposed to help customization of the [`Menu`](https://mui.com/material-ui/api/menu/) component if you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 *
 * Demos:
 *
 * - [Menu List](https://simspace.github.io/monorail/main/storybook/?path=/docs/navigation-menu-menulist--default)
 * - [Menus (MUI)](https://mui.com/material-ui/react-menu/)
 *
 * API:
 *
 * - [MenuList API](https://mui.com/material-ui/api/menu-list/)
 * - inherits [List API](https://mui.com/material-ui/api/list/)
 */
export const MenuList: typeof MuiMenuList = MuiMenuList

export * from '@mui/material/MenuList'
