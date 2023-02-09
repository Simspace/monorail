import React from 'react'
import { Clear, Search as SearchIcon } from '@mui/icons-material'
import type { CSSObject } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import {
  combineSxProps,
  styled,
  useDebouncedCallback,
  useThemeProps,
} from '@monorail/utils'

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
    defaultValue = '',
    disableClearable = false,
    onChange,
    onChangeDebounced = () => {},
    value: valueProp,
    ...other
  } = props

  const ownerState = {
    ...props,
    disableClearable,
  }

  const classes = useUtilityClasses(ownerState)

  const [value, setValue] = React.useState(defaultValue ?? '')

  const handleChangeDebounced = useDebouncedCallback(
    onChangeDebounced,
    debounceTime,
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange?.(event, event.target.value, 'input')
    if (debounceTime > 0) {
      handleChangeDebounced(event, event.target.value, 'input')
    }
  }

  const isClearable = React.useMemo(() => {
    if (disableClearable) {
      return false
    }
    return typeof value === 'string' && value.length > 0
  }, [disableClearable, value])

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setValue('')
    onChange?.(event, '', 'clear')
    if (debounceTime > 0) {
      handleChangeDebounced(event, '', 'clear')
    }
    componentsProps.clearButton?.onClick?.(event)
  }

  return (
    <SearchRoot
      className={clsx(classes.root, className)}
      ref={ref}
      variant="outlined"
      ownerState={ownerState}
      value={valueProp ?? value}
      InputProps={{
        endAdornment: isClearable && (
          <ClearButton
            aria-label="search-input-clear-button"
            edge="end"
            size={ownerState.size === 'small' ? 'small' : 'medium'}
            {...componentsProps.clearButton}
            onClick={handleClear}
            sx={combineSxProps({ mr: -2 }, componentsProps.clearButton?.sx)}
          >
            <Clear />
          </ClearButton>
        ),
        ...componentsProps.Input,
        startAdornment: <SearchIcon color="default" sx={{ mr: 2 }} />,
        onChange: handleChange,
        sx: combineSxProps(
          { borderRadius: '100px' },
          componentsProps.Input?.sx,
        ),
        // Opted not to use type="search" to keep clear buttons consistent. - GS 11/01/2022
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role
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
