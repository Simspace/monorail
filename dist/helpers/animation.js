"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = exports.buttonTransition = exports.generateScaleAnimation = exports.ease = exports.visible = void 0;

var _styledComponents = require("styled-components");

const visible = (isVisible = false) => isVisible ? (0, _styledComponents.css)(["visibility:visible;opacity:0.9999;"]) : (0, _styledComponents.css)(["visibility:hidden;opacity:0;"]);

exports.visible = visible;

const ease = isActive => isActive ? 'ease-in' : 'ease-out'; // https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse


exports.ease = ease;

const easeCurve = (v, pow = 4) => {
  return 1 - Math.pow(1 - Math.max(v, Math.min(0, 1)), pow);
};

const frameTime = 1000 / 60;

const nFrames = duration => Math.round(duration / frameTime);

const append = ({
  endOpacity,
  endX,
  endY,
  innerAnimation,
  outerAnimation,
  percentage,
  startOpacity,
  startX,
  startY,
  step
}) => {
  const xScale = startX + (endX - startX) * step;
  const yScale = startY + (endY - startY) * step;
  const opacity = startOpacity + (endOpacity - startOpacity) * step;
  const invScaleX = (1 / xScale).toFixed(5);
  const invScaleY = (1 / yScale).toFixed(5);
  outerAnimation.push(`
      ${percentage}% {
        transform: scale(${xScale}, ${yScale});
        opacity: ${opacity};
      }`);
  innerAnimation.push(`
      ${percentage}% {
        transform: scale(${invScaleX}, ${invScaleY});
      }`);
};

const createEaseAnimations = ({
  isOpen,
  x,
  y,
  animationDuration
}) => {
  const menuExpandAnimation = [];
  const menuExpandContentsAnimation = [];
  const menuCollapseAnimation = [];
  const menuCollapseContentsAnimation = [];
  const nFramesDuration = nFrames(animationDuration);
  const percentIncrement = 100 / nFramesDuration;
  const closedOpacity = 0;
  const openOpacity = 0.9999;

  for (let i = 0; i <= nFramesDuration; i++) {
    const step = easeCurve(i / nFramesDuration);
    const percentage = (i * percentIncrement).toFixed(5);
    const endX = 1;
    const endY = 1; // Expand animation.

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
      step
    }); // Collapse animation.

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
      step
    });
  }

  return {
    menuAnimation: isOpen ? (0, _styledComponents.keyframes)(["", ""], menuExpandAnimation.join('')) : (0, _styledComponents.keyframes)(["", ""], menuCollapseAnimation.join('')),
    menuContentsAnimation: isOpen ? (0, _styledComponents.keyframes)(["", ""], menuExpandContentsAnimation.join('')) : (0, _styledComponents.keyframes)(["", ""], menuCollapseContentsAnimation.join(''))
  };
};

const generateScaleAnimation = ({
  position,
  isOpen,
  elementHeight,
  elementWidth
}) => {
  const animationDuration = 150;
  const keyFrame = createEaseAnimations({
    animationDuration,
    isOpen,
    position,
    x: position.originWidth / Math.min(position.maxWidth, elementWidth),
    y: position.originHeight / Math.min(position.maxHeight, elementHeight)
  });
  return {
    outSideContentStyles: (0, _styledComponents.css)(["", ":", "px;", ":", "px;max-height:", ";max-width:", ";position:fixed;transform-origin:", " ", ";will-change:transform,opacity;animation:", " linear ", "ms forwards;"], position.dropXDirection, position.dropXAmount, position.dropYDirection, position.dropYAmount, position.maxHeightCalc, position.maxWidthCalc, position.dropYDirection, position.dropXDirection, keyFrame.menuAnimation, animationDuration),
    inSideContentStyles: (0, _styledComponents.css)(["transform-origin:", " ", ";animation:", " linear ", "ms forwards;will-change:transform;"], position.dropYDirection, position.dropXDirection, keyFrame.menuContentsAnimation, animationDuration)
  };
};

exports.generateScaleAnimation = generateScaleAnimation;
const buttonTransition =
/*#__PURE__*/
(0, _styledComponents.css)(["transition:all ease 75ms;"]);
exports.buttonTransition = buttonTransition;

const transition = ({
  properties = ['all'],
  easing,
  duration
}) => {
  return (0, _styledComponents.css)(["transition:", ";"], properties.map(property => `${property} ${easing} ${duration}ms`).join());
};

exports.transition = transition;