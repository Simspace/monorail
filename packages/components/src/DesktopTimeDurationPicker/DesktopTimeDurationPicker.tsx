import React from 'react'
import type { IconButtonProps } from '@mui/material'
import { IconButton } from '@mui/material'
import type { DesktopTimePickerProps as MuiDesktopTimePickerProps } from '@mui/x-date-pickers'
import { DesktopTimePicker as MuiDesktopTimePicker } from '@mui/x-date-pickers'

/**
 *
 * Demos:
 *
 * - [Time Picker](https://mui.com/x/react-date-pickers/time-picker/)
 *
 * API:
 *
 * - [DesktopTimePicker API](https://mui.com/x/api/date-pickers/desktop-time-picker/)
 */
export const DesktopTimeDurationPicker: typeof MuiDesktopTimePicker =
  React.forwardRef((props, ref) => (
    <MuiDesktopTimePicker
      ref={ref}
      slots={{
        actionBar: () => null,
        /**
         * NOTE: Overriding this to avoid the opacity: 0 added by MUI to the clear button.
         */
        clearButton: ({ children, onClick }: IconButtonProps) => (
          <IconButton onClick={onClick}>{children}</IconButton>
        ),
      }}
      /**
       * The reason for this is here instead of in
       * packages/themes/src/classic/components/PickersLayout/themeOverrides.ts
       * is because the layout padding depends on whether the component is wrapping a DateTimePicker or a
       * DesktopDateTimePicker. The padding is different for each.
       */
      slotProps={{
        layout: { sx: { paddingX: 2, pt: 4, paddingBottom: 6 } },
        field: { clearable: true },
        textField: { fullWidth: true },
        clearIcon: { fontSize: 'medium' },
        inputAdornment: { sx: { ml: 0 } },
      }}
      closeOnSelect={false}
      views={['minutes', 'seconds']}
      format="mm:ss"
      {...props}
    />
  )) as typeof MuiDesktopTimePicker

export interface DesktopTimePickerProps<TDate = Date>
  extends MuiDesktopTimePickerProps<TDate> {}

export * from '@mui/x-date-pickers/DesktopTimePicker'
