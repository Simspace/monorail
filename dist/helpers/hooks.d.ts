declare type UseEventListenerParams<E extends HTMLElement> = {
    element: E | null;
    eventListener: EventListener;
    eventName: keyof HTMLElementEventMap;
    options?: boolean | AddEventListenerOptions;
};
export declare function useEventListener<E extends HTMLElement>({ element, eventListener, eventName, options, }: UseEventListenerParams<E>): void;
export {};
