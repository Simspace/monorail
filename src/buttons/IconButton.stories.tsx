import { storiesOf } from '@storybook/react'
import React from 'react'

import { Fragment } from 'src/common/components/Fragment'
import { IconButton } from 'buttons/IconButton'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Icon Button',
    getStory: () => (
      <Fragment>
        <IconButton icon={'arrow_back'} />
        <IconButton secondary icon={'arrow_back'} />
        <IconButton outline icon={'arrow_back'} />
        <IconButton chromeless icon={'arrow_back'} />
        <IconButton large icon={'arrow_back'} />
        <IconButton large secondary icon={'arrow_back'} />
        <IconButton large outline icon={'arrow_back'} />
        <IconButton large chromeless icon={'arrow_back'} />
        <IconButton circle icon={'close'} />
        <IconButton large circle icon={'close'} />
        <IconButton dense circle icon={'close'} />
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
