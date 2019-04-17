import { css, keyframes, } from 'styled-components';
export const visible = (isVisible = false) => isVisible
    ? css `
        visibility: visible;
        opacity: 0.9999; /* Doing .9999 keeps the GPU activated on this element so that it can quickly change back to 0. */
      `
    : css `
        visibility: hidden;
        opacity: 0;
      `;
export const ease = (isActive) => (isActive ? 'ease-in' : 'ease-out');
// https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse
const easeCurve = (v, pow = 4) => {
    return 1 - Math.pow(1 - Math.max(v, Math.min(0, 1)), pow);
};
const frameTime = 1000 / 60;
const nFrames = duration => Math.round(duration / frameTime);
const append = ({ endX, endY, i, innerAnimation, isOpen, nFramesDuration, outerAnimation, percentage, startX, startY, step, }) => {
    const xScale = startX + (endX - startX) * step;
    const yScale = startY + (endY - startY) * step;
    const invScaleX = (1 / xScale).toFixed(5);
    const invScaleY = (1 / yScale).toFixed(5);
    outerAnimation.push(`
      ${percentage}% {
        transform: scale(${xScale}, ${yScale});
      }`);
    innerAnimation.push(`
      ${percentage}% {
        transform: scale(${invScaleX}, ${invScaleY});
      }`);
};
const createEaseAnimations = ({ isOpen, position, x, y, animationDuration }) => {
    const menuExpandAnimation = [];
    const menuExpandContentsAnimation = [];
    const menuCollapseAnimation = [];
    const menuCollapseContentsAnimation = [];
    const nFramesDuration = nFrames(animationDuration);
    const percentIncrement = 100 / nFramesDuration;
    for (let i = 0; i <= nFramesDuration; i++) {
        const step = easeCurve(i / nFramesDuration);
        const percentage = (i * percentIncrement).toFixed(5);
        const endX = 1;
        const endY = 1;
        // Expand animation.
        append({
            endX,
            endY,
            i,
            innerAnimation: menuExpandContentsAnimation,
            isOpen,
            nFramesDuration,
            outerAnimation: menuExpandAnimation,
            percentage,
            startX: x,
            startY: y,
            step,
        });
        // Collapse animation.
        append({
            endX: x,
            endY: y,
            i,
            innerAnimation: menuCollapseContentsAnimation,
            isOpen,
            nFramesDuration,
            outerAnimation: menuCollapseAnimation,
            percentage,
            startX: 1,
            startY: 1,
            step,
        });
    }
    return {
        menuAnimation: isOpen
            ? keyframes `${menuExpandAnimation.join('')}`
            : keyframes `${menuCollapseAnimation.join('')}`,
        menuContentsAnimation: isOpen
            ? keyframes `${menuExpandContentsAnimation.join('')}`
            : keyframes `${menuCollapseContentsAnimation.join('')}`,
    };
};
export const generateScaleAnimation = ({ position, isOpen, elementHeight, elementWidth }) => {
    const animationDuration = 150;
    const keyFrame = createEaseAnimations({
        animationDuration,
        isOpen,
        position,
        x: position.originWidth / Math.min(position.maxWidth, elementWidth),
        y: position.originHeight / Math.min(position.maxHeight, elementHeight),
    });
    return {
        outSideContentStyles: css `
      ${position.dropXDirection}: ${position.dropXAmount}px;
      ${position.dropYDirection}: ${position.dropYAmount}px;
      ${visible(isOpen)};

      max-height: ${position.maxHeightCalc};
      max-width: ${position.maxWidthCalc};
      position: fixed;
      transform-origin: ${position.dropYDirection} ${position.dropXDirection};
      will-change: transform, opacity, visibility;

      transition: opacity ${animationDuration}ms ease-in,
        visibility ${animationDuration}ms ease-in;

      animation: ${keyFrame.menuAnimation} linear ${animationDuration}ms
        forwards;
    `,
        inSideContentStyles: css `
      transform-origin: ${position.dropYDirection} ${position.dropXDirection};

      animation: ${keyFrame.menuContentsAnimation} linear ${animationDuration}ms
        forwards;

      will-change: transform;
    `,
    };
};
export const buttonTransition = css `
  transition: all ease 75ms;
`;
export const transition = ({ properties = ['all'], easing, duration }) => {
    return css `
    transition: ${properties
        .map(property => `${property} ${easing} ${duration}ms`)
        .join()};
  `;
};
//# sourceMappingURL=animation.js.map