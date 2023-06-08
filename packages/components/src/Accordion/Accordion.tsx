import React from 'react'
import type {
  AccordionProps as MuiAccordionProps,
  AccordionTypeMap,
} from '@mui/material'
import { Accordion as MuiAccordion } from '@mui/material'
import clsx from 'clsx'

import type { OverridableComponent } from '@monorail/types'

export interface AccordionExtraProps {
  /**
   * If `true`, adjacent Accordions will not have borders between them
   */
  borderless?: boolean
  /**
   * If `true`, Accordions will not have left and right borders.
   */
  removeBorderX?: boolean
  /**
   * If `true`, Accordions will not have top and bottom borders.
   */
  removeBorderY?: boolean
}

export type AccordionProps<
  D extends React.ElementType = AccordionTypeMap['defaultComponent'],
  P = {},
> = MuiAccordionProps<D, AccordionExtraProps & P>

/**
 *
 * Demos:
 *
 * - [Accordion)](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/surfaces-accordion--default)
 * - [Accordion (MUI)](https://mui.com/material-ui/react-accordion/)
 *
 * API:
 *
 * - [Accordion API](https://mui.com/material-ui/api/accordion/)
 * - inherits [Paper API](https://mui.com/material-ui/api/paper/)
 */
export const Accordion = React.forwardRef(
  ({ className, borderless, removeBorderX, removeBorderY, ...props }, ref) => (
    <MuiAccordion
      ref={ref}
      className={clsx(
        borderless === true && 'MonorailAccordion-borderless',
        removeBorderX === true && 'MonorailAccordion-removeBorderX',
        removeBorderY === true && 'MonorailAccordion-removeBorderY',
        className,
      )}
      {...props}
    />
  ),
) as OverridableComponent<AccordionTypeMap<AccordionExtraProps, 'div'>>

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
Accordion.muiName = MuiAccordion.muiName

export * from '@mui/material/Accordion'
