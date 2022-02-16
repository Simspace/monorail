// eslint-disable-next-line no-restricted-imports
import { createTheme } from '@mui/material'

import { FontSize, LineHeight } from '../components/Typography/FontSize'
import { FontWeight } from '../components/Typography/FontWeight'

// This "default" theme should house the global defaults that apply to all themes. This would likely include
// common settings that are not likely to differ between specific themes, like spacing, shadows, breakpoints, etc.
// Specific themes can override these settings, but hopefully won't want/need to.
// All other themes should use this as a baseline.

export const baseTheme = createTheme(
  {
    // TODO: add "global" settings that aren't likely to vary per theme (spacing, shadows, breakpoints, typography, etc.)
    spacing: 4,

    typography: {
      htmlFontSize: 16,
      fontFamily: `'Gotham SSm A', 'Gotham SSm B', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol'`,
      data1: {
        fontSize: FontSize.Data1,
        lineHeight: LineHeight.Data1,
        fontWeight: FontWeight.Light,
      },
      data2: {
        fontSize: FontSize.Data2,
        lineHeight: LineHeight.Data2,
        fontWeight: FontWeight.Light,
      },
      data3: {
        fontSize: FontSize.Data3,
        lineHeight: LineHeight.Data3,
        fontWeight: FontWeight.Light,
      },
      h1: {
        fontSize: FontSize.H1,
        lineHeight: LineHeight.H1,
        fontWeight: FontWeight.Medium,
      },
      h2: {
        fontSize: FontSize.H2,
        lineHeight: LineHeight.H1,
        fontWeight: FontWeight.Medium,
      },
      h3: {
        fontSize: FontSize.H3,
        lineHeight: LineHeight.H1,
        fontWeight: FontWeight.Medium,
      },
      body1: {
        fontSize: FontSize.Body1,
        lineHeight: LineHeight.Body1,
        fontWeight: FontWeight.Book,
      },
      body2: {
        fontSize: FontSize.Body2,
        lineHeight: LineHeight.Body2,
        fontWeight: FontWeight.Medium,
      },
      subtitle1: {
        fontSize: FontSize.Subtitle1,
        lineHeight: LineHeight.Subtitle1,
        fontWeight: FontWeight.Medium,
      },
      subtitle2: {
        fontSize: FontSize.Subtitle2,
        lineHeight: LineHeight.Subtitle2,
        fontWeight: FontWeight.Book,
      },
      overline: {
        fontSize: FontSize.Overline,
        lineHeight: LineHeight.Overline,
        fontWeight: FontWeight.Book,
        textTransform: 'uppercase',
      },
      caption: {
        fontSize: FontSize.Caption,
        lineHeight: LineHeight.Caption,
        fontWeight: FontWeight.Book,
      },
      button: {
        fontSize: FontSize.Button,
        lineHeight: LineHeight.Button,
        fontWeight: FontWeight.Bold,
        textTransform: 'capitalize',
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
