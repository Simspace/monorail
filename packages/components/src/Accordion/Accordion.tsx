import React from 'react'
import { Accordion as MuiAccordion } from '@mui/material'
import clsx from 'clsx'

declare module '@mui/material/Accordion' {
  interface AccordionProps {
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
}

/**
 *
 * Demos:
 *
 * - [Accordion)](https://simspace.github.io/monorail/main/storybook/?path=/docs/surfaces-accordion--default)
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
) as typeof MuiAccordion

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
Accordion.muiName = MuiAccordion.muiName

export * from '@mui/material/Accordion'
