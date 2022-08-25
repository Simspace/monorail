import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import type { Components, Theme } from '@mui/material'

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
