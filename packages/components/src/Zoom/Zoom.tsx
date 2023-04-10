import type { ZoomProps as MuiZoomProps } from '@mui/material'
import { Zoom as MuiZoom } from '@mui/material'

import type { OverridableComponent } from '@monorail/types'

export interface ZoomTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & MuiZoomProps
  defaultComponent: D
}

/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](https://mui.com/material-ui/react-button/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 *
 * Demos:
 *
 * - [Zoom](https://simspace.github.io/monorail/main/storybook/?path=/docs/utils-transitions-zoom--default)
 * - [Transitions](https://mui.com/material-ui/transitions/)
 *
 * API:
 *
 * - [Zoom API](https://mui.com/material-ui/api/zoom/)
 * - inherits [Transition API](http://reactcommunity.org/react-transition-group/transition/#Transition-props)
 */
export const Zoom: OverridableComponent<ZoomTypeMap> = MuiZoom

export * from '@mui/material/Zoom'
