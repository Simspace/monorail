"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeView = exports.TreeViewRow = exports.TreeViewRowDisplayType = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var React = _interopRequireWildcard(require("react"));

var Arr = _interopRequireWildcard(require("fp-ts/lib/Array"));

var _function = require("fp-ts/lib/function");

var NEA = _interopRequireWildcard(require("fp-ts/lib/NonEmptyArray"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var R = _interopRequireWildcard(require("fp-ts/lib/Record"));

var Sg = _interopRequireWildcard(require("fp-ts/lib/Semigroup"));

var _exports = require("../../exports");

var _exports2 = require("../../helpers/exports");

var TF = _interopRequireWildcard(require("../../sharedHelpers/fp-ts-ext/Tree"));

var _matchers = require("../../sharedHelpers/matchers");

var _names = require("../../sharedHelpers/names");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _ActionsMenu = require("../actionsMenu/ActionsMenu");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _ScrollAnimation = require("../layout/ScrollAnimation");

var _TreeList = require("./TreeList");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let TreeViewRowDisplayType;
exports.TreeViewRowDisplayType = TreeViewRowDisplayType;

(function (TreeViewRowDisplayType) {
  TreeViewRowDisplayType["ArbitraryContent"] = "ArbitraryContent";
  TreeViewRowDisplayType["Default"] = "Default";
})(TreeViewRowDisplayType || (exports.TreeViewRowDisplayType = TreeViewRowDisplayType = {}));

const TreeViewWrapper = /*#__PURE__*/_styledComponents.default.section.withConfig({
  displayName: "TreeView__TreeViewWrapper",
  componentId: "g06erw-0"
})(["", " height:100%;"], (0, _exports2.flexFlow)('column'));

const TreeViewScrollContainer = /*#__PURE__*/(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "TreeView__TreeViewScrollContainer",
  componentId: "g06erw-1"
})(["", " height:100%;width:100%;overflow:auto;"], (0, _exports2.flexFlow)('row'));

const TreeViewList = /*#__PURE__*/_styledComponents.default.ul.withConfig({
  displayName: "TreeView__TreeViewList",
  componentId: "g06erw-2"
})(["", " flex-grow:1;"], (0, _exports2.flexFlow)('column'));

const TreeViewText = /*#__PURE__*/_styledComponents.default.div.attrs({
  role: 'button',
  tabIndex: 0
}).withConfig({
  displayName: "TreeView__TreeViewText",
  componentId: "g06erw-3"
})(["", ";", " margin-left:8px;&:focus{outline:none;text-decoration:underline;}"], (0, _exports2.flexFlow)('row', 'nowrap'), props => (0, _exports2.typography)(props.depth === 0 ? 500 : 400, _exports2.FontSizes.Title5));

var _StyledTreeViewText = /*#__PURE__*/(0, _styledComponents.default)(TreeViewText).withConfig({
  displayName: "TreeView___StyledTreeViewText",
  componentId: "g06erw-4"
})(["", ""], p => p._css);

const ActionsMenuToggle = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "TreeView__ActionsMenuToggle",
  componentId: "g06erw-5"
})([""]);

const TreeViewRow = /*#__PURE__*/_styledComponents.default.li.attrs(props => ({
  className: props.active ? 'is-active' : '',
  role: 'button',
  tabindex: '0'
})).withConfig({
  displayName: "TreeView__TreeViewRow",
  componentId: "g06erw-6"
})(["", ";", ";align-items:center;min-height:32px;padding:0 8px;position:relative;white-space:nowrap;color:", ";& ", "{opacity:0;}&:hover ", ",&:focus ", ",&:focus-within ", "{opacity:1;}"], (0, _exports2.baseChromelessStyles)(), (0, _exports2.flexFlow)('row'), props => (0, _exports2.getColor)(props.active ? _exports2.Colors.AccentBlue500 : _exports2.Colors.Gray89), ActionsMenuToggle,
/* sc-selector */
ActionsMenuToggle,
/* sc-selector */
ActionsMenuToggle,
/* sc-selector */
ActionsMenuToggle);

exports.TreeViewRow = TreeViewRow;

const RowScrollIntoViewAnchor = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "TreeView__RowScrollIntoViewAnchor",
  componentId: "g06erw-7"
})(["width:40px;"]);

const ActionsMenuWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "TreeView__ActionsMenuWrapper",
  componentId: "g06erw-8"
})(["height:100%;", ";justify-content:space-between;align-items:center;flex-grow:1;& ", "{margin:0 8px;position:sticky;right:8px;}"], (0, _exports2.flexFlow)('row'), ActionsMenuToggle);

const RowIconLeftContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "TreeView__RowIconLeftContainer",
  componentId: "g06erw-9"
})(["", ";margin:0 8px 0 4px;"], (0, _exports2.flexFlow)('row', 'nowrap'));

const Header = /*#__PURE__*/_styledComponents.default.header.withConfig({
  displayName: "TreeView__Header",
  componentId: "g06erw-10"
})(["padding:16px 32px;border-bottom:1px solid ", ";h1{", ";padding-bottom:8px;}h2{", " color:", ";padding-bottom:8px;}"], (0, _exports2.getColor)(_exports2.Colors.Gray06), (0, _exports2.typography)(500, _exports2.FontSizes.Title3), (0, _exports2.typography)(400, _exports2.FontSizes.Title5), (0, _exports2.getColor)(_exports2.Colors.Gray54));

const TreeView = props => {
  const {
    editable,
    numbered,
    forest,
    getKey,
    header,
    getActions,
    onAddSection
  } = props;
  const treeListState = (0, _TreeList.useTreeList)({
    forest,
    getTreeNodeKey: getKey,
    startExpanded: true
  });
  const selectedRow = (0, _function.pipe)(props.selected, O.chain(selected => (0, _function.pipe)(treeListState.rows, Arr.findFirst(a => props.getKey(a.value) === selected))));
  const selectedRowAncestorKeys = (0, _function.pipe)(selectedRow, O.map(x => x.ancestors.map(a => a.key)));
  const handleActionComplete = React.useCallback(async r => {
    if (r) {
      (0, _matchers.matchI)(await r())({
        nodeOpen: ({
          key,
          nodeOpen
        }) => {
          if (treeListState.openRows.includes(key) !== nodeOpen) {
            treeListState.toggleNode(key);
          }
        }
      });
    }
  }, [treeListState]);
  const selectedItemScrollAnchor = React.useRef(null);
  const selectedKey = O.toUndefined(props.selected);
  React.useEffect(() => {
    var _selectedItemScrollAn;

    (_selectedItemScrollAn = selectedItemScrollAnchor.current) === null || _selectedItemScrollAn === void 0 ? void 0 : _selectedItemScrollAn.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'end'
    });
  }, [selectedKey]);
  React.useEffect(() => {
    /**
     * If the selected node somehow ends up in a collapsed row, (e.g. during a
     * "move into" movement or when the user gets the latest checklist that has
     * undergone edits from another user moving their selected item into a collapsed
     * row), we need to make sure all the ancestors of the selected node are opened.
     */
    const openRowKeyDict = (0, _function.pipe)(treeListState.openRows, Arr.map(key => (0, _function.tuple)(key, key)), R.fromFoldable(Sg.getLastSemigroup(), Arr.array));
    const collapsedParentsOfSelected = (0, _function.pipe)((0, _names.name)(forest)(TF.getPath(node => getKey(node.value) === selectedKey)), O.map(pathToSelected => {
      return Arr.unfold((0, _names.the)(pathToSelected), path => {
        const init = NEA.init(path);
        return Arr.isNonEmpty(init) ? O.some([init, init]) : O.none;
      });
    }), O.getOrElse(() => Arr.empty), Arr.map(ancestor => TF.getTreeOptionalFromPath(ancestor)), Arr.filterMap(optional => optional.getOption(forest)), Arr.filter(parent => !R.hasOwnProperty(getKey(parent.value), openRowKeyDict)), Arr.map(unopenedParent => getKey(unopenedParent.value)));
    collapsedParentsOfSelected.forEach(parent => treeListState.toggleNode(parent));
  }, [forest, getKey, selectedKey, treeListState]);
  return /*#__PURE__*/React.createElement(TreeViewWrapper, null, header && /*#__PURE__*/React.createElement(Header, null, header && /*#__PURE__*/React.createElement("h1", null, header.main), (header === null || header === void 0 ? void 0 : header.sub) && /*#__PURE__*/React.createElement("h2", null, header.sub), editable && /*#__PURE__*/React.createElement(_Button.Button, {
    display: _buttonTypes.ButtonDisplay.Secondary,
    onClick: onAddSection,
    cssOverrides: (0, _styledComponents.css)(["width:100%;"])
  }, "Create Item")), /*#__PURE__*/React.createElement(TreeViewScrollContainer, null, /*#__PURE__*/React.createElement(TreeViewList, null, treeListState.rows.map(row => {
    var _props$getTreeViewTex;

    const isChildSelected = (0, _function.pipe)(selectedRowAncestorKeys, O.fold(() => false, xs => xs.includes(key)));
    const key = getKey(row.value);
    const isSelected = (0, _function.pipe)(props.selected, O.fold(() => false, selected => key === selected)); // `rowDisplayUnmodified` shown in the `title` on hover

    const rowDisplayUnmodified = props.getDisplay({
      value: row.value,
      isLeaf: row.isLeaf,
      isChildSelected
    });
    const rowNumber = (0, _TreeList.outlineNumbering)(row);
    const formattedRowNumber = rowNumber.split('.').length === 1 ? rowNumber.concat('.') : rowNumber;
    return /*#__PURE__*/React.createElement(TreeViewRow, {
      key: key,
      title: (() => {
        switch (rowDisplayUnmodified.tag) {
          case TreeViewRowDisplayType.Default:
            return numbered ? `${formattedRowNumber} ${rowDisplayUnmodified.text}` : rowDisplayUnmodified.text;

          case TreeViewRowDisplayType.ArbitraryContent:
            return '';
        }
      })(),
      onClick: () => {
        var _props$onSelect;

        return (_props$onSelect = props.onSelect) === null || _props$onSelect === void 0 ? void 0 : _props$onSelect.call(props, key, (0, _TreeList.outlineNumbering)(row), row.value);
      },
      onKeyDown: e => {
        var _props$onSelect2;

        return (e.key === ' ' || e.key === 'Enter') && ((_props$onSelect2 = props.onSelect) === null || _props$onSelect2 === void 0 ? void 0 : _props$onSelect2.call(props, key, (0, _TreeList.outlineNumbering)(row), row.value));
      },
      active: isSelected
    }, /*#__PURE__*/React.createElement(_TreeList.TreeRowToggleAndDepthLine, {
      depth: row.depth,
      onClick: evt => {
        const childIsSelected = (0, _names.name)(props.forest)(nf => {
          return (0, _function.pipe)(nf, TF.getPath(node => getKey(node.value) === selectedKey), O.bindTo('selected'), O.bind('this', () => (0, _function.pipe)(nf, TF.getPath(node => getKey(node.value) === getKey(row.value)))), O.exists(b => TF.isNodePathDescendantOf(b.this)(b.selected)));
        });

        if (childIsSelected) {
          var _props$onSelect3;

          (_props$onSelect3 = props.onSelect) === null || _props$onSelect3 === void 0 ? void 0 : _props$onSelect3.call(props, key, formattedRowNumber, row.value);
        }

        evt.stopPropagation();
        treeListState.toggleNode(key);
      },
      isOpen: treeListState.openRows.includes(key),
      isLeaf: row.isLeaf
    }), (() => {
      switch (rowDisplayUnmodified.tag) {
        case TreeViewRowDisplayType.Default:
          return (0, _typeGuards.isNotNil)(rowDisplayUnmodified.iconLeft) ? /*#__PURE__*/React.createElement(RowIconLeftContainer, null, /*#__PURE__*/React.createElement(_exports.Icon, rowDisplayUnmodified.iconLeft)) : /*#__PURE__*/React.createElement(React.Fragment, null);

        default:
          return null;
      }
    })(), /*#__PURE__*/React.createElement(_StyledTreeViewText, {
      depth: row.depth,
      _css: (_props$getTreeViewTex = props.getTreeViewTextProps) === null || _props$getTreeViewTex === void 0 ? void 0 : _props$getTreeViewTex.call(props, {
        value: row.value
      }).css
    }, numbered && formattedRowNumber.concat(' '), (() => {
      switch (rowDisplayUnmodified.tag) {
        case TreeViewRowDisplayType.Default:
          return rowDisplayUnmodified.text.length > 249 ? `${rowDisplayUnmodified.text.slice(0, 246)}...` : rowDisplayUnmodified.text;

        case TreeViewRowDisplayType.ArbitraryContent:
          return rowDisplayUnmodified.content;
      }
    })()), (() => {
      var _getActions;

      switch (rowDisplayUnmodified.tag) {
        case TreeViewRowDisplayType.Default:
          return /*#__PURE__*/React.createElement(ActionsMenuWrapper, null, /*#__PURE__*/React.createElement(RowScrollIntoViewAnchor, {
            ref: isSelected ? selectedItemScrollAnchor : undefined
          }), /*#__PURE__*/React.createElement(_ActionsMenu.ActionsMenu, {
            toggle: toggleProps => /*#__PURE__*/React.createElement(ActionsMenuToggle, _extends({
              icon: "more_vert",
              display: _buttonTypes.ButtonDisplay.Chromeless
            }, toggleProps, {
              onClick: e => {
                e.stopPropagation();
                toggleProps.onClick(e);
              }
            })),
            actions: (_getActions = getActions === null || getActions === void 0 ? void 0 : getActions(key)) !== null && _getActions !== void 0 ? _getActions : Arr.empty,
            onActionComplete: handleActionComplete
          }));

        default:
          return /*#__PURE__*/React.createElement(RowScrollIntoViewAnchor, {
            ref: isSelected ? selectedItemScrollAnchor : undefined
          });
      }
    })());
  }))));
};

exports.TreeView = TreeView;