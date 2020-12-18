"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmptyState = require("./EmptyState");

Object.keys(_EmptyState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _EmptyState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _EmptyState[key];
    }
  });
});