"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseLink = require("./BaseLink");

Object.keys(_BaseLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BaseLink[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _BaseLink[key];
    }
  });
});

var _FramedLink = require("./FramedLink");

Object.keys(_FramedLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FramedLink[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FramedLink[key];
    }
  });
});

var _HyperLink = require("./HyperLink");

Object.keys(_HyperLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _HyperLink[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _HyperLink[key];
    }
  });
});