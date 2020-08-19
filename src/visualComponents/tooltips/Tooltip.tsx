import React, {
  FC,
  cloneElement,
  ReactNode,
  useRef,
  useState,
  RefObject,
  ReactElement,
} from 'react'
import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import { useTooltip, TooltipPopup, TriggerParams } from '@reach/tooltip'
import '@reach/tooltip/styles.css'

import {
  Colors,
  BorderRadius,
  ElevationRange,
  FontSizes,
  ZIndexNodeName,
  borderRadius,
  getColor,
  getElevationShadow,
  zIndexValue,
  gothamFontFamily,
} from '@monorail/helpers/exports'
import { Text } from '@monorail/visualComponents/typography/Text'
import { flexFlow } from '@monorail/helpers/flex'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

const StyledTooltip = styled(TooltipPopup)<StyledTooltipProps>(
  ({ tooltipstyles, pointerstyles }) => css`
    && {
    ${borderRadius(BorderRadius.Medium)}
    ${flexFlow()}
    ${getElevationShadow(ElevationRange.Elevation5)}
    ${gothamFontFamily} /* Defaults to Avenir without this  */
    ${tooltipstyles}

    background: ${getColor(Colors.White)};
    border: none;
    white-space: normal;
    color: ${getColor(Colors.Black89a)};
    max-width: 256px;
    padding: 16px;
    pointer-events: none;
    position: absolute;
    z-index: ${zIndexValue(ZIndexNodeName.Tooltip)};

    &::after {
      ${pointerstyles}

      background: ${getColor(Colors.White)};
      border-radius: 2px 0 2px 0;
      content: '';
      display: block;
      height: 12px;
      position: absolute;
      transform: rotate(45deg);
      width: 12px;
    }
  }
`,
)

const StyledSpan = styled.span`
  cursor: pointer;
  ${flexFlow()};
`

type StyledTooltipProps = {
  tooltipstyles: CSSProp
  pointerstyles: CSSProp
}

type TooltipMonorailProps = {
  label: string | React.ReactElement
  children: ((props: TriggerParams) => React.ReactElement) | React.ReactElement
  ariaLabel?: string
  ref?: RefObject<HTMLDivElement>
}

type Position = (
  targetRect?: PRect | null,
  tooltipRect?: PRect | null,
) => React.CSSProperties

type PRect = Partial<DOMRect> & {
  readonly bottom: number
  readonly height: number
  readonly left: number
  readonly right: number
  readonly top: number
  readonly width: number
}

type PointerLocation =
  | 'center'
  | 'right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right'

const pointerSize = 12
const viewportBoundary = 8

const getDirection = (
  location: PointerLocation = 'center',
  position: number,
): { pointerStyles: CSSProp | string; tooltipStyles: CSSProp | string } => {
  switch (location) {
    case 'top-left':
      return {
        pointerStyles: css`
          top: -${pointerSize / 2}px;
          left: ${position - 8}px;
        `,
        tooltipStyles: css`
          margin-left: ${viewportBoundary}px;
        `,
      }
    case 'top-center':
      return {
        pointerStyles: css`
          left: 50%;
          top: -${pointerSize / 2}px;
          margin-left: -${pointerSize / 2}px;
        `,
        tooltipStyles: css`
          margin: 0;
        `,
      }
    case 'top-right':
      return {
        pointerStyles: css`
          top: -${pointerSize / 2}px;
          right: ${position + viewportBoundary}px;
        `,
        tooltipStyles: css`
          margin-right: ${viewportBoundary}px;
        `,
      }
    case 'bottom-right':
      return {
        pointerStyles: css`
          bottom: -${pointerSize / 2}px;
          right: ${position + viewportBoundary}px;
        `,
        tooltipStyles: css`
          margin-right: ${viewportBoundary}px;
        `,
      }
    case 'bottom-center':
      return {
        pointerStyles: css`
          left: 50%;
          bottom: -${pointerSize / 2}px;
          margin-left: -${pointerSize / 2}px;
        `,
        tooltipStyles: css`
          margin: 0;
        `,
      }
    case 'bottom-left':
      return {
        pointerStyles: css`
          left: ${position - viewportBoundary}px;
          bottom: -${pointerSize / 2}px;
        `,
        tooltipStyles: css`
          margin-left: ${viewportBoundary}px;
        `,
      }
    default:
      return {
        pointerStyles: '',
        tooltipStyles: '',
      }
  }
}

export const TooltipMonorail = (props: TooltipMonorailProps) => {
  const { label, children, ariaLabel } = props
  const [trigger, tooltip] = useTooltip()
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [pointerLocation, setPointerLocation] = useState<PointerLocation>(
    'center',
  )
  const [pointerPosition, setPointerPosition] = useState(0)

  const OFFSET = 12

  const centered: Position = (triggerRect, tooltipRect) => {
    if (isNil(triggerRect) || isNil(tooltipRect)) {
      return {}
    }

    const collisions = {
      top: triggerRect.top - tooltipRect.height < 0,
      right: window.innerWidth < triggerRect.left + tooltipRect.width,
      bottom:
        window.innerHeight < triggerRect.bottom + tooltipRect.height + OFFSET,
      left: triggerRect.left - tooltipRect.width < 0,
    }

    const directionRight = collisions.right && !collisions.left
    const directionUp = collisions.bottom && !collisions.top
    const directionLeft = collisions.left && !collisions.right

    const getTriggerCenter: (
      pointerLocationHook: string,
    ) => number = pointerLocationHook => {
      return pointerLocationHook.includes('right')
        ? triggerRect.width / 2 - pointerSize / 2
        : triggerRect.right - triggerRect.width / 2 - pointerSize / 2
    }

    const triggerDefaultPosition =
      triggerRect.left -
      tooltipRef.current!.clientWidth / 2 +
      triggerRect.width / 2

    setPointerPosition(getTriggerCenter(pointerLocation))

    if (directionRight && directionUp) {
      setPointerLocation('bottom-right')
      return {
        left: `${triggerRect.right -
          tooltipRect.width +
          viewportBoundary +
          window.pageXOffset}px`,
        top: `${triggerRect.top -
          OFFSET -
          tooltipRect.height +
          window.pageYOffset}px`,
      }
    } else if (directionRight) {
      setPointerLocation('top-right')
      return {
        left: `${triggerRect.right -
          tooltipRect.width +
          viewportBoundary +
          window.pageXOffset}px`,
        top: triggerRect.bottom + OFFSET + window.scrollY,
      }
    } else if (directionLeft && directionUp) {
      setPointerLocation('bottom-left')
      return {
        left: `${window.pageXOffset}px`,
        top: `${triggerRect.top -
          OFFSET -
          tooltipRect.height +
          window.pageYOffset}px`,
      }
    } else if (directionUp) {
      setPointerLocation('bottom-center')
      return {
        left: triggerDefaultPosition + window.scrollX,
        top: `${triggerRect.top -
          OFFSET -
          tooltipRect.height +
          window.pageYOffset}px`,
      }
    } else if (directionLeft) {
      setPointerLocation('top-left')
      return {
        left: `${window.pageXOffset}px`,
        top: triggerRect.bottom + OFFSET + window.scrollY,
      }
    } else {
      setPointerLocation('top-center')
      return {
        left: triggerDefaultPosition + window.scrollX,
        top: triggerRect.bottom + OFFSET + window.scrollY,
      }
    }
  }

  return (
    <>
      {typeof children === 'function' ? (
        children(trigger)
      ) : (
        <StyledSpan {...trigger}>{children}</StyledSpan>
      )}
      <StyledTooltip
        {...tooltip}
        label={
          <Text fontSize={FontSizes.Title5} fontWeight={400}>
            {label}
          </Text>
        }
        ref={tooltipRef}
        position={centered}
        aria-label={ariaLabel}
        // pointerstyles and tooltipstyles need to be lowercase to prevent unknown prop warning
        pointerstyles={
          getDirection(pointerLocation, pointerPosition).pointerStyles
        }
        tooltipstyles={
          getDirection(pointerLocation, pointerPosition).tooltipStyles
        }
      />
    </>
  )
}
