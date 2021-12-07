// Edit this file to add new stories
import React from 'react'
import { Card, CardProps } from '../Card'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Card.stories.gen'
import { Box } from '../../Box/Box'
import { CardContent } from '../../CardContent/CardContent'
import { Typography } from '../../Typography/Typography'
import { CardActions } from '../../CardActions/CardActions'
import { Button } from '../../Button/Button'
import { styled } from '@mui/material/styles'
import { IconButton, IconButtonProps } from '../../IconButton/IconButton'
import { CardHeader } from '../../CardHeader/CardHeader'
import { Avatar } from '../../Avatar/Avatar'
import { Collapse } from '../../Collapse/Collapse'
import { CardMedia } from '../../CardMedia/CardMedia'
import { red } from '@mui/material/colors'
import { CardActionArea } from '../../CardActionArea/CardActionArea'
import { useTheme } from '../../../theme/useTheme'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { images } from '../../../__tests__/helpers/testData'
/**
 * Metadata for Card stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Surfaces/Card' }
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
        <Typography variant="h5" component="div">
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
  },
)

/** Default story for Card (edit/remove by hand if needed) */
export const Default = story(Template)

export const OutlinedCard = story<CardProps>(
  () => {
    return (
      <Card sx={{ maxWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} size="large" />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const RecipeReviewCard = story<CardProps>(() => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" size="large">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%', // 16:9
        }}
        image={images.paella.url}
        title={images.lizard.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" size="large">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" size="large">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
})
RecipeReviewCard.parameters = {
  a11y: {
    config: { rules: { 'aria-roles': { enabled: false } } }, // MUI has invalid aria role on CardMedia (image instead of img)
  },
  docs: {
    description: {
      story:
        'On desktop, card content can expand. (Click the downward chevron to view the recipe.)',
    },
  },
  creevey: {
    delay: 1000,
    skip: 'Image load unreliable',
  },
}

export const MediaCard = story<CardProps>(() => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={images.lizard.url}
        title={images.lizard.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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

export const ResponsiveMediaCard = story<CardProps>(() => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={images.lizard.alt}
        height="140"
        image={images.lizard.url}
        title={images.lizard.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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

export const ActionAreaCard = story<CardProps>(() => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image={images.lizard.url}
          title={images.lizard.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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

export const MultiActionAreaCard = story<CardProps>(() => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image={images.lizard.url}
          title={images.lizard.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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

export const MediaControlCard = story<CardProps>(() => {
  const theme = useTheme()

  return (
    <Card
      sx={{ display: 'flex', maxWidth: 400, justifyContent: 'space-between' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
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
