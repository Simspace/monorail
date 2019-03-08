import { array } from 'fp-ts/lib/Array'
import React, { Component, ReactNode } from 'react'
import { Status } from '@monorail/status/Status'
import { css } from 'styled-components'
import { FontSizes, typography } from '@monorail/CommonStyles'

const FilterStatusCSS = css`
  margin-left: 4px;
`

export const ChoiceSorterCss = css`
  ${typography(500, FontSizes.Content)};

  cursor: pointer;
  padding: 8px;

  :hover {
    background: hsla(219, 100%, 54%, 0.1);
  }

  i {
    display: none;
  }
`

const ChoiceSorterSelectedCss = css`
  background: hsla(219, 100%, 54%, 0.1);
`
export type BasicOption = {
  label: string
  value: string
  selected: boolean
}

export type BasicOptionGroup = {
  label: string
  key: string
  items: BasicOption[]
}

type BasicFilterControllerProps = {
  document?: Document
  group: BasicOptionGroup
  children: (
    params: {
      collection: BasicOption[]
      document?: Document
      isActive: boolean
      title: ReactNode
      key: string
      onChange: (filter: BasicOption) => void
    },
  ) => ReactNode
}

type TitleState = {
  title: ReactNode
}

export class BasicFilterController extends Component<
  BasicFilterControllerProps,
  TitleState
> {
  state: TitleState = {
    title: '',
  }

  getTitle = (): ReactNode => {
    const { group } = this.props

    const selectedFilters = array.filter(group.items, item => item.selected)
    const activeFilterCount = selectedFilters.length

    if (activeFilterCount === group.items.length) {
      // If unchanged, just show label
      return group.label
    } else if (activeFilterCount > 1) {
      // If changed and label is greater than 1, show the count
      return (
        <>
          {group.label}
          <Status cssOverrides={FilterStatusCSS}>{activeFilterCount}</Status>
        </>
      )
    } else {
      // If equal to 1, show the label and the single active filter
      return `${group.label} - ${
        activeFilterCount ? selectedFilters[0].label : 'None'
      }`
    }
  }

  updateTitle = () => this.setState({ title: this.getTitle() })

  onFilterChange = (filter: BasicOption) => {
    filter.selected = !filter.selected
    this.updateTitle()
  }

  componentDidMount = this.updateTitle

  render() {
    const { children, document, group } = this.props
    const { title } = this.state

    return children({
      collection: group.items,
      document,
      title,
      isActive: !group.items.every(item => item.selected),
      onChange: this.onFilterChange,
      key: group.key,
    })
  }
}

type BasicSorterControllerProps = {
  document?: Document
  group: BasicOptionGroup
  children: (
    params: {
      collection: BasicOption[]
      document?: Document
      isActive: boolean
      title: ReactNode
      key: string
      style: (selected: boolean) => any // tslint:disable-line:no-any
      onChange: (key: string) => void
    },
  ) => ReactNode
}

export class BasicSorterController extends Component<
  BasicSorterControllerProps,
  TitleState
> {
  state: TitleState = {
    title: '',
  }

  getTitle = (): ReactNode => {
    const { group } = this.props
    const selectedSorter = group.items.find(item => item.selected)
    if (selectedSorter) {
      return group.label + ' ' + selectedSorter.label
    } else {
      return group.label
    }
  }

  updateTitle = () => this.setState({ title: this.getTitle() })

  sorterItemStyle = (selected: boolean) => selected && ChoiceSorterSelectedCss

  onSorterChange = (key: string) => {
    const { group } = this.props
    group.items.map(item => {
      item.selected = item.value === key && !item.selected
    })
    this.updateTitle()
  }

  componentDidMount = this.updateTitle

  render() {
    const { children, document, group } = this.props
    const { title } = this.state

    return children({
      key: group.key,
      collection: group.items,
      document,
      title,
      isActive: group.items.some(item => item.selected),
      onChange: this.onSorterChange,
      style: this.sorterItemStyle,
    })
  }
}
