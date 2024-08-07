// Edit this file to add new stories
import React from 'react'
import {
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  StarOutline,
} from '@mui/icons-material'
import type { Theme } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { createStyles, makeStyles } from '@mui/styles'
import { useDemoData } from '@mui/x-data-grid-generator'

import type { DataGridProps, GridColumnMenuProps } from '@monorail/components'
import {
  Button,
  DataGrid,
  GridColumnMenu,
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuSortItem,
  GridOverlay,
  gridPageCountSelector,
  gridPageSelector,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  LinearProgress,
  Pagination,
  useGridApiContext,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Grid/Components',
  component: DataGrid,
  parameters: {
    creevey: {
      skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
    },
  },
}

const defaultTheme = createTheme()
const useStyles = makeStyles(
  (theme: Theme) => ({
    primary: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    secondary: {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  }),
  { defaultTheme },
)

const CustomColumnMenuComponent = (
  props: GridColumnMenuProps & { color?: string },
) => {
  const classes = useStyles()
  const { hideMenu, colDef, ...other } = props

  if (colDef.field === 'name') {
    return (
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        colDef={colDef}
        className={classes.primary}
        {...other}
      >
        <GridColumnMenuSortItem colDef={colDef} onClick={hideMenu} />
        <GridColumnMenuFilterItem colDef={colDef} onClick={hideMenu} />
      </GridColumnMenuContainer>
    )
  }
  if (colDef.field === 'stars') {
    return (
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        colDef={colDef}
        className={classes.primary}
        {...other}
      >
        <div
          style={{
            width: 127,
            height: 160,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <StarOutline style={{ fontSize: 80 }} />
        </div>
      </GridColumnMenuContainer>
    )
  }
  return (
    <GridColumnMenu
      hideMenu={hideMenu}
      colDef={colDef}
      className={classes.primary}
      {...other}
    />
  )
}

const Template = story<DataGridProps>(args => {
  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // const apiRef = useGridApiRef();

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Button color={'primary'} variant="outlined">
        Toggle menu background
      </Button>
      <div style={{ height: 250, width: '100%', marginTop: 16 }}>
        <DataGrid
          {...args}
          // TODO(storybook): Uncomment once we have DataGridPro (paid)
          // <DataGridPro
          // apiRef={apiRef}
          columns={[
            { field: 'default', width: 150 },
            { field: 'name', width: 150 },
            { field: 'stars', width: 150 },
          ]}
          rows={[
            {
              id: 1,
              name: 'Material-UI',
              stars: 28000,
              default: 'Open source',
            },
            {
              id: 2,
              name: 'DataGridPro',
              stars: 15000,
              default: 'Enterprise',
            },
          ]}
          slots={{
            columnMenu: CustomColumnMenuComponent,
          }}
        />
      </div>
    </div>
  )
})

export const Default = story(Template)

Default.parameters = {
  docs: {
    description: {
      component: `The grid is highly customizable. Override components using the \`components\` prop.

## Overriding components

As part of the customization API, the grid allows you to override internal components with the  \`components\`  prop. The prop accepts an object of type  [\`GridSlotsComponent\`](https://mui.com/api/data-grid/data-grid/#slots).

If you wish to pass additional props in a component slot, you can do it using the  \`componentsProps\`  prop. This prop is of type  \`GridSlotsComponentsProps\`.

As an example, you could override the column menu and pass additional props as below.


    <DataGrid
      rows={rows}
      columns={columns}
      components={{
        ColumnMenu: MyCustomColumnMenu,
      }}
      componentsProps={{
        columnMenu: { background: 'red', counter: rows.length },
      }}
    />


**Note**: The casing is different between the  \`components\`  (ColumnMenu) and  \`componentsProps\`  (columnMenu) props.

### Getting props

While overriding component slots, you might need to access the grid data. Therefore, the grid exposes a  \`useGridSlotComponentProps\`  hook which allows retrieving the following props.

-   \`state\`: the current grid state.
-   \`rows\`: the current rows in the grid.
-   \`columns\`: the current columns in the grid.
-   \`apiRef\`: the  \`GridApi\`  ref that allows manipulating the grid.
-   \`rootElement\`: the root DOM element.

It can be used as below:


    function CustomRowCounter() {
      const { rows } = useGridSlotComponentProps();

      return <div>Row count: {rows.length} </div>;
    }

### Interacting with the Grid

The grid exposes several hooks to help you to access the grid Data while overriding component slots.

- \`useGridApiContext\`: returns the \`apiRef\`.
- \`useGridSelector\`: returns the result of a selector on the current state.

function CustomPagination() {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);
  const pageSize = useGridSelector(apIRef, gridPageSizeSelector);
  const page = useGridSelector(apIRef, gridPageSelector);

  return (
    <Pagination
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

## Components

The full list of overridable components can be found on the  [\`GridSlotsComponent\`](https://mui.com/api/data-grid/data-grid/#slots)  API page.

### Column menu

As mentioned above, the column menu is a component slot that can be recomposed easily and customized on each column as in the demo below.

Below is the default  \`GridColumnMenu\`.

    export const GridColumnMenu = React.forwardRef<
      HTMLUListElement,
      GridColumnMenuProps
    >(function GridColumnMenu(props: GridColumnMenuProps, ref) {
      const { hideMenu, currentColumn } = props;

      return (
        <GridColumnMenuContainer ref={ref} {...props}>
          <SortGridMenuItems onClick={hideMenu} column={currentColumn!} />
          <GridFilterMenuItem onClick={hideMenu} column={currentColumn!} />
          <HideGridColMenuItem onClick={hideMenu} column={currentColumn!} />
          <GridColumnsMenuItem onClick={hideMenu} column={currentColumn!} />
        </GridColumnMenuContainer>
      );
    });
`,
    },
  },
}

/**
 * Toolbar
 */
export const ToolbarGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  )
})

ToolbarGrid.storyName = 'Toolbar'
ToolbarGrid.parameters = {
  docs: {
    description: {
      story: `To enable the toolbar you need to add the \`Toolbar: GridToolbar\` to the grid \`components\` prop. This demo showcases how this can be achieved.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Custom Toolbar
 */
const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export const CustomToolbarGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        {...data}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  )
})

CustomToolbarGrid.storyName = 'Custom Toolbar'
CustomToolbarGrid.parameters = {
  docs: {
    description: {
      story: `Alternatively, you can compose your own toolbar.

    function CustomToolbar() {
      return (
        <GridToolbarContainer>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </GridToolbarContainer>
      );
    }
    
    `,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

type FooterStatus = 'connected' | 'disconnected'

/**
 * Footer
 */
const useStylesFooter = makeStyles({
  root: {
    padding: 10,
    display: 'flex',
  },
  connected: {
    marginRight: 2,
    color: '#4caf50',
  },
  disconnected: {
    marginRight: 2,
    color: '#d9182e',
  },
})

const CustomFooterStatusComponent = (props: { status: FooterStatus }) => {
  const classes = useStylesFooter()

  return (
    <div className={classes.root}>
      <FiberManualRecord fontSize="small" className={classes[props.status]} />
      Status {props.status}
    </div>
  )
}

export const CustomFooter = story<DataGridProps>(args => {
  const [status, setStatus] = React.useState<FooterStatus>('connected')
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  })
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div style={{ height: 350, width: '100%', marginBottom: 16 }}>
        <DataGrid
          {...args}
          {...data}
          slots={{
            footer: props => (
              <CustomFooterStatusComponent {...props} status={status} />
            ),
          }}
        />
      </div>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          setStatus(current =>
            current === 'connected' ? 'disconnected' : 'connected',
          )
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </div>
  )
})

CustomFooter.storyName = 'Footer'
CustomFooter.parameters = {
  docs: {
    description: {
      story: `The grid exposes props to hide specific elements of the UI:

-   \`hideFooter\`: If  \`true\`, the footer component is hidden.
-   \`hideFooterRowCount\`: If  \`true\`, the row count in the footer is hidden.
-   \`hideFooterSelectedRowCount\`: If  \`true\`, the selected row count in the footer is hidden.
-   \`hideFooterPagination\`: If  \`true\`, the pagination component in the footer is hidden.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Pagination
 */
const useStylesPagination = makeStyles({
  root: {
    display: 'flex',
  },
})

function CustomPagination() {
  const apiRef = useGridApiContext()
  const classes = useStylesPagination()

  return (
    <Pagination
      className={classes.root}
      color="primary"
      count={gridPageCountSelector(apiRef)}
      page={gridPageSelector(apiRef) + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}

export const CustomPaginationGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        pagination
        pageSizeOptions={[5]}
        slots={{
          pagination: CustomPagination,
        }}
        {...data}
      />
    </div>
  )
})

CustomPaginationGrid.storyName = 'Pagination'
CustomPaginationGrid.parameters = {
  docs: {
    description: {
      story: `By default, pagination uses the [TablePagination](https://mui.com/components/pagination/#table-pagination) component that is optimized for handling tabular data. This demo replaces it with the [Pagination](https://mui.com/components/pagination/) component.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Loading overlay
 */
const CustomLoadingOverlay = () => {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  )
}

export const CustomLoadingOverlayGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        slots={{
          loadingOverlay: CustomLoadingOverlay,
        }}
        loading
        {...data}
      />
    </div>
  )
})

CustomLoadingOverlayGrid.storyName = 'Loading overlay'
CustomLoadingOverlayGrid.parameters = {
  docs: {
    description: {
      story: `By default, the loading overlay displays a circular progress. This demo replaces it with a linear progress.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * No rows overlay
 */
const useStylesOverlay = makeStyles(
  theme =>
    createStyles({
      root: {
        flexDirection: 'column',
        '& .ant-empty-img-1': {
          fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
        },
        '& .ant-empty-img-2': {
          fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
        },
        '& .ant-empty-img-3': {
          fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
        },
        '& .ant-empty-img-4': {
          fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
        },
        '& .ant-empty-img-5': {
          fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
          fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
        },
      },
      label: {
        marginTop: theme.spacing(1),
      },
    }),
  { defaultTheme },
)

function CustomNoRowsOverlay() {
  const classes = useStylesOverlay()

  return (
    <GridOverlay className={classes.root}>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <div className={classes.label}>No Rows</div>
    </GridOverlay>
  )
}

export const CustomEmptyOverlayGrid = story<DataGridProps>(args => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...args}
        slots={{
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        rows={[]}
        columns={data.columns}
      />
    </div>
  )
})

CustomEmptyOverlayGrid.storyName = 'No rows overlay'
CustomEmptyOverlayGrid.parameters = {
  docs: {
    description: {
      story: `In the following demo, an illustration is added on top of the default "No Rows" message.

**Note**: As the no rows overlay, the grid allows to override the no results overlay with the \`NoResultsOverlay\` slot.`,
    },
  },
  creevey: {
    skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
  },
}

/**
 * Icons
 */
const SortedDescendingIcon = () => {
  return <ExpandMore className="icon" />
}

const SortedAscendingIcon = () => {
  return <ExpandLess className="icon" />
}

const rows = [
  {
    id: 1,
    name: 'MUI',
    stars: 28000,
  },
  {
    id: 2,
    name: 'DataGrid',
    stars: 15000,
  },
]

const columns = [
  { field: 'name', width: 150 },
  { field: 'stars', width: 150 },
]

export const CustomSortIcons = story<DataGridProps>(args => {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        {...args}
        columns={columns}
        rows={rows}
        sortModel={[
          { field: 'name', sort: 'asc' },
          { field: 'stars', sort: 'desc' },
        ]}
        slots={{
          columnSortedAscendingIcon: SortedAscendingIcon,
          columnSortedDescendingIcon: SortedDescendingIcon,
        }}
      />
    </div>
  )
})

CustomSortIcons.storyName = 'Icons'
CustomSortIcons.parameters = {
  docs: {
    description: {
      story: `As any component slot, every icon can be customized. However, it is not yet possible to use the \`componentsProps\` with icons.`,
    },
  },
}
