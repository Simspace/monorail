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

var _ReactTable = require("../../visualComponents/dataTable/ReactTable");

var _PageHeader = require("../../visualComponents/pageHeader/PageHeader");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TableContainer = _styledComponents.default.div`
  ${(0, _flex.flexFlow)('row')};

  background: ${(0, _color.getColor)(_color.Colors.White)};
  flex: 1;
  overflow: hidden;
`;

const TablePage = props => {
  const {
    actions,
    title,
    isLoading = false,
    ...otherProps
  } = props;
  const [sorted, onSortedChange] = (0, _ReactTable.useSort)(otherProps.defaultSorted);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_PageHeader.PageHeader, {
    title: title,
    actions: _react.default.createElement(_Actions.ActionsContainer, null, actions)
  }), _react.default.createElement(TableContainer, null, _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme => ({ ...theme,
      size: { ...theme.size,
        table: {
          margin: 32
        }
      }
    })
  }, _react.default.createElement(_reactTable.default, _extends({}, otherProps, {
    loading: isLoading,
    sorted: sorted,
    onSortedChange: onSortedChange
  })))));
};

exports.TablePage = TablePage;