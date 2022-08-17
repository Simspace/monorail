import { PopupClasses } from '../popupClasses'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailPopup: PopupClasses
  }
}
