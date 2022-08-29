import { Accordion as MuiAccordion } from '@mui/material'

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
export const Accordion: typeof MuiAccordion = MuiAccordion

export * from '@mui/material/Accordion'
