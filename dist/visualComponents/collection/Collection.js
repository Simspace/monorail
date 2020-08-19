"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collection = exports.CollectionView = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _baseStyles = require("../../helpers/baseStyles");

var _borderRadius = require("../../helpers/borderRadius");

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _ButtonsBar = require("../buttonsBar/ButtonsBar");

var _Cards = require("../cards/Cards");

var _ReactTable = require("../dataTable/ReactTable");

var _DebouncedSearch = require("../inputs/DebouncedSearch");

var _SearchController = require("../inputs/SearchController");

var _CollectionPaginationComponent = require("./CollectionPaginationComponent");

var _Array = require("../../sharedHelpers/fp-ts-ext/Array");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CollectionContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')};

  background: ${(0, _color.getColor)(_color.Colors.White)};
  flex: 1;
  overflow: hidden;
`;

const ControlsContainer = _styledComponents2.default.div(({
  cardViewWithoutFilters
}) => (0, _styledComponents2.css)`
    ${(0, _flex.flexFlow)('row')};

    align-items: center;
    background: ${(0, _color.getColor)(_color.Colors.Grey99)};
    height: 40px;
    margin-top: 4px;
    padding: 0 32px 0 30px; /* Button Bar has a 2px gap that we are making up here. */
    ${cardViewWithoutFilters ? `border-bottom: 1px solid ${(0, _color.getColor)(_color.Colors.Grey90)};` : null}
  `);

let CollectionView;
exports.CollectionView = CollectionView;

(function (CollectionView) {
  CollectionView["Table"] = "table";
  CollectionView["Card"] = "card";
})(CollectionView || (exports.CollectionView = CollectionView = {}));

const PAGE_SIZE = 20;

var _StyledReactTable =
/*#__PURE__*/
(0, _styledComponents.default)(_reactTable.default).withConfig({
  displayName: "Collection___StyledReactTable",
  componentId: "b970z1-0"
})(["", ""], p => p._css);

var _StyledDebouncedSearch =
/*#__PURE__*/
(0, _styledComponents.default)(_DebouncedSearch.DebouncedSearch).withConfig({
  displayName: "Collection___StyledDebouncedSearch",
  componentId: "b970z1-1"
})(["width:256px;margin:auto 0 auto auto;"]);

const Collection = props => {
  const {
    cardRender,
    collectionView,
    columns,
    data,
    isLoading = false,
    pivotBy,
    setCollectionView,
    NoDataComponent = () => _react.default.createElement(_ReactTable.NoDataComponentVertical, null),
    PaginationComponent = _CollectionPaginationComponent.CollectionPaginationComponent,
    pageSize = PAGE_SIZE,
    showPagination
  } = props;
  const [sorted, onSortedChange] = (0, _ReactTable.useSort)();
  const getReactTableComponentProps = (0, _react.useCallback)((_finalState, rowInfo) => {
    if (!(0, _typeGuards.isNil)(rowInfo)) {
      return {
        item: rowInfo.original
      };
    }

    return;
  }, []);
  const getTrComponent = (0, _react.useCallback)(({
    item,
    children
  }) => {
    if (!(0, _typeGuards.isNil)(item)) {
      switch (collectionView) {
        case CollectionView.Card:
          return (0, _typeGuards.isNotNil)(cardRender) ? cardRender(item) : children;

        case CollectionView.Table:
          return children;

        default:
          (0, _typeGuards.assertNever)(collectionView);
          return children;
      }
    }

    return children;
  }, [cardRender, collectionView]);
  const getTbodyComponent = (0, _react.useCallback)(({
    children,
    ...domProps
  }) => {
    switch (collectionView) {
      case CollectionView.Card:
        return _react.default.createElement(_Cards.BBCardGrid, null, children);

      case CollectionView.Table:
        return _react.default.createElement(_ReactTable.TBodyComponent, domProps, children);

      default:
        (0, _typeGuards.assertNever)(collectionView);
        return _react.default.createElement(_react.default.Fragment, null);
    }
  }, [collectionView]);
  const getTrGroupComponent = (0, _react.useCallback)(({
    item,
    children,
    ...domProps
  }) => {
    if ((0, _typeGuards.isNotNil)(item) && collectionView === CollectionView.Card && (0, _typeGuards.isNotNil)(cardRender)) {
      return cardRender(item);
    }

    return _react.default.createElement(_ReactTable.TrGroupComponent, domProps, children);
  }, [collectionView, cardRender]);
  const theadOnTableViewOnly = (0, _Array.all)(columns, column => column.filterable === false && column.sortable === false);
  const renderCollection = (0, _react.useCallback)(({
    passedSearchInput,
    passedData
  }) => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ControlsContainer, {
    cardViewWithoutFilters: theadOnTableViewOnly && collectionView === CollectionView.Card
  }, (0, _typeGuards.isNotNil)(cardRender) && _react.default.createElement(_ButtonsBar.ButtonsBar, {
    size: _buttonTypes.ButtonSize.Default,
    mode: _buttonTypes.ButtonsBarMode.Toolbar
  }, _react.default.createElement(_IconButton.IconButton, {
    isActive: collectionView === CollectionView.Table,
    onClick: () => setCollectionView(CollectionView.Table),
    icon: "view_headline"
  }), _react.default.createElement(_IconButton.IconButton, {
    isActive: collectionView === CollectionView.Card,
    onClick: () => setCollectionView(CollectionView.Card),
    icon: "view_module"
  })), _react.default.createElement(FilterContainer, null, props.filters), passedSearchInput), _react.default.createElement(CollectionContainer, null, _react.default.createElement(_styledComponents2.ThemeProvider, {
    theme: theme => ({ ...theme,
      size: { ...theme.size,
        table: {
          margin: 32
        }
      }
    })
  }, _react.default.createElement(_StyledReactTable, {
    sorted: sorted,
    onSortedChange: onSortedChange,
    columns: columns,
    data: passedData,
    getTrGroupProps: getReactTableComponentProps,
    getTrProps: getReactTableComponentProps,
    loading: isLoading,
    pageSize: pageSize,
    pivotBy: pivotBy,
    TbodyComponent: getTbodyComponent,
    TrComponent: getTrComponent,
    TrGroupComponent: getTrGroupComponent,
    showPagination: showPagination || passedData.length > pageSize,
    PaginationComponent: PaginationComponent,
    NoDataComponent: NoDataComponent,
    TheadComponent: theadProps => _react.default.createElement(CollectionTheadComponent, _extends({
      collectionView: collectionView,
      tableViewOnly: theadOnTableViewOnly
    }, theadProps)),
    ThComponent: thProps => _react.default.createElement(CollectionThComponent, _extends({
      collectionView: collectionView
    }, thProps)),
    _css: collectionView === CollectionView.Card ? theadOverrides : ''
  })))), [collectionView, props.filters, sorted, onSortedChange, columns, getReactTableComponentProps, isLoading, pivotBy, getTbodyComponent, getTrComponent, getTrGroupComponent, NoDataComponent, setCollectionView, PaginationComponent, cardRender, pageSize, showPagination, theadOnTableViewOnly]);

  if ('searchInput' in props) {
    return renderCollection({
      passedSearchInput: props.searchInput,
      passedData: data
    });
  } else if ('searchFilter' in props) {
    return _react.default.createElement(_SearchController.SearchController, null, ({
      compareSearch,
      value,
      onChange
    }) => {
      const filteredData = data.filter(item => props.searchFilter({
        item,
        compareSearch,
        value
      }));
      return renderCollection({
        passedSearchInput: _react.default.createElement(_StyledDebouncedSearch, {
          onChange: onChange,
          value: value,
          name: 'collection-filter',
          placeholder: `Search`
        }),
        passedData: filteredData
      });
    });
  } else {
    throw new Error('Need to pass searchInput or searchFilter prop to Collection.');
  }
};

exports.Collection = Collection;
const theadOverrides = (0, _styledComponents2.css)`
  ${_ReactTable.TheadComponentContainer} {
    ${(0, _flex.flexFlow)('row', 'wrap')};

    height: auto;
    min-height: 40px;
    padding: 4px 26px;
  }
`;

const CollectionTheadComponent = ({
  style,
  collectionView,
  tableViewOnly,
  ...otherProps
}) => {
  switch (collectionView) {
    case CollectionView.Card:
      return tableViewOnly ? null : _react.default.createElement(_ReactTable.TheadComponent, otherProps);

    case CollectionView.Table:
      return _react.default.createElement(_ReactTable.TheadComponent, _extends({
        style: style
      }, otherProps));
  }
};

const thComponentOverrides = (0, _styledComponents2.css)`
  width: auto;
  padding-right: 27px;

  &:first-of-type {
    padding-left: 6px;
  }

  ${_ReactTable.ResizerComponent} {
    display: none;
  }

  ${_Button.StyledButton} {
    ${(0, _baseStyles.baseSecondaryStyles)(_theme.ThemeColors.BrandSecondary)};

    color: ${(0, _color.getColor)(_color.Colors.Black74a)};
    border-radius: ${_borderRadius.BorderRadius.Small}px 0 0 ${_borderRadius.BorderRadius.Small}px;
    margin-top: 4px;
    margin-bottom: 4px;

    &.is-active {
      ${(0, _baseStyles.basePrimaryStyles)(_theme.ThemeColors.BrandSecondary)}
    }

    &:last-of-type {
      border-radius: 0 ${_borderRadius.BorderRadius.Small}px ${_borderRadius.BorderRadius.Small}px 0;
      overflow: visible;
      transform: translateX(1px);
    }

    &:first-of-type {
      border-radius: ${_borderRadius.BorderRadius.Small}px 0 0 ${_borderRadius.BorderRadius.Small}px;
      overflow: hidden;
      transform: translateX(0);

      &::before {
        content: none;
      }
    }
  }
`;

var _StyledThComponent =
/*#__PURE__*/
(0, _styledComponents.default)(_ReactTable.ThComponent).withConfig({
  displayName: "Collection___StyledThComponent",
  componentId: "b970z1-2"
})(["", ""], thComponentOverrides);

const CollectionThComponent = ({
  style,
  collectionView,
  ...otherProps
}) => {
  switch (collectionView) {
    case CollectionView.Card:
      return _react.default.createElement(_StyledThComponent, otherProps);

    case CollectionView.Table:
      return _react.default.createElement(_ReactTable.ThComponent, _extends({
        style: style
      }, otherProps));
  }
};

const FilterContainer = _styledComponents2.default.section`
  ${(0, _flex.flexFlow)('row')}
  flex-grow: 1;
  justify-content: flex-end;
`;