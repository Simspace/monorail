import type { WidgetContentProps } from '../widgetContentProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailWidgetContent: WidgetContentProps
  }
}

export {}
