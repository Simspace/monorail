import { storiesOf } from '@storybook/react'
import React from 'react'

import { CCDetails } from 'typography/Details'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Details',
    getStory: () => <CCDetails property="Property" value="Value" />,
  },

  {
    storyName: 'Details | Compact',
    getStory: () => <CCDetails compact property="Property" value="Value" />,
  },

  {
    storyName: 'Details | Large',
    getStory: () => <CCDetails large property="Property" value="Value" />,
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
