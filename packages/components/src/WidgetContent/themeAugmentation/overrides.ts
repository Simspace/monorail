import type { WidgetContentClasses } from '../widgetContentClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailWidgetContent: WidgetContentClasses
  }
}
