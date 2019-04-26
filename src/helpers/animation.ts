import { PopOverPosition } from '@monorail/popOver/PopOver'
import {
  css,
  keyframes,
  Keyframes,
  SimpleInterpolation,
} from 'styled-components'

export const visible = (isVisible = false) =>
  isVisible
    ? css`
        visibility: visible;
        opacity: 0.9999; /* Doing .9999 keeps the GPU activated on this element so that it can quickly change back to 0. */
      `
    : css`
        visibility: hidden;
        opacity: 0;
      `

export const ease = (isActive: boolean) => (isActive ? 'ease-in' : 'ease-out')

// https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse

const easeCurve: (v: number, pow?: number) => number = (v, pow = 4) => {
  return 1 - Math.pow(1 - Math.max(v, Math.min(0, 1)), pow)
}

const frameTime = 1000 / 60

const nFrames: (duration: number) => number = duration =>
  Math.round(duration / frameTime)

const append: (params: {
  endOpacity: number
  endX: number
  endY: number
  innerAnimation: Array<string>
  outerAnimation: Array<string>
  percentage: string
  startOpacity: number
  startX: number
  startY: number
  step: number
}) => void = ({
  endOpacity,
  endX,
  endY,
  innerAnimation,
  outerAnimation,
  percentage,
  startOpacity,
  startX,
  startY,
  step,
}) => {
  const xScale = startX + (endX - startX) * step
  const yScale = startY + (endY - startY) * step
  const opacity = startOpacity + (endOpacity - startOpacity) * step

  const invScaleX = (1 / xScale).toFixed(5)
  const invScaleY = (1 / yScale).toFixed(5)

  outerAnimation.push(`
      ${percentage}% {
        transform: scale(${xScale}, ${yScale});
        opacity: ${opacity};
      }`)

  innerAnimation.push(`
      ${percentage}% {
        transform: scale(${invScaleX}, ${invScaleY});
      }`)
}

const createEaseAnimations: (props: {
  animationDuration: number
  isOpen: boolean
  position: PopOverPosition
  x: number
  y: number
}) => {
  menuAnimation: Keyframes
  menuContentsAnimation: Keyframes
} = ({ isOpen, x, y, animationDuration }) => {
  const menuExpandAnimation: Array<string> = []
  const menuExpandContentsAnimation: Array<string> = []
  const menuCollapseAnimation: Array<string> = []
  const menuCollapseContentsAnimation: Array<string> = []

  const nFramesDuration = nFrames(animationDuration)
  const percentIncrement = 100 / nFramesDuration
  const closedOpacity = 0
  const openOpacity = 0.9999

  for (let i = 0; i <= nFramesDuration; i++) {
    const step = easeCurve(i / nFramesDuration)
    const percentage = (i * percentIncrement).toFixed(5)
    const endX = 1
    const endY = 1

    // Expand animation.
    append({
      endX,
      endY,
      innerAnimation: menuExpandContentsAnimation,
      outerAnimation: menuExpandAnimation,
      percentage,
      startX: x,
      startY: y,
      startOpacity: closedOpacity,
      endOpacity: openOpacity,
      step,
    })

    // Collapse animation.
    append({
      endX: x,
      endY: y,
      innerAnimation: menuCollapseContentsAnimation,
      outerAnimation: menuCollapseAnimation,
      percentage,
      startX: 1,
      startY: 1,
      startOpacity: openOpacity,
      endOpacity: closedOpacity,
      step,
    })
  }

  return {
    menuAnimation: isOpen
      ? keyframes`${menuExpandAnimation.join('')}`
      : keyframes`${menuCollapseAnimation.join('')}`,
    menuContentsAnimation: isOpen
      ? keyframes`${menuExpandContentsAnimation.join('')}`
      : keyframes`${menuCollapseContentsAnimation.join('')}`,
  }
}
export const generateScaleAnimation: (params: {
  position: PopOverPosition
  isOpen: boolean
  elementHeight: number
  elementWidth: number
}) => {
  outSideContentStyles: SimpleInterpolation
  inSideContentStyles: SimpleInterpolation
} = ({ position, isOpen, elementHeight, elementWidth }) => {
  const animationDuration = 150

  const keyFrame = createEaseAnimations({
    animationDuration,
    isOpen,
    position,
    x: position.originWidth / Math.min(position.maxWidth, elementWidth),
    y: position.originHeight / Math.min(position.maxHeight, elementHeight),
  })

  return {
    outSideContentStyles: css`
      ${position.dropXDirection}: ${position.dropXAmount}px;
      ${position.dropYDirection}: ${position.dropYAmount}px;

      max-height: ${position.maxHeightCalc};
      max-width: ${position.maxWidthCalc};
      position: fixed;
      transform-origin: ${position.dropYDirection} ${position.dropXDirection};
      will-change: transform, opacity;

      animation: ${keyFrame.menuAnimation} linear ${animationDuration}ms
        forwards;
    `,
    inSideContentStyles: css`
      transform-origin: ${position.dropYDirection} ${position.dropXDirection};

      animation: ${keyFrame.menuContentsAnimation} linear ${animationDuration}ms
        forwards;

      will-change: transform;
    `,
  }
}

export const buttonTransition = css`
  transition: all ease 75ms;
`

export const transition: (props: {
  properties?: Array<string>
  easing: string
  duration: number
}) => SimpleInterpolation = ({ properties = ['all'], easing, duration }) => {
  return css`
    transition: ${properties
      .map(property => `${property} ${easing} ${duration}ms`)
      .join()};
  `
}
