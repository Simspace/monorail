import { ClickAwayListener as MuiClickAwayListener } from '@mui/material'

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click away listener](https://simspace.github.io/monorail/main/storybook/?path=/docs/utils-clickawaylistener--default)
 * - [Click away listener (MUI)](https://mui.com/base/react-click-away-listener/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/base/api/click-away-listener/)
 */
export const ClickAwayListener: typeof MuiClickAwayListener =
  MuiClickAwayListener

export * from '@mui/material/ClickAwayListener'
