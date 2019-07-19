import { Option } from 'fp-ts/lib/Option';
import { FC } from 'react';
import { InterpolationValue } from 'styled-components';
export declare const NoResultsCollection: () => JSX.Element;
export declare const NoResults: () => JSX.Element;
export declare const EmptyTable: () => JSX.Element;
export declare const NoData: () => JSX.Element;
export declare const NotAuthorized: () => JSX.Element;
export declare const SomethingWentWrong: () => JSX.Element;
export declare const NotFound: () => JSX.Element;
export declare const CustomNoResults: FC<{
    bannerText: Option<string>;
    detailText: Option<string>;
    cssOverrides?: Array<InterpolationValue>;
}>;
