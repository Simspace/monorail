import type { Components, Theme } from '@mui/material'
import { accordionClasses } from '@mui/material'

export const MonorailAccordionOverrides: Components<Theme>['MuiAccordion'] = {
  defaultProps: {
    variant: 'outlined',
    square: false,
    disableGutters: true,
  },
  styleOverrides: {
    root: () => {
      return {
        '&:not(:first-of-type)': {
          borderTop: 'none',
        },
        '&.MonorailAccordion-borderless': {
          [`&:not(:first-of-type)`]: {
            borderTop: 'none',
          },
          [`&:not(:last-of-type)`]: {
            borderBottom: 'none',
          },
          [`&::before`]: {
            display: 'none',
          },
        },
        '&.MonorailAccordion-removeBorderX': {
          borderLeft: 'none',
          borderRight: 'none',
        },
        '&.MonorailAccordion-removeBorderY': {
          [`&:first-of-type`]: {
            borderTop: 'none',
          },
          [`&:last-of-type`]: {
            borderBottom: 'none',
          },
        },
        [`&.${accordionClasses.disabled}`]: {
          backgroundColor: 'transparent',
        },
      }
    },
  },
}
