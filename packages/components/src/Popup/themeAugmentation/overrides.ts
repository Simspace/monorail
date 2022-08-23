import { PopupClasses } from '../popupClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailPopup: PopupClasses
  }
}

export {}
