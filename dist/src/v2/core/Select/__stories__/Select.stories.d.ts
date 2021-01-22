import { SelectProps } from '@monorail/v2/core/Select/Select';
declare const _default: import("../../../../helpers/storybook").Meta;
export default _default;
declare type User = {
    name: string;
    id: number;
};
export declare const Open: import("../../../../helpers/storybook").Story<SelectProps<string | number>>;
export declare const Placeholder: import("../../../../helpers/storybook").Story<SelectProps<string | number>>;
export declare const Disabled: import("../../../../helpers/storybook").Story<SelectProps<string | number>>;
export declare const ClickToOpen: import("../../../../helpers/storybook").Story<SelectProps<string | number>>;
export declare const ClickToOpenAbove: import("../../../../helpers/storybook").Story<SelectProps<string | number>>;
export declare const UsingObjectValues: import("../../../../helpers/storybook").Story<SelectProps<User>>;
