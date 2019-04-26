import React, { Component, ReactNode } from 'react'

type Props = {
  children: (props: {
    value: string
    onChange: (newSearchString: string) => void
    compareSearch: (stringToCompare: string) => boolean
  }) => ReactNode
}

type State = {
  searchString: string
}

export class SearchController extends Component<Props, State> {
  state: State = {
    searchString: '',
  }

  onChange = (newSearchString: string) => {
    this.setState(() => ({
      searchString: newSearchString,
    }))
  }

  render() {
    const { children } = this.props
    const { searchString } = this.state

    return children({
      value: searchString,
      onChange: this.onChange,
      compareSearch: stringToCompare => {
        if (searchString === '') {
          return true
        }

        return stringToCompare
          .toLocaleLowerCase()
          .includes(searchString.toLocaleLowerCase())
      },
    })
  }
}
