import type {
  BarSeriesType,
  ChartsAxisHighlightProps,
  ChartsTooltipProps,
  ResponsiveChartContainerProps,
} from '@mui/x-charts'
import { BarChart as MuiBarChart } from '@mui/x-charts'
import type {
  BarPlotSlotComponentProps,
  BarPlotSlotsComponent,
} from '@mui/x-charts/BarChart/BarPlot'
import type {
  ChartsLegendProps,
  ChartsLegendSlotComponentProps,
  ChartsLegendSlotsComponent,
} from '@mui/x-charts/ChartsLegend'
import type {
  ChartsAxisProps,
  ChartsAxisSlotComponentProps,
  ChartsAxisSlotsComponent,
} from '@mui/x-charts/models/axis'
import type { MakeOptional } from '@mui/x-date-pickers/internals'

export interface BarChartSlotsComponent
  extends ChartsAxisSlotsComponent,
    BarPlotSlotsComponent,
    ChartsLegendSlotsComponent {}
export interface BarChartSlotComponentProps
  extends ChartsAxisSlotComponentProps,
    BarPlotSlotComponentProps,
    ChartsLegendSlotComponentProps {}

export interface BarChartProps
  extends Omit<ResponsiveChartContainerProps, 'series'>,
    Omit<ChartsAxisProps, 'slots' | 'slotProps'> {
  series: Array<MakeOptional<BarSeriesType, 'type'>>
  tooltip?: ChartsTooltipProps
  axisHighlight?: ChartsAxisHighlightProps
  legend?: ChartsLegendProps
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: BarChartSlotsComponent
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: BarChartSlotComponentProps
}

export const BarChart: typeof MuiBarChart = MuiBarChart

export * from '@mui/x-charts/BarChart'
