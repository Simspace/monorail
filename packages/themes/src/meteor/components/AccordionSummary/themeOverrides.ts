import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import type { Components, Theme } from '@mui/material'
import { accordionSummaryClasses } from '@mui/material/AccordionSummary'

export const MonorailAccordionSummaryOverrides: Components<Theme>['MuiAccordionSummary'] =
  {
    defaultProps: {
      expandIcon: React.createElement(ExpandMore),
    },
    styleOverrides: {
      root: ({ theme }) => {
        return {
          ...theme.typography.subtitle1,
          padding: theme.spacing(0, 6, 0, 4),
          minHeight: theme.spacing(12),
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
            opacity: theme.palette.action.disabledOpacity,
          },
          [':hover']: {
            backgroundColor: theme.palette.action.hover,
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
      expandIconWrapper: ({ theme }) => ({
        color: theme.palette.default.main,
      }),
    },
  }
