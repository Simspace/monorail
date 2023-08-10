import type { FileUploadClassKey } from '../fileUploadClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailFileUpload: FileUploadClassKey
  }
}
