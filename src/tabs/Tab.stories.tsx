import { storiesOf } from '@storybook/react'
import React from 'react'

import { Tab } from 'tabs/Tab'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Tab',
    getStory: () => <Tab>Tab</Tab>,
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
