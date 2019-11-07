import { DownshiftProps, DownshiftState, StateChangeOptions } from 'downshift';
import { Option } from 'fp-ts/lib/Option';
import { Dispatch, SetStateAction } from 'react';
import { Nullable } from '@monorail/sharedHelpers/typeLevel';
import { DropdownType } from './helpers';
import { DropdownParser } from './parsers';
export declare type StateReducer<T> = (state: DownshiftState<T>) => (changes: StateChangeOptions<T>) => StateChangeOptions<T>;
export declare interface BehaviorController<T> {
    stateReducer: StateReducer<T>;
    getItems: (text: string) => Array<T>;
    downshiftProps?: Partial<DownshiftState<T> & DownshiftProps<T>>;
}
export declare type BehaviorControllerHook<T> = (collection: Array<T>, parser: DropdownParser<T>) => BehaviorController<T>;
export declare const useAsFilter: <T extends DropdownType>(collection: T[], parser: DropdownParser<T>) => BehaviorController<T>;
export declare const useAsSelect: <T extends DropdownType>(collection: T[], parser: DropdownParser<T>) => BehaviorController<T>;
export declare const useControlledDropdown: <T extends DropdownType>(props: {
    value?: string | number | T | undefined;
    collection: T[];
    parser: DropdownParser<T>;
}) => [Option<T>, Dispatch<SetStateAction<Option<T>>>, (prevItem: Nullable<T>, item: Nullable<T>) => boolean];
