import type { GrowProps as MuiGrowProps } from '@mui/material'
import { Grow as MuiGrow } from '@mui/material'

import type { OverridableComponent } from '@monorail/types'

export interface GrowTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & MuiGrowProps
  defaultComponent: D
}

/**
 * The Grow transition is used by the [Tooltip](https://mui.com/material-ui/react-tooltip/) and
 * [Popover](https://mui.com/material-ui/react-popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 *
 * Demos:
 *
 * - [Grow](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/utils-transitions-grow--default)
 * - [Popover (MUI)](https://mui.com/material-ui/react-popover/)
 * - [Transitions (MUI)](https://mui.com/material-ui/transitions/)
 *
 * API:
 *
 * - [Grow API](https://mui.com/material-ui/api/grow/)
 * - inherits [Transition API](http://reactcommunity.org/react-transition-group/transition/#Transition-props)
 */
export const Grow: OverridableComponent<GrowTypeMap> = MuiGrow

export * from '@mui/material/Grow'
