/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type {
  PaperProps,
  PopperPlacementType,
  PopperProps,
  SxProps,
  Theme,
} from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'
import type { MUIStyledCommonProps } from '@mui/system'
import type { Options, OptionsGeneric, VirtualElement } from '@popperjs/core'

import type { StandardElementProps } from '@monorail/types'

import type { PopupClasses } from './popupClasses.js'

export interface PopupProps extends StandardElementProps<'div', 'title'> {
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl?: null | VirtualElement | (() => VirtualElement)
  /**
   * If `true`, adds an arrow to the popup.
   * @default false
   */
  arrow?: boolean
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PopupClasses>
  /**
   * The elevation of the popover.
   * @default 5
   */
  elevation?: number
  /**
   * If `true`, the component is shown.
   */
  open: boolean
  /**
   * The components used for each slot inside the Popup.
   * @default {}
   */
  components?: {
    Arrow?: React.ElementType
    /**
     * The component used for the popper.
     * @default Popper
     */
    Popper?: React.JSXElementConstructor<PopperProps>
    /**
     * The component used for paper.
     * @default Popper
     */
    Paper?: React.JSXElementConstructor<PaperProps>
    /**
     * The component used for the transition.
     * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Grow
     */
    Transition?: React.JSXElementConstructor<
      TransitionProps & { children: React.ReactElement<any, any> }
    >
  }
  /**
   * The props used for each slot inside the Popup.
   * @default {}
   */
  componentsProps?: {
    arrow?: React.HTMLProps<HTMLSpanElement> & MUIStyledCommonProps
    /**
     * Props applied to the Popper element.
     * @default {}
     */
    popper?: Omit<
      Partial<PopperProps>,
      | 'anchorEl'
      | 'children'
      | 'open'
      | 'placement'
      | 'modifiers'
      | 'popperOptions'
      | 'sx'
    >
    /**
     * Props applied to the [`Paper`](/material-ui/api/paper/) element.
     * @default {}
     */
    paper?: Partial<PaperProps>
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
     */
    transition?: Partial<TransitionProps>
  }
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement?: PopperPlacementType
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers?: Options['modifiers']
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions?: Partial<OptionsGeneric<any>>
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
}
