import React from 'react'
import { Accordion as MuiAccordion } from '@mui/material'
import clsx from 'clsx'

declare module '@mui/material/Accordion' {
  interface AccordionProps {
    /**
     * If `true`, adjacent Accordions will not have borders between them
     */
    borderless?: boolean
  }
}

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
  ({ className, borderless, ...props }, ref) => (
    <MuiAccordion
      ref={ref}
      className={clsx(
        borderless === true && 'MonorailAccordion-borderless',
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
