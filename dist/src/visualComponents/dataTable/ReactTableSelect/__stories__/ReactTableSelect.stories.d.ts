import { SelectableTableProps } from '@monorail/visualComponents/dataTable/ReactTableSelect/ReactTableSelect';
declare type Item = {
    id: string;
    name: string;
    description: string;
};
declare const _default: import("../../../../helpers/storybook").Meta;
export default _default;
export declare const Checkbox: import("../../../../helpers/storybook").Story<SelectableTableProps<Item>>;
export declare const Radio: import("../../../../helpers/storybook").Story<SelectableTableProps<Item>>;
export declare const WithPagination: import("../../../../helpers/storybook").Story<SelectableTableProps<Item>>;
