import React from 'react'
import { ViewColumn, ViewModule } from '@mui/icons-material'
import type { GridApi } from '@mui/x-data-grid-premium'
import { SUBMIT_FILTER_STROKE_TIME } from '@mui/x-data-grid-premium'

import { Box } from '../../Box.js'
import type { SearchProps } from '../../Search.js'
import { Search } from '../../Search.js'
import { Select } from '../../Select.js'
import { ToggleButton } from '../../ToggleButton.js'
import { ToggleButtonGroup } from '../../ToggleButtonGroup.js'
import { Typography } from '../../Typography.js'

export interface DataGridToolbarProps {
  apiRef: React.MutableRefObject<GridApi>
  onSearchChange?: SearchProps['onChange']
  onViewStyleChange?: (
    event: React.MouseEvent<HTMLElement>,
    newViewStyle: 'table' | 'gallery',
  ) => void
  disableSortBy?: boolean
  disableViewStyleToggle?: boolean
}

export function DataGridToolbar(props: DataGridToolbarProps) {
  const {
    apiRef,
    disableSortBy,
    disableViewStyleToggle,
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

  const handleSearchChange = React.useCallback(
    (event: React.SyntheticEvent, value: string, reason: 'input' | 'clear') => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (apiRef.current.setFilterModel) {
        apiRef.current.setFilterModel({
          items: [],
          quickFilterValues: [value],
        })
      }
      onSearchChange(event, value, reason)
    },
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
      {disableSortBy !== true && (
        <>
          <Typography variant="subtitle1">Sort By</Typography>
          <Select
            sx={theme => ({
              width: theme.spacing(60),
              backgroundColor: theme.palette.background.paper,
            })}
          ></Select>
        </>
      )}
      <Box flex="1 1 0" />
      <Box
        sx={theme => ({
          flexShrink: 1,
          width: theme.spacing(120),
        })}
      >
        <Search
          placeholder="Search"
          onChangeDebounced={handleSearchChange}
          debounceTime={SUBMIT_FILTER_STROKE_TIME}
          sx={{
            width: '100%',
          }}
          componentsProps={{
            Input: {
              sx: theme => ({
                backgroundColor: theme.palette.background.paper,
              }),
            },
          }}
        />
      </Box>
      {disableViewStyleToggle !== true && (
        <ToggleButtonGroup
          value={viewStyle}
          exclusive
          onChange={handleViewStyleChange}
          sx={theme => ({
            backgroundColor: theme.palette.background.paper,
          })}
        >
          <ToggleButton aria-label="table view" value="table">
            <ViewColumn />
          </ToggleButton>
          <ToggleButton aria-label="gallery view" value="gallery">
            <ViewModule />
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </Box>
  )
}
