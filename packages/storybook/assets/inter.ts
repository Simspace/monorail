import InterBlackWoff2 from './Inter/Inter-Black.woff2'
import InterBlackItalicWoff2 from './Inter/Inter-BlackItalic.woff2'
import InterBoldWoff2 from './Inter/Inter-Bold.woff2'
import InterBoldItalicWoff2 from './Inter/Inter-BoldItalic.woff2'
import InterExtraBoldWoff2 from './Inter/Inter-ExtraBold.woff2'
import InterExtraBoldItalicWoff2 from './Inter/Inter-ExtraBoldItalic.woff2'
import InterExtraLightWoff2 from './Inter/Inter-ExtraLight.woff2'
import InterExtraLightItalicWoff2 from './Inter/Inter-ExtraLightItalic.woff2'
import InterItalicWoff2 from './Inter/Inter-Italic.woff2'
import InterLightWoff2 from './Inter/Inter-Light.woff2'
import InterLightItalicWoff2 from './Inter/Inter-LightItalic.woff2'
import InterMediumWoff2 from './Inter/Inter-Medium.woff2'
import InterMediumItalicWoff2 from './Inter/Inter-MediumItalic.woff2'
import InterRegularWoff2 from './Inter/Inter-Regular.woff2'
import InterSemiBoldWoff2 from './Inter/Inter-SemiBold.woff2'
import InterSemiBoldItalicWoff2 from './Inter/Inter-SemiBoldItalic.woff2'
import InterThinWoff2 from './Inter/Inter-Thin.woff2'
import InterThinItalicWoff2 from './Inter/Inter-ThinItalic.woff2'
import InterVarWoff2 from './Inter/Inter.var.woff2'
import InterRomanVarWoff2 from './Inter/Inter-roman.var.woff2'
import InterItalicVarWoff2 from './Inter/Inter-italic.var.woff2'

export const inter = [
  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 100,
    fontDisplay: 'swap',
    src: `url("${InterThinWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 100,
    fontDisplay: 'swap',
    src: `url("${InterThinItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 200,
    fontDisplay: 'swap',
    src: `url("${InterExtraLightWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 200,
    fontDisplay: 'swap',
    src: `url("${InterExtraLightItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 300,
    fontDisplay: 'swap',
    src: `url("${InterLightWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 300,
    fontDisplay: 'swap',
    src: `url("${InterLightItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: `url("${InterRegularWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 400,
    fontDisplay: 'swap',
    src: `url("${InterItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontDisplay: 'swap',
    src: `url("${InterMediumWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 500,
    fontDisplay: 'swap',
    src: `url("${InterMediumItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'swap',
    src: `url("${InterSemiBoldWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 600,
    fontDisplay: 'swap',
    src: `url("${InterSemiBoldItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: `url("${InterBoldWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 700,
    fontDisplay: 'swap',
    src: `url("${InterBoldItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 800,
    fontDisplay: 'swap',
    src: `url("${InterExtraBoldWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 800,
    fontDisplay: 'swap',
    src: `url("${InterExtraBoldItalicWoff2}") format("woff2");`,
  },

  {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 900,
    fontDisplay: 'swap',
    src: `url("${InterBlackWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 900,
    fontDisplay: 'swap',
    src: `url("${InterBlackItalicWoff2}") format("woff2");`,
  },

  /* -------------------------------------------------------
Variable font.
Usage:

  html { fontFamily: 'Inter', sans-serif, },
  @supports (font-variation-settings: normal) {
    html { fontFamily: 'Inter var', sans-serif, },
  },
*/
  {
    fontFamily: 'Inter var',
    fontWeight: '100 900',
    fontDisplay: 'swap',
    fontStyle: 'normal',
    fontNamedInstance: 'Regular',
    src: `url("${InterRomanVarWoff2}") format("woff2");`,
  },
  {
    fontFamily: 'Inter var',
    fontWeight: '100 900',
    fontDisplay: 'swap',
    fontStyle: 'italic',
    fontNamedInstance: 'Italic',
    src: `url("${InterItalicVarWoff2}") format("woff2");`,
  },

  /* --------------------------------------------------------------------------
[EXPERIMENTAL] Multi-axis, single variable font.

Slant axis is not yet widely supported (as of February 2019) and thus this
multi-axis single variable font is opt-in rather than the default.

When using this, you will probably need to set font-variation-settings
explicitly, e.g.

  * { font-variation-settings: "slnt" 0deg },
  .italic { font-variation-settings: "slnt" 10deg },

*/
  {
    fontFamily: 'Inter var experimental',
    fontWeight: '100 900',
    fontDisplay: 'swap',
    fontStyle: 'oblique 0deg 10deg',
    src: `url("${InterVarWoff2}") format("woff2");`,
  },
]
