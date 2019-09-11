"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSort = useSort;
exports.MonorailReactTableOverrides = exports.NoDataContainer = exports.TBodyComponent = exports.TdComponent = exports.TrGroupComponent = exports.ResizerComponent = exports.FilterComponent = exports.ThComponent = exports.TheadComponent = exports.TheadComponentContainer = exports.TableComponent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Do = require("fp-ts-contrib/lib/Do");

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireWildcard(require("react"));

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typography = require("../../helpers/typography");

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _PopOverNext = require("../../metaComponents/popOver/PopOverNext");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _DataStates = require("../dataStates/DataStates");

var _Icon = require("../icon/Icon");

var _TextField = require("../inputs/TextField");

var _ScrollAnimation = require("../layout/ScrollAnimation");

var _Menu = require("../menu/Menu");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const THEAD_HEIGHT = _size.Sizes.DP40;
const TableComponent = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};

  overflow-x: scroll;
  height: 100%;
  min-width: 100%;
  position: relative; /* pos:rel need for filter bar. */
`;
exports.TableComponent = TableComponent;

const TheadComponentContainer = _styledComponents2.default.div(({
  isFilterBar
}) => _styledComponents2.css`
    ${(0, _flex.flexFlow)('row')};

    flex-shrink: 0;
    height: ${THEAD_HEIGHT}px;
    position: relative;

    ${isFilterBar ? _styledComponents2.css`
          left: 0;
          pointer-events: none;
          position: absolute;
          right: 0;
          top: 0;
        ` : _styledComponents2.css`
          background: ${(0, _color.getColor)(_color.Colors.Grey99)};
          overflow: hidden;

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
  `);

exports.TheadComponentContainer = TheadComponentContainer;

const TheadComponent = ({
  children,
  className,
  hasFilter,
  ...domProps
}) => {
  return _react.default.createElement(TheadComponentContainer, _extends({
    isFilterBar: className === '-filters',
    className: className
  }, domProps), children);
};

exports.TheadComponent = TheadComponent;
var ThComponentType;

(function (ThComponentType) {
  ThComponentType["Action"] = "actions";
  ThComponentType["Filter"] = "filter";
  ThComponentType["Sort"] = "sort";
})(ThComponentType || (ThComponentType = {}));

const ThComponentContainer = _styledComponents2.default.div(({
  type,
  filterable
}) => _styledComponents2.css`
    padding: 0 ${filterable ? 34 : 6}px 0 6px;

    ${(0, _flex.flexFlow)('row')};
    ${(0, _typography.typography)(500, _typography.FontSizes.Title5)};

    pointer-events: none;
    align-items: center;
    color: ${(0, _color.getColor)(_color.Colors.Black89)};
    position: relative;

    .rt-resizable-header-content {
      ${_typography.ellipsis};
    }

    &:first-of-type {
      padding-left: 26px;
    }

    &:last-of-type {
      padding-right: 54px;
    }

    .rt-resizable-header-content {
      ${_typography.ellipsis};
    }
  `);

var Sort;

(function (Sort) {
  Sort["Ascending"] = "ascending";
  Sort["Descending"] = "descending";
  Sort["Unsorted"] = "unsorted";
})(Sort || (Sort = {}));

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

function useSort() {
  const [sorted, setSorted] = (0, _react.useState)([]);

  const onSortChange = newSorted => {
    setSorted((0, _Do.Do)(_Option.option).bind('current', (0, _Array.lookup)(0, sorted)).bind('upcoming', (0, _Array.lookup)(0, newSorted)).done().filter(({
      current,
      upcoming
    }) => current.id === upcoming.id && current.desc).fold(newSorted, () => []));
  };

  return [sorted, onSortChange];
}

const ThLabel = _styledComponents2.default.div`
  ${(0, _typography.typography)(700, _typography.FontSizes.Title5)};

  color: ${(0, _color.getColor)(_color.Colors.Black89)};
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
  color: ${(0, _color.getColor)(_color.Colors.Black89)};
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

var _StyledThSortButton =
/*#__PURE__*/
(0, _styledComponents.default)(ThSortButton).withConfig({
  displayName: "ReactTable___StyledThSortButton",
  componentId: "sc-1afopvo-0"
})(["width:auto;visibility:hidden;"]);

var _StyledIconButton =
/*#__PURE__*/
(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "ReactTable___StyledIconButton",
  componentId: "sc-1afopvo-1"
})(["margin:auto -24px auto auto;pointer-events:all;transform:translateX(4px);"]);

const ThComponent = ({
  children,
  toggleSort,
  className,
  column,
  isFiltered,
  ...domProps
}) => {
  const sortStatus = getSortStatus(className);
  const isFilterable = !(0, _typeGuards.isNil)(column) && !(0, _typeGuards.isFalse)(column.filterable);
  const isSortable = !(0, _typeGuards.isNil)(column) && !(0, _typeGuards.isFalse)(column.sortable); // Render empty header if there are actions.

  if (className.includes('actions')) {
    return _react.default.createElement(ThComponentContainer, _extends({
      type: ThComponentType.Action,
      className: className
    }, domProps));
  } // Render Filter Header


  if (!(0, _typeGuards.isUndefined)(isFiltered)) {
    return _react.default.createElement(ThComponentContainer, _extends({
      type: ThComponentType.Filter,
      className: className,
      filterable: isFilterable
    }, domProps), !(0, _typeGuards.isNil)(column) && isFilterable && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_StyledThSortButton, {
      iconRight: "sort"
    }, _react.default.createElement("div", {
      className: "rt-resizable-header-content"
    }, column.Header)), _react.default.createElement(_PopOverNext.PopOverNext, {
      xDirection: _PopOver.dropDirections.Right,
      popOver: props => _react.default.createElement(_Menu.Menu, _extends({}, props, {
        width: props.position.originWidth
      }), children),
      toggle: props => _react.default.createElement(_StyledIconButton, _extends({}, props, {
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

  return _react.default.createElement(ThComponentContainer, _extends({
    type: ThComponentType.Sort,
    className: className,
    filterable: isFilterable
  }, domProps), isSortable ? _react.default.createElement(ThSortButton, {
    isActive: sortStatus !== Sort.Unsorted,
    onClick: toggleSort,
    iconRight: getSortIcon(sortStatus),
    className: sortStatus !== Sort.Unsorted ? 'is-active' : ''
  }, Header) : _react.default.createElement(ThLabel, null, Header), Resizer);
};

exports.ThComponent = ThComponent;

const FilterComponent = ({
  filter,
  onChange
}) => {
  return _react.default.createElement(_TextField.TextField, {
    placeholder: "Filter",
    value: !(0, _typeGuards.isNil)(filter) ? filter.value : '',
    onChange: event => onChange(event.target.value),
    cssOverrides: _styledComponents2.css`
        width: 100%;
        padding: 8px 12px;
      `
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
const TrGroupComponent = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')};

  height: 40px;
  position: relative;
  flex-shrink: 0;

  &:hover::before {
    background: ${(0, _color.getColor)(_color.Colors.Grey98)};
  }
  &:hover .actions {
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
`;
exports.TrGroupComponent = TrGroupComponent;

const TdComponent = _styledComponents2.default.div(({
  className
}) => _styledComponents2.css`
    ${!(0, _typeGuards.isNil)(className) && className.includes('actions') && `justify-content: flex-end;
      opacity: 0.3;
      `}

    ${(0, _flex.flexFlow)('row')};
    ${(0, _typography.typography)(400, _typography.FontSizes.Title5)};

    ${_typography.ellipsis};

    color: ${(0, _color.getColor)(_color.Colors.Black89)};
    align-items: center;
    padding: 0 12px;
    position: relative;

    &:first-of-type {
      padding-left: 32px;
    }

    &:last-of-type {
      padding-right: 32px;
    }
  `);

exports.TdComponent = TdComponent;
const TBodyComponent = (0, _styledComponents2.default)(({
  style,
  ...domProps
}) => _react.default.createElement(_ScrollAnimation.ScrollAnimation, _extends({
  containerCssOverrides: style
}, domProps)))`
  overflow-x: hidden;
`;
exports.TBodyComponent = TBodyComponent;
const NoDataContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('column')};
  ${(0, _typography.typography)(400, _typography.FontSizes.Title5)};

  align-items: center;
  background: ${(0, _color.getColor)(_color.Colors.White)};
  bottom: 0;
  color: ${(0, _color.getColor)(_color.Colors.Black62)};
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: ${THEAD_HEIGHT}px;
`;
exports.NoDataContainer = NoDataContainer;
const MonorailReactTableOverrides = {
  FilterComponent: props => _react.default.createElement(FilterComponent, props),
  ResizerComponent: props => _react.default.createElement(ResizerComponent, props),
  TableComponent: props => _react.default.createElement(TableComponent, props),
  TbodyComponent: props => _react.default.createElement(TBodyComponent, props),
  TdComponent: props => _react.default.createElement(TdComponent, props),
  ThComponent: props => _react.default.createElement(ThComponent, props),
  TheadComponent: props => _react.default.createElement(TheadComponent, props),
  TrComponent: ({
    children
  }) => children,
  TrGroupComponent: props => _react.default.createElement(TrGroupComponent, props),
  NoDataComponent: props => _react.default.createElement(NoDataContainer, null, _react.default.createElement(_DataStates.EmptyTable, null)),
  getTheadThProps: (state, rowInfo, column) => ({
    column
  }),
  getTheadFilterThProps: ({
    filtered
  }, rowInfo, column) => {
    return {
      column,
      isFiltered: (0, _typeGuards.isNil)(filtered) || (0, _typeGuards.isNil)(column) ? false : !!filtered.find(filter => filter.id === column.id)
    };
  },
  style: {
    height: '100%',
    width: '100%'
  },
  minRows: 0,
  getTheadProps: () => ({
    hasFilter: true
  }),
  showPagination: false,
  defaultFilterMethod: (filter, row) => {
    const id = filter.pivotId || filter.id;
    return !(0, _typeGuards.isUndefined)(row[id]) && String(row[id]).toLocaleLowerCase().includes(filter.value.toLocaleString().toLocaleLowerCase());
  },
  filterable: true,
  resizable: true,
  loading: false,
  multiSort: false
};
exports.MonorailReactTableOverrides = MonorailReactTableOverrides;