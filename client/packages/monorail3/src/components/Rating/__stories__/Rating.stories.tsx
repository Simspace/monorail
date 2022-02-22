// Edit this file to add new stories
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import StarIcon from '@mui/icons-material/Star'
import {
  Box,
  IconContainerProps,
  Rating,
  RatingProps,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Rating stories - update/extend as needed
 */
export default { title: 'Inputs/Rating', component: Rating }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<RatingProps>(args => <Rating {...args} />, {
  args: {},
})
/** Default story for Rating (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicRating = story<RatingProps>(() => {
  const [value, setValue] = React.useState<number | null>(2)
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue)
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  )
})

export const HalfRating = story<RatingProps>(
  () => {
    return (
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed.`,
        },
      },
    },
  },
)

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

export const HoverFeedback = story<RatingProps>(
  () => {
    const [value, setValue] = React.useState<number | null>(2)
    const [hover, setHover] = React.useState(-1)

    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(_, newValue) => {
            setValue(newValue)
          }}
          onChangeActive={(_, newHover) => {
            setHover(newHover)
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `You can display a label on hover to help the user pick the correct rating value. The demo uses the onChangeActive prop.`,
        },
      },
    },
  },
)

export const Sizes = story<RatingProps>(
  () => {
    return (
      <Stack spacing={1}>
        <Rating name="size-small" defaultValue={2} size="small" />
        <Rating name="size-medium" defaultValue={2} />
        <Rating name="size-large" defaultValue={2} size="large" />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `For larger or smaller ratings use the size prop.`,
        },
      },
    },
  },
)

export const CustomizedRating = story<RatingProps>(
  () => {
    const StyledRating = styled(Rating)({
      '& .MuiRating-iconFilled': {
        color: '#ff6d75',
      },
      '& .MuiRating-iconHover': {
        color: '#ff3d47',
      },
    })

    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? 's' : ''}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography component="legend">10 stars</Typography>
        <Rating name="customized-10" defaultValue={2} max={10} />
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.`,
        },
      },
    },
  },
)

const customIcons: {
  [index: string]: {
    icon: React.ReactElement
    label: string
  }
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
}

const IconContainer = (props: IconContainerProps) => {
  const { value, ...other } = props
  return <span {...other}>{customIcons[value].icon}</span>
}

export const RadioGroup = story<RatingProps>(
  () => {
    return (
      <Rating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        highlightSelectedOnly
      />
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The rating is implemented with a radio group, set highlightSelectedOnly to restore the natural behavior.`,
        },
      },
    },
  },
)
