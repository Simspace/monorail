// Edit this file to add new stories
import React from 'react'
import {
  Avatar,
  CardHeader,
  CardHeaderProps,
  IconButton,
} from '@monorail/components'
import CloseIcon from '@mui/icons-material/Close'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for CardHeader stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Surfaces/Card/CardHeader', component: CardHeader }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CardHeaderProps>(args => <CardHeader {...args} />, {
  args: {
    title: 'Title',
    subheader: 'Subheader',
  },
  muiName: 'MuiCardHeader',
})
/** Default story for CardHeader (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below

export const WithAvatar = () => (
  <CardHeader title="Title" subheader="Subheader" avatar={<Avatar />} />
)

export const WithAction = () => (
  <CardHeader
    title="Title"
    subheader="Subheader"
    action={
      <IconButton size="large" aria-label="Close">
        <CloseIcon />
      </IconButton>
    }
  />
)
