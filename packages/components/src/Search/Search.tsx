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

import { buttonClasses } from '../Button.js'
import { IconButton } from '../IconButton.js'
import { InputAdornment } from '../InputAdornment.js'
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
})<SearchRootProps>({
  isolation: 'isolate',
})

const ClearButton = styled(IconButton, {
  name: 'MonorailSearch',
  slot: 'ClearButton',
})({
  [`&.${buttonClasses.focusVisible}`]: {
    // For focus state only to prevent hover background color from overlapping the input's outline.
    zIndex: 1,
  },
})

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
    slotProps = {},
    debounceTime = 0,
    defaultValue = '',
    disableClearable = false,
    disabled,
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
    return (
      (typeof value === 'string' && value.length > 0) ||
      (typeof valueProp === 'string' && valueProp.length > 0)
    )
  }, [disableClearable, value, valueProp])

  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setValue('')
    onChange?.(event, '', 'clear')
    if (debounceTime > 0) {
      handleChangeDebounced(event, '', 'clear')
    }
    slotProps.clearButton?.onClick?.(event)
  }

  return (
    <SearchRoot
      className={clsx(classes.root, className)}
      ref={ref}
      variant="outlined"
      ownerState={ownerState}
      value={valueProp ?? value}
      disabled={disabled}
      InputProps={{
        endAdornment: (
          <ClearButton
            aria-label="search-input-clear-button"
            edge="end"
            size={ownerState.size === 'small' ? 'small' : 'medium'}
            disabled={disabled}
            shape="circular"
            {...slotProps.clearButton}
            onClick={handleClear}
            sx={combineSxProps(
              { mr: -3.5, display: isClearable ? 'inline-flex' : 'none' },
              slotProps.clearButton?.sx,
            )}
          >
            <Clear />
          </ClearButton>
        ),
        ...slotProps.Input,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        onChange: handleChange,
        sx: combineSxProps({ borderRadius: '100px' }, slotProps.Input?.sx),
        // Opted not to use type="search" to keep clear buttons consistent. - GS 11/01/2022
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role
        role: 'searchbox',
      }}
      inputProps={slotProps.input}
      FormHelperTextProps={slotProps.formHelperText}
      InputLabelProps={slotProps.inputLabel}
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
