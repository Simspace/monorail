"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableSelect = exports.CheckboxType = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

var _reactWindow = require("react-window");

var _fpTsImports = require("../../../sharedHelpers/fp-ts-imports");

var _exports = require("../../../helpers/exports");

var _styledComponents2 = require("../../../helpers/styled-components");

var _helpers = require("../../../v2/shared/helpers");

var _DataStates = require("../../dataStates/DataStates");

var _ReactTable = require("../ReactTable");

var _helpers2 = require("./helpers");

var _SelectionSummaryBar = require("./SelectionSummaryBar");

var _Choice = require("../../inputs/Choice");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SELECTED;

(function (SELECTED) {
  SELECTED["ALL"] = "ALL";
  SELECTED["SOME"] = "SOME";
  SELECTED["NONE"] = "NONE";
})(SELECTED || (SELECTED = {}));

let CheckboxType;
exports.CheckboxType = CheckboxType;

(function (CheckboxType) {
  CheckboxType["Radio"] = "RADIO";
  CheckboxType["Checkbox"] = "CHECKBOX";
})(CheckboxType || (exports.CheckboxType = CheckboxType = {}));

const getDefaultTrProps = props => ({
  isRow: true,
  css: (0, _styledComponents2.css)`
    display: flex;
    flex-flow: row nowrap;
    height: auto;
    min-height: 40px;
    position: relative;
    width: 100%;
    cursor: ${props.disabled ? 'default' : 'pointer'};
    transition: all 150ms;
    :hover {
      background: ${props.disabled ? 'inherit' : (0, _exports.getColor)(_exports.Colors.AccentBlue300, 0.1)};
    }
    ${props.disabled ? (0, _styledComponents2.css)`
          & :not(i) {
            color: ${props.disabled ? (0, _exports.getColor)(_exports.Colors.Gray54) : 'inherit'};
            font-style: ${props.disabled ? 'italic' : 'inherit'};
          }
        ` : ''}
  `
});

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "ReactTableSelect___StyledDiv",
  componentId: "sc-7tp34e-0"
})(["", ""], p => p._css);

const DefaultTrComponent = props => {
  if (!props.isRow) {
    return props.children;
  } else {
    return /*#__PURE__*/_react.default.createElement(_StyledDiv, {
      onClick: props.onClick,
      style: props.style,
      _css: props.css
    }, props.children);
  }
};

var _StyledAutoSizer = /*#__PURE__*/(0, _styledComponents.default)(_reactVirtualizedAutoSizer.default).withConfig({
  displayName: "ReactTableSelect___StyledAutoSizer",
  componentId: "sc-7tp34e-1"
})(["margin:0;padding:0;"]);

const TBodyComponent = tbodyComponentProps => {
  const {
    rowHeight,
    children
  } = tbodyComponentProps;
  return (0, _fpTsImports.pipe)(children, _fpTsImports.O.fromPredicate(Array.isArray), _fpTsImports.O.chain(_fpTsImports.A.head), _fpTsImports.O.chain(_fpTsImports.O.fromPredicate(Array.isArray)), _fpTsImports.O.chain(_fpTsImports.O.fromPredicate(_fpTsImports.A.isNonEmpty)), _fpTsImports.O.fold(() => {
    return /*#__PURE__*/_react.default.createElement(_DataStates.NoData, null);
  }, items => {
    const Row = rowProps => /*#__PURE__*/_react.default.createElement("div", {
      style: rowProps.style
    }, items[rowProps.index]);

    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        flex: '1 1 auto'
      }
    }, /*#__PURE__*/_react.default.createElement(_StyledAutoSizer, null, ({
      width,
      height
    }) =>
    /*#__PURE__*/

    /* prefer FixedSizeList for performance Daniel Laubacher  Thu 30 Jul 2020 **/
    _react.default.createElement(_reactWindow.FixedSizeList, {
      style: {
        outline: 'none',
        willChange: 'unset'
      },
      width: width,
      height: height,
      itemSize: rowHeight,
      itemCount: items.length
    }, Row)));
  }));
};

const ReactTableSelect = ({
  selectProps: {
    type = CheckboxType.Checkbox,
    totalItems,
    ...selectProps
  },
  reactTableProps: { ...reactTableProps
  }
}) => {
  const [itemsPerPage, setItemsPerPage] = (0, _react.useState)(_helpers2.DEFAULT_ITEMS_PER_PAGE_OPTION);
  const [sorted, onSortedChange] = (0, _ReactTable.useSort)();

  const isSelected = item => _fpTsImports.O.isSome(_fpTsImports.R.lookup(selectProps.getId(item), selectProps.selected));

  const toggleCheckbox = args => {
    const {
      item,
      sel
    } = args;
    const id = selectProps.getId(item);
    return _fpTsImports.O.isSome(_fpTsImports.R.lookup(id, sel)) ? _fpTsImports.R.deleteAt(id)(sel) : _fpTsImports.R.insertAt(id, item)(sel);
  };

  const toggleRadio = args => {
    const {
      item,
      sel
    } = args;
    const id = selectProps.getId(item);
    return _fpTsImports.O.isSome(_fpTsImports.R.lookup(id, sel)) ? {} : {
      [id]: item
    };
  };

  const toggleItem = item => sel => {
    return type === CheckboxType.Checkbox ? toggleCheckbox({
      item,
      sel
    }) : toggleRadio({
      item,
      sel
    });
  };

  const removeDisabledItems = items => items.filter(x => !selectProps.isDisabled(x));

  const removeItems = items => items.reduce((acc, cur) => _fpTsImports.R.deleteAt(selectProps.getId(cur))(acc), selectProps.selected);

  const addItems = items => items.reduce((acc, cur) => _fpTsImports.R.insertAt(selectProps.getId(cur), cur)(acc), selectProps.selected);

  const toggleAll = items => {
    return getSelected(items) === SELECTED.ALL ? removeItems(items) : addItems(items);
  };

  const getSelected = items => items.every(isSelected) ? SELECTED.ALL : items.some(isSelected) ? SELECTED.SOME : SELECTED.NONE;

  const selectColumn = {
    Header: info => {
      const visibleRows = info.data.map(data => data._original);
      const selected = getSelected(visibleRows);
      const noVisibleItems = reactTableProps.data.length === 0;
      return type === CheckboxType.Checkbox ? /*#__PURE__*/_react.default.createElement(_Choice.Choice, {
        indeterminate: selected === SELECTED.SOME,
        dense: true,
        style: {
          width: 24,
          padding: 0
        },
        centeredInput: true,
        type: 'checkbox',
        checked: selected === SELECTED.ALL && !noVisibleItems,
        disabled: noVisibleItems,
        onClick: () => {
          selectProps.onSelectionChange(toggleAll(removeDisabledItems(visibleRows)));
        }
      }) : null;
    },
    Cell: info => {
      return /*#__PURE__*/_react.default.createElement(_Choice.Choice, {
        indeterminate: false,
        dense: true,
        readOnly: true,
        style: {
          width: 24,
          padding: 0
        },
        centeredInput: true,
        type: type === CheckboxType.Checkbox ? 'checkbox' : 'radio',
        checked: isSelected(info.original),
        disabled: selectProps.isDisabled(info.original),
        onClick: () => {
          /** Handle click on the row not the cell DL 6/20 */
        }
      });
    },
    width: 60,
    filterable: false,
    sortable: false,
    resizable: true,
    style: {
      textAlign: 'center'
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactTable.default, _extends({
    sorted: sorted,
    onSortedChange: onSortedChange,
    getPaginationProps: () => ({
      itemsPerPage,
      totalItems,
      totalSelectedItems: Object.keys(selectProps.selected).length,
      onItemsPerPageChange: setItemsPerPage
    }),
    PaginationComponent: _SelectionSummaryBar.SelectionSummaryBar
  }, reactTableProps, {
    columns: [selectColumn, ...reactTableProps.columns],
    pageSize: (0, _helpers2.itemsPerPageOptionToValue)(itemsPerPage, totalItems),
    getTbodyProps: () => {
      return {
        rowHeight: selectProps.rowHeight
      };
    },
    TbodyComponent: TBodyComponent,
    getTrProps: (_, rowInfo) => {
      const {
        onClick,
        disabled
      } = (0, _fpTsImports.pipe)(_fpTsImports.O.fromNullable(rowInfo), _fpTsImports.O.fold(() => {
        return {
          onClick: () => (0, _helpers.logger)(({
            warn
          }) => warn('*WARNING* Possible error in `getTrProps` within `ReactTableSelect`! `rowInfo` is undefined')),
          disabled: false
        };
      }, row => {
        const disabled_ = selectProps.isDisabled(row.original);
        return {
          onClick: () => {
            if (!disabled_) {
              selectProps.onSelectionChange(toggleItem(row.original)(selectProps.selected));
            }
          },
          disabled: disabled_
        };
      }));
      return { ...getDefaultTrProps({
          disabled
        }),
        onClick,
        disabled
      };
    },
    TrComponent: DefaultTrComponent
  }));
};

exports.ReactTableSelect = ReactTableSelect;