import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Components, Theme } from '@mui/material'
import { accordionSummaryClasses } from '@mui/material/AccordionSummary'

export const MonorailAccordionSummaryOverrides: Components<Theme>['MuiAccordionSummary'] =
  {
    defaultProps: {
      expandIcon: React.createElement(ExpandMore),
    },
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: theme.spacing(0, 6, 0, 4),
          minHeight: theme.spacing(12),
          fontWeight: theme.typography.subtitle1.fontWeight,
          [`&.${accordionSummaryClasses.expanded}`]: {
            minHeight: theme.spacing(12),
          },
          [`&.${accordionSummaryClasses.focusVisible}`]: {
            backgroundColor: 'transparent',
            boxShadow: `0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
            outline: `1px solid ${theme.palette.primary.focusRing.inner}`,
            zIndex: 1,
          },
          [`&.${accordionSummaryClasses.disabled}`]: {
            fontWeight: theme.typography.body1.fontWeight,
          },
          [':hover']: {
            backgroundColor: theme.palette.default.weakEmphasis.hover,
          },
        }
      },
      content: ({ theme }) => {
        return {
          [`&.${accordionSummaryClasses.expanded}`]: {
            margin: theme.spacing(3, 0),
          },
        }
      },
    },
  }
