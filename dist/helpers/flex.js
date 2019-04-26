"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexFlow = void 0;

var _styledComponents = require("styled-components");

const flexFlow = (direction = 'column', wrap = 'nowrap') => (0, _styledComponents.css)(["display:flex;flex-flow:", " ", ";"], direction, wrap);

exports.flexFlow = flexFlow;