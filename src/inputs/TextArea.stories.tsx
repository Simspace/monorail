import { storiesOf } from '@storybook/react'
import React from 'react'
import { css } from 'styled-components'

import { Fragment } from 'src/common/components/Fragment'
import { TextArea } from 'inputs/TextArea'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'TextArea',
    getStory: () => (
      <Fragment>
        <TextArea
          placeholder="TextArea"
          css={css`
            margin-bottom: 8px;
          `}
        />
        <TextArea
          placeholder="TextArea"
          label="I'm a label"
          css={css`
            margin-bottom: 8px;
          `}
        />
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
