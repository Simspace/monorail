// Edit this file to add new stories
import React from 'react'

import type { TabsProps } from '@monorail/components'
import { Box, Tab, Tabs, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for Tabs stories - update/extend as needed
 */
export default {
  title: 'Patterns/Outline Layout',
  component: Tabs,
  parameters: {
    creevey: {
      skip: 'Underline length is flakey',
    },
  },
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

// NOTE: redeclaring TabPanel and a11yProps with V to signify vertical variants
function TabPanelV(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yPropsV(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export const VerticalTabs = story<TabsProps>(
  args => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }

    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: 320,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
          {...args}
        >
          <Tab label="Item One" {...a11yPropsV(0)} />
          <Tab label="Item Two" {...a11yPropsV(1)} />
          <Tab label="Item Three" {...a11yPropsV(2)} />
          <Tab label="Item Four" {...a11yPropsV(3)} />
          <Tab label="Item Five" {...a11yPropsV(4)} />
          <Tab label="Item Six" {...a11yPropsV(5)} />
          <Tab label="Item Seven" {...a11yPropsV(6)} />
        </Tabs>
        <TabPanelV value={value} index={0}>
          Item One
        </TabPanelV>
        <TabPanelV value={value} index={1}>
          Item Two
        </TabPanelV>
        <TabPanelV value={value} index={2}>
          Item Three
        </TabPanelV>
        <TabPanelV value={value} index={3}>
          Item Four
        </TabPanelV>
        <TabPanelV value={value} index={4}>
          Item Five
        </TabPanelV>
        <TabPanelV value={value} index={5}>
          Item Six
        </TabPanelV>
        <TabPanelV value={value} index={6}>
          Item Seven
        </TabPanelV>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'To make vertical tabs instead of default horizontal ones, there is `orientation="vertical"`:',
        },
      },
    },
  },
)
