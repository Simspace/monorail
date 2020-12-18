import { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { DetailsSize } from '@monorail/visualComponents/typography/detailsTypes';
declare type BBDetailsContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type DetailsProps = BBDetailsContainerProps & {
    property: string;
    value?: string | number;
    size?: DetailsSize;
};
export declare const Details: FC<DetailsProps>;
export {};
