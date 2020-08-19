"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePage = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Actions = require("../../visualComponents/actions/Actions");

var _CollectionPaginationComponent = require("../../visualComponents/collection/CollectionPaginationComponent");

var _ReactTable = require("../../visualComponents/dataTable/ReactTable");

var _Search = require("../../visualComponents/inputs/Search");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _PageHeader = require("../../visualComponents/pageHeader/PageHeader");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PAGE_SIZE = 20;
const TableContainer = _styledComponents.default.div`
  ${(0, _flex.flexFlow)('row')};

  background: ${(0, _color.getColor)(_color.Colors.White)};
  flex: 1;
  overflow: hidden;
`;
const SearchWrapper = _styledComponents.default.div`
  flex: 0 0 48px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: hsla(0, 0%, 99%, 1);
  border-bottom: 1px solid ${(0, _color.getColor)(_color.Colors.Grey90)};
`;

const TablePage = props => {
  /**
   * TablePage component does not work without paging.
   * This is because it does not scroll when overflow is reached.
   * Setting pagination to `true` is the default setting for this
   * ReactTable component, but also, it's the only setting that works.
   * Be wary of setting pagination to false.
   * AR - 2020-06-04
   */
  const {
    actions,
    title = '',
    isLoading = false,
    searchProps,
    pageSize = PAGE_SIZE,
    showPagination = true,
    data = [],
    ...otherProps
  } = props;
  const [sorted, onSortedChange] = (0, _ReactTable.useSort)(otherProps.defaultSorted);
  return _react.default.createElement(_react.default.Fragment, null, (0, _typeGuards.isNonEmptyString)(title) && _react.default.createElement(_PageHeader.PageHeader, {
    title: title,
    actions: _react.default.createElement(_Actions.ActionsContainer, null, actions)
  }), searchProps !== undefined ? _react.default.createElement(SearchWrapper, null, _react.default.createElement(_Search.Search, searchProps)) : null, _react.default.createElement(TableContainer, null, _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme => ({ ...theme,
      size: { ...theme.size,
        table: {
          margin: 32
        }
      }
    })
  }, _react.default.createElement(_reactTable.default, _extends({}, otherProps, {
    data: data,
    pageSize: pageSize,
    showPagination: showPagination && data.length > pageSize,
    loading: isLoading,
    sorted: sorted,
    onSortedChange: onSortedChange,
    PaginationComponent: _CollectionPaginationComponent.CollectionPaginationComponent
  })))));
};

exports.TablePage = TablePage;