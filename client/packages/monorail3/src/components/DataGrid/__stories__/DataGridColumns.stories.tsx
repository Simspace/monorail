// Edit this file to add new stories
import React from 'react'
import { DataGrid, DataGridProps } from '../DataGrid'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './DataGrid.stories.gen'
import {
  GridActionsCellItem,
  GridCellValue,
  GridColDef,
  GridColTypeDef,
  GridRenderCellParams,
  GridRowId,
  GridToolbar,
  GridValueFormatterParams,
  GridValueGetterParams,
} from '@mui/x-data-grid'
import { Button } from '../../Button/Button'
import { Popper } from '../../Popper/Popper'
import { Paper } from '../../Paper/Paper'
import { Typography } from '../../Typography/Typography'
import { createStyles, makeStyles } from '@mui/styles'
import { Delete, FileCopy, Security } from '@mui/icons-material'
import {
  randomCreatedDate,
  randomPrice,
  randomStatusOptions,
  randomUpdatedDate,
  useDemoData,
} from '@mui/x-data-grid-generator'

export default { ...defaultStoryMeta, title: 'Data Grid/Columns' }

const Template = story<DataGridProps>(
  args => {
    return (
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={[{ field: 'username' }, { field: 'age' }]}
          rows={[
            {
              id: 1,
              username: '@MaterialUI',
              age: 20,
            },
          ]}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          component: `Grid \`columns\` are defined with the \`columns\` prop. columns expects an array of objects. The columns should have this type: \`GridColDef[]\`.

\`field\` is the only required property since it's the column identifier. It's also used to match with \`GridRowData\` values.

    interface GridColDef {
      /**
       * The column identifier. It's used to match with [[GridRowData]] values.
       */
      field: string;
      …
    }

By default, columns are ordered according to the order they are included in the \`columns\` array.

⚠️ The \`columns\` prop should keep the same reference between two renders. The columns are designed to be definitions, to never change once the component is mounted. Otherwise, you take the risk of losing the column width state (if resized). You can create the array outside of the render function or memoize it.`,
        },
      },
    },
  },
)

export const Default = story(Template)

export const HeaderColumnsGrid = story<DataGridProps>(
  args => {
    const rows = [
      {
        id: 1,
        username: '@MaterialUI',
        age: 20,
      },
    ]
    return (
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={[
            {
              field: 'username',
              headerName: 'Username',
              description:
                'The identification used by the person with access to the online service.',
            },
            { field: 'age', headerName: 'Age' },
          ]}
          rows={rows}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can configure the headers with: 

- \`headerName\`: The title of the column rendered in the column header cell.
- \`description\`: The description of the column rendered as tooltip if the column header name is not fully displayed.`,
        },
      },
    },
  },
)

export const ColumnWidthGrid = story<DataGridProps>(
  args => {
    const rows = [
      {
        id: 1,
        username: '@MaterialUI',
        age: 38,
      },
    ]
    return (
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={[{ field: 'username', width: 200 }, { field: 'age' }]}
          rows={rows}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'By default, the columns have a width of 100px. This is an arbitrary, easy-to-remember value. To change the width of a column, use the `width` property available in `GridColDef`.',
        },
      },
    },
  },
)

export const ColumnMinWidthGrid = story<DataGridProps>(
  args => {
    const rows = [
      {
        id: 1,
        username: '@MaterialUI',
        age: 38,
      },
    ]
    return (
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={[{ field: 'username', minWidth: 150 }, { field: 'age' }]}
          rows={rows}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'By default, the columns have a minimum width of 50px. This is an arbitrary, easy-to-remember value. To change the minimum width of a column, use the `minWidth` property available in `GridColDef`.',
        },
      },
    },
  },
)

export const ColumnFluidWidthGrid = story<DataGridProps>(
  args => {
    const rows = [
      {
        id: 1,
        username: '@MaterialUI',
        age: 20,
      },
    ]
    return (
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={[
            {
              field: 'id',
              flex: 1,
              minWidth: 150,
            },
            {
              field: 'username',
              width: 200,
            },
            {
              field: 'age',
              flex: 0.3,
              minWidth: 50,
            },
          ]}
          rows={rows}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Column fluidity or responsiveness can be by achieved by setting the \`flex\` property in \`GridColDef\`.

The \`flex\` property accepts a value between 0 and ∞. It works by dividing the remaining space in the grid among all \`flex\` columns in proportion to their flex value.

For example, consider a grid with a total width of 500px that has three columns: the first with width: 200; the second with \`flex: 1\`; and third with \`flex: 0.5\`. The first column will be 200px wide, leaving 300px remaining. The column with \`flex: 1\` is twice the size of \`flex: 0.5\`, which means that final sizes will be: 200px, 200px, 100px.

To set a minimum width for a \`flex\` column set the \`minWidth\` property in \`GridColDef\`.

**Note**

- \`flex\` doesn't work together with \`width\`. If you set both \`flex\` and \`width\` in \`GridColDef\`, \`flex\` will override \`width\`.
- \`flex\` doesn't work if the combined width of the columns that have \`width\` is more than the width of the grid itself. If that is the case a scroll bar will be visible, and the columns that have \`flex\` will default back to their base value of 100px.`,
        },
      },
    },
  },
)

export const ColumnHidingGrid = story<DataGridProps>(
  args => {
    const rows = [
      {
        id: 1,
        username: '@MaterialUI',
        age: 20,
      },
    ]
    return (
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          columns={[{ field: 'id', hide: true }]}
          rows={rows}
          {...args}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'Set the column definition attribute `hide` to `true` to hide the column.',
        },
      },
    },
  },
)

export const ColumnSizingGrid = story(args => {
  return <></>
})

ColumnSizingGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\` (https://mui.com/components/data-grid/columns/#resizing)

By default, \`DataGridPro\` allows all columns to be resized by dragging the right portion of the column separator.

To prevent the resizing of a column, set \`resizable: false\` in the \`GridColDef\`. Alternatively, to disable all columns resize, set the prop \`disableColumnResize={true}\`.

To restrict resizing a column under a certain width set the \`minWidth\` property in \`GridColDef\`.

To capture changes in the width of a column there are two callbacks that are called:

- \`onColumnResize\`: Called while a column is being resized.
- \`onColumnWidthChange\`: Called after the width of a column is changed, but not during resizing.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

//#region Value getter
const getFullName = (params: GridValueGetterParams) => {
  return `${params.getValue(params.id, 'firstName') || ''} ${
    params.getValue(params.id, 'lastName') || ''
  }`
}

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    valueGetter: getFullName,
    sortComparator: (v1, v2) => v1!.toString().localeCompare(v2!.toString()),
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
  { id: 4, lastName: 'Stark', firstName: 'Arya' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
]

export const ValueGetterGrid = story<DataGridProps>(
  args => {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} {...args} />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Sometimes a column might not have a corresponding value, or you might want to render a combination of different fields.

To achieve that, set the \`valueGetter\` attribute of \`GridColDef\` as in the example below.

**Note**: You need to set a \`sortComparator\` for the column sorting to work when setting the \`valueGetter\` attribute.

    function getFullName(params) {
      return \`\${params.getValue(params.id, 'firstName') || ''} \${
        params.getValue(params.id, 'lastName') || ''
      }\`;
    }

    const columns: GridColDef[] = [
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      {
        field: 'fullName',
        headerName: 'Full name',
        width: 160,
        valueGetter: getFullName,
        sortComparator: (v1, v2, cellParams1, cellParams2) =>
          getFullName(cellParams1).localeCompare(getFullName(cellParams2)),
      },
    ];

The value generated is used for filtering, sorting, rendering, etc unless overridden by a more specific configuration.`,
        },
      },
    },
  },
)
//#endregion

export const ValueFormatterGrid = story<DataGridProps>(
  args => {
    const rows = [
      {
        id: 1,
        taxRate: 0.1,
      },
      {
        id: 2,
        taxRate: 0.2,
      },
      {
        id: 3,
        taxRate: 0.3,
      },
    ]
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={[
            {
              type: 'number',
              field: 'taxRate',
              headerName: 'Tax Rate',
              width: 150,
              valueFormatter: (params: GridValueFormatterParams) => {
                const valueFormatted = Number(
                  (params.value as number) * 100,
                ).toLocaleString()
                return `${valueFormatted} %`
              },
            },
          ]}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The value formatter allows you to convert the value before displaying it. Common use cases include converting a JavaScript \`Date\` object to a date string or a \`Number\` into a formatted number (e.g. "1,000.50").

In the following demo, a formatter is used to display the tax rate's decimal value (e.g. 0.2) as a percentage (e.g. 20%).

The value generated is only used for rendering purposes. Filtering and sorting will not relay on the formatted value. Use the valueParser to support filtering.

The value generated is only used for rendering purposes. Filtering and sorting will not relay on the formatted value. Use the **valueParser** to support filtering.
          `,
        },
      },
    },
  },
)

export const ValueParserGrid = story<DataGridProps>(
  args => {
    const rows = [
      {
        id: 1,
        taxRate: 0.1,
      },
      {
        id: 2,
        taxRate: 0.2,
      },
      {
        id: 3,
        taxRate: 0.3,
      },
    ]
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={[
            {
              type: 'number',
              field: 'taxRate',
              headerName: 'Tax Rate',
              width: 150,
              valueFormatter: (params: GridValueFormatterParams) => {
                const valueFormatted = Number(
                  (params.value as number) * 100,
                ).toLocaleString()
                return `${valueFormatted} %`
              },
              valueParser: (value: GridCellValue) => Number(value) / 100,
            },
          ]}
        />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The value parser allows you to convert the user-entered value to another one used for filtering or editing. Common use cases include parsing date strings to JavaScript \`Date\` objects or formatted numbers (e.g. "1,000.50") into \`Number\`. It can be understood as the inverse of **valueFormatter**.

In the following demo, the tax rate is displayed as a percentage (e.g. 20%) but a decimal number is used as value (e.g. 0.2).
          `,
        },
      },
    },
  },
)

export const RenderCellGrid = story<DataGridProps>(
  args => {
    const columns: GridColDef[] = [
      {
        field: 'date',
        headerName: 'Year',
        width: 150,
        renderCell: (params: GridRenderCellParams) => (
          <strong>
            {(params.value as Date).getFullYear()}
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
            >
              Open
            </Button>
          </strong>
        ),
      },
    ]

    const rows = [
      {
        id: 1,
        date: new Date(1979, 0, 1),
      },
      {
        id: 2,
        date: new Date(1984, 1, 1),
      },
      {
        id: 3,
        date: new Date(1992, 2, 1),
      },
    ]
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} {...args} />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `By default, the grid render the value as a string in the cell. It resolves the rendered output in the following order:

1. \`renderCell() => ReactElement\`
2. \`valueFormatter() => string\`
3. \`valueGetter() => string\`
4. \`row[field]\`

The \`renderCell\` method of the column definitions is similar to \`valueFormatter\`. However, it trades to be able to only render in a cell in exchange for allowing to return a React node (instead of a string).

    const columns: GridColDef[] = [
      {
        field: 'date',
        headerName: 'Year',
        renderCell: (params: GridRenderCellParams) => (
          <strong>
            {(params.value as Date).getFullYear()}
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
            >
              Open
            </Button>
          </strong>
        ),
      },
    ];

**Note**: It is recommended to also set a \`valueFormatter\` providing a representation for the value to be used when [exporting](https://mui.com/components/data-grid/export/#export-custom-rendered-cells) the data.

### Render edit cell

The \`renderCell\` render function allows customizing the rendered in "view mode" only. For the "edit mode", set the \`renderEditCell\` function to customize the edit component. Check the [editing page](https://mui.com/components/data-grid/editing) for more details about editing.
`,
        },
      },
    },
  },
)

interface GridCellExpandProps {
  value: string
  width: number
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: 'center',
      lineHeight: '24px',
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      '& .cellValue': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  }),
)

function isOverflown(element: Element): boolean {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  )
}

const GridCellExpand = React.memo(function GridCellExpand(
  props: GridCellExpandProps,
) {
  const { width, value } = props
  const wrapper = React.useRef<HTMLDivElement | null>(null)
  const cellDiv = React.useRef(null)
  const cellValue = React.useRef(null)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const classes = useStyles()
  const [showFullCell, setShowFullCell] = React.useState(false)
  const [showPopper, setShowPopper] = React.useState(false)

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current!)
    setShowPopper(isCurrentlyOverflown)
    setAnchorEl(cellDiv.current)
    setShowFullCell(true)
  }

  const handleMouseLeave = () => {
    setShowFullCell(false)
  }

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined
    }

    function handleKeyDown(nativeEvent: KeyboardEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [setShowFullCell, showFullCell])

  return (
    <div
      ref={wrapper}
      className={classes.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cellDiv}
        style={{
          height: 1,
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <div ref={cellValue} className="cellValue">
        {value}
      </div>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current!.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </div>
  )
})

function renderCellExpand(params: GridRenderCellParams) {
  return (
    <GridCellExpand
      value={params.value ? params.value.toString() : ''}
      width={params.colDef.computedWidth}
    />
  )
}

export const RenderExpandCellGrid = story<DataGridProps>(
  args => {
    const columns: GridColDef[] = [
      {
        field: 'col1',
        headerName: 'Column 1',
        width: 80,
        renderCell: renderCellExpand,
      },
      {
        field: 'col2',
        headerName: 'Column 2',
        width: 100,
        renderCell: renderCellExpand,
      },
      {
        field: 'col3',
        headerName: 'Column 3',
        width: 150,
        renderCell: renderCellExpand,
      },
    ]
    const rows: any = [
      {
        id: 1,
        col1: 'Hello',
        col2: 'World',
        col3:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
      },
      {
        id: 2,
        col1: 'DataGridPro',
        col2: 'is Awesome',
        col3:
          'In publishing and graphic design, Lorem ipsum is a placeholder text or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      },
      {
        id: 3,
        col1: 'Material-UI',
        col2: 'is Amazing',
        col3:
          'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      },
      {
        id: 4,
        col1: 'Hello',
        col2: 'World',
        col3:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.',
      },
      {
        id: 5,
        col1: 'DataGridPro',
        col2: 'is Awesome',
        col3:
          'Typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      },
      {
        id: 6,
        col1: 'Material-UI',
        col2: 'is Amazing',
        col3:
          'Lorem ipsum may be used as a placeholder before final copy is available.',
      },
    ]
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} {...args} />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'By default, the grid cuts the content of a cell and renders an ellipsis if the content of the cell does not fit in the cell. As a workaround, you can create a cell renderer that will allow seeing the full content of the cell in the grid.',
        },
      },
    },
  },
)

export const RenderHeaderGrid = story<DataGridProps>(
  args => {
    const columns: GridColDef[] = [
      {
        field: 'date',
        width: 150,
        type: 'date',
        renderHeader: () => (
          <strong>
            {'Birthday '}
            <span role="img" aria-label="enjoy">
              🎂
            </span>
          </strong>
        ),
      },
    ]

    const rows = [
      {
        id: 1,
        date: new Date(1979, 0, 1),
      },
      {
        id: 2,
        date: new Date(1984, 1, 1),
      },
      {
        id: 3,
        date: new Date(1992, 2, 1),
      },
    ]
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} {...args} />
      </div>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can customize the look of each header with the renderHeader method. It takes precedence over the headerName property.

    const columns: GridColDef[] = [
      {
        field: 'date',
        width: 150,
        type: 'date',
        renderHeader: (params: GridColumnHeaderParams) => (
          <strong>
            {'Birthday '}
            <span role="img" aria-label="enjoy">
              🎂
            </span>
          </strong>
        ),
      },
    ];

### Styling header

You can check the  [styling header](https://mui.com/components/data-grid/style/#styling-column-headers)  section for more information.

### Styling cells

You can check the  [styling cells](https://mui.com/components/data-grid/style/#styling-cells)  section for more information.`,
        },
      },
    },
  },
)

//#region Column Types
export const ColumnTypesGrid = story<DataGridProps>(args => {
  const initialRows = [
    {
      id: 1,
      name: 'Damien',
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      isAdmin: true,
      country: 'Spain',
    },
    {
      id: 2,
      name: 'Nicolas',
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      isAdmin: false,
      country: 'France',
    },
    {
      id: 3,
      name: 'Kate',
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      isAdmin: false,
      country: 'Brazil',
    },
  ]

  const [rows, setRows] = React.useState(initialRows)

  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setRows(prevRows => prevRows.filter(row => row.id !== id))
    },
    [],
  )

  const toggleAdmin = React.useCallback(
    (id: GridRowId) => () => {
      setRows(prevRows =>
        prevRows.map(row =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
        ),
      )
    },
    [],
  )

  const duplicateUser = React.useCallback(
    (id: GridRowId) => () => {
      setRows(prevRows => {
        const rowToDuplicate = prevRows.find(row => row.id === id)!
        const newRows = [...prevRows, { ...rowToDuplicate, id: Date.now() }]
        console.log(newRows)
        return newRows
      })
    },
    [],
  )

  const columns = React.useMemo(
    () => [
      { field: 'name', type: 'string' },
      { field: 'age', type: 'number' },
      { field: 'dateCreated', type: 'date', width: 130 },
      { field: 'lastLogin', type: 'dateTime', width: 180 },
      { field: 'isAdmin', type: 'boolean', width: 120 },
      {
        field: 'country',
        type: 'singleSelect',
        width: 120,
        valueOptions: [
          'Bulgaria',
          'Netherlands',
          'France',
          'United Kingdom',
          'Spain',
          'Brazil',
        ],
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<Security />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopy />}
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser],
  )

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid columns={columns} rows={rows} {...args} />
    </div>
  )
})

ColumnTypesGrid.parameters = {
  docs: {
    description: {
      story: `To facilitate configuration of the columns, some column types are predefined. By default, columns are assumed to hold strings, so the default column string type will be applied. As a result, column sorting will use the string comparator, and the column content will be aligned to the left side of the cell.

The following are the native column types:

- \`'string'\` (default)
- \`'number'\`
- \`'date'\`
- \`'dateTime'\`
- \`'boolean'\`
- \`'singleSelect'\`
- \`'actions'\` 

To use most of the column types, you only need to define the \`type\` property in your column definition. However, some types require additional properties to be set to make them work correctly:

- If the column type is \`'singleSelect'\`, you also need to set the \`valueOptions\` property in the respective column definition.


{
  field: 'country',
  type: 'singleSelect',
  valueOptions: ['United Kingdom', 'Spain', 'Brazil']
}


- If the column type is \`'actions'\`, you need to provide a \`getActions\` function that returns an array of actions available for each row (React elements). You can add the \`showInMenu\` prop on the returned React elements to signal the data grid to group these actions inside a row menu.


{
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => [
    <GridActionsCellItem icon={...} onClick={...} label="Delete">,
    <GridActionsCellItem icon={...} onClick={...} label="Print" showInMenu>,
  ]
}`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}
//endregion

//#region Custom column types
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const usdPrice: GridColTypeDef = {
  type: 'number',
  width: 130,
  valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
  cellClassName: 'font-tabular-nums',
}

const useCustomColumnTypesGridStyles = makeStyles({
  root: {
    '& .font-tabular-nums': {
      fontVariantNumeric: 'tabular-nums',
    },
  },
})

export const CustomColumnTypesGrid = story<DataGridProps>(args => {
  const rows = [
    {
      id: 1,
      status: randomStatusOptions(),
      subTotal: randomPrice(),
      total: randomPrice(),
    },
    {
      id: 2,
      status: randomStatusOptions(),
      subTotal: randomPrice(),
      total: randomPrice(),
    },
    {
      id: 3,
      status: randomStatusOptions(),
      subTotal: randomPrice(),
      total: randomPrice(),
    },
  ]

  const classes = useCustomColumnTypesGridStyles()

  return (
    <div style={{ height: 300, width: '100%' }} className={classes.root}>
      <DataGrid
        columns={[
          { field: 'status', width: 130 },
          { field: 'subTotal', ...usdPrice },
          { field: 'total', ...usdPrice },
        ]}
        rows={rows}
      />
    </div>
  )
})
CustomColumnTypesGrid.storyName = 'Custom column types'
CustomColumnTypesGrid.parameters = {
  docs: {
    description: {
      story: `You can extend the native column types with your own by simply spreading the necessary properties.
      
The demo below defines a new column type: \`usdPrice\` that extends the native \`number\` column type. 

const usdPrice: GridColTypeDef = {
  type: 'number',
  width: 130,
  valueFormatter: ({ value }) => valueFormatter.format(Number(value)),
  cellClassName: 'font-tabular-nums',
};`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}
//#endregion

export const ColumnMenuGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 5,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid {...args} {...data} disableColumnMenu />
    </div>
  )
})
ColumnMenuGrid.storyName = 'Column menu'
ColumnMenuGrid.parameters = {
  docs: {
    description: {
      story:
        'By default, each column header displays a column menu. The column menu allows actions to be performed in the context of the target column, e.g. filtering. To disable the column menu, set the prop `disableColumnMenu={true}`.',
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const ColumnSelectorGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 10,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  )
})
ColumnSelectorGrid.storyName = 'Column selector'
ColumnSelectorGrid.parameters = {
  docs: {
    description: {
      story: `To enable the the toolbar you need to add \`Toolbar: GridToolbar\` to the grid \`components\` prop.

In addition, the column selector can be shown by using the "Show columns" menu item in the column menu.

The user can choose which columns are visible using the column selector from the toolbar.

To disable the column selector, set the prop \`disableColumnSelector={true}\`.
`,
    },
  },
  creevey: {
    skip:
      'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

export const ColumnOrderingGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 20,
  })

  return (
    <></>
    // TODO(storybook): Uncomment once we have DataGridPro (paid)
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGridPro {...data} />
    // </div>
  )
})

ColumnOrderingGrid.parameters = {
  docs: {
    description: {
      story: `❗️ Only available in \`DataGridPro\` (https://mui.com/components/data-grid/columns/#column-reorder)

By default, \`DataGridPro\` allows all column reordering by dragging the header cells and moving them left or right.

By default, \`DataGridPro\` allows all column reordering by dragging the header cells and moving them left or right.

To disable reordering on all columns, set the prop \`disableColumnReorder={true}\`.
    
To disable reordering in a specific column, set the \`disableReorder\` property to true in the \`GridColDef\` of the respective column.

In addition, column reordering emits the following events that can be imported:

- \`columnHeaderDragStart\`: emitted when dragging of a header cell starts.
- \`columnHeaderDragEnter\`: emitted when the cursor enters another header cell while dragging.
- \`columnHeaderDragOver\`: emitted when dragging a header cell over another header cell.
- \`columnHeaderDragEnd\`: emitted when dragging of a header cell stops.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

export const ColumnGroupsGrid = story<DataGridProps>(args => <></>)

ColumnGroupsGrid.parameters = {
  docs: {
    description: {
      story: `🚧 This feature isn't implemented yet. It's coming.


Grouping columns allows you to have multiple levels of columns in your header and the ability, if needed, to 'open and close' column groups to show and hide additional columns.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

export const ColumnPinningGrid = story<DataGridProps>(args => <></>)

ColumnPinningGrid.parameters = {
  docs: {
    description: {
      story: `🚧 This feature isn't implemented yet. It's coming.
      
Sticky (or frozen, locked, or pinned) columns are columns that are visible at all times while the user scrolls the grid horizontally.`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

export const ColumnSpanningGrid = story<DataGridProps>(args => <></>)

ColumnSpanningGrid.parameters = {
  docs: {
    description: {
      story: `🚧 This feature isn't implemented yet. It's coming.
      
Each cell takes up the width of one column. Column spanning allows to change this default behavior. It allows cells to span multiple columns. This is very close to the "column spanning" in an HTML \`<table>\``,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
