import type { WidgetHeaderClasses } from '../widgetHeaderClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailWidgetHeader: WidgetHeaderClasses
  }
}
