import * as O from 'fp-ts/lib/Option';
import { FC } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
export declare const NoResultsCollection: () => JSX.Element;
export declare const NoResults: (props: {
    cssOverrides?: FlattenSimpleInterpolation;
}) => JSX.Element;
export declare const EmptyTable: () => JSX.Element;
export declare const NoEvents: () => JSX.Element;
export declare const NoCompletedEvents: () => JSX.Element;
export declare const NoData: () => JSX.Element;
export declare const NoModules: () => JSX.Element;
export declare const NotAuthorized: () => JSX.Element;
export declare const SomethingWentWrong: () => JSX.Element;
export declare const NotFound: () => JSX.Element;
export declare const CustomNoData: ({ headingText, details, vertical, icon, }: {
    headingText: string;
    details: JSX.Element | Array<JSX.Element>;
    vertical?: boolean | undefined;
    icon?: JSX.Element | undefined;
}) => JSX.Element;
export declare const CustomNoResults: FC<{
    bannerText: O.Option<string>;
    detailText: O.Option<string>;
    cssOverrides?: FlattenSimpleInterpolation;
}>;
export declare const Banner: any;
export declare const Detail: any;
export declare const IconBox: any;
export declare const NoResultsIcon: () => JSX.Element;
//# sourceMappingURL=DataStates.d.ts.map