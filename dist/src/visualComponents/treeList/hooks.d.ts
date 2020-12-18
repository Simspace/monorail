import * as O from 'fp-ts/Option';
import * as TE from 'fp-ts/TaskEither';
import * as T from 'fp-ts/Tree';
import { MenuAction } from '../actionsMenu/ActionsMenu';
import { ActionReturn } from './TreeView';
declare type ForestFunctions<A, K> = {
    forest: T.Forest<A>;
    addChild: <E>(makeChild: (fromNode: T.Tree<A>) => TE.TaskEither<E, T.Tree<A>>) => (key: K) => TE.TaskEither<E, T.Forest<A>>;
    addRoot: (newRoot: A) => void;
    duplicate: (key: K) => <E>(modify: (a: A) => TE.TaskEither<E, A>) => TE.TaskEither<E, T.Forest<A>>;
    remove: (key: K) => void;
    moveUp: (key: K) => O.Option<T.Forest<A>>;
    moveDown: (key: K) => O.Option<T.Forest<A>>;
    moveInto: (key: K) => O.Option<T.Forest<A>>;
    canMoveUp: (key: K) => boolean;
    canMoveDown: (key: K) => boolean;
    canMoveInto: (key: K) => boolean;
};
export declare const useForestFunctions: <A, K>(forest: T.Forest<A>, getKey: (a: A) => K) => ForestFunctions<A, K>;
export declare const useTreeViewCreateChildAction: <A, K>({ addChild }: Pick<ForestFunctions<A, K>, "addChild">, createNode: (fromNode: T.Tree<A>) => TE.TaskEither<unknown, T.Tree<A>>) => (key: K) => MenuAction<ActionReturn<K>>;
declare type MovementChecks = 'canMoveDown' | 'canMoveInto' | 'canMoveUp';
declare type MovementFuncNames = 'moveUp' | 'moveDown' | 'moveInto';
declare type MovementFuncs<K> = {
    [F in MovementFuncNames]: (key: K) => void;
};
export declare const useTreeViewMoveActions: <A, K>(ffs: Pick<ForestFunctions<A, K>, MovementChecks> & MovementFuncs<K>) => (key: K) => MenuAction<ActionReturn<K>>[];
export declare const useTreeViewActions: <A, K>(ffs: Pick<ForestFunctions<A, K>, "addChild" | "canMoveUp" | "canMoveDown" | "canMoveInto"> & MovementFuncs<K>, createNode: (fromNode: T.Tree<A>) => TE.TaskEither<unknown, T.Tree<A>>) => (key: K) => MenuAction<ActionReturn<K>>[];
export {};
