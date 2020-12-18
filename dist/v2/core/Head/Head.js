"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DEFAULT_TITLE = __DEV__ ? '[DEV] SimSpace Portal' : 'SimSpace Portal';
const TITLE_TEMPLATE = `%s - ${DEFAULT_TITLE}`;

/**
 * `Head` is a re-export of react-helmet with application defaults
 * @link https://github.com/nfl/react-helmet
 */
const Head = props => /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, _extends({
  defaultTitle: DEFAULT_TITLE,
  titleTemplate: TITLE_TEMPLATE
}, props));

exports.Head = Head;