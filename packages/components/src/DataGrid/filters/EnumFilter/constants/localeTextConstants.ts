import { EnumFilterLocaleText } from '../models/EnumFilterLocaleText'

export const ENUM_FILTER_DEFAULT_LOCALE_TEXT: EnumFilterLocaleText = {
  clearSelectionButton: count =>
    count > 1 ? `Clear ${count} Selections` : 'Clear Selection',
}
