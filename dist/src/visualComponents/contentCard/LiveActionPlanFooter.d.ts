/// <reference types="react" />
import { Option } from 'fp-ts/lib/Option';
export declare function LiveActionPlanFooter(props: LiveActionPlanFooterProps): JSX.Element;
export declare type LiveActionPlanFooterProps = {
    readonly network: Option<string>;
};
export declare function LiveAction(): JSX.Element;
export declare function NetworkName(props: {
    name: string;
}): JSX.Element;
