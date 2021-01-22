export enum ItemsPerPageOption {
  Twenty = '20',
  Fifty = '50',
  OneHundred = '100',
  All = 'All',
}

export const ITEMS_PER_PAGE_OPTIONS = [
  ItemsPerPageOption.Twenty,
  ItemsPerPageOption.Fifty,
  ItemsPerPageOption.OneHundred,
  ItemsPerPageOption.All,
] as const

export const DEFAULT_ITEMS_PER_PAGE_OPTION = ITEMS_PER_PAGE_OPTIONS[0]

// Typeguard
export function isItemsPerPageOption(
  value: string,
): value is ItemsPerPageOption {
  return Object.values(ItemsPerPageOption).includes(value as ItemsPerPageOption)
}

export function itemsPerPageOptionToValue(
  option: ItemsPerPageOption,
  allValue: number,
): number {
  switch (option) {
    case ItemsPerPageOption.Twenty:
      return 20
    case ItemsPerPageOption.Fifty:
      return 50
    case ItemsPerPageOption.OneHundred:
      return 100
    case ItemsPerPageOption.All:
      return allValue
  }
}
