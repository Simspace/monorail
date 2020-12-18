"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

var _Eq = require("fp-ts/lib/Eq");

var M = _interopRequireWildcard(require("fp-ts/lib/Map"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _Ord = require("fp-ts/lib/Ord");

var _pipeable = require("fp-ts/lib/pipeable");

var _Semigroup = require("fp-ts/lib/Semigroup");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Collapsible = require("../collapsible/Collapsible");

var _ScrollAnimation = require("../layout/ScrollAnimation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Accordion___StyledDiv",
  componentId: "sgg3zy-0"
})(["flex-grow:1;flex-shrink:1;flex-basis:auto;display:flex;flex-direction:column;overflow:hidden;", ";"], p => p._css);

var _StyledScrollAnimation = /*#__PURE__*/(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "Accordion___StyledScrollAnimation",
  componentId: "sgg3zy-1"
})(["display:flex;flex-direction:column;overflow-y:", ";"], p => p._css2);

/**
 * Accordion
 *
 * @param content       - an array of collapsible props with keys to use for the internal state
 * @param multiExpand?  - whether or not multiple collapsible sections can be expanded at the same time or not
 * @param cssOverrides? - any css overrides
 */
const Accordion = props => {
  const {
    content,
    multiExpand = false,
    isContentScrollable = false,
    ...domProps
  } = props;
  /**
   * Keep a local map of expanded states. These will track changes to expanded so the caller
   * doesn't have to manage that state, unless they want to.
   */

  const [localExpandedStates, setLocalExpandedStates] = (0, _react.useState)(() => (0, _pipeable.pipe)(content, A.reduce(new Map(), (localExpandedMap, collapsible) => {
    const expanded = (0, _typeGuards.isNotNil)(collapsible.expanded) ? collapsible.expanded : false;
    return M.insertAt(_Eq.eqString)(collapsible.key, expanded)(localExpandedMap);
  })));
  /**
   * Sets a local expanded state. This varies by whether multi-expand behavior is enabled.
   */

  const setLocalExpandedState = (key, expanded) => {
    const newLocalExpandedStates = multiExpand ? // If it's multi-expand, just set the selected one and leave everything else alone
    M.insertAt(_Eq.eqString)(key, expanded)(localExpandedStates) : // If it's single-expand, set the selected one and make sure everything else is collapsed
    (0, _pipeable.pipe)(localExpandedStates, M.toArray(_Ord.ordString), A.map(([localKey, _]) => {
      const newExpanded = localKey === key ? expanded : false;
      return [localKey, newExpanded];
    }), M.fromFoldable(_Eq.eqString, (0, _Semigroup.getFirstSemigroup)(), A.array));
    setLocalExpandedStates(newLocalExpandedStates);
  };
  /**
   * Checks if an item is expanded by first checking if the caller specified via props, then falling back to the local state
   */


  const getExpanded = collapsible => (0, _pipeable.pipe)( // If the caller specified expanded, use that
  O.fromNullable(collapsible.expanded), // If caller didn't specify, check the local state
  O.alt(() => M.lookup(_Eq.eqString)(collapsible.key, localExpandedStates)), // Default to false
  O.getOrElse(() => false));

  return /*#__PURE__*/_react.default.createElement(_StyledDiv, _extends({}, domProps, {
    _css: isContentScrollable ? `max-height: ${312 + 40 * content.length}px` : ``
  }), /*#__PURE__*/_react.default.createElement(_StyledScrollAnimation, {
    _css2: isContentScrollable ? 'hidden' : 'auto'
  }, content.map(collapsible => {
    const {
      key,
      onClick: onClickOpt,
      ...rest
    } = collapsible;
    return /*#__PURE__*/_react.default.createElement(_Collapsible.Collapsible, _extends({
      key: key,
      sectionId: `section-${collapsible.key}`,
      labelId: `accordion-id-${collapsible.key}`,
      expanded: getExpanded(collapsible),
      isContentScrollable: isContentScrollable,
      onClick: (event, isExpanded) => (0, _pipeable.pipe)(O.fromNullable(onClickOpt), O.fold(() => setLocalExpandedState(key, isExpanded), onClick => {
        onClick(event, isExpanded);
        setLocalExpandedState(collapsible.key, isExpanded);
      }))
    }, rest));
  })));
};

exports.Accordion = Accordion;