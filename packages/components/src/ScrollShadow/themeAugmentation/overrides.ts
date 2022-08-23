import { ScrollShadowClasses } from '../scrollShadowClasses'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailScrollShadow: ScrollShadowClasses
  }
}
