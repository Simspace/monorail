// eslint-disable-next-line no-restricted-imports
import { createTheme } from '@mui/material'

// This "default" theme should house the global defaults that apply to all themes. This would likely include
// common settings that are not likely to differ between specific themes, like spacing, shadows, breakpoints, etc.
// Specific themes can override these settings, but hopefully won't want/need to.
// All other themes should use this as a baseline.

export const baseTheme = createTheme(
  {
    // TODO: add "global" settings that aren't likely to vary per theme (spacing, shadows, breakpoints, typography, etc.)
    spacing: 8,

    typography: {
      fontFamily: `'Proxima Nova', 'Open Sans', 'Gill Sans MT', 'Gill Sans', Corbel,
      Arial, sans-serif`,
      button: {
        fontWeight: 700,
        textTransform: 'capitalize',
      },
      h1: {
        fontSize: 64,
        fontWeight: 400,
      },
      h2: {
        fontSize: 56,
        fontWeight: 400,
      },
      h3: {
        fontSize: 48,
      },
      h4: {
        fontSize: 32,
      },
      h6: {
        fontWeight: 400,
      },
      body2: {
        fontWeight: 400,
      },
      subtitle1: {
        fontWeight: 700,
      },
      subtitle2: {
        fontWeight: 700,
      },
    },

    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: `
    //     @font-face {
    //       font-family: 'Proxima Nova';
    //       font-style: normal;
    //       font-weight: 200;
    //       src: url('./fonts/ProximaNova/proximanova-thin-webfont.woff2')
    //           format('woff2'),
    //         url('./fonts/ProximaNova/proximanova-thin-webfont.woff')
    //           format('woff');
    //     }

    //     @font-face {
    //       font-family: 'Proxima Nova';
    //       font-style: normal;
    //       font-weight: 300;
    //       src: url('./fonts/ProximaNova/proximanova-light-webfont.woff2')
    //           format('woff2'),
    //         url('./fonts/ProximaNova/proximanova-light-webfont.woff')
    //           format('woff');
    //     }

    //     @font-face {
    //       font-family: 'Proxima Nova';
    //       font-style: normal;
    //       font-weight: 400;
    //       src: url('./fonts/ProximaNova/proximanova-regular-webfont.woff2')
    //           format('woff2'),
    //         url('./fonts/ProximaNova/proximanova-regular-webfont.woff')
    //           format('woff');
    //     }

    //     @font-face {
    //       font-family: 'Proxima Nova';
    //       font-style: normal;
    //       font-weight: 500;
    //       src: url('./fonts/ProximaNova/proximanova-medium-webfont.woff2')
    //           format('woff2'),
    //         url('./fonts/ProximaNova/proximanova-medium-webfont.woff')
    //           format('woff');
    //     }

    //     @font-face {
    //       font-family: 'Proxima Nova';
    //       font-style: normal;
    //       font-weight: 700;
    //       src: url('./fonts/ProximaNova/proximanova-bold-webfont.woff2')
    //           format('woff2'),
    //         url('./fonts/ProximaNova/proximanova-bold-webfont.woff')
    //           format('woff');
    //     }

    //     @font-face {
    //       font-family: 'Proxima Nova';
    //       font-style: normal;
    //       font-weight: 800;
    //       src: url('./fonts/ProximaNova/proximanova-extrabold-webfont.woff2')
    //           format('woff2'),
    //         url('./fonts/ProximaNova/proximanova-extrabold-webfont.woff')
    //           format('woff');
    //     }
    //   `,
    //   },
    // },
  },
  {},
)
