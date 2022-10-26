import type { SearchProps } from '../searchProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailSearch: SearchProps
  }
}

export {}
