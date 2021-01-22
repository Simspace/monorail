import React from 'react'
import { action } from '@storybook/addon-actions'
import { A } from '@monorail/sharedHelpers/fp-ts-imports'

import {
  DISABLED_A11Y,
  meta,
  NO_GENERATED_META,
  story,
} from '@monorail/helpers/storybook'
import { ItemsPerPageOption } from '@monorail/visualComponents/dataTable/ReactTableSelect/helpers'
import {
  SelectionPaginationBar,
  SelectionPaginationBarProps,
} from '@monorail/visualComponents/dataTable/ReactTableSelect/SelectionPaginationBar'

//#region Metadata for ALL stories
export default meta(NO_GENERATED_META, {
  title: 'monorail/v1/ReactTableSelect/SelectionPaginationBar',
})
//#endregion

//#region Helpers
const sortedData = A.range(1, 200)

const Template = story<SelectionPaginationBarProps<typeof sortedData[number]>>(
  args => (
    <SelectionPaginationBar
      totalItems={0}
      totalSelectedItems={0}
      sortedData={sortedData}
      page={0}
      pages={0}
      pageSize={0}
      itemsPerPage={ItemsPerPageOption.Twenty}
      onPageChange={action('onPageChange')}
      onItemsPerPageChange={action('onItemsPerPageChange')}
      {...args}
    />
  ),
  {
    args: {
      totalItems: sortedData.length,
      page: 0,
      pages: 1,
      pageSize: 20,
    },
    parameters: {
      ...DISABLED_A11Y, // v1 components have Color Contrast issues
    },
  },
)
//#endregion

//#region Hero story in Docs
export const Basic = story(Template, {
  args: {
    totalSelectedItems: 1,
  },
})
//#endregion

//#region Distinct Configurations
export const NoneSelected = story(Template, {
  args: {
    totalSelectedItems: 0,
  },
})

export const OnFirstPage = story(Template, {
  args: {
    page: 0,
    pages: 2,
  },
})

export const OnLastPage = story(Template, {
  args: {
    page: 1,
    pages: 2,
  },
})

export const ManyPagesAfter = story(Template, {
  args: {
    page: 0,
    pages: 10,
  },
})

export const ManyPagesBefore = story(Template, {
  args: {
    page: 9,
    pages: 10,
  },
})
//#endregion
