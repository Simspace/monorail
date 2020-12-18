import { RefObject } from 'react';
import { PopOverPosition } from '@monorail/metaComponents/popOver/PopOver';
declare type UseEventListenerParams<E extends HTMLElement> = {
    element: E | null;
    eventListener: EventListener;
    eventName: keyof HTMLElementEventMap;
    options?: boolean | AddEventListenerOptions;
};
export declare function useEventListener<E extends HTMLElement>({ element, eventListener, eventName, options, }: UseEventListenerParams<E>): void;
declare type RefCallbackNullType<T> = T | null;
export declare function useRefCallback<T>(): [
    RefCallbackNullType<T>,
    (node: RefCallbackNullType<T>) => void
];
export declare function useInterval(callback: () => void, delay: number | null): void;
export declare const useTimeout: (callback: () => void, timeout: number, cleanup?: () => void) => void;
export declare function useInputDebounce<T extends unknown>({ initialValue, onChange, delay, }: {
    initialValue: T;
    onChange: (value: T) => void;
    delay?: number;
}): [T, (value: T) => void];
/**
 * Helper toggle hook for usage with SimplePopOver
 */
export declare const useToggle: (initial: boolean) => readonly [boolean, () => void, () => void];
/**
 * Helper function for getting the position of the modal for SimplePopOver
 */
export declare function getPosition(event: React.SyntheticEvent<Element>): {
    dropXDirection: import("../metaComponents/popOver/PopOver").dropXDirectionType;
    dropYDirection: import("../metaComponents/popOver/PopOver").dropYDirectionType;
    gap: number;
    originHeight: number;
    originWidth: number;
    dropXAmount: number;
    dropYAmount: number;
    maxHeight: number;
    maxWidth: number;
    maxHeightCalc: string;
    maxWidthCalc: string;
};
/**
 * Helper hook to calculate the PopOver position
 */
export declare const usePopOverPosition: (popOverPosition?: PopOverPosition | undefined) => [PopOverPosition, import("react").Dispatch<import("react").SetStateAction<PopOverPosition>>];
/**
 * Helper hook to use SimplePopOver
 */
export declare const useSimplePopOver: (popOverPosition?: PopOverPosition | undefined) => {
    hide: () => void;
    isOpen: boolean;
    open: (event: import("react").SyntheticEvent<Element, Event>) => void;
    position: PopOverPosition;
    setPosition: import("react").Dispatch<import("react").SetStateAction<PopOverPosition>>;
    show: () => void;
};
/**
 * For focusing an element on initial render. Returns a ref to assign to the
 * element that you want to focus.
 */
export declare const useRefFocusOnRender: <A extends HTMLElement>() => RefObject<A>;
/**
 * For focusing an element on initial render. Takes a ref that is assigned to
 * the element that you want to focus.
 */
export declare const useFocusOnRender: <A extends HTMLElement>(ref: RefObject<A>) => void;
export {};
