import type { ScrollShadowClasses } from '../scrollShadowClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailScrollShadow: ScrollShadowClasses
  }
}
