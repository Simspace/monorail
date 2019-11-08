"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLottie = _interopRequireDefault(require("react-lottie"));

var _loading = _interopRequireDefault(require("./loading.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loading = ({
  size = 64
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: _loading.default
  };
  return _react.default.createElement(_reactLottie.default, {
    options: defaultOptions,
    height: size,
    width: size
  });
};

exports.Loading = Loading;