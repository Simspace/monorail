import React from 'react'
import fc from 'fast-check'
import { pipe } from 'fp-ts/lib/function'
import * as Tree from 'fp-ts/lib/Tree'
import { A, E, NEA, O } from '@monorail/sharedHelpers/fp-ts-imports'

import { Text } from '@monorail/exports'
import * as Treex from '@monorail/sharedHelpers/fp-ts-ext/Tree'

import { TreeGridColumn, TreeGridProps } from '../TreeGrid'
import { arbitraryTweet, arbitraryTweetThread, Tweet } from './Tweet.mock'

export const EMPTY_VIEW_TEXT_CONTENT = 'You can render anything here, a loading indicator, error message, etc.' as const

export const mockTreeGridProps: TreeGridProps<Tweet> = {
  ariaLabel: { tag: 'label', value: 'Tweets' },
  content: pipe(
    fc.sample(arbitraryTweetThread, 50),
    A.mapWithIndex((ix, tree) => {
      /** Guarantee the first tree in the forest has at least one child node */
      return ix === 0
        ? {
            ...tree,
            forest: pipe(
              tree.forest,
              A.cons(Tree.make(fc.sample(arbitraryTweet, 1)[0])),
            ),
          }
        : tree
    }),
    Treex.mapForest(tweet => ({
      key: tweet.id,
      value: tweet,
    })),
    E.right,
  ),
  expandCollapse: {
    tag: 'Uncontrolled',
  },
  columns: NEA.cons<TreeGridColumn<Tweet>>(
    {
      id: 'authorId',
      renderHeader: () => <Text>Author Id</Text>,
      renderCell: node => node.value.authorId,
    },
    [
      {
        id: 'createdAt',
        renderHeader: () => <Text>Date</Text>,
        renderCell: node => node.value.createdAt.toLocaleString(),
      },
      {
        id: 'content',
        renderHeader: () => <Text>Content</Text>,
        renderCell: node => node.value.content,
      },
    ],
  ),
}
