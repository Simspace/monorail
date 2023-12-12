// Edit this file to add new stories
import React from 'react'
import { SparkLineChart } from '@mui/x-charts'

import { Box, Stack } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Charts/SparkLineChart', component: SparkLineChart }

const Template = story(() => {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          plotType="bar"
          data={[1, 4, 2, 5, 7, 2, 4, 6]}
          height={100}
        />
      </Box>
    </Stack>
  )
})

export const Default = story(Template)
