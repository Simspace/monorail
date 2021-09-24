// Edit this file to add new stories
import React from 'react'
import { TablePagination, TablePaginationProps } from '../TablePagination'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TablePagination.stories.gen'
import { TableFooter } from '../../TableFooter/TableFooter'
import { Table } from '../../Table/Table'

export default {
  ...defaultStoryMeta,
  title: 'Data Display/Table/TablePagination',
}

const Template = story<TablePaginationProps>(args => {
  const totalRows = 200

  // TODO: the story doesn't seem to work with the state updates... not sure why
  const [page, setPage] = React.useState(0)

  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  return (
    <Table>
      <TableFooter>
        <TablePagination
          page={page}
          count={totalRows}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={e => {
            setRowsPerPage(parseInt(e.target.value, 10))
            setPage(0)
          }}
          {...args}
        />
      </TableFooter>
    </Table>
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `TablePagination is used for controlling the pagination of the data set.`,
      },
    },
  },
})
