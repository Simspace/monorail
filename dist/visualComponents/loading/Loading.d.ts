import { FC } from 'react';
export declare enum LoaderType {
    SimSpace = "simspace",
    Generic = "generic",
    Pcte = "pcte"
}
declare type Props = {
    size?: number;
    loaderType?: LoaderType;
};
export declare const Loading: FC<Props>;
export declare const LoadingContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme.js").GlobalAppThemeInterface, {}, never>;
export {};
