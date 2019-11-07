"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertIcons = exports.AlertColors = exports.AlertLevel = void 0;

var _color = require("../../helpers/color");

let AlertLevel;
exports.AlertLevel = AlertLevel;

(function (AlertLevel) {
  AlertLevel["Info"] = "info";
  AlertLevel["Success"] = "success";
  AlertLevel["Error"] = "error";
  AlertLevel["Warning"] = "warning";
})(AlertLevel || (exports.AlertLevel = AlertLevel = {}));

const AlertColors = {
  [AlertLevel.Info]: (0, _color.getColor)(_color.Colors.BrandLightBlue),
  [AlertLevel.Success]: (0, _color.getColor)(_color.Colors.Green),
  [AlertLevel.Error]: (0, _color.getColor)(_color.Colors.Red),
  [AlertLevel.Warning]: (0, _color.getColor)(_color.Colors.Amber)
};
exports.AlertColors = AlertColors;
const AlertIcons = {
  [AlertLevel.Info]: 'info',
  [AlertLevel.Success]: 'check_circle',
  [AlertLevel.Error]: 'error',
  [AlertLevel.Warning]: 'warning'
};
exports.AlertIcons = AlertIcons;