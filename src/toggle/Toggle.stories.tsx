import { storiesOf } from '@storybook/react'
import React from 'react'
import { withState } from '@dump247/storybook-state'

import { Toggle } from './Toggle'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

type StoreTypes = {
  store: {
    set: (state: object) => null
    state: { checked: true }
  }
}

const stories = [
  {
    storyName: 'Toggle',
    getStory: withState({ checked: true })(({ store }: StoreTypes) => (
      <Toggle
        checked={store.state.checked}
        onChange={(checked: boolean) => store.set({ checked })}
      />
    )),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
