"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsBarMode = exports.ButtonSize = exports.IconButtonShape = exports.ButtonMode = exports.ButtonDisplay = void 0;
let ButtonDisplay;
exports.ButtonDisplay = ButtonDisplay;

(function (ButtonDisplay) {
  ButtonDisplay["Primary"] = "primary";
  ButtonDisplay["Secondary"] = "secondary";
  ButtonDisplay["Outline"] = "outline";
  ButtonDisplay["Chromeless"] = "chromeless";
  ButtonDisplay["ButtonBar"] = "buttonbar";
  ButtonDisplay["Toolbar"] = "toolbar";
})(ButtonDisplay || (exports.ButtonDisplay = ButtonDisplay = {}));

let ButtonMode;
exports.ButtonMode = ButtonMode;

(function (ButtonMode) {
  ButtonMode["Default"] = "default";
  ButtonMode["Push"] = "push";
})(ButtonMode || (exports.ButtonMode = ButtonMode = {}));

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

let ButtonsBarMode;
exports.ButtonsBarMode = ButtonsBarMode;

(function (ButtonsBarMode) {
  ButtonsBarMode["Default"] = "default";
  ButtonsBarMode["Toolbar"] = "toolbar";
})(ButtonsBarMode || (exports.ButtonsBarMode = ButtonsBarMode = {}));