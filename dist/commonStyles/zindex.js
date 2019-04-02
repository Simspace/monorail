"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndex = exports.ZIndexNodeName = void 0;
let ZIndexNodeName;
exports.ZIndexNodeName = ZIndexNodeName;

(function (ZIndexNodeName) {
  ZIndexNodeName["SidebarContainer"] = "SidebarContainer";
  ZIndexNodeName["NewFlowSection"] = "NewFlowSection";
  ZIndexNodeName["NewFlowSectionAfter"] = "NewFlowSectionAfter";
})(ZIndexNodeName || (exports.ZIndexNodeName = ZIndexNodeName = {}));

const zIndex = nodeName => {
  switch (nodeName) {
    case ZIndexNodeName.SidebarContainer:
      return 'z-index: 10;';

    case ZIndexNodeName.NewFlowSection:
      return 'z-index: 5;';

    case ZIndexNodeName.NewFlowSectionAfter:
      return 'z-index: -5;';

    default:
      return 'z-index: 0;';
  }
};

exports.zIndex = zIndex;