// Edit this file to add new stories
import React from 'react'
import { DataGrid, DataGridProps } from '../DataGrid'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DataGrid.stories.gen'
import { GridValueGetterParams } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'

export default { ...defaultStoryMeta, title: 'Data Grid/Layout' }

const Template = story<DataGridProps>(
  args => {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 5,
      maxColumns: 6,
    })

    return (
      <div style={{ height: 400, width: '100%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid {...data} />
          </div>
        </div>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          component: `The data grid offers multiple layout mode.

By default, the grid has no intrinsic dimensions. It occupies the space its parent leaves.

> ⚠️ When using % (**percentage**) for your height or width. You need to make sure the container you are putting the grid into also has an intrinsic dimension. The browsers fit the element according to a percentage of the parent dimension. If the parent has no dimensions, then the % will be zero.

### Flex layout

It's recommended to use a flex container to render the grid. This allows a flexible layout, resizes well, and works on all devices.`,
        },
      },
    },
  },
)

export const Default = story(Template)

export const FixedSizeGrid = story<DataGridProps>(
  args => {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 5,
      maxColumns: 6,
    })

    return (
      <div style={{ height: 400, width: '100%' }}>
        <div style={{ height: 350, width: '100%' }}>
          <DataGrid {...args} {...data} />
        </div>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can predefine dimensions for the parent of the grid.`,
        },
      },
    },
  },
)

export const AutoHeightGrid = story<DataGridProps>(
  args => {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 4,
      maxColumns: 6,
    })

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid autoHeight {...args} {...data} />
        <p>more content</p>
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The  \`autoHeight\`  prop allows the grid to size according to its content. This means that the number of rows will drive the height of the grid and consequently, they will all be rendered and visible to the user at the same time.

> ⚠️ This is not recommended for large datasets as row virtualization will not be able to improve performance by limiting the number of elements rendered in the DOM.`,
        },
      },
    },
  },
)
