// Edit this file to add new stories
import React from 'react'
import type { BarChartProps } from '@mui/x-charts'
import { BarChart } from '@mui/x-charts'

import { story } from '../helpers/storybook.js'

export default { title: 'Charts/BarChart', component: BarChart }

type BarChartStoryControls = Partial<BarChartProps> & {
  stack: boolean
}

const args = {
  layout: 'vertical',
  stack: false,
} as const

const argTypes = {
  stack: { control: 'boolean' },
  layout: {
    control: { type: 'radio' },
    options: ['vertical', 'horizontal'],
  },
}

const Template = story<BarChartStoryControls>(
  args => {
    return (
      <BarChart
        layout={args.layout}
        xAxis={
          args.layout === 'vertical'
            ? [{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]
            : undefined
        }
        yAxis={
          args.layout === 'horizontal'
            ? [{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]
            : undefined
        }
        series={[
          { data: [4, 3, 5], ...(args.stack === true && { stack: 'total' }) },
          { data: [1, 6, 3], ...(args.stack === true && { stack: 'total' }) },
          { data: [2, 5, 6], ...(args.stack === true && { stack: 'total' }) },
        ]}
        width={500}
        height={300}
      />
    )
  },
  {
    args,
    argTypes,
  },
)

export const Default = story(Template)
