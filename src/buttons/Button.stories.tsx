import { storiesOf } from '@storybook/react'
import React from 'react'

import { Fragment } from 'src/common/components/Fragment'

import { Button } from './Button'
import { Icon } from 'icon/Icon'
import {
  ButtonDisplay,
  ButtonSize,
} from 'buttons/buttonTypes'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Button',
    getStory: () => (
      <Fragment>
        <Button>Button</Button>
        <Button>
          <Icon icon="add" />Button
        </Button>
        <Button display={ButtonDisplay.Secondary}>Button</Button>
        <Button display={ButtonDisplay.Outline}>Button</Button>
        <Button display={ButtonDisplay.Chromeless}>Button</Button>

        <Button size={ButtonSize.Dense}>Button</Button>
        <Button display={ButtonDisplay.Secondary} size={ButtonSize.Dense}>
          Button
        </Button>
        <Button display={ButtonDisplay.Outline} size={ButtonSize.Dense}>
          Button
        </Button>
        <Button display={ButtonDisplay.Chromeless} size={ButtonSize.Dense}>
          Button
        </Button>

        <Button size={ButtonSize.Compact}>Button</Button>
        <Button display={ButtonDisplay.Secondary} size={ButtonSize.Compact}>
          Button
        </Button>
        <Button display={ButtonDisplay.Outline} size={ButtonSize.Compact}>
          Button
        </Button>
        <Button display={ButtonDisplay.Chromeless} size={ButtonSize.Compact}>
          Button
        </Button>

        <Button size={ButtonSize.Large}>Button</Button>
        <Button display={ButtonDisplay.Secondary} size={ButtonSize.Large}>
          Button
        </Button>
        <Button display={ButtonDisplay.Outline} size={ButtonSize.Large}>
          Button
        </Button>
        <Button display={ButtonDisplay.Chromeless} size={ButtonSize.Large}>
          Button
        </Button>
      </Fragment>
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
