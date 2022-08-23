import { SvgIcon as MuiSvgIcon } from '@mui/material'

declare module '@mui/material/SvgIcon' {
  /**
   * Extend the SvgIcon color prop to apply a default grey color.
   */
  interface SvgIconPropsColorOverrides {
    default: true
  }
}

/**
 *
 * Demos:
 *
 * - [Icons](https://mui.com/material-ui/icons/)
 * - [Material icons](https://mui.com/material-ui/material-icons/)
 *
 * API:
 *
 * - [SvgIcon API](https://mui.com/material-ui/api/svg-icon/)
 */
export const SvgIcon: typeof MuiSvgIcon = MuiSvgIcon

export * from '@mui/material/SvgIcon'
