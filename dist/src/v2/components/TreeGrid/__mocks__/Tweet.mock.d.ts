import * as fc from 'fast-check';
import * as Treex from '@monorail/sharedHelpers/fp-ts-ext/Tree';
import { Key } from '@monorail/sharedHelpers/newtypes';
export interface Tweet {
    id: TweetId;
    authorId: string;
    content: string;
    createdAt: Date;
}
interface TweetId extends Key<Tweet> {
}
export declare const arbitraryTweet: fc.Arbitrary<Tweet>;
export declare const arbitraryTweetThread: fc.Arbitrary<Treex.Tree<Tweet>>;
export {};
