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
  ZIndexNodeName["PageLevelNavItem"] = "PageLevelNavItem";
  ZIndexNodeName["FramedIconBackground"] = "FramedIconBackground";
  ZIndexNodeName["FramedIcon"] = "FramedIcon";
  ZIndexNodeName["TabBarIndicator"] = "TabBarIndicator";
})(ZIndexNodeName || (exports.ZIndexNodeName = ZIndexNodeName = {}));

const zIndex = nodeName => {
  switch (nodeName) {
    case ZIndexNodeName.SidebarContainer:
      return 'z-index: 10;';

    case ZIndexNodeName.NewFlowSection:
    case ZIndexNodeName.PageLevelNavItem:
    case ZIndexNodeName.TabBarIndicator:
      return 'z-index: 5;';

    case ZIndexNodeName.FramedIconBackground:
    case ZIndexNodeName.NewFlowSectionAfter:
      return 'z-index: -5;';

    case ZIndexNodeName.FramedIcon:
    default:
      return 'z-index: 0;';
  }
};

exports.zIndex = zIndex;