import React from 'react'
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

// #region CSS

// #endregion CSS

export const StyledTextField = styled(
  MUI.TextField as typeof TextField, // as-cast necessary in order to allow for additional Monorail pass-through props
)``

export type TextFieldProps = OmitBannedProps<MUI.TextFieldProps>

export function TextField(props: TextFieldProps) {
  const bannedPropsDefaults = { variant: 'outlined' }

  return (
    <StyledTextField
      // Disable MUI shrink-label styles
      InputLabelProps={{ shrink: true, ...props.InputLabelProps }}
      InputProps={{ notched: false, ...props.InputProps }}
      {...bannedPropsDefaults} // spread as an escape hatch from BannedProps
      {...props}
    />
  )
}
;(TextField as any).muiName = (MUI.TextField as any).muiName // eslint-disable-line
