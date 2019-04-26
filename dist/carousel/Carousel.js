"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../helpers/exports");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Styles
 */
const SlideContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Carousel__SlideContainer",
  componentId: "sc-8c7x1t-0"
})(["", ";"], (0, _exports.flexFlow)('row'));

const SlideItem =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Carousel__SlideItem",
  componentId: "sc-8c7x1t-1"
})(["", ";justify-content:center;align-items:center;"], (0, _exports.flexFlow)('row'));
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
  children
}) => {
  const slideItemRef = (0, _react.useRef)(null);
  const [currentSlideIndex, setCurrentSlideIndex] = (0, _react.useState)(defaultCurrentSlideIndex);
  const [translateValue, setTranslateValue] = (0, _react.useState)(defaultTranslateValue);
  const [slideWidth, setSlideWidth] = (0, _react.useState)(defaultSlideWidth);
  (0, _react.useLayoutEffect)(() => {
    if (!(0, _typeGuards.isNil)(slideItemRef) && !(0, _typeGuards.isNil)(slideItemRef.current)) {
      const slideItem = slideItemRef.current;

      if (slideItem) {
        setSlideWidth(slideItem.getBoundingClientRect().width);
      }
    }
  }, [slideItemRef.current, currentSlideIndex, translateValue, slideWidth]);

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

  return children({
    nextSlide,
    prevSlide,
    currentSlide: currentSlideIndex + 1,
    totalSlides: slides.length,
    content: _react.default.createElement(_StyledSlideContainer, {
      _css: translateValue,
      _css2: slideWidth / 2,
      _css3: slideWidth
    }, slides.map(slide => _react.default.createElement(SlideItem, {
      ref: slideItemRef
    }, slide)))
  });
};

exports.Carousel = Carousel;

var _StyledSlideContainer = (0, _styledComponents.default)(SlideContainer)`transform:translateX(${p => p._css}px);transition:transform ease-out ${p => p._css2}ms;width:${p => p._css3}px;`;