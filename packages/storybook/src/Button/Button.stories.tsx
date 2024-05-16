// Edit this file to add new stories
import React from 'react'
import SaveIcon from '@mui/icons-material/Save'
import SelectAllOutlined from '@mui/icons-material/SelectAllOutlined'
import { capitalize } from '@mui/material'

import type { ButtonProps } from '@monorail/components'
import {
  Box,
  Button,
  LoadingButton,
  Stack,
  Typography,
} from '@monorail/components'
import { useTheme } from '@monorail/utils'

import { isMeteorTheme } from '../helpers/helpers.js'
import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/Button', component: Button }

const colors = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
] as const
const variants = ['contained', 'outlined', 'text'] as const
const sizes = ['small', 'medium', 'large'] as const

const argTypes = {
  variant: {
    options: variants,
    control: {
      type: 'radio',
    },
  },
  color: {
    options: colors,
    control: {
      type: 'radio',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
}

const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: { children: 'It Worked!' },
  argTypes,
  muiName: 'MuiButton',
})

export const Default = story(Template, {
  args: { children: 'Button', variant: 'contained' },
})

/**
 * Use `variant` to set the display style and `color` to set the coloring
 */
export const VariantsAndColors = story<ButtonProps>(
  args => {
    const theme = useTheme()
    return (
      <>
        {variants.map(variant => (
          <Box mb={10} key={variant}>
            <Typography variant="h1">{capitalize(variant)}</Typography>
            <Stack direction="row" spacing={2} my={2}>
              {colors.map(color => (
                <Button
                  key={`${variant}-${color}`}
                  variant={variant}
                  color={color}
                  size={args.size}
                  disabled={args.disabled}
                >
                  {color}
                </Button>
              ))}
            </Stack>
            <Typography variant="subtitle1" mt={4} mb={2}>
              Inverted
            </Typography>
            {isMeteorTheme(theme.name) ? (
              <Typography>
                Inverted variants are not supported in the Meteor theme.
              </Typography>
            ) : (
              <>
                <Typography>
                  Used when placing buttons on top of colored containers to
                  create contrast. Inverted text and inverted outlined Buttons
                  inherit the text color of the containing element. See the
                  Alert/Actions story for examples.
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  my={2}
                  sx={{
                    p: 2,
                    bgcolor: 'default.light',
                  }}
                >
                  {colors.map(color => (
                    <Button
                      variant={variant}
                      color={color}
                      size="medium"
                      key={`${variant}-${color}-inverted`}
                      inverted
                    >
                      {color}
                    </Button>
                  ))}
                </Stack>
              </>
            )}
          </Box>
        ))}
      </>
    )
  },
  {
    parameters: {
      a11y: {
        /**
         * Our orange buttons failed the WCAG 2.0 contrast test.
         * It does pass APCA (WCAG 3), which is what we used for our Monorail3 color palette.
         * Unfortunately, APCA isn't supported yet in axe's config options, but it something we should track.
         * https://github.com/dequelabs/axe-core/issues/3325
         * GS 6/13/22
         */
        disable: true,
      },
    },
    args: {
      disabled: false,
    },
    argTypes: {
      disabled: {
        control: {
          type: 'boolean',
        },
      },
    },
  },
)

/**
 * For larger or smaller buttons, use the `size` prop.
 */
export const Sizes = story<ButtonProps>(
  args => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" size="small" color={args.color}>
        Small
      </Button>
      <Button variant="contained" size="medium" color={args.color}>
        Medium
      </Button>
      <Button variant="contained" size="large" color={args.color}>
        Large
      </Button>
    </Stack>
  ),
  {
    args: {
      color: 'primary',
    },
    argTypes: {
      color: {
        options: colors,
        control: {
          type: 'radio',
        },
      },
    },
  },
)

/**
 * Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.
 */
export const ButtonsWithIconsAndLabel = story<ButtonProps>(args => (
  <React.Fragment>
    {variants.map(variant => (
      <Box mb={10} key={variant}>
        <Typography variant="h1">{capitalize(variant)}</Typography>
        <Stack direction="column" spacing={4} margin={2}>
          {sizes.map(size => (
            <Stack direction="row" spacing={2} key={size}>
              <Button
                variant={variant}
                size={size}
                startIcon={<SelectAllOutlined />}
                {...args}
              >
                {size}
              </Button>
              <Button
                variant={variant}
                size={size}
                endIcon={<SelectAllOutlined />}
                {...args}
              >
                {size}
              </Button>
            </Stack>
          ))}
        </Stack>
      </Box>
    ))}
  </React.Fragment>
))

/**
 * The loading buttons can show loading state and disable interactions.
 */
export const LoadingButtons = story<ButtonProps>(() => (
  <Stack direction="row" spacing={2}>
    <LoadingButton variant="contained" loading>
      Submit
    </LoadingButton>
    <LoadingButton loading>Submit</LoadingButton>
    <LoadingButton
      loading
      loadingIndicator="Loading..."
      variant="outlined"
      color="success"
    >
      Fetch data
    </LoadingButton>
    <LoadingButton
      loading
      loadingPosition="start"
      startIcon={<SaveIcon />}
      variant="text"
      color="error"
    >
      Save
    </LoadingButton>
  </Stack>
))
