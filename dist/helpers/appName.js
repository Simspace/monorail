"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAppName = exports.convertAppNameToString = exports.convertStringToAppName = exports.convertAppNameToSecondaryColor = exports.convertAppNameToColor = exports.AppName = exports.AuthSubAppName = void 0;

var _color = require("./color");

let AuthSubAppName;
exports.AuthSubAppName = AuthSubAppName;

(function (AuthSubAppName) {
  AuthSubAppName["Academy"] = "academy";
  AuthSubAppName["Admin"] = "admin";
  AuthSubAppName["Catalog"] = "catalog";
  AuthSubAppName["EventDesign"] = "event-design";
  AuthSubAppName["Events"] = "events";
  AuthSubAppName["Execution"] = "execution";
  AuthSubAppName["Hardhat"] = "hardhat";
  AuthSubAppName["NetworkSetup"] = "network-setup";
  AuthSubAppName["Range"] = "range";
  AuthSubAppName["ReportsAnalytics"] = "reports-analytics";
  AuthSubAppName["TechOps"] = "techops";
  AuthSubAppName["Tracker"] = "tracker";
})(AuthSubAppName || (exports.AuthSubAppName = AuthSubAppName = {}));

let AppName;
exports.AppName = AppName;

(function (AppName) {
  AppName["Admin"] = "admin";
  AppName["EventDesign"] = "event-design";
  AppName["Events"] = "events";
  AppName["Execution"] = "execution";
  AppName["Hardhat"] = "hardhat";
  AppName["Home"] = "home";
  AppName["Impact"] = "impact";
  AppName["LMS"] = "externalLms";
  AppName["MyOrg"] = "my-org";
  AppName["NetworkSetup"] = "network-setup";
  AppName["Range"] = "range";
  AppName["Repo"] = "repo";
  AppName["ReportsAnalytics"] = "reports-analytics";
  AppName["TechOps"] = "techops";
  AppName["Tracker"] = "tracker";
  AppName["Training"] = "training";
})(AppName || (exports.AppName = AppName = {}));

const convertAppNameToColor = appNames => {
  switch (appNames) {
    case AppName.Events:
    case AppName.Execution:
    case AppName.Tracker:
    case AuthSubAppName.Events:
    case AuthSubAppName.Execution:
    case AuthSubAppName.Tracker:
      return _color.Colors.Tracker;

    case AppName.Range:
    case AuthSubAppName.Range:
    case AppName.EventDesign:
    case AppName.Hardhat:
    case AppName.NetworkSetup:
    case AuthSubAppName.Academy:
    case AuthSubAppName.Catalog:
    case AuthSubAppName.EventDesign:
    case AuthSubAppName.Hardhat:
    case AuthSubAppName.NetworkSetup:
      return _color.Colors.Catalog;

    case AppName.Impact:
    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
      return _color.Colors.Impact;

    case AppName.Training:
      return _color.Colors.Training;

    case AppName.Repo:
      return _color.Colors.Repo;

    case AppName.LMS:
      return _color.Colors.LMS;

    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return _color.Colors.TechOps;

    case AppName.Admin:
    case AuthSubAppName.Admin:
      return _color.Colors.Admin;

    case AppName.MyOrg:
      return _color.Colors.MyOrg;

    case AppName.Home:
      return _color.Colors.BrandLightBlue;

    default:
      return _color.Colors.White;
  }
};

exports.convertAppNameToColor = convertAppNameToColor;

const convertAppNameToSecondaryColor = appNames => {
  /* eslint-disable default-case */
  switch (appNames) {
    case AppName.Events:
    case AppName.Execution:
    case AppName.Tracker:
    case AuthSubAppName.Events:
    case AuthSubAppName.Execution:
    case AuthSubAppName.Tracker:
      return _color.Colors.TrackerAlt;

    case AppName.Range:
    case AuthSubAppName.Range:
    case AppName.EventDesign:
    case AppName.Hardhat:
    case AppName.NetworkSetup:
    case AuthSubAppName.Academy:
    case AuthSubAppName.Catalog:
    case AuthSubAppName.EventDesign:
    case AuthSubAppName.Hardhat:
    case AuthSubAppName.NetworkSetup:
      return _color.Colors.CatalogAlt;

    case AppName.Impact:
    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
      return _color.Colors.ImpactAlt;

    case AppName.Training:
      return _color.Colors.Training;

    case AppName.Repo:
      return _color.Colors.Repo;

    case AppName.LMS:
      return _color.Colors.LMS;

    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return _color.Colors.TechOpsAlt;

    case AppName.Admin:
    case AuthSubAppName.Admin:
      return _color.Colors.AdminAlt;

    case AppName.MyOrg:
      return _color.Colors.MyOrgAlt;

    case AppName.Home:
      return _color.Colors.BrandDarkBlue;

    default:
      return _color.Colors.White;
  }
  /* eslint-enable default-case */

};

exports.convertAppNameToSecondaryColor = convertAppNameToSecondaryColor;

const assertUnreachable = msg => {
  throw new Error(msg);
}; // TODO: lock down appNameString type to only valid appName strings for safety


const convertStringToAppName = appNameString => {
  switch (appNameString) {
    case 'admin':
      return AppName.Admin;

    case 'hardhat':
    case 'network-setup':
    case 'catalog':
    case 'academy':
    case 'event-design':
    case 'training':
      return AuthSubAppName.Catalog;

    case 'range':
      return AppName.Range;

    case 'tracker':
      return AppName.Tracker;

    case 'impact':
      return AppName.Impact;

    case 'techops':
      return AppName.TechOps;

    case 'repo':
      return AppName.Repo;

    case 'externalLms':
      return AppName.LMS;

    case 'execution':
      return AppName.Execution;

    case 'events':
      return AppName.Events;

    case 'reports-analytics':
      return AppName.ReportsAnalytics;

    case 'my-org':
      return AppName.MyOrg;

    case 'home':
      return AppName.Home;

    default:
      return AppName.Events;
  }
};

exports.convertStringToAppName = convertStringToAppName;

const convertAppNameToString = appName => {
  /* eslint-disable default-case */
  switch (appName) {
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return 'admin';

    case AuthSubAppName.Academy:
      return 'academy';

    case AppName.EventDesign:
    case AppName.NetworkSetup:
    case AuthSubAppName.Catalog:
    case AuthSubAppName.EventDesign:
    case AuthSubAppName.NetworkSetup:
      return 'catalog';

    case AppName.Range:
    case AuthSubAppName.Range:
      return 'range';

    case AppName.Tracker:
    case AuthSubAppName.Tracker:
      return 'tracker';

    case AppName.Hardhat:
    case AuthSubAppName.Hardhat:
      return 'hardhat';

    case AppName.Impact:
      return 'impact';

    case AppName.Training:
      return 'training';

    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return 'techops';

    case AppName.Repo:
      return 'repo';

    case AppName.LMS:
      return 'externalLms';

    case AppName.Events:
    case AuthSubAppName.Events:
    case AppName.Execution:
    case AuthSubAppName.Execution:
      return 'events';

    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
      return 'reports-analytics';

    case AppName.MyOrg:
      return 'my-org';

    case AppName.Home:
      return 'home';
  }
  /* eslint-disable default-case */

};

exports.convertAppNameToString = convertAppNameToString;

const isAppName = name => Object.values(AppName).includes(name) || Object.values(AuthSubAppName).includes(name);

exports.isAppName = isAppName;