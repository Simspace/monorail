import React, { Component, createRef, ReactNode, RefObject } from 'react'
import styled from 'styled-components'
import { flexFlow } from '@monorail/helpers/exports'
import { ScrollAnimation } from '@monorail/layout/ScrollAnimation'

const SingleCollectionContainer = styled.div`
  ${flexFlow()};

  overflow-x: auto;
  height: 100%;
`

export type SingleCollectionHeaderProps = {
  shadowRef: RefObject<HTMLDivElement>
  willAnimateShadow: boolean
}

type Props = {
  header: (props: SingleCollectionHeaderProps) => ReactNode
  content: ReactNode
}

export class SingleCollection extends Component<Props> {
  singleCollectionContainer = createRef<HTMLDivElement>()
  pageHeaderShadow = createRef<HTMLDivElement>()

  render() {
    const { header, content } = this.props

    return (
      <ScrollAnimation
        animationFunction={calculateOpacity}
        animatingElement={this.pageHeaderShadow}
        scrollContainer={this.singleCollectionContainer}
        animationTermination={64}
      >
        {header({
          shadowRef: this.pageHeaderShadow,
          willAnimateShadow: true,
        })}

        <SingleCollectionContainer ref={this.singleCollectionContainer}>
          {content}
        </SingleCollectionContainer>
      </ScrollAnimation>
    )
  }
}

const calculateOpacity: (
  props: { scrollAmount: number; animationTermination: number },
) => string = ({ scrollAmount, animationTermination }) => {
  if (scrollAmount === 0) {
    return 'opacity: 0;'
  }

  if (scrollAmount > animationTermination) {
    return 'opacity: 0.9999;'
  }

  return `opacity: ${Math.min(
    (0.9999 / animationTermination) * scrollAmount,
    0.9999,
  )};`
}
