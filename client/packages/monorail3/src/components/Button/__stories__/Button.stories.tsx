// Edit this file to add new stories
import React from 'react'
import SelectAllOutlined from '@mui/icons-material/SelectAllOutlined'
import { Button, ButtonProps, Stack, Typography } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Button stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Inputs/Button', component: Button }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: { children: 'Button' },
})

/**
 * Default story for Button (edit/remove by hand if needed)
 * */
export const Default = story(Template, {
  args: { children: 'Button', variant: 'contained' },
})

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const
const variants = ['contained', 'outlined', 'text'] as const
const sizes = ['small', 'medium', 'large'] as const

const buttons = variants.map(variant => (
  <React.Fragment key={variant}>
    <Typography variant="h1">{variant}</Typography>
    {sizes.map(size => (
      <React.Fragment key={size}>
        <Typography variant="subtitle1" margin={2}>
          {size}
        </Typography>
        <Stack direction="row" spacing={2} margin={2}>
          {colors.map(color => (
            <Button
              key={`${variant}-${size}-${color}`}
              variant={variant}
              color={color}
              size={size}
            >
              {color}
            </Button>
          ))}
        </Stack>
      </React.Fragment>
    ))}
  </React.Fragment>
))

export const VariantsAndColors = story<ButtonProps>(() => <>{buttons}</>, {
  parameters: {
    docs: {
      description: {
        story: `Use variant to set the display style and color to set the coloring`,
      },
    },
  },
})

export const Sizes = story<ButtonProps>(
  () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" size="extraSmall">
        Extra Small (custom size)
      </Button>
      <Button variant="contained" size={'small'}>
        Small
      </Button>
      <Button variant="contained" size={'medium'}>
        Medium
      </Button>
      <Button variant="contained" size={'large'}>
        Large
      </Button>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `For larger or smaller buttons, use the size prop.

**Note:** there is a known issue with size not working right now - this will be investigated/fixed during the custom theming effort.`,
        },
      },
    },
  },
)

export const ButtonsWithIconsAndLabel = story<ButtonProps>(
  () => (
    <React.Fragment>
      {variants.map(variant => (
        <React.Fragment>
          <Typography variant="h1">{variant}</Typography>
          <Stack direction="column" spacing={2} margin={2}>
            {sizes.map(size => (
              <Stack direction="row" spacing={2}>
                <Button
                  variant={variant}
                  size={size}
                  startIcon={<SelectAllOutlined />}
                >
                  {size}
                </Button>
                <Button
                  variant={variant}
                  size={size}
                  endIcon={<SelectAllOutlined />}
                >
                  {size}
                </Button>
                <Button
                  variant={variant}
                  size={size}
                  startIcon={<SelectAllOutlined />}
                  endIcon={<SelectAllOutlined />}
                >
                  {size}
                </Button>
              </Stack>
            ))}
          </Stack>
        </React.Fragment>
      ))}
    </React.Fragment>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.`,
        },
      },
    },
  },
)
