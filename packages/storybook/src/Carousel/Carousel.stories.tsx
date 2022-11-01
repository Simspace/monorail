import React from 'react'

import type { CarouselProps } from '@monorail/components'
import { Card, CardContent, Carousel, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Carousel',
  component: Carousel,
  parameters: {},
}

// TODO: Replace with ContentCard
const BasicCard = () => (
  <Card
    sx={{
      minWidth: 275,
      boxShadow: 'none',
      border: `1px solid`,
      borderColor: 'default.border.light',
    }}
    raised={false}
  >
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h3" component="div">
        benevolent
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
  </Card>
)

const Slides = () => (
  <>
    <BasicCard />
    <BasicCard />
    <BasicCard />
    <BasicCard />
    <BasicCard />
    <BasicCard />
  </>
)

const Template = story<CarouselProps>(args => {
  return (
    <Carousel uid="default-carousel" itemWidth={256} {...args}>
      <Slides />
    </Carousel>
  )
})

export const Default = story(Template)

export const ShowSingleItem = story(Template, {
  args: {
    GliderProps: {
      slidesToShow: 1,
      exactWidth: false,
    },
  },
})

export const StackedCarousel = story(_args => (
  <div style={{ paddingBottom: '16px' }}>
    <Carousel uid="stacked-1" itemWidth={256}>
      <Slides />
    </Carousel>
    <Carousel uid="stacked-2" itemWidth={256}>
      <Slides />
    </Carousel>
  </div>
))

export const ResponsiveMultipleItems = story(Template, {
  args: {
    GliderProps: {
      exactWidth: false,
    },
  },
})

export const HasDots = story(Template, {
  args: {
    GliderProps: {
      exactWidth: false,
      hasDots: true,
    },
  },
})

export const NoData = story(args => {
  return <Carousel uid="no-data" {...args} />
})

export const NoSlides = story(args => {
  return <Carousel uid="no-slides" {...args} />
})
