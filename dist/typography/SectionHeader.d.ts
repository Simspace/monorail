import { AppName } from '@monorail/helpers/exports';
import { FCwDP } from '@monorail/sharedHelpers/react';
declare type DefaultProps = {
    iconLeft: string | AppName;
    iconRight: string | AppName;
};
declare type RequiredProps = {
    title: string;
};
export declare const SectionHeader: FCwDP<RequiredProps, DefaultProps>;
export {};
