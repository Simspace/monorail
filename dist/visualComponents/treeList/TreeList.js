"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenWithDepth = flattenWithDepth;
exports.outlineNumbering = exports.useTreeList = exports.TreeRowToggleAndDepthLine = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var A = _interopRequireWildcard(require("fp-ts/Array"));

var _function = require("fp-ts/function");

var _Eq = require("fp-ts/lib/Eq");

var _Tree = require("fp-ts/lib/Tree");

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Array2 = require("../../sharedHelpers/fp-ts-ext/Array");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TreeRowAlignmentBox = _styledComponents2.default.div(({
  cssToggle
}) => (0, _styledComponents2.css)`
    ${(0, _exports.flexFlow)()};

    align-items: center;
    align-self: stretch;
    flex-shrink: 0;
    justify-content: center;
    width: 24px;
    overflow: hidden;
    position: relative;

    ${cssToggle}
  `);

var _StyledTreeRowAlignmentBox = /*#__PURE__*/(0, _styledComponents.default)(TreeRowAlignmentBox).withConfig({
  displayName: "TreeList___StyledTreeRowAlignmentBox",
  componentId: "sc-1ymlwwi-0"
})(["", ""], p => p._css);

const TreeRowDepthLine = _styledComponents2.default.div(({
  isVisible = true
}) => (0, _styledComponents2.css)`
    ${(0, _exports.visible)(isVisible)}

    background: ${(0, _color.getColor)(_color.Colors.Black12a)};
    height: 100%;
    width: 1px;
  `);

const TreeRowToggleContainer = _styledComponents2.default.div`
  ${TreeRowDepthLine} {
    left: calc(50% - 0.5px);
    position: absolute;
  }
`;

function flattenWithDepth(rootTree, toKey, startingIndex) {
  function flattenWithDepthInner(depth, ancestors, index) {
    return currentTree => {
      return [{
        value: currentTree.value,
        depth,
        ancestors,
        isLeaf: currentTree.forest.length === 0,
        index
      }, ...(0, _function.pipe)(currentTree.forest, forest => forest.map((childTree, idx) => [childTree, idx]), A.chain(([childTree, childIdx]) => {
        return (0, _function.pipe)(childTree, flattenWithDepthInner(depth + 1, ancestors.concat({
          key: toKey(currentTree.value),
          index
        }), childIdx));
      }))];
    };
  }

  return flattenWithDepthInner(0, [], startingIndex)(rootTree);
}

const TreeRowToggleAndDepthLine = props => {
  const {
    depth,
    isLeaf,
    isOpen,
    onClick,
    showDepthLine = true,
    cssToggle
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Array(depth).fill(depth).map((_, idx) => /*#__PURE__*/_react.default.createElement(TreeRowAlignmentBox, {
    key: idx
  }, /*#__PURE__*/_react.default.createElement(TreeRowDepthLine, null))), /*#__PURE__*/_react.default.createElement(_StyledTreeRowAlignmentBox, {
    _css: cssToggle
  }, !isLeaf && /*#__PURE__*/_react.default.createElement(TreeRowToggleContainer, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    icon: isOpen ? 'arrow_drop_down' : 'arrow_right',
    display: _buttonTypes.ButtonDisplay.Chromeless,
    onClick: e => {
      e.stopPropagation();
      onClick(e);
    }
  }), showDepthLine && /*#__PURE__*/_react.default.createElement(TreeRowDepthLine, {
    isVisible: isOpen
  }))));
};

exports.TreeRowToggleAndDepthLine = TreeRowToggleAndDepthLine;

const useTreeList = props => {
  const {
    forest,
    getTreeNodeKey
  } = props;
  const [openRows, setOpenRows] = (0, _react.useState)(props.startExpanded ? forest.flatMap(x => (0, _Tree.foldMap)(A.getMonoid())((0, _function.flow)(getTreeNodeKey, A.of))(x)) : []);

  const toggleNode = nodeKey => {
    setOpenRows((0, _Array2.xor)(_Eq.eqString)([nodeKey], openRows));
  };

  const rows = (0, _function.pipe)(forest, f => f.map((tr, idx) => [tr, idx]), A.chain(([data, index]) => flattenWithDepth(data, a => getTreeNodeKey(a), index))).filter(row => {
    return A.intersection(_Eq.eqString)(openRows, row.ancestors.map(a => a.key)).length === row.ancestors.length;
  });
  return {
    rows,
    toggleNode,
    openRows
  };
};

exports.useTreeList = useTreeList;

const outlineNumbering = (row, startingDepth = 0) => {
  return [...row.ancestors.splice(startingDepth).map(a => a.index + 1), row.index + 1].join('.');
};

exports.outlineNumbering = outlineNumbering;