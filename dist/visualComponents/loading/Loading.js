"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = exports.LoaderType = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLottie = _interopRequireDefault(require("react-lottie"));

var _loadingData = _interopRequireDefault(require("./loadingData.json"));

var _loadingGenericData = _interopRequireDefault(require("./loadingGenericData.json"));

var _loadingPcteData = _interopRequireDefault(require("./loadingPcteData.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let LoaderType;
exports.LoaderType = LoaderType;

(function (LoaderType) {
  LoaderType["SimSpace"] = "simspace";
  LoaderType["Generic"] = "generic";
  LoaderType["Pcte"] = "pcte";
})(LoaderType || (exports.LoaderType = LoaderType = {}));

const loadingJson = {
  [LoaderType.SimSpace]: _loadingData.default,
  [LoaderType.Generic]: _loadingGenericData.default,
  [LoaderType.Pcte]: _loadingPcteData.default
};

const getHeight = d => 'height' in d ? d.height : undefined;

const getWidth = d => 'width' in d ? d.width : undefined;

const Loading = ({
  size = {
    _type: 'size',
    hw: 64
  },
  loaderType = LoaderType.SimSpace
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson[loaderType]
  };
  /* Lottie adds ariaRole='button' by default, since that makes total sense PG 2/13/20 */

  return size._type === 'size' ? _react.default.createElement(_reactLottie.default, {
    ariaRole: "",
    options: defaultOptions,
    height: size.hw,
    width: size.hw
  }) : _react.default.createElement(_reactLottie.default, {
    ariaRole: "",
    options: defaultOptions,
    height: getHeight(size),
    width: getWidth(size)
  });
};

exports.Loading = Loading;