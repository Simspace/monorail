import React from 'react'
import { Column } from 'react-table'
import { A, R } from '@monorail/sharedHelpers/fp-ts-imports'

import {
  DISABLED_A11Y,
  meta,
  PADDING_REMOVED,
  story,
} from '@monorail/helpers/storybook'
import { css } from '@monorail/helpers/styled-components'
import META from '@monorail/visualComponents/dataTable/ReactTableSelect/__stories__/ReactTableSelect.meta.json'
import {
  CheckboxType,
  ReactTableSelect,
  SelectableTableProps,
} from '@monorail/visualComponents/dataTable/ReactTableSelect/ReactTableSelect'
import { SelectionPaginationBar } from '@monorail/visualComponents/dataTable/ReactTableSelect/SelectionPaginationBar'

type Item = {
  id: string
  name: string
  description: string
}

//#region Metadata for ALL stories
export default meta(META, {
  title: 'monorail/v1/ReactTableSelect',
  parameters: {
    ...PADDING_REMOVED,
  },
})
//#endregion

const data: Array<Item> = A.range(1, 200).map(val => ({
  id: `${val}`,
  name: `Thing ${val}`,
  description: 'Info about the thing',
}))

const columns: Array<Column> = [
  {
    accessor: 'name',
    Header: 'Name',
    width: 240,
  },
  {
    accessor: 'description',
    Header: 'Description',
    width: 240,
  },
]

const reactTableProps = {
  data,
  columns,
  showPagination: true,
}

// neither flex: 1 nor height: 100% work in storybook for some reason
const styleOverrides = css`
  height: 400px;
`

//#region Helpers
const Template = story<SelectableTableProps<Item>>(
  args => {
    const [items, setItems] = React.useState<Record<string, Item>>(R.empty)
    return (
      <div css={styleOverrides}>
        <ReactTableSelect
          reactTableProps={reactTableProps}
          selectProps={{
            getId: item => item.id,
            isDisabled: () => false,
            totalItems: data.length,
            rowHeight: 40,
            selected: items,
            onSelectionChange: setItems,
          }}
          {...args}
        />
      </div>
    )
  },
  {
    parameters: {
      ...DISABLED_A11Y,
    },
  },
)

const RadioTemplate = story<SelectableTableProps<Item>>(
  args => {
    const [items, setItems] = React.useState<Record<string, Item>>(R.empty)
    return (
      <div css={styleOverrides}>
        <ReactTableSelect<Item>
          reactTableProps={reactTableProps}
          selectProps={{
            type: CheckboxType.Radio,
            getId: item => item.id,
            isDisabled: () => false,
            totalItems: data.length,
            rowHeight: 40,
            selected: items,
            onSelectionChange: setItems,
          }}
          {...args}
        />
      </div>
    )
  },
  {
    parameters: {
      ...DISABLED_A11Y,
    },
  },
)

//#endregion

//#region Stories
// Hero Story in Docs
export const Checkbox = story(Template)
//#endregion

//#region Distinct Configurations
export const Radio = story(RadioTemplate)

export const WithPagination = story(Template, {
  args: {
    reactTableProps: {
      ...reactTableProps,
      PaginationComponent: SelectionPaginationBar,
    },
  },
})
//#endregion
