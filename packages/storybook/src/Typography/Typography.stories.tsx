// Edit this file to add new stories
import React from 'react'
import { styled } from '@mui/material'
import { loremIpsum } from 'lorem-ipsum'

import type { TypographyProps } from '@monorail/components'
import { Box, Divider, Slider, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for Typography stories - update/extend as needed
 */
export default { title: 'Data Display/Typography', component: Typography }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TypographyProps>(args => <Typography {...args} />, {
  args: { children: 'Typography is used for rendering text' },
  muiName: 'MuiTypography',
})

/** Default story for Typography (edit/remove by hand if needed) */
export const Default = story(Template)

export const Variants = story<TypographyProps>(
  () => (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <Typography variant="data1" gutterBottom component="div">
        data1. Heading
      </Typography>
      <Divider />
      <Typography variant="data2" gutterBottom component="div">
        data2. Heading
      </Typography>
      <Divider />
      <Typography variant="data3" gutterBottom component="div">
        data3. Heading
      </Typography>
      <Divider />
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
      <Divider />
      <Typography variant="h2" gutterBottom component="div">
        h2. Heading
      </Typography>
      <Divider />
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
      <Divider />
      <Typography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Divider />
      <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Divider />
      <Typography variant="monoBody1" gutterBottom component="div">
        monoBody1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Divider />
      <Typography variant="monoBody2" gutterBottom component="div">
        monoBody2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Divider />
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Divider />
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Divider />
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Divider />
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The Typography component makes it easy to apply a default set of font weights and sizes in your application. Note: you can create custom variants which can be styled with any custom styles.`,
        },
      },
    },
  },
)

export const LineClamp = story<TypographyProps>(
  () => {
    const [lineClamp, setLineClamp] = React.useState(3)
    return (
      <Stack direction="column" minHeight={400} justifyContent="space-between">
        <Typography lineClamp={lineClamp}>
          {loremIpsum({ count: 20 })}
        </Typography>
        <Box p={2}>
          <Stack direction="column">
            <Typography id="lineClamp-value-label" variant="monoBody1">
              lineClamp={lineClamp}
            </Typography>
            <Slider
              aria-labelledby="lineClamp-value-label"
              value={lineClamp}
              onChange={(_, value) => setLineClamp(value as number)}
              min={1}
              max={10}
            />
          </Stack>
        </Box>
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'The `lineClamp` prop can be used to truncate text to a certain number of lines, while maintaing accessibility (i.e. the text that overflows will still be read by screen readers)',
        },
      },
    },
  },
)

// This has to be defined outside the story, or styled-components complains
const CustomButtonDiv = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
}))

export const TypographyFromTheTheme = story<TypographyProps>(
  () => {
    return (
      <>
        <CustomButtonDiv>
          The typography in this div is styled like a button
        </CustomButtonDiv>
        <Typography variant="caption">
          (See the code for how the div is styled)
        </Typography>
      </>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `In some situations you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the typography keys of the theme.`,
        },
      },
    },
  },
)

export const ChangingTheSemanticElement = story<TypographyProps>(
  () => {
    return (
      <Typography variant="h1" component="h2">
        h1. Heading (with h2 element)
      </Typography>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element. You can change the underlying element for a one-off situation with the component prop:`,
        },
      },
    },
  },
)

export const UsingSystemProps = story<TypographyProps>(
  () => {
    return (
      <>
        <Typography mb={1}>Margin-bottom 1</Typography>
        <Typography mb={2}>Margin-bottom 2</Typography>
        <Typography mb={3}>Margin-bottom 3</Typography>
        <Typography>Bottom</Typography>
      </>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `As a CSS utility component, the Typography supports all system properties. You can use them as prop directly on the component. For instance, a margin-bottom:`,
        },
      },
    },
  },
)

export const Gutters = story<TypographyProps>(
  () => {
    return (
      <Stack direction="row" spacing={1}>
        <Stack direction="column">
          <Typography gutterBottom>Gutter bottom</Typography>
          <Typography gutterBottom>Gutter bottom</Typography>
          <Typography gutterBottom>Gutter bottom</Typography>
        </Stack>
        <Stack direction="column">
          <Typography gutterBottom={false}>No gutter bottom</Typography>
          <Typography gutterBottom={false}>No gutter bottom</Typography>
          <Typography gutterBottom={false}>No gutter bottom</Typography>
        </Stack>
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `As a CSS utility component, the Typography supports all system properties. You can use them as prop directly on the component. For instance, a margin-top:`,
        },
      },
    },
  },
)
