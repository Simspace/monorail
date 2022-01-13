// Edit this file to add new stories
import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import SaveIcon from '@mui/icons-material/Save'
import green from '@mui/material/colors/green'

import { story } from '../../../__tests__/helpers/storybook'
import { Box } from '../../Box/Box'
import { Button } from '../../Button/Button'
import { Fab } from '../../Fab/Fab'
import { Stack } from '../../Stack/Stack'
import { Typography } from '../../Typography/Typography'
import { CircularProgress, CircularProgressProps } from '../CircularProgress'
import { defaultStoryMeta } from './CircularProgress.stories.gen'

/**
 * Metadata for CircularProgress stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Feedback/CircularProgress' }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CircularProgressProps>(
  args => <CircularProgress aria-label="Circular Progress" {...args} />,
  { args: {} },
)

/** Default story for CircularProgress (edit/remove by hand if needed) */
export const Default = story(Template)

export const Variants = story<CircularProgressProps>(
  () => (
    <Stack direction="row" spacing={1}>
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The CircularProgress component supports a variety of color variants.`,
        },
      },
    },
  },
)

export const CircularDeterminate = story<CircularProgressProps>(
  () => {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prevProgress =>
          prevProgress >= 100 ? 0 : prevProgress + 10,
        )
      }, 800)

      return () => {
        clearInterval(timer)
      }
    }, [])

    return (
      <Stack spacing={2} direction="row">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The CircularProgress component supports determinate states.`,
        },
      },
    },
  },
)

export const CircularIntegration = story<CircularProgressProps>(
  () => {
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const timer = React.useRef<number>()

    const buttonSx = {
      ...(success && {
        bgcolor: green[500],
        '&:hover': {
          bgcolor: green[700],
        },
      }),
    }

    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current)
      }
    }, [])

    const handleButtonClick = () => {
      if (!loading) {
        setSuccess(false)
        setLoading(true)
        timer.current = window.setTimeout(() => {
          setSuccess(true)
          setLoading(false)
        }, 2000)
      }
    }

    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              sx={{
                color: green[500],
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: -12,
                marginLeft: -12,
              }}
            />
          )}
        </Box>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The CircularProgress component may be integrated with other components.`,
        },
      },
    },
  },
)

export const CircularProgressWithLabel = story<CircularProgressProps>(
  () => {
    const [progress, setProgress] = React.useState(10)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prevProgress =>
          prevProgress >= 100 ? 0 : prevProgress + 10,
        )
      }, 800)
      return () => {
        clearInterval(timer)
      }
    }, [])

    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(progress)}%`}</Typography>
        </Box>
      </Box>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `The CircularProgress component may be integrated with other components to create a label.`,
        },
      },
    },
  },
)
