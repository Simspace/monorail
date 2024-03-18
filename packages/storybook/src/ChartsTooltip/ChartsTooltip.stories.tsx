// Edit this file to add new stories
import React from 'react'
import type { ChartsItemContentProps, ChartsTooltipProps } from '@mui/x-charts'
import { BarChart, chartsTooltipClasses } from '@mui/x-charts'

import { Paper, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Charts/Tooltip and Highlights', component: BarChart }

type ChartsTooltipStoryControls = {
  trigger: ChartsTooltipProps['trigger']
  xAxisHighlight: 'none' | 'line' | 'band'
  yAxisHighlight: 'none' | 'line'
  hideTooltip: boolean
}

const args = {
  trigger: 'axis',
  xAxisHighlight: 'band',
  yAxisHighlight: 'none',
  hideTooltip: false,
} as const

const argTypes = {
  trigger: {
    control: { type: 'radio' },
    options: ['axis', 'item'],
  },
  xAxisHighlight: {
    control: { type: 'radio' },
    options: ['none', 'line', 'band'],
  },
  yAxisHighlight: {
    control: { type: 'radio' },
    options: ['none', 'line'],
  },
  hideTooltip: { control: 'boolean' },
}

const Template = story<ChartsTooltipStoryControls>(
  args => {
    return (
      <Stack direction="column" sx={{ width: '100%', maxWidth: 400 }}>
        <BarChart
          margin={{ top: 10, right: 10 }}
          height={200}
          xAxis={[
            {
              data: ['page A', 'page B', 'page C', 'page D', 'page E'],
              scaleType: 'band',
              hideTooltip: args.hideTooltip,
            },
          ]}
          series={[
            { data: [2, 5, 3, 4, 1], stack: '1', label: 'Series x' },
            { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series y' },
            { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series z' },
          ]}
          axisHighlight={{
            x: args.xAxisHighlight,
            y: args.yAxisHighlight,
          }}
          tooltip={{ trigger: args.trigger }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
          sx={{
            [`& .${chartsTooltipClasses.row}`]: {
              backgroundColor: 'red',
            },
          }}
        />
      </Stack>
    )
  },
  {
    args,
    argTypes,
  },
)

export const Default = story(Template)

export const CustomTooltip = story(() => (
  <Stack direction="column" sx={{ width: '100%', maxWidth: 400 }}>
    <BarChart
      margin={{ top: 10, right: 10 }}
      height={200}
      xAxis={[
        {
          data: ['page A', 'page B', 'page C', 'page D', 'page E'],
          scaleType: 'band',
        },
      ]}
      series={[
        { data: [2, 5, 3, 4, 1], stack: '1', label: 'Series x' },
        { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series y' },
        { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series z' },
      ]}
      tooltip={{
        trigger: 'item',
        itemContent: (props: ChartsItemContentProps) => {
          const { series, itemData } = props
          return itemData.dataIndex !== undefined ? (
            <Paper sx={{ padding: 3, backgroundColor: series.color }}>
              <Typography variant="subtitle1">My Custom Tooltip</Typography>
              <Typography>{series.data[itemData.dataIndex]}</Typography>
            </Paper>
          ) : (
            <></>
          )
        },
      }}
      slotProps={{
        legend: {
          hidden: true,
        },
      }}
    />
  </Stack>
))
