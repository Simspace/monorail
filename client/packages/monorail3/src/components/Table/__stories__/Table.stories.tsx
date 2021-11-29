// Edit this file to add new stories
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import LastPageIcon from '@mui/icons-material/LastPage'
import { tableCellClasses } from '@mui/material/TableCell'

import { story } from '../../../__tests__/helpers/storybook'
import { alpha, styled, visuallyHidden } from '../../../helpers/styles'
import { useTheme } from '../../../theme/useTheme'
import { Alert } from '../../Alert/Alert'
import { Box } from '../../Box/Box'
import { Checkbox } from '../../Checkbox/Checkbox'
import { Collapse } from '../../Collapse/Collapse'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { IconButton } from '../../IconButton/IconButton'
import { Paper } from '../../Paper/Paper'
import { Switch } from '../../Switch/Switch'
import { TableBody } from '../../TableBody/TableBody'
import { TableCell } from '../../TableCell/TableCell'
import { TableContainer } from '../../TableContainer/TableContainer'
import { TableFooter } from '../../TableFooter/TableFooter'
import { TableHead } from '../../TableHead/TableHead'
import { TablePagination } from '../../TablePagination/TablePagination'
import { TableRow } from '../../TableRow/TableRow'
import { TableSortLabel } from '../../TableSortLabel/TableSortLabel'
import { Toolbar } from '../../Toolbar/Toolbar'
import { Tooltip } from '../../Tooltip/Tooltip'
import { Typography } from '../../Typography/Typography'
import { Table, TableProps } from '../Table'
import { defaultStoryMeta } from './Table.stories.gen'

export default { ...defaultStoryMeta, title: 'Data Display/Table' }

const Template = story<TableProps>(args => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" {...args}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `Table is used for displaying data frames. It supports small, basic, static data sets, or bigger, dynamic, interactive data sets`,
      },
    },
  },
})

export const Density = story<TableProps>(
  args => {
    function createData(
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number,
    ) {
      return { name, calories, fat, carbs, protein }
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ]
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Table can be rendered in a more dense format.`,
        },
      },
    },
  },
)

export const SortingAndSelecting = story<TableProps>(
  args => {
    interface Data {
      calories: number
      carbs: number
      fat: number
      name: string
      protein: number
    }

    function createData(
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number,
    ): Data {
      return {
        name,
        calories,
        fat,
        carbs,
        protein,
      }
    }

    const rows = [
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Donut', 452, 25.0, 51, 4.9),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Honeycomb', 408, 3.2, 87, 6.5),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Jelly Bean', 375, 0.0, 94, 0.0),
      createData('KitKat', 518, 26.0, 65, 7.0),
      createData('Lollipop', 392, 0.2, 98, 0.0),
      createData('Marshmallow', 318, 0, 81, 2.0),
      createData('Nougat', 360, 19.0, 9, 37.0),
      createData('Oreo', 437, 18.0, 63, 4.0),
    ]

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
      if (b[orderBy] < a[orderBy]) {
        return -1
      }
      if (b[orderBy] > a[orderBy]) {
        return 1
      }
      return 0
    }

    type Order = 'asc' | 'desc'

    function getComparator<Key extends keyof any>(
      order: Order,
      orderBy: Key,
    ): (
      a: { [key in Key]: number | string },
      b: { [key in Key]: number | string },
    ) => number {
      return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
    }

    // This method is created for cross-browser compatibility, if you don't
    // need to support IE11, you can use Array.prototype.sort() directly
    function stableSort<T>(
      array: ReadonlyArray<T>,
      comparator: (a: T, b: T) => number,
    ) {
      const stabilizedThis = array.map(
        (el, index) => [el, index] as [T, number],
      )
      stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {return order}
        return a[1] - b[1]
      })
      return stabilizedThis.map(el => el[0])
    }

    interface HeadCell {
      disablePadding: boolean
      id: keyof Data
      label: string
      numeric: boolean
    }

    const headCells: ReadonlyArray<HeadCell> = [
      {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
      },
      {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
      },
      {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
      },
      {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
      },
      {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
      },
    ]

    interface EnhancedTableProps {
      numSelected: number
      onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
      ) => void
      onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
      order: Order
      orderBy: string
      rowCount: number
    }

    function EnhancedTableHead(props: EnhancedTableProps) {
      const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
      } = props
      const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
          onRequestSort(event, property)
        }

      return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
              />
            </TableCell>
            {headCells.map(headCell => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" style={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )
    }

    interface EnhancedTableToolbarProps {
      numSelected: number
    }

    const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
      const { numSelected } = props

      return (
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
              bgcolor: theme =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.activatedOpacity,
                ),
            }),
          }}
        >
          {numSelected > 0 ? (
            <Typography
              sx={{ flex: '1 1 100%' }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              {numSelected} selected
            </Typography>
          ) : (
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Nutrition
            </Typography>
          )}
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton size="large">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton size="large">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      )
    }

    function EnhancedTable() {
      const [order, setOrder] = React.useState<Order>('asc')
      const [orderBy, setOrderBy] = React.useState<keyof Data>('calories')
      const [selected, setSelected] = React.useState<ReadonlyArray<string>>([])
      const [page, setPage] = React.useState(0)
      const [dense, setDense] = React.useState(false)
      const [rowsPerPage, setRowsPerPage] = React.useState(5)

      const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
      ) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
      }

      const handleSelectAllClick = (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        if (event.target.checked) {
          const newSelecteds = rows.map(n => n.name)
          setSelected(newSelecteds)
          return
        }
        setSelected([])
      }

      const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected: ReadonlyArray<string> = []

        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          )
        }

        setSelected(newSelected)
      }

      const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
      }

      const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
      }

      const handleChangeDense = (
        event: React.ChangeEvent<HTMLInputElement>,
      ) => {
        setDense(event.target.checked)
      }

      const isSelected = (name: string) => selected.indexOf(name) !== -1

      // Avoid a layout jump when reaching the last page with empty rows.
      const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

      return (
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name)
                      const labelId = `enhanced-table-checkbox-${index}`

                      return (
                        <TableRow
                          hover
                          onClick={(event: React.MouseEvent<unknown>) =>
                            handleClick(event, row.name)
                          }
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
          />
        </Box>
      )
    }

    return <EnhancedTable />
  },
  {
    parameters: {
      docs: {
        description: {
          story: `This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.

The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table. (The 'Custom Table Pagination Action' example below shows the pagination within the TableFooter.)`,
        },
      },
    },
  },
)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const Customization = story<TableProps>(
  args => {
    function createData(
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number,
    ) {
      return { name, calories, fat, carbs, protein }
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ]
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Here is an example of customizing the component. You can learn more about this in the overrides documentation page.`,
        },
      },
    },
  },
)

export const CustomPaginationOptions = story<TableProps>(
  args => {
    interface TablePaginationActionsProps {
      count: number
      page: number
      rowsPerPage: number
      onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
      ) => void
    }

    function TablePaginationActions(props: TablePaginationActionsProps) {
      const theme = useTheme()
      const { count, page, rowsPerPage, onPageChange } = props

      const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
      ) => {
        onPageChange(event, 0)
      }

      const handleBackButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
      ) => {
        onPageChange(event, page - 1)
      }

      const handleNextButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
      ) => {
        onPageChange(event, page + 1)
      }

      const handleLastPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
      ) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
      }

      return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
            size="large"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="previous page"
            size="large"
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
            size="large"
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
            size="large"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </Box>
      )
    }

    function createData(name: string, calories: number, fat: number) {
      return { name, calories, fat }
    }

    const rows = [
      createData('Cupcake', 305, 3.7),
      createData('Donut', 452, 25.0),
      createData('Eclair', 262, 16.0),
      createData('Frozen yoghurt', 159, 6.0),
      createData('Gingerbread', 356, 16.0),
      createData('Honeycomb', 408, 3.2),
      createData('Ice cream sandwich', 237, 9.0),
      createData('Jelly Bean', 375, 0.0),
      createData('KitKat', 518, 26.0),
      createData('Lollipop', 392, 0.2),
      createData('Marshmallow', 318, 0),
      createData('Nougat', 360, 19.0),
      createData('Oreo', 437, 18.0),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1))

    function CustomPaginationActionsTable() {
      const [page, setPage] = React.useState(0)
      const [rowsPerPage, setRowsPerPage] = React.useState(5)

      // Avoid a layout jump when reaching the last page with empty rows.
      const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

      const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : rows
              ).map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.calories}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.fat}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )
    }

    return <CustomPaginationActionsTable />
  },
  {
    parameters: {
      docs: {
        description: {
          story: `It's possible to customize the options shown in the "Rows per page" select using the rowsPerPageOptions prop. You should either provide an array of:

- numbers, each number will be used for the option's label and value.
- objects, the value and label keys will be used respectively for the value and label of the option (useful for language strings such as 'All').

The ActionsComponent prop of the TablePagination component allows the implementation of custom actions.`,
        },
      },
    },
  },
)

export const StickyHeader = story<TableProps>(
  args => {
    interface Column {
      id: 'name' | 'code' | 'population' | 'size' | 'density'
      label: string
      minWidth?: number
      align?: 'right'
      format?: (value: number) => string
    }

    const columns: ReadonlyArray<Column> = [
      { id: 'name', label: 'Name', minWidth: 170 },
      { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
      {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
      },
      {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
      },
      {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
      },
    ]

    interface Data {
      name: string
      code: string
      population: number
      size: number
      density: number
    }

    function createData(
      name: string,
      code: string,
      population: number,
      size: number,
    ): Data {
      const density = population / size
      return { name, code, population, size, density }
    }

    const rows = [
      createData('India', 'IN', 1324171354, 3287263),
      createData('China', 'CN', 1403500365, 9596961),
      createData('Italy', 'IT', 60483973, 301340),
      createData('United States', 'US', 327167434, 9833520),
      createData('Canada', 'CA', 37602103, 9984670),
      createData('Australia', 'AU', 25475400, 7692024),
      createData('Germany', 'DE', 83019200, 357578),
      createData('Ireland', 'IE', 4857000, 70273),
      createData('Mexico', 'MX', 126577691, 1972550),
      createData('Japan', 'JP', 126317000, 377973),
      createData('France', 'FR', 67022000, 640679),
      createData('United Kingdom', 'GB', 67545757, 242495),
      createData('Russia', 'RU', 146793744, 17098246),
      createData('Nigeria', 'NG', 200962417, 923768),
      createData('Brazil', 'BR', 210147125, 8515767),
    ]

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage)
    }

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    }

    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Here is an example of a table with scrollable rows and fixed column headers. It leverages the stickyHeader prop. (⚠️ no IE 11 support)`,
        },
      },
    },
  },
)

export const ColumnGrouping = story<TableProps>(
  args => {
    interface Column {
      id: 'name' | 'code' | 'population' | 'size' | 'density'
      label: string
      minWidth?: number
      align?: 'right'
      format?: (value: number) => string
    }

    const columns: Array<Column> = [
      { id: 'name', label: 'Name', minWidth: 170 },
      { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
      {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
      },
      {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
      },
      {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
      },
    ]

    interface Data {
      name: string
      code: string
      population: number
      size: number
      density: number
    }

    function createData(
      name: string,
      code: string,
      population: number,
      size: number,
    ): Data {
      const density = population / size
      return { name, code, population, size, density }
    }

    const rows = [
      createData('India', 'IN', 1324171354, 3287263),
      createData('China', 'CN', 1403500365, 9596961),
      createData('Italy', 'IT', 60483973, 301340),
      createData('United States', 'US', 327167434, 9833520),
      createData('Canada', 'CA', 37602103, 9984670),
      createData('Australia', 'AU', 25475400, 7692024),
      createData('Germany', 'DE', 83019200, 357578),
      createData('Ireland', 'IE', 4857000, 70273),
      createData('Mexico', 'MX', 126577691, 1972550),
      createData('Japan', 'JP', 126317000, 377973),
      createData('France', 'FR', 67022000, 640679),
      createData('United Kingdom', 'GB', 67545757, 242495),
      createData('Russia', 'RU', 146793744, 17098246),
      createData('Nigeria', 'NG', 200962417, 923768),
      createData('Brazil', 'BR', 210147125, 8515767),
    ]

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage)
    }

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    }

    return (
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Country
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can group column headers by rendering multiple table rows inside a table head:`,
        },
      },
    },
  },
)

export const CollapsibleTable = story<TableProps>(
  args => {
    function createData(
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number,
      price: number,
    ) {
      return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
          {
            date: '2020-01-05',
            customerId: '11091700',
            amount: 3,
          },
          {
            date: '2020-01-02',
            customerId: 'Anonymous',
            amount: 1,
          },
        ],
      }
    }

    function Row(props: { row: ReturnType<typeof createData> }) {
      const { row } = props
      const [open, setOpen] = React.useState(false)

      return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    History
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Total price ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.history.map(historyRow => (
                        <TableRow key={historyRow.date}>
                          <TableCell component="th" scope="row">
                            {historyRow.date}
                          </TableCell>
                          <TableCell>{historyRow.customerId}</TableCell>
                          <TableCell align="right">
                            {historyRow.amount}
                          </TableCell>
                          <TableCell align="right">
                            {Math.round(historyRow.amount * row.price * 100) /
                              100}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      )
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
      createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
      createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
      createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
    ]

    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `An example of a table with expandable rows, revealing more information. It utilizes the Collapse component.`,
        },
      },
    },
  },
)

export const SpanningTable = story<TableProps>(
  args => {
    const TAX_RATE = 0.07

    function ccyFormat(num: number) {
      return `${num.toFixed(2)}`
    }

    function priceRow(qty: number, unit: number) {
      return qty * unit
    }

    function createRow(desc: string, qty: number, unit: number) {
      const price = priceRow(qty, unit)
      return { desc, qty, unit, price }
    }

    interface Row {
      desc: string
      qty: number
      unit: number
      price: number
    }

    function subtotal(items: ReadonlyArray<Row>) {
      return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
    }

    const rows = [
      createRow('Paperclips (Box)', 100, 1.15),
      createRow('Paper (Case)', 10, 45.99),
      createRow('Waste Basket', 2, 17.99),
    ]

    const invoiceSubtotal = subtotal(rows)
    const invoiceTaxes = TAX_RATE * invoiceSubtotal
    const invoiceTotal = invoiceTaxes + invoiceSubtotal

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0,
              )} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `A simple example with spanning rows & columns.`,
        },
      },
    },
  },
)

export const VirtualizedTable = story<TableProps>(
  args => {
    return (
      <Alert severity="warning">
        This example uses react-virtualized, which is not installed. See{' '}
        <a href="https://next.material-ui.com/components/tables/#virtualized-table">
          MUI docs
        </a>
      </Alert>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `In the following example, we demonstrate how to use react-virtualized with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.`,
        },
      },
    },
  },
)

export const Accessibility = story<TableProps>(
  args => {
    function createData(
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number,
    ) {
      return { name, calories, fat, carbs, protein }
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
    ]

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `(WAI tutorial: https://www.w3.org/WAI/tutorials/tables/)

Caption

A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it's about and decide if they want to read it.`,
        },
      },
    },
  },
)
