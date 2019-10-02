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

var _DataStates = require("../dataStates/DataStates");

var _ReactTable = require("../dataTable/ReactTable");

var _DebouncedSearch = require("../inputs/DebouncedSearch");

var _SearchController = require("../inputs/SearchController");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CollectionContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')};

  background: ${(0, _color.getColor)(_color.Colors.White)};
  flex: 1;
  overflow: hidden;
`;
const ControlsContainer = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')};

  align-items: center;
  background: ${(0, _color.getColor)(_color.Colors.Grey99)};
  height: 40px;
  margin-top: 4px;
  padding: 0 32px 0 30px; /* Button Bar has a 2px gap that we are making up here. */
`;
let CollectionView;
exports.CollectionView = CollectionView;

(function (CollectionView) {
  CollectionView["Table"] = "table";
  CollectionView["Card"] = "card";
})(CollectionView || (exports.CollectionView = CollectionView = {}));

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
    setCollectionView,
    NoDataComponent = () => _react.default.createElement(_ReactTable.NoDataContainer, null, _react.default.createElement(_DataStates.EmptyTable, null))
  } = props;
  const [sorted, onSortedChange] = (0, _ReactTable.useSort)();
  const getReactTableComponentProps = (0, _react.useCallback)((finalState, rowInfo) => {
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
          return cardRender(item);

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
    if (!(0, _typeGuards.isNil)(item) && collectionView === CollectionView.Card) {
      return cardRender(item);
    }

    return _react.default.createElement(_ReactTable.TrGroupComponent, domProps, children);
  }, [collectionView, cardRender]);
  const renderCollection = (0, _react.useCallback)(({
    passedSearchInput,
    passedData
  }) => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ControlsContainer, null, _react.default.createElement(_ButtonsBar.ButtonsBar, {
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
  })), passedSearchInput), _react.default.createElement(CollectionContainer, null, _react.default.createElement(_styledComponents2.ThemeProvider, {
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
    pageSize: passedData.length,
    TbodyComponent: getTbodyComponent,
    TrComponent: getTrComponent,
    TrGroupComponent: getTrGroupComponent,
    NoDataComponent: NoDataComponent,
    TheadComponent: theadProps => _react.default.createElement(CollectionTheadComponent, _extends({
      collectionView: collectionView
    }, theadProps)),
    ThComponent: thProps => _react.default.createElement(CollectionThComponent, _extends({
      collectionView: collectionView
    }, thProps)),
    _css: collectionView === CollectionView.Card ? theadOverrides : ''
  })))), [collectionView, columns, getReactTableComponentProps, getTbodyComponent, getTrComponent, getTrGroupComponent, isLoading, onSortedChange, setCollectionView, sorted]);

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
const theadOverrides = _styledComponents2.css`
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
  ...otherProps
}) => {
  switch (collectionView) {
    case CollectionView.Card:
      return _react.default.createElement(_ReactTable.TheadComponent, otherProps);

    case CollectionView.Table:
      return _react.default.createElement(_ReactTable.TheadComponent, _extends({
        style: style
      }, otherProps));
  }
};

const thComponentOverrides = _styledComponents2.css`
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

    color: ${(0, _color.getColor)(_color.Colors.Black74)};
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