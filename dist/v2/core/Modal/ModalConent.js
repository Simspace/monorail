"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = void 0;

var _exports = require("../../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _modalTypes = require("./modalTypes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ModalContent = _styledComponents.default.div(({
  size
}) => (0, _styledComponents.css)`
    ${(0, _exports.flexFlow)()};
    height: 100%;
    max-height: 100%;
    overflow: auto;
    padding: ${size === _modalTypes.MODAL_SIZE.Mini ? 16 : 24}px;
  `);

exports.ModalContent = ModalContent;