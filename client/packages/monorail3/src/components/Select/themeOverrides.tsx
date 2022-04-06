import React from 'react'
import { Components, Theme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MonorailSelectOverrides: Components<Theme>['MuiSelect'] = {
  defaultProps: {
    IconComponent: ExpandMoreIcon,
    MenuProps: {
      sx: {
        marginTop: 2,
      },
    },
  },
  styleOverrides: {},
}
