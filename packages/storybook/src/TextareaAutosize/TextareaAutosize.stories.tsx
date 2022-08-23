import React from 'react'
import { TextareaAutosize, TextareaAutosizeProps } from '@monorail/components'

import { story } from '../helpers/storybook'

export default { title: 'Inputs/TextareaAutosize', component: TextareaAutosize }

const Template = story<TextareaAutosizeProps>(
  args => <TextareaAutosize aria-label="Demo Textarea" {...args} />,
  { args: {} },
)

export const Default = story(Template)

export const Empty = story(() => (
  <TextareaAutosize
    aria-label="empty textarea"
    placeholder="Empty"
    style={{ width: 200 }}
  />
))

export const MinimumHeight = story(() => (
  <TextareaAutosize
    aria-label="minimum height"
    minRows={3}
    placeholder="Minimum 3 rows"
    style={{ width: 200 }}
  />
))

export const MaximumHeight = story(() => (
  <TextareaAutosize
    maxRows={4}
    aria-label="maximum height"
    placeholder="Maximum 4 rows"
    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
    style={{ width: 200 }}
  />
))
