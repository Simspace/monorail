import { MouseEvent } from 'react';
import { CommonComponentType } from '@monorail/types';
declare type Props = CommonComponentType & {
    count?: number;
    next?: (event: MouseEvent<Element>) => void;
    previous?: (event: MouseEvent<Element>) => void;
    total?: number;
};
export declare const ArrowButtons: (props: Props) => JSX.Element;
export {};
