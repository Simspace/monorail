"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowButtons = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconButton = require("../buttons/IconButton");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _buttonTypes = require("../buttons/buttonTypes");

var _exports = require("../helpers/exports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Styles
*/
const ArrowButtonsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ArrowButtons__ArrowButtonsContainer",
  componentId: "sc-1yyr0cr-0"
})(["", ";align-items:center;align-self:flex-end;"], (0, _exports.flexFlow)('row'));

const RatioContainer =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "ArrowButtons__RatioContainer",
  componentId: "sc-1yyr0cr-1"
})(["", ";color:", ";margin:auto 4px;"], (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black62));
/*
* Types
*/


/*
* Components
*/
const ArrowButtons = props => {
  const {
    count,
    next,
    previous,
    total,
    ...otherProps
  } = props;
  return _react.default.createElement(ArrowButtonsContainer, otherProps, _react.default.createElement(_IconButton.IconButton, {
    icon: "chevron_left",
    onClick: previous,
    display: _buttonTypes.ButtonDisplay.Chromeless
  }), _react.default.createElement(RatioContainer, null, `${count} / ${total}`), _react.default.createElement(_IconButton.IconButton, {
    icon: "chevron_right",
    onClick: next,
    display: _buttonTypes.ButtonDisplay.Chromeless
  }));
};

exports.ArrowButtons = ArrowButtons;