import React, {
  Component,
  createRef,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react'
import { findDOMNode } from 'react-dom'

import { isNil } from '@monorail/sharedHelpers/typeGuards'

export type TabProps = {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  isActive: boolean
  index?: number
  setIndicator: (width: number, offsetLeft: number) => void
  updateIsActive?: (i: number) => void
  tab: (props: {
    onClick: (event: MouseEvent<HTMLDivElement>) => void
    ref: RefObject<HTMLDivElement>
  }) => ReactNode
}

export class TabController extends Component<TabProps> {
  static defaultProps = {
    isActive: false,
  }

  tabRef = createRef<HTMLDivElement>()

  componentDidMount() {
    this.callSetIndicator()
  }

  componentDidUpdate(prevProps: TabProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.callSetIndicator()
    }
  }

  callSetIndicator = () => {
    const { isActive, setIndicator } = this.props

    if (isActive && !isNil(this.tabRef.current)) {
      const tabElement = findDOMNode(this.tabRef.current) as Element

      if (!isNil(tabElement)) {
        const tabClientRect = tabElement.getBoundingClientRect()
        const parentClientRect = tabElement.parentElement
          ? tabElement.parentElement.getBoundingClientRect()
          : { left: 0 }

        setIndicator(
          tabClientRect.width,
          tabClientRect.left - parentClientRect.left,
        )
      }
    }
  }

  private onClick = (event: MouseEvent<HTMLDivElement>) => {
    const { updateIsActive, onClick, index } = this.props

    if (!isNil(updateIsActive) && !isNil(index)) {
      updateIsActive(index)
    }

    if (!isNil(onClick)) {
      onClick(event)
    }
  }

  render() {
    const { tab } = this.props

    return tab({ onClick: this.onClick, ref: this.tabRef })
  }
}
