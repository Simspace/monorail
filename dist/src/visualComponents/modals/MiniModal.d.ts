import { FC, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver';
import { IconType } from '@monorail/visualComponents/icon/IconType';
declare type Props = PopOverChildProps & {
    title: string;
    iconLeft?: IconType;
    headerChildren?: ReactNode;
    modalBackgroundCss?: SimpleInterpolation;
    modalHeaderCss?: SimpleInterpolation;
};
export declare const MiniModal: FC<Props>;
export {};
