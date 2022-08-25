/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'

export interface ControlProps {
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
