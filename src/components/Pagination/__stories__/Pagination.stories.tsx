// Edit this file to add new stories
import React from 'react'
import {
  Pagination,
  PaginationProps,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material'
import styled from '@mui/material/styles/styled'
import usePagination from '@mui/material/usePagination/usePagination'

import { story } from '../../../__tests__/helpers/storybook'
/**
 * Metadata for Pagination stories - update/extend as needed
 */
export default { title: 'Navigation/Pagination', component: Pagination }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<PaginationProps>(args => <Pagination {...args} />, {
  args: {},
})
/** Default story for Pagination (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicPagination = story<PaginationProps>(() => (
  <Stack spacing={2}>
    <Pagination count={10} aria-label="default" />
    <Pagination count={10} color="primary" aria-label="primary" />
    <Pagination count={10} color="secondary" aria-label="secondary" />
    <Pagination count={10} disabled aria-label="disabled" />
  </Stack>
))

export const PaginationOutlined = story<PaginationProps>(() => (
  <Stack spacing={2}>
    <Pagination count={10} variant="outlined" aria-label="default" />
    <Pagination
      count={10}
      variant="outlined"
      color="primary"
      aria-label="primary"
    />
    <Pagination
      count={10}
      variant="outlined"
      color="secondary"
      aria-label="secondary"
    />
    <Pagination count={10} variant="outlined" disabled aria-label="disabled" />
  </Stack>
))

export const PaginationRounded = story<PaginationProps>(() => (
  <Stack spacing={2}>
    <Pagination count={10} shape="rounded" aria-label="rounded" />
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      aria-label="outlined"
    />
  </Stack>
))

export const PaginationSize = story<PaginationProps>(() => (
  <Stack spacing={2}>
    <Pagination count={10} size="small" aria-label="small" />
    <Pagination count={10} aria-label="default" />
    <Pagination count={10} size="large" aria-label="large" />
  </Stack>
))

export const PaginationButtons = story<PaginationProps>(
  () => (
    <Stack spacing={2}>
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        aria-label="show-first-last"
      />
      <Pagination
        count={10}
        hidePrevButton
        hideNextButton
        aria-label="hide buttons"
      />
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.`,
        },
      },
    },
  },
)

export const PaginationRanges = story<PaginationProps>(
  () => (
    <Stack spacing={2}>
      <Pagination
        count={11}
        defaultPage={6}
        siblingCount={0}
        aria-label="no siblings"
      />
      <Pagination count={11} defaultPage={6} aria-label="default ranges" />{' '}
      {/* Default ranges */}
      <Pagination
        aria-label="no-sibling-boundary"
        count={11}
        defaultPage={6}
        siblingCount={0}
        boundaryCount={2}
      />
      <Pagination
        count={11}
        defaultPage={6}
        boundaryCount={2}
        aria-label="boundary"
      />
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `You can specify how many digits to display either side of current page with the siblingRange prop, and adjacent to the start and end page number with the boundaryRange prop.`,
        },
      },
    },
  },
)

export const PaginationControlled = story<PaginationProps>(() => {
  const [page, setPage] = React.useState(1)
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  )
})

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
})

export const UsePagination = story<PaginationProps>(
  () => {
    const { items } = usePagination({
      count: 10,
    })

    return (
      <nav>
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            const children =
              type === 'start-ellipsis' || type === 'end-ellipsis' ? (
                '…'
              ) : type === 'page' ? (
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? 'bold' : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              ) : (
                <button type="button" {...item}>
                  {type}
                </button>
              )

            return <li key={index}>{children}</li>
          })}
        </List>
      </nav>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `For advanced customization use cases, a headless usePagination() hook is exposed. It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component is built on this hook.`,
        },
      },
    },
  },
)

export const TablePaginationDemo = story<PaginationProps>(
  () => {
    const [page, setPage] = React.useState(2)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (
      _: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage)
    }

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0)
    }

    return (
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The Pagination component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog. For the pagination of a large set of tabular data, you should use the TablePagination component.`,
        },
      },
    },
  },
)
