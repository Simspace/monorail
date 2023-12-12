// Edit this file to add new stories
import React from 'react'
import type { PieChartProps } from '@mui/x-charts'
import { PieChart } from '@mui/x-charts'

import { story } from '../helpers/storybook.js'

export default { title: 'Charts/PieChart', component: PieChart }

type PieChartStoryControls = Omit<
  PieChartProps['series'],
  'id' | 'arcLabel'
> & {
  arcLabel: boolean
  highlight: boolean
}

const args = {
  innerRadius: 0,
  outerRadius: 100,
  paddingAngle: 0,
  cornerRadius: 0,
  startAngle: 0,
  endAngle: 360,
  cx: 150,
  cy: 150,
  arcLabel: false,
  highlight: false,
} as const

const argTypes = {
  innerRadius: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  outerRadius: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  paddingAngle: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  cornerRadius: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  startAngle: { control: { type: 'range', min: 0, max: 360, step: 10 } },
  endAngle: { control: { type: 'range', min: 0, max: 360, step: 10 } },
  cx: { control: 'number' },
  cy: { control: 'number' },
  arcLabel: { control: 'boolean' },
}

const Template = story<PieChartStoryControls>(
  args => {
    const {
      arcLabel: arcLabelControl,
      highlight: highlightControl,
      ...restArgs
    } = args
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'A' },
              { id: 1, value: 15, label: 'B' },
              { id: 2, value: 20, label: 'C' },
            ],
            highlightScope:
              highlightControl === true
                ? { faded: 'global', highlighted: 'item' }
                : undefined,
            ...restArgs,
            ...(arcLabelControl === true && {
              arcLabel: item => `${item.label} (${item.value})`,
              arcLabelMinAngle: 45,
            }),
          },
        ]}
        width={400}
        height={400}
      />
    )
  },
  { args, argTypes },
)

export const Default = story(Template)
