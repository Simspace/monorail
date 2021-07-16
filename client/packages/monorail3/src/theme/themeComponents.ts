// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

/**
 * Constructs the `components` overrides using a subset of the overall theme that includes everything except `components`
 */
export const getThemeComponents = (
  _theme: MUI.Theme,
): MUI.ThemeOptions['components'] => ({
  // TODO: we may want to split these into separate files - one theme override per component? Or maybe we just do it all here for consistency
  MuiAccordion: {
    defaultProps: {
      variant: 'outlined',
      square: true,
    },
  },
  MuiButton: {
    defaultProps: {
      //disableRipple: true,
    },
    styleOverrides: {
      // TODO: The default button sizes in MUI seem to not be working correctly in our environment. It seems to work
      // in a codesandbox with MUI + emotion, so not sure what we're doing wrong. Possibly an MUI bug or an issue with
      // using styled-components as the style engine via @material-ui/styled-engine alias. We're likely going to
      // customize these styles anyway, so not a big deal. (AW 2021-07-16)
      sizeSmall: {
        height: '24px',
        padding: '4px 8px',
      },
      sizeMedium: {
        height: '32px',
        padding: '8px 16px',
      },
      sizeLarge: {
        height: '40px',
        padding: '12px 24px',
      },
    },
    variants: [
      {
        props: { size: 'extraSmall' },
        style: {
          fontSize: '0.6rem',
          height: '16px',
          padding: '2px 4px',
        },
      },
    ],
  },
  MuiIconButton: {
    defaultProps: {
      //disableRipple: true,
    },
  },
})
