import * as A from 'fp-ts/lib/Array'
import { eqString } from 'fp-ts/lib/Eq'
import * as M from 'fp-ts/lib/Map'
import * as O from 'fp-ts/lib/Option'
import { ordString } from 'fp-ts/lib/Ord'
import { pipe } from 'fp-ts/lib/pipeable'
import React, { FC, useState } from 'react'
import { css } from 'styled-components'

import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import {
  Collapsible,
  CollapsibleProps,
} from '@monorail/visualComponents/collapsible/Collapsible'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'
import { getFirstSemigroup } from 'fp-ts/lib/Semigroup'

type AccordionContent = Array<CollapsibleProps & { key: string }>

type Props = {
  content: AccordionContent
  multiExpand?: boolean
  isContentScrollable?: boolean
}

/**
 * Accordion
 *
 * @param content       - an array of collapsible props with keys to use for the internal state
 * @param multiExpand?  - whether or not multiple collapsible sections can be expanded at the same time or not
 * @param cssOverrides? - any css overrides
 */
export const Accordion: FC<Props> = (props: Props) => {
  const {
    content,
    multiExpand = false,
    isContentScrollable = false,
    ...domProps
  } = props

  /**
   * Keep a local map of expanded states. These will track changes to expanded so the caller
   * doesn't have to manage that state, unless they want to.
   */
  const [localExpandedStates, setLocalExpandedStates] = useState<
    Map<string, boolean>
  >(() =>
    pipe(
      content,
      A.reduce(new Map<string, boolean>(), (localExpandedMap, collapsible) => {
        const expanded = isNotNil(collapsible.expanded)
          ? collapsible.expanded
          : false
        return M.insertAt(eqString)(collapsible.key, expanded)(localExpandedMap)
      }),
    ),
  )

  /**
   * Sets a local expanded state. This varies by whether multi-expand behavior is enabled.
   */
  const setLocalExpandedState = (key: string, expanded: boolean) => {
    const newLocalExpandedStates = multiExpand
      ? // If it's multi-expand, just set the selected one and leave everything else alone
        M.insertAt(eqString)(key, expanded)(localExpandedStates)
      : // If it's single-expand, set the selected one and make sure everything else is collapsed
        pipe(
          localExpandedStates,
          M.toArray(ordString),
          A.map(([localKey, _]): [string, boolean] => {
            const newExpanded = localKey === key ? expanded : false
            return [localKey, newExpanded]
          }),
          M.fromFoldable(eqString, getFirstSemigroup<boolean>(), A.array),
        )

    setLocalExpandedStates(newLocalExpandedStates)
  }

  /**
   * Checks if an item is expanded by first checking if the caller specified via props, then falling back to the local state
   */
  const getExpanded = (
    collapsible: CollapsibleProps & { key: string },
  ): boolean =>
    pipe(
      // If the caller specified expanded, use that
      O.fromNullable(collapsible.expanded),
      // If caller didn't specify, check the local state
      O.alt(() => M.lookup(eqString)(collapsible.key, localExpandedStates)),
      // Default to false
      O.getOrElse<boolean>(() => false),
    )

  return (
    <div
      css={css`
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        ${isContentScrollable
          ? `max-height: ${312 + 40 * content.length}px`
          : ``};
      `}
      {...domProps}
    >
      <ScrollAnimation
        css={css`
          display: flex;
          flex-direction: column;
          overflow-y: ${isContentScrollable ? 'hidden' : 'auto'};
        `}
      >
        {content.map(collapsible => {
          const { key, onClick: onClickOpt, ...rest } = collapsible
          return (
            <Collapsible
              key={key}
              sectionId={`section-${collapsible.key}`}
              labelId={`accordion-id-${collapsible.key}`}
              expanded={getExpanded(collapsible)}
              isContentScrollable={isContentScrollable}
              onClick={(event, isExpanded) =>
                pipe(
                  O.fromNullable(onClickOpt),
                  O.fold(
                    () => setLocalExpandedState(key, isExpanded),
                    onClick => {
                      onClick(event, isExpanded)
                      setLocalExpandedState(collapsible.key, isExpanded)
                    },
                  ),
                )
              }
              {...rest}
            />
          )
        })}
      </ScrollAnimation>
    </div>
  )
}
