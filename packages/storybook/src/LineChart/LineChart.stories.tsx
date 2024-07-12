// Edit this file to add new stories
import React from 'react'
import type {
  ChartsAxisHighlightProps,
  LineChartProps,
  LineSeriesType,
} from '@mui/x-charts'
import { LineChart } from '@mui/x-charts'

import { story } from '../helpers/storybook.js'

export default { title: 'Charts/LineChart', component: LineChart }

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490]
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300]
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
]

type LineChartStoryProps = {
  area: LineSeriesType['area']
  showMark: LineSeriesType['showMark']
  curve: LineSeriesType['curve']
  stack: boolean
  disableLineItemHighlight: LineChartProps['disableLineItemHighlight']
  xAxisHighlight: ChartsAxisHighlightProps['x']
  yAxisHighlight: ChartsAxisHighlightProps['y']
}

const args = {
  area: false,
  showMark: true,
  stack: false,
  disableLineItemHighlight: false,
  xAxisHighlight: 'line',
  yAxisHighlight: 'none',
  curve: 'linear',
} as const

const argTypes = {
  area: { control: 'boolean' },
  showMark: { control: 'boolean' },
  stack: { control: 'boolean' },
  disableLineItemHighlight: { control: 'boolean' },
  xAxisHighlight: {
    control: { type: 'select' },
    options: ['line', 'band', 'none'],
  },
  yAxisHighlight: {
    control: { type: 'select' },
    options: ['line', 'none'],
  },
  curve: {
    control: { type: 'select' },
    options: [
      'catmullRom',
      'linear',
      'monotoneX',
      'monotoneY',
      'natural',
      'step',
      'stepBefore',
      'stepAfter',
    ],
  },
}

const Template = story<LineChartStoryProps>(
  args => {
    return (
      <LineChart
        width={500}
        height={300}
        disableLineItemHighlight={args.disableLineItemHighlight}
        axisHighlight={{
          x: args.xAxisHighlight,
          y: args.yAxisHighlight,
        }}
        series={[
          {
            data: pData,
            type: 'line',
            label: 'pv',
            area: args.area,
            showMark: args.showMark,
            curve: args.curve,
            ...(args.stack === true && { stack: 'total' }),
          },
          {
            data: uData,
            type: 'line',
            label: 'uv',
            area: args.area,
            showMark: args.showMark,
            curve: args.curve,
            ...(args.stack === true && { stack: 'total' }),
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
      />
    )
  },
  {
    args,
    argTypes,
  },
)

export const Default = story(Template)
