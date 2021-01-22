import React from 'react'
import { action } from '@storybook/addon-actions'
import { E, O } from '@monorail/sharedHelpers/fp-ts-imports'

import { meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/components/TreeGrid/__stories__/TreeGrid.meta.json'
import {
  TreeGrid,
  TreeGridProps,
} from '@monorail/v2/components/TreeGrid/TreeGrid'

import {
  EMPTY_VIEW_TEXT_CONTENT,
  mockTreeGridProps,
} from '../__mocks__/TreeGridProps.mock'
import { Tweet } from '../__mocks__/Tweet.mock'

export default meta(META, {
  title: 'monorail/component/TreeGrid',
})

const Template = story<TreeGridProps<Tweet>>(
  args => (
    <div style={{ height: 500 }}>
      <TreeGrid<Tweet> {...mockTreeGridProps} {...args} />
    </div>
  ),
  {
    args: { ...mockTreeGridProps },
  },
)

export const Basic = story(Template)

export const NoData = story(Template, {
  args: {
    content: E.left(<>{EMPTY_VIEW_TEXT_CONTENT}</>),
  },
})
