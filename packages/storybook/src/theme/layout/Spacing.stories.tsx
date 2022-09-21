import React from 'react'

import { Box, Link, Stack, Typography } from '@monorail/components'

export default {
  title: 'Theme/Layout/Spacing And Sizing',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

const InlineMono = ({ text }: { text: string }) => (
  <Typography
    component="span"
    variant="monoBody1"
    fontSize="inherit"
    fontWeight="medium"
    sx={{
      color: 'secondary.dark',
      bgcolor: 'background.default',
      borderRadius: 1,
      px: 1,
    }}
  >
    {text}
  </Typography>
)

const Spacing = () => {
  return (
    <Stack gap={4} mb={10}>
      <Box>
        <Typography variant="h2" gutterBottom>
          Spacing
        </Typography>
        <Typography>There are three methods to create spacing:</Typography>
      </Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          1. <InlineMono text="theme.spacing()" />
        </Typography>
        <Typography>
          This method is recommended when wrapping a component.
        </Typography>
        <Typography>
          <InlineMono text="theme.spacing()" /> accepts up to 4 arguments. OK to
          mix numbers and strings.
        </Typography>
        <Typography>One spacing unit === 4px.</Typography>
        <Typography fontWeight="bold">
          If you prefer the <InlineMono text="sx" /> method
        </Typography>
      </Box>

      <Box>
        <Typography variant="h3" gutterBottom>
          2. The <InlineMono text="sx" /> prop
        </Typography>
        <Typography>
          This method is recommended when overriding only a handful of
          properties.
        </Typography>
        <Typography fontWeight="bold">Shorthand system prop</Typography>
        <Typography>
          For a full list of shorthand props, see{' '}
          <Link href="https://mui.com/system/spacing/#api">the MUI docs</Link>.
        </Typography>
        <Typography fontWeight="bold">Theme access</Typography>
        <Typography fontWeight="bold">Full property name</Typography>
      </Box>

      <Box>
        <Typography variant="h3" gutterBottom>
          3. System Keys
        </Typography>
        <Typography>
          This method is recommended if you only need to add spacing.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h3" gutterBottom>
          Exceptions
        </Typography>
        <Typography>
          &#8226; For <InlineMono text="<Typography />" />, use the gutterBottom
          prop, instead of adding a margin-bottom.
        </Typography>
        <Typography>
          &#8226; For <InlineMono text="<ListItem />" />, use{' '}
          <InlineMono text="disableGutters" /> and
          <InlineMono text="disablePadding" /> instead of overriding its
          paddings.
        </Typography>
        <Typography>
          &#8226; For <InlineMono text="<Accordion />" />, use{' '}
          <InlineMono text="disableGutters" /> instead of overriding its
          paddings.
        </Typography>
      </Box>
    </Stack>
  )
}
const Sizing = () => {
  return (
    <Box mb={4}>
      <Typography variant="h2" gutterBottom>
        Sizing
      </Typography>

      <Box>
        <Typography variant="h3" gutterBottom>
          Height and widths
        </Typography>
        <Typography>
          By default, <InlineMono text="height" /> and{' '}
          <InlineMono text="width" /> aren’t calculated by{' '}
          <InlineMono text="theme.spacing()" />.
        </Typography>
        <Typography>
          Use <InlineMono text="theme.spacing()" /> instead of pixel values.
          Other CSS units are also valid as strings and should be used when
          appropriate.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h3" gutterBottom>
          Border
        </Typography>
      </Box>
    </Box>
  )
}

export const SpacingAndSizing = () => {
  return (
    <Box p={4}>
      <Spacing />
      <Sizing />
    </Box>
  )
}
