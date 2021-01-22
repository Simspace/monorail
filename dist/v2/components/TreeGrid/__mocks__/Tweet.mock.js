"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arbitraryTweetThread = exports.arbitraryTweet = void 0;

var fc = _interopRequireWildcard(require("fast-check"));

var _newtypeTs = require("newtype-ts");

var Treex = _interopRequireWildcard(require("../../../../sharedHelpers/fp-ts-ext/Tree"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const tweetId = (0, _newtypeTs.iso)();
const arbitraryTweet = fc.record({
  id: fc.uuid().map(tweetId.wrap),
  authorId: fc.uuid(),
  content: fc.lorem(),
  createdAt: fc.date({
    min: new Date(1970, 1, 1),
    max: new Date(Date.now())
  })
});
exports.arbitraryTweet = arbitraryTweet;
const arbitraryTweetThread = Treex.getArbitrary(arbitraryTweet);
exports.arbitraryTweetThread = arbitraryTweetThread;