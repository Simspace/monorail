"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCardListForEditing = void 0;

var _react = require("react");

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var RA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyArray"));

var _hooks = require("../../helpers/hooks");

var _ReadonlyArray2 = require("../../sharedHelpers/fp-ts-ext/ReadonlyArray");

var _strings = require("../../sharedHelpers/strings");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useCardListForEditing = params => {
  const {
    allItems,
    eq,
    onChangeSelectedItems,
    toListItem,
    toSearchableStrings = (0, _function.flow)(params.toListItem, item => [item.primaryText]),
    selectedItems
  } = params;
  const [searchValue, setSearchValue] = (0, _react.useState)('');
  const [selectedItemsLocal, setSelectedItemsLocal] = (0, _react.useState)(selectedItems);
  const [isSearchOpen, openSearch, closeSearch] = (0, _hooks.useToggle)(false);
  (0, _react.useEffect)(() => {
    // @NOTE - Pete Murphy 2020-09-22 - Overwrite local state with parent state
    // when parent state changes. If we were mounting and unmounting the
    // "options list" when toggling the `isSearchOpen` state, this would be
    // covered by initializing `selectedItemsLocal` with `selectedItems`, but
    // since we're not, this is a sufficient approximation.
    setSelectedItemsLocal(selectedItems);
  }, [selectedItems]);
  const isButtonDisabled = (0, _react.useMemo)(() => RA.isEmpty((0, _ReadonlyArray2.xor)(eq)(selectedItemsLocal, selectedItems)), [eq, selectedItems, selectedItemsLocal]);
  const handleCancel = closeSearch;

  const handleConfirm = () => {
    onChangeSelectedItems(selectedItemsLocal);
    closeSearch();
  };

  const handleToggleItem = item => setSelectedItemsLocal((0, _ReadonlyArray2.xor)(eq)([item], selectedItemsLocal));

  const options = (0, _function.pipe)(allItems, RA.filterMap(item => toSearchableStrings(item).some((0, _strings.elemLocaleLowerCase)(searchValue)) ? O.some({
    item,
    type: 'checkbox',
    onChange: () => handleToggleItem(item),
    checked: RA.elem(eq)(item)(selectedItemsLocal),
    ...toListItem(item)
  }) : O.none));
  return {
    closeSearch,
    handleCancel,
    handleConfirm,
    isButtonDisabled,
    isSearchOpen,
    openSearch,
    options,
    searchValue,
    setSearchValue
  };
};

exports.useCardListForEditing = useCardListForEditing;