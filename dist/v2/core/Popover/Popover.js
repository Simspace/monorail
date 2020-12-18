"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = Popover;
exports.usePopover = void 0;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _utils = require("@react-aria/utils");

var _styledComponents = _interopRequireDefault(require("../../../helpers/styled-components"));

var _typeGuards = require("../../../sharedHelpers/typeGuards");

var _helpers = require("../../shared/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const usePopover = () => {
  const id = (0, _utils.useId)();

  const [anchorEl, setAnchorEl] = _react.default.useState(null);

  const onClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const isOpen = !(0, _typeGuards.isNil)(anchorEl);
  const popoverId = isOpen ? id : undefined;
  return {
    triggerProps: {
      'aria-expanded': isOpen,
      'aria-controls': popoverId,
      // Note: [KP 2020-09] 'aria-haspopup' could be needed if this is a menu,
      //   but likely to use MUI Menu instead of Popover
      onClick
    },
    popoverProps: {
      id: popoverId,
      open: isOpen,
      anchorEl,
      onClose
    },
    isOpen
  };
}; //#endregion
//#region Popover


exports.usePopover = usePopover;

const convertToPx = value => (0, _typeGuards.isNotNil)(value) ? `${value}px` : '0';

const marginToCSS = ({
  margin
}) => (0, _typeGuards.isNotNil)(margin) ? `margin: ${convertToPx(margin.top)} ${convertToPx(margin.right)} ${convertToPx(margin.bottom)} ${convertToPx(margin.left)};` : undefined;

const StyledPopover = (0, _styledComponents.default)(MUI.Popover).withConfig((0, _helpers.propBlockerConfig)(['margin']))`
  & > .MuiPopover-paper {
    ${marginToCSS}
  }
`;
/**
 * An overlay positioned relative to its anchor element
 *
 * - [Popover | Material-UI](https://material-ui.com/components/popover/#popover)
 */

function Popover(props) {
  return /*#__PURE__*/_react.default.createElement(StyledPopover, _extends({
    role: "dialog"
  }, props));
}

;
Popover.muiName = MUI.Popover.muiName; // eslint-disable-line
//#endregion