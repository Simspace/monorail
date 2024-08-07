import React from 'react'
import { capitalize } from '@mui/material'

import type { DataGridProps } from '@monorail/components'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  createTable,
  DataGrid,
  dataGridClasses,
  GridActionsCellItem,
  MenuItem,
  Stack,
  Typography,
  useGridApiRef,
} from '@monorail/components'
import * as Icons from '@monorail/components/icons'

import { story } from '../helpers.js'

export default { name: 'Data Display/Collection', component: DataGrid }

interface FilterStoryRow {
  id: number
  firstName: string
  lastName: string
  occupation: string
  hireDate: Date
}

const { columns } = createTable<FilterStoryRow>()(
  {
    field: 'id',
    headerName: 'ID',
    filter: { type: 'numeric' },
    minWidth: 80,
    headerClassName: 'firstColumn-header',
    cellClassName: 'firstColumn-cell',
  },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 150,
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
    minWidth: 110,
    filter: {
      type: 'enum',
      values: [
        'barista',
        'lifeguard',
        'waiter',
        'engineer',
        'designer',
        'doctor',
        'nurse',
        'other',
        'some really really long item that overflows the container',
      ],
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
    filter: {
      type: 'text',
    },
  },
  {
    type: 'actions',
    field: 'actions',
    maxWidth: 48,
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

const Template = story<DataGridProps<{}>>(() => {
  const apiRef = useGridApiRef()
  const rows: Array<FilterStoryRow> = [
    {
      id: 1,
      lastName: 'Snow',
      firstName: 'Jon',
      occupation: 'barista',
      hireDate: getRandomDate(),
    },
    {
      id: 2,
      lastName: 'Lannister',
      firstName: 'Cersei',
      occupation: 'barista',
      hireDate: getRandomDate(),
    },
    {
      id: 3,
      lastName: 'Lannister',
      firstName: 'Jaime',
      occupation: 'lifeguard',
      hireDate: getRandomDate(),
    },
    {
      id: 4,
      lastName: 'Stark',
      firstName: 'Arya',
      occupation: 'waiter',
      hireDate: getRandomDate(),
    },
    {
      id: 5,
      lastName: 'Targaryen',
      firstName: 'Daenerys',
      occupation: 'lifeguard',
      hireDate: getRandomDate(),
    },
    {
      id: 6,
      lastName: 'Melisandre',
      firstName: 'David',
      occupation: 'barista',
      hireDate: getRandomDate(),
    },
    {
      id: 7,
      lastName: 'Clifford',
      firstName: 'Ferrara',
      occupation: 'waiter',
      hireDate: getRandomDate(),
    },
    {
      id: 8,
      lastName: 'Frances',
      firstName: 'Rossini',
      occupation: 'waiter',
      hireDate: getRandomDate(),
    },
    {
      id: 9,
      lastName: 'Roxie',
      firstName: 'Harvey',
      occupation: 'lifeguard',
      hireDate: getRandomDate(),
    },
    {
      id: 10,
      lastName: 'Smith',
      firstName: 'John',
      occupation: 'designer',
      hireDate: getRandomDate(),
    },
    {
      id: 11,
      lastName: 'Doe',
      firstName: 'Jane',
      occupation: 'engineer',
      hireDate: getRandomDate(),
    },
  ]

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        apiRef={apiRef}
        columns={columns}
        rows={rows}
        checkboxSelection
        galleryProps={{
          itemWidth: '100%',
          itemHeight: 300,
          renderCard: ({ row, style }) => {
            return (
              <Box style={style} sx={{ p: 2 }}>
                <Card sx={{ height: '100%' }}>
                  <CardHeader title={`${row.firstName} ${row.lastName}`} />
                  <CardContent>
                    <Typography>
                      Occupation: {capitalize(row.occupation)}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            )
          },
        }}
      />
    </div>
  )
})

export const Default = story(Template)

export const AlignmentAndSpacing = story<DataGridProps<{}>>(
  () => {
    const apiRef = useGridApiRef()

    const rows: Array<FilterStoryRow> = [
      {
        id: 1,
        lastName: 'Snow',
        firstName: 'Jon',
        occupation: 'barista',
        hireDate: getRandomDate(),
      },
      {
        id: 2,
        lastName: 'Lannister',
        firstName: 'Cersei',
        occupation: 'barista',
        hireDate: getRandomDate(),
      },
      {
        id: 3,
        lastName: 'Lannister',
        firstName: 'Jaime',
        occupation: 'lifeguard',
        hireDate: getRandomDate(),
      },
      {
        id: 4,
        lastName: 'Stark',
        firstName: 'Arya',
        occupation: 'waiter',
        hireDate: getRandomDate(),
      },
      {
        id: 5,
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        occupation: 'lifeguard',
        hireDate: getRandomDate(),
      },
      {
        id: 6,
        lastName: 'Melisandre',
        firstName: 'David',
        occupation: 'barista',
        hireDate: getRandomDate(),
      },
      {
        id: 7,
        lastName: 'Clifford',
        firstName: 'Ferrara',
        occupation: 'waiter',
        hireDate: getRandomDate(),
      },
      {
        id: 8,
        lastName: 'Frances',
        firstName: 'Rossini',
        occupation: 'waiter',
        hireDate: getRandomDate(),
      },
      {
        id: 9,
        lastName: 'Roxie',
        firstName: 'Harvey',
        occupation: 'lifeguard',
        hireDate: getRandomDate(),
      },
      {
        id: 10,
        lastName: 'Smith',
        firstName: 'John',
        occupation: 'designer',
        hireDate: getRandomDate(),
      },
      {
        id: 11,
        lastName: 'Doe',
        firstName: 'Jane',
        occupation: 'engineer',
        hireDate: getRandomDate(),
      },
    ]

    return (
      <Stack>
        <Stack direction="row" alignItems="center" p={8}>
          <Typography variant="h1">Page Header</Typography>
        </Stack>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            apiRef={apiRef}
            viewStyle="gallery"
            columns={columns}
            rows={rows}
            galleryProps={{
              itemWidth: 256,
              itemHeight: 306,
              slotProps: {
                galleryContainer: {
                  style: {
                    // Explicitly setting `margin: 0 auto` for demo purposes.
                    // It is centered by default if no additional styles are provided.
                    margin: '0 auto',
                  },
                },
              },
              renderCard: ({ row, style }) => {
                return (
                  <Box style={style} sx={{ p: 2 }}>
                    <Card sx={{ height: '100%' }}>
                      <CardHeader title={`${row.firstName} ${row.lastName}`} />
                      <CardContent>
                        <Typography>
                          Occupation: {capitalize(row.occupation)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                )
              },
            }}
            sx={{
              // Aligning the first column header in table view
              '& .firstColumn-header': {
                pl: 6,
              },
              // Aligning the cell content of the first column in table view
              // This won't affect the gallery view
              '& .firstColumn-cell': {
                pl: 8,
              },
              // Aligning the selected row count
              [`& .${dataGridClasses.selectedRowCount}`]: {
                ml: 2,
              },
            }}
          />
        </div>
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Each item in gallery view is explicitly \`position: absolute\`. This limits the options for layout, specifically the use of CSS Grid or Flexbox. As a workaround, you can spread additional styles to the gallery container using \`slotProps.galleryContainer.style\`. See https://github.com/bvaughn/react-window/issues/158 for how this is achieved.`,
        },
      },
    },
  },
)

function getRandomDate(): Date {
  return new Date(new Date().getTime() - Math.random() * 1e12)
}
