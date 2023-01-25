import type { WidgetProps } from '../widgetProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailWidget: WidgetProps
  }
}

export {}
