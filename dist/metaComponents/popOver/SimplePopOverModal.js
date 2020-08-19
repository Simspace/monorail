"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimplePopOverModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _SimplePopOver = require("./SimplePopOver");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SimplePopOverModal = props => {
  /**
   * Use in conjunction with useSimplePopOver hook
   * Example: <SaveAsEventTemplateModal /> in TeamEventOutlook.tsx
   * AR - 2020-07-21
   */
  return _react.default.createElement(_SimplePopOver.SimplePopOver, {
    position: props.position,
    isOpen: props.isOpen,
    onClose: props.hide,
    popOver: popOverProps => {
      const modalProps = { ...popOverProps,
        onClick: props.hide
      };
      return props.render(modalProps);
    }
  });
};

exports.SimplePopOverModal = SimplePopOverModal;