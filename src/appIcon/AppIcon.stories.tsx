import { storiesOf } from '@storybook/react'
import React from 'react'

import { AppIcon } from 'appIcon/AppIcon'
import { AppName } from 'CommonStyles'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'App Icon',
    getStory: () => <AppIcon appName={AppName.Range} />,
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
