import React from 'react'
import { Clear, Search as SearchIcon } from '@mui/icons-material'
import type { CSSObject } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { styled, useThemeProps } from '@monorail/utils'

import { IconButton } from '../IconButton.js'
import { TextField } from '../TextField.js'
import type { SearchClassKey } from './searchClasses.js'
import { getSearchUtilityClass, searchClasses } from './searchClasses.js'
import type { SearchProps } from './searchProps'

interface SearchOwnerState extends SearchProps {}

interface SearchRootProps {
  ownerState: SearchOwnerState
}

function overridesResolver(
  props: { ownerState: SearchRootProps },
  styles: Partial<Record<SearchClassKey, CSSObject>>,
) {
  return [
    { [`& .${searchClasses.clearButton}`]: styles.clearButton },
    styles.root,
  ]
}

const SearchRoot = styled(TextField, {
  name: 'MonorailSearch',
  slot: 'Root',
  overridesResolver,
})<SearchRootProps>({})

const ClearButton = styled(IconButton, {
  name: 'MonorailSearch',
  slot: 'ClearButton',
})({})

/**
 * `Search` is a convenience wrapper for `<TextField type="search" />`.
 *
 * ## Advanced Configuration
 *
 * Like Text Field, Search is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](https://mui.com/material-ui/api/form-control)
 * - [InputLabel](https://mui.com/material-ui/api/input-label/)
 * - [OutlinedInput](https://mui.com/material-ui/api/outlined-input/)
 * - [Input](https://mui.com/material-ui/api/input/)
 * - [FormHelperText](https://mui.com/material-ui/api/form-helper-text/)
 *
 * Search is compatible with [Autocomplete](https://mui.com/material-ui/api/autocomplete/)'s `renderInput` prop.
 */
export const Search = React.forwardRef(function Search(inProps, ref) {
  const props = useThemeProps({
    name: 'MonorailSearch',
    props: inProps,
  })

  const { className, componentsProps = {}, onChange, sx, ...other } = props

  const { clearButton, Input, input, formHelperText, inputLabel } =
    componentsProps

  const ownerState = {
    ...props,
  }

  const classes = useUtilityClasses(ownerState)

  const [filterText, setFilterText] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value)
    onChange?.(event)
  }

  return (
    <SearchRoot
      className={clsx(classes.root, className)}
      ref={ref}
      variant="outlined"
      ownerState={ownerState}
      InputProps={{
        startAdornment: <SearchIcon />,
        endAdornment: filterText.length > 0 && (
          <ClearButton
            onClick={() => setFilterText('')}
            aria-label="search-input-clear-button"
            edge="end"
            {...clearButton}
          >
            <Clear />
          </ClearButton>
        ),
        onChange: handleChange,
        ...Input,
      }}
      inputProps={input}
      FormHelperTextProps={formHelperText}
      InputLabelProps={inputLabel}
      sx={{ borderRadius: '50%', ...sx }}
      {...other}
    />
  )
}) as (props: SearchProps) => JSX.Element

const useUtilityClasses = (ownerState: SearchProps) => {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
    clearButton: ['clearButton'],
  }

  return composeClasses(slots, getSearchUtilityClass, classes)
}
