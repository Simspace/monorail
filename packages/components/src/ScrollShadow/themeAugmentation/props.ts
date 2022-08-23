import { ScrollShadowProps } from '../scrollShadowProps'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailScrollShadow: ScrollShadowProps
  }
}

export {}
