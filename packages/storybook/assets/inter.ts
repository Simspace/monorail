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

export const inter = `
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url("${InterThinWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url("${InterThinItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url("${InterExtraLightWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url("${InterExtraLightItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url("${InterLightWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url("${InterLightItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("${InterRegularWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url("${InterItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url("${InterMediumWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url("${InterMediumItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("${InterSemiBoldWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url("${InterSemiBoldItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("${InterBoldWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url("${InterBoldItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url("${InterExtraBoldWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url("${InterExtraBoldItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url("${InterBlackWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url("${InterBlackItalicWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter var";
    font-weight: "100 900";
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url("${InterRomanVarWoff2}") format("woff2");
  }
  @font-face {
    font-family: "Inter var";
    font-weight: "100 900";
    font-display: swap;
    font-style: italic;
    font-named-instance: "Italic";
    src: url("${InterItalicVarWoff2}") format("woff2");
  }

  @font-face {
    font-family: "Inter var experimental";
    font-weight: "100 900";
    font-display: swap;
    font-style: oblique 0deg 10deg;
    src: url("${InterVarWoff2}") format("woff2");
  }
`
