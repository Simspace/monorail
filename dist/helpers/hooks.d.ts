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
export {};
