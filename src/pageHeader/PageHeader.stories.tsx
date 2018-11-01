import { storiesOf } from '@storybook/react'
import React from 'react'

import { PageHeader } from 'pageHeader/PageHeader'

const filename = __filename.slice(__filename.indexOf('src/'))

const storybook = storiesOf(filename, module)

const stories = [
  {
    storyName: 'Page Header',
    getStory: () => <PageHeader title="Page Header" />,
  },
  {
    storyName: 'Page Header | Back Arrow',
    getStory: () => (
      <PageHeader title="Page Header | Back Arrow" goBack={() => {}} />
    ),
  },
  {
    storyName: 'Page Header | Bread Crumbs',
    getStory: () => (
      <PageHeader
        title="Page Header"
        breadCrumbs={[
          { title: 'foo', path: () => {} },
          { title: 'bar', path: () => {} },
        ]}
      />
    ),
  },
]

stories.forEach(story => storybook.add(story.storyName, story.getStory))
