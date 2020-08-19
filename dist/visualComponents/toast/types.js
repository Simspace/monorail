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
  [AlertLevel.Info]: _color.Colors.Info,
  [AlertLevel.Success]: _color.Colors.Success,
  [AlertLevel.Error]: _color.Colors.Error,
  [AlertLevel.Warning]: _color.Colors.Warning
};
exports.AlertColors = AlertColors;
const AlertIcons = {
  [AlertLevel.Info]: 'info',
  [AlertLevel.Success]: 'check_circle',
  [AlertLevel.Error]: 'error',
  [AlertLevel.Warning]: 'warning'
};
exports.AlertIcons = AlertIcons;