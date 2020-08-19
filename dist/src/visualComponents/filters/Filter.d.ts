import { Component, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare const CCFilter: any;
export declare const FilterText: any;
export declare const FilterIcon: any;
declare type CCFilterProps = {
    cssOverrides?: SimpleInterpolation;
    isActive: boolean;
    onToggle?: (isOpen: boolean) => void;
};
declare type Props = CCFilterProps & {
    document?: Document;
    title: ReactNode;
    content: ReactNode;
    zIndex?: number;
};
export declare class Filter extends Component<Props> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Filter.d.ts.map