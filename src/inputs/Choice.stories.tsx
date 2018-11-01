import { storiesOf } from '@storybook/react'
import React from 'react'

import { Fragment } from 'src/common/components/Fragment'
import { Choice } from 'inputs/Choice'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Radio',
    getStory: () => (
      <Fragment>
        <Choice type="radio">I'm a radio</Choice>
        <Choice type="checkbox">I'm a checkbox</Choice>
        <Choice type="radio" disabled>
          I'm a disabled radio
        </Choice>
        <Choice type="checkbox" disabled>
          I'm a disabled checkbox>
        </Choice>
        <Choice type="radio" correct>
          I'm a correct radio
        </Choice>
        <Choice type="checkbox" incorrect>
          I'm an incorrect checkbox
        </Choice>
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
