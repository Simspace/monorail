import React from 'react'

import { Box, type DesktopTimePickerProps } from '@monorail/components'
import { DesktopTimeDurationPicker } from '@monorail/components/DesktopTimeDurationPicker/DesktopTimeDurationPicker'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Time/DesktopTimeDurationPicker',
  component: DesktopTimeDurationPicker,
}

const Template = story<DesktopTimePickerProps<Date>>(
  (args: Partial<DesktopTimePickerProps<Date>>) => {
    const [value, setValue] = React.useState()

    return (
      <Box>
        <DesktopTimeDurationPicker
          label="For desktop"
          value={value}
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
