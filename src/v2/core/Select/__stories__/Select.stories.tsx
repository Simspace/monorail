import React from 'react'

import {
  A11Y_ELEMENT__COMPONENT,
  A11yElement,
  DISABLED_ARG_TYPE,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Select/__stories__/Select.meta.json'
import { Select, SelectProps } from '@monorail/v2/core/Select/Select'
import { SelectItem } from '@monorail/v2/core/Select/SelectItem'
import { action } from '@storybook/addon-actions'

//#region Metadata for ALL stories
export default meta(META, {
  title: 'monorail/core/Select',
  argTypes: {
    ref: DISABLED_ARG_TYPE,
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400,
    },
  },
})
//#endregion

//#region Helpers
const values = [20, 50, 100, 'All']
type Value = typeof values[number]

const Template = story<SelectProps<Value>>(
  args => {
    const [selectedValue, setSelectedValue] = React.useState<Value | undefined>(
      undefined,
    )

    return (
      <Select
        aria-label="ARIA input fields must have an accessible name"
        popoverPosition="below"
        value={selectedValue}
        onChange={event => {
          action('onChange')(event.target.value)
          setSelectedValue(event.target.value)
        }}
        {...args}
      >
        {values.map((value, index) => (
          <SelectItem key={index} value={value}>
            {value}
          </SelectItem>
        ))}
      </Select>
    )
  },
  {
    parameters: {
      ...A11Y_ELEMENT__COMPONENT,
      layout: 'centered',
    },
    args: {
      defaultValue: values[0],
    },
  },
)

type User = {
  name: string
  id: number
}

const users: Array<User> = [
  { name: 'alice', id: 0 },
  { name: 'bob', id: 1 },
  { name: 'carol', id: 2 },
]

/**
 * Note that objects still need a string representation for `SelectItem`'s `value`.
 * Using `JSON.stringify/parse` is likely not a great solution, but good enough for this demonstration.
 */
const ObjectTemplate = story<SelectProps<User>>(
  args => {
    const [selectedValue, setSelectedValue] = React.useState(users[0])

    return (
      <Select
        aria-label="ARIA input fields must have an accessible name"
        popoverPosition="below"
        value={selectedValue}
        renderValue={value => value.name}
        onChange={event => {
          action('onChange')(event.target.value)
          setSelectedValue(JSON.parse(event.target.value))
        }}
        {...args}
      >
        {users.map(user => (
          <SelectItem key={user.id} value={JSON.stringify(user)}>
            {user.name}
          </SelectItem>
        ))}
      </Select>
    )
  },
  {
    parameters: {
      ...A11Y_ELEMENT__COMPONENT,
      layout: 'centered',
    },
  },
)
//#endregion

//#region Hero story in Docs
export const Open = story(Template, {
  args: {
    open: true,
  },
  parameters: {
    a11y: {
      element: A11yElement.Popover,
    },
  },
})
//#endregion

//#region Distinct configurations
export const Placeholder = story(Template, {
  args: { defaultValue: 'Placeholder' },
})

export const Disabled = story(Template, { args: { disabled: true } })

export const ClickToOpen = story(Template)

export const ClickToOpenAbove = story(Template, {
  args: {
    popoverPosition: 'above',
  },
})

export const UsingObjectValues = story(ObjectTemplate)
//#endregion
