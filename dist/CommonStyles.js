"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = exports.sizes = exports.transition = exports.buttonTransition = exports.ease = exports.generateScaleAnimation = exports.borderRadius = exports.BorderRadius = exports.baseDisabledStyles = exports.basePrimaryStyles = exports.baseSecondaryStyles = exports.baseChromelessStyles = exports.baseOutlineStyles = exports.baseFocusStyles = exports.colors = exports.convertHSLAMapToCss = exports.colorHSLAMap = exports.convertEventStateToColor = exports.isAppName = exports.convertAppNameToString = exports.convertStringToAppName = exports.convertAppNameToColor = exports.Colors = exports.EventState = exports.AppName = exports.gothamFontFamily = exports.shortHandDeconstruction = exports.typographyMargin = exports.typography = exports.FontSizes = exports.FontWeights = exports.ellipsis = exports.flexFlow = exports.getElevation = exports.ElevationRange = exports.visible = void 0;

var _styledComponents = require("styled-components");

var AuthSubAppName;

(function (AuthSubAppName) {
  AuthSubAppName["Academy"] = "academy";
  AuthSubAppName["Admin"] = "admin";
  AuthSubAppName["Catalog"] = "catalog";
  AuthSubAppName["Dashboard"] = "dashboard";
  AuthSubAppName["Hardhat"] = "hardhat";
  AuthSubAppName["Range"] = "range";
  AuthSubAppName["TechOps"] = "techops";
  AuthSubAppName["Tracker"] = "tracker";
  AuthSubAppName["Execution"] = "execution";
  AuthSubAppName["Home"] = "home";
  AuthSubAppName["Events"] = "events";
  AuthSubAppName["EventDesign"] = "event-design";
})(AuthSubAppName || (AuthSubAppName = {}));

const visible = (isVisible = false) => isVisible ? (0, _styledComponents.css)(["visibility:visible;opacity:0.9999;"]) : (0, _styledComponents.css)(["visibility:hidden;opacity:0;"]);
/*
* Elevation
*/


exports.visible = visible;
let ElevationRange;
exports.ElevationRange = ElevationRange;

(function (ElevationRange) {
  ElevationRange["Elevation0"] = "elevation0";
  ElevationRange["Elevation1"] = "elevation1";
  ElevationRange["Elevation2"] = "elevation2";
  ElevationRange["Elevation3"] = "elevation3";
  ElevationRange["Elevation4"] = "elevation4";
  ElevationRange["Elevation5"] = "elevation5";
  ElevationRange["Elevation6"] = "elevation6";
  ElevationRange["Elevation7"] = "elevation7";
  ElevationRange["Elevation8"] = "elevation8";
  ElevationRange["Elevation9"] = "elevation9";
  ElevationRange["Elevation10"] = "elevation10";
  ElevationRange["Elevation11"] = "elevation11";
  ElevationRange["Elevation12"] = "elevation12";
  ElevationRange["Elevation13"] = "elevation13";
  ElevationRange["Elevation14"] = "elevation14";
  ElevationRange["Elevation15"] = "elevation15";
  ElevationRange["Elevation16"] = "elevation16";
  ElevationRange["Elevation17"] = "elevation17";
  ElevationRange["Elevation18"] = "elevation18";
  ElevationRange["Elevation19"] = "elevation19";
  ElevationRange["Elevation20"] = "elevation20";
  ElevationRange["Elevation21"] = "elevation21";
  ElevationRange["Elevation22"] = "elevation22";
  ElevationRange["Elevation23"] = "elevation23";
  ElevationRange["Elevation24"] = "elevation24";
})(ElevationRange || (exports.ElevationRange = ElevationRange = {}));

const elevationStyles = {
  [ElevationRange.Elevation0]: '0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation1]: '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation2]: '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation3]: '0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation4]: '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation5]: '0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation6]: '0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation7]: '0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)',
  [ElevationRange.Elevation8]: '0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)',
  [ElevationRange.Elevation9]: '0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)',
  [ElevationRange.Elevation10]: '0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)',
  [ElevationRange.Elevation11]: '0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)',
  [ElevationRange.Elevation12]: '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation13]: '0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation14]: '0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation15]: '0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation16]: '0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation17]: '0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation18]: '0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)',
  [ElevationRange.Elevation19]: '0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)',
  [ElevationRange.Elevation20]: '0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation21]: '0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation22]: '0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation23]: '0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)',
  [ElevationRange.Elevation24]: '0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)'
};

const getElevation = elevation => (0, _styledComponents.css)(["box-shadow:", ";"], elevationStyles[elevation]);
/*
* Flex Helpers
*/


exports.getElevation = getElevation;
const defaultDirection = 'column';
const defaultWrap = 'nowrap';

const flexFlow = (direction = defaultDirection, wrap = defaultWrap) => (0, _styledComponents.css)(["display:flex;flex-flow:", " ", ";"], direction, wrap);
/*
* Typography
*/


exports.flexFlow = flexFlow;
const ellipsis =
/*#__PURE__*/
(0, _styledComponents.css)(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
exports.ellipsis = ellipsis;
let FontWeights;
exports.FontWeights = FontWeights;

(function (FontWeights) {
  FontWeights[FontWeights["ExtraLight"] = 200] = "ExtraLight";
  FontWeights[FontWeights["Light"] = 300] = "Light";
  FontWeights[FontWeights["Book"] = 400] = "Book";
  FontWeights[FontWeights["Medium"] = 500] = "Medium";
  FontWeights[FontWeights["Bold"] = 700] = "Bold";
  FontWeights[FontWeights["Black"] = 800] = "Black";
})(FontWeights || (exports.FontWeights = FontWeights = {}));

let FontSizes;
exports.FontSizes = FontSizes;

(function (FontSizes) {
  FontSizes["Hyper1"] = "hyper1";
  FontSizes["Hyper2"] = "hyper2";
  FontSizes["Hyper3"] = "hyper3";
  FontSizes["Hyper4"] = "hyper4";
  FontSizes["Title1"] = "title1";
  FontSizes["Title2"] = "title2";
  FontSizes["Title3"] = "title3";
  FontSizes["Title4"] = "title4";
  FontSizes["Title5"] = "title5";
  FontSizes["Content"] = "content";
  FontSizes["Micro"] = "micro";
})(FontSizes || (exports.FontSizes = FontSizes = {}));

const fontSizeLookUp = {
  [FontSizes.Hyper1]: {
    fontSize: '44px',
    lineHeight: '56px'
  },
  [FontSizes.Hyper2]: {
    fontSize: '38px',
    lineHeight: '40px'
  },
  [FontSizes.Hyper3]: {
    fontSize: '33px',
    lineHeight: '36px'
  },
  [FontSizes.Hyper4]: {
    fontSize: '25px',
    lineHeight: '32px'
  },
  [FontSizes.Title1]: {
    fontSize: '22px',
    lineHeight: '28px'
  },
  [FontSizes.Title2]: {
    fontSize: '19px',
    lineHeight: '24px'
  },
  [FontSizes.Title3]: {
    fontSize: '16px',
    lineHeight: '20px'
  },
  [FontSizes.Title4]: {
    fontSize: '14px',
    lineHeight: '18px'
  },
  [FontSizes.Title5]: {
    fontSize: '11px',
    lineHeight: '16px'
  },
  [FontSizes.Content]: {
    fontSize: '8px',
    lineHeight: '10px'
  },
  [FontSizes.Micro]: {
    fontSize: '5px',
    lineHeight: '6px'
  }
};

const typography = (weight, size, margin) => ({
  fontWeight: weight,
  ...fontSizeLookUp[size],
  ...(margin ? typographyMargin(size, margin) : {})
});

exports.typography = typography;
const fontMarginLookUp = {
  [FontSizes.Hyper1]: {
    top: -11,
    bottom: -13
  },
  [FontSizes.Hyper2]: {
    top: -5,
    bottom: -7
  },
  [FontSizes.Hyper3]: {
    top: -6,
    bottom: -6
  },
  [FontSizes.Hyper4]: {
    top: -7,
    bottom: -7
  },
  [FontSizes.Title1]: {
    top: -6,
    bottom: -6
  },
  [FontSizes.Title2]: {
    top: -4,
    bottom: -6
  },
  [FontSizes.Title3]: {
    top: -5,
    bottom: -5
  },
  [FontSizes.Title4]: {
    top: -4,
    bottom: -4
  },
  [FontSizes.Title5]: {
    top: -4,
    bottom: -4
  },
  [FontSizes.Content]: {
    top: -2,
    bottom: -2
  },
  [FontSizes.Micro]: {
    top: -1,
    bottom: -1
  }
};

const typographyMargin = (size, margin = '') => {
  const fontSizeMargins = fontMarginLookUp[size];
  const marginObject = shortHandDeconstruction(margin);
  const mergedObject = {
    top: mergeValues(marginObject.top, fontSizeMargins.top),
    right: mergeValues(marginObject.right, fontSizeMargins.right),
    bottom: mergeValues(marginObject.bottom, fontSizeMargins.bottom),
    left: mergeValues(marginObject.left, fontSizeMargins.left)
  };
  return {
    margin: sizingObjectToString(mergedObject)
  };
};

exports.typographyMargin = typographyMargin;

const mergeValues = (firstValue = 0, secondValue = 0) => {
  if (firstValue === 'auto' || secondValue === 'auto') {
    return 'auto';
  }

  return firstValue + secondValue;
};

const stripPx = value => {
  if (value === 'auto') {
    return value;
  }

  return Number(value.replace(/px/gi, ''));
};

const addPx = value => {
  if (!value) {
    return '0px';
  }

  if (value === 'auto') {
    return value;
  }

  return value + 'px';
};

const shortHandDeconstruction = value => {
  if (value === '') {
    return {};
  }

  const spiltValue = value.split(' ').map(stripPx);

  switch (spiltValue.length) {
    case 4:
      return {
        top: spiltValue[0],
        right: spiltValue[1],
        bottom: spiltValue[2],
        left: spiltValue[3]
      };

    case 3:
      return {
        top: spiltValue[0],
        right: spiltValue[1],
        bottom: spiltValue[2],
        left: spiltValue[1]
      };

    case 2:
      return {
        top: spiltValue[0],
        right: spiltValue[1],
        bottom: spiltValue[0],
        left: spiltValue[1]
      };

    default:
    case 1:
      return {
        top: spiltValue[0],
        right: spiltValue[0],
        bottom: spiltValue[0],
        left: spiltValue[0]
      };
  }
};

exports.shortHandDeconstruction = shortHandDeconstruction;

const sizingObjectToString = size => {
  return `${addPx(size.top)} ${addPx(size.right)} ${addPx(size.bottom)} ${addPx(size.left)}`;
};

const gothamFontFamily =
/*#__PURE__*/
(0, _styledComponents.css)(["font-family:'Gotham SSm A','Gotham SSm B',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;letter-spacing:initial;text-rendering:optimizeLegibility;"]); //#region App Name

/**
 * App Name
 */

exports.gothamFontFamily = gothamFontFamily;
let AppName; //#endregion App Name

exports.AppName = AppName;

(function (AppName) {
  AppName["Admin"] = "admin";
  AppName["Dashboard"] = "dashboard";
  AppName["Hardhat"] = "hardhat";
  AppName["Impact"] = "impact";
  AppName["LMS"] = "externalLms";
  AppName["Range"] = "range";
  AppName["Repo"] = "repo";
  AppName["TechOps"] = "techops";
  AppName["Tracker"] = "tracker";
  AppName["Training"] = "training";
  AppName["Execution"] = "execution";
  AppName["Home"] = "home";
  AppName["Events"] = "events";
  AppName["EventDesign"] = "event-design";
})(AppName || (exports.AppName = AppName = {}));

let EventState;
exports.EventState = EventState;

(function (EventState) {
  EventState["Active"] = "active";
  EventState["Canceled"] = "canceled";
  EventState["Finished"] = "finished";
  EventState["Scheduled"] = "scheduled";
  EventState["Requested"] = "requested";
  EventState["Inactive"] = "inactive";
})(EventState || (exports.EventState = EventState = {}));

let Colors;
exports.Colors = Colors;

(function (Colors) {
  Colors["Black24"] = "black24";
  Colors["Black54"] = "black54";
  Colors["Black62"] = "black62";
  Colors["Black74"] = "black74";
  Colors["Black89"] = "black89";
  Colors["Black"] = "black";
  Colors["White89"] = "white89";
  Colors["White"] = "white";
  Colors["Grey94"] = "grey94";
  Colors["Grey96"] = "grey96";
  Colors["Grey97"] = "grey97";
  Colors["Grey98"] = "grey98";
  Colors["Grey99"] = "grey99";
  Colors["BrandLightBlue"] = "brandLightBlue";
  Colors["BrandDarkBlue"] = "brandDarkBlue";
  Colors["PCTEPurple"] = "PCTEPurple";
  Colors["AccentBlue300"] = "accentBlue300";
  Colors["AccentBlue400"] = "accentBlue400";
  Colors["AccentBlue500"] = "accentBlue500";
  Colors["AccentBlue600"] = "accentBlue600";
  Colors["AccentBlue700"] = "accentBlue700";
  Colors["AccentPurple500"] = "accentPurple500";
  Colors["AccentPurple700"] = "accentPurple700";
  Colors["Active"] = "active";
  Colors["Canceled"] = "canceled";
  Colors["Finished"] = "finished";
  Colors["Scheduled"] = "scheduled";
  Colors["Requested"] = "requested";
  Colors["Inactive"] = "inactive";
  Colors["Academy"] = "academy";
  Colors["Execution"] = "execution";
  Colors["Admin"] = "admin";
  Colors["Catalog"] = "catalog";
  Colors["Dashboard"] = "dashboard";
  Colors["Range"] = "range";
  Colors["Tracker"] = "tracker";
  Colors["Hardhat"] = "hardhat";
  Colors["Impact"] = "impact";
  Colors["Training"] = "training";
  Colors["TechOps"] = "techops";
  Colors["Repo"] = "repo";
  Colors["LMS"] = "externalLms";
  Colors["Green"] = "green";
  Colors["Red"] = "red";
  Colors["Amber"] = "amber";
})(Colors || (exports.Colors = Colors = {}));

const assertUnreachable = msg => {
  throw new Error(msg);
};

const convertAppNameToColor = appNames => {
  switch (appNames) {
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return Colors.Admin;

    case AuthSubAppName.Academy:
      return Colors.Academy;

    case AuthSubAppName.Catalog:
      return Colors.Catalog;

    case AppName.Dashboard:
    case AuthSubAppName.Dashboard:
      return Colors.Dashboard;

    case AppName.Home:
    case AuthSubAppName.Home:
    case AppName.Events:
    case AuthSubAppName.Events:
    case AppName.EventDesign:
    case AuthSubAppName.EventDesign:
    case AuthSubAppName.Execution:
    case AppName.Execution:
      return Colors.White;

    case AppName.Range:
    case AuthSubAppName.Range:
      return Colors.Range;

    case AppName.Tracker:
    case AuthSubAppName.Tracker:
      return Colors.Tracker;

    case AppName.Hardhat:
    case AuthSubAppName.Hardhat:
      return Colors.Hardhat;

    case AppName.Impact:
      return Colors.Impact;

    case AppName.Training:
      return Colors.Training;

    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return Colors.TechOps;

    case AppName.Repo:
      return Colors.Repo;

    case AppName.LMS:
      return Colors.LMS;
  }
}; // TODO: lock down appNameString type to only valid appName strings for safety


exports.convertAppNameToColor = convertAppNameToColor;

const convertStringToAppName = appNameString => {
  switch (appNameString) {
    case 'admin':
      return AppName.Admin;

    case 'academy':
      return AuthSubAppName.Academy;

    case 'catalog':
      return AuthSubAppName.Catalog;

    case 'dashboard':
      return AppName.Dashboard;

    case 'range':
      return AppName.Range;

    case 'tracker':
      return AppName.Tracker;

    case 'hardhat':
      return AppName.Hardhat;

    case 'impact':
      return AppName.Impact;

    case 'training':
      return AppName.Training;

    case 'techops':
      return AppName.TechOps;

    case 'repo':
      return AppName.Repo;

    case 'externalLms':
      return AppName.LMS;

    case 'execution':
      return AppName.Execution;

    case 'home':
      return AppName.Home;

    case 'events':
      return AppName.Events;

    case 'event-design':
      return AppName.EventDesign;

    default:
      return assertUnreachable('Invalid appName');
  }
};

exports.convertStringToAppName = convertStringToAppName;

const convertAppNameToString = appName => {
  switch (appName) {
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return 'admin';

    case AuthSubAppName.Academy:
      return 'academy';

    case AuthSubAppName.Catalog:
      return 'catalog';

    case AppName.Dashboard:
    case AuthSubAppName.Dashboard:
      return 'dashboard';

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

    case AppName.Home:
    case AuthSubAppName.Home:
      return 'home';

    case AppName.Events:
    case AuthSubAppName.Events:
    case AppName.Execution:
    case AuthSubAppName.Execution:
      return 'events';

    case AppName.EventDesign:
    case AuthSubAppName.EventDesign:
      return 'event-design';
  }
};

exports.convertAppNameToString = convertAppNameToString;

const isAppName = name => Object.values(AppName).includes(name);

exports.isAppName = isAppName;

const convertEventStateToColor = eventState => {
  switch (eventState) {
    case EventState.Active:
      return Colors.Active;

    case EventState.Inactive:
      return Colors.Inactive;

    case EventState.Finished:
      return Colors.Finished;

    case EventState.Scheduled:
      return Colors.Scheduled;

    case EventState.Requested:
      return Colors.Requested;

    case EventState.Canceled:
      return Colors.Canceled;
  }
};

exports.convertEventStateToColor = convertEventStateToColor;

const colorHSLAMap = ({
  color,
  alpha = 1
}) => {
  const baseColors = {
    // Base Colors
    [Colors.Black24]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.24
    },
    [Colors.Black54]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.54
    },
    [Colors.Black62]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.62
    },
    [Colors.Black74]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.74
    },
    [Colors.Black89]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.89
    },
    [Colors.Black]: {
      h: 0,
      s: 0,
      l: 0,
      a: alpha
    },
    [Colors.White89]: {
      h: 0,
      s: 0,
      l: 100,
      a: 0.89
    },
    [Colors.White]: {
      h: 0,
      s: 0,
      l: 100,
      a: alpha
    },
    [Colors.Grey94]: {
      h: 0,
      s: 0,
      l: 94,
      a: alpha
    },
    [Colors.Grey96]: {
      h: 0,
      s: 0,
      l: 96,
      a: alpha
    },
    [Colors.Grey97]: {
      h: 0,
      s: 0,
      l: 97,
      a: alpha
    },
    [Colors.Grey98]: {
      h: 0,
      s: 0,
      l: 98,
      a: alpha
    },
    [Colors.Grey99]: {
      h: 0,
      s: 0,
      l: 99,
      a: alpha
    },
    // Brand Colors
    [Colors.BrandLightBlue]: {
      h: 219,
      s: 100,
      l: 54,
      a: alpha
    },
    [Colors.BrandDarkBlue]: {
      h: 234,
      s: 56,
      l: 20,
      a: alpha
    },
    // PCTE
    [Colors.PCTEPurple]: {
      h: 285,
      s: 52,
      l: 25,
      a: alpha
    },
    // Accent
    // Blue
    [Colors.AccentBlue300]: {
      h: 219,
      s: 100,
      l: 54,
      a: alpha
    },
    [Colors.AccentBlue400]: {
      h: 219,
      s: 85,
      l: 48,
      a: alpha
    },
    [Colors.AccentBlue500]: {
      h: 219,
      s: 85,
      l: 43,
      a: alpha
    },
    [Colors.AccentBlue600]: {
      h: 219,
      s: 85,
      l: 37,
      a: alpha
    },
    [Colors.AccentBlue700]: {
      h: 219,
      s: 85,
      l: 32,
      a: alpha
    },
    // Purple
    [Colors.AccentPurple500]: {
      h: 299,
      s: 43,
      l: 48,
      a: alpha
    },
    [Colors.AccentPurple700]: {
      h: 295,
      s: 42,
      l: 32,
      a: alpha
    },
    // App Colors
    [Colors.Academy]: {
      h: 196,
      s: 75,
      l: 50,
      a: alpha
    },
    [Colors.Admin]: {
      h: 210,
      s: 82,
      l: 54,
      a: alpha
    },
    [Colors.Catalog]: {
      h: 79,
      s: 59,
      l: 49,
      a: alpha
    },
    [Colors.Dashboard]: {
      h: 257,
      s: 70,
      l: 60,
      a: alpha
    },
    [Colors.Range]: {
      h: 37,
      s: 84,
      l: 50,
      a: alpha
    },
    [Colors.Tracker]: {
      h: 145,
      s: 63,
      l: 42,
      a: alpha
    },
    [Colors.Hardhat]: {
      h: 12,
      s: 98,
      l: 59,
      a: alpha
    },
    [Colors.Impact]: {
      h: 353,
      s: 52,
      l: 42,
      a: alpha
    },
    [Colors.Training]: {
      h: 196,
      s: 75,
      l: 50,
      a: alpha
    },
    [Colors.TechOps]: {
      h: 324,
      s: 60,
      l: 60,
      a: alpha
    },
    [Colors.Repo]: {
      h: 79,
      s: 59,
      l: 49,
      a: alpha
    },
    [Colors.LMS]: {
      h: 2,
      s: 61,
      l: 50,
      a: alpha
    },
    [Colors.Execution]: {
      h: 196,
      s: 75,
      l: 50,
      a: alpha
    },
    // Event Status
    // In Progress
    [Colors.Active]: {
      h: 227,
      s: 67,
      l: 34,
      a: alpha
    },
    // Canceled
    [Colors.Canceled]: {
      h: 0,
      s: 0,
      l: 81,
      a: alpha
    },
    // Complete
    [Colors.Finished]: {
      h: 119,
      s: 32,
      l: 30,
      a: alpha
    },
    // Enrolled
    [Colors.Scheduled]: {
      h: 278,
      s: 34,
      l: 29,
      a: alpha
    },
    // Pending
    [Colors.Requested]: {
      h: 29,
      s: 83,
      l: 34,
      a: alpha
    },
    // Paused
    [Colors.Inactive]: {
      h: 51,
      s: 71,
      l: 48,
      a: alpha
    },
    // State
    [Colors.Green]: {
      h: 145,
      s: 68,
      l: 45,
      a: alpha
    },
    [Colors.Red]: {
      h: 4,
      s: 90,
      l: 58,
      a: alpha
    },
    [Colors.Amber]: {
      h: 45,
      s: 100,
      l: 51,
      a: alpha
    }
  };
  return baseColors[color];
};

exports.colorHSLAMap = colorHSLAMap;

const convertHSLAMapToCss = HSLAMap => `hsla(${HSLAMap.h}, ${HSLAMap.s}%, ${HSLAMap.l}%, ${HSLAMap.a})`;

exports.convertHSLAMapToCss = convertHSLAMapToCss;

const colors = (color, alpha = 1) => convertHSLAMapToCss(colorHSLAMap({
  color,
  alpha
}));

exports.colors = colors;

const baseFocusStyles = (addPositionToParent = true) => (0, _styledComponents.css)(["", ";&::after{", ";border-radius:inherit;border:1px solid ", ";bottom:0;content:'';left:0;pointer-events:none;position:absolute;right:0;top:0;}&:focus{opacity:0.85;outline:none;&::after{", ";}}"], addPositionToParent && (0, _styledComponents.css)(["position:relative;"]), visible(false), colors(Colors.BrandLightBlue), visible(true));

exports.baseFocusStyles = baseFocusStyles;

const baseOutlineStyles = (color = Colors.BrandLightBlue) => (0, _styledComponents.css)(["background:transparent;border:1px solid ", ";color:", ";&:hover{background:", ";}&:active{background:", ";}"], colors(color), colors(color), colors(color, 0.08), colors(color, 0.16));

exports.baseOutlineStyles = baseOutlineStyles;

const baseChromelessStyles = (color = Colors.BrandLightBlue, isActive) => (0, _styledComponents.css)(["background:", ";&:hover{background:", ";}&.is-active,&:active{background:", ";}"], isActive ? colors(color, 0.2) : 'transparent', isActive ? colors(color, 0.2) : colors(color, 0.1), colors(color, 0.2));

exports.baseChromelessStyles = baseChromelessStyles;

const baseSecondaryStyles = (color = Colors.BrandLightBlue, isActive) => (0, _styledComponents.css)(["background:", ";border:0;color:", ";&:hover{background:", ";}&:active{background:", ";}"], isActive ? colors(color, 0.24) : colors(color, 0.08), colors(color), isActive ? colors(color, 0.24) : colors(color, 0.16), colors(color, 0.24));

exports.baseSecondaryStyles = baseSecondaryStyles;

const basePrimaryStyles = (color = Colors.BrandLightBlue) => (0, _styledComponents.css)(["background:", ";color:", ";&:hover{background:", ";}&:active{background:", ";}"], colors(color), colors(Colors.White), colors(color, 0.85), colors(color, 0.7));

exports.basePrimaryStyles = basePrimaryStyles;
const baseDisabledStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["cursor:default;opacity:0.4;pointer-events:none;"]);
/*
* Border Radius
*/

exports.baseDisabledStyles = baseDisabledStyles;
let BorderRadius;
exports.BorderRadius = BorderRadius;

(function (BorderRadius) {
  BorderRadius[BorderRadius["Small"] = 3] = "Small";
  BorderRadius[BorderRadius["Medium"] = 4] = "Medium";
  BorderRadius[BorderRadius["Large"] = 6] = "Large";
  BorderRadius[BorderRadius["XLarge"] = 8] = "XLarge";
  BorderRadius[BorderRadius["Round"] = 1000] = "Round";
})(BorderRadius || (exports.BorderRadius = BorderRadius = {}));

const borderRadius = (borderRadius2 = BorderRadius.Small) => (0, _styledComponents.css)(["border-radius:", "px;"], borderRadius2);
/*
* Animation
*/


exports.borderRadius = borderRadius;

const easeCurve = (v, pow = 4) => {
  return 1 - Math.pow(1 - Math.max(v, Math.min(0, 1)), pow);
}; // https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse


const frameTime = 1000 / 60;

const nFrames = duration => Math.round(duration / frameTime);

const append = ({
  endX,
  endY,
  i,
  innerAnimation,
  isOpen,
  nFramesDuration,
  outerAnimation,
  percentage,
  startX,
  startY,
  step
}) => {
  const xScale = startX + (endX - startX) * step;
  const yScale = startY + (endY - startY) * step;
  const invScaleX = (1 / xScale).toFixed(5);
  const invScaleY = (1 / yScale).toFixed(5);
  outerAnimation.push(`
      ${percentage}% {
        transform: scale(${xScale}, ${yScale});
      }`);
  innerAnimation.push(`
      ${percentage}% {
        transform: scale(${invScaleX}, ${invScaleY});
      }`);
};

const createEaseAnimations = ({
  isOpen,
  position,
  x,
  y,
  animationDuration
}) => {
  const menuExpandAnimation = [];
  const menuExpandContentsAnimation = [];
  const menuCollapseAnimation = [];
  const menuCollapseContentsAnimation = [];
  const nFramesDuration = nFrames(animationDuration);
  const percentIncrement = 100 / nFramesDuration;

  for (let i = 0; i <= nFramesDuration; i++) {
    const step = easeCurve(i / nFramesDuration);
    const percentage = (i * percentIncrement).toFixed(5);
    const endX = 1;
    const endY = 1; // Expand animation.

    append({
      endX,
      endY,
      i,
      innerAnimation: menuExpandContentsAnimation,
      isOpen,
      nFramesDuration,
      outerAnimation: menuExpandAnimation,
      percentage,
      startX: x,
      startY: y,
      step
    }); // Collapse animation.

    append({
      endX: x,
      endY: y,
      i,
      innerAnimation: menuCollapseContentsAnimation,
      isOpen,
      nFramesDuration,
      outerAnimation: menuCollapseAnimation,
      percentage,
      startX: 1,
      startY: 1,
      step
    });
  }

  return {
    menuAnimation: isOpen ? (0, _styledComponents.keyframes)(["", ""], menuExpandAnimation.join('')) : (0, _styledComponents.keyframes)(["", ""], menuCollapseAnimation.join('')),
    menuContentsAnimation: isOpen ? (0, _styledComponents.keyframes)(["", ""], menuExpandContentsAnimation.join('')) : (0, _styledComponents.keyframes)(["", ""], menuCollapseContentsAnimation.join(''))
  };
};

const generateScaleAnimation = ({
  position,
  isOpen,
  elementHeight,
  elementWidth
}) => {
  const animationDuration = 150;
  const keyFrame = createEaseAnimations({
    animationDuration,
    isOpen,
    position,
    x: position.originWidth / Math.min(position.maxWidth, elementWidth),
    y: position.originHeight / Math.min(position.maxHeight, elementHeight)
  });
  return {
    outSideContentStyles: (0, _styledComponents.css)(["", ":", "px;", ":", "px;", ";max-height:", ";max-width:", ";position:fixed;transform-origin:", " ", ";will-change:transform,opacity,visibility;transition:opacity ", "ms ease-in,visibility ", "ms ease-in;animation:", " linear ", "ms forwards;"], position.dropXDirection, position.dropXAmount, position.dropYDirection, position.dropYAmount, visible(isOpen), position.maxHeightCalc, position.maxWidthCalc, position.dropYDirection, position.dropXDirection, animationDuration, animationDuration, keyFrame.menuAnimation, animationDuration),
    inSideContentStyles: (0, _styledComponents.css)(["transform-origin:", " ", ";animation:", " linear ", "ms forwards;will-change:transform;"], position.dropYDirection, position.dropXDirection, keyFrame.menuContentsAnimation, animationDuration)
  };
};

exports.generateScaleAnimation = generateScaleAnimation;

const ease = isActive => isActive ? 'ease-in' : 'ease-out';

exports.ease = ease;
const buttonTransition =
/*#__PURE__*/
(0, _styledComponents.css)(["transition:all ease 75ms;"]);
exports.buttonTransition = buttonTransition;

const transition = ({
  properties = ['all'],
  easing,
  duration
}) => {
  return (0, _styledComponents.css)(["transition:", ";"], properties.map(property => `${property} ${easing} ${duration}ms`).join());
};
/*
* Size
*/


exports.transition = transition;
const sizes = {
  modals: {
    mini: {
      height: 360,
      width: 304
    }
  },
  menu: {
    width: 176
  },
  appSwitcher: {
    width: 376
  }
};
exports.sizes = sizes;
let Sizes;
exports.Sizes = Sizes;

(function (Sizes) {
  Sizes[Sizes["DP8"] = 8] = "DP8";
  Sizes[Sizes["DP16"] = 16] = "DP16";
  Sizes[Sizes["DP24"] = 24] = "DP24";
  Sizes[Sizes["DP32"] = 32] = "DP32";
  Sizes[Sizes["DP40"] = 40] = "DP40";
  Sizes[Sizes["DP48"] = 48] = "DP48";
  Sizes[Sizes["DP56"] = 56] = "DP56";
  Sizes[Sizes["DP64"] = 64] = "DP64";
})(Sizes || (exports.Sizes = Sizes = {}));