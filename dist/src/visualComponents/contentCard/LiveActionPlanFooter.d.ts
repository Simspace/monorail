/// <reference types="react" />
import * as O from 'fp-ts/lib/Option';
export declare function LiveActionPlanFooter(props: LiveActionPlanFooterProps): JSX.Element;
export declare type LiveActionPlanFooterProps = {
    readonly network: O.Option<string>;
};
export declare function LiveAction(): JSX.Element;
export declare function NetworkName(props: {
    name: string;
}): JSX.Element;
