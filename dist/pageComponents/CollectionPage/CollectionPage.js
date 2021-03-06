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
    filters,
    isLoading,
    pivotBy,
    setCollectionView,
    title,
    NoDataComponent,
    PaginationComponent,
    pageSize,
    showPagination
  } = props;

  const renderCollection = () => {
    if ('searchInput' in props) {
      return /*#__PURE__*/_react.default.createElement(_Collection.Collection, {
        cardRender: cardRender,
        collectionView: collectionView,
        columns: columns,
        data: data,
        filters: filters,
        isLoading: isLoading,
        pivotBy: pivotBy,
        searchInput: props.searchInput,
        setCollectionView: setCollectionView,
        NoDataComponent: NoDataComponent,
        PaginationComponent: PaginationComponent,
        pageSize: pageSize,
        showPagination: showPagination
      });
    } else if ('searchFilter' in props) {
      return /*#__PURE__*/_react.default.createElement(_Collection.Collection, {
        cardRender: cardRender,
        collectionView: collectionView,
        columns: columns,
        data: data,
        filters: filters,
        isLoading: isLoading,
        pivotBy: pivotBy,
        searchFilter: props.searchFilter,
        setCollectionView: setCollectionView,
        NoDataComponent: NoDataComponent,
        PaginationComponent: PaginationComponent,
        pageSize: pageSize,
        showPagination: showPagination
      });
    } else {
      throw new Error('Need to pass searchInput or searchFilter prop to CollectionPage.');
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PageHeader.PageHeader, {
    title: title,
    actions: /*#__PURE__*/_react.default.createElement(_Actions.ActionsContainer, null, actions)
  }), renderCollection());
};

exports.CollectionPage = CollectionPage;