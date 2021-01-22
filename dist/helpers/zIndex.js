"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zIndex = exports.zIndexValue = exports.ZIndexNodeName = void 0;
let ZIndexNodeName;
exports.ZIndexNodeName = ZIndexNodeName;

(function (ZIndexNodeName) {
  ZIndexNodeName["ArrowButtons"] = "ArrowButtons";
  ZIndexNodeName["ContentCardButton"] = "ContentCardButton";
  ZIndexNodeName["DataWellDivider"] = "DataWellDivider";
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
  ZIndexNodeName["Overlay"] = "Overlay";
  ZIndexNodeName["Modal"] = "Modal";
  ZIndexNodeName["Tooltip"] = "Tooltip";
  ZIndexNodeName["RTEToolbar"] = "RTEToolbar";
})(ZIndexNodeName || (exports.ZIndexNodeName = ZIndexNodeName = {}));

const zIndexValue = nodeName => {
  switch (nodeName) {
    case ZIndexNodeName.ContentCardButton:
      return 1;

    case ZIndexNodeName.SidebarContainer:
      return 10;

    case ZIndexNodeName.ArrowButtons:
    case ZIndexNodeName.NewFlowSection:
    case ZIndexNodeName.PageLevelNavItem:
    case ZIndexNodeName.TabBarIndicator:
    case ZIndexNodeName.DataWellDivider:
      return 5;

    case ZIndexNodeName.RTEToolbar:
      return 4;

    case ZIndexNodeName.CardBackground:
    case ZIndexNodeName.FramedIconBackground:
    case ZIndexNodeName.NewFlowSectionAfter:
      return -5;

    case ZIndexNodeName.CardShadow:
      return -10;

    case ZIndexNodeName.Modal:
      return 9990;

    case ZIndexNodeName.Overlay:
      return 9998;

    case ZIndexNodeName.Tooltip:
      return 9999;

    case ZIndexNodeName.FramedIcon:
    case ZIndexNodeName.CardBody:
      return 0;
  }
};

exports.zIndexValue = zIndexValue;

const zIndex = nodeName => `z-index: ${zIndexValue(nodeName)};`;

exports.zIndex = zIndex;