export declare enum ItemsPerPageOption {
    Twenty = "20",
    Fifty = "50",
    OneHundred = "100",
    All = "All"
}
export declare const ITEMS_PER_PAGE_OPTIONS: readonly [ItemsPerPageOption.Twenty, ItemsPerPageOption.Fifty, ItemsPerPageOption.OneHundred, ItemsPerPageOption.All];
export declare const DEFAULT_ITEMS_PER_PAGE_OPTION: ItemsPerPageOption.Twenty;
export declare function isItemsPerPageOption(value: string): value is ItemsPerPageOption;
export declare function itemsPerPageOptionToValue(option: ItemsPerPageOption, allValue: number): number;
