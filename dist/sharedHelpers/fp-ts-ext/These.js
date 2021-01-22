"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getLeftPrism: true,
  getRightPrism: true,
  getBothPrism: true,
  getEModifyF: true,
  getETraversal: true,
  getAModifyF: true,
  getATraversal: true
};
exports.getATraversal = exports.getAModifyF = exports.getETraversal = exports.getEModifyF = exports.getBothPrism = exports.getRightPrism = exports.getLeftPrism = void 0;

var _monocleTs = require("monocle-ts");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var Th = _interopRequireWildcard(require("fp-ts/lib/These"));

Object.keys(Th).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === Th[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return Th[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A Prism to select the Left constructor of a These
 */
const getLeftPrism = () => new _monocleTs.Prism(Th.fold(O.some, _a => O.none, (_e, _a) => O.none), e => Th.left(e));
/**
 * A Prism to select the Right constructor of a These
 */


exports.getLeftPrism = getLeftPrism;

const getRightPrism = () => new _monocleTs.Prism(Th.fold(_e => O.none, O.some, (_e, _a) => O.none), a => Th.right(a));
/**
 * A Prism to select the Both constructor of a These
 */


exports.getRightPrism = getRightPrism;

const getBothPrism = () => new _monocleTs.Prism(Th.fold(_e => O.none, _a => O.none, (e, a) => O.some([e, a])), ([e, a]) => Th.both(e, a));
/**
 * A ModifyF function for the E value of a These (including Left and Both)
 *
 * This allows you to apply an effectful function to modify an E value, whether it's in the Left or Both E slot
 */


exports.getBothPrism = getBothPrism;

const getEModifyF = () => F_ => f => these => Th.fold(e => F_.map(f(e), Th.left), _a => F_.of(these), (e, a) => F_.map(f(e), e2 => Th.both(e2, a)))(these);
/**
 * Traversal for the E value of a These (including Left and Both)
 *
 * This is an optic for "traversing" the E value of a These<E, A>, whether it's in the Left or Both slot.
 */


exports.getEModifyF = getEModifyF;

const getETraversal = () => new _monocleTs.Traversal(getEModifyF());
/**
 * A ModifyF function for the A value of a These (including Right and Both)
 *
 * This allows you to apply an effectful function to modify an A value, whether it's in the Right or Both A slot
 */


exports.getETraversal = getETraversal;

const getAModifyF = () => F_ => f => these => Th.fold(_e => F_.of(these), a => F_.map(f(a), Th.right), (e, a) => F_.map(f(a), a2 => Th.both(e, a2)))(these);
/**
 * Traversal for the A value of a These (including Right and Both)
 *
 * This is an optic for "traversing" the A value of a These<E, A>, whether it's in the Right or Both slot.
 */


exports.getAModifyF = getAModifyF;

const getATraversal = () => new _monocleTs.Traversal(getAModifyF());

exports.getATraversal = getATraversal;