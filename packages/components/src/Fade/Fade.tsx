import type { FadeProps as MuiFadeProps } from '@mui/material'
import { Fade as MuiFade } from '@mui/material'

import type { OverridableComponent } from '@monorail/types'

export interface FadeTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & MuiFadeProps
  defaultComponent: D
}

/**
 * The Fade transition is used by the [Modal](https://mui.com/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 *
 * Demos:
 *
 * - [Fade](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/utils-transitions-fade--default)
 * - [Transitions (MUI)](https://mui.com/material-ui/transitions/)
 *
 * API:
 *
 * - [Fade API](https://mui.com/material-ui/api/fade/)
 * - inherits [Transition API](http://reactcommunity.org/react-transition-group/transition/#Transition-props)
 */
export const Fade: OverridableComponent<FadeTypeMap> = MuiFade

export * from '@mui/material/Fade'
