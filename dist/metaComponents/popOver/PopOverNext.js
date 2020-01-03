"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopOverNext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopOver = require("./PopOver");

var _PortalController = require("../portal/PortalController");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PopOverNext = props => {
  const {
    toggle,
    popOver,
    gap = 8,
    toSide = false,
    alwaysRender = false,
    isOpen = false,
    onToggle,
    xDirection,
    yDirection
  } = props;
  const [isOpenState, setIsOpenState] = (0, _react.useState)(false);
  const [isRendered, setIsRendered] = (0, _react.useState)(false);
  const [position, setPosition] = (0, _react.useState)(_PopOver.defaultPopOverPosition);
  (0, _react.useEffect)(() => {
    if (isOpenState) {
      setIsRendered(true);
    }
  }, [isOpenState]);

  const onClick = event => {
    setPosition((0, _PopOver.getOverlayPosition)({
      target: event.currentTarget,
      gap,
      toSide,
      xDirection,
      yDirection
    }));
    togglePopOver();
  };

  const togglePopOver = () => {
    onToggle && onToggle(!isOpenState);
    setIsOpenState(!isOpenState);
  };

  return _react.default.createElement(_react.default.Fragment, null, toggle({
    onClick,
    isActive: isOpenState
  }), _react.default.createElement(_PortalController.PortalController, {
    isRendered: isRendered
  }, popOver({
    isOpen: isOpenState,
    position,
    onClick: togglePopOver,
    togglePopOver,
    closingAnimationCompleted: () => setIsRendered(!isRendered)
  })));
};

exports.PopOverNext = PopOverNext;