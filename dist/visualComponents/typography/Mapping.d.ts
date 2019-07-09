import { FCwDP } from '@monorail/sharedHelpers/react';
export declare const MappingID: import("styled-components").StyledComponent<"span", any, {}, never>;
declare type DefaultProps = {
    margin: string;
};
declare type MappingType = {
    key: string;
    type: string;
    name: string;
    description: string;
};
declare type Props = {
    mapping: MappingType;
};
export declare const Mapping: FCwDP<Props, DefaultProps>;
export {};
