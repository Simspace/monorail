"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Array = require("fp-ts/lib/Array");

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Styles
 */
const SlideContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Carousel__SlideContainer",
  componentId: "z8g9k-0"
})(["", ";"], (0, _exports.flexFlow)('row'));

const SlideItem =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Carousel__SlideItem",
  componentId: "z8g9k-1"
})(["", ";flex:1;justify-content:center;align-items:center;"], (0, _exports.flexFlow)('row'));

const DotContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Carousel__DotContainer",
  componentId: "z8g9k-2"
})(["", ";position:absolute;bottom:8px;left:50%;transform:translateX(-50%);z-index:5;"], (0, _exports.flexFlow)('row'));

const DotClickArea =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Carousel__DotClickArea",
  componentId: "z8g9k-3"
})(["height:16px;width:16px;border-radius:50%;display:inline-block;"]);

const Dot =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Carousel__Dot",
  componentId: "z8g9k-4"
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
  children
}) => {
  const slideItemRef = (0, _react.useRef)(null);
  const [currentSlideIndex, setCurrentSlideIndex] = (0, _react.useState)(defaultCurrentSlideIndex);
  const [translateValue, setTranslateValue] = (0, _react.useState)(defaultTranslateValue);
  const [slideWidth, setSlideWidth] = (0, _react.useState)(defaultSlideWidth);
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
    const lastIndex = slides.length;
    const shouldResetIndex = currentSlideIndex === 0; // If on first slide - don't go to previous

    if (currentSlideIndex === 0) {
      return;
    }

    const index = shouldResetIndex ? lastIndex : currentSlideIndex - 1;
    setCurrentSlideIndex(index);
    setTranslateValue(translateValue + slideWidth);
  };

  const nextSlide = () => {
    const lastIndex = slides.length;
    const shouldResetIndex = currentSlideIndex === lastIndex - 1; // If on last slide - don't go to next

    if (currentSlideIndex === slides.length - 1) {
      return;
    }

    const index = shouldResetIndex ? lastIndex : currentSlideIndex + 1;
    setCurrentSlideIndex(index);
    setTranslateValue(translateValue - slideWidth);
  };

  const gotToSlideIndex = index => {
    setCurrentSlideIndex(index);
  };

  return children({
    nextSlide,
    prevSlide,
    currentSlide: currentSlideIndex,
    totalSlides: slides.length - 1,
    content: _react.default.createElement(_StyledSlideContainer, null, _react.default.createElement(_StyledDiv, {
      _css: (0, _exports.flexFlow)('row'),
      _css2: 100 * slides.length,
      _css3: slides.length,
      _css4: currentSlideIndex,
      _css5: slideWidth / 2
    }, slides.map((slide, index) => _react.default.createElement(SlideItem, {
      ref: slideItemRef,
      key: `slide-${index}`
    }, slide))), indicatorDots && _react.default.createElement(DotContainer, null, !(0, _typeGuards.isNil)(slides.length - 1) && (0, _Array.range)(0, slides.length - 1).map(index => // TODO: Make this a pseudo-element
    _react.default.createElement(DotClickArea, {
      onClick: () => gotToSlideIndex(index),
      key: index
    }, _react.default.createElement(Dot, {
      key: index,
      dotColor: dotColor,
      isActive: index === currentSlideIndex
    })))))
  });
};

exports.Carousel = Carousel;

var _StyledSlideContainer = (0, _styledComponents.default)(SlideContainer)`width:100%;display:block;overflow:visible;position:relative;`;

var _StyledDiv = (0, _styledComponents.default)("div")`${p => p._css};width:${p => p._css2}%;transform:translateX( calc((-100% / ${p => p._css3}) * ${p => p._css4}) );transition:transform ease-out ${p => p._css5}ms;height:100%;`;