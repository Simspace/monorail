import React from 'react'
import { Search, ViewColumn, ViewModule } from '@mui/icons-material'
import { unstable_debounce } from '@mui/utils'
import type { GridApi } from '@mui/x-data-grid-premium'
import { SUBMIT_FILTER_STROKE_TIME } from '@mui/x-data-grid-premium'

import { Box } from '../../Box.js'
import { InputAdornment } from '../../InputAdornment.js'
import { Select } from '../../Select.js'
import { Stack } from '../../Stack.js'
import { TextField } from '../../TextField.js'
import { ToggleButton } from '../../ToggleButton.js'
import { ToggleButtonGroup } from '../../ToggleButtonGroup.js'
import { Typography } from '../../Typography.js'

export interface DataGridToolbarProps {
  apiRef: React.MutableRefObject<GridApi>
  onSearchChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  onViewStyleChange?: (
    event: React.MouseEvent<HTMLElement>,
    newViewStyle: 'table' | 'gallery',
  ) => void
}

export function DataGridToolbar(props: DataGridToolbarProps) {
  const {
    apiRef,
    onSearchChange = () => {},
    onViewStyleChange = () => {},
  } = props

  const [viewStyle, setViewStyle] = React.useState<'table' | 'gallery'>('table')

  const handleViewStyleChange = React.useCallback(
    (
      event: React.MouseEvent<HTMLElement>,
      newViewStyle: 'table' | 'gallery' | null,
    ) => {
      if (newViewStyle !== null) {
        setViewStyle(newViewStyle)
        onViewStyleChange(event, newViewStyle)
      }
    },
    [onViewStyleChange],
  )

  const handleSearchChange = React.useMemo(
    () =>
      unstable_debounce(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (apiRef.current.setFilterModel) {
            apiRef.current.setFilterModel({
              items: [],
              quickFilterValues: [event.target.value],
            })
          }
          onSearchChange(event)
        },
        SUBMIT_FILTER_STROKE_TIME,
      ),
    [apiRef, onSearchChange],
  )

  return (
    <Box
      sx={theme => ({
        height: theme.spacing(20),
        padding: theme.spacing(4, 8),
        backgroundColor: theme.palette.default.lowEmphasis.light,
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
      })}
    >
      <Box
        sx={theme => ({
          flexShrink: 1,
          width: theme.spacing(120),
        })}
      >
        <TextField
          size="medium"
          placeholder="Search"
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            sx: theme => ({
              backgroundColor: theme.palette.common.white,
              borderRadius: theme.spacing(6),
            }),
          }}
          sx={{
            width: '100%',
          }}
        />
      </Box>
      <Box flex="1 1 0" />
      <Stack direction="row" alignItems="center" gap={2} flexShrink={0}>
        <Typography variant="subtitle1">Sort By</Typography>
        <Select
          sx={theme => ({
            width: theme.spacing(60),
            backgroundColor: theme.palette.common.white,
          })}
        ></Select>
        <ToggleButtonGroup
          value={viewStyle}
          exclusive
          onChange={handleViewStyleChange}
          sx={theme => ({
            backgroundColor: theme.palette.common.white,
          })}
        >
          <ToggleButton aria-label="table view" value="table">
            <ViewColumn />
          </ToggleButton>
          <ToggleButton aria-label="gallery view" value="gallery">
            <ViewModule />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Box>
  )
}
