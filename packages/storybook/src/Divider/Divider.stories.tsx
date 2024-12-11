// Edit this file to add new stories
import React from 'react'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import { styled } from '@mui/material'

import type { DividerProps } from '@monorail/components'
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Divider', component: Divider }

const Template = story<DividerProps>(
  (args: DividerProps) => <Divider {...args} />,
  {
    args: {},
    muiName: 'MuiDivider',
  },
)

export const Default = story(Template)

/**
 * The divider renders as an `<hr>` by default. You can save rendering this DOM element by using the `divider` prop on the `ListItem` component.
 */
export const ListDividers = story<DividerProps>(() => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
      component="nav"
      aria-label="mailbox folders"
    >
      <ListItemButton>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <Divider />
      <ListItemButton divider>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Trash" />
      </ListItemButton>
      <Divider sx={{ opacity: 0.6 }} />
      <ListItemButton>
        <ListItemText primary="Spam" />
      </ListItemButton>
    </List>
  )
})

export const InsetDividers = story<DividerProps>(
  () => (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Good Boi"
            src="https://images.dog.ceo/breeds/boxer/n02108089_11154.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Good Boi"
            src="https://images.dog.ceo/breeds/labrador/n02099712_4323.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Good Boi"
            src="https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  ),
  {
    parameters: {
      creevey: {
        skip: 'Images load unreliably',
      },
    },
  },
)

const spacingArgTypes = {
  withText: {
    control: {
      type: 'boolean',
    },
  },
  variant: {
    options: ['fullWidth', 'inset', 'middle'],
    control: {
      type: 'radio',
    },
  },
}

const spacing = ['xs', 'sm', 'md', 'lg', 'xl'] as const

export const Spacing = story<{
  withText: boolean
  variant: DividerProps['variant']
}>(
  args => {
    const withText = args.withText!!
    return (
      <Stack>
        <Stack>
          {spacing.map(s => (
            <Divider
              key={`horizontal-spacing-${s}`}
              spacing={s}
              variant={args.variant}
            >
              {withText && s}
            </Divider>
          ))}
        </Stack>
        <Stack height={200} direction="row">
          {spacing.map(s => (
            <Divider
              key={`vertical-spacing-${s}`}
              spacing={s}
              orientation="vertical"
              variant={args.variant}
            >
              {withText && s}
            </Divider>
          ))}
        </Stack>
      </Stack>
    )
  },
  {
    argTypes: spacingArgTypes,
    parameters: {
      docs: {
        description: {
          story:
            'You can use the `spacing` prop to increase the separation between two items.',
        },
      },
    },
  },
)

export const SubheaderDividers = story<DividerProps>(
  () => (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Divider
        </Typography>
      </li>
      <ListItem>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider component="li" variant="inset" />
      <li>
        <Typography
          sx={{ mt: 0.5, ml: 18 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          Leisure
        </Typography>
      </li>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Good Boi"
            src="https://images.dog.ceo/breeds/boxer/n02108089_11154.jpg"
          />
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  ),
  {
    parameters: {
      creevey: {
        skip: 'Images load unreliably',
      },
    },
  },
)

export const MiddleDividers = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h1" component="div">
              Toothbrush
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h3" component="div">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="Extra Soft" />
          <Chip color="primary" label="Soft" />
          <Chip label="Medium" />
          <Chip label="Hard" />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  )
}

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}))

/**
 * You can also render a divider with content.
 */
export const DividerText = story<DividerProps>(() => {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  )

  return (
    <Root>
      {content}
      <Divider>CENTER</Divider>
      {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </Root>
  )
})

/**
 * You can also render a divider vertically using the `orientation` prop.
 */
export const VerticalDividers = story<DividerProps>(() => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: theme => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" flexItem />
        <FormatBoldIcon />
        <FormatItalicIcon />
      </Box>
    </div>
  )
})

/**
 * You can also render a vertical divider with `variant="middle"`.
 */
export const VerticalDividerMiddle = story<DividerProps>(() => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: theme => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatBoldIcon />
        <FormatItalicIcon />
      </Box>
    </div>
  )
})

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}))

/**
 * You can also render a vertical divider with content.
 */
export const VerticalDividerText = story<DividerProps>(() => {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  )

  return (
    <StyledGrid container>
      <StyledGrid item xs>
        {content}
      </StyledGrid>
      <Divider orientation="vertical" flexItem>
        VERTICAL
      </Divider>
      <StyledGrid item xs>
        {content}
      </StyledGrid>
    </StyledGrid>
  )
})
