import { ScrollShadowProps } from '../scrollShadowProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailScrollShadow: ScrollShadowProps
  }
}

export {}
