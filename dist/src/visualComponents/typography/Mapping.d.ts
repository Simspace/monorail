import { FC } from 'react';
export declare const MappingID: import("styled-components").StyledComponent<"span", any, {}, never>;
declare type MappingType = {
    key: string;
    type: string;
    name: string;
    description: string;
};
declare type ContainerProps = {
    margin?: string;
};
declare type Props = ContainerProps & {
    mapping: MappingType;
};
export declare const Mapping: FC<Props>;
export {};
