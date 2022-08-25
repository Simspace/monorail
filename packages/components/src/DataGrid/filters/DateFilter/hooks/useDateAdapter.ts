import React from 'react'
import { MuiPickersAdapterContext } from '@mui/x-date-pickers'
import type { MuiPickersAdapterContextValue } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'

export function useDateAdapter() {
  const adapter = React.useContext(MuiPickersAdapterContext)
  if (adapter === null) {
    throw new Error(
      'Monorail: Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider.',
    )
  }
  return adapter as MuiPickersAdapterContextValue<Date>
}
