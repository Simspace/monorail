"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TBodyInfiniteVirtualFixedSizeList = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

var _reactWindow = require("react-window");

var _reactWindowInfiniteLoader = _interopRequireDefault(require("react-window-infinite-loader"));

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _typeGuards = require("../../../../sharedHelpers/typeGuards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _StyledAutoSizer = /*#__PURE__*/(0, _styledComponents.default)(_reactVirtualizedAutoSizer.default).withConfig({
  displayName: "TBodyInfiniteVirtualList___StyledAutoSizer",
  componentId: "sc-1eratk8-0"
})(["margin:0;padding:0;"]);

const TBodyInfiniteVirtualFixedSizeList = tbodyComponentProps => {
  const {
    rowHeight,
    children
  } = tbodyComponentProps;
  return (0, _pipeable.pipe)(children, O.fromPredicate(Array.isArray), O.chain(A.head), O.chain(O.fromPredicate(Array.isArray)), O.chain(O.fromPredicate(A.isNonEmpty)), O.fold(() => {
    return tbodyComponentProps.NoData;
  }, items => {
    const Row = rowProps => rowProps.index < items.length ? /*#__PURE__*/_react.default.createElement("div", {
      style: rowProps.style
    }, items[rowProps.index]) : /*#__PURE__*/_react.default.createElement("div", {
      style: rowProps.style
    }, tbodyComponentProps.Loading);

    const itemCount = (0, _typeGuards.isNonEmptyString)(tbodyComponentProps.continuationToken) ? items.length + 1 : items.length;
    return /*#__PURE__*/_react.default.createElement(_reactWindowInfiniteLoader.default, {
      loadMoreItems: tbodyComponentProps.loadMoreItems,
      isItemLoaded: index => index < items.length,
      itemCount: itemCount
    }, ({
      ref,
      onItemsRendered
    }) => {
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
        ref: ref,
        onItemsRendered: onItemsRendered,
        style: {
          outline: 'none',
          willChange: 'unset'
        },
        width: width,
        height: height,
        itemSize: rowHeight,
        itemCount: itemCount
      }, Row)));
    });
  }));
};

exports.TBodyInfiniteVirtualFixedSizeList = TBodyInfiniteVirtualFixedSizeList;