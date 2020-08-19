"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.HeaderTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _appName = require("../../helpers/appName");

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typography = require("../../helpers/typography");

var _AppIcon = require("../appIcon/AppIcon");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeaderRow = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')};

  align-items: center;
  color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text1000)};
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;
`;

var _StyledHeaderRow =
/*#__PURE__*/
(0, _styledComponents.default)(HeaderRow).withConfig({
  displayName: "Header___StyledHeaderRow",
  componentId: "f4cius-0"
})(["", ""], p => p._css);

const HeaderContainer = _styledComponents2.default.div``;
const HeaderTitle = _styledComponents2.default.h1`
  ${(0, _typography.typographyFont)(500, _typography.FontSizes.Title3)};
`;
exports.HeaderTitle = HeaderTitle;

var _StyledHeaderTitle =
/*#__PURE__*/
(0, _styledComponents.default)(HeaderTitle).withConfig({
  displayName: "Header___StyledHeaderTitle",
  componentId: "f4cius-1"
})(["", ""], p => p._css2);

const iconLeftCss = (0, _styledComponents2.css)`
  color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text1000)};
  flex-shrink: 0;
  margin-right: 12px;
`;

var _StyledAppIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_AppIcon.AppIcon).withConfig({
  displayName: "Header___StyledAppIcon",
  componentId: "f4cius-2"
})(["", ""], iconLeftCss);

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Header___StyledIcon",
  componentId: "f4cius-3"
})(["", ""], iconLeftCss);

const Header = (0, _styledComponents2.default)(({
  actions,
  appIcon,
  children,
  cssHeaderRow,
  cssTitle,
  iconLeft,
  noBorder = false,
  title,
  ...domProps
}) => _react.default.createElement(HeaderContainer, domProps, _react.default.createElement(_StyledHeaderRow, {
  _css: cssHeaderRow
}, appIcon && _react.default.createElement(_StyledAppIcon, {
  appName: appIcon
}), iconLeft && (typeof iconLeft === 'string' ? _react.default.createElement(_StyledIcon, {
  icon: iconLeft
}) : iconLeft), _react.default.createElement(_StyledHeaderTitle, {
  _css2: cssTitle
}, title), actions), children))(({
  noBorder,
  appIcon
}) => (0, _styledComponents2.css)`
    ${!noBorder && (0, _styledComponents2.css)`
        &::after {
          content: '';
          background: ${appIcon ? (0, _color.getColor)((0, _appName.convertAppNameToColor)(appIcon)) : '#ebebeb'};
          bottom: 0;
          height: 1px;
          left: 0;
          position: absolute;
          right: 0;
        }
      `};

    ${(0, _flex.flexFlow)()};
    position: relative;
    flex-shrink: 0;
  `);
exports.Header = Header;