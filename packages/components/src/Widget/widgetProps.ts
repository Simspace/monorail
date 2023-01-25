import type { PaperProps } from '../Paper.js'
import type { WidgetClasses } from './widgetClasses.js'

export interface WidgetProps extends Omit<PaperProps, 'classes' | 'variant'> {
  classes?: Partial<WidgetClasses>
}
