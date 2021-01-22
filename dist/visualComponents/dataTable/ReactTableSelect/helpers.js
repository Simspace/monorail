"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isItemsPerPageOption = isItemsPerPageOption;
exports.itemsPerPageOptionToValue = itemsPerPageOptionToValue;
exports.DEFAULT_ITEMS_PER_PAGE_OPTION = exports.ITEMS_PER_PAGE_OPTIONS = exports.ItemsPerPageOption = void 0;
let ItemsPerPageOption;
exports.ItemsPerPageOption = ItemsPerPageOption;

(function (ItemsPerPageOption) {
  ItemsPerPageOption["Twenty"] = "20";
  ItemsPerPageOption["Fifty"] = "50";
  ItemsPerPageOption["OneHundred"] = "100";
  ItemsPerPageOption["All"] = "All";
})(ItemsPerPageOption || (exports.ItemsPerPageOption = ItemsPerPageOption = {}));

const ITEMS_PER_PAGE_OPTIONS = [ItemsPerPageOption.Twenty, ItemsPerPageOption.Fifty, ItemsPerPageOption.OneHundred, ItemsPerPageOption.All];
exports.ITEMS_PER_PAGE_OPTIONS = ITEMS_PER_PAGE_OPTIONS;
const DEFAULT_ITEMS_PER_PAGE_OPTION = ITEMS_PER_PAGE_OPTIONS[0]; // Typeguard

exports.DEFAULT_ITEMS_PER_PAGE_OPTION = DEFAULT_ITEMS_PER_PAGE_OPTION;

function isItemsPerPageOption(value) {
  return Object.values(ItemsPerPageOption).includes(value);
}

function itemsPerPageOptionToValue(option, allValue) {
  switch (option) {
    case ItemsPerPageOption.Twenty:
      return 20;

    case ItemsPerPageOption.Fifty:
      return 50;

    case ItemsPerPageOption.OneHundred:
      return 100;

    case ItemsPerPageOption.All:
      return allValue;
  }
}