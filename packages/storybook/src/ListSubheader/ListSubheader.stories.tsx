// Edit this file to add new stories
import React from 'react'

import type { ListSubheaderProps } from '@monorail/components'
import { IconButton, ListSubheader, Typography } from '@monorail/components'
import { Add } from '@monorail/components/icons'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListSubheader',
  component: ListSubheader,
}

const Template = story<ListSubheaderProps>(
  (args) => (
    <ul>
      <ListSubheader {...args} />
    </ul>
  ),
  { args: { children: 'List Subheader' }, muiName: 'MuiListSubheader' },
)

export const Default = story(Template)

/**
 * Additional elements are pushed to the right by default.
 */
export const WithActionButton = story<ListSubheaderProps>((args) => (
  <ul>
    <ListSubheader {...args} sx={{ maxWidth: 300 }}>
      <Typography variant='inherit'>List Subheader</Typography>
      <IconButton onClick={() => {}} aria-hidden>
        <Add />
      </IconButton>
    </ListSubheader>
  </ul>
))

/**
 * Wrap the subheader text in a Typography component to enable line-clamping and to keep other elements from being hidden.
 */
export const TextOverflow = story<ListSubheaderProps>((args) => (
  <ul>
    <ListSubheader {...args} sx={{ maxWidth: 300 }}>
      <Typography variant='inherit' lineClamp={2}>
        A long subheader text will wrap and clamp when it reaches two lines of text
      </Typography>
      <IconButton onClick={() => {}} aria-hidden>
        <Add />
      </IconButton>
    </ListSubheader>
  </ul>
))
