import { FCwDP } from '@monorail/sharedHelpers/react';
import { ReactNode } from 'react';
import { PopOverChildProps } from '@monorail/popOver/PopOver';
declare type Props = PopOverChildProps & DefaultProps & {
    customCloseButton?: ReactNode;
    headerChildren?: ReactNode;
    title: string;
};
declare type DefaultProps = {
    escToClose: boolean;
    iconLeft: string;
    noHeader: boolean;
};
export declare const FullScreenModal: FCwDP<Props, DefaultProps>;
export {};
