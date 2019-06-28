"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collection = exports.CollectionView = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _ButtonsBar = require("../buttonsBar/ButtonsBar");

var _Cards = require("../cards/Cards");

var _ReactTable = require("../dataTable/ReactTable");

var _color = require("../helpers/color");

var _flex = require("../helpers/flex");

var _styledComponents2 = _interopRequireDefault(require("../helpers/styled-components"));

var _Search = require("../inputs/Search");

var _SearchController = require("../inputs/SearchController");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TileContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Collection__TileContainer",
  componentId: "sc-11kk7va-0"
})(["display:grid;flex-grow:1;grid-auto-rows:max-content;grid-template-columns:repeat(auto-fill,192px);justify-content:center;overflow-y:auto;padding:12px 28px;"]);

const CollectionContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Collection__CollectionContainer",
  componentId: "sc-11kk7va-1"
})(["", ";background:", ";flex:1;overflow:hidden;"], (0, _flex.flexFlow)('row'), (0, _color.getColor)(_color.Colors.White));

const ControlsContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Collection__ControlsContainer",
  componentId: "sc-11kk7va-2"
})(["", ";align-items:center;background:", ";height:40px;margin-top:4px;padding:0 32px 0 30px;"], (0, _flex.flexFlow)('row'), (0, _color.getColor)(_color.Colors.Grey99));

let CollectionView;
exports.CollectionView = CollectionView;

(function (CollectionView) {
  CollectionView["Table"] = "table";
  CollectionView["Tile"] = "tile";
  CollectionView["Card"] = "card";
})(CollectionView || (exports.CollectionView = CollectionView = {}));

const Collection = props => {
  const {
    cardRender,
    columns,
    data,
    searchFilter,
    tileRender,
    collectionView,
    setCollectionView
  } = props;

  const getReactTableComponentProps = (finalState, rowInfo) => {
    if (!(0, _typeGuards.isNil)(rowInfo)) {
      return {
        item: rowInfo.original
      };
    }

    return;
  };

  const getTrComponent = ({
    item,
    children
  }) => {
    if (!(0, _typeGuards.isNil)(item)) {
      switch (collectionView) {
        case CollectionView.Card:
          return cardRender(item);

        case CollectionView.Tile:
          return tileRender(item);

        case CollectionView.Table:
          return children;
      }
    }

    return children;
  };

  const getTbodyComponent = ({
    children,
    ...domProps
  }) => {
    switch (collectionView) {
      case CollectionView.Card:
        return _react.default.createElement(_Cards.BBCardGrid, null, children);

      case CollectionView.Tile:
        return _react.default.createElement(TileContainer, null, children);

      case CollectionView.Table:
        return _react.default.createElement(_ReactTable.TBodyComponent, domProps, children);
    }
  };

  const getTrGroupComponent = ({
    item,
    children,
    ...domProps
  }) => {
    if (!(0, _typeGuards.isNil)(item)) {
      if (collectionView === CollectionView.Tile) {
        return tileRender(item);
      } else if (collectionView === CollectionView.Card) {
        return cardRender(item);
      }
    }

    return _react.default.createElement(_ReactTable.TrGroupComponent, domProps, children);
  };

  return _react.default.createElement(_SearchController.SearchController, null, ({
    compareSearch,
    value,
    onChange
  }) => {
    const filteredData = data.filter(item => searchFilter({
      item,
      compareSearch
    }));
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ControlsContainer, null, _react.default.createElement(_ButtonsBar.ButtonsBar, {
      size: _buttonTypes.ButtonSize.Default,
      mode: _buttonTypes.ButtonsBarMode.Toolbar
    }, _react.default.createElement(_IconButton.IconButton, {
      isActive: collectionView === CollectionView.Table,
      onClick: () => setCollectionView(CollectionView.Table),
      icon: "view_headline"
    }), _react.default.createElement(_IconButton.IconButton, {
      isActive: collectionView === CollectionView.Tile,
      onClick: () => setCollectionView(CollectionView.Tile),
      icon: "view_comfy"
    }), _react.default.createElement(_IconButton.IconButton, {
      isActive: collectionView === CollectionView.Card,
      onClick: () => setCollectionView(CollectionView.Card),
      icon: "view_module"
    })), _react.default.createElement(_StyledSearch, {
      onChange: onChange,
      value: value
    })), _react.default.createElement(CollectionContainer, null, _react.default.createElement(_reactTable.default, {
      columns: columns,
      data: filteredData,
      filterable: true,
      getTrGroupProps: getReactTableComponentProps,
      getTrProps: getReactTableComponentProps,
      resizable: true,
      TbodyComponent: getTbodyComponent,
      TrComponent: getTrComponent,
      TrGroupComponent: getTrGroupComponent,
      loadingText: "",
      pageSize: filteredData.length
    })));
  });
};

exports.Collection = Collection;

var _StyledSearch = (0, _styledComponents.default)(_Search.Search)`
                  width: 256px;
                  margin: auto 0 auto auto;
                `;