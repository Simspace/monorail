import type React from 'react'
import type { SlideProps as MuiSlideProps } from '@mui/material'
import { Slide as MuiSlide } from '@mui/material'

import type { OverridableComponent } from '@monorail/types'

export interface SlideTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & MuiSlideProps
  defaultComponent: D
}

/**
 * The Slide transition is used by the [Drawer](https://mui.com/material-ui/react-drawer/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 *
 * Demos:
 *
 * - [Slide](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/utils-transitions-slide--default)
 * - [Dialogs (MUI)](https://mui.com/material-ui/react-dialog/)
 * - [Transitions (MUI)](https://mui.com/material-ui/transitions/)
 *
 * API:
 *
 * - [Slide API](https://mui.com/material-ui/api/slide/)
 * - inherits [Transition API](http://reactcommunity.org/react-transition-group/transition/#Transition-props)
 */
export const Slide: OverridableComponent<SlideTypeMap> = MuiSlide

export * from '@mui/material/Slide'
