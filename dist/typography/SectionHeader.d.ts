import { AppName } from '@monorail/helpers/exports';
import { FCwDP } from '@monorail/sharedHelpers/react';
declare type DefaultProps = {
    iconLeft: string | AppName;
    iconRight: string | AppName;
};
declare type Props = DefaultProps & {
    title: string;
};
export declare const SectionHeader: FCwDP<Props, DefaultProps>;
export {};
