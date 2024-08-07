// Edit this file to add new stories
import React from 'react'

import type { DataGridProps } from '@monorail/components'
import {
  Autocomplete,
  Button,
  createTable,
  DataGrid,
  GridActionsCellItem,
  MenuItem,
  TextField,
  Typography,
  useGridApiRef,
} from '@monorail/components'
import * as Icons from '@monorail/components/icons'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Grid/DataGrid',
  component: DataGrid,
  parameters: {
    creevey: {
      skip: 'Mismatch expected because data gets regenerated by mui/x-data-grid-generator.',
    },
  },
}

const { columns } = createTable<FilterStoryRow>()(
  { field: 'id', headerName: 'ID' },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 150,
    editable: true,
    renderHeader: ({ colDef }) => (
      <React.Fragment>
        <Icons.Person />
        <Typography variant="body2">{colDef.headerName}</Typography>
      </React.Fragment>
    ),
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minWidth: 150,
    editable: true,
    headerActions: ({ closeMenu }) => [
      <MenuItem
        key="lastName-action1"
        onClick={() => {
          closeMenu()
        }}
      >
        Action 1
      </MenuItem>,
      <MenuItem key="lastName-action2">Action 2</MenuItem>,
      <MenuItem key="lastName-action3">Action 3</MenuItem>,
    ],
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    minWidth: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 160,
    valueGetter: (_value, row) => `${row.firstName} ${row.lastName}`,
  },
)

const Template = story<DataGridProps>(
  args => {
    const apiRef = useGridApiRef()
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ]
    return (
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          checkboxSelection
          slotProps={{
            toolbar: {
              renderChildren: () => <Button>Toolbar Button</Button>,
            },
          }}
          {...args}
        />
      </div>
    )
  },
  {
    argTypes: {
      stripedRows: {
        name: 'stripedRows',
        type: 'boolean',
      },
    },
  },
)

export const Default = story(Template)

interface FilterStoryRow {
  id: number
  firstName: string
  lastName: string
  occupation: {
    name: string
  }
  hireDate: Date
}

interface CustomFilterState {
  value: string
}

const filterStoryColumns = createTable<FilterStoryRow>()(
  {
    field: 'id',
    headerName: 'ID',
    filter: { type: 'numeric' },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 150,
    filter: { type: 'text' },
    renderHeader: ({ colDef }) => (
      <React.Fragment>
        <Icons.Person />
        <Typography variant="body2">{colDef.headerName}</Typography>
      </React.Fragment>
    ),
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minWidth: 150,
    headerActions: ({ closeMenu }) => [
      <MenuItem
        key="lastName-action1"
        onClick={() => {
          closeMenu()
        }}
      >
        Action 1
      </MenuItem>,
      <MenuItem key="lastName-action2">Action 2</MenuItem>,
      <MenuItem key="lastName-action3">Action 3</MenuItem>,
    ],
  },
  {
    field: 'occupation',
    headerName: 'Occupation',
    type: 'string',
    valueFormatter: value => value.name,
    minWidth: 110,
    filter: {
      type: 'enum',
      values: [
        { name: 'barista' },
        { name: 'lifeguard' },
        { name: 'waiter' },
        { name: 'engineer' },
        { name: 'designer' },
        { name: 'doctor' },
        { name: 'nurse' },
        { name: 'other' },
        { name: 'some really really long item that overflows the container' },
      ],
      renderValue: ({ name }) => name,
      compare: (rowValue, filterValue) => filterValue.name === rowValue.name,
    },
  },
  {
    field: 'hireDate',
    headerName: 'Hire Date',
    type: 'date',
    minWidth: 110,
    filter: {
      type: 'date',
    },
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 160,
    valueGetter: (_value, row) => `${row.firstName} ${row.lastName}`,
    filterOperators: [
      {
        value: 'my-custom-filter',
        getApplyFilterFn: filterItem => value => {
          if (value === undefined) {
            return true
          }
          return (value as string)
            .toLocaleLowerCase()
            .includes(
              (filterItem.value as { value: string }).value.toLocaleLowerCase(),
            )
        },
      },
    ],
    filter: {
      type: 'custom',
      operator: 'my-custom-filter',
      renderFilter: params => (
        <TextField
          autoFocus
          label="Custom filter"
          value={(params.state as CustomFilterState).value}
          onChange={event => {
            params.setState({ value: event.target.value })
          }}
        />
      ),
      getIsFiltered: state => {
        return (state as CustomFilterState).value.length !== 0
      },
      getInitialState: () => ({
        value: '',
      }),
    },
  },
  {
    type: 'actions',
    field: 'actions',
    getActions: () => [
      <GridActionsCellItem
        key={0}
        showInMenu={false}
        icon={<Icons.MoreVert />}
        label="Action"
      />,
    ],
  },
)

export const Filters = story(() => {
  const apiRef = useGridApiRef()
  const rows: Array<FilterStoryRow> = [
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      occupation: { name: 'barista' },
      hireDate: getRandomDate(),
    },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      occupation: { name: 'barista' },
      hireDate: getRandomDate(),
    },
    {
      id: 3,
      lastName: 'Lannister',
      firstName: 'Jaime',
      occupation: { name: 'lifeguard' },
      hireDate: getRandomDate(),
    },
    {
      id: 4,
      lastName: 'Stark',
      firstName: 'Arya',
      occupation: { name: 'waiter' },
      hireDate: getRandomDate(),
    },
    {
      id: 5,
      lastName: 'Targaryen',
      firstName: 'Daenerys',
      occupation: { name: 'lifeguard' },
      hireDate: getRandomDate(),
    },
    {
      id: 6,
      lastName: 'Melisandre',
      firstName: 'David',
      occupation: { name: 'barista' },
      hireDate: getRandomDate(),
    },
    {
      id: 7,
      lastName: 'Clifford',
      firstName: 'Ferrara',
      occupation: { name: 'waiter' },
      hireDate: getRandomDate(),
    },
    {
      id: 8,
      lastName: 'Frances',
      firstName: 'Rossini',
      occupation: { name: 'waiter' },
      hireDate: getRandomDate(),
    },
    {
      id: 9,
      lastName: 'Roxie',
      firstName: 'Harvey',
      occupation: { name: 'lifeguard' },
      hireDate: getRandomDate(),
    },
    {
      id: 10,
      lastName: 'Smith',
      firstName: 'John',
      occupation: { name: 'designer' },
      hireDate: getRandomDate(),
    },
    {
      id: 11,
      lastName: 'Doe',
      firstName: 'Jane',
      occupation: { name: 'engineer' },
      hireDate: getRandomDate(),
    },
  ]

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        pagination
        apiRef={apiRef}
        columns={filterStoryColumns.columns}
        rows={rows}
        checkboxSelection
      />
    </div>
  )
})

function getRandomDate(): Date {
  return new Date(new Date().getTime() - Math.random() * 1e12)
}

const operatorFilterStoryColumns = createTable<FilterStoryRow>()(
  {
    field: 'id',
    headerName: 'ID',
    filterOperators: [
      {
        label: 'Test',
        value: 'test',
        getApplyFilterFn: () => () => true,
        InputComponent: Autocomplete,
        InputComponentProps: {
          options: ['One', 'Two', 'Three'],
          renderInput: (params: Record<string, unknown>) => (
            <TextField label="Value" {...params} />
          ),
        },
      },
    ],
  },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 150,
    renderHeader: ({ colDef }) => (
      <React.Fragment>
        <Icons.Person />
        <Typography variant="body2" lineClamp={1}>
          {colDef.headerName}
        </Typography>
      </React.Fragment>
    ),
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minWidth: 150,
    headerActions: ({ closeMenu }) => [
      <MenuItem
        key="lastName-action1"
        onClick={() => {
          closeMenu()
        }}
      >
        Action 1
      </MenuItem>,
      <MenuItem key="lastName-action2">Action 2</MenuItem>,
      <MenuItem key="lastName-action3">Action 3</MenuItem>,
    ],
  },
  {
    field: 'occupation',
    headerName: 'Occupation',
    type: 'string',
    valueFormatter: value => value.name,
    minWidth: 110,
  },
  {
    field: 'hireDate',
    headerName: 'Hire Date',
    type: 'date',
    minWidth: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 160,
    valueGetter: (_value, row) => `${row.firstName} ${row.lastName}`,
  },
  {
    type: 'actions',
    field: 'actions',
    getActions: () => [
      <GridActionsCellItem
        key={0}
        showInMenu={false}
        icon={<Icons.MoreVert />}
        label="Action"
      />,
    ],
  },
)
export const OperatorFilter = () => {
  const rows: Array<FilterStoryRow> = [
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      occupation: { name: 'barista' },
      hireDate: getRandomDate(),
    },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      occupation: { name: 'barista' },
      hireDate: getRandomDate(),
    },
    {
      id: 3,
      lastName: 'Lannister',
      firstName: 'Jaime',
      occupation: { name: 'lifeguard' },
      hireDate: getRandomDate(),
    },
    {
      id: 4,
      lastName: 'Stark',
      firstName: 'Arya',
      occupation: { name: 'waiter' },
      hireDate: getRandomDate(),
    },
    {
      id: 5,
      lastName: 'Targaryen',
      firstName: 'Daenerys',
      occupation: { name: 'lifeguard' },
      hireDate: getRandomDate(),
    },
    {
      id: 6,
      lastName: 'Melisandre',
      firstName: 'David',
      occupation: { name: 'barista' },
      hireDate: getRandomDate(),
    },
    {
      id: 7,
      lastName: 'Clifford',
      firstName: 'Ferrara',
      occupation: { name: 'waiter' },
      hireDate: getRandomDate(),
    },
    {
      id: 8,
      lastName: 'Frances',
      firstName: 'Rossini',
      occupation: { name: 'waiter' },
      hireDate: getRandomDate(),
    },
    {
      id: 9,
      lastName: 'Roxie',
      firstName: 'Harvey',
      occupation: { name: 'lifeguard' },
      hireDate: getRandomDate(),
    },
    {
      id: 10,
      lastName: 'Smith',
      firstName: 'John',
      occupation: { name: 'designer' },
      hireDate: getRandomDate(),
    },
    {
      id: 11,
      lastName: 'Doe',
      firstName: 'Jane',
      occupation: { name: 'engineer' },
      hireDate: getRandomDate(),
    },
  ]

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        columns={operatorFilterStoryColumns.columns}
        rows={rows}
        checkboxSelection
        filter="operator"
      />
    </div>
  )
}
