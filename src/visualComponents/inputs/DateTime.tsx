import React, { ChangeEvent, Component } from 'react'
import Datetime, { DatetimepickerProps } from 'react-datetime'

export const TypedDatetime = Datetime as React.ComponentType<
  DatetimepickerProps & {
    renderInput?: (
      props: DateInputProps,
      openCalendar: () => void,
      closeCalendar: () => void,
    ) => void
  }
>

export type DateInputProps = {
  className: string
  onChange: (event: ChangeEvent<HTMLElement>) => void
  // TODO: provide types for the below functions
  onClick: () => void
  onFocus: () => void
  onKeyDown: () => void
  type: string
}
