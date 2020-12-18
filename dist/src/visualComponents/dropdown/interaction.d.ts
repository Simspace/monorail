import { StateReducer } from './behavior';
import { DownshiftKeyboardEvent, DropdownStateType, DropdownType } from './helpers';
import { DropdownParser } from './parsers';
export declare interface InteractionController<T> {
    eventHandler: (props: DropdownStateType<T>) => (event: DownshiftKeyboardEvent) => void;
    stateReducer: StateReducer<T>;
}
export declare type KeyboardInteractionHook<T> = (parser: DropdownParser<T>) => InteractionController<T>;
export declare const createKeyboardInteraction: <T extends DropdownType>(options?: {
    openOnInteraction: boolean;
} | undefined) => (parser: DropdownParser<T>) => InteractionController<T>;
