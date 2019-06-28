"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopOverNext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopOver = require("./PopOver");

var _PortalController = require("../portal/PortalController");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const PopOverNext = props => {
  const {
    document,
    toggle,
    popOver,
    gap = 8,
    toSide = false,
    alwaysRender = false,
    isOpen = false,
    onToggle
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
    setPosition((0, _PopOver.getOverlayPosition)(event.currentTarget, gap, toSide));
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
    isRendered: isRendered,
    document: document
  }, popOver({
    isOpen: isOpenState,
    position,
    onClick: togglePopOver,
    togglePopOver,
    closingAnimationCompleted: () => setIsRendered(!isRendered)
  })));
};

exports.PopOverNext = PopOverNext;