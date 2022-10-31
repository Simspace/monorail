import React from 'react'
import { Clear, Search as SearchIcon } from '@mui/icons-material'
import type { CSSObject } from '@mui/material'
import { unstable_debounce as debounce } from '@mui/utils'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { styled, useThemeProps } from '@monorail/utils'

import { IconButton } from '../IconButton.js'
import { TextField } from '../TextField.js'
import type { SearchClassKey } from './searchClasses.js'
import { getSearchUtilityClass, searchClasses } from './searchClasses.js'
import type { SearchProps } from './searchProps'

interface SearchOwnerState extends Omit<SearchProps, 'disableClearable'> {
  disableClearable: SearchProps['disableClearable']
}

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
 * `Search` is a convenience wrapper for `TextField`.
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
 *
 * Demos:
 *
 * - [Search](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-search--default)
 */
export const Search = React.forwardRef(function Search(inProps, ref) {
  const props = useThemeProps({
    name: 'MonorailSearch',
    props: inProps,
  })

  const {
    className,
    componentsProps = {},
    debounceTime = 0,
    defaultValue: defaultValueProp,
    disableClearable = false,
    onChange,
    value,
    ...other
  } = props

  const ownerState = {
    ...props,
    disableClearable,
  }

  const classes = useUtilityClasses(ownerState)

  const [defaultValue, setDefaultValue] = React.useState(defaultValueProp)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultValue(event.target.value)
    debouncedSearch(event)
  }

  const debouncedSearch = React.useMemo(() => {
    if (debounceTime > 0) {
      return debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
      })
    } else {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
      }
    }
  }, [onChange, debounceTime])

  const isClearable =
    (!disableClearable &&
      typeof defaultValue === 'string' &&
      defaultValue.length > 0) ||
    (!disableClearable && typeof value === 'string' && value.length > 0)

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setDefaultValue('')
    onChange?.('')
    if (componentsProps.clearButton?.onClick) {
      componentsProps.clearButton.onClick(event)
    }
  }

  return (
    <SearchRoot
      className={clsx(classes.root, className)}
      ref={ref}
      variant="outlined"
      ownerState={ownerState}
      defaultValue={defaultValue}
      value={value}
      InputProps={{
        endAdornment: isClearable && (
          <ClearButton
            onClick={handleClear}
            aria-label="search-input-clear-button"
            edge="end"
            sx={{ mr: -2 }}
            {...componentsProps.clearButton}
          >
            <Clear />
          </ClearButton>
        ),
        ...componentsProps.Input,
        startAdornment: <SearchIcon color="default" sx={{ mr: 2 }} />,
        onChange: handleChange,
        sx: { borderRadius: '100px', ...componentsProps.Input?.sx },
        role: 'searchbox',
      }}
      inputProps={componentsProps.input}
      FormHelperTextProps={componentsProps.formHelperText}
      InputLabelProps={componentsProps.inputLabel}
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
