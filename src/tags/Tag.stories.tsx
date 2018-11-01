import { storiesOf } from '@storybook/react'
import React from 'react'

import { Tag } from './Tag'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Tag',
    getStory: () => <Tag label="Tag" icon="pepople" />,
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
