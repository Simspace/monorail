import React from 'react'
import type { IconButtonProps } from '@mui/material'
import { IconButton } from '@mui/material'
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
      {...props}
      ref={ref}
      slots={{
        ...props.slots,
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
        ...props.slotProps,
        layout: {
          sx: { paddingX: 2, pt: 4, paddingBottom: 6 },
          ...props.slotProps?.layout,
        },
        field: { clearable: true, ...props.slotProps?.field },
        textField: { fullWidth: true, ...props.slotProps?.textField },
        clearIcon: { fontSize: 'medium', ...props.slotProps?.clearIcon },
        inputAdornment: { sx: { ml: 0 }, ...props.slotProps?.inputAdornment },
      }}
      closeOnSelect={false}
      views={['minutes', 'seconds']}
      format="mm:ss"
    />
  )) as typeof MuiDesktopTimePicker
