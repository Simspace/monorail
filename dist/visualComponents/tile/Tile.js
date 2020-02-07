"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tile = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _ActionsMenu = require("../actionsMenu/ActionsMenu");

var _HyperLink = require("../hyperLink/HyperLink");

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

var _TileStatus = require("./TileStatus");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TileStatusForeground = {
  [_TileStatus.TileStatus.Ready]: _color.Colors.Success,
  [_TileStatus.TileStatus.NotReady]: _color.Colors.Error,
  [_TileStatus.TileStatus.Warning]: _color.Colors.Warning,
  [_TileStatus.TileStatus.Unassigned]: _color.Colors.Black54,
  [_TileStatus.TileStatus.Neutral]: _color.Colors.Black54,
  [_TileStatus.TileStatus.Empty]: _color.Colors.Error
};
const TileStatusBorder = {
  [_TileStatus.TileStatus.Ready]: _color.Colors.Success,
  [_TileStatus.TileStatus.NotReady]: _color.Colors.Error,
  [_TileStatus.TileStatus.Warning]: _color.Colors.Warning,
  [_TileStatus.TileStatus.Unassigned]: _color.Colors.Black54,
  [_TileStatus.TileStatus.Neutral]: _color.Colors.Black54,
  [_TileStatus.TileStatus.Empty]: _color.Colors.Black54
};
const TileStatusBackground = {
  [_TileStatus.TileStatus.Ready]: _color.Colors.Success,
  [_TileStatus.TileStatus.NotReady]: _color.Colors.Error,
  [_TileStatus.TileStatus.Warning]: _color.Colors.Warning,
  [_TileStatus.TileStatus.Unassigned]: _color.Colors.Black24,
  [_TileStatus.TileStatus.Neutral]: _color.Colors.Black24,
  [_TileStatus.TileStatus.Empty]: _color.Colors.Error
};
const TileStatusIcon = {
  [_TileStatus.TileStatus.Ready]: 'check',
  [_TileStatus.TileStatus.NotReady]: 'close',
  [_TileStatus.TileStatus.Warning]: 'priority_high',
  [_TileStatus.TileStatus.Unassigned]: 'question_mark',
  [_TileStatus.TileStatus.Neutral]: '',
  [_TileStatus.TileStatus.Empty]: 'question_mark'
};
const TileStatusLabel = {
  [_TileStatus.TileStatus.Ready]: 'Ready',
  [_TileStatus.TileStatus.NotReady]: 'Not Ready',
  [_TileStatus.TileStatus.Warning]: 'Expiring',
  [_TileStatus.TileStatus.Unassigned]: 'Unassigned',
  [_TileStatus.TileStatus.Neutral]: '',
  [_TileStatus.TileStatus.Empty]: 'Unassigned'
};
const TileActionsWrapper = _styledComponents2.default.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`;
const TileIconWrapper = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};
  align-items: center;
  justify-content: center;
  min-width: ${_size.Sizes.DP24}px;

  ${_Icon.Icon} {
    color: ${_color.Colors.White};
  }
`;

const TileContent = _styledComponents2.default.div(({
  status,
  selected = false
}) => (0, _styledComponents2.css)`
    ${(0, _flex.flexFlow)('row')};
    flex: 1;
    border: ${selected ? 2 : 1}px
      ${status === _TileStatus.TileStatus.Unassigned || status === _TileStatus.TileStatus.Empty ? 'dashed' : 'solid'};
    border-left: none;
    box-sizing: border-box;
    padding: 2px 8px;
    align-items: center;
  `);

const TileContainer = _styledComponents2.default.div(({
  status,
  selected = false
}) => {
  const baseOpacity = selected ? 0.75 : 0.5;
  const foregroundColor = selected ? _color.Colors.BrandLightBlue : TileStatusForeground[status];
  const borderColor = selected ? _color.Colors.BrandLightBlue : TileStatusBorder[status];
  return (0, _styledComponents2.css)`
      ${(0, _flex.flexFlow)('row')};

      ${_HyperLink.HyperLink} {
        color: ${(0, _color.getColor)(_color.Colors.BrandLightBlue)};
      }

      ${TileContent} {
        background: ${(0, _color.getColor)(TileStatusBackground[status], 0.08)};
        border-color: ${(0, _color.getColor)(borderColor, baseOpacity)};
      }

      ${TileIconWrapper} {
        background: ${(0, _color.getColor)(foregroundColor, baseOpacity)};
      }

      &:hover {
        ${TileContent} {
          background: ${(0, _color.getColor)(TileStatusBackground[status], 0.16)};
          border-color: ${(0, _color.getColor)(borderColor, baseOpacity + 0.25)};
        }

        ${TileIconWrapper} {
          background: ${(0, _color.getColor)(foregroundColor, baseOpacity + 0.25)};
        }
      }

      display: inline-flex;
      margin: 0 8px 8px 0;
      min-height: 80px;
      min-width: 200px;
      position: relative;
    `;
});

const TileStatusWrapper = _styledComponents2.default.div(({
  status
}) => (0, _styledComponents2.css)`
    display: inline-flex;
    align-items: center;
    justify-items: center;
    flex: 0;

    padding: 2px 16px 2px 8px;
    color: ${(0, _color.getColor)(_color.Colors.White)};
    background: ${(0, _color.getColor)(TileStatusBorder[status])};
    border-radius: 100px;

    ${_Icon.Icon} {
      color: currentColor;
    }
  `);

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Tile___StyledIcon",
  componentId: "sc-17lalsi-0"
})(["margin-right:4px;"]);

const IconStatus = props => {
  const {
    children,
    size = _size.Sizes.DP16,
    status,
    ...domProps
  } = props;
  return _react.default.createElement(TileStatusWrapper, _extends({
    status: status,
    size: size
  }, domProps), _react.default.createElement(_StyledIcon, {
    icon: TileStatusIcon[status],
    size: size
  }), _react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Medium,
    color: _color.Colors.White
  }, children));
};

const Tile = props => {
  const {
    actions,
    icon,
    children,
    status = _TileStatus.TileStatus.Empty,
    selected = false,
    ...domProps
  } = props;
  const [isHovering, setIsHovering] = (0, _react.useState)(false);
  return _react.default.createElement(TileContainer, _extends({
    status: status,
    selected: selected,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false)
  }, domProps), _react.default.createElement(TileIconWrapper, null, _react.default.createElement(_Icon.Icon, {
    size: _size.Sizes.DP16,
    icon: isHovering ? 'drag_indicator' : icon
  })), _react.default.createElement(TileContent, {
    status: status,
    selected: selected
  }, _react.default.createElement("div", null, children, status !== _TileStatus.TileStatus.Neutral && _react.default.createElement(IconStatus, {
    status: status,
    size: _size.Sizes.DP16
  }, TileStatusLabel[status]))), status !== _TileStatus.TileStatus.Unassigned && actions && _react.default.createElement(TileActionsWrapper, null, _react.default.createElement(_ActionsMenu.ActionsMenu, {
    actions: actions
  })));
};

exports.Tile = Tile;