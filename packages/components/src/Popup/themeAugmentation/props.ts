import { PopupProps } from '../popupProps'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailPopup: PopupProps
  }
}

export {}
