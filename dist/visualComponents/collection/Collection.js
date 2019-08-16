"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collection = exports.CollectionView = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _styledComponents2 = _interopRequireDefault(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _ButtonsBar = require("../buttonsBar/ButtonsBar");

var _Cards = require("../cards/Cards");

var _ReactTable = require("../dataTable/ReactTable");

var _DebouncedSearch = require("../inputs/DebouncedSearch");

var _SearchController = require("../inputs/SearchController");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CollectionContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Collection__CollectionContainer",
  componentId: "b970z1-0"
})(["", ";background:", ";flex:1;overflow:hidden;"], (0, _flex.flexFlow)('row'), (0, _color.getColor)(_color.Colors.White));

const ControlsContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Collection__ControlsContainer",
  componentId: "b970z1-1"
})(["", ";align-items:center;background:", ";height:40px;margin-top:4px;padding:0 32px 0 30px;"], (0, _flex.flexFlow)('row'), (0, _color.getColor)(_color.Colors.Grey99));

let CollectionView;
exports.CollectionView = CollectionView;

(function (CollectionView) {
  CollectionView["Table"] = "table";
  CollectionView["Card"] = "card";
})(CollectionView || (exports.CollectionView = CollectionView = {}));

const Collection = props => {
  const {
    cardRender,
    collectionView,
    columns,
    data,
    isLoading = false,
    setCollectionView
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
  })), passedSearchInput), _react.default.createElement(CollectionContainer, null, _react.default.createElement(_reactTable.default, {
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
    TrGroupComponent: getTrGroupComponent
  }))), [collectionView, columns, getReactTableComponentProps, getTbodyComponent, getTrComponent, getTrGroupComponent, isLoading, onSortedChange, setCollectionView, sorted]);

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

var _StyledDebouncedSearch = (0, _styledComponents.default)(_DebouncedSearch.DebouncedSearch)`
                  width: 256px;
                  margin: auto 0 auto auto;
                `;