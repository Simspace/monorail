import { storiesOf } from '@storybook/react'
import React from 'react'
import { css } from 'styled-components'

import { Fragment } from 'src/common/components/Fragment'
import { TextField } from 'inputs/TextField'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'TextField',
    getStory: () => (
      <Fragment>
        <TextField
          placeholder="TextField"
          css={css`
            margin-bottom: 8px;
          `}
        />
        <TextField
          placeholder="TextField"
          label="I'm a label"
          css={css`
            margin-bottom: 8px;
          `}
        />
        <TextField
          placeholder="TextField"
          label="I'm a label"
          iconLeft="add"
          css={css`
            margin-bottom: 8px;
          `}
        />
        <TextField
          placeholder="TextField"
          label="I'm a label"
          iconRight="add"
          css={css`
            margin-bottom: 8px;
          `}
        />
        <TextField
          placeholder="TextField"
          label="I'm a label"
          iconLeft="add"
          iconRight="add"
          css={css`
            margin-bottom: 8px;
          `}
        />
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
