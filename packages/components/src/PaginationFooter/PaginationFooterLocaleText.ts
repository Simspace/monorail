export interface PaginationFooterLocaleText {
  selectedLabel: (n: number) => string
  pageSizeSelectLabel: string
  itemsShownLabel: string
}

export const PAGINATION_FOOTER_DEFAULT_LOCALE_TEXT: PaginationFooterLocaleText =
  {
    selectedLabel: n => `${n} selected`,
    pageSizeSelectLabel: 'Showing',
    itemsShownLabel: 'Showing',
  }
