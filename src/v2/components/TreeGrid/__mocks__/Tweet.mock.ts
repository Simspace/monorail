import * as fc from 'fast-check'
import { iso } from 'newtype-ts'

import * as Treex from '@monorail/sharedHelpers/fp-ts-ext/Tree'
import { Key } from '@monorail/sharedHelpers/newtypes'

export interface Tweet {
  id: TweetId
  authorId: string
  content: string
  createdAt: Date
}

interface TweetId extends Key<Tweet> {}

const tweetId = iso<TweetId>()

export const arbitraryTweet: fc.Arbitrary<Tweet> = fc.record({
  id: fc.uuid().map(tweetId.wrap),
  authorId: fc.uuid(),
  content: fc.lorem(),
  createdAt: fc.date({ min: new Date(1970, 1, 1), max: new Date(Date.now()) }),
})

export const arbitraryTweetThread = Treex.getArbitrary(arbitraryTweet)
