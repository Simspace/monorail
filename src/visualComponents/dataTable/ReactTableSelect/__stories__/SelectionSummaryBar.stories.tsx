import React from 'react'
import { A } from '@monorail/sharedHelpers/fp-ts-imports'

import {
  DISABLED_ACTIONS,
  meta,
  NO_GENERATED_META,
  story,
} from '@monorail/helpers/storybook'
import {
  SelectionSummaryBar,
  SelectionSummaryBarProps,
} from '@monorail/visualComponents/dataTable/ReactTableSelect/SelectionSummaryBar'

//#region Metadata for ALL stories
export default meta(NO_GENERATED_META, {
  title: 'monorail/v1/ReactTableSelect/SelectionSummaryBar',
  parameters: {
    ...DISABLED_ACTIONS,
  },
})
//#endregion

//#region Helpers
const sortedData = A.range(1, 5)

const Template = story<SelectionSummaryBarProps<typeof sortedData[number]>>(
  args => (
    <SelectionSummaryBar
      totalItems={0}
      totalSelectedItems={0}
      sortedData={sortedData}
      {...args}
    />
  ),
  {
    args: {
      totalItems: sortedData.length,
      totalSelectedItems: 0,
    },
  },
)
//#endregion

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion
