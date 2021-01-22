"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualizedTBody = VirtualizedTBody;
exports.TreeGrid = TreeGrid;

var _react = _interopRequireDefault(require("react"));

var Newtype = _interopRequireWildcard(require("newtype-ts"));

var _reactVirtualized = require("react-virtualized");

var RW = _interopRequireWildcard(require("react-window"));

var _fpTsImports = require("../../../sharedHelpers/fp-ts-imports");

var _exports = require("../../../exports");

var _newtypes = require("../../../sharedHelpers/newtypes");

var Btn = _interopRequireWildcard(require("../../core/Button/Button"));

var _IconButton = require("../../core/IconButton/IconButton");

var _Icons = require("../../icons/Icons");

var ReactTable = _interopRequireWildcard(require("../../../visualComponents/dataTable/ReactTable"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RowLevelLine = _exports.styled.div`
  border-right: 1px solid ${props => props.theme.v2.FoundationPinch};
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  margin-right: 12px;
  width: 11px;
`;
const RowLevelLinesContainer = _exports.styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  user-select: none;
  margin-left: -16px;
`;
const ExpandCollapseBtn = (0, _exports.styled)(_IconButton.IconButton).attrs({
  display: Btn.DISPLAY.Chromeless
})`
  display: inline-flex;
  margin-right: 4px;

  & i {
    margin: 0;
  }
`;
const ExpandCollapseBtnPlaceholder = _exports.styled.div`
  display: inline-flex;
  min-height: 24px;
  min-width: 24px;
  margin-right: 4px;
  overflow: auto;
`;
const TrGroupComponent = _exports.styled.div`
  display: flex;
  position: relative;
  /* box-sizing: border-box; */

  &:focus,
  & [role='gridcell']:focus {
    outline: 2px solid ${props => props.theme.v2.ActionDollop};
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px #0c3d99;
  }

  &:hover {
    background-color: ${props => props.theme.v2.ActionSmidgen};
  }

  &:hover::before {
    background-color: ${props => props.theme.v2.ActionDollop};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    pointer-events: none;
    width: 4px;
  }

  &[aria-selected='true']::before {
    background-color: ${props => props.theme.v2.ActionPrimary};
    content: ' ';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    pointer-events: none;
    width: 4px;
  }
`;
const OldThComponent = ReactTable.MonorailReactTableOverrides.ThComponent;
const ThComponentContainer = (0, _exports.styled)(props => /*#__PURE__*/_react.default.createElement(OldThComponent, props))`
  &&:first-of-type {
    padding-left: 16px;

    & > * {
      margin-left: 8px;
    }
  }
  && {
    padding: 0 12px;
  }
  &&:last-of-type {
    padding-right: ${props => props.scrollbarWidth + 16}px;
  }

  & * {
    padding: 0;
  }
`;

const ThComponent = props => {
  const [scrollbarWidth, setScrollbarWidth] = _react.default.useState(0);

  _react.default.useLayoutEffect(() => {
    // thanks too https://davidwalsh.name/detect-scrollbar-width
    const scrollDiv = document.createElement('div');
    scrollDiv.setAttribute('style', 'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;');
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    setScrollbarWidth(scrollbarWidth);
  }, []);

  return /*#__PURE__*/_react.default.createElement(ThComponentContainer, _extends({
    scrollbarWidth: scrollbarWidth
  }, props));
};

function forestToNodeRenderProps(params) {
  const go = ({
    trees,
    ancestors,
    expandedNodes
  }) => {
    return (0, _fpTsImports.pipe)(trees, _fpTsImports.A.chainWithIndex((ix, node) => {
      const ordinalPosition = ix + 1;

      const nextAncestors = _fpTsImports.NEA.snoc(ancestors, {
        ordinalPosition,
        node
      });

      const isVisible = (0, _fpTsImports.pipe)(ancestors, _fpTsImports.A.foldMap(_fpTsImports.Mn.monoidAll)(ancestor => {
        return expandedNodes.has(ancestor.node.value.key);
      }));
      return (0, _fpTsImports.pipe)(go({
        trees: node.forest,
        ancestors: nextAncestors,
        expandedNodes
      }), _fpTsImports.A.cons(isVisible ? _fpTsImports.O.some({
        key: node.value.key,
        value: node.value.value,
        children: node.forest,
        ordinalPosition,
        ancestors,
        isExpanded: expandedNodes.has(node.value.key)
      }) : _fpTsImports.O.none));
    }));
  };

  return _fpTsImports.A.compact(go(params));
}

/**
 * Since `VirtualizedTBodyRow` needs to be passed to `FixedSizeList`
 * as a stable component reference, we can't pass in dependencies on props,
 * so we're using React Context to work around that.
 */
const VirtualizedTBodyRowContext = /*#__PURE__*/_react.default.createContext({
  forest: [],
  rows: [],
  items: []
});
/**
 * VirtualizedTBodyRow needs to be defined at the module level so that the
 * reference to the component isn't changed each render, otherwise keyboard
 * navigation won't work properly in the TreeGrid because element focus
 * is lost each render.
 */


function VirtualizedTBodyRow({
  index,
  style
}) {
  const {
    forest,
    rows,
    items,
    getRowAttrs
  } = _react.default.useContext(VirtualizedTBodyRowContext);

  return (0, _fpTsImports.pipe)(_fpTsImports.Ap.sequenceT(_fpTsImports.O.option)(_fpTsImports.A.lookup(index)(rows), _fpTsImports.A.lookup(index)(items)), _fpTsImports.O.fold(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), ([node, nodeJsx]) => {
    var _getRowAttrs, _extraAttrs$style;

    const extraAttrs = (_getRowAttrs = getRowAttrs === null || getRowAttrs === void 0 ? void 0 : getRowAttrs(node)) !== null && _getRowAttrs !== void 0 ? _getRowAttrs : {};
    const level = node.ancestors.length + 1;
    const setSize = (0, _fpTsImports.pipe)(_fpTsImports.A.last(node.ancestors), _fpTsImports.O.map(({
      node
    }) => node.forest.length), // no ancestors = top-level node
    _fpTsImports.O.getOrElse(() => forest.length));
    return /*#__PURE__*/_react.default.cloneElement(nodeJsx, { ...extraAttrs,
      'aria-level': level,
      'aria-posinset': node.ordinalPosition,
      'aria-setsize': setSize,
      ...(_fpTsImports.A.isEmpty(node.children) ? {} : {
        'aria-expanded': node.isExpanded
      }),
      role: 'row',
      style: {
        minHeight: 'unset',
        ...((_extraAttrs$style = extraAttrs.style) !== null && _extraAttrs$style !== void 0 ? _extraAttrs$style : {}),
        ...style
      },
      tabIndex: 0
    });
  }));
}

/**
 * Adapted from '@monorail/visualComponents/dataTable/ReactTableComponents/TbodyComponent/TBodyVirtualList'
 */
function VirtualizedTBody(props) {
  const {
    content,
    forest,
    rowHeight,
    children,
    getRowAttrs,
    ...restProps
  } = props;
  return (0, _fpTsImports.pipe)(children, _fpTsImports.A.head, _fpTsImports.O.fold(() => (0, _fpTsImports.pipe)(content, _fpTsImports.E.fold(_fpTsImports.identity, (0, _fpTsImports.constant)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)))), items => {
    return (0, _fpTsImports.pipe)(content, _fpTsImports.E.fold(_fpTsImports.identity, rows => {
      return /*#__PURE__*/_react.default.createElement(VirtualizedTBodyRowContext.Provider, {
        value: {
          forest,
          rows,
          items,
          getRowAttrs: getRowAttrs
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactVirtualized.AutoSizer, {
        style: {
          margin: 0,
          padding: 0
        }
      }, ({
        width,
        height
      }) => {
        return /*#__PURE__*/_react.default.createElement(RW.FixedSizeList, _extends({}, restProps, {
          style: {
            outline: 'none',
            willChange: 'unset',
            overflowX: 'hidden',
            overflowY: 'scroll',
            ...restProps.style
          },
          width: width,
          height: height,
          itemSize: rowHeight,
          itemCount: rows.length,
          itemKey: ix => (0, _fpTsImports.pipe)(_fpTsImports.A.lookup(ix)(rows), _fpTsImports.O.fold(() => String(ix), row => (0, _newtypes.coerce)(row.key))),
          overscanCount: 5
        }), VirtualizedTBodyRow);
      })));
    }));
  }));
}

const StyledGridCell = _exports.styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;
/**
 * `GridCell` needs to be a stable reference in order for keyboard
 * navigation to work properly in the TreeGrid, otherwise element focus
 * interactions don't work properly.
 */

function GridCell(cell) {
  const {
    col,
    columns,
    handleNodeCollapsed,
    handleNodeExpanded
  } = cell.columnProps.rest;
  const node = cell.original;
  const nodeKey = node.key;
  const level = node.ancestors.length + 1;
  const [fstCol] = columns;
  const isFirstColumn = fstCol.id === cell.column.id;
  return /*#__PURE__*/_react.default.createElement(StyledGridCell, null, isFirstColumn ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(RowLevelLinesContainer, null, _fpTsImports.A.unfold(level, levelsRemaining => levelsRemaining <= 0 ? _fpTsImports.O.none : _fpTsImports.O.some([/*#__PURE__*/_react.default.createElement(RowLevelLine, {
    key: levelsRemaining
  }), levelsRemaining - 1]))), _fpTsImports.A.isEmpty(node.children) ? /*#__PURE__*/_react.default.createElement(ExpandCollapseBtnPlaceholder, null) : /*#__PURE__*/_react.default.createElement(ExpandCollapseBtn, {
    "aria-label": node.isExpanded ? 'Collapse' : 'Expand',
    title: node.isExpanded ? 'Collapse' : 'Expand',
    onClick: node.isExpanded ? handleNodeCollapsed(nodeKey) : handleNodeExpanded(nodeKey)
  }, node.isExpanded ? /*#__PURE__*/_react.default.createElement(_Icons.ArrowDropDown, null) : /*#__PURE__*/_react.default.createElement(_Icons.ArrowRight, null))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(_exports.Text, {
    fontWeight: _exports.FontWeights.Book,
    noWrap: true
  }, col.renderCell(node)));
}

/**
 * Displays a list of trees as table/datagrid with rows that can expand/collapse
 * if they have child rows. Rows are "windowed" or "virtualized" to help large
 * data sets render performantly.
 *
 * **Note: you must wrap this component in a parent element with a bounded
 * **height, otherwise the rows will not render**
 *
 * A TreeGrid essentially consists of the following DOM structure:
 *
 * ```
 * treegrid
 *   row
 *     columnheader
 *     columnheader
 *     ...
 *   row
 *     gridcell
 *     gridcell
 *     ...
 *   row
 *     gridcell
 *     ...
 *   ...
 * ```
 *
 * All rows are siblings in the DOM, even though some rows are parent nodes,
 * some are child nodes, and some are both. The hierarchical relationship
 * is visually represented by the order and indentation of rows, and
 * programmatically represented in the DOM  via the ARIA attributes
 * `aria-expanded`, `aria-level`, `aria-setsize`, and `aria-posinset`.
 *
 * For more info, see the WAI-Aria guide for "treegrid" components:
 * https://www.w3.org/TR/wai-aria-practices-1.1/#treegrid
 */
function TreeGrid(props) {
  const {
    columns,
    content,
    expandCollapse = {
      tag: 'Uncontrolled'
    }
  } = props;
  const forest = (0, _fpTsImports.pipe)(content, _fpTsImports.E.getOrElse(() => _fpTsImports.A.empty));

  const eqKeyT = _react.default.useMemo(() => Newtype.getEq(_fpTsImports.Eq.eqString), []);

  const [expandedNodes_, setExpandedNodes_] = _react.default.useState(_fpTsImports.RS.empty);

  const expandedNodes = expandCollapse.tag === 'Uncontrolled' ? expandedNodes_ : expandCollapse.expandedNodes;

  const rows = _react.default.useMemo(() => forestToNodeRenderProps({
    trees: forest,
    ancestors: _fpTsImports.A.empty,
    expandedNodes
  }), [expandedNodes, forest]);

  const columnsMemoized = _react.default.useMemo(() => {
    function handleNodeExpanded(key) {
      return () => expandCollapse.tag === 'Uncontrolled' ? setExpandedNodes_((0, _fpTsImports.pipe)(expandedNodes_, _fpTsImports.RS.insert(eqKeyT)(key))) : expandCollapse.onExpand(key);
    }

    function handleNodeCollapsed(key) {
      return () => expandCollapse.tag === 'Uncontrolled' ? setExpandedNodes_((0, _fpTsImports.pipe)(expandedNodes_, _fpTsImports.RS.remove(eqKeyT)(key))) : expandCollapse.onCollapse(key);
    }

    return columns.map(col => {
      var _col$minWidth;

      return {
        id: col.id,
        sortable: false,
        filterable: false,
        minWidth: (_col$minWidth = col.minWidth) !== null && _col$minWidth !== void 0 ? _col$minWidth : 100,
        maxWidth: col.maxWidth,
        width: col.width,
        getProps: () => ({
          col,
          columns,
          handleNodeExpanded,
          handleNodeCollapsed
        }),

        Header(cellInfo) {
          var _col$renderHeader, _col$renderHeader2;

          return (_col$renderHeader = (_col$renderHeader2 = col.renderHeader) === null || _col$renderHeader2 === void 0 ? void 0 : _col$renderHeader2.call(col, cellInfo.data)) !== null && _col$renderHeader !== void 0 ? _col$renderHeader : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
        },

        Cell: GridCell
      };
    });
  }, [columns, eqKeyT, expandedNodes_, expandCollapse]);

  return /*#__PURE__*/_react.default.createElement(ReactTable.ReactTable, {
    data: rows,
    pageSize: rows.length,
    columns: columnsMemoized,
    TbodyComponent: VirtualizedTBody,
    ThComponent: ThComponent,
    TrGroupComponent: TrGroupComponent,
    NoDataComponent: () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null),
    getTbodyProps: () => {
      var _props$rowHeightInPx;

      return {
        content: (0, _fpTsImports.pipe)(content, _fpTsImports.E.map((0, _fpTsImports.constant)(rows))),
        forest,
        rowHeight: (_props$rowHeightInPx = props.rowHeightInPx) !== null && _props$rowHeightInPx !== void 0 ? _props$rowHeightInPx : 32,
        getRowAttrs: props.getRowAttrs
      };
    },
    getTdProps: (finalState, rowInfo, column, table) => {
      var _ref, _ReactTable$MonorailR, _ReactTable$MonorailR2;

      const htmlId = `${column.id}-${(0, _newtypes.coerce)(rowInfo.original.key)}`;
      const extraAttrs = (0, _fpTsImports.pipe)(columns, _fpTsImports.A.findFirst(col => col.id === column.id), _fpTsImports.O.fold((0, _fpTsImports.constant)({}), col => {
        var _col$getGridCellAttrs, _col$getGridCellAttrs2;

        return (_col$getGridCellAttrs = (_col$getGridCellAttrs2 = col.getGridCellAttrs) === null || _col$getGridCellAttrs2 === void 0 ? void 0 : _col$getGridCellAttrs2.call(col, {
          row: rowInfo.original
        })) !== null && _col$getGridCellAttrs !== void 0 ? _col$getGridCellAttrs : {};
      }));
      return { ...((_ref = (_ReactTable$MonorailR = (_ReactTable$MonorailR2 = ReactTable.MonorailReactTableOverrides).getTdProps) === null || _ReactTable$MonorailR === void 0 ? void 0 : _ReactTable$MonorailR.call(_ReactTable$MonorailR2, finalState, rowInfo, column, table)) !== null && _ref !== void 0 ? _ref : {}),
        id: htmlId,
        role: 'gridcell',
        tabIndex: 0,
        ...extraAttrs
      };
    },
    getTheadThProps: (...args) => {
      var _ReactTable$MonorailR3, _ReactTable$MonorailR4, _ReactTable$MonorailR5, _column$id;

      const [,, column] = args;
      const extraAttrs = (0, _fpTsImports.pipe)(columns, _fpTsImports.A.findFirst(col => col.id === (column === null || column === void 0 ? void 0 : column.id)), _fpTsImports.O.fold((0, _fpTsImports.constant)({}), col => {
        var _col$getColumnHeaderA, _col$getColumnHeaderA2;

        return (_col$getColumnHeaderA = (_col$getColumnHeaderA2 = col.getColumnHeaderAttrs) === null || _col$getColumnHeaderA2 === void 0 ? void 0 : _col$getColumnHeaderA2.call(col, {
          rows
        })) !== null && _col$getColumnHeaderA !== void 0 ? _col$getColumnHeaderA : {};
      }));
      return { ...((_ReactTable$MonorailR3 = (_ReactTable$MonorailR4 = (_ReactTable$MonorailR5 = ReactTable.MonorailReactTableOverrides).getTheadThProps) === null || _ReactTable$MonorailR4 === void 0 ? void 0 : _ReactTable$MonorailR4.call(_ReactTable$MonorailR5, ...args)) !== null && _ReactTable$MonorailR3 !== void 0 ? _ReactTable$MonorailR3 : {}),
        ...extraAttrs,
        id: (_column$id = column === null || column === void 0 ? void 0 : column.id) !== null && _column$id !== void 0 ? _column$id : '',
        role: 'columnheader'
      };
    },
    getTableProps: (...args) => {
      var _props$getTreeGridAtt, _props$getTreeGridAtt2, _ReactTable$MonorailR6, _ReactTable$MonorailR7, _ReactTable$MonorailR8;

      const extraAttrs = (_props$getTreeGridAtt = (_props$getTreeGridAtt2 = props.getTreeGridAttrs) === null || _props$getTreeGridAtt2 === void 0 ? void 0 : _props$getTreeGridAtt2.call(props)) !== null && _props$getTreeGridAtt !== void 0 ? _props$getTreeGridAtt : {};
      return { ...((_ReactTable$MonorailR6 = (_ReactTable$MonorailR7 = (_ReactTable$MonorailR8 = ReactTable.MonorailReactTableOverrides).getTableProps) === null || _ReactTable$MonorailR7 === void 0 ? void 0 : _ReactTable$MonorailR7.call(_ReactTable$MonorailR8, ...args)) !== null && _ReactTable$MonorailR6 !== void 0 ? _ReactTable$MonorailR6 : {}),
        ...extraAttrs,
        role: 'treegrid',
        ...(props.ariaLabel.tag === 'label' ? {
          'aria-label': props.ariaLabel.value
        } : {
          'aria-labelledby': props.ariaLabel.elementIds.join(' ')
        })
      };
    },
    getTheadProps: (...args) => {
      var _ReactTable$MonorailR9, _ReactTable$MonorailR10, _ReactTable$MonorailR11;

      return { ...((_ReactTable$MonorailR9 = (_ReactTable$MonorailR10 = (_ReactTable$MonorailR11 = ReactTable.MonorailReactTableOverrides).getTheadProps) === null || _ReactTable$MonorailR10 === void 0 ? void 0 : _ReactTable$MonorailR10.call(_ReactTable$MonorailR11, ...args)) !== null && _ReactTable$MonorailR9 !== void 0 ? _ReactTable$MonorailR9 : {}),
        role: 'row'
      };
    }
  });
}