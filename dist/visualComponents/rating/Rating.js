"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = exports.getRatingIcons = exports.Fill = exports.Size = void 0;

var _Array = require("fp-ts/lib/Array");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Size;
exports.Size = Size;

(function (Size) {
  Size["Tiny"] = "10";
  Size["Small"] = "16";
  Size["Medium"] = "24";
  Size["Large"] = "32";
})(Size || (exports.Size = Size = {}));

let Fill;
exports.Fill = Fill;

(function (Fill) {
  Fill["Black"] = "#000000";
  Fill["Gold"] = "#FFC107";
  Fill["Grey"] = "#DADADA";
})(Fill || (exports.Fill = Fill = {}));

const StyledStar =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "Rating__StyledStar",
  componentId: "sc-1wsgxr1-0"
})(({
  isEditing,
  interactFill
}) => isEditing && interactFill && (0, _styledComponents.css)(["svg{path{fill:", " !important;}}"], interactFill));

const RatingWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Rating__RatingWrapper",
  componentId: "sc-1wsgxr1-1"
})(({
  isEditing,
  spreadOut,
  fill
}) => (0, _styledComponents.css)(["display:flex;", ";svg{path{fill:", ";}}", "{", ";}"], isEditing && (0, _styledComponents.css)(["cursor:pointer;"]), fill, StyledStar, spreadOut && (0, _styledComponents.css)(["margin-right:10px;"])));

const handleNever = err => {
  throw Error(err);
};

const getRatingIcons = rating => {
  return (0, _Array.range)(1, 5).map(value => {
    if (rating <= value - 1) {
      return [value, 'star_outline'];
    } else if (rating < value && rating > value - 1) {
      return [value, 'star_half'];
    } else if (rating >= value) {
      return [value, 'star_filled'];
    }

    throw Error("Rating could not be determined. This shouldn't happen");
  });
};

exports.getRatingIcons = getRatingIcons;

const Rating = _react.default.memo(props => {
  const {
    rating,
    size,
    fill,
    interactFill,
    spreadOut,
    onClickRating
  } = {
    size: Size.Small,
    fill: Fill.Gold,
    interactFill: Fill.Gold,
    spreadOut: false,
    ...props
  };

  const getStar = (icon, value) => {
    switch (icon) {
      case 'star_outline':
        return _react.default.createElement(StyledStar, {
          key: `rating-start-${value}`,
          onClick: () => {
            onClickRating && onClickRating(value);
          }
        }, _react.default.createElement(_Icon.Icon, {
          icon: "star_outline",
          cssOverrides: `
                    width: ${size}px;
                    height: ${size}px;
                  `
        }));

      case 'star_half':
        return _react.default.createElement(StyledStar, {
          key: `rating-start-${value}`,
          onClick: () => onClickRating && onClickRating(value)
        }, _react.default.createElement(_Icon.Icon, {
          icon: "star_half",
          cssOverrides: `
                  width: ${size}px;
                  height: ${size}px;
                `
        }));

      case 'star_filled':
        return _react.default.createElement(StyledStar, {
          key: `rating-start-${value}`,
          isEditing: Boolean(onClickRating),
          interactFill: interactFill,
          onClick: () => onClickRating && onClickRating(value)
        }, _react.default.createElement(_Icon.Icon, {
          icon: "star_filled",
          cssOverrides: `
                    width: ${size}px;
                    height: ${size}px;
                  `
        }));

      default:
        return handleNever('Unknown star Icon');
    }
  };

  return _react.default.createElement(RatingWrapper, {
    isEditing: Boolean(onClickRating),
    fill: fill,
    spreadOut: spreadOut
  }, getRatingIcons(rating).map(([value, icon]) => getStar(icon, value)));
});

exports.Rating = Rating;