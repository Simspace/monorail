"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionsMenu = require("./ActionsMenu");

Object.keys(_ActionsMenu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ActionsMenu[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ActionsMenu[key];
    }
  });
});