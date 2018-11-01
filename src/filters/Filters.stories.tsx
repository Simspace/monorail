import { storiesOf } from '@storybook/react'
import React from 'react'

import { Fragment } from 'src/common/components/Fragment'

import { Filter } from 'filters/Filter'
import { css } from 'styled-components'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Filter',
    getStory: () => (
      <Fragment>
        <Filter isOpen={false} title="Filter Left" isActive={false} />
        <Filter
          isOpen={false}
          css={css`
            float: right;
          `}
          title="Filter Right"
          isActive={false}
        />
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
