import { storiesOf } from '@storybook/react'
import React from 'react'
import { withState } from '@dump247/storybook-state'

import { Search } from 'inputs/Search'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

type StoreTypes = {
  store: {
    set: (state: object) => null
    state: { searchString: string }
  }
}

const stories = [
  {
    storyName: 'Search',
    getStory: withState({ searchString: '' })(({ store }: StoreTypes) => (
      <Search
        value={store.state.searchString}
        onChange={(searchString: string) => store.set({ searchString })}
      />
    )),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
