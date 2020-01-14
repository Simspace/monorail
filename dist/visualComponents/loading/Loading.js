"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingContainer = exports.Loading = exports.LoaderType = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLottie = _interopRequireDefault(require("react-lottie"));

var _flex = require("../../helpers/flex");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

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

const Loading = ({
  size = 64,
  loaderType = LoaderType.SimSpace
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson[loaderType]
  };
  return _react.default.createElement(_reactLottie.default, {
    options: defaultOptions,
    height: size,
    width: size
  });
};

exports.Loading = Loading;
const LoadingContainer = _styledComponents.default.div`
  ${(0, _flex.flexFlow)()};

  align-items: center;
  flex: 1 1 100%;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
exports.LoadingContainer = LoadingContainer;