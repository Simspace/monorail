"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getATraversal = exports.getAModifyF = exports.getETraversal = exports.getEModifyF = exports.getBothPrism = exports.getRightPrism = exports.getLeftPrism = void 0;

var _monocleTs = require("monocle-ts");

var _fpTsImports = require("../fp-ts-imports");

/**
 * A Prism to select the Left constructor of a These
 */
const getLeftPrism = () => new _monocleTs.Prism(_fpTsImports.Th.fold(_fpTsImports.O.some, _a => _fpTsImports.O.none, (_e, _a) => _fpTsImports.O.none), e => _fpTsImports.Th.left(e));
/**
 * A Prism to select the Right constructor of a These
 */


exports.getLeftPrism = getLeftPrism;

const getRightPrism = () => new _monocleTs.Prism(_fpTsImports.Th.fold(_e => _fpTsImports.O.none, _fpTsImports.O.some, (_e, _a) => _fpTsImports.O.none), a => _fpTsImports.Th.right(a));
/**
 * A Prism to select the Both constructor of a These
 */


exports.getRightPrism = getRightPrism;

const getBothPrism = () => new _monocleTs.Prism(_fpTsImports.Th.fold(_e => _fpTsImports.O.none, _a => _fpTsImports.O.none, (e, a) => _fpTsImports.O.some([e, a])), ([e, a]) => _fpTsImports.Th.both(e, a));
/**
 * A ModifyF function for the E value of a These (including Left and Both)
 *
 * This allows you to apply an effectful function to modify an E value, whether it's in the Left or Both E slot
 */


exports.getBothPrism = getBothPrism;

const getEModifyF = () => F_ => f => these => _fpTsImports.Th.fold(e => F_.map(f(e), _fpTsImports.Th.left), _a => F_.of(these), (e, a) => F_.map(f(e), e2 => _fpTsImports.Th.both(e2, a)))(these);
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

const getAModifyF = () => F_ => f => these => _fpTsImports.Th.fold(_e => F_.of(these), a => F_.map(f(a), _fpTsImports.Th.right), (e, a) => F_.map(f(a), a2 => _fpTsImports.Th.both(e, a2)))(these);
/**
 * Traversal for the A value of a These (including Right and Both)
 *
 * This is an optic for "traversing" the A value of a These<E, A>, whether it's in the Right or Both slot.
 */


exports.getAModifyF = getAModifyF;

const getATraversal = () => new _monocleTs.Traversal(getAModifyF());

exports.getATraversal = getATraversal;