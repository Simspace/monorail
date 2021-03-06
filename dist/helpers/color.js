"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCollectionColor = exports.getColor = exports.convertHSLAMapToCss = exports.colorHSLAMap = exports.Colors = void 0;

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let Colors;
exports.Colors = Colors;

(function (Colors) {
  Colors["Black"] = "black";
  Colors["Gray02"] = "Gray02";
  Colors["Gray04"] = "Gray04";
  Colors["Gray06"] = "Gray06";
  Colors["Gray08"] = "Gray08";
  Colors["Gray12"] = "Gray12";
  Colors["Gray24"] = "Gray24";
  Colors["Gray38"] = "Gray38";
  Colors["Gray54"] = "Gray54";
  Colors["Gray62"] = "Gray62";
  Colors["Gray74"] = "Gray74";
  Colors["Gray89"] = "Gray89";
  Colors["White89"] = "white89";
  Colors["White"] = "white";
  Colors["Grey90"] = "grey90";
  Colors["Grey94"] = "grey94";
  Colors["Grey95"] = "grey95";
  Colors["Grey96"] = "grey96";
  Colors["Grey97"] = "grey97";
  Colors["Grey98"] = "grey98";
  Colors["Grey99"] = "grey99";
  Colors["DarkGrey"] = "darkGrey";
  Colors["Black12a"] = "Black12a";
  Colors["Black14a"] = "Black14a";
  Colors["Black20a"] = "Black20a";
  Colors["Black24a"] = "Black24a";
  Colors["Black38a"] = "Black38a";
  Colors["Black54a"] = "Black54a";
  Colors["Black62a"] = "Black62a";
  Colors["Black74a"] = "Black74a";
  Colors["Black89a"] = "Black89a";
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
  Colors["TeamAssessmentPlan"] = "teamAssessmentPlan";
  Colors["AttackElements"] = "attackElements";
  Colors["Execution"] = "execution";
  Colors["Admin"] = "admin";
  Colors["AdminAlt"] = "adminAlt";
  Colors["Assessments"] = "assessments";
  Colors["Catalog"] = "catalog";
  Colors["CatalogAlt"] = "catalogAlt";
  Colors["Dashboard"] = "dashboard";
  Colors["Hardhat"] = "hardhat";
  Colors["Impact"] = "impact";
  Colors["ImpactAlt"] = "impactAlt";
  Colors["LMS"] = "externalLms";
  Colors["MyOrg"] = "myOrg";
  Colors["MyOrgAlt"] = "myOrgAlt";
  Colors["Range"] = "range";
  Colors["RangeAlt"] = "rangeAlt";
  Colors["Repo"] = "repo";
  Colors["TechOps"] = "techops";
  Colors["TechOpsAlt"] = "techopsAlt";
  Colors["Tracker"] = "tracker";
  Colors["TrackerAlt"] = "trackerAlt";
  Colors["TrackerSecondary"] = "trackerSecondary";
  Colors["Training"] = "training";
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
  Colors["SelectionSecondarySelected"] = "selectionSecondarySelected";
  Colors["SelectionSecondaryOnHover"] = "selectionSecondaryOnHover";
  Colors["SelectionSecondaryOnPress"] = "selectionSecondaryOnPress";
  Colors["Individual"] = "individual";
  Colors["Team"] = "team";
  Colors["Tier1"] = "tier1";
  Colors["Tier2"] = "tier2";
  Colors["Tier3"] = "tier3";
  Colors["Tier4"] = "tier4";
  Colors["PublicationStatusDraft"] = "publicationStatusDraft";
  Colors["PublicationStatusReview"] = "publicationStatusReview";
  Colors["PublicationStatusApproved"] = "publicationStatusApproved";
  Colors["PublicationStatusFinal"] = "publicationStatusFinal";
  Colors["PublicationStatusArchived"] = "publicationStatusArchived";
  Colors["CollectionPrimary1"] = "CollectionPrimary1";
  Colors["CollectionPrimary2"] = "CollectionPrimary2";
  Colors["CollectionPrimary3"] = "CollectionPrimary3";
  Colors["CollectionPrimary4"] = "CollectionPrimary4";
  Colors["CollectionPrimary5"] = "CollectionPrimary5";
  Colors["CollectionPrimary6"] = "CollectionPrimary6";
  Colors["CollectionPrimary7"] = "CollectionPrimary7";
  Colors["CollectionPrimary8"] = "CollectionPrimary8";
  Colors["CollectionSecondary1"] = "collectionSecondary1";
  Colors["CollectionSecondary2"] = "collectionSecondary2";
  Colors["CollectionSecondary3"] = "collectionSecondary3";
  Colors["CollectionSecondary4"] = "collectionSecondary4";
  Colors["CollectionSecondary5"] = "collectionSecondary5";
  Colors["CollectionSecondary6"] = "collectionSecondary6";
  Colors["CollectionSecondary7"] = "collectionSecondary7";
  Colors["CollectionSecondary8"] = "collectionSecondary8";
  Colors["ChartsBlue100"] = "chartsBlue100";
  Colors["ChartsBlue200"] = "chartsBlue200";
  Colors["ChartsBlue300"] = "chartsBlue300";
  Colors["ChartsBlue400"] = "chartsBlue400";
  Colors["ChartsBlue500"] = "chartsBlue500";
  Colors["ChartsBlue600"] = "chartsBlue600";
  Colors["ChartsBlue700"] = "chartsBlue700";
  Colors["ChartsBlue800"] = "chartsBlue800";
  Colors["ChartsBlue900"] = "chartsBlue900";
  Colors["ChartsYellow100"] = "chartsYellow100";
  Colors["ChartsYellow200"] = "chartsYellow200";
  Colors["ChartsYellow300"] = "chartsYellow300";
  Colors["ChartsYellow400"] = "chartsYellow400";
  Colors["ChartsYellow500"] = "chartsYellow500";
  Colors["ChartsYellow600"] = "chartsYellow600";
  Colors["ChartsYellow700"] = "chartsYellow700";
  Colors["ChartsYellow800"] = "chartsYellow800";
  Colors["ChartsYellow900"] = "chartsYellow900";
  Colors["ChartsGreen100"] = "chartsGreen100";
  Colors["ChartsGreen200"] = "chartsGreen200";
  Colors["ChartsGreen300"] = "chartsGreen300";
  Colors["ChartsGreen400"] = "chartsGreen400";
  Colors["ChartsGreen500"] = "chartsGreen500";
  Colors["ChartsGreen600"] = "chartsGreen600";
  Colors["ChartsGreen700"] = "chartsGreen700";
  Colors["ChartsGreen800"] = "chartsGreen800";
  Colors["ChartsGreen900"] = "chartsGreen900";
  Colors["ChartsRed100"] = "chartsRed100";
  Colors["ChartsRed200"] = "chartsRed200";
  Colors["ChartsRed300"] = "chartsRed300";
  Colors["ChartsRed400"] = "chartsRed400";
  Colors["ChartsRed500"] = "chartsRed500";
  Colors["ChartsRed600"] = "chartsRed600";
  Colors["ChartsRed700"] = "chartsRed700";
  Colors["ChartsRed800"] = "chartsRed800";
  Colors["ChartsRed900"] = "chartsRed900";
  Colors["ChartsSlate100"] = "chartsSlate100";
  Colors["ChartsSlate200"] = "chartsSlate200";
  Colors["ChartsSlate300"] = "chartsSlate300";
  Colors["ChartsSlate400"] = "chartsSlate400";
  Colors["ChartsSlate500"] = "chartsSlate500";
  Colors["ChartsSlate600"] = "chartsSlate600";
  Colors["ChartsSlate700"] = "chartsSlate700";
  Colors["ChartsSlate800"] = "chartsSlate800";
  Colors["ChartsSlate900"] = "chartsSlate900";
})(Colors || (exports.Colors = Colors = {}));

const colorHSLAMap = ({
  color,
  alpha = 1
}) => {
  const baseColors = {
    // Base Colors
    // Black (opaque)
    [Colors.Black]: {
      h: 0,
      s: 0,
      l: 0,
      a: alpha
    },
    // #000000
    [Colors.Gray02]: {
      h: 0,
      s: 0,
      l: 98,
      a: alpha
    },
    // #FAFAFA
    [Colors.Gray04]: {
      h: 0,
      s: 0,
      l: 96,
      a: alpha
    },
    // #F5F5F5
    [Colors.Gray06]: {
      h: 0,
      s: 0,
      l: 94,
      a: alpha
    },
    // #F0F0F0
    [Colors.Gray08]: {
      h: 0,
      s: 0,
      l: 92,
      a: alpha
    },
    // #EBEBEB
    [Colors.Gray12]: {
      h: 0,
      s: 0,
      l: 88,
      a: alpha
    },
    // #E0E0E0
    [Colors.Gray24]: {
      h: 0,
      s: 0,
      l: 76,
      a: alpha
    },
    // #C2C2C2
    [Colors.Gray38]: {
      h: 0,
      s: 0,
      l: 62,
      a: alpha
    },
    // #9E9E9E
    [Colors.Gray54]: {
      h: 0,
      s: 0,
      l: 46,
      a: alpha
    },
    // #757575
    [Colors.Gray62]: {
      h: 0,
      s: 0,
      l: 38,
      a: alpha
    },
    // #616161
    [Colors.Gray74]: {
      h: 0,
      s: 0,
      l: 26,
      a: alpha
    },
    // #424242
    [Colors.Gray89]: {
      h: 0,
      s: 0,
      l: 11,
      a: alpha
    },
    // #1C1C1C
    [Colors.White]: {
      h: 0,
      s: 0,
      l: 100,
      a: alpha
    },
    // #FFFFFF
    [Colors.Grey90]: {
      h: 0,
      s: 0,
      l: 90,
      a: alpha
    },
    // #E6E6E6
    [Colors.Grey94]: {
      h: 0,
      s: 0,
      l: 94,
      a: alpha
    },
    // #F0F0F0
    [Colors.Grey95]: {
      h: 0,
      s: 0,
      l: 95,
      a: alpha
    },
    // #F2F2F2
    [Colors.Grey96]: {
      h: 0,
      s: 0,
      l: 96,
      a: alpha
    },
    // #F5F5F5
    [Colors.Grey97]: {
      h: 0,
      s: 0,
      l: 97,
      a: alpha
    },
    // #F7F7F7
    [Colors.Grey98]: {
      h: 0,
      s: 0,
      l: 98,
      a: alpha
    },
    // #FAFAFA
    [Colors.Grey99]: {
      h: 0,
      s: 0,
      l: 99,
      a: alpha
    },
    // #FCFCFC
    [Colors.DarkGrey]: {
      h: 0,
      s: 0,
      l: 7,
      a: alpha
    },
    // #121212
    // Black alpha (deprecated by UX)
    [Colors.Black12a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.12 * alpha
    },
    [Colors.Black14a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.14 * alpha
    },
    [Colors.Black20a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.2 * alpha
    },
    [Colors.Black24a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.24 * alpha
    },
    [Colors.Black38a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.38 * alpha
    },
    [Colors.Black54a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.54 * alpha
    },
    [Colors.Black62a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.62 * alpha
    },
    [Colors.Black74a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.74 * alpha
    },
    [Colors.Black89a]: {
      h: 0,
      s: 0,
      l: 0,
      a: 0.89 * alpha
    },
    [Colors.White89]: {
      h: 0,
      s: 0,
      l: 100,
      a: 0.89 * alpha
    },
    // Brand Colors
    [Colors.BrandLightBlue]: {
      h: 219,
      s: 100,
      l: 54,
      a: alpha
    },
    // #1467FF
    [Colors.BrandDarkBlue]: {
      h: 234,
      s: 56,
      l: 20,
      a: alpha
    },
    // #161C50
    // PCTE
    [Colors.PCTEPurple]: {
      h: 285,
      s: 52,
      l: 25,
      a: alpha
    },
    // #501F61
    // Accent
    // Blue
    [Colors.AccentBlue300]: {
      h: 219,
      s: 100,
      l: 54,
      a: alpha
    },
    // #1467FF
    [Colors.AccentBlue400]: {
      h: 219,
      s: 85,
      l: 48,
      a: alpha
    },
    // #125BE2
    [Colors.AccentBlue500]: {
      h: 219,
      s: 85,
      l: 43,
      a: alpha
    },
    // #1052CB
    [Colors.AccentBlue600]: {
      h: 219,
      s: 85,
      l: 37,
      a: alpha
    },
    // #0E46AF
    [Colors.AccentBlue700]: {
      h: 219,
      s: 85,
      l: 32,
      a: alpha
    },
    // #0C3D97
    // Purple
    [Colors.AccentPurple500]: {
      h: 299,
      s: 43,
      l: 48,
      a: alpha
    },
    // #AD46AF
    [Colors.AccentPurple700]: {
      h: 295,
      s: 42,
      l: 32,
      a: alpha
    },
    // #6E2F74
    // App Colors
    [Colors.Academy]: {
      h: 195,
      s: 72,
      l: 43,
      a: alpha
    },
    // #1F95BC
    [Colors.Admin]: {
      h: 37,
      s: 92,
      l: 53,
      a: alpha
    },
    // #F5A119
    [Colors.AdminAlt]: {
      h: 37,
      s: 66,
      l: 43,
      a: alpha
    },
    // #B67F25
    [Colors.AttackElements]: {
      h: 5,
      s: 90,
      l: 44,
      a: alpha
    },
    // #D41C0B
    [Colors.Catalog]: {
      h: 257,
      s: 54,
      l: 45,
      a: alpha
    },
    // #5835B1
    [Colors.CatalogAlt]: {
      h: 257,
      s: 77,
      l: 29,
      a: alpha
    },
    // #311183
    [Colors.Dashboard]: {
      h: 257,
      s: 70,
      l: 60,
      a: alpha
    },
    // #7A52E0
    [Colors.Execution]: {
      h: 196,
      s: 75,
      l: 50,
      a: alpha
    },
    // #20ACDF
    [Colors.Range]: {
      h: 257,
      s: 54,
      l: 45,
      a: alpha
    },
    // #5835B1
    [Colors.RangeAlt]: {
      h: 37,
      s: 84,
      l: 50,
      a: alpha
    },
    // #EB9814
    [Colors.Hardhat]: {
      h: 12,
      s: 98,
      l: 59,
      a: alpha
    },
    // #FD5930
    [Colors.Impact]: {
      h: 12,
      s: 85,
      l: 51,
      a: alpha
    },
    // #EC4218
    [Colors.ImpactAlt]: {
      h: 12,
      s: 93,
      l: 40,
      a: alpha
    },
    // #C52D07
    [Colors.LMS]: {
      h: 2,
      s: 61,
      l: 50,
      a: alpha
    },
    // #CD3732
    [Colors.MyOrg]: {
      h: 181,
      s: 88,
      l: 29,
      a: alpha
    },
    // #09898B
    // This is the same as Colors.AccentPurple700
    [Colors.Assessments]: {
      h: 295,
      s: 42,
      l: 32,
      a: alpha
    },
    // #6E2F74
    [Colors.TeamAssessmentPlan]: {
      h: 295,
      s: 42,
      l: 32,
      a: alpha
    },
    // #6E2F74
    [Colors.MyOrgAlt]: {
      h: 180,
      s: 40,
      l: 98,
      a: alpha
    },
    // #F8FCFC
    [Colors.Repo]: {
      h: 79,
      s: 59,
      l: 49,
      a: alpha
    },
    // #98C733
    [Colors.TechOps]: {
      h: 325,
      s: 58,
      l: 52,
      a: alpha
    },
    // #CC3E90
    [Colors.TechOpsAlt]: {
      h: 325,
      s: 49,
      l: 36,
      a: alpha
    },
    // #892F63
    [Colors.Tracker]: {
      h: 153,
      s: 91,
      l: 34,
      a: alpha
    },
    // #08A45E
    [Colors.TrackerAlt]: {
      h: 132,
      s: 45,
      l: 45,
      a: alpha
    },
    // #3FA654
    [Colors.TrackerSecondary]: {
      h: 150,
      s: 33,
      l: 99,
      a: alpha
    },
    // #FBFDFC
    [Colors.Training]: {
      h: 196,
      s: 75,
      l: 50,
      a: alpha
    },
    // #20ACDF
    // Event Status
    // In Progress
    [Colors.Active]: {
      h: 227,
      s: 67,
      l: 34,
      a: alpha
    },
    // #1D3691
    // Canceled
    [Colors.Canceled]: {
      h: 0,
      s: 0,
      l: 81,
      a: alpha
    },
    // #CFCFCF
    // Complete
    [Colors.Finished]: {
      h: 119,
      s: 32,
      l: 30,
      a: alpha
    },
    // #356534
    // Enrolled
    [Colors.Scheduled]: {
      h: 278,
      s: 34,
      l: 29,
      a: alpha
    },
    // #513163
    // Pending
    [Colors.Requested]: {
      h: 29,
      s: 83,
      l: 34,
      a: alpha
    },
    // #9F540F
    // Paused
    [Colors.Inactive]: {
      h: 51,
      s: 71,
      l: 48,
      a: alpha
    },
    // #D1B723
    // State
    [Colors.Green]: {
      h: 145,
      s: 68,
      l: 45,
      a: alpha
    },
    // #25C166
    [Colors.Red]: {
      h: 4,
      s: 90,
      l: 58,
      a: alpha
    },
    // #F44034
    [Colors.Amber]: {
      h: 45,
      s: 100,
      l: 51,
      a: alpha
    },
    // #FFC105
    // Alerts
    [Colors.Error]: {
      h: 11,
      s: 69,
      l: 47,
      a: alpha
    },
    // #CB4325
    [Colors.Warning]: {
      h: 31,
      s: 87,
      l: 60,
      a: alpha
    },
    // #F29C40
    [Colors.Success]: {
      h: 147,
      s: 34,
      l: 53,
      a: alpha
    },
    // #5EB083
    [Colors.Info]: {
      h: 219,
      s: 100,
      l: 54,
      a: alpha
    },
    // #1467FF
    // Scores
    [Colors.High]: {
      h: 147,
      s: 34,
      l: 53,
      a: alpha
    },
    // #5EB083
    [Colors.HighModerate]: {
      h: 72,
      s: 82,
      l: 44,
      a: alpha
    },
    // #A7CC14
    [Colors.Moderate]: {
      h: 45,
      s: 100,
      l: 51,
      a: alpha
    },
    // #FFC105
    [Colors.LowModerate]: {
      h: 31,
      s: 87,
      l: 60,
      a: alpha
    },
    // #F29C40
    [Colors.Low]: {
      h: 11,
      s: 69,
      l: 47,
      a: alpha
    },
    // #CB4325
    // Sidebar
    [Colors.SidebarBg]: {
      h: 220,
      s: 16,
      l: 96,
      a: alpha
    },
    // #F3F4F6
    [Colors.SidebarActive]: {
      h: 228,
      s: 14,
      l: 93,
      a: alpha
    },
    // #EBECF0
    [Colors.SidebarDivider]: {
      h: 225,
      s: 16,
      l: 90,
      a: alpha
    },
    // #E1E3EA
    // Sidebar
    [Colors.SelectionSecondarySelected]: {
      h: 198,
      s: 74,
      l: 43,
      a: alpha
    },
    // #1D8EBF
    [Colors.SelectionSecondaryOnHover]: {
      h: 219,
      s: 100,
      l: 95,
      a: alpha
    },
    // #E5EEFF
    [Colors.SelectionSecondaryOnPress]: {
      h: 220,
      s: 53,
      l: 83,
      a: alpha
    },
    // #BDCCEB
    // Event Type
    [Colors.Individual]: {
      h: 36,
      s: 100,
      l: 64,
      a: alpha
    },
    // #FFB647
    [Colors.Team]: {
      h: 219,
      s: 37,
      l: 52,
      a: alpha
    },
    // #5777B2
    // CKT Tiers
    [Colors.Tier1]: {
      h: 250,
      s: 48,
      l: 55,
      a: alpha
    },
    // #6856C3
    [Colors.Tier2]: {
      h: 11,
      s: 69,
      l: 47,
      a: alpha
    },
    // #CB4325
    [Colors.Tier3]: {
      h: 31,
      s: 87,
      l: 50,
      a: alpha
    },
    // #EE8311
    [Colors.Tier4]: {
      h: 164,
      s: 100,
      l: 31,
      a: alpha
    },
    // #009E73
    // PublicationStatus
    [Colors.PublicationStatusDraft]: {
      h: 0,
      s: 0,
      l: 46,
      a: alpha
    },
    // #757575
    [Colors.PublicationStatusReview]: {
      h: 31,
      s: 78,
      l: 65,
      a: alpha
    },
    // #EBA860
    [Colors.PublicationStatusApproved]: {
      h: 198,
      s: 74,
      l: 43,
      a: alpha
    },
    // #1D8EBF
    [Colors.PublicationStatusFinal]: {
      h: 147,
      s: 34,
      l: 53,
      a: alpha
    },
    // #5EB083
    [Colors.PublicationStatusArchived]: {
      h: 22,
      s: 12,
      l: 61,
      a: alpha
    },
    // #A79890
    // Collection Pool
    [Colors.CollectionPrimary1]: {
      h: 28,
      s: 87,
      l: 72,
      a: alpha
    },
    // #F6B378
    [Colors.CollectionPrimary2]: {
      h: 209,
      s: 75,
      l: 61,
      a: alpha
    },
    // #529FE6
    [Colors.CollectionPrimary3]: {
      h: 87,
      s: 49,
      l: 57,
      a: alpha
    },
    // #96C75A
    [Colors.CollectionPrimary4]: {
      h: 336,
      s: 75,
      l: 78,
      a: alpha
    },
    // #F19DBF
    [Colors.CollectionPrimary5]: {
      h: 256,
      s: 87,
      l: 72,
      a: alpha
    },
    // #9A78F5
    [Colors.CollectionPrimary6]: {
      h: 181,
      s: 55,
      l: 48,
      a: alpha
    },
    // #37BCBE
    [Colors.CollectionPrimary7]: {
      h: 299,
      s: 39,
      l: 58,
      a: alpha
    },
    // #BC6BBE
    [Colors.CollectionPrimary8]: {
      h: 45,
      s: 93,
      l: 63,
      a: alpha
    },
    // #F8CD47
    // Collection Secondary Pool
    [Colors.CollectionSecondary1]: {
      h: 28,
      s: 87,
      l: 62,
      a: alpha
    },
    // #F2994A
    [Colors.CollectionSecondary2]: {
      h: 209,
      s: 75,
      l: 51,
      a: alpha
    },
    // #2486E0
    [Colors.CollectionSecondary3]: {
      h: 87,
      s: 49,
      l: 47,
      a: alpha
    },
    // #7EB33D
    [Colors.CollectionSecondary4]: {
      h: 336,
      s: 75,
      l: 68,
      a: alpha
    },
    // #EB70A2
    [Colors.CollectionSecondary5]: {
      h: 256,
      s: 87,
      l: 62,
      a: alpha
    },
    // #774AF2
    [Colors.CollectionSecondary6]: {
      h: 181,
      s: 55,
      l: 38,
      a: alpha
    },
    // #34989A
    [Colors.CollectionSecondary7]: {
      h: 299,
      s: 39,
      l: 48,
      a: alpha
    },
    // #A84BAA
    [Colors.CollectionSecondary8]: {
      h: 45,
      s: 93,
      l: 53,
      a: alpha
    },
    // #F6C018
    // Charts Blue
    [Colors.ChartsBlue100]: {
      h: 194,
      s: 71,
      l: 93,
      a: alpha
    },
    // #E1F4FA
    [Colors.ChartsBlue200]: {
      h: 198,
      s: 71,
      l: 87,
      a: alpha
    },
    // #C5E7F5
    [Colors.ChartsBlue300]: {
      h: 201,
      s: 54,
      l: 76,
      a: alpha
    },
    // #A0CBE3
    [Colors.ChartsBlue400]: {
      h: 205,
      s: 39,
      l: 64,
      a: alpha
    },
    // #7EA9C7
    [Colors.ChartsBlue500]: {
      h: 207,
      s: 32,
      l: 48,
      a: alpha
    },
    // #537EA2
    [Colors.ChartsBlue600]: {
      h: 210,
      s: 40,
      l: 39,
      a: alpha
    },
    // #3C638B
    [Colors.ChartsBlue700]: {
      h: 214,
      s: 48,
      l: 31,
      a: alpha
    },
    // #294A74
    [Colors.ChartsBlue800]: {
      h: 217,
      s: 56,
      l: 23,
      a: alpha
    },
    // #1A345D
    [Colors.ChartsBlue900]: {
      h: 220,
      s: 67,
      l: 18,
      a: alpha
    },
    // #0F244D
    // Charts Yellow
    [Colors.ChartsYellow100]: {
      h: 44,
      s: 92,
      l: 90,
      a: alpha
    },
    // #FDF0CC
    [Colors.ChartsYellow200]: {
      h: 42,
      s: 94,
      l: 80,
      a: alpha
    },
    // #FCDE9A
    [Colors.ChartsYellow300]: {
      h: 39,
      s: 90,
      l: 68,
      a: alpha
    },
    // #F7C566
    [Colors.ChartsYellow400]: {
      h: 37,
      s: 85,
      l: 59,
      a: alpha
    },
    // #EFAB40
    [Colors.ChartsYellow500]: {
      h: 34,
      s: 95,
      l: 46,
      a: alpha
    },
    // #E58406
    [Colors.ChartsYellow600]: {
      h: 31,
      s: 96,
      l: 39,
      a: alpha
    },
    // #C46804
    [Colors.ChartsYellow700]: {
      h: 29,
      s: 96,
      l: 33,
      a: alpha
    },
    // #A45003
    [Colors.ChartsYellow800]: {
      h: 26,
      s: 98,
      l: 26,
      a: alpha
    },
    // #843A01
    [Colors.ChartsYellow900]: {
      h: 23,
      s: 98,
      l: 22,
      a: alpha
    },
    // #6D2B01
    // Charts Green
    [Colors.ChartsGreen100]: {
      h: 146,
      s: 75,
      l: 92,
      a: alpha
    },
    // #DCFAE9
    [Colors.ChartsGreen200]: {
      h: 152,
      s: 77,
      l: 85,
      a: alpha
    },
    // #BAF6DA
    [Colors.ChartsGreen300]: {
      h: 158,
      s: 59,
      l: 73,
      a: alpha
    },
    // #91E3C5
    [Colors.ChartsGreen400]: {
      h: 164,
      s: 46,
      l: 61,
      a: alpha
    },
    // #6EC9B0
    [Colors.ChartsGreen500]: {
      h: 169,
      s: 43,
      l: 45,
      a: alpha
    },
    // #42A593
    [Colors.ChartsGreen600]: {
      h: 175,
      s: 49,
      l: 37,
      a: alpha
    },
    // #308D85
    [Colors.ChartsGreen700]: {
      h: 180,
      s: 56,
      l: 30,
      a: alpha
    },
    // #217676
    [Colors.ChartsGreen800]: {
      h: 186,
      s: 64,
      l: 23,
      a: alpha
    },
    // #15585F
    [Colors.ChartsGreen900]: {
      h: 192,
      s: 74,
      l: 18,
      a: alpha
    },
    // #0C424F
    // Charts Red
    [Colors.ChartsRed100]: {
      h: 20,
      s: 81,
      l: 90,
      a: alpha
    },
    // #FADED0
    [Colors.ChartsRed200]: {
      h: 15,
      s: 80,
      l: 80,
      a: alpha
    },
    // #F5B8A3
    [Colors.ChartsRed300]: {
      h: 11,
      s: 66,
      l: 66,
      a: alpha
    },
    // #E28470
    [Colors.ChartsRed400]: {
      h: 5,
      s: 52,
      l: 53,
      a: alpha
    },
    // #C55449
    [Colors.ChartsRed500]: {
      h: 0,
      s: 72,
      l: 36,
      a: alpha
    },
    // #9F1A1A
    [Colors.ChartsRed600]: {
      h: 355,
      s: 75,
      l: 30,
      a: alpha
    },
    // #88131D
    [Colors.ChartsRed700]: {
      h: 350,
      s: 80,
      l: 25,
      a: alpha
    },
    // #720D1E
    [Colors.ChartsRed800]: {
      h: 344,
      s: 84,
      l: 20,
      a: alpha
    },
    // #5C081E
    [Colors.ChartsRed900]: {
      h: 339,
      s: 90,
      l: 16,
      a: alpha
    },
    // #4C041D
    // Charts Slate
    [Colors.ChartsSlate100]: {
      h: 199,
      s: 55,
      l: 92,
      a: alpha
    },
    // #E0EFF6
    [Colors.ChartsSlate200]: {
      h: 201,
      s: 54,
      l: 85,
      a: alpha
    },
    // #C2DEED
    [Colors.ChartsSlate300]: {
      h: 204,
      s: 34,
      l: 68,
      a: alpha
    },
    // #93B4CA
    [Colors.ChartsSlate400]: {
      h: 207,
      s: 20,
      l: 49,
      a: alpha
    },
    // #637F96
    [Colors.ChartsSlate500]: {
      h: 210,
      s: 29,
      l: 24,
      a: alpha
    },
    // #2C3E50
    [Colors.ChartsSlate600]: {
      h: 213,
      s: 36,
      l: 20,
      a: alpha
    },
    // #203044
    [Colors.ChartsSlate700]: {
      h: 216,
      s: 44,
      l: 15,
      a: alpha
    },
    // #162439
    [Colors.ChartsSlate800]: {
      h: 219,
      s: 53,
      l: 12,
      a: alpha
    },
    // #0E192E
    [Colors.ChartsSlate900]: {
      h: 222,
      s: 65,
      l: 9,
      a: alpha
    } // #081126

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

const getCollectionColor = (index, hover = false) => {
  const primaryColors = [Colors.CollectionPrimary1, Colors.CollectionPrimary2, Colors.CollectionPrimary3, Colors.CollectionPrimary4, Colors.CollectionPrimary5, Colors.CollectionPrimary6, Colors.CollectionPrimary7, Colors.CollectionPrimary8];
  const secondaryColors = [Colors.CollectionSecondary1, Colors.CollectionSecondary2, Colors.CollectionSecondary3, Colors.CollectionSecondary4, Colors.CollectionSecondary5, Colors.CollectionSecondary6, Colors.CollectionSecondary7, Colors.CollectionSecondary8];
  const target = hover ? primaryColors : secondaryColors;
  return (0, _pipeable.pipe)(O.fromNullable(target[index % target.length]), O.getOrElse(() => Colors.CollectionPrimary1));
};

exports.getCollectionColor = getCollectionColor;