import { storiesOf } from '@storybook/react'
import React from 'react'

import { Fragment } from 'src/common/components/Fragment'
import { Avatar } from 'avatar/Avatar'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Avatar',
    getStory: () => (
      <Fragment>
        <Avatar first="W" last="W" /> <Avatar first="W" last="W" team />
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
