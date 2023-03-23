// Edit this file to add new stories
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { useTheme } from '@mui/material'

import type { CardActionAreaProps, CardProps } from '@monorail/components'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'
import { images } from '../helpers/testData.js'
/**
 * Metadata for Card stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Surfaces/Card', component: Card }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

const Template = story<CardProps>(
  args => (
    <Card sx={{ maxWidth: 275 }} {...args}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h2" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
  {
    args: {},
    parameters: {
      docs: {
        description: {
          story:
            'Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.',
        },
      },
    },
    muiName: 'MuiCard',
  },
)

/** Default story for Card (edit/remove by hand if needed) */
export const Default = story(Template)

export const OutlinedCard = story<CardProps>(
  args => {
    return (
      <Card sx={{ maxWidth: 275 }} variant="outlined" {...args}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h2" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: 'Set `variant="outlined"` to render an outlined card.',
        },
      },
    },
  },
)

export const MediaCard = story<CardProps>(args => {
  return (
    <Card sx={{ maxWidth: 345 }} {...args}>
      <CardMedia
        sx={{ height: 140 }}
        image={images.lizard.url}
        title={images.lizard.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
})

MediaCard.parameters = {
  a11y: {
    config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
  },
  docs: {
    description: {
      story: 'Example of a card using an image to reinforce the content.',
    },
  },
  creevey: { skip: 'Images load unreliably' },
}

export const ResponsiveMediaCard = story<CardProps>(args => {
  return (
    <Card sx={{ maxWidth: 345 }} {...args}>
      <CardMedia
        component="img"
        alt={images.lizard.alt}
        height="140"
        image={images.lizard.url}
        title={images.lizard.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
})

ResponsiveMediaCard.parameters = {
  a11y: {
    config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
  },
  docs: {
    description: {
      story:
        'By default, MUI uses the combination of a `<div>` element and a background image to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the `component` prop for these use cases:',
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
}

export const ActionAreaCard = story<CardActionAreaProps>(args => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea {...args}>
        <CardMedia
          sx={{ height: 140 }}
          image={images.lizard.url}
          title={images.lizard.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})
ActionAreaCard.args = {
  disabled: false,
}
ActionAreaCard.parameters = {
  a11y: {
    config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
  },
  docs: {
    description: {
      story:
        'Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a `CardActionArea` component.',
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
}

export const MultiActionAreaCard = story<CardProps>(args => {
  return (
    <Card sx={{ maxWidth: 345 }} {...args}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image={images.lizard.url}
          title={images.lizard.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
})

MultiActionAreaCard.parameters = {
  a11y: {
    config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
  },
  docs: {
    description: {
      story:
        'A card can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap.',
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
}

export const SimpleActionCard = story<CardProps>(
  args => {
    return (
      <Card sx={{ maxWidth: 444 }} {...args}>
        <CardHeader
          title="Card header"
          subheader="Subheader"
          action={
            <IconButton aria-label="Card actions">
              <MoreVertIcon />
            </IconButton>
          }
          sx={{ minHeight: 72 }}
        />
        <CardContent>
          <Typography>Content Goes Here</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="text">
            Small
          </Button>
          <Button size="small" variant="outlined">
            Small
          </Button>
        </CardActions>
      </Card>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story:
            'A basic card with actions in the header and footer to compare with Figma',
        },
      },
    },
  },
)

export const MediaControlCard = story<CardProps>(args => {
  const theme = useTheme()

  return (
    <Card
      sx={{ display: 'flex', maxWidth: 400, justifyContent: 'space-between' }}
      {...args}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h2">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" size="large">
            {theme.direction === 'rtl' ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause" size="large">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" size="large">
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        sx={{ width: 151 }}
        image={images.album.url}
        title={images.album.title}
      />
    </Card>
  )
})

MediaControlCard.parameters = {
  a11y: {
    config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
  },
  docs: {
    description: {
      story:
        "Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card. Here's an example of a media control card.",
    },
  },
  creevey: {
    skip: "Images don't load reliably",
  },
}
