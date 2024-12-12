import { Grid2 as MuiGrid2 } from '@mui/material'

/**
 *
 * Demos:
 *
 * - [Grid](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/layout-grid--default)
 * - [Grid (MUI)](https://mui.com/material-ui/react-grid/)
 *
 * API:
 *
 * - [Grid API](https://mui.com/material-ui/api/grid/)
 */
export const Grid2: typeof MuiGrid2 = MuiGrid2

export type {
  GridDirection as Grid2Direction,
  GridSize as Grid2Size,
  GridSpacing as Grid2Spacing,
  GridWrap as Grid2Wrap,
  Grid2ClassKey,
  Grid2Props,
  Grid2Slot,
  Grid2TypeMap,
  GridBaseProps,
  GridOffset,
} from '@mui/material/Grid2'
export { getGrid2UtilityClass, grid2Classes } from '@mui/material/Grid2'
