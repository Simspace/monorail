import { FC } from 'react';
export declare const MappingID: any;
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
//# sourceMappingURL=Mapping.d.ts.map