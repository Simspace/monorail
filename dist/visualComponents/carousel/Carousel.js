"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _Array = require("fp-ts/lib/Array");

var _exports = require("../../helpers/exports");

var _hooks = require("../../helpers/hooks");

var _typeGuards = require("../../sharedHelpers/typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Styles
 */
const SlideContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Carousel__SlideContainer",
  componentId: "z8g9k-0"
})(["", ";"], (0, _exports.flexFlow)('row'));

var _StyledSlideContainer = /*#__PURE__*/(0, _styledComponents.default)(SlideContainer).withConfig({
  displayName: "Carousel___StyledSlideContainer",
  componentId: "z8g9k-1"
})(["width:100%;display:block;overflow:visible;position:relative;"]);

const SlideItem = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Carousel__SlideItem",
  componentId: "z8g9k-2"
})(["", ";flex:1;justify-content:center;align-items:center;"], (0, _exports.flexFlow)('row'));

const DotContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Carousel__DotContainer",
  componentId: "z8g9k-3"
})(["", ";position:absolute;bottom:8px;left:50%;transform:translateX(-50%);z-index:5;"], (0, _exports.flexFlow)('row'));

const DotClickArea = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Carousel__DotClickArea",
  componentId: "z8g9k-4"
})(["height:16px;width:16px;border-radius:50%;display:inline-block;"]);

const Dot = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Carousel__Dot",
  componentId: "z8g9k-5"
})(({
  isActive,
  dotColor
}) => (0, _styledComponents.css)(["", " height:8px;width:8px;border-radius:50%;display:inline-block;margin:4px;"], isActive ? `background: ${(0, _exports.getColor)(dotColor, 0.5)};` : `background: ${(0, _exports.getColor)(dotColor, 0.12)};
  border: 0;
  color: ${(0, _exports.getColor)(dotColor)};

  &:hover {
    background: ${(0, _exports.getColor)(dotColor, 0.18)};
  }

  &:active {
    background: ${(0, _exports.getColor)(dotColor, 0.22)};
  }`));

const SlidesContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Carousel__SlidesContainer",
  componentId: "z8g9k-6"
})(["", ";width:", "%;transform:", ";transition:", ";height:100%;"], (0, _exports.flexFlow)('row'), props => 100 * props.slides.length, props => `translateX(
    calc((-100% / ${props.slides.length}) * ${props.currentSlideIndex})
  )`, props => `transform ease-out ${props.slideWidth / 2}ms`);
/*
 * Types
 */


const defaultCurrentSlideIndex = 0;
const defaultTranslateValue = 0;
const defaultSlideWidth = 0;
/*
 * Components
 */

const Carousel = ({
  slides,
  indicatorDots = false,
  dotColor = _exports.Colors.BrandLightBlue,
  loop = false,
  timerInterval = 3000,
  autoPlay = false,
  children
}) => {
  const slideItemRef = (0, _react.useRef)(null);
  const [currentSlideIndex, setCurrentSlideIndex] = (0, _react.useState)(defaultCurrentSlideIndex);
  const [translateValue, setTranslateValue] = (0, _react.useState)(defaultTranslateValue);
  const [slideWidth, setSlideWidth] = (0, _react.useState)(defaultSlideWidth);
  const [count, setCount] = (0, _react.useState)(0);
  (0, _hooks.useInterval)(() => {
    play();
    setCount(count + 1);
  }, timerInterval);
  /* eslint-disable react-hooks/exhaustive-deps */

  (0, _react.useLayoutEffect)(() => {
    if (!(0, _typeGuards.isNil)(slideItemRef) && !(0, _typeGuards.isNil)(slideItemRef.current)) {
      const slideItem = slideItemRef.current;

      if (slideItem) {
        setSlideWidth(slideItem.getBoundingClientRect().width);
      }
    }
  }, [slideItemRef.current, currentSlideIndex, translateValue, slideWidth]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const prevSlide = () => {
    const shouldResetIndex = currentSlideIndex === 0; // If on first slide & loop is false - don't go to previous

    if (!loop && currentSlideIndex === 0) {
      return;
    }

    const index = shouldResetIndex ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(index);
    setTranslateValue(translateValue + slideWidth);
  };

  const nextSlide = () => {
    const shouldResetIndex = currentSlideIndex === slides.length - 1; // If on last slide & loop is false - don't go to next

    if (!loop && currentSlideIndex === slides.length - 1) {
      return;
    }

    const index = shouldResetIndex ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(index);
    setTranslateValue(translateValue - slideWidth);
  };

  const play = () => {
    if (!autoPlay || slides.length < 1) {
      return;
    }

    nextSlide();
  };

  const gotToSlideIndex = index => {
    setCurrentSlideIndex(index);
  };

  return children({
    loop,
    nextSlide,
    prevSlide,
    currentSlide: currentSlideIndex,
    totalSlides: slides.length - 1,
    content: /*#__PURE__*/_react.default.createElement(_StyledSlideContainer, null, /*#__PURE__*/_react.default.createElement(SlidesContainer, {
      slides: slides,
      slideWidth: slideWidth,
      currentSlideIndex: currentSlideIndex
    }, slides.map((slide, index) => /*#__PURE__*/_react.default.createElement(SlideItem, {
      ref: slideItemRef,
      key: `slide-${index}`
    }, slide))), indicatorDots && /*#__PURE__*/_react.default.createElement(DotContainer, null, !(0, _typeGuards.isNil)(slides.length - 1) && (0, _Array.range)(0, slides.length - 1).map(index =>
    /*#__PURE__*/
    // TODO: Make this a pseudo-element
    _react.default.createElement(DotClickArea, {
      onClick: () => gotToSlideIndex(index),
      key: index
    }, /*#__PURE__*/_react.default.createElement(Dot, {
      key: index,
      dotColor: dotColor,
      isActive: index === currentSlideIndex
    })))))
  });
};

exports.Carousel = Carousel;