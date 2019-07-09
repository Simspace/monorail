import { FC, SyntheticEvent } from 'react';
import { PopOverProps } from '@monorail/metaComponents/popOver/PopOver';
export declare type PopOverToggleProps = {
    isActive: boolean;
    onClick: (event: SyntheticEvent) => void;
};
export declare const PopOverNext: FC<PopOverProps>;
