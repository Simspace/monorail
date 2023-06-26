/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { Search } from '@mui/icons-material'
import type {
  ListItemProps,
  SxProps,
  TextFieldProps,
  Theme,
} from '@mui/material'
import { useThemeProps } from '@mui/material'

import {
  combineSxProps,
  composeClasses,
  filterMap,
  styled,
} from '@monorail/utils'

import { Checkbox } from '../Checkbox.js'
import { ClearFilterButton } from '../ClearFilterButton.js'
import { InputAdornment } from '../InputAdornment.js'
import { List } from '../List.js'
import { ListItem } from '../ListItem.js'
import { ListItemButton, listItemButtonClasses } from '../ListItemButton.js'
import { ListItemIcon } from '../ListItemIcon.js'
import { ListItemText } from '../ListItemText.js'
import { ScrollShadow } from '../ScrollShadow.js'
import { TextField } from '../TextField.js'
import { getEnumFilterUtilityClass } from './constants/enumFilterClasses.js'
import type { EnumFilterProps } from './models/EnumFilterProps.js'

const EnumFilterRoot = styled('div', {
  name: 'MonorailEnumFilter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles,
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: theme.spacing(120),
}))

export function EnumFilter<V>(inProps: EnumFilterProps<V>) {
  const props = useThemeProps({
    name: 'MonorailEnumFilter',
    props: inProps,
  })

  const [width, setWidth] = React.useState(0)
  const [searchText, setSearchText] = React.useState('')
  const [selected, setSelected] = React.useState(new Set<V>())

  const {
    renderValue,
    values,
    slotProps = {},
    localeText,
    onChange,
    stringifyValue = value => String(value),
  } = props

  const classes = useUtilityClasses(props)

  const selectedSize = selected.size
  const isFiltered = selectedSize > 0

  const handleMinWidthCallback = React.useCallback(
    (element: HTMLDivElement | null) => {
      if (element) {
        const elementWidth = element.clientWidth
        if (width < elementWidth) {
          setWidth(elementWidth)
        }
      }
    },
    [width],
  )

  const handleSearchTextChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearchText(event.currentTarget.value)
    },
    [],
  )

  const handleFilterItemClick = React.useCallback(
    (value: V) => (_event: React.MouseEvent<HTMLDivElement>) => {
      const newSelected = new Set(selected)
      if (selected.has(value)) {
        newSelected.delete(value)
        setSelected(newSelected)
      } else {
        newSelected.add(value)
        setSelected(newSelected)
      }

      onChange?.(newSelected)
    },
    [selected, onChange],
  )

  const handleClearFilter = React.useCallback(() => {
    const newSelected = new Set<V>()
    setSelected(newSelected)
    onChange?.(newSelected)
  }, [onChange])

  const searchProps: TextFieldProps = {
    ...slotProps.search,
    size: 'medium',
    placeholder: slotProps.search?.placeholder ?? 'Search',
    InputProps: {
      ...slotProps.search?.InputProps,
      startAdornment: slotProps.search?.InputProps?.startAdornment ?? (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
      sx: combineSxProps(
        theme => ({
          borderRadius: theme.spacing(6),
        }),
        slotProps.search?.InputProps?.sx,
      ),
    },
    value: searchText,
    onChange: handleSearchTextChange,
    sx: combineSxProps(
      theme => ({
        margin: theme.spacing(4),
      }),
      slotProps.search?.sx,
    ),
    autoFocus: true,
  }

  return (
    <EnumFilterRoot
      className={classes.root}
      ref={handleMinWidthCallback}
      style={{ minWidth: `${width}px` }}
    >
      <TextField {...searchProps} />
      <ScrollShadow bottom={isFiltered}>
        <List
          {...slotProps.list}
          disablePadding
          sx={combineSxProps(
            theme => ({
              maxHeight: theme.spacing(76),
              flexDirection: 'column',
            }),
            slotProps.list?.sx,
          )}
        >
          {filterMap(values, (value, index) => {
            if (
              stringifyValue(value)
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            ) {
              const label = renderValue?.(value) ?? value
              return (
                <EnumFilterItem
                  {...slotProps.listItem}
                  key={index}
                  label={label as React.ReactNode}
                  checked={selected.has(value)}
                  onClick={handleFilterItemClick(value)}
                />
              )
            }
          })}
        </List>
      </ScrollShadow>
      <ClearFilterButton
        {...slotProps.clearFilterButton}
        sx={combineSxProps(
          theme => ({
            mb: isFiltered ? 0 : -8,
            padding: theme.spacing(4),
          }),
          slotProps.clearFilterButton?.sx,
        )}
        isFiltered={isFiltered}
        onClick={handleClearFilter}
      >
        {localeText.clearSelectionButton(selectedSize)}
      </ClearFilterButton>
    </EnumFilterRoot>
  )
}

export interface EnumFilterItemProps extends Omit<ListItemProps, 'onClick'> {
  label: React.ReactNode
  checked: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  sx?: SxProps<Theme>
}

const EnumFilterItem = React.memo(function EnumFilterItem(
  props: EnumFilterItemProps,
) {
  const { label, sx, checked, onClick, ...listItemProps } = props
  return (
    <ListItem
      {...listItemProps}
      disableGutters
      disablePadding
      dense
      sx={combineSxProps(
        {
          flex: 1,
          minWidth: 0,
          margin: 0,
          padding: 0,
          '& span': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
        sx,
      )}
    >
      <ListItemButton
        sx={theme => ({
          py: theme.spacing(2),
          px: 0,
          [`&.${listItemButtonClasses.focusVisible}`]: {
            outline: 'none',
            boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
            borderRadius: 0,
          },
        })}
        onClick={onClick}
      >
        <ListItemIcon
          sx={theme => ({
            margin: theme.spacing(0, 0, 0, 4),
          })}
        >
          <Checkbox tabIndex={-1} edge="start" checked={checked} disableHover />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )
})

function useUtilityClasses(props: EnumFilterProps) {
  const { classes } = props

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getEnumFilterUtilityClass, classes)
}
