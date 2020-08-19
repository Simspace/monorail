/// <reference types="react" />
declare type UseEventListenerParams<E extends HTMLElement> = {
    element: E | null;
    eventListener: EventListener;
    eventName: keyof HTMLElementEventMap;
    options?: boolean | AddEventListenerOptions;
};
export declare function useEventListener<E extends HTMLElement>({ element, eventListener, eventName, options, }: UseEventListenerParams<E>): void;
declare type RefCallbackNullType<T extends HTMLDivElement> = T | null;
export declare function useRefCallback<T extends HTMLDivElement>(): [RefCallbackNullType<T>, (node: RefCallbackNullType<T>) => void];
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
export declare const usePopOverPosition: () => [import("../metaComponents/popOver/PopOver").PopOverPosition, import("react").Dispatch<import("react").SetStateAction<import("../metaComponents/popOver/PopOver").PopOverPosition>>];
/**
 * Helper hook to use SimplePopOver
 */
export declare const useSimplePopOver: () => {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    open: (event: import("react").SyntheticEvent<Element, Event>) => void;
    position: import("../metaComponents/popOver/PopOver").PopOverPosition;
    setPosition: import("react").Dispatch<import("react").SetStateAction<import("../metaComponents/popOver/PopOver").PopOverPosition>>;
};
export {};
//# sourceMappingURL=hooks.d.ts.map