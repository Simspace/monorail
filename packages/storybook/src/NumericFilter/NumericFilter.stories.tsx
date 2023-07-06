import React from 'react'
import type { StoryObj } from '@storybook/react'

import {
  NUMERIC_FILTER_DEFAULT_LOCALE_TEXT,
  NumericFilter,
} from '@monorail/components/NumericFilter'

export default {
  title: 'Filters/NumericFilter',
  component: NumericFilter,
}

export const Default: StoryObj<typeof NumericFilter> = {
  render: () => (
    <NumericFilter localeText={NUMERIC_FILTER_DEFAULT_LOCALE_TEXT} />
  ),
}
