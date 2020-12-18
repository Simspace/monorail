"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCardListForEditing = void 0;

var _react = require("react");

var _function = require("fp-ts/lib/function");

var _fpTsImports = require("../../sharedHelpers/fp-ts-imports");

var _hooks = require("../../helpers/hooks");

var _ReadonlyArray = require("../../sharedHelpers/fp-ts-ext/ReadonlyArray");

var _strings = require("../../sharedHelpers/strings");

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
  const isButtonDisabled = (0, _react.useMemo)(() => _fpTsImports.RA.isEmpty((0, _ReadonlyArray.xor)(eq)(selectedItemsLocal, selectedItems)), [eq, selectedItems, selectedItemsLocal]);
  const handleCancel = closeSearch;

  const handleConfirm = () => {
    onChangeSelectedItems(selectedItemsLocal);
    closeSearch();
  };

  const handleToggleItem = item => setSelectedItemsLocal((0, _ReadonlyArray.xor)(eq)([item], selectedItemsLocal));

  const options = (0, _fpTsImports.pipe)(allItems, _fpTsImports.RA.filterMap(item => toSearchableStrings(item).some((0, _strings.elemLocaleLowerCase)(searchValue)) ? _fpTsImports.O.some({
    item,
    type: 'checkbox',
    onChange: () => handleToggleItem(item),
    checked: _fpTsImports.RA.elem(eq)(item)(selectedItemsLocal),
    ...toListItem(item)
  }) : _fpTsImports.O.none));
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