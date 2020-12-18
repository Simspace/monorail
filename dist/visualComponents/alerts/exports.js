"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AlertModal = require("./AlertModal");

Object.keys(_AlertModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AlertModal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AlertModal[key];
    }
  });
});

var _alertType = require("./alertType");

Object.keys(_alertType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alertType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _alertType[key];
    }
  });
});

var _DeleteModal = require("./DeleteModal");

Object.keys(_DeleteModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DeleteModal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DeleteModal[key];
    }
  });
});