import { storiesOf } from '@storybook/react'
import React from 'react'

import { SimSpaceLogo } from 'brand/Logo'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Logo',
    getStory: () => <SimSpaceLogo />,
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
