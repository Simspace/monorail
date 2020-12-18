"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardList = exports.CardListWrapper = exports.CardListContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _function = require("fp-ts/lib/function");

var RA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyArray"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _CardList = require("./CardList.helpers");

var _CardList2 = require("./CardList.hooks");

var _CardListSearchSection = require("./CardListSearchSection");

var _Cards = require("../cards/Cards");

var _Header = require("../header/Header");

var _ScrollAnimation = require("../layout/ScrollAnimation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListContainer = (0, _styledComponents2.default)(_ScrollAnimation.ScrollAnimation)`
  padding-bottom: 4px;
`;
const IconHeaderContainer = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('row')}

  align-items: center;
`;

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "CardList___StyledIconButton",
  componentId: "sc-1jh0hwx-0"
})(["color:", ";margin-right:8px;:hover{color:", ";}"], p => p._css, p => p._css2);

var _StyledIconButton2 = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "CardList___StyledIconButton2",
  componentId: "sc-1jh0hwx-1"
})(["color:", ";:hover{color:", ";}"], p => p._css3, p => p._css4);

const CardListContentForEditing = props => {
  const {
    headerTitle,
    headerTitleAddingItemsMode = headerTitle,
    renderEmptyState = _CardList.renderDefaultEmptyState,
    renderOptionsList = _CardList.renderDefaultOptionsList,
    renderSelectedItem,
    searchPlaceholder,
    selectedItems
  } = props;
  const {
    closeSearch,
    handleCancel,
    handleConfirm,
    isButtonDisabled,
    isSearchOpen,
    openSearch,
    options,
    searchValue,
    setSearchValue
  } = (0, _CardList2.useCardListForEditing)(props);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.Header, {
    cssHeaderRow: (0, _styledComponents2.css)`
          justify-content: space-between;
        `,
    title: isSearchOpen ? /*#__PURE__*/_react.default.createElement(IconHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_StyledIconButton, {
      display: _buttonTypes.ButtonDisplay.Chromeless,
      onClick: handleCancel,
      icon: "circle_arrow_left",
      _css: (0, _exports.getColor)(_exports.Colors.BrandLightBlue),
      _css2: (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.88)
    }), /*#__PURE__*/_react.default.createElement(_Header.HeaderTitle, null, headerTitleAddingItemsMode)) : headerTitle,
    actions: isSearchOpen ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
      display: _buttonTypes.ButtonDisplay.Secondary,
      onClick: handleConfirm,
      disabled: isButtonDisabled
    }, "Confirm") : /*#__PURE__*/_react.default.createElement(_StyledIconButton2, {
      icon: "add",
      display: _buttonTypes.ButtonDisplay.Chromeless,
      size: _buttonTypes.ButtonSize.Large,
      onClick: openSearch,
      _css3: (0, _exports.getColor)(_exports.Colors.BrandLightBlue),
      _css4: (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.88)
    })
  }), isSearchOpen ? /*#__PURE__*/_react.default.createElement(_CardListSearchSection.CardListSearchSection, {
    onSearchValueChange: setSearchValue,
    placeholder: searchPlaceholder,
    searchValue: searchValue
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(ListContainer, null, isSearchOpen ? renderOptionsList(options) : !RA.isEmpty(selectedItems) ? RA.map(renderSelectedItem)(selectedItems) : renderEmptyState({
    isSearchOpen,
    openSearch,
    closeSearch
  })));
};

const CardListContentViewOnly = ({
  headerTitle,
  renderSelectedItem,
  selectedItems,
  renderEmptyState = _CardList.renderDefaultEmptyState
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.Header, {
  cssHeaderRow: (0, _styledComponents2.css)`
        justify-content: space-between;
      `,
  title: headerTitle
}), /*#__PURE__*/_react.default.createElement(ListContainer, null, !RA.isEmpty(selectedItems) ? RA.map(renderSelectedItem)(selectedItems) : renderEmptyState({
  openSearch: _function.constVoid,
  closeSearch: _function.constVoid,
  isSearchOpen: false
})));

const CardListContent = props => props.mode === 'edit' ? /*#__PURE__*/_react.default.createElement(CardListContentForEditing, props) : /*#__PURE__*/_react.default.createElement(CardListContentViewOnly, props);
/**
 * @NOTE - Pete Murphy 2020-09-22 - Keeping this "wrapper" component separate in
 * case caller wants to, e.g., render a loading spinner inside while waiting for
 * `CardListProps` to resolve:
 *
 * @example
 * ```tsx
 * <CardListWrapper>
 *   {remoteLoadingFold(itemsRemoteData, items =>
 *     <CardListContent<ItemType>
 *       // ...
 *     />
 *   )}
 * </CardListWrapper>
 * ```
 */


exports.CardListContent = CardListContent;
const CardListWrapper = (0, _styledComponents2.default)(_Cards.BBCardBackground)`
  height: 240px;
  width: 256px;
`;
exports.CardListWrapper = CardListWrapper;

const CardList = props => /*#__PURE__*/_react.default.createElement(CardListWrapper, null, /*#__PURE__*/_react.default.createElement(CardListContent, props));

exports.CardList = CardList;