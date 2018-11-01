import { storiesOf } from '@storybook/react'
import React from 'react'

import { SectionHeader } from 'typography/SectionHeader'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Section Header',
    getStory: () => <SectionHeader title="Section Header" />,
  },

  {
    storyName: 'Section Header | Icon Left',
    getStory: () => (
      <SectionHeader
        title="Section Header | Icon Left"
        iconLeft={'access_alarm'}
      />
    ),
  },

  {
    storyName: 'Section Header | Icon Right',
    getStory: () => (
      <SectionHeader
        title="Section Header | Icon Right"
        iconRight={'access_alarm'}
      />
    ),
  },

  {
    storyName: 'Section Header | Double Icon',
    getStory: () => (
      <SectionHeader
        title="Section Header | Double Icon"
        iconLeft={'access_alarm'}
        iconRight={'access_alarm'}
      />
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
