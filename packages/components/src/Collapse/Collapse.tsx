import type { CollapseProps as MuiCollapseProps } from '@mui/material'
import { Collapse as MuiCollapse } from '@mui/material'

import type { OverridableComponent } from '@monorail/types'

export interface CollapseTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & MuiCollapseProps
  defaultComponent: D
}

/**
 * The Collapse transition is used by the
 * [Vertical Stepper](https://mui.com/material-ui/react-stepper/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 *
 * Demos:
 *
 * - [Collapse](https://simspace.github.io/monorail/main/storybook/?path=/docs/utils-transitions-collapse--default)
 * - [Cards (MUI)](https://mui.com/material-ui/react-card/)
 * - [Lists (MUI)](https://mui.com/material-ui/react-list/)
 * - [Transitions (MUI)](https://mui.com/material-ui/transitions/)
 *
 * API:
 *
 * - [Collapse API](https://mui.com/material-ui/api/collapse/)
 * - inherits [Transition API](http://reactcommunity.org/react-transition-group/transition/#Transition-props)
 */
export const Collapse: OverridableComponent<CollapseTypeMap> = MuiCollapse

export * from '@mui/material/Collapse'
