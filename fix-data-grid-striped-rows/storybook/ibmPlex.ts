import IBMPlexMonoBold from './IBMPlex/IBMPlexMono-Bold.woff2'
import IBMPlexMonoBoldItalic from './IBMPlex/IBMPlexMono-BoldItalic.woff2'
import IBMPlexMonoExtraLight from './IBMPlex/IBMPlexMono-ExtraLight.woff2'
import IBMPlexMonoExtraLightItalic from './IBMPlex/IBMPlexMono-ExtraLightItalic.woff2'
import IBMPlexMonoItalic from './IBMPlex/IBMPlexMono-Italic.woff2'
import IBMPlexMonoLight from './IBMPlex/IBMPlexMono-Light.woff2'
import IBMPlexMonoLightItalic from './IBMPlex/IBMPlexMono-LightItalic.woff2'
import IBMPlexMonoMedium from './IBMPlex/IBMPlexMono-Medium.woff2'
import IBMPlexMonoMediumItalic from './IBMPlex/IBMPlexMono-MediumItalic.woff2'
import IBMPlexMonoRegular from './IBMPlex/IBMPlexMono-Regular.woff2'
import IBMPlexMonoSemiBold from './IBMPlex/IBMPlexMono-SemiBold.woff2'
import IBMPlexMonoSemiBoldItalic from './IBMPlex/IBMPlexMono-SemiBoldItalic.woff2'
import IBMPlexMonoText from './IBMPlex/IBMPlexMono-Text.woff2'
import IBMPlexMonoTextItalic from './IBMPlex/IBMPlexMono-TextItalic.woff2'
import IBMPlexMonoThin from './IBMPlex/IBMPlexMono-Thin.woff2'
import IBMPlexMonoThinItalic from './IBMPlex/IBMPlexMono-ThinItalic.woff2'
import IBMPlexSansBold from './IBMPlex/IBMPlexSans-Bold.woff2'
import IBMPlexSansBoldItalic from './IBMPlex/IBMPlexSans-BoldItalic.woff2'
import IBMPlexSansExtraLight from './IBMPlex/IBMPlexSans-ExtraLight.woff2'
import IBMPlexSansExtraLightItalic from './IBMPlex/IBMPlexSans-ExtraLightItalic.woff2'
import IBMPlexSansItalic from './IBMPlex/IBMPlexSans-Italic.woff2'
import IBMPlexSansLight from './IBMPlex/IBMPlexSans-Light.woff2'
import IBMPlexSansLightItalic from './IBMPlex/IBMPlexSans-LightItalic.woff2'
import IBMPlexSansMedium from './IBMPlex/IBMPlexSans-Medium.woff2'
import IBMPlexSansMediumItalic from './IBMPlex/IBMPlexSans-MediumItalic.woff2'
import IBMPlexSansRegular from './IBMPlex/IBMPlexSans-Regular.woff2'
import IBMPlexSansSemiBold from './IBMPlex/IBMPlexSans-SemiBold.woff2'
import IBMPlexSansSemiBoldItalic from './IBMPlex/IBMPlexSans-SemiBoldItalic.woff2'
import IBMPlexSansText from './IBMPlex/IBMPlexSans-Text.woff2'
import IBMPlexSansTextItalic from './IBMPlex/IBMPlexSans-TextItalic.woff2'
import IBMPlexSansThin from './IBMPlex/IBMPlexSans-Thin.woff2'
import IBMPlexSansThinItalic from './IBMPlex/IBMPlexSans-ThinItalic.woff2'

export const ibmPlex = `
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 700;
    src: local("IBM Plex Mono Bold"), local("IBMPlexMono-Bold"), url(${IBMPlexMonoBold}) format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 700;
    src: local("IBM Plex Mono Bold Italic"), local("IBMPlexMono-BoldItalic"), url("${IBMPlexMonoBoldItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 200;
    src: local("IBM Plex Mono ExtLt"), local("IBMPlexMono-ExtLt"), url("${IBMPlexMonoExtraLight}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 200;
    src: local("IBM Plex Mono ExtLt Italic"), local("IBMPlexMono-ExtLtItalic"), url("${IBMPlexMonoExtraLightItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 400;
    src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url("${IBMPlexMonoItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 300;
    src: local("IBM Plex Mono Light"), local("IBMPlexMono-Light"), url("${IBMPlexMonoLight}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 300;
    src: local("IBM Plex Mono Light Italic"), local("IBMPlexMono-LightItalic"), url("${IBMPlexMonoLightItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 500;
    src: local("IBM Plex Mono Medm"), local("IBMPlexMono-Medm"), url("${IBMPlexMonoMedium}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 500;
    src: local("IBM Plex Mono Medm Italic"), local("IBMPlexMono-MedmItalic"), url("${IBMPlexMonoMediumItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 400;
    src: local("IBM Plex Mono"), local("IBMPlexMono"), url("${IBMPlexMonoRegular}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 600;
    src: local("IBM Plex Mono SmBld"), local("IBMPlexMono-SmBld"), url("${IBMPlexMonoSemiBold}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 600;
    src: local("IBM Plex Mono SmBld Italic"), local("IBMPlexMono-SmBldItalic"), url("${IBMPlexMonoSemiBoldItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 450;
    src: local("IBM Plex Mono Text"), local("IBMPlexMono-Text"), url("${IBMPlexMonoText}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 450;
    src: local("IBM Plex Mono Text Italic"), local("IBMPlexMono-TextItalic"), url("${IBMPlexMonoTextItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 100;
    src: local("IBM Plex Mono Thin"), local("IBMPlexMono-Thin"), url("${IBMPlexMonoThin}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Mono";
    font-style: italic;
    font-weight: 100;
    src: local("IBM Plex Mono Thin Italic"), local("IBMPlexMono-ThinItalic"), url("${IBMPlexMonoThinItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 700;
    src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"), url("${IBMPlexSansBold}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 700;
    src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"), url("${IBMPlexSansBoldItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 200;
    src: local("IBM Plex Sans ExtLt"), local("IBMPlexSans-ExtLt"), url("${IBMPlexSansExtraLight}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 200;
    src: local("IBM Plex Sans ExtLt Italic"), local("IBMPlexSans-ExtLtItalic"), url("${IBMPlexSansExtraLightItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 400;
    src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"), url("${IBMPlexSansItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 300;
    src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"), url("${IBMPlexSansLight}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 300;
    src: local("IBM Plex Sans Light Italic"), local("IBMPlexSans-LightItalic"), url("${IBMPlexSansLightItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    src: local("IBM Plex Sans Medm"), local("IBMPlexSans-Medm"), url("${IBMPlexSansMedium}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 500;
    src: local("IBM Plex Sans Medm Italic"), local("IBMPlexSans-MedmItalic"), url("${IBMPlexSansMediumItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    src: local("IBM Plex Sans"), local("IBMPlexSans"), url("${IBMPlexSansRegular}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    src: local("IBM Plex Sans SmBld"), local("IBMPlexSans-SmBld"), url("${IBMPlexSansSemiBold}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 600;
    src: local("IBM Plex Sans SmBld Italic"), local("IBMPlexSans-SmBldItalic"), url("${IBMPlexSansSemiBoldItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 450;
    src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"), url("${IBMPlexSansText}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 450;
    src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"), url("${IBMPlexSansTextItalic}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 100;
    src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"), url("${IBMPlexSansThin}") format("woff2");
  }
  @font-face {
    font-family: "IBM Plex Sans";
    font-style: italic;
    font-weight: 100;
    src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"), url("${IBMPlexSansThinItalic}") format("woff2");
  }
`
