"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingGeneric = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLottie = _interopRequireDefault(require("react-lottie"));

var _loadingGeneric = _interopRequireDefault(require("./loadingGeneric.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadingGeneric = ({
  size = 64
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _loadingGeneric.default
  };
  return _react.default.createElement(_reactLottie.default, {
    options: defaultOptions,
    height: size,
    width: size
  });
};

exports.LoadingGeneric = LoadingGeneric;