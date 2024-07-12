import React from 'react'
import type { TreeViewBaseItem } from '@mui/x-tree-view/models'
import type { StoryFn } from '@storybook/react'

import type { RichTreeViewProps } from '@monorail/components'
import { Box, RichTreeView } from '@monorail/components'

export default {
  title: 'Data Display/RichTreeView',
  component: RichTreeView,
}

type MuiXProduct = TreeViewBaseItem<{
  internalId: string
  label: string
}>

const MUI_X_PRODUCTS: Array<MuiXProduct> = [
  {
    internalId: 'grid',
    label: 'Data Grid',
    children: [
      { internalId: 'grid-community', label: '@mui/x-data-grid' },
      { internalId: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { internalId: 'grid-premium', label: '@mui/x-data-grid-premium' },
    ],
  },
  {
    internalId: 'pickers',
    label: 'Date and Time Pickers',
    children: [
      { internalId: 'pickers-community', label: '@mui/x-date-pickers' },
      { internalId: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
    ],
  },
  {
    internalId: 'charts',
    label: 'Charts',
    children: [{ internalId: 'charts-community', label: '@mui/x-charts' }],
  },
  {
    internalId: 'tree-view',
    label: 'Tree View',
    children: [
      { internalId: 'tree-view-community', label: '@mui/x-tree-view' },
    ],
  },
]

const getItemId = (item: MuiXProduct) => item.internalId

const Template: StoryFn<RichTreeViewProps<MuiXProduct, true>> = args => (
  <Box sx={{ minHeight: 352, minWidth: 250 }}>
    <RichTreeView {...args} items={MUI_X_PRODUCTS} getItemId={getItemId} />
  </Box>
)

/**
 * This example demonstrates a basic usage of the RichTreeView component from Material-UI.
 * It displays a hierarchical tree structure representing various MUI X products.
 * The tree view can be expanded or collapsed to reveal or hide the sub-items.
 */
export const Default = Template.bind({})
Default.args = {}
