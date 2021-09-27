// Edit this file to add new stories
import React from 'react'
import { Stack, StackProps } from '../Stack'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Stack.stories.gen'
import { styled } from '@material-ui/core/styles'
import { Paper } from '../../Paper/Paper'
import { Divider } from '../../Divider/Divider'

/**
 * Metadata for Stack stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Layout/Stack' }

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StackProps>(
  args => (
    <Stack direction={'row'} justifyContent={'center'}>
      <Stack {...args}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Stack>
  ),
  {
    args: {},
    parameters: {},
  },
)

/** Default story for Stack (edit/remove by hand if needed) */
export const Default = story(Template, {
  args: { spacing: 2 },
})

export const Direction = story(Template, {
  args: { spacing: 2, direction: 'row' },
  parameters: {
    docs: {
      storyDescription: 'Direction',
      description: {
        story:
          'By default, Stack arranges items vertically in a column. However, the direction prop can be used to position items horizontally in a row as well.',
      },
    },
  },
})
export const Dividers = story(Template, {
  args: {
    spacing: 2,
    direction: 'row',
    divider: <Divider orientation={'vertical'} />,
  },
  parameters: {
    docs: {
      storyDescription: 'Divider',
      description: {
        story:
          'Use the divider prop to insert an element between each child. This works particularly well with the Divider component.',
      },
    },
  },
})
