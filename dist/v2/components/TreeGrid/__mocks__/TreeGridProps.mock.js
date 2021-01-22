"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockTreeGridProps = exports.EMPTY_VIEW_TEXT_CONTENT = void 0;

var _react = _interopRequireDefault(require("react"));

var _fastCheck = _interopRequireDefault(require("fast-check"));

var _function = require("fp-ts/lib/function");

var Tree = _interopRequireWildcard(require("fp-ts/lib/Tree"));

var _fpTsImports = require("../../../../sharedHelpers/fp-ts-imports");

var _exports = require("../../../../exports");

var Treex = _interopRequireWildcard(require("../../../../sharedHelpers/fp-ts-ext/Tree"));

var _Tweet = require("./Tweet.mock");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EMPTY_VIEW_TEXT_CONTENT = 'You can render anything here, a loading indicator, error message, etc.';
exports.EMPTY_VIEW_TEXT_CONTENT = EMPTY_VIEW_TEXT_CONTENT;
const mockTreeGridProps = {
  ariaLabel: {
    tag: 'label',
    value: 'Tweets'
  },
  content: (0, _function.pipe)(_fastCheck.default.sample(_Tweet.arbitraryTweetThread, 50), _fpTsImports.A.mapWithIndex((ix, tree) => {
    /** Guarantee the first tree in the forest has at least one child node */
    return ix === 0 ? { ...tree,
      forest: (0, _function.pipe)(tree.forest, _fpTsImports.A.cons(Tree.make(_fastCheck.default.sample(_Tweet.arbitraryTweet, 1)[0])))
    } : tree;
  }), Treex.mapForest(tweet => ({
    key: tweet.id,
    value: tweet
  })), _fpTsImports.E.right),
  expandCollapse: {
    tag: 'Uncontrolled'
  },
  columns: _fpTsImports.NEA.cons({
    id: 'authorId',
    renderHeader: () => /*#__PURE__*/_react.default.createElement(_exports.Text, null, "Author Id"),
    renderCell: node => node.value.authorId
  }, [{
    id: 'createdAt',
    renderHeader: () => /*#__PURE__*/_react.default.createElement(_exports.Text, null, "Date"),
    renderCell: node => node.value.createdAt.toLocaleString()
  }, {
    id: 'content',
    renderHeader: () => /*#__PURE__*/_react.default.createElement(_exports.Text, null, "Content"),
    renderCell: node => node.value.content
  }])
};
exports.mockTreeGridProps = mockTreeGridProps;