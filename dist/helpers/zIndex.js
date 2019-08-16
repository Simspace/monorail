"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndex = exports.ZIndexNodeName = void 0;
let ZIndexNodeName;
exports.ZIndexNodeName = ZIndexNodeName;

(function (ZIndexNodeName) {
  ZIndexNodeName["ArrowButtons"] = "ArrowButtons";
  ZIndexNodeName["FramedIcon"] = "FramedIcon";
  ZIndexNodeName["FramedIconBackground"] = "FramedIconBackground";
  ZIndexNodeName["NewFlowSection"] = "NewFlowSection";
  ZIndexNodeName["NewFlowSectionAfter"] = "NewFlowSectionAfter";
  ZIndexNodeName["PageLevelNavItem"] = "PageLevelNavItem";
  ZIndexNodeName["SidebarContainer"] = "SidebarContainer";
  ZIndexNodeName["TabBarIndicator"] = "TabBarIndicator";
  ZIndexNodeName["CardBody"] = "CardBody";
  ZIndexNodeName["CardBackground"] = "CardBackground";
  ZIndexNodeName["CardShadow"] = "CardShadow";
})(ZIndexNodeName || (exports.ZIndexNodeName = ZIndexNodeName = {}));

const zIndex = nodeName => {
  switch (nodeName) {
    case ZIndexNodeName.SidebarContainer:
      return 'z-index: 10;';

    case ZIndexNodeName.ArrowButtons:
    case ZIndexNodeName.NewFlowSection:
    case ZIndexNodeName.PageLevelNavItem:
    case ZIndexNodeName.TabBarIndicator:
      return 'z-index: 5;';

    case ZIndexNodeName.CardBackground:
    case ZIndexNodeName.FramedIconBackground:
    case ZIndexNodeName.NewFlowSectionAfter:
      return 'z-index: -5;';

    case ZIndexNodeName.CardShadow:
      return 'z-index: -10;';

    case ZIndexNodeName.FramedIcon:
    case ZIndexNodeName.CardBody:
    default:
      return 'z-index: 0;';
  }
};

exports.zIndex = zIndex;