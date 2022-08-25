import type { Components, CSSInterpolation, Theme } from '@mui/material'
import { accordionClasses } from '@mui/material'

export const MonorailAccordionOverrides: Components<Theme>['MuiAccordion'] = {
  defaultProps: {
    variant: 'outlined',
    square: false,
    disableGutters: true,
  },
  styleOverrides: {
    root: ({ ownerState }) => {
      const overrides: CSSInterpolation = {}
      if (ownerState.borderless === true) {
        overrides[`&.${accordionClasses.root}:not(:first-of-type)`] = {
          borderTop: 'none',
        }
        overrides[`&.${accordionClasses.root}:not(:last-of-type)`] = {
          borderBottom: 'none',
        }
        overrides[`&.${accordionClasses.root}::before`] = {
          display: 'none',
        }
      } else {
        overrides[`&.${accordionClasses.root}:not(:first-of-type)`] = {
          borderTop: 'none',
        }
      }
      overrides[`&.${accordionClasses.disabled}`] = {
        backgroundColor: 'transparent',
      }
      return overrides
    },
  },
}
