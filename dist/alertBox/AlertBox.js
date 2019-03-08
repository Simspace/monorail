"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertBox = exports.CCAlertBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../icon/Icon");

var _CommonStyles = require("../CommonStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const iconSize = 32;
const CCAlertBox =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "AlertBox__CCAlertBox",
  componentId: "sc-1wdletb-0"
})(["", ";background-color:", ";border-radius:4px;flex-shrink:0;height:48px;position:relative;&::before{bottom:8px;content:'';left:16px;position:absolute;width:32px;}", ";"], (0, _CommonStyles.flexFlow)('row'), (0, _CommonStyles.colors)(_CommonStyles.Colors.Red, 0.15), ({
  cssOverrides
}) => cssOverrides);
exports.CCAlertBox = CCAlertBox;
const StyledIconLeft =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "AlertBox__StyledIconLeft",
  componentId: "sc-1wdletb-1"
})(["color:#f44336;margin:8px 12px 8px 16px;position:relative;"]);
const Title =
/*#__PURE__*/
(0, _styledComponents.default)('h1').withConfig({
  displayName: "AlertBox__Title",
  componentId: "sc-1wdletb-2"
})(["", ";color:", ";margin:16px 0;"], (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title3), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black89));
const AlertDetails =
/*#__PURE__*/
(0, _styledComponents.default)('span').withConfig({
  displayName: "AlertBox__AlertDetails",
  componentId: "sc-1wdletb-3"
})(["", ";color:", ";margin:auto 48px auto auto;"], (0, _CommonStyles.typography)(300, _CommonStyles.FontSizes.Content), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black89));

class AlertBox extends _react.Component {
  render() {
    const {
      icon,
      label,
      cssOverrides
    } = this.props;
    return _react.default.createElement(CCAlertBox, {
      label: label,
      cssOverrides: cssOverrides
    }, _react.default.createElement(StyledIconLeft, {
      icon: icon,
      size: iconSize
    }), label && _react.default.createElement(Title, null, label), _react.default.createElement(AlertDetails, null, _react.default.createElement("ul", null, _react.default.createElement("li", null, "\u2022 Recertification overdue"))));
  }

}

exports.AlertBox = AlertBox;