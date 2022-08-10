/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import {
  InternalStandardProps as StandardProps,
  styled,
  svgIconClasses,
  SxProps,
  Theme,
  TypographyProps,
  useControlled,
  useFormControl,
  useThemeProps,
} from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { Typography } from '../Typography'
import {
  EmphaticFormControlLabelClasses,
  emphaticFormControlLabelClasses,
  getEmphaticFormControlLabelUtilityClasses,
} from './emphaticFormControlLabelClasses'

export interface EmphaticFormControlLabelProps<
  P extends ControlProps = ControlProps,
> extends StandardProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    'children' | 'onChange'
  > {
  /**
   * If `true`, the component appears selected.
   */
  checked?: boolean
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<EmphaticFormControlLabelClasses>
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps?: {
    /**
     * Props applied to the Typography wrapper of the passed label.
     * This is unused if disableTypography is true.
     * @default {}
     */
    typography?: TypographyProps
    /**
     * Props applied to the control of the label.
     * @default {}
     */
    control?: Partial<Omit<P, keyof ControlProps>>
  }
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: React.JSXElementConstructor<P>
  /**
   * If `true`, the control is disabled.
   */
  disabled?: boolean
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography?: boolean
  /**
   * Pass a ref to the root element.
   */
  ref?: React.Ref<HTMLLabelElement>
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: React.ReactNode
  name?: string
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.SyntheticEvent, checked: boolean) => void
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
  /**
   * The value of the component.
   */
  value?: unknown
  /**
   * The error or success state of the component. This is always a controlled prop.
   * @default 'default'
   */
  state?: 'default' | 'error' | 'success'
}

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
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.mediumEmphasis.main,
    [`& > .${emphaticFormControlLabelClasses.control} .${svgIconClasses.root}`]:
      {
        color: theme.palette.primary.hover,
      },
  },
  [`&.${emphaticFormControlLabelClasses.disabled}`]: {
    cursor: 'default',
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
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.mediumEmphasis.dark,
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
    backgroundColor: theme.palette.error.mediumEmphasis.light,
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
    backgroundColor: theme.palette.success.mediumEmphasis.light,
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
  componentsProps?: {
    typography?: TypographyProps
    control?: { className?: string }
  }
}

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
      componentsProps = {},
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
          {...componentsProps.typography}
        >
          {label}
        </Typography>
      )
    }

    const controlClassName = clsx(
      classes.control,
      componentsProps.control?.className,
    )

    const controlProps = {
      checked,
      disabled,
      defaultChecked,
      name,
      value,
      onChange: handleOnChange,
      ...componentsProps.control,
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

interface ControlProps {
  checked?: boolean
  name?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void
  value?: unknown
  inputRef?: React.Ref<any>
  color?: undefined
}
