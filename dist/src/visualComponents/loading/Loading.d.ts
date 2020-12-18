import { FC } from 'react';
export declare enum LoaderType {
    SimSpace = "simspace",
    Generic = "generic",
    Pcte = "pcte"
}
declare type Dimensions = {
    _type: 'dimensions';
} & ({
    height: number;
} | {
    width: number;
});
export declare type Size = {
    _type: 'size';
    hw: number;
} | Dimensions;
declare type Props = {
    size?: Size;
    loaderType?: LoaderType;
};
export declare const Loading: FC<Props>;
export {};
