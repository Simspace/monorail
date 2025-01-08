// Edit this file to add new stories
import React from 'react'

import type { StaticDateTimePickerProps } from '@monorail/components'
import { StaticDateTimePicker } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/Date and Time/Date Time/StaticDateTimePicker',
  component: StaticDateTimePicker,
}

const Template = story<StaticDateTimePickerProps<Date>>((args) => {
  const [value, setValue] = React.useState<Date | null>(new Date('2021-01-01T12:34:00.000Z'))

  return (
    <StaticDateTimePicker
      displayStaticWrapperAs='desktop'
      openTo='year'
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
      }}
      {...args}
    />
  )
})

/**
 * It's possible to render any date & time picker inline. This will enable building custom popover/modal containers.
 */
export const Default = story(Template)
