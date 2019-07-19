"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _Actions = require("../../visualComponents/actions/Actions");

var _Collection = require("../../visualComponents/collection/Collection");

var _PageHeader = require("../../visualComponents/pageHeader/PageHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CollectionPage = props => {
  const {
    actions,
    cardRender,
    collectionView,
    columns,
    data,
    searchFilter,
    setCollectionView,
    title
  } = props;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_PageHeader.PageHeader, {
    title: title,
    actions: _react.default.createElement(_Actions.ActionsContainer, null, actions)
  }), _react.default.createElement(_Collection.Collection, {
    cardRender: cardRender,
    collectionView: collectionView,
    columns: columns,
    data: data,
    searchFilter: searchFilter,
    setCollectionView: setCollectionView
  }));
};

exports.CollectionPage = CollectionPage;