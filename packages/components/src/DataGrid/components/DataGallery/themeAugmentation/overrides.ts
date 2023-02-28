import type { DataGalleryClassKey } from '../constants/dataGalleryClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailDataGallery: DataGalleryClassKey
  }
}
