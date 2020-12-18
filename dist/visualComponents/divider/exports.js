"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = require("./Divider");

Object.keys(_Divider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Divider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Divider[key];
    }
  });
});