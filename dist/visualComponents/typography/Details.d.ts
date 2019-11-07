import { SimpleInterpolation } from 'styled-components';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { DetailsSize } from '@monorail/visualComponents/typography/detailsTypes';
declare type BBDetailsContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type DetailsProps = BBDetailsContainerProps & {
    property: string;
    value?: string | number;
};
declare type DefaultProps = {
    size: DetailsSize;
};
export declare const Details: FCwDP<DetailsProps, DefaultProps>;
export {};
