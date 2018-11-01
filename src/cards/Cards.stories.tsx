import { storiesOf } from '@storybook/react'
import React from 'react'
import { css } from 'styled-components'

import {
  BBCardBackground,
  BBCardHeader,
} from 'cards/Cards'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Card',
    getStory: () => (
      <BBCardBackground
        css={css`
          width: 240px;
        `}
      >
        <BBCardHeader iconLeft="add" title={'Card Title'} />
        <p style={{ margin: '12px' }}>Card Content</p>
      </BBCardBackground>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
