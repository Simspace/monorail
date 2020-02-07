"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = exports.convertHSLAMapToCss = exports.colorHSLAMap = exports.Colors = void 0;
let Colors;
exports.Colors = Colors;

(function (Colors) {
  Colors["Black12"] = "black12";
  Colors["Black24"] = "black24";
  Colors["Black38"] = "black38";
  Colors["Black54"] = "black54";
  Colors["Black62"] = "black62";
  Colors["Black74"] = "black74";
  Colors["Black89"] = "black89";
  Colors["Black"] = "black";
  Colors["White89"] = "white89";
  Colors["White"] = "white";
  Colors["Grey90"] = "grey90";
  Colors["Grey94"] = "grey94";
  Colors["Grey96"] = "grey96";
  Colors["Grey97"] = "grey97";
  Colors["Grey98"] = "grey98";
  Colors["Grey99"] = "grey99";
  Colors["DarkGrey"] = "darkGrey";
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
  Colors["AdminAlt"] = "adminAlt";
  Colors["Catalog"] = "catalog";
  Colors["CatalogAlt"] = "catalogAlt";
  Colors["Dashboard"] = "dashboard";
  Colors["Range"] = "range";
  Colors["RangeAlt"] = "rangeAlt";
  Colors["Tracker"] = "tracker";
  Colors["TrackerAlt"] = "trackerAlt";
  Colors["Hardhat"] = "hardhat";
  Colors["Impact"] = "impact";
  Colors["ImpactAlt"] = "impactAlt";
  Colors["Training"] = "training";
  Colors["TechOps"] = "techops";
  Colors["TechOpsAlt"] = "techopsAlt";
  Colors["Repo"] = "repo";
  Colors["LMS"] = "externalLms";
  Colors["MyOrg"] = "myOrg";
  Colors["MyOrgAlt"] = "myOrgAlt";
  Colors["Green"] = "green";
  Colors["Red"] = "red";
  Colors["Amber"] = "amber";
  Colors["Error"] = "error";
  Colors["Warning"] = "warning";
  Colors["Success"] = "success";
  Colors["Info"] = "info";
  Colors["High"] = "high";
  Colors["HighModerate"] = "highModerate";
  Colors["Moderate"] = "moderate";
  Colors["LowModerate"] = "lowModerate";
  Colors["Low"] = "low";
  Colors["SidebarBg"] = "sidebarBg";
  Colors["SidebarActive"] = "sidebarActive";
  Colors["SidebarDivider"] = "sidebarDivider";
})(Colors || (exports.Colors = Colors = {}));

const colorHSLAMap = ({
  color,
  alpha = 1
}) => {
  const baseColors = {
    // Base Colors
    [Colors.Black12]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.12 * alpha
    },
    [Colors.Black24]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.24 * alpha
    },
    [Colors.Black38]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.38 * alpha
    },
    [Colors.Black54]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.54 * alpha
    },
    [Colors.Black62]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.62 * alpha
    },
    [Colors.Black74]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.74 * alpha
    },
    [Colors.Black89]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.89 * alpha
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
      a: 0.89 * alpha
    },
    [Colors.White]: {
      h: 0,
      s: 0,
      l: 100,
      a: alpha
    },
    [Colors.Grey90]: {
      h: 0,
      s: 0,
      l: 90,
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
    [Colors.DarkGrey]: {
      h: 0,
      s: 0,
      l: 7,
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
    // [Colors.Admin]: { h: 210, s: 82, l: 54, a: alpha },
    [Colors.Admin]: {
      h: 37,
      s: 92,
      l: 53,
      a: alpha
    },
    [Colors.AdminAlt]: {
      h: 37,
      s: 66,
      l: 43,
      a: alpha
    },
    // [Colors.Catalog]: { h: 79, s: 59, l: 49, a: alpha },
    [Colors.Catalog]: {
      h: 257,
      s: 54,
      l: 45,
      a: alpha
    },
    [Colors.CatalogAlt]: {
      h: 257,
      s: 77,
      l: 29,
      a: alpha
    },
    [Colors.Dashboard]: {
      h: 257,
      s: 70,
      l: 60,
      a: alpha
    },
    [Colors.Range]: {
      h: 257,
      s: 54,
      l: 45,
      a: alpha
    },
    [Colors.RangeAlt]: {
      h: 37,
      s: 84,
      l: 50,
      a: alpha
    },
    // [Colors.Tracker]: { h: 145, s: 63, l: 42, a: alpha },
    [Colors.Tracker]: {
      h: 133,
      s: 34,
      l: 51,
      a: alpha
    },
    [Colors.TrackerAlt]: {
      h: 132,
      s: 45,
      l: 45,
      a: alpha
    },
    [Colors.Hardhat]: {
      h: 12,
      s: 98,
      l: 59,
      a: alpha
    },
    // [Colors.Impact]: { h: 353, s: 52, l: 42, a: alpha },
    [Colors.Impact]: {
      h: 12,
      s: 85,
      l: 51,
      a: alpha
    },
    [Colors.ImpactAlt]: {
      h: 12,
      s: 93,
      l: 40,
      a: alpha
    },
    [Colors.Training]: {
      h: 196,
      s: 75,
      l: 50,
      a: alpha
    },
    // [Colors.TechOps]: { h: 324, s: 60, l: 60, a: alpha },
    [Colors.TechOps]: {
      h: 325,
      s: 58,
      l: 52,
      a: alpha
    },
    [Colors.TechOpsAlt]: {
      h: 325,
      s: 49,
      l: 36,
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
    [Colors.MyOrg]: {
      h: 181,
      s: 88,
      l: 29,
      a: alpha
    },
    [Colors.MyOrgAlt]: {
      h: 180,
      s: 40,
      l: 98,
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
    },
    // Alerts
    [Colors.Error]: {
      h: 11,
      s: 69,
      l: 47,
      a: alpha
    },
    [Colors.Warning]: {
      h: 31,
      s: 87,
      l: 60,
      a: alpha
    },
    [Colors.Success]: {
      h: 147,
      s: 34,
      l: 53,
      a: alpha
    },
    [Colors.Info]: {
      h: 219,
      s: 100,
      l: 54,
      a: alpha
    },
    // Scores
    [Colors.High]: {
      h: 147,
      s: 34,
      l: 53,
      a: alpha
    },
    [Colors.HighModerate]: {
      h: 72,
      s: 82,
      l: 44,
      a: alpha
    },
    [Colors.Moderate]: {
      h: 45,
      s: 100,
      l: 51,
      a: alpha
    },
    [Colors.LowModerate]: {
      h: 31,
      s: 87,
      l: 60,
      a: alpha
    },
    [Colors.Low]: {
      h: 11,
      s: 69,
      l: 47,
      a: alpha
    },
    // Sidebar
    [Colors.SidebarBg]: {
      h: 220,
      s: 16,
      l: 96,
      a: alpha
    },
    [Colors.SidebarActive]: {
      h: 228,
      s: 14,
      l: 93,
      a: alpha
    },
    [Colors.SidebarDivider]: {
      h: 225,
      s: 16,
      l: 90,
      a: alpha
    }
  };
  return baseColors[color];
};

exports.colorHSLAMap = colorHSLAMap;

const convertHSLAMapToCss = HSLAMap => `hsla(${HSLAMap.h}, ${HSLAMap.s}%, ${HSLAMap.l}%, ${HSLAMap.a})`;

exports.convertHSLAMapToCss = convertHSLAMapToCss;

const getColor = (color, alpha = 1) => convertHSLAMapToCss(colorHSLAMap({
  color,
  alpha
}));

exports.getColor = getColor;