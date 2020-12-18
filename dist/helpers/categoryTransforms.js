"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryPathname = exports.categoryColorV2 = exports.categoryColor = exports.categoryIconV2 = exports.categoryIcon = exports.categoryReadableName = exports.CategoryId = void 0;

var _color = require("./color");

var _colors = require("../v2/core/theme/colors");

var Icons = _interopRequireWildcard(require("../v2/icons/Icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let CategoryId;
exports.CategoryId = CategoryId;

(function (CategoryId) {
  CategoryId["AcademyCoursePlan"] = "academy-course-plan";
  CategoryId["AcademyPackage"] = "academy-package";
  CategoryId["AcademyContentModule"] = "academy-content-module";
  CategoryId["Assessments"] = "assessments";
  CategoryId["AttackScenario"] = "attack-scenario";
  CategoryId["AttackTool"] = "attack-tool";
  CategoryId["HardhatSpec"] = "hardhat-specification";
  CategoryId["IndividualAssessments"] = "individual-assessments";
  CategoryId["ConfigModule"] = "config-module";
  CategoryId["PuppetModule"] = "puppet-module";
  CategoryId["ExternalSubnet"] = "external-subnet";
  CategoryId["Network"] = "network";
  CategoryId["PhysicalAsset"] = "physical-asset";
  CategoryId["Range"] = "range";
  CategoryId["VMTemplate"] = "vm-template";
  CategoryId["CloneSource"] = "clone-source";
  CategoryId["Event"] = "event";
  CategoryId["LiveActionPlan"] = "event-template";
  CategoryId["Exercise"] = "exercise";
  CategoryId["TeamAssessmentPlan"] = "team-assessment-plan";
})(CategoryId || (exports.CategoryId = CategoryId = {}));

const categoryReadableName = entryCategory => {
  switch (entryCategory) {
    case CategoryId.AcademyCoursePlan:
      return 'Course Plan';

    case CategoryId.AcademyPackage:
      return 'Structured Content Plan';

    case CategoryId.AcademyContentModule:
      return 'Content Module';

    case CategoryId.LiveActionPlan:
      return 'Live Action Plan';

    case CategoryId.HardhatSpec:
      return 'Network Spec';

    case CategoryId.IndividualAssessments:
      return 'Individual Assessments';

    case CategoryId.ExternalSubnet:
      return 'External Subnet';

    case CategoryId.PhysicalAsset:
      return 'Physical Asset';

    case CategoryId.ConfigModule:
      return 'Config Module';

    case CategoryId.PuppetModule:
      return 'Puppet Module';

    case CategoryId.VMTemplate:
      return 'VM Template';

    case CategoryId.Range:
      return 'Range';

    case CategoryId.Event:
      return 'Event';

    case CategoryId.AttackScenario:
      return 'Attack Scenario';

    case CategoryId.AttackTool:
      return 'Attack Tool';

    case CategoryId.Network:
      return 'Network';

    case CategoryId.Exercise:
      return 'Exercise';

    case CategoryId.CloneSource:
      return 'Clone Source';

    case CategoryId.TeamAssessmentPlan:
      return 'Team Assessment Plan';

    default:
      // TODO: default needs to remain until FAKE_CATEGORY is removed. Address in PS-12579 {SF 2020/09/16}
      return entryCategory;
  }
};
/** @deprecated use v2 Icon + categoryIconV2 */


exports.categoryReadableName = categoryReadableName;

const categoryIcon = entryCategory => {
  // If you need to update this, *please update v2 version below!*
  switch (entryCategory) {
    case CategoryId.AcademyCoursePlan:
      return 'local_library';

    case CategoryId.AcademyPackage:
      return 'school';

    case CategoryId.Assessments:
      return 'assignment';

    case CategoryId.LiveActionPlan:
      return 'live';

    case CategoryId.AcademyContentModule:
      return 'category';

    case CategoryId.HardhatSpec:
      return 'device_hub';

    case CategoryId.ConfigModule:
      return 'code';

    case CategoryId.PuppetModule:
      return 'puppet';

    case CategoryId.ExternalSubnet:
      return 'dns';

    case CategoryId.PhysicalAsset:
      return 'router';

    case CategoryId.Range:
      return 'dns';

    case CategoryId.VMTemplate:
      return 'desktop_windows';

    case CategoryId.CloneSource:
      return 'aspect_ratio';

    case CategoryId.Event:
      return 'calendar_today';

    case CategoryId.Exercise:
      return 'bar_chart';

    case CategoryId.AttackScenario:
      return 'target';

    case CategoryId.AttackTool:
      return 'tools';

    case CategoryId.Network:
      return 'device_hub';

    case CategoryId.TeamAssessmentPlan:
    case CategoryId.IndividualAssessments:
      return 'assignment_turned_in';

    default:
      // TODO: default needs to remain until FAKE_CATEGORY is removed. Address in PS-12579 {SF 2020/09/16}
      return entryCategory;
    // TODO: this is undesirable, but this is what the code was doing before and is apparently required. It's not clear what entryCategory is, but it should not be a string - it should be some other union that can be mapped to an IconType if needed. (AW 2020-6-25)
  }
};

exports.categoryIcon = categoryIcon;

const categoryIconV2 = entryCategory => {
  switch (entryCategory) {
    case CategoryId.AcademyCoursePlan:
      return Icons.LocalLibrary;

    case CategoryId.AcademyPackage:
      return Icons.School;

    case CategoryId.LiveActionPlan:
      return Icons.Live;

    case CategoryId.AcademyContentModule:
      return Icons.Category;

    case CategoryId.HardhatSpec:
      return Icons.DeviceHub;

    case CategoryId.ConfigModule:
      return Icons.Code;

    case CategoryId.PuppetModule:
      return Icons.Puppet;

    case CategoryId.ExternalSubnet:
      return Icons.Dns;

    case CategoryId.PhysicalAsset:
      return Icons.Router;

    case CategoryId.Range:
      return Icons.Dns;

    case CategoryId.VMTemplate:
      return Icons.DesktopWindows;

    case CategoryId.CloneSource:
      return Icons.AspectRatio;

    case CategoryId.Event:
      return Icons.CalendarToday;

    case CategoryId.Exercise:
      return Icons.BarChart;

    case CategoryId.AttackScenario:
      return Icons.Target;

    case CategoryId.AttackTool:
      return Icons.Tools;

    case CategoryId.Network:
      return Icons.DeviceHub;

    case CategoryId.TeamAssessmentPlan:
    case CategoryId.IndividualAssessments:
      return Icons.AssignmentTurnedIn;

    default:
      // TODO: default needs to remain until FAKE_CATEGORY is removed. Address in PS-12579 {SF 2020/09/16}
      return Icons.Help;
  }
}; // export const entryIcon = (entry: CatalogEntry) =>
//   fromNullable(entry.fields.archived as Array<boolean>)
//     .chain(x => findFirst(x, y => y === true))
//     .fold(categoryIcon(entry.categoryId), x => 'archived')

/** @deprecated Use v2 theme colors */


exports.categoryIconV2 = categoryIconV2;

const categoryColor = entryCategory => {
  // If you need to update this, *please update v2 version below!*
  switch (entryCategory) {
    case CategoryId.ExternalSubnet:
    case CategoryId.HardhatSpec:
    case CategoryId.VMTemplate:
    case CategoryId.Network:
    case CategoryId.Range:
    case CategoryId.PhysicalAsset:
    case CategoryId.CloneSource:
    case CategoryId.ConfigModule:
    case CategoryId.PuppetModule:
      return _color.Colors.RangeAlt;

    case CategoryId.Exercise:
    case CategoryId.Event:
      return _color.Colors.Tracker;

    case CategoryId.AttackScenario:
    case CategoryId.AttackTool:
      return _color.Colors.AttackElements;

    case CategoryId.AcademyCoursePlan:
    case CategoryId.AcademyPackage:
    case CategoryId.AcademyContentModule:
    case CategoryId.LiveActionPlan:
      return _color.Colors.Academy;

    case CategoryId.Assessments:
    case CategoryId.IndividualAssessments:
      return _color.Colors.Assessments;

    case CategoryId.TeamAssessmentPlan:
      return _color.Colors.TeamAssessmentPlan;

    default:
      // TODO: default needs to remain until FAKE_CATEGORY is removed. Address in PS-12579 {SF 2020/09/16}
      return _color.Colors.Academy;
  }
};

exports.categoryColor = categoryColor;

const categoryColorV2 = entryCategory => {
  switch (entryCategory) {
    case CategoryId.ExternalSubnet:
    case CategoryId.HardhatSpec:
    case CategoryId.VMTemplate:
    case CategoryId.Network:
    case CategoryId.Range:
    case CategoryId.PhysicalAsset:
    case CategoryId.CloneSource:
    case CategoryId.ConfigModule:
    case CategoryId.PuppetModule:
      return _colors.ColorAlias.SpecialFallbackRangeColor_NOT_WCAG;

    case CategoryId.Exercise:
    case CategoryId.Event:
      return _colors.ColorAlias.EventsGraphic;

    case CategoryId.AttackScenario:
    case CategoryId.AttackTool:
      return _colors.ColorAlias.ReportsAnalyticsAA;

    case CategoryId.AcademyCoursePlan:
    case CategoryId.AcademyPackage:
    case CategoryId.AcademyContentModule:
    case CategoryId.LiveActionPlan:
      return _colors.ColorAlias.PersonnelGraphic;

    case CategoryId.IndividualAssessments:
      return _colors.ColorAlias.ContentAuthoringAA;
    // Needs updating from UX

    case CategoryId.TeamAssessmentPlan:
      return _colors.ColorAlias.ContentAuthoringAA;
    // Needs updating from UX
    // TODO: default needs to remain until FAKE_CATEGORY is removed. Address in PS-12579 {SF 2020/09/16}

    default:
      return _colors.ColorAlias.PersonnelGraphic;
  }
}; // export const entryColor = (entry: CatalogEntry) =>
//   fromNullable(entry.fields.archived as Array<boolean>)
//     .chain(x => findFirst(x, y => y === true))
//     .fold(categoryColor(entry.categoryId), x => Colors.Black38a)


exports.categoryColorV2 = categoryColorV2;

const categoryPathname = entryCategory => {
  switch (entryCategory) {
    case CategoryId.AcademyCoursePlan:
      return '/catalog/course-plan';

    case CategoryId.AcademyPackage:
      return '/catalog/structured-content-plans';

    case CategoryId.AcademyContentModule:
      return '/catalog/content-modules';

    case CategoryId.ExternalSubnet:
      return '/catalog/external-subnets';

    case CategoryId.HardhatSpec:
      return '/catalog/network-spec';

    case CategoryId.PhysicalAsset:
      return '/catalog/physical-assets';

    case CategoryId.VMTemplate:
      return '/catalog/vm-templates';

    case CategoryId.ConfigModule:
      return '/catalog/config-modules';

    case CategoryId.PuppetModule:
      return '/catalog/puppet-modules';

    case CategoryId.Event:
      return '/events';

    case CategoryId.AttackScenario:
      return '/catalog/attack-scenarios';

    case CategoryId.AttackTool:
      return '/catalog/attack-tools';

    case CategoryId.LiveActionPlan:
      return '/catalog/live-action-plans';

    case CategoryId.IndividualAssessments:
      return '/catalog/individual-assessments';

    case CategoryId.TeamAssessmentPlan:
      return '/catalog/team-assessment-plans';

    default:
      // TODO: default needs to remain until FAKE_CATEGORY is removed. Address in PS-12579 {SF 2020/09/16}
      return '/catalog';
  }
};

exports.categoryPathname = categoryPathname;