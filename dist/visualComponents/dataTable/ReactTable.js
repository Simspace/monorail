"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSort = useSort;
exports.MonorailReactTableOverrides = exports.NoDataContainer = exports.TBodyComponent = exports.TdComponent = exports.TrGroupComponent = exports.ResizerComponent = exports.FilterComponent = exports.ThComponent = exports.TheadComponent = exports.TableComponent = void 0;

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

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _DataStates = require("../dataStates/DataStates");

var _TextField = require("../inputs/TextField");

var _ScrollAnimation = require("../layout/ScrollAnimation");

var _Menu = require("../menu/Menu");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const THEAD_HEIGHT = _size.Sizes.DP48;

const TableComponent =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "ReactTable__TableComponent",
  componentId: "sc-1afopvo-0"
})(["", ";overflow-x:scroll;height:100%;min-width:100%;"], (0, _flex.flexFlow)('column'));

exports.TableComponent = TableComponent;

const TheadComponentContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "ReactTable__TheadComponentContainer",
  componentId: "sc-1afopvo-1"
})(({
  isFilterBar
}) => (0, _styledComponents2.css)(["", ";height:", "px;flex-shrink:0;", ";"], (0, _flex.flexFlow)('row'), THEAD_HEIGHT, isFilterBar ? (0, _styledComponents2.css)(["margin-top:-", "px;pointer-events:none;"], THEAD_HEIGHT) : (0, _styledComponents2.css)(["border-bottom:1px solid ", ";background:", ";overflow:hidden;"], (0, _color.getColor)(_color.Colors.Grey90), (0, _color.getColor)(_color.Colors.Grey99))));

const TheadComponent = ({
  children,
  className,
  hasFilter,
  ...domProps
}) => {
  return _react.default.createElement(TheadComponentContainer, _extends({
    isFilterBar: className === '-filters'
  }, domProps), children);
};

exports.TheadComponent = TheadComponent;

const ThComponentContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "ReactTable__ThComponentContainer",
  componentId: "sc-1afopvo-2"
})(["", ";", ";align-items:center;color:", ";padding:0 12px;position:relative;&:first-of-type{padding-left:32px;}&:last-of-type{padding-right:32px;}.rt-resizable-header-content{", ";margin-right:32px;}"], (0, _flex.flexFlow)('row'), (0, _typography.typography)(500, _typography.FontSizes.Title5), (0, _color.getColor)(_color.Colors.Black89), _typography.ellipsis);

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

const ThComponent = ({
  children,
  toggleSort,
  className,
  column,
  isFiltered,
  ...domProps
}) => {
  const sortStatus = getSortStatus(className);

  if (className.includes('actions')) {
    return _react.default.createElement(ThComponentContainer, _extends({
      className: className
    }, domProps));
  }

  if (!(0, _typeGuards.isNil)(column)) {
    return _react.default.createElement(ThComponentContainer, _extends({
      className: className
    }, domProps), _react.default.createElement(_PopOver.PopOver, {
      popOver: props => _react.default.createElement(_Menu.Menu, _extends({}, props, {
        width: props.position.originWidth
      }), children),
      toggle: props => _react.default.createElement(_StyledButton, _extends({}, props, {
        size: _buttonTypes.ButtonSize.Large,
        display: _buttonTypes.ButtonDisplay.Chromeless
      }), _react.default.createElement(_StyledIconButton, {
        display: _buttonTypes.ButtonDisplay.Chromeless,
        icon: "filter",
        isActive: isFiltered,
        passedAs: "div"
      }))
    }));
  }

  return _react.default.createElement(ThComponentContainer, _extends({
    className: className
  }, domProps), children, _react.default.createElement(_StyledIconButton2, {
    isActive: sortStatus !== Sort.Unsorted,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    icon: getSortIcon(sortStatus),
    onClick: toggleSort
  }));
};

exports.ThComponent = ThComponent;

const FilterComponent = ({
  filter,
  onChange
}) => {
  return _react.default.createElement(_TextField.TextField, {
    type: "text",
    placeholder: "Filter",
    value: !(0, _typeGuards.isNil)(filter) ? filter.value : '',
    onChange: event => onChange(event.target.value),
    cssOverrides: (0, _styledComponents2.css)(["width:100%;padding:8px 12px;"])
  });
};

exports.FilterComponent = FilterComponent;

const ResizerComponent =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "ReactTable__ResizerComponent",
  componentId: "sc-1afopvo-3"
})(["bottom:4px;cursor:col-resize;position:absolute;right:-4px;top:4px;width:9px;&::after{background:", ";bottom:0;content:'';left:4px;position:absolute;top:0;width:1px;}"], (0, _color.getColor)(_color.Colors.Grey94));

exports.ResizerComponent = ResizerComponent;

const TrGroupComponent =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "ReactTable__TrGroupComponent",
  componentId: "sc-1afopvo-4"
})(["", ";height:40px;position:relative;flex-shrink:0;&:hover::before{background:", ";}&:hover .actions{opacity:0.9999;}&::before{bottom:1px;content:'';left:0;position:absolute;right:0;top:0;}"], (0, _flex.flexFlow)('row'), (0, _color.getColor)(_color.Colors.Grey98));

exports.TrGroupComponent = TrGroupComponent;

const TdComponent =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "ReactTable__TdComponent",
  componentId: "sc-1afopvo-5"
})(({
  className
}) => (0, _styledComponents2.css)(["", " ", ";", ";", ";color:", ";align-items:center;padding:0 12px;position:relative;&:first-of-type{padding-left:32px;}&:last-of-type{padding-right:32px;}"], !(0, _typeGuards.isNil)(className) && className.includes('actions') && `justify-content: flex-end;
      opacity: 0.3;
      `, (0, _flex.flexFlow)('row'), (0, _typography.typography)(400, _typography.FontSizes.Title5), _typography.ellipsis, (0, _color.getColor)(_color.Colors.Black89)));

exports.TdComponent = TdComponent;
const TBodyComponent =
/*#__PURE__*/
(0, _styledComponents2.default)(({
  style,
  ...domProps
}) => _react.default.createElement(_ScrollAnimation.ScrollAnimation, _extends({
  containerCssOverrides: style
}, domProps))).withConfig({
  displayName: "ReactTable__TBodyComponent",
  componentId: "sc-1afopvo-6"
})(["overflow-x:hidden;"]);
exports.TBodyComponent = TBodyComponent;

const NoDataContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "ReactTable__NoDataContainer",
  componentId: "sc-1afopvo-7"
})(["", ";", ";align-items:center;background:", ";bottom:0;color:", ";justify-content:center;left:0;position:absolute;right:0;top:", "px;"], (0, _flex.flexFlow)('column'), (0, _typography.typography)(400, _typography.FontSizes.Title5), (0, _color.getColor)(_color.Colors.White), (0, _color.getColor)(_color.Colors.Black62), THEAD_HEIGHT);

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
    return row[id] !== undefined ? String(row[id]).toLocaleLowerCase().includes(filter.value.toLocaleString().toLocaleLowerCase()) : true;
  },
  filterable: true,
  resizable: true,
  loading: false,
  multiSort: false
};
exports.MonorailReactTableOverrides = MonorailReactTableOverrides;

var _StyledButton = (0, _styledComponents.default)(_Button.Button)`
                margin: auto 28px auto -8px;
                pointer-events: all;
                flex: 1;
              `;

var _StyledIconButton = (0, _styledComponents.default)(_IconButton.IconButton)`margin: auto -11px auto auto; pointer-events: none;`;

var _StyledIconButton2 = (0, _styledComponents.default)(_IconButton.IconButton)`margin: auto 0 auto auto;`;