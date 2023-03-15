/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { TypographyProps } from '@mui/material'
import {
  styled,
  svgIconClasses,
  useControlled,
  useFormControl,
  useThemeProps,
} from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { Typography } from '../Typography.js'
import type { ControlProps } from './controlProps.js'
import {
  emphaticFormControlLabelClasses,
  getEmphaticFormControlLabelUtilityClasses,
} from './emphaticFormControlLabelClasses.js'
import type { EmphaticFormControlLabelProps } from './emphaticFormControlLabelProps.js'

interface EmphaticFormControlLabelRootProps
  extends Omit<EmphaticFormControlLabelProps, 'control' | 'label'> {
  ownerState: EmphaticFormControlLabelProps
}

const EmphaticFormControlLabelRoot = styled('label', {
  name: 'MonorailEmphaticFormControlLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [
      { [`& .${emphaticFormControlLabelClasses.label}`]: styles.label },
      { [`& .${emphaticFormControlLabelClasses.control}`]: styles.control },
      styles.root,
    ]
  },
})<EmphaticFormControlLabelRootProps>(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  // For correct alignment with the text.
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'transparent',
  marginLeft: 0,
  marginRight: 16, // used for row presentation of radio/checkbox,
  border: `${theme.spacing(0.25)} solid ${theme.palette.default.light}`,
  borderRadius: theme.spacing(1),
  paddingRight: theme.spacing(3),
  '&:hover': {
    borderColor: theme.palette.primary.border.light,
    backgroundColor: theme.palette.primary.lowEmphasis.main,
    [`& > .${emphaticFormControlLabelClasses.control} .${svgIconClasses.root}`]:
      {
        color: theme.palette.primary.hover,
      },
  },
  [`&.${emphaticFormControlLabelClasses.disabled}`]: {
    cursor: 'default',
    pointerEvents: 'none',
    borderColor: theme.palette.action.disabled,
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.action.disabled,
      [`& > .${emphaticFormControlLabelClasses.control} .${svgIconClasses.root}`]:
        {
          color: theme.palette.action.disabled,
        },
    },
  },
  [`&.${emphaticFormControlLabelClasses.checked}`]: {
    borderColor: theme.palette.primary.border.light,
    backgroundColor: theme.palette.primary.lowEmphasis.dark,
    [`& .${emphaticFormControlLabelClasses.control}`]: {
      [`& .${svgIconClasses.root}`]: {
        color: theme.palette.primary.active,
      },
      '&:hover': {
        backgroundColor: 'transparent',
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.primary.active,
        },
      },
    },
  },
  [`&.${emphaticFormControlLabelClasses.error}`]: {
    cursor: 'default',
    borderColor: theme.palette.error.border.main,
    backgroundColor: theme.palette.error.lowEmphasis.light,
    [`& .${emphaticFormControlLabelClasses.control}`]: {
      cursor: 'default',
      [`& .${svgIconClasses.root}`]: {
        color: theme.palette.error.lowEmphasis.contrastText,
      },
      [`&:hover .${svgIconClasses.root}`]: {
        color: theme.palette.error.lowEmphasis.contrastText,
      },
    },
  },
  [`&.${emphaticFormControlLabelClasses.success}`]: {
    cursor: 'default',
    borderColor: theme.palette.success.border.main,
    backgroundColor: theme.palette.success.lowEmphasis.light,
    [`& .${emphaticFormControlLabelClasses.control}`]: {
      cursor: 'default',
      [`& .${svgIconClasses.root}`]: {
        color: theme.palette.success.lowEmphasis.contrastText,
      },
      [`&:hover .${svgIconClasses.root}`]: {
        color: theme.palette.success.lowEmphasis.contrastText,
      },
    },
  },
  [`& .${emphaticFormControlLabelClasses.label}`]: {
    [`&.${emphaticFormControlLabelClasses.disabled}`]: {
      color: theme.palette.text.disabled,
    },
  },
  [`& .${emphaticFormControlLabelClasses.control}`]: {
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))

interface EmphaticFormControlLabelPropsInternal
  extends EmphaticFormControlLabelProps {
  slotProps?: {
    typography?: TypographyProps
    control?: { className?: string }
  }
}

/**
 * A precomposed label for a form control that is outlined and has a background color
 * that depends on hover, checked, error, and success state. Can be used to create
 * more emphatic `Checkbox` and `Radio` components when the choice/selection action
 * is the primary action on the page.
 *
 * Demos:
 *
 * - [EmphaticFormControlLabel](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-emphaticformcontrollabel--default)
 */
export const EmphaticFormControlLabel = React.forwardRef(
  function EmphaticFormControlLabel(
    inProps: EmphaticFormControlLabelPropsInternal,
    ref: React.ForwardedRef<HTMLLabelElement>,
  ) {
    const props = useThemeProps({
      props: inProps,
      name: 'MonorailEmphaticFormControlLabel',
    })
    const {
      checked: checkedProp,
      defaultChecked,
      className,
      slotProps = {},
      control,
      disabled: disabledProp,
      disableTypography,
      label: labelProp,
      name,
      onChange,
      value,
      state = 'default',
      ...other
    } = props

    const muiFormControl = useFormControl()

    let disabled = disabledProp
    if (typeof disabled === 'undefined' && muiFormControl) {
      disabled = muiFormControl.disabled
    }

    const [checked, setChecked] = useControlled({
      controlled: checkedProp,
      default: defaultChecked ?? false,
      name: 'EmphaticFormControlLabel',
      state: 'checked',
    })

    const ownerState: EmphaticFormControlLabelProps = {
      ...props,
      disabled,
      checked,
      state,
    }

    const classes = useUtilityClasses(ownerState)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.nativeEvent.defaultPrevented) {
        return
      }

      const newChecked = event.target.checked

      setChecked(newChecked)

      if (onChange) {
        onChange(event, newChecked)
      }
    }

    let label = labelProp
    if (
      label != null &&
      (label as React.ReactElement).type !== Typography &&
      !disableTypography
    ) {
      label = (
        <Typography
          component="span"
          variant="subtitle1"
          className={classes.label}
          {...slotProps.typography}
        >
          {label}
        </Typography>
      )
    }

    const controlClassName = clsx(classes.control, slotProps.control?.className)

    const controlProps = {
      checked,
      disabled,
      defaultChecked,
      name,
      value,
      onChange: handleOnChange,
      ...slotProps.control,
      className: controlClassName,
    }

    return (
      <EmphaticFormControlLabelRoot
        className={clsx(classes.root, className)}
        ownerState={ownerState}
        ref={ref}
        {...other}
      >
        {React.createElement(control, controlProps)}
        {label}
      </EmphaticFormControlLabelRoot>
    )
  },
) as <P extends ControlProps>(
  props: EmphaticFormControlLabelProps<P>,
) => JSX.Element

function useUtilityClasses(ownerState: EmphaticFormControlLabelProps) {
  const { classes, disabled, state, checked } = ownerState
  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      state === 'error' && 'error',
      state === 'success' && 'success',
      checked && 'checked',
    ],
    label: ['label', disabled && 'disabled'],
    control: ['control'],
  }

  return composeClasses(
    slots,
    getEmphaticFormControlLabelUtilityClasses,
    classes,
  )
}
