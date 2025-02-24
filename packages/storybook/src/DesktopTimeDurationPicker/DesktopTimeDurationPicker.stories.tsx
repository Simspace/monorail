import React from 'react'

import { Box, type DesktopTimePickerProps } from '@monorail/components'
import { DesktopTimeDurationPicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Time/DesktopTimeDurationPicker',
  component: DesktopTimeDurationPicker,
}

const Template = story<DesktopTimePickerProps<Date>>(
  (args: Partial<DesktopTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState<Date | null>(null)

    return (
      <Box display={'flex'} width={'30%'}>
        <DesktopTimeDurationPicker
          label="For desktop"
          value={value}
          slotProps={{ textField: { placeholder: 'something here' } }}
          onChange={newValue => {
            setValue(newValue)
          }}
          {...args}
        />
      </Box>
    )
  },
)

/**
 * `DesktopTimePicker` is a lower-level component which renders a time picker suitable for desktop browsers. This should not likely be used directly.
 */
export const Default = story(Template)
