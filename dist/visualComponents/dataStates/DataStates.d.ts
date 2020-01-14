import { Option } from 'fp-ts/lib/Option';
import { FC } from 'react';
import { InterpolationValue } from 'styled-components';
export declare const NoResultsCollection: () => JSX.Element;
export declare const NoResults: () => JSX.Element;
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
    details: JSX.Element | JSX.Element[];
    vertical?: boolean | undefined;
    icon?: JSX.Element | undefined;
}) => JSX.Element;
export declare const CustomNoResults: FC<{
    bannerText: Option<string>;
    detailText: Option<string>;
    cssOverrides?: Array<InterpolationValue>;
}>;
export declare const Banner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Detail: import("styled-components").StyledComponent<"div", any, {
    vertical?: boolean | undefined;
}, never>;
export declare const IconBox: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NoResultsIcon: () => JSX.Element;
