import React from 'react'
import type { StoryObj } from '@storybook/react'

import { EnumFilter } from '@monorail/components/EnumFilter'

export default {
  title: 'Filters/EnumFilter',
  component: EnumFilter,
}

export const Default: StoryObj<typeof EnumFilter> = {
  render: () => (
    <EnumFilter
      values={['One', 'Two', 'Three']}
      localeText={{
        clearSelectionButton: count => `Clear ${count} Items`,
      }}
    />
  ),
}
