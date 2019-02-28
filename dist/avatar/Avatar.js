"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvatarInitials = exports.Avatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const size = 24;
const CCAvatar = (0, _styledComponents.default)('div')`
  ${({
  team
}) => team ? _styledComponents.css`
          ${(0, _CommonStyles.borderRadius)()};

          background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue)};
        ` : _styledComponents.css`
          background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
          border-radius: ${size / 2}px;
        `};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  flex-shrink: 0;
  font-size: 9.89px;
  font-weight: 900;
  height: ${size}px;
  line-height: ${size}px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  width: ${size}px;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;

const Avatar = ({
  css: cssOverrides,
  first,
  last,
  team,
  ...otherProps
}) => _react.default.createElement(CCAvatar, _extends({
  css: cssOverrides,
  team: team
}, otherProps), first.charAt(0), last.charAt(0));

exports.Avatar = Avatar;

const getAvatarInitials = fullName => {
  const initials = fullName.match(/\b\w/g) || [];
  return {
    first: initials.shift() || '',
    last: initials.pop() || ''
  };
};

exports.getAvatarInitials = getAvatarInitials;