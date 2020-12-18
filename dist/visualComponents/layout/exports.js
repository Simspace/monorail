"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollAnimation = require("./ScrollAnimation");

Object.keys(_ScrollAnimation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ScrollAnimation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ScrollAnimation[key];
    }
  });
});