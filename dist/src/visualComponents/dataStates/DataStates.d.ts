import { FC } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import * as O from 'fp-ts/lib/Option';
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
export declare const DetailContainer: import("styled-components").StyledComponent<"div", any, {
    vertical?: boolean | undefined;
}, never>;
export declare const CustomNoData: ({ headingText, details, vertical, icon, ...domProps }: {
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
export declare const Banner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Detail: import("styled-components").StyledComponent<"div", any, {
    vertical?: boolean | undefined;
}, never>;
export declare const IconBox: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NoResultsIcon: () => JSX.Element;
