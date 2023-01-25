import type { WidgetClasses } from '../widgetClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailWidget: WidgetClasses
  }
}
