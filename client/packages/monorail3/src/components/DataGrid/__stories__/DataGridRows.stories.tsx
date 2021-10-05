// Edit this file to add new stories
import React from 'react'
import { DataGrid, DataGridProps } from '../DataGrid'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DataGrid.stories.gen'
import {
  GridOverlay,
  GridRowModel,
  GridValueGetterParams,
  useGridApiRef,
} from '@mui/x-data-grid'
import {
  getCommodityColumns,
  getRealData,
  randomInt,
  randomUserName,
  useDemoData,
} from '@mui/x-data-grid-generator'
import { LinearProgress } from '@mui/material'

export default { ...defaultStoryMeta, title: 'Data Grid/Rows' }

const Template = story<DataGridProps>(
  args => {
    return (
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={[{ field: 'name' }]}
          rows={
            [
              { id: 1, name: 'React' },
              { id: 2, name: 'Material-UI' },
            ] as GridRowModel[]
          }
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          component: `### Feeding data
Grid rows can be defined with the rows prop. rows expects an array of objects. Rows should have this type: GridRowData[]. The columns' "field" property should match a key of the row object (GridRowData).`,
        },
      },
    },
  },
)

export const Default = story(Template)

const MAX_ROW_LENGTH = 500

const sleep = async (duration: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

const CustomLoadingOverlay = () => {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  )
}

export const InfiniteLoadingGrid = story<DataGridProps>(
  args => {
    const [loading, setLoading] = React.useState(false)
    const [loadedRows, setLoadedRows] = React.useState<any>([])
    const mounted = React.useRef(true)
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 20,
      maxColumns: 6,
    })

    const loadServerRows = async (newRowLength: any) => {
      setLoading(true)
      const newData = await getRealData(newRowLength, getCommodityColumns())
      // Simulate network throttle
      await sleep(Math.random() * 500 + 100)

      if (mounted.current) {
        setLoading(false)
        setLoadedRows(loadedRows.concat(newData.rows))
      }
    }

    const handleOnRowsScrollEnd = (params: any) => {
      if (loadedRows.length <= MAX_ROW_LENGTH) {
        loadServerRows(params.viewportPageSize)
      }
    }

    React.useEffect(() => {
      return () => {
        mounted.current = false
      }
    }, [])

    return (
      <div style={{ height: 400, width: '100%' }}>
        {/* TODO: Replace with DataGridPro and uncomment onRowsScrollEnd once we have mui/x-data-grid-pro */}
        <DataGrid
          {...data}
          rows={data.rows.concat(loadedRows)}
          loading={loading}
          hideFooterPagination
          // onRowsScrollEnd={handleOnRowsScrollEnd}
          components={{
            LoadingOverlay: CustomLoadingOverlay,
          }}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Rows can be updated in two ways:

### The  \`rows\`  prop

The simplest way is to provide the new rows using the  \`rows\`  prop. It replaces the previous values. This approach has some drawbacks:

-   You need to provide all the rows.
-   You might create a performance bottleneck when preparing the rows array to provide to the grid.

### Infinite loading

❗️ Only available in \`DataGridPro\` (https://mui.com/components/data-grid/rows/#infinite-loading)

The grid provides a  \`onRowsScrollEnd\`  prop that can be used to load additional rows when the scroll reaches the bottom of the viewport area.

In addition, the area in which the callback provided to the  \`onRowsScrollEnd\`  is called can be changed using  \`scrollEndThreshold\`.`,
        },
      },
    },
  },
)

export const ApiRefRowsGrid = story<DataGridProps>(
  args => {
    const columns = [
      { field: 'id' },
      { field: 'username', width: 150 },
      { field: 'age', width: 80, type: 'number' },
    ]

    const rows = [
      { id: 1, username: randomUserName(), age: randomInt(10, 80) },
      { id: 2, username: randomUserName(), age: randomInt(10, 80) },
      { id: 3, username: randomUserName(), age: randomInt(10, 80) },
      { id: 4, username: randomUserName(), age: randomInt(10, 80) },
    ]
    const apiRef = useGridApiRef()

    // React.useEffect(() => {
    //   const subscription = interval(200).subscribe(() => { // internal() from rxjs
    //     apiRef.current.updateRows([
    //       {
    //         id: randomInt(1, 4),
    //         username: randomUserName(),
    //         age: randomInt(10, 80),
    //       },
    //       {
    //         id: randomInt(1, 4),
    //         username: randomUserName(),
    //         age: randomInt(10, 80),
    //       },
    //     ]);
    //   });

    //   return () => {
    //     subscription.unsubscribe();
    //   };
    // }, [apiRef]);

    return (
      <></>
      // TODO: Uncomment once we have DataGridPro (paid)
      // <div style={{ height: 400, width: '100%' }}>
      //   <DataGridPro rows={rows} columns={columns} apiRef={apiRef} />
      // </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `❗️ Only available in \`DataGridPro\` (https://mui.com/components/data-grid/rows/#apiref)
          
The second way to update rows is to use the apiRef. This is an imperative API that is designed to solve the previous two limitations of the declarative  \`rows\`  prop.  \`apiRef.current.updateRows()\`, updates the rows to the grid. It  **merges**  the new rows with the previous ones.

The following demo updates the rows every 200ms.

The default behavior of  \`updateRows\`  API is to upsert rows. So if a row has an id that is not in the current list of rows then it will be added to the grid.

Alternatively, if you would like to delete a row, you would need to pass an extra  \`_action\`  property in the update object as below.

    apiRef.current.updateRows([{ id: 1, _action: 'delete' }]);
`,
        },
      },
    },
  },
)

export const DenseHeightGrid = story<DataGridProps>(
  args => {
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 100,
      maxColumns: 6,
    })

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rowHeight={25} {...data} />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `By default, the rows have a height of 52 pixels. This matches the normal height in the  [Material Design guidelines](https://material.io/components/data-tables).
        
To change the row height for the whole grid, set the  \`rowHeight\`  prop:`,
        },
      },
    },
  },
)

export const StylingRows = story<DataGridProps>(args => <></>, {
  parameters: {
    docs: {
      description: {
        story: `You can check the [styling rows](https://mui.com/components/data-grid/style/#styling-rows) section for more information.`,
      },
    },
  },
})

export const RowSpanningGrid = story<DataGridProps>(args => <></>, {
  parameters: {
    docs: {
      description: {
        story: `🚧 This feature isn't implemented yet. It's coming.


Grouping columns allows you to have multiple levels of columns in your header and the ability, if needed, to 'open and close' column groups to show and hide additional columns.`,
      },
    },
  },
})

export const RowReorderGrid = story<DataGridProps>(args => <></>, {
  parameters: {
    docs: {
      description: {
        story: `❗️ Only available in \`DataGridPro\` (https://mui.com/components/data-grid/rows/#row-reorder)

🚧 This feature isn't implemented yet. It's coming.

Grouping columns allows you to have multiple levels of columns in your header and the ability, if needed, to 'open and close' column groups to show and hide additional columns.`,
      },
    },
  },
})
