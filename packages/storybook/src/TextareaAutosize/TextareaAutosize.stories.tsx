import React from 'react'

import type { TextareaAutosizeProps } from '@monorail/components'
import { TextareaAutosize } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/TextareaAutosize', component: TextareaAutosize }

const Template = story<TextareaAutosizeProps>(
  // @ts-expect-error
  args => <TextareaAutosize aria-label="Demo Textarea" {...args} />,
  { args: {} },
)

export const Default = story(Template)

export const Empty = story(() => (
  // @ts-expect-error
  <TextareaAutosize
    aria-label="empty textarea"
    placeholder="Empty"
    style={{ width: 200 }}
  />
))

export const MinimumHeight = story(() => (
  // @ts-expect-error
  <TextareaAutosize
    aria-label="minimum height"
    minRows={3}
    placeholder="Minimum 3 rows"
    style={{ width: 200 }}
  />
))

export const MaximumHeight = story(() => (
  // @ts-expect-error
  <TextareaAutosize
    maxRows={4}
    aria-label="maximum height"
    placeholder="Maximum 4 rows"
    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
    style={{ width: 200 }}
  />
))
