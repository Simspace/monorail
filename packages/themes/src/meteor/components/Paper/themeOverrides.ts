import type { Components, Theme } from '@mui/material'
import { alpha } from '@mui/material'

export const MonorailPaperOverrides: Components<Theme>['MuiPaper'] = {
  styleOverrides: {
    root: ({
      theme,
      ownerState: { elevation = 0, variant = 'elevation' },
    }) => ({
      ...(variant === 'elevation' && {
        boxShadow: theme.shadows[elevation],
        ...(theme.palette.mode === 'dark' && {
          backgroundImage: `linear-gradient(${alpha(
            theme.palette.common.white,
            getOverlayAlphaMap(elevation),
          )}, ${alpha(
            theme.palette.common.white,
            getOverlayAlphaMap(elevation),
          )})`,
        }),
      }),
    }),
  },
}

// prettier-ignore
/**
 * Returns the overlay alpha value based on the given elevation.
 *
 * @param elevation - The elevation value.
 * @returns The overlay alpha value for the given elevation.
 */
export function getOverlayAlphaMap(elevation: number) {
  const alphaMap = [
    0,    // Elevation 0
    0.02, // Elevation 1
    0.03, // Elevation 2
    0.04, // Elevation 3
    0.05, // Elevation 4
    0.05, // Elevation 5
    0.08, // Elevation 6
    0.08, // Elevation 7
    0.1,  // Elevation 8
    0.1,  // Elevation 9
    0.1,  // Elevation 10
    0.1,  // Elevation 11
    0.12, // Elevation 12
    0.12, // Elevation 13
    0.12, // Elevation 14
    0.12, // Elevation 15
    0.14, // Elevation 16
    0.14, // Elevation 17
    0.14, // Elevation 18
    0.14, // Elevation 19
    0.14, // Elevation 20
    0.14, // Elevation 21
    0.14, // Elevation 22
    0.14, // Elevation 23
    0.2   // Elevation 24
  ];

  return alphaMap[elevation] ?? 0.1;
}
