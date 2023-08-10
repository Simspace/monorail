import type { FileUploadProps } from '../fileUploadProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailFileUpload: FileUploadProps
  }
}

export {}
