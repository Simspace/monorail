import React, { Component, RefObject } from 'react'
import { isNil } from '@monorail/CoreUtils/primitive-guards'
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level'

type Props = {
  scrollContainer: RefObject<StyledHtmlElement<HTMLDivElement, any>>
  animatingElement: RefObject<StyledHtmlElement<HTMLDivElement, any>>
  animationFunction: (
    props: { scrollAmount: number; animationTermination: number },
  ) => string
  animationTermination: number
}

type State = {
  hasEventHandler: boolean
}

export class ScrollAnimation extends Component<Props, State> {
  state: State = {
    hasEventHandler: false,
  }

  componentDidMount() {
    const { scrollContainer } = this.props
    const { hasEventHandler } = this.state

    if (!hasEventHandler && !isNil(scrollContainer.current)) {
      this.setState(() => ({ hasEventHandler: true }))

      scrollContainer.current.addEventListener('scroll', this.handleScroll)
    }
  }

  componentDidUpdate() {
    const {
      scrollContainer: { current: scrollContainer },
    } = this.props
    const { hasEventHandler } = this.state

    if (!hasEventHandler && !isNil(scrollContainer)) {
      this.setState(() => ({ hasEventHandler: true }))

      scrollContainer.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    const {
      scrollContainer: { current: scrollContainer },
    } = this.props

    if (!isNil(scrollContainer)) {
      scrollContainer.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = (event: UIEvent) => {
    const {
      animationTermination,
      animatingElement: { current: animatingElement },
      animationFunction,
    } = this.props

    if (!isNil(event.currentTarget) && !isNil(animatingElement)) {
      const scrollElement = event.currentTarget as HTMLDivElement /* Josh don't hate me! */

      const scrollAmount = scrollElement.scrollTop

      requestAnimationFrame(() => {
        if (scrollAmount <= animationTermination) {
          animatingElement.style.cssText = animationFunction({
            scrollAmount,
            animationTermination,
          })
        }
      })
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}
