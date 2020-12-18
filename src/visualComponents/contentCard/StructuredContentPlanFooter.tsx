import React from 'react'

import { isNotNil } from '@monorail/sharedHelpers/typeGuards'

import { Duration } from './Duration'
import { Enrollment } from './Enrollment'
import { StarRating } from './StarRating'
import {
  FooterList,
  FooterListItem,
} from '@monorail/visualComponents/contentCard/Footer'

export const StructuredContentPlanFooter = (
  props: StructuredContentPlanFooterProps,
) => {
  const { rating, durationMin, isSelfEnroll } = props

  const shouldShowFooter =
    isNotNil(rating) ||
    isNotNil(isSelfEnroll) ||
    (isNotNil(durationMin) && durationMin > 0)

  return shouldShowFooter ? (
    <FooterList>
      {isNotNil(rating) && (
        <FooterListItem>
          <StarRating rating={rating} />
        </FooterListItem>
      )}
      {isNotNil(isSelfEnroll) && (
        <FooterListItem>
          <Enrollment selfEnroll={isSelfEnroll} />
        </FooterListItem>
      )}
      {isNotNil(durationMin) && durationMin > 0 && (
        <FooterListItem>
          <Duration durationMin={durationMin} />
        </FooterListItem>
      )}
    </FooterList>
  ) : null
}

export type StructuredContentPlanFooterProps = {
  readonly rating?: number
  readonly durationMin?: number
  readonly isSelfEnroll?: boolean
}
