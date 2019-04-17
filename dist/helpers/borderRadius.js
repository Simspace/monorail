"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderRadius = exports.BorderRadius = void 0;

var _styledComponents = require("styled-components");

let BorderRadius;
exports.BorderRadius = BorderRadius;

(function (BorderRadius) {
  BorderRadius[BorderRadius["Small"] = 3] = "Small";
  BorderRadius[BorderRadius["Medium"] = 4] = "Medium";
  BorderRadius[BorderRadius["Large"] = 6] = "Large";
  BorderRadius[BorderRadius["XLarge"] = 8] = "XLarge";
  BorderRadius[BorderRadius["Round"] = 1000] = "Round";
})(BorderRadius || (exports.BorderRadius = BorderRadius = {}));

const borderRadius = (borderRadius2 = BorderRadius.Small) => (0, _styledComponents.css)(["border-radius:", "px;"], borderRadius2);

exports.borderRadius = borderRadius;