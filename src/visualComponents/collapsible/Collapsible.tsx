import { fold, fromNullable, getOrElse, map } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseFocusStyles,
  Colors,
  flexFlow,
  getColor,
} from '@monorail/helpers/exports'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'

/*
 * Styled Components
 */
const CollapsibleWrapper = styled.div<{ isContentScrollable: boolean }>(
  ({ isContentScrollable }) => css`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 0;
    flex-shrink: ${isContentScrollable ? 1 : 0};
    flex-basis: auto;
    min-height: 40px;
  `,
)

const CollapsibleHeader = styled.div<{
  iconPosition: IconPosition
  expanded: boolean
  clickTarget: ClickTarget
}>(
  ({ iconPosition, clickTarget, expanded }) => css`
    ${flexFlow('row')}
    width: 100%;

    box-sizing: border-box;
    height: 40px;
    ${iconPosition === 'right' && `justify-content: space-between;`}
    align-items: center;
    margin: 0;
    padding: 0;
    position: relative;
    ${clickTarget === 'icon' &&
      `padding: 16px;
      background: ${
        expanded ? getColor(Colors.SidebarActive) : getColor(Colors.White)
      };`}
  `,
)

const CollapsibleHeaderButton = styled.button<{
  expanded: boolean
  iconPosition: IconPosition
}>(
  ({ expanded, iconPosition }) => css`
    ${flexFlow('row')}

    align-items: center;
    background: ${expanded
      ? getColor(Colors.SidebarActive)
      : getColor(Colors.White)};
    border: none;
    cursor: pointer;
    justify-content: ${iconPosition === 'left'
      ? `flex-start`
      : `space-between`};
    padding: 12px 16px;
    user-select: auto;
    width: 100%;

    &:hover {
      background: ${expanded
        ? getColor(Colors.SidebarActive)
        : getColor(Colors.SidebarBg)};
    }

    ${baseFocusStyles()}
  `,
)

const CollapsibleContent = styled.div<CollapsibleContentProps>(
  ({ cssOverrides, iconPosition }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-basis: auto;
    overflow: hidden;
    background: ${getColor(Colors.White)};
    padding-left: ${iconPosition === 'left' ? 28 : 0}px;
    ${cssOverrides}
  `,
)

const getChildrenHeights = (node: HTMLDivElement) => {
  let h = 0
  if (node.hasChildNodes()) {
    /* tslint:disable-next-line:prefer-for-of */
    for (let i = 0; i < node.children.length; i++) {
      h = h + node.children[i].scrollHeight
    }
  }
  return h
}

/*
 * Types
 */

/**
 * Create a Collapsible
 *
 * @param header        - header content
 * @param content       - collapsible content
 * @param expanded?     - collapsible content is expanded/visible, default is false
 * @param onClick?      - any extra functionality that should happen on header click
 *                        (`isExpanded` is passed to the function passed in for outside
 *                          control of expanded state)
 * @param iconPosition? - header icon position (left or right)
 * @param iconCss?      - any css overrides for the icon
 * @param maxDuration?  - max duration for transition in ms
 * @param msPerPx?      - ms / px for transition
 * @param contentCss?   - any css overrides for the content container
 * @param clickTarget?  - hit target for expand/collapse action (header or icon)
 */

export type IconPosition = 'left' | 'right'

export type ClickTarget = 'header' | 'icon'

export type CollapsibleProps = {
  header: ReactNode
  content: ReactNode
  expanded?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isExpanded: boolean,
  ) => void
  iconPosition?: IconPosition
  iconCss?: SimpleInterpolation
  contentCss?: SimpleInterpolation
  labelId?: string
  sectionId?: string
  maxDuration?: number
  msPerPx?: number
  clickTarget?: ClickTarget
  isContentScrollable?: boolean
}

type CollapsibleContentProps = {
  iconPosition: IconPosition
  cssOverrides?: SimpleInterpolation
}

/*
 * Components
 */
export const Collapsible: FC<CollapsibleProps> = (props: CollapsibleProps) => {
  const {
    header,
    content,
    expanded,
    onClick,
    iconPosition = 'left',
    iconCss,
    labelId,
    sectionId,
    maxDuration = 300,
    contentCss,
    msPerPx = 4,
    clickTarget = 'header',
    isContentScrollable = false,
    ...domProps
  } = props

  const [localExpanded, setLocalExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const isExpanded = pipe(
    fromNullable(expanded),
    getOrElse(() => localExpanded),
  )

  useEffect(() => {
    if (isExpanded && contentRef?.current) {
      setContentHeight(getChildrenHeights(contentRef.current))
    }
  }, [isExpanded, content])

  const renderIcon = () => {
    const icon =
      iconPosition === 'left'
        ? isExpanded
          ? 'arrow_drop_down'
          : 'arrow_right'
        : isExpanded
        ? 'expand_less'
        : 'expand_more'

    return clickTarget === 'header' ? (
      <Icon
        icon={icon}
        cssOverrides={`margin-right: ${
          iconPosition === 'left' ? 12 : 0
        }px; ${iconCss}`}
      />
    ) : (
      <IconButton
        id={labelId}
        aria-expanded={isExpanded}
        aria-controls={sectionId}
        icon={icon}
        display={ButtonDisplay.Chromeless}
        cssOverrides={`${iconPosition === 'left' && `margin-right: 12px;`} 
          ${iconCss}`}
        onClick={handleToggleExpand}
      />
    )
  }

  const handleToggleExpand = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) =>
    pipe(
      fromNullable(onClick),
      fold(
        () => setLocalExpanded(!isExpanded),
        parentOnClick =>
          pipe(
            fromNullable(expanded),
            fold(
              () => setLocalExpanded(!isExpanded),
              _ => parentOnClick(event, !isExpanded),
            ),
          ),
      ),
    )

  return (
    <CollapsibleWrapper isContentScrollable={isContentScrollable} {...domProps}>
      <CollapsibleHeader
        iconPosition={iconPosition}
        clickTarget={clickTarget}
        expanded={isExpanded}
        {...domProps}
      >
        {clickTarget === 'header' ? (
          <CollapsibleHeaderButton
            id={labelId}
            aria-expanded={isExpanded}
            aria-controls={sectionId}
            iconPosition={iconPosition}
            expanded={isExpanded}
            // Adding this arbitrary class because we have sass in `Button.scss`
            // that targets `button.not(.new-button)` and adds a whole bunch of
            // unwanted styling - AB 05/14/20
            className={'new-button'}
            onClick={handleToggleExpand}
          >
            {iconPosition === 'left' && renderIcon()}
            {header}
            {iconPosition !== 'left' && renderIcon()}
          </CollapsibleHeaderButton>
        ) : (
          <>
            {iconPosition === 'left' && renderIcon()}
            {header}
            {iconPosition !== 'left' && renderIcon()}
          </>
        )}
      </CollapsibleHeader>
      <CollapsibleContent
        id={sectionId}
        role="region"
        aria-hidden={!isExpanded}
        aria-labelledby={labelId}
        iconPosition={iconPosition}
        cssOverrides={contentCss}
        {...domProps}
      >
        <ScrollAnimation
          css={css`
            overflow-y: ${isContentScrollable ? 'auto' : 'hidden'};
          `}
        >
          <div
            ref={contentRef}
            css={css`
              height: ${isExpanded ? contentHeight + 12 : 0}px;
              transition: height 300ms ease-in-out;
              overflow: ${isExpanded ? 'visible' : 'hidden'};
            `}
          >
            {content}
          </div>
        </ScrollAnimation>
      </CollapsibleContent>
    </CollapsibleWrapper>
  )
}
