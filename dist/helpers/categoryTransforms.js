"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryPathname = exports.categoryColor = exports.categoryIcon = exports.categoryReadableName = void 0;

var _color = require("./color");

const categoryReadableName = entryCategory => {
  switch (entryCategory) {
    case 'academy-course-plan':
      return 'Course Plan';

    case 'academy-package':
      return 'Training Package';

    case 'academy-content-module':
      return 'Content Module';

    case 'hardhat-specification':
      return 'Network Spec';

    case 'external-subnet':
      return 'External Subnet';

    case 'physical-asset':
      return 'Physical Asset';

    case 'config-module':
      return 'Config Module';

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
    case 'academy-course-plan':
      return 'local_library';

    case 'academy-package':
      return 'school';

    case 'academy-content-module':
      return 'category';

    case 'hardhat-specification':
      return 'device_hub';

    case 'config-module':
      return 'code';

    case 'external-subnet':
      return 'dns';

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
    case 'external-subnet':
    case 'hardhat-specification':
    case 'vm-template':
    case 'network':
    case 'range':
    case 'physical-asset':
    case 'clone-source':
    case 'config-module':
      return _color.Colors.RangeAlt;

    case 'exercise':
    case 'event':
      return _color.Colors.Tracker;

    case 'academy-course-plan':
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
    case 'academy-course-plan':
      return '/catalog/course-plan';

    case 'academy-package':
      return '/catalog/training-packages';

    case 'academy-content-module':
      return '/catalog/content-modules';

    case 'external-subnet':
      return '/catalog/external-subnets';

    case 'hardhat-specification':
      return '/catalog/network-spec';

    case 'physical-asset':
      return '/catalog/physical-assets';

    case 'vm-template':
      return '/catalog/vm-templates';

    case 'config-module':
      return '/catalog/config-modules';

    case 'event':
      return '/events';

    default:
      return '/catalog/discover';
  }
};

exports.categoryPathname = categoryPathname;