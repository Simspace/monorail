"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSize = exports.IconButtonShape = exports.ButtonDisplay = void 0;
let ButtonDisplay;
exports.ButtonDisplay = ButtonDisplay;

(function (ButtonDisplay) {
  ButtonDisplay["Primary"] = "primary";
  ButtonDisplay["Secondary"] = "secondary";
  ButtonDisplay["Outline"] = "outline";
  ButtonDisplay["Chromeless"] = "chromeless";
})(ButtonDisplay || (exports.ButtonDisplay = ButtonDisplay = {}));

let IconButtonShape;
exports.IconButtonShape = IconButtonShape;

(function (IconButtonShape) {
  IconButtonShape["Default"] = "default";
  IconButtonShape["Square"] = "square";
})(IconButtonShape || (exports.IconButtonShape = IconButtonShape = {}));

let ButtonSize;
exports.ButtonSize = ButtonSize;

(function (ButtonSize) {
  ButtonSize["Dense"] = "dense";
  ButtonSize["Compact"] = "compact";
  ButtonSize["Default"] = "default";
  ButtonSize["Large"] = "large";
})(ButtonSize || (exports.ButtonSize = ButtonSize = {}));