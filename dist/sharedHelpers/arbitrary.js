"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arbitrary = exports.URI = void 0;

var _fastCheck = _interopRequireDefault(require("fast-check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const URI = 'Arbitrary';
exports.URI = URI;
const arbitrary = {
  URI,

  of(a) {
    return _fastCheck.default.constant(a);
  },

  map(fa, f) {
    return fa.map(f);
  },

  ap(fab, fa) {
    return fab.chain(ab => fa.map(ab));
  },

  chain(fa, f) {
    return fa.chain(f);
  }

};
exports.arbitrary = arbitrary;