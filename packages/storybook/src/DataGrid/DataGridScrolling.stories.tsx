// Edit this file to add new stories
import React from 'react'
import { Home } from '@mui/icons-material'
import { useDemoData } from '@mui/x-data-grid-generator'

import type { DataGridProps } from '@monorail/components'
import { Box, Button, DataGrid, Grid, IconButton } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Grid/Scrolling', component: DataGrid }

const Template = story<DataGridProps>(args => {
  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // const apiRef = useGridApiRef()

  // const [coordinates, setCoordinates] = React.useState({
  //   rowIndex: 0,
  //   colIndex: 0,
  // })

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
  })

  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // React.useEffect(() => {
  //   const { rowIndex, colIndex } = coordinates
  //   apiRef.current.scrollToIndexes(coordinates)
  //   const id = visibleSortedGridRowIdsSelector(apiRef.current.state)[rowIndex]
  //   const column = visibleGridColumnsSelector(apiRef.current.state)[colIndex]
  //   apiRef.current.setCellFocus(id, column.field)
  // }, [apiRef, coordinates])

  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // const handleClick = (position: string) => () => {
  // const maxRowIndex = visibleGridRowCountSelector(apiRef.current.state) - 1
  // const maxColIndex =
  //   visibleGridColumnsLengthSelector(apiRef.current.state) - 1
  // setCoordinates(coords => {
  //   switch (position) {
  //     case 'top':
  //       return { ...coords, rowIndex: Math.max(0, coords.rowIndex - 1) }
  //     case 'bottom':
  //       return {
  //         ...coords,
  //         rowIndex: Math.min(maxRowIndex, coords.rowIndex + 1),
  //       }
  //     case 'left':
  //       return { ...coords, colIndex: Math.max(0, coords.colIndex - 1) }
  //     case 'right':
  //       return {
  //         ...coords,
  //         colIndex: Math.min(maxColIndex, coords.colIndex + 1),
  //       }
  //     default:
  //       return { ...coords, rowIndex: 0, colIndex: 0 }
  //   }
  // })
  // }

  // TODO(storybook): Uncomment once we have DataGridPro (paid)
  // const handleCellClick = (params: GridCellParams) => {
  // const rowIndex = visibleSortedGridRowIdsSelector(
  //   apiRef.current.state,
  // ).findIndex(id => id === params.id)
  // const colIndex = visibleGridColumnsSelector(apiRef.current.state).findIndex(
  //   column => column.field === params.field,
  // )
  // setCoordinates({ rowIndex, colIndex })
  // }

  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ width: 300, margin: '0 auto 16px' }}>
        <Grid container justifyContent="center">
          <Grid item>
            {/* <Button onClick={handleClick('top')}>top</Button> */}
            <Button onClick={() => {}}>top</Button>
          </Grid>
        </Grid>
        <Grid container textAlign="center">
          <Grid item xs={4}>
            {/* <Button onClick={handleClick('left')}>left</Button> */}
            <Button onClick={() => {}}>left</Button>
          </Grid>
          <Grid item xs={4}>
            <IconButton
              color="primary"
              aria-label="home"
              // onClick={handleClick('home')}
              onClick={() => {}}
            >
              <Home />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            {/* <Button onClick={handleClick('right')}>right</Button> */}
            <Button onClick={() => {}}>right</Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            {/* <Button onClick={handleClick('bottom')}>bottom</Button> */}
            <Button onClick={() => {}}>bottom</Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: 400, bgcolor: 'background.paper' }}>
        <DataGrid
          // TODO(storybook): Uncomment once we have DataGridPro (paid)
          // <DataGridPro
          // apiRef={apiRef}
          // onCellClick={handleCellClick}
          onCellClick={() => {}}
          hideFooter
          {...data}
          {...args}
        />
      </Box>
    </div>
  )
})

export const Default = story(Template)

Default.parameters = {
  docs: {
    description: {
      component: `❗️ Only  available  in \`DataGridPro\`

This section presents how to programmatically control the scroll.

### Scrolling to specific cells
You can scroll to a specific cell by calling  \`apiRef.current.scrollToIndexes()\`. The only argument that must be passed is an object containing the row index and the column index of the cell to scroll. If the row or column index is not present, the grid will not do any movement in the missing axis.

The following demo explores the usage of this API:`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}

export const DataGridScrollingApiRef = story<DataGridProps>(() => <></>)
DataGridScrollingApiRef.storyName = 'apiRef'
DataGridScrollingApiRef.parameters = {
  docs: {
    description: {
      story: `-   \`getScrollPosition()\`: Returns the current scroll position.
-   \`scroll()\`: Triggers the viewport to scroll to the given positions (in pixels).
-   \`scrollToIndexes()\`: Triggers the viewport to scroll to the cell at indexes given by \`params\`. Returns \`true\` if the grid had to scroll to reach the target`,
    },
  },
  creevey: {
    skip: "Story relies on DataGridPro (paid) which we don't have yet.",
  },
}
