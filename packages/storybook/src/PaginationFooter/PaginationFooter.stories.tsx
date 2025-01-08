/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { StoryObj } from '@storybook/react'

import {
  Box,
  PaginationFooter,
  ResizableContainer,
  ResizableElement,
  ResizableHandle,
} from '@monorail/components'

export default {
  title: 'Navigation/PaginationFooter',
  component: PaginationFooter,
}

export const Default: StoryObj<typeof PaginationFooter> = {
  render: () => {
    const [page, setPage] = React.useState(1)
    const [pageSize, setPageSize] = React.useState(10)

    return (
      <PaginationFooter
        page={page}
        totalItems={100}
        pageSize={pageSize}
        onPageChange={(_, page) => {
          setPage(page)
        }}
        pageItems={10}
        onPageSizeChange={(event) => {
          setPageSize(event.target.value)
        }}
        selectedCount={10}
      />
    )
  },
}

export const Resize: StoryObj<typeof PaginationFooter> = {
  render: () => {
    const [page, setPage] = React.useState(1)
    const [pageSize, setPageSize] = React.useState(10)

    return (
      <Box height={100}>
        <ResizableContainer id='pagination-footer-group' direction='row'>
          <ResizableElement id='pagination-footer-group-1' minSize='10%'>
            <Box flex={1} width={1} height={1} display='flex' alignItems='center'>
              <PaginationFooter
                page={page}
                totalItems={100}
                pageSize={pageSize}
                onPageChange={(_, page) => {
                  setPage(page)
                }}
                pageItems={10}
                onPageSizeChange={(event) => {
                  setPageSize(event.target.value)
                }}
                selectedCount={10}
              />
            </Box>
          </ResizableElement>
          <ResizableHandle />
          <ResizableElement id='pagination-footer-group-2' minSize='10%' />
        </ResizableContainer>
      </Box>
    )
  },
}
