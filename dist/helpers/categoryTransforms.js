"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryPathname = exports.categoryColor = exports.categoryIcon = exports.categoryReadableName = void 0;

var _color = require("./color");

const categoryReadableName = entryCategory => {
  switch (entryCategory) {
    case 'academy-package':
      return 'Event Plan';

    case 'academy-content-module':
      return 'Content Module';

    case 'hardhat-specification':
      return 'Network Spec';

    case 'operating-system':
      return 'Operating System';

    case 'physical-asset':
      return 'Physical Asset';

    case 'vm-template':
      return 'VM Template';

    case 'range':
      return 'Range';

    case 'event':
      return 'Event';

    default:
      return entryCategory;
  }
};

exports.categoryReadableName = categoryReadableName;

const categoryIcon = entryCategory => {
  switch (entryCategory) {
    case 'academy-package':
      return 'school';

    case 'academy-content-module':
      return 'category';

    case 'hardhat-specification':
      return 'device_hub';

    case 'operating-system':
      return 'code';

    case 'physical-asset':
      return 'router';

    case 'range':
      return 'dns';

    case 'vm-template':
      return 'desktop_windows';

    case 'clone-source':
      return 'aspect_ratio';

    case 'event':
      return 'calendar_today';

    case 'exercise':
      return 'bar_chart';

    default:
      return entryCategory;
  }
}; // export const entryIcon = (entry: CatalogEntry) =>
//   fromNullable(entry.fields.archived as Array<boolean>)
//     .chain(x => findFirst(x, y => y === true))
//     .fold(categoryIcon(entry.categoryId), x => 'archived')


exports.categoryIcon = categoryIcon;

const categoryColor = entryCategory => {
  switch (entryCategory) {
    case 'hardhat-specification':
    case 'operating-system':
    case 'vm-template':
    case 'network':
    case 'range':
    case 'physical-asset':
    case 'clone-source':
      return _color.Colors.Range;

    case 'exercise':
    case 'event':
      return _color.Colors.Tracker;

    default:
      return _color.Colors.Academy;
  }
}; // export const entryColor = (entry: CatalogEntry) =>
//   fromNullable(entry.fields.archived as Array<boolean>)
//     .chain(x => findFirst(x, y => y === true))
//     .fold(categoryColor(entry.categoryId), x => Colors.Black38)


exports.categoryColor = categoryColor;

const categoryPathname = entryCategory => {
  switch (entryCategory) {
    case 'academy-package':
      return '/catalog/training-packages';

    case 'academy-content-module':
      return '/catalog/content-modules';

    case 'hardhat-specification':
      return '/catalog/network-spec';

    case 'physical-asset':
      return '/catalog/physical-assets';

    case 'vm-template':
      return '/catalog/vm-templates';

    case 'operating-system':
      return '/catalog/operating-systems';

    case 'event':
      return '/events';

    default:
      return '/catalog/discover';
  }
};

exports.categoryPathname = categoryPathname;