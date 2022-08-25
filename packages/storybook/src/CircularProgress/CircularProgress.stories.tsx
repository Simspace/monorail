// Edit this file to add new stories
import React from 'react'
import BlurOnIcon from '@mui/icons-material/BlurOn'

import type { CircularProgressProps } from '@monorail/components'
import { Box, CircularProgress, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for CircularProgress stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CircularProgressProps>(
  args => <CircularProgress aria-label="Circular Progress" {...args} />,
  { args: {}, muiName: 'MuiCircularProgress' },
)

/** Default story for CircularProgress (edit/remove by hand if needed) */
export const Default = story(Template)

const sizes = ['small', 'medium', 'large'] as const
const colors = ['primary', 'secondary', 'error', 'default'] as const

export const CircularIndeterminate = story<CircularProgressProps>(
  () => (
    <Stack direction="row" spacing={1}>
      {colors.flatMap(color => (
        <Stack direction="column" alignItems="center" spacing={8}>
          {sizes.map(size => (
            <CircularProgress
              key={`circular-progress-indeterminate-${color}-${size}`}
              color={color}
              size={size}
            />
          ))}
        </Stack>
      ))}
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
      <Stack direction="row" spacing={2}>
        {colors.flatMap(color => (
          <Stack direction="column" alignItems="center" spacing={8}>
            {sizes.map(size => (
              <CircularProgress
                key={`circular-progress-indeterminate-${color}-${size}`}
                color={color}
                size={size}
                variant="determinate"
                value={progress}
              />
            ))}
          </Stack>
        ))}
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
      <Stack direction="row" spacing={2}>
        {colors.flatMap(color => (
          <Stack direction="column" alignItems="center" spacing={8}>
            {(['medium', 'large'] as const).map(size => (
              <Box
                key={`circular-progress-label-${color}-${size}`}
                sx={{ position: 'relative', display: 'inline-flex' }}
              >
                <CircularProgress
                  color={color}
                  size={size}
                  thickness={4}
                  variant="determinate"
                  value={progress}
                />
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
            ))}
          </Stack>
        ))}
      </Stack>
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

export const CircularProgressWithIcon = story<CircularProgressProps>(() => {
  return (
    <Stack direction="row" spacing={1}>
      {colors.flatMap(color => (
        <Stack direction="column" alignItems="center" spacing={8}>
          {(['medium', 'large'] as const).map(size => (
            <Box
              key={`circular-progress-icon-${color}-${size}`}
              sx={{ position: 'relative', display: 'inline-flex' }}
            >
              <CircularProgress color={color} size={size} />
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
                <BlurOnIcon />
              </Box>
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  )
})
