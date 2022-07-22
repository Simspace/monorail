// Edit this file to add new stories
import React from 'react'
import { useMovieData } from '@mui/x-data-grid-generator'

import {
  DataGrid,
  DataGridProps,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '../../..'
import { story } from '../../../test-helpers/storybook'

export default { title: 'Data Grid/Group & Pivot', component: DataGrid }

const Template = story<DataGridProps>(() => <></>)

export const Default = story(Template)

Default.parameters = {
  docs: {
    description: {
      component: `🚧 This feature isn't implemented yet. It's coming.
      
Use grouping, pivoting and more to analyse the data in depth.`,
    },
  },
  creevey: {
    skip: `🚧 This feature isn't implemented yet. It's coming.`,
  },
}

/**
 * Tree data
 */
export const TreeData = story<DataGridProps>(() => <></>)
TreeData.storyName = 'Tree data'
TreeData.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\` 

🚧 This feature isn't implemented yet. It's coming.
      
Tree data allows to visualize self-referential hierarchical (tree-like structure) data.`,
    },
  },
  creevey: {
    skip: `🚧 This feature isn't implemented yet. It's coming.`,
  },
}

/**
 * Master detail
 */
export const MasterDetail = story<DataGridProps>(() => <></>)
MasterDetail.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\`
      
🚧 This feature isn't implemented yet. It's coming.
      
The feature allows to display row details on an expandable pane.`,
    },
  },
  creevey: {
    skip: `🚧 This feature isn't implemented yet. It's coming.`,
  },
}

/**
 * Grouping
 */
export const Grouping = story<DataGridProps>(() => {
  const data = useMovieData()
  const apiRef = useGridApiRef()

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ['company'],
      },
    },
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        apiRef={apiRef}
        rowGroupingColumnMode="single"
        initialState={initialState}
      />
    </div>
  )
})

Grouping.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in the Premium plan
      
Group rows together that share a column value, this creates a visible header for each group and allows the end-user to collapse groups that they don't want to see.`,
    },
  },
  creevey: {
    skip: `🚧 This feature isn't implemented yet. It's coming.`,
  },
}

/**
 * Aggregation
 */
export const Aggregation = story<DataGridProps>(() => <></>)
Aggregation.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in the Premium plan
      
🚧 This feature isn't implemented yet. It's coming.
      
When grouping, you will be able to apply an aggregation function to populate the group row with values.`,
    },
  },
  creevey: {
    skip: `🚧 This feature isn't implemented yet. It's coming.`,
  },
}

/**
 * Pivoting
 */
export const Pivoting = story<DataGridProps>(() => <></>)
Pivoting.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in the Premium plan
      
🚧 This feature isn't implemented yet. It's coming.
      
Pivoting will allow you to take a columns values and turn them into columns.`,
    },
  },
  creevey: {
    skip: `🚧 This feature isn't implemented yet. It's coming.`,
  },
}
