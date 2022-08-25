import type { PopupProps } from '../popupProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailPopup: PopupProps
  }
}

export {}
