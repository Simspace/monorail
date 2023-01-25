import type { WidgetHeaderProps } from '../widgetHeaderProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailWidgetHeader: WidgetHeaderProps
  }
}

export {}
