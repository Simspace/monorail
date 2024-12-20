// Edit this file to add new stories
import React from 'react'

import type { TablePaginationProps } from '@monorail/components'
import { Table, TableFooter, TablePagination, TableRow } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Table/TablePagination',
  component: TablePagination,
}

const Template = story<TablePaginationProps>(
  (args) => {
    const totalRows = 200

    // TODO: the story doesn't seem to work with the state updates... not sure why
    const [page, setPage] = React.useState(0)

    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    return (
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              page={page}
              count={totalRows}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
              onPageChange={(_, newPage) => setPage(newPage)}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(parseInt(e.target.value, 10))
                setPage(0)
              }}
              {...args}
            />
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
  { muiName: 'MuiTablePagination' },
)

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `TablePagination is used for controlling the pagination of the data set.`,
      },
    },
  },
})
