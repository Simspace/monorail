export interface SelectionFooterLocaleText {
  selected: (selectedCount: number) => string
  showing: string
  shownOfTotal: (shownCount: number, totalCount: number) => string
}

export const DEFAULT_SELECTION_FOOTER_LOCALE_TEXT: SelectionFooterLocaleText = {
  selected: selectedCount => `${selectedCount} Selected`,
  showing: 'Showing',
  shownOfTotal: (shownCount, totalCount) => `${shownCount} of ${totalCount}`,
}
