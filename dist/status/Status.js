"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Status =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "Status",
  componentId: "kuxbp5-0"
})(["", ";"], ({
  cssOverrides,
  size = 16,
  inactive = false
}) => (0, _styledComponents.css)(["background:", ";background:", ";border-radius:", "px;color:", ";flex-shrink:0;font-size:", "px;font-weight:700;height:", "px;min-width:", "px;padding:0 ", "px;text-align:center;line-height:", "px;", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue), (0, _CommonStyles.colors)(inactive ? _CommonStyles.Colors.Black54 : _CommonStyles.Colors.BrandLightBlue), size / 2, (0, _CommonStyles.colors)(_CommonStyles.Colors.White), size - 5, size, size, size / 4, size, cssOverrides));
exports.Status = Status;