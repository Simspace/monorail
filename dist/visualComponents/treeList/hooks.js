"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTreeViewActions = exports.useTreeViewMoveActions = exports.useTreeViewCreateChildAction = exports.useForestFunctions = void 0;

var React = _interopRequireWildcard(require("react"));

var _function = require("fp-ts/function");

var O = _interopRequireWildcard(require("fp-ts/Option"));

var Task = _interopRequireWildcard(require("fp-ts/Task"));

var TF = _interopRequireWildcard(require("../../sharedHelpers/fp-ts-ext/Tree"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const negateCurried2 = f => a => b => !f(a)(b);

const ifNode = condition => action => condition ? action : undefined;

const useForestFunctions = (forest, getKey) => {
  const addChild = React.useCallback(mc => key => (0, _function.pipe)(forest, TF.addChildWhereAsync(t => getKey(t.value) === key)(mc)), [forest, getKey]);
  const addRoot = React.useCallback(node => (0, _function.pipe)(forest, TF.addRoot(node)), [forest]);
  const duplicate = React.useCallback(key => modify => (0, _function.pipe)(forest, TF.duplicateWhereAsync(t => getKey(t.value) === key)(modify)), [forest, getKey]);
  const remove = React.useCallback(key => (0, _function.pipe)(forest, TF.removeWhere(t => getKey(t.value) === key)), [forest, getKey]);
  const move = React.useCallback((func, fallback = () => () => O.none) => key => (0, _function.pipe)(forest, func(t => getKey(t.value) === key), O.alt(() => (0, _function.pipe)(forest, fallback(t => getKey(t.value) === key)))), [forest, getKey]);
  const moveUp = React.useCallback(key => move(TF.moveLeft, TF.moveUpBefore)(key), [move]);
  const moveDown = React.useCallback(key => move(TF.moveRight, TF.moveUpAfter)(key), [move]);
  const moveInto = React.useCallback(key => move(TF.moveInto)(key), [move]);
  const canMove = React.useCallback((check, secondaryCheck = () => () => false) => key => (0, _function.pipe)(forest, check(t => getKey(t.value) === key), c => c || (0, _function.pipe)(forest, secondaryCheck(t => getKey(t.value) === key))), [forest, getKey]);
  const canMoveUp = React.useCallback(key => canMove(negateCurried2(TF.isLeftmost), TF.hasParent)(key), [canMove]);
  const canMoveDown = React.useCallback(key => canMove(negateCurried2(TF.isRightmost), TF.hasParent)(key), [canMove]);
  const canMoveInto = React.useCallback(key => canMove(negateCurried2(TF.isRightmost))(key), [canMove]);
  const res = React.useMemo(() => ({
    forest,
    addChild,
    addRoot,
    duplicate,
    remove,
    moveUp,
    moveDown,
    moveInto,
    canMoveUp,
    canMoveDown,
    canMoveInto
  }), [addChild, addRoot, canMoveDown, canMoveInto, canMoveUp, duplicate, forest, moveDown, moveInto, moveUp, remove]);
  return res;
};

exports.useForestFunctions = useForestFunctions;

const useTreeViewCreateChildAction = ({
  addChild
}, createNode) => React.useCallback(key => ({
  label: 'Create Child',
  iconName: 'add_box',
  onClick: onClickParent => (0, _function.pipe)(key, addChild(createNode), Task.map(() => onClickParent()), Task.map(() => ({
    tag: 'nodeOpen',
    key,
    nodeOpen: true
  })))
}), [addChild, createNode]);

exports.useTreeViewCreateChildAction = useTreeViewCreateChildAction;

const useTreeViewMoveActions = ffs => {
  const {
    canMoveUp,
    canMoveDown,
    canMoveInto,
    moveUp,
    moveDown,
    moveInto
  } = ffs;
  const getMoveActions = React.useCallback(key => [ifNode(canMoveUp(key))({
    label: 'Move Up',
    iconName: 'arrow_upward',
    onClick: onClickParent => {
      moveUp(key);
      onClickParent();
    }
  }), ifNode(canMoveDown(key))({
    label: 'Move Down',
    iconName: 'arrow_downward',
    onClick: onClickParent => {
      moveDown(key);
      onClickParent();
    }
  }), ifNode(canMoveInto(key))({
    label: 'Move Into',
    iconName: 'arrow_forward',
    onClick: onClickParent => {
      moveInto(key);
      onClickParent();
    }
  })].filter(_typeGuards.isNotNil), [canMoveUp, canMoveDown, canMoveInto, moveUp, moveDown, moveInto]);
  return getMoveActions;
};

exports.useTreeViewMoveActions = useTreeViewMoveActions;

const useTreeViewActions = (ffs, createNode) => {
  const create = useTreeViewCreateChildAction(ffs, createNode);
  const moves = useTreeViewMoveActions(ffs);
  const getActions = React.useCallback(key => {
    const keyedMoves = moves(key);
    return keyedMoves.length ? [create(key), {
      type: 'divider'
    }, ...keyedMoves] : [create(key)];
  }, [create, moves]);
  return getActions;
};

exports.useTreeViewActions = useTreeViewActions;