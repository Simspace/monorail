import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  iconButtonClasses,
  outlinedInputClasses,
  svgIconClasses,
  useThemeProps,
} from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'

import { styled, useControlled } from '@monorail/utils'

import { IconButton } from '../IconButton.js'
import { TextField } from '../TextField.js'
import { getPasswordTextFieldUtilityClass } from './passwordTextFieldClasses.js'
import type { PasswordTextFieldProps } from './PasswordTextFieldProps.js'

interface PasswordTextFieldOwnerState extends PasswordTextFieldProps {}

interface PasswordTextFieldRootProps {
  ownerState: PasswordTextFieldOwnerState
}

const PasswordTextFieldRoot = styled(TextField, {
  name: 'MonorailPasswordTextField',
  slot: 'Root',
})<PasswordTextFieldRootProps>(({ theme }) => ({
  [`& .${outlinedInputClasses.focused} .${iconButtonClasses.root} > .${svgIconClasses.root}`]:
    { color: theme.palette.default.main },
}))

const VisibilityIcon = styled(Visibility, {
  name: 'MonorailPasswordTextField',
  slot: 'VisibilityIcon',
})(({ theme }) => ({
  color: theme.palette.default.main,
}))

const VisibilityOffIcon = styled(VisibilityOff, {
  name: 'MonorailPasswordTextField',
  slot: 'VisibilityOffIcon',
})(({ theme }) => ({
  color: theme.palette.default.lowEmphasis.dark,
}))

/**
 * `PasswordTextField` is a convenience wrapper for `TextField`.
 *
 * ## Advanced Configuration
 *
 * Like Text Field, PasswordTextField is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](https://mui.com/material-ui/api/form-control)
 * - [InputLabel](https://mui.com/material-ui/api/input-label/)
 * - [OutlinedInput](https://mui.com/material-ui/api/outlined-input/)
 * - [Input](https://mui.com/material-ui/api/input/)
 * - [FormHelperText](https://mui.com/material-ui/api/form-helper-text/)
 *
 */
export const PasswordTextField = React.forwardRef(function PasswordTextField(
  inProps,
  ref,
) {
  const props = useThemeProps({
    name: 'MonorailPasswordTextField',
    props: inProps,
  })

  const {
    onVisibilityChange,
    slotProps,
    inputRef,
    isVisible: controlledState,
    defaultIsVisible: defaultState,
    ...other
  } = props

  const [isVisible, setIsVisible] = useControlled({
    controlled: controlledState,
    default: defaultState,
    name: 'MonorailPasswordTextField',
    state: 'isVisible',
  })
  const classes = useUtilityClasses(props)

  const toggleVisibility = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setIsVisible(!isVisible)
      onVisibilityChange?.(event, !isVisible)

      slotProps?.iconButton?.onClick?.(event)
    },
    [isVisible, onVisibilityChange, setIsVisible, slotProps?.iconButton],
  )

  const endAdornment = React.useMemo(() => {
    return (
      <IconButton
        color="default"
        shape="circular"
        aria-label="toggle visibility"
        onClick={toggleVisibility}
        edge="end"
        {...slotProps?.iconButton}
        className={classes.toggleVisibilityButton}
      >
        {isVisible ? (
          <VisibilityIcon
            {...slotProps?.visibilityIcon}
            className={classes.visibilityIcon}
          />
        ) : (
          <VisibilityOffIcon
            {...slotProps?.visibilityOffIcon}
            className={classes.visibilityOffIcon}
          />
        )}
      </IconButton>
    )
  }, [
    classes.toggleVisibilityButton,
    classes.visibilityIcon,
    classes.visibilityOffIcon,
    isVisible,
    slotProps?.iconButton,
    slotProps?.visibilityIcon,
    slotProps?.visibilityOffIcon,
    toggleVisibility,
  ])

  const type = React.useMemo(() => {
    if (isVisible) {
      return 'text'
    }

    return 'password'
  }, [isVisible])

  return (
    <PasswordTextFieldRoot
      ownerState={props}
      inputRef={inputRef}
      ref={ref}
      type={type}
      InputProps={{
        ...props.InputProps,
        endAdornment,
      }}
      className={classes.root}
      {...other}
    />
  )
}) as (props: PasswordTextFieldProps) => JSX.Element

const useUtilityClasses = (ownerState: PasswordTextFieldProps) => {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
    toggleVisibilityButton: ['toggleVisibilityButton'],
    visibilityIcon: ['visibilityIcon'],
    visibilityOffIcon: ['visibilityOffIcon'],
  }

  return composeClasses(slots, getPasswordTextFieldUtilityClass, classes)
}
