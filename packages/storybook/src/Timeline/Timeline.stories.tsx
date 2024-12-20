// Edit this file to add new stories
import React from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import HotelIcon from '@mui/icons-material/Hotel'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import RepeatIcon from '@mui/icons-material/Repeat'

import type { TimelineProps } from '@monorail/components'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Timeline', component: Timeline }

const Template = story<TimelineProps>(
  (args) => {
    // TODO: Ignore the ref, there is a type error
    const { ref: _ref, ...rest } = args
    return (
      <Timeline {...rest}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    )
  },
  {
    args: {},
    muiName: 'MuiTimeline',
  },
)

/**
 * A basic timeline showing list of events.
 */
export const Default = story(Template)

/**
 * The main content of the timeline can be positioned on the left side relative to the time axis.
 */
export const LeftPositioned = story(Template, {
  args: {
    position: 'left',
  },
})

/**
 * The main content of the timeline can be positioned on the left side relative to the time axis.
 */
export const Alternating = story(Template, {
  args: {
    position: 'alternate',
  },
})

/**
 * The `TimelineDot` can appear in different colors from theme palette.
 */
export const Color = story<TimelineProps>(
  (args) => {
    const { ref: _ref, ...rest } = args
    return (
      <Timeline {...rest}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Secondary</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='success' />
          </TimelineSeparator>
          <TimelineContent>Success</TimelineContent>
        </TimelineItem>
      </Timeline>
    )
  },
  {
    args: {
      position: 'alternate',
    },
  },
)

export const Outlined = story<TimelineProps>(
  (args) => {
    const { ref: _ref, ...rest } = args
    return (
      <Timeline {...rest}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined' color='primary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant='outlined' />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    )
  },
  {
    args: {
      position: 'alternate',
    },
  },
)

/**
 * The timeline can display content on opposite sides.
 */
export const OppositeContent = story<TimelineProps>(
  (args) => {
    const { ref: _ref, ...rest } = args
    return (
      <Timeline {...rest}>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>09:30 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>10:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>12:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>9:00 am</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    )
  },
  {
    args: {
      position: 'alternate',
    },
  },
)

/**
 * Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](https://next.material-ui.com/customization/how-to-customize/).
 */
export const Customization = story<TimelineProps>(
  (args) => {
    const { ref: _ref, ...rest } = args
    return (
      <Timeline {...rest}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align='right'
            variant='body2'
            color='text.secondary'
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant='h3' component='span'>
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='text.secondary'>
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary'>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant='h3' component='span'>
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary' variant='outlined'>
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'success.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant='h3' component='span'>
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'success.main' }} />
            <TimelineDot color='success'>
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'success.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant='h3' component='span'>
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    )
  },
  {
    args: {
      position: 'alternate',
    },
  },
)
