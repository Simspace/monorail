// Edit this file to add new stories
import React from 'react'

import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Stack,
  Typography,
} from '../../..'
import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for LinearProgress stories - update/extend as needed
 */
export default { title: 'Feedback/LinearProgress', component: LinearProgress }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<LinearProgressProps>(
  args => <LinearProgress {...args} />,
  {
    args: {},
    muiName: 'MuiLinearProgress',
  },
)

/** Default story for LinearProgress (edit/remove by hand if needed) */
export const Default = story(Template)

const sizes = ['small', 'medium'] as const
const colors = ['primary', 'secondary', 'error', 'default'] as const

export function LinearIndeterminate() {
  return (
    <Stack spacing={8}>
      {colors.flatMap(color => (
        <Stack direction="row" spacing={8} alignItems="center">
          {sizes.map(size => (
            <Box
              key={`linear-progress-buffer-${color}-${size}`}
              sx={{ width: 156 }}
            >
              <LinearProgress
                key={`linear-progress-indeterminate-${color}-${size}`}
                color={color}
                size={size}
              />
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

export function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Stack spacing={8}>
      {colors.flatMap(color => (
        <Stack direction="row" spacing={8} alignItems="center">
          {sizes.map(size => (
            <Box
              key={`linear-progress-buffer-${color}-${size}`}
              sx={{ width: 156 }}
            >
              <LinearProgress
                key={`linear-progress-determinate-${color}-${size}`}
                variant="determinate"
                color={color}
                size={size}
                value={progress}
              />
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

function clamp(n: number, high: number): number {
  return n > high ? high : n
}

export function LinearBuffer() {
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)

  const progressRef = React.useRef(() => {})
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress >= 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10
        setProgress(clamp(progress + diff, 100))
        setBuffer(clamp(progress + diff + diff2, 100))
      }
    }
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Stack spacing={8}>
      {colors.flatMap(color => (
        <Stack direction="row" spacing={8} alignItems="center">
          {sizes.map(size => (
            <Box
              key={`linear-progress-buffer-${color}-${size}`}
              sx={{ width: 156 }}
            >
              <LinearProgress
                variant="buffer"
                color={color}
                size={size}
                value={progress}
                valueBuffer={buffer}
              />
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number },
) {
  return (
    <Stack direction="column" spacing={8}>
      {colors.flatMap(color => (
        <Stack direction="row" spacing={8}>
          {sizes.map(size => (
            <Box
              key={`linear-progress-label-${color}-${size}`}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Box sx={{ width: 156, mr: 1 }}>
                <LinearProgress
                  color={color}
                  size={size}
                  variant="determinate"
                  {...props}
                />
              </Box>
              <Box justifyContent="space-between" sx={{ width: 35 }}>
                <Typography
                  sx={{ ml: 1 }}
                  variant="body2"
                  color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

export function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 10 : prevProgress + 10,
      )
    }, 800)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  )
}
