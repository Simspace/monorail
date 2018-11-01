import { storiesOf } from '@storybook/react'
import React from 'react'

import { Tab } from 'tabs/Tab'
import { TabBar } from 'tabs/TabBar'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'TabBar',
    getStory: () => (
      <TabBar>
        <Tab>First Tab</Tab>
        <Tab>Second Tab</Tab>
        <Tab>Third Tab</Tab>
        <Tab>Fourth Tab</Tab>
        <Tab>Fifth Tab</Tab>
      </TabBar>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
