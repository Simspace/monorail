// Edit this file to add new stories
import React from 'react'
import type { PieChartSlotComponentProps } from '@mui/x-charts'
import { PieChart } from '@mui/x-charts'

import { useTheme } from '@monorail/utils'

import { story } from '../helpers/storybook.js'

export default { title: 'Charts/Legend', component: PieChart }

export type AnchorX = 'left' | 'right' | 'middle'
export type AnchorY = 'top' | 'bottom' | 'middle'

type ChartsLegendStoryControls = PieChartSlotComponentProps['legend'] & {
  vertical: AnchorY
  horizontal: AnchorX
  breakLine: boolean
  labelFill: string | undefined
  labelFontSize: number | undefined
  hidden: boolean
}

const args: ChartsLegendStoryControls = {
  direction: 'column',
  vertical: 'middle',
  horizontal: 'right',
  itemMarkWidth: 20,
  itemMarkHeight: 2,
  markGap: 5,
  itemGap: 10,
  padding: 0,
  hidden: false,
  labelFill: undefined,
  labelFontSize: undefined,
  breakLine: false,
}

const argTypes = {
  padding: { control: 'number' },
  itemGap: { control: 'number' },
  hidden: { control: 'boolean' },
  // Position
  direction: {
    control: { type: 'radio' },
    options: ['row', 'column'],
    table: { category: 'Position' },
  },
  vertical: {
    control: { type: 'radio' },
    options: ['top', 'middle', 'bottom'],
    table: { category: 'Position' },
  },
  horizontal: {
    control: { type: 'radio' },
    options: ['middle', 'left', 'right'],
    table: { category: 'Position' },
  },
  // Mark
  itemMarkWidth: { control: 'number', table: { category: 'Mark' } },
  itemMarkHeight: { control: 'number', table: { category: 'Mark' } },
  markGap: { control: 'number', table: { category: 'Mark' } },
  // Label
  labelFontSize: {
    control: 'number',
    table: {
      category: 'Label',
    },
  },
  labelFill: {
    control: 'color',
    table: { category: 'Label' },
  },
  breakLine: { control: 'boolean', table: { category: 'Label' } },
}

const Template = story<ChartsLegendStoryControls>(
  args => {
    const theme = useTheme()
    return (
      <PieChart
        width={600}
        height={400}
        margin={{ top: 100, left: 100, bottom: 100 }}
        series={[
          {
            data: [
              {
                id: 0,
                value: 10,
                label: args.breakLine === false ? 'Series A' : 'Series\nA',
              },
              {
                id: 1,
                value: 15,
                label: args.breakLine === false ? 'Series B' : 'Series\nB',
              },
              {
                id: 2,
                value: 20,
                label: args.breakLine === false ? 'Series C' : 'Series\nC',
              },
              {
                id: 3,
                value: 10,
                label: args.breakLine === false ? 'Series D' : 'Series\nD',
              },
              {
                id: 4,
                value: 15,
                label: args.breakLine === false ? 'Series E' : 'Series\nE',
              },
              {
                id: 5,
                value: 20,
                label: args.breakLine === false ? 'Series F' : 'Series\nF',
              },
              {
                id: 6,
                value: 10,
                label: args.breakLine === false ? 'Series G' : 'Series\nG',
              },
              {
                id: 7,
                value: 15,
                label: args.breakLine === false ? 'Series H' : 'Series\nH',
              },
            ],
          },
        ]}
        slotProps={{
          legend: {
            direction: args.direction,
            position: {
              vertical: args.vertical as AnchorY,
              horizontal: args.horizontal as AnchorX,
            },
            itemMarkWidth: args.itemMarkWidth,
            itemMarkHeight: args.itemMarkHeight,
            markGap: args.markGap,
            itemGap: args.itemGap,
            padding: args.padding,
            hidden: args.hidden,
            labelStyle: {
              fontSize:
                args.labelFontSize ?? theme.typography.subtitle1.fontSize,
              fill: args.labelFill ?? theme.palette.text.primary,
            },
          },
        }}
      />
    )
  },
  {
    args,
    argTypes,
  },
)

export const Default = story(Template)
