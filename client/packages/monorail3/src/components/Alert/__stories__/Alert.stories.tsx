// Edit this file to add new stories
import React from 'react'
import { Alert, AlertProps } from '../Alert'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Alert.stories.gen'
import { AlertTitle } from '../../AlertTitle/AlertTitle'
import { Stack } from '../../Stack/Stack'
import { Button } from '../../Button/Button'

/**
 * Metadata for Alert stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AlertProps>(
  args => (
    <Alert {...args}>This is a test of the emergency broadcast system</Alert>
  ),
  // TODO: doesn't seem to be inferring the severity values for the argTypes
  { args: { severity: 'warning' } },
)

/** Default story for Alert (edit/remove by hand if needed) */
export const Default = story(Template)

export const WithTitle = () => {
  return (
    <Alert severity="info">
      <AlertTitle>This is the title</AlertTitle>
      This is the description! <strong>So strong.</strong>
    </Alert>
  )
}

export const Severities = () => {
  return (
    <>
      <Alert severity="info">Info message</Alert>
      <Alert severity="success">Success message</Alert>
      <Alert severity="warning">Warning message</Alert>
      <Alert severity="error">Error message</Alert>
    </>
  )
}

export const Actions = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  )
}
