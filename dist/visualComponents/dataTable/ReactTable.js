"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TableComponent: true,
  TheadComponentContainer: true,
  TheadComponent: true,
  Sort: true,
  getSortIcon: true,
  useSort: true,
  ThSortButton: true,
  ThComponent: true,
  FilterComponent: true,
  ResizerComponent: true,
  TrGroupComponent: true,
  TdComponentContainer: true,
  TdComponent: true,
  TBodyComponent: true,
  NoDataContainer: true,
  NoDataComponentVertical: true,
  NoDataComponentHorizontal: true,
  ExpanderComponent: true,
  EllipsisValueComponent: true,
  LoadingWrapper: true,
  MonorailReactTableOverrides: true,
  useTableExpandState: true,
  useTableExpandStateFixedGroups: true,
  ReactTable: true
};
exports.useSort = useSort;
exports.useTableExpandState = useTableExpandState;
exports.useTableExpandStateFixedGroups = useTableExpandStateFixedGroups;
Object.defineProperty(exports, "ReactTable", {
  enumerable: true,
  get: function () {
    return _reactTable.default;
  }
});
exports.MonorailReactTableOverrides = exports.LoadingWrapper = exports.EllipsisValueComponent = exports.ExpanderComponent = exports.NoDataComponentHorizontal = exports.NoDataComponentVertical = exports.NoDataContainer = exports.TBodyComponent = exports.TdComponent = exports.TdComponentContainer = exports.TrGroupComponent = exports.ResizerComponent = exports.FilterComponent = exports.ThComponent = exports.ThSortButton = exports.getSortIcon = exports.Sort = exports.TheadComponent = exports.TheadComponentContainer = exports.TableComponent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _reactTable = _interopRequireWildcard(require("react-table"));

Object.keys(_reactTable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _reactTable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactTable[key];
    }
  });
});

var _util = require("util");

var _Array = require("fp-ts/lib/Array");

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _Show = require("fp-ts/lib/Show");

var _Do = require("fp-ts-contrib/lib/Do");

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typography = require("../../helpers/typography");

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _PopOverNext = require("../../metaComponents/popOver/PopOverNext");

var _Ord = require("../../sharedHelpers/fp-ts-ext/Ord");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _DataStates = require("../dataStates/DataStates");

var _Icon = require("../icon/Icon");

var _TextField = require("../inputs/TextField");

var _ScrollAnimation = require("../layout/ScrollAnimation");

var _Menu = require("../menu/Menu");

var _Status = require("../status/Status");

var _Loading = require("../loading/Loading");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const THEAD_HEIGHT = _size.Sizes.DP40;
const TD_HEIGHT = _size.Sizes.DP40;
const TableComponent = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};

  overflow-x: hidden;
  height: 100%;
  min-width: 100%;
  position: relative; /* pos:rel need for filter bar. */
`;
exports.TableComponent = TableComponent;

const TheadComponentContainer = _styledComponents2.default.div(({
  isFilterBar,
  isGroupBar
}) => (0, _styledComponents2.css)`
    ${(0, _flex.flexFlow)('row')};

    flex-shrink: 0;
    height: ${THEAD_HEIGHT}px;
    position: relative;

    ${isFilterBar ? (0, _styledComponents2.css)`
          left: 0;
          pointer-events: none;
          position: absolute;
          right: 0;
          top: 0;
        ` : (0, _styledComponents2.css)`
          background: ${(0, _color.getColor)(_color.Colors.Grey99)};
          overflow: hidden;

          ${!isGroupBar && (0, _styledComponents2.css)`
              &::after {
                background: ${(0, _color.getColor)(_color.Colors.Grey90)};
                bottom: 0;
                content: '';
                height: 1px;
                left: 0;
                position: absolute;
                right: 0;
              }
            `};
        `};
  `);

exports.TheadComponentContainer = TheadComponentContainer;

const TheadComponent = ({
  children,
  className,
  ...domProps
}) => {
  return /*#__PURE__*/_react.default.createElement(TheadComponentContainer, _extends({
    isFilterBar: className === '-filters',
    isGroupBar: className === '-headerGroups',
    className: className
  }, domProps), children);
};

exports.TheadComponent = TheadComponent;

const ThComponentContainer = _styledComponents2.default.div(({
  filterable,
  theme: {
    size: {
      table: {
        margin
      }
    }
  }
}) => (0, _styledComponents2.css)`
    padding: 0 ${filterable ? 34 : 6}px 0 6px;

    ${(0, _flex.flexFlow)('row')};
    ${(0, _typography.typographyFont)(500, _typography.FontSizes.Title5)};

    pointer-events: none;
    align-items: center;
    color: ${(0, _color.getColor)(_color.Colors.Black89a)};
    position: relative;

    .rt-resizable-header-content {
      ${_typography.ellipsis};
    }

    &:first-of-type {
      padding-left: ${margin - 6}px;
    }

    &:last-of-type {
      padding-right: ${margin + 22}px;
    }

    .rt-resizable-header-content {
      ${_typography.ellipsis};
    }
  `);

let Sort;
exports.Sort = Sort;

(function (Sort) {
  Sort["Ascending"] = "ascending";
  Sort["Descending"] = "descending";
  Sort["Unsorted"] = "unsorted";
})(Sort || (exports.Sort = Sort = {}));

const getSortStatus = className => {
  if (className.includes('-sort-desc')) {
    return Sort.Descending;
  } else if (className.includes('-sort-asc')) {
    return Sort.Ascending;
  } else {
    return Sort.Unsorted;
  }
};

const getSortIcon = sortStatus => {
  switch (sortStatus) {
    case Sort.Ascending:
      return 'sort_ascending';

    case Sort.Descending:
      return 'sort_descending';

    case Sort.Unsorted:
      return 'sort';

    default:
      (0, _typeGuards.assertNever)(sortStatus);
      return '';
  }
};

exports.getSortIcon = getSortIcon;

function useSort(defaultSorted = []) {
  const [sorted, setSorted] = (0, _react.useState)(defaultSorted);

  const onSortChange = newSorted => {
    setSorted((0, _function.pipe)((0, _function.pipe)((0, _Do.Do)(O.option).bind('current', (0, _Array.lookup)(0, sorted)).bind('upcoming', (0, _Array.lookup)(0, newSorted)).done(), O.filter(({
      current,
      upcoming
    }) => current.id === upcoming.id && current.desc)), O.fold(() => newSorted, () => [])));
  };

  return [sorted, onSortChange];
}

const ThLabel = _styledComponents2.default.div`
  ${(0, _typography.typographyFont)(700, _typography.FontSizes.Title5)};

  color: ${(0, _color.getColor)(_color.Colors.Black89a)};
  font-weight: 500;
  justify-content: space-between;
  padding-left: 6px;
  pointer-events: all;
  text-transform: none;
  width: 100%;
`;
const ThSortButton = (0, _styledComponents2.default)(_Button.Button).attrs({
  display: _buttonTypes.ButtonDisplay.Chromeless,
  size: _buttonTypes.ButtonSize.Compact
})`
  color: ${(0, _color.getColor)(_color.Colors.Black89a)};
  font-weight: 500;
  justify-content: space-between;
  padding-left: 6px;
  pointer-events: all;
  text-transform: none;
  width: 100%;

  ${_Icon.Icon} {
    margin-right: -4px;
    margin-left: 2px;
  }
`;
exports.ThSortButton = ThSortButton;

var _StyledThSortButton = /*#__PURE__*/(0, _styledComponents.default)(ThSortButton).withConfig({
  displayName: "ReactTable___StyledThSortButton",
  componentId: "sc-1afopvo-0"
})(["visibility:hidden;"]);

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "ReactTable___StyledIconButton",
  componentId: "sc-1afopvo-1"
})(["margin:auto -24px auto auto;pointer-events:all;transform:translateX(4px);"]);

const ThComponent = props => {
  const {
    children,
    className,
    column,
    isExpanderColumn,
    isFiltered,
    show,
    isGroup,
    toggleSort,
    ...domProps
  } = props;
  const sortStatus = getSortStatus(className);
  const isFilterable = (0, _typeGuards.isNotNil)(column) && !(0, _typeGuards.isFalse)(column.filterable);
  const isSortable = (0, _typeGuards.isNotNil)(column) && !(0, _typeGuards.isFalse)(column.sortable);

  if (!show) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  if (isExpanderColumn) {
    return /*#__PURE__*/_react.default.createElement(ThComponentContainer, _extends({
      className: className
    }, domProps, {
      style: {
        width: 52,
        flexShrink: 0
      }
    }));
  }

  if (isGroup) {
    return /*#__PURE__*/_react.default.createElement(ThComponentContainer, _extends({
      className: className
    }, domProps), children);
  } // Render empty header if there are actions.


  if (className.includes('actions')) {
    return /*#__PURE__*/_react.default.createElement(ThComponentContainer, _extends({
      className: className
    }, domProps));
  } // Render Filter Header


  if (!(0, _typeGuards.isUndefined)(isFiltered) && (0, _typeGuards.isNotNil)(column)) {
    return /*#__PURE__*/_react.default.createElement(ThComponentContainer, _extends({
      className: className,
      filterable: isFilterable
    }, domProps), isFilterable && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_StyledThSortButton, {
      iconRight: "sort"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "rt-resizable-header-content"
    }, column && column.Header)), /*#__PURE__*/_react.default.createElement(_PopOverNext.PopOverNext, {
      toSide: false,
      xDirection: _PopOver.dropDirections.Right,
      popOver: popOverProps => popOverProps.isOpen ? /*#__PURE__*/_react.default.createElement(_Menu.Menu, _extends({}, popOverProps, {
        width: popOverProps.position.originWidth
      }), children) : null,
      toggle: toggleProps => /*#__PURE__*/_react.default.createElement(_StyledIconButton, _extends({}, toggleProps, {
        display: _buttonTypes.ButtonDisplay.Chromeless,
        icon: "filter",
        isActive: isFiltered,
        className: isFiltered ? 'is-active' : ''
      }))
    })));
  }

  const childrenArray = _react.Children.toArray(children);

  const Header = childrenArray[0];
  const Resizer = childrenArray[1]; // Render Sorted Header

  return /*#__PURE__*/_react.default.createElement(ThComponentContainer, _extends({
    className: className,
    filterable: isFilterable
  }, domProps), isSortable ? /*#__PURE__*/_react.default.createElement(ThSortButton, {
    isActive: sortStatus !== Sort.Unsorted,
    onClick: toggleSort,
    iconRight: getSortIcon(sortStatus),
    className: sortStatus !== Sort.Unsorted ? 'is-active' : ''
  }, Header) : /*#__PURE__*/_react.default.createElement(ThLabel, null, Header), Resizer);
};

exports.ThComponent = ThComponent;

const FilterComponent = ({
  filter,
  onChange
}) => {
  const inputRef = _react.default.useRef(null);

  _react.default.useEffect(() => {
    setTimeout(() => {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    }, 0);
  }, []);

  return /*#__PURE__*/_react.default.createElement(_TextField.TextField, {
    ref: inputRef,
    placeholder: "Filter",
    value: !(0, _typeGuards.isNil)(filter) ? filter.value : '',
    onChange: event => onChange(event.target.value),
    cssOverrides: (0, _styledComponents2.css)`
        width: unset;
        padding: 8px 12px;
        visibility: visible;
      `,
    hideStdErr: true
  });
};

exports.FilterComponent = FilterComponent;
const ResizerComponent = _styledComponents2.default.div`
  bottom: 4px;
  cursor: col-resize;
  pointer-events: all;
  position: absolute;
  right: -4px;
  top: 4px;
  width: 9px;

  &::after {
    background: ${(0, _color.getColor)(_color.Colors.Grey94)};
    bottom: 0;
    content: '';
    left: 4px;
    position: absolute;
    top: 0;
    width: 1px;
  }
`;
exports.ResizerComponent = ResizerComponent;

const TrGroupComponent = _styledComponents2.default.div(({
  isGroup = false
}) => (0, _styledComponents2.css)`
    ${isGroup ? (0, _styledComponents2.css)`
          ${(0, _flex.flexFlow)('column')};
        ` : (0, _styledComponents2.css)`
          ${(0, _flex.flexFlow)('row')};
          height: auto;
          min-height: ${TD_HEIGHT}px;

          &:hover::before {
            background: ${(0, _color.getColor)(_color.Colors.Grey98)};
          }

          &:hover .actions ${_IconButton.StyledIconButton} {
            opacity: 0.9999;
          }

          &::before {
            bottom: 1px;
            content: '';
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
          }
        `};

    position: relative;
    flex-shrink: 0;
  `);

exports.TrGroupComponent = TrGroupComponent;
var TdComponentType;

(function (TdComponentType) {
  TdComponentType["Default"] = "default";
  TdComponentType["Actions"] = "actions";
  TdComponentType["Expandable"] = "expandable";
  TdComponentType["Hidden"] = "hidden";
})(TdComponentType || (TdComponentType = {}));

const tdComponentTypeStyles = {
  [TdComponentType.Default]: (0, _styledComponents2.css)``,
  [TdComponentType.Expandable]: (0, _styledComponents2.css)`
    height: ${TD_HEIGHT}px;
    background: #f6f6f9;
    cursor: pointer;
    user-select: none;
  `,
  [TdComponentType.Actions]: (0, _styledComponents2.css)`
    justify-content: flex-end;
  `,
  [TdComponentType.Hidden]: (0, _styledComponents2.css)``
};

const TdComponentContainer = _styledComponents2.default.div(({
  tdComponentType,
  theme: {
    size: {
      table: {
        margin
      }
    }
  }
}) => (0, _styledComponents2.css)`
    ${tdComponentTypeStyles[tdComponentType]}
    ${(0, _flex.flexFlow)('row')};
    ${(0, _typography.typographyFont)(400, _typography.FontSizes.Title5)};
    ${_typography.ellipsis};

    color: ${(0, _color.getColor)(_color.Colors.Black89a)};
    align-items: center;
    padding: 0 12px;
    position: relative;

    &:first-of-type {
      padding-left: ${margin}px;
    }

    &:last-of-type {
      padding-right: ${margin}px;
    }
  `);

exports.TdComponentContainer = TdComponentContainer;

const getTdComponentType = ({
  className
}) => {
  if (className.includes('actions')) {
    return TdComponentType.Actions;
  } else if (className.includes('rt-expandable')) {
    return TdComponentType.Expandable;
  } else if (className.includes('hidden')) {
    return TdComponentType.Hidden;
  } else {
    return TdComponentType.Default;
  }
};

const TdComponent = props => {
  const {
    className,
    style,
    isExpanderColumn,
    ...domProps
  } = props;

  const [titleText, setTitleText] = _react.default.useState('');

  const containerRef = _react.default.useRef(null);

  const tdComponentType = getTdComponentType({
    className
  });

  _react.default.useLayoutEffect(() => {
    if (containerRef.current) {
      setTitleText(containerRef.current.innerText);
    }
  }, []);

  if (tdComponentType === TdComponentType.Hidden) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  } else if (tdComponentType === TdComponentType.Expandable) {
    return /*#__PURE__*/_react.default.createElement(TdComponentContainer, _extends({
      ref: containerRef,
      className: className,
      tdComponentType: tdComponentType,
      title: titleText
    }, domProps));
  } else if (isExpanderColumn) {
    return /*#__PURE__*/_react.default.createElement(TdComponentContainer, _extends({
      ref: containerRef,
      className: className,
      style: {
        width: 54,
        flexShrink: 0
      },
      tdComponentType: tdComponentType,
      title: titleText
    }, domProps));
  }

  return /*#__PURE__*/_react.default.createElement(TdComponentContainer, _extends({
    ref: containerRef,
    className: className,
    style: style,
    tdComponentType: tdComponentType,
    title: titleText
  }, domProps));
};

exports.TdComponent = TdComponent;
const TBodyComponent = (0, _styledComponents2.default)(({
  style,
  ...domProps
}) => /*#__PURE__*/_react.default.createElement(_ScrollAnimation.ScrollAnimation, _extends({
  containerCssOverrides: style
}, domProps)))`
  overflow-x: hidden;
`;
exports.TBodyComponent = TBodyComponent;
const NoDataContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')};
  ${(0, _typography.typographyFont)(400, _typography.FontSizes.Title5)};

  align-items: center;
  background: ${(0, _color.getColor)(_color.Colors.White)};
  bottom: 0;
  color: ${(0, _color.getColor)(_color.Colors.Black62a)};
  justify-content: center;
  overflow: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: ${THEAD_HEIGHT}px;
`;
exports.NoDataContainer = NoDataContainer;

var _StyledNoDataContainer = /*#__PURE__*/(0, _styledComponents.default)(NoDataContainer).withConfig({
  displayName: "ReactTable___StyledNoDataContainer",
  componentId: "sc-1afopvo-2"
})(["flex-direction:row;justify-content:center;"]);

const BannerDetailContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};

  justify-content: center;
  margin-left: 16px;
`;

const NoDataComponentVertical = () => /*#__PURE__*/_react.default.createElement(NoDataContainer, null, /*#__PURE__*/_react.default.createElement(_DataStates.EmptyTable, null));

exports.NoDataComponentVertical = NoDataComponentVertical;

var _StyledBanner = /*#__PURE__*/(0, _styledComponents.default)(_DataStates.Banner).withConfig({
  displayName: "ReactTable___StyledBanner",
  componentId: "sc-1afopvo-3"
})(["margin:0 0 16px;"]);

const NoDataComponentHorizontal = () => /*#__PURE__*/_react.default.createElement(_StyledNoDataContainer, null, /*#__PURE__*/_react.default.createElement(_DataStates.IconBox, null, /*#__PURE__*/_react.default.createElement(_DataStates.NoResultsIcon, null)), /*#__PURE__*/_react.default.createElement(BannerDetailContainer, null, /*#__PURE__*/_react.default.createElement(_StyledBanner, null, "No Entries Found"), /*#__PURE__*/_react.default.createElement(_DataStates.Detail, null, "We couldn't find any records.")));

exports.NoDataComponentHorizontal = NoDataComponentHorizontal;

var _StyledIconButton2 = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "ReactTable___StyledIconButton2",
  componentId: "sc-1afopvo-4"
})(["margin-right:8px;transform:rotate(", ");"], p => p._css);

const ExpanderComponent = ({
  isExpanded
}) => /*#__PURE__*/_react.default.createElement(_StyledIconButton2, {
  icon: "arrow_drop_down",
  display: _buttonTypes.ButtonDisplay.Chromeless,
  _css: isExpanded ? 0 : '-90deg'
});

exports.ExpanderComponent = ExpanderComponent;

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "ReactTable___StyledDiv",
  componentId: "sc-1afopvo-5"
})(["", ""], _typography.ellipsis);

const EllipsisValueComponent = ({
  value
}) => {
  return /*#__PURE__*/_react.default.createElement(_StyledDiv, {
    title: (0, _typeGuards.isNumber)(value) ? _Show.showNumber.show(value) : value
  }, value);
};

exports.EllipsisValueComponent = EllipsisValueComponent;
const LoadingWrapperContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};

  align-items: center;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const LoadingWrapper = () => {
  return /*#__PURE__*/_react.default.createElement(LoadingWrapperContainer, null, /*#__PURE__*/_react.default.createElement(_Loading.Loading, {
    size: {
      _type: 'size',
      hw: 64
    }
  }));
};

exports.LoadingWrapper = LoadingWrapper;

var _StyledStatus = /*#__PURE__*/(0, _styledComponents.default)(_Status.Status).withConfig({
  displayName: "ReactTable___StyledStatus",
  componentId: "sc-1afopvo-6"
})(["margin-left:16px;"]);

const MonorailReactTableOverrides = { ..._reactTable.ReactTableDefaults,
  AggregatedComponent: props => {
    return null;
  },
  FilterComponent: props => /*#__PURE__*/_react.default.createElement(FilterComponent, props),
  LoadingComponent: ({
    loading
  }) => loading ? /*#__PURE__*/_react.default.createElement(NoDataContainer, null, /*#__PURE__*/_react.default.createElement(LoadingWrapper, null)) : null,
  ResizerComponent: props => /*#__PURE__*/_react.default.createElement(ResizerComponent, props),
  TableComponent: props => /*#__PURE__*/_react.default.createElement(TableComponent, props),
  TbodyComponent: props => /*#__PURE__*/_react.default.createElement(TBodyComponent, props),
  TdComponent: props => /*#__PURE__*/_react.default.createElement(TdComponent, props),
  ThComponent: props => /*#__PURE__*/_react.default.createElement(ThComponent, props),
  TheadComponent: props => /*#__PURE__*/_react.default.createElement(TheadComponent, props),
  TrComponent: ({
    children
  }) => children,
  TrGroupComponent: props => /*#__PURE__*/_react.default.createElement(TrGroupComponent, props),
  NoDataComponent: props => /*#__PURE__*/_react.default.createElement(NoDataComponentVertical, null),
  PivotComponent: (cellInfo, column) => {
    const Expander = cellInfo.column.Expander || ExpanderComponent;
    const PivotValue = cellInfo.column.PivotValue || EllipsisValueComponent;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Expander(cellInfo, column), PivotValue(cellInfo, column), (0, _typeGuards.isNotNil)(cellInfo.subRows) && /*#__PURE__*/_react.default.createElement(_StyledStatus, {
      inactive: true
    }, cellInfo.subRows.length));
  },
  getTrGroupProps: (finalState, rowInfo) => {
    if ((0, _typeGuards.isNil)(rowInfo)) {
      return {};
    }

    return {
      isGroup: rowInfo.groupedByPivot,
      item: rowInfo.original
    };
  },
  getTdProps: ({
    pivotBy = []
  }, rowInfo, column) => {
    const {
      id = ''
    } = column || {};
    return {
      isExpanderColumn: pivotBy.includes(id)
    };
  },
  getTheadFilterThProps: ({
    filtered,
    pivotBy = []
  }, rowInfo, column) => {
    const {
      id = ''
    } = column || {};
    return {
      isExpanderColumn: pivotBy.includes(id),
      show: (0, _typeGuards.isNil)(column) ? true : column.show,
      column,
      isFiltered: (0, _typeGuards.isNil)(filtered) || (0, _typeGuards.isNil)(column) ? false : !!filtered.find(filter => filter.id === column.id)
    };
  },
  getTheadGroupThProps: ({
    hasHeaderGroups
  }, rowInfo, column) => ({
    column,
    isGroup: hasHeaderGroups,
    show: hasHeaderGroups
  }),
  getTheadThProps: (finalState, rowInfo, column) => {
    const {
      pivotBy = []
    } = finalState;
    const {
      id = ''
    } = column || {};
    return {
      isExpanderColumn: pivotBy.includes(id),
      show: (0, _typeGuards.isNil)(column) ? true : column.show,
      column
    };
  },
  style: {
    height: '100%',
    width: '100%'
  },
  minRows: 0,
  showPagination: false,
  defaultFilterMethod: (filter, row) => {
    const id = filter.pivotId || filter.id;
    return (0, _typeGuards.isTrue)(row._groupedByPivot) || !(0, _typeGuards.isUndefined)(row[id]) && String(row[id]).toLocaleLowerCase().includes(filter.value.toLocaleString().toLocaleLowerCase());
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultSortMethod: (a, b) => (0, _util.isString)(a) && (0, _util.isString)(b) ? _Ord.ordStringByLocaleLowerCase.compare(a, b) : a > b ? 1 : b > a ? -1 : 0,
  sortable: true,
  filterable: true,
  resizable: true,
  loading: false,
  multiSort: false
};
exports.MonorailReactTableOverrides = MonorailReactTableOverrides;

function useTableExpandState({
  data,
  pivotKey,
  defaultExpanded = true
}) {
  const initialValues = data.reduce((accumulator, item) => {
    const pivotValue = item[pivotKey];

    if ((0, _typeGuards.isNotNil)(pivotValue) && !accumulator.includes(pivotValue)) {
      return accumulator.concat(pivotValue);
    }

    return accumulator;
  }, []).map(() => defaultExpanded);
  const [expanderState, setExpanderState] = (0, _react.useState)(initialValues);
  return {
    expanded: expanderState,
    onExpandedChange: expanded => setExpanderState(expanded) // tslint:disable-line:no-unsafe-any

  };
}

function useTableExpandStateFixedGroups({
  totalGroups
}) {
  const initialValues = new Array(totalGroups).fill(true);
  const [expanderState, setExpanderState] = (0, _react.useState)(initialValues);
  return {
    expanded: expanderState,
    onExpandedChange: expanded => setExpanderState(expanded) // tslint:disable-line:no-unsafe-any

  };
}

/** Setting up default components for `ReactTable` to use so that we don't have
 * to set them on every table. */
Object.assign(_reactTable.ReactTableDefaults, { ...MonorailReactTableOverrides
});