"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pcteLightTheme = exports.monorailDarkTheme = exports.monorailLightTheme = exports.Customer = exports.ColorAlias = exports.ColorToken = void 0;

/**
 * Context-free named colors. Only meant to be used by aliases
 */
let ColorToken;
/** Aliases for BaseColor. Used by the theme. */

exports.ColorToken = ColorToken;

(function (ColorToken) {
  ColorToken["Transparent"] = "transparent";
  ColorToken["Neutral000"] = "#FFFFFF";
  ColorToken["Neutral050"] = "#F5F5F5";
  ColorToken["Neutral100"] = "#F0F0F0";
  ColorToken["Neutral150"] = "#EBEBEB";
  ColorToken["Neutral200"] = "#E0E0E0";
  ColorToken["Neutral300"] = "#C2C2C2";
  ColorToken["Neutral400"] = "#8F8F8F";
  ColorToken["Neutral500"] = "#757575";
  ColorToken["Neutral600"] = "#616161";
  ColorToken["Neutral700"] = "#424242";
  ColorToken["Neutral800"] = "#1C1C1C";
  ColorToken["Blue050"] = "#F5F9FF";
  ColorToken["Blue100"] = "#D9E4FD";
  ColorToken["Blue200"] = "#A1C1FF";
  ColorToken["Blue300"] = "#7AA8FF";
  ColorToken["Blue400"] = "#558DF6";
  ColorToken["Blue500"] = "#1465FF";
  ColorToken["Blue600"] = "#1050CB";
  ColorToken["Blue700"] = "#0C3D99";
  ColorToken["Blue800"] = "#1A2974";
  ColorToken["Blue900"] = "#161C4F";
  ColorToken["Red050"] = "#FFF6F5";
  ColorToken["Red100"] = "#FFE3E0";
  ColorToken["Red200"] = "#F8B6AF";
  ColorToken["Red300"] = "#FF6B66";
  ColorToken["Red400"] = "#F54545";
  ColorToken["Red500"] = "#D41C0B";
  ColorToken["Red600"] = "#AD0C00";
  ColorToken["Red700"] = "#890900";
  ColorToken["Magenta050"] = "#FFF5FB";
  ColorToken["Magenta100"] = "#FCE3F2";
  ColorToken["Magenta200"] = "#F0B7D8";
  ColorToken["Magenta300"] = "#EE77BC";
  ColorToken["Magenta400"] = "#DA56A2";
  ColorToken["Magenta500"] = "#B83581";
  ColorToken["Orange050"] = "#FFF8F0";
  ColorToken["Orange100"] = "#FFE6C7";
  ColorToken["Orange200"] = "#FFAB57";
  ColorToken["Orange300"] = "#FF8000";
  ColorToken["Orange400"] = "#E56000";
  ColorToken["Orange500"] = "#B84514";
  ColorToken["Green050"] = "#E8FCEE";
  ColorToken["Green100"] = "#BBF7CD";
  ColorToken["Green200"] = "#5BD780";
  ColorToken["Green300"] = "#0FBD6F";
  ColorToken["Green400"] = "#08A45E";
  ColorToken["Green500"] = "#007544";
  ColorToken["Teal050"] = "#E5FBFF";
  ColorToken["Teal100"] = "#C2F0F9";
  ColorToken["Teal200"] = "#79D3EC";
  ColorToken["Teal300"] = "#21B2E2";
  ColorToken["Teal400"] = "#1F95BC";
  ColorToken["Teal500"] = "#177097";
  ColorToken["Purple050"] = "#F7F5FF";
  ColorToken["Purple100"] = "#EAE3FF";
  ColorToken["Purple200"] = "#CBC3F9";
  ColorToken["Purple300"] = "#AD9AFA";
  ColorToken["Purple400"] = "#8D74F1";
  ColorToken["Purple500"] = "#6C35F2";
  ColorToken["Slate050"] = "#F5F8FA";
  ColorToken["Slate100"] = "#E2E9EF";
  ColorToken["Slate200"] = "#BACDDE";
  ColorToken["Slate300"] = "#88A8C3";
  ColorToken["Slate400"] = "#668FB2";
  ColorToken["Slate500"] = "#4B7192";
  ColorToken["Yellow050"] = "#FFF8D6";
  ColorToken["Yellow100"] = "#F9E886";
  ColorToken["Yellow200"] = "#F7CF08";
  ColorToken["Yellow300"] = "#F59F19";
  ColorToken["Yellow400"] = "#CB7E06";
  ColorToken["Yellow500"] = "#9F6B04";
  ColorToken["Lime050"] = "#F2FDE8";
  ColorToken["Lime100"] = "#C6F499";
  ColorToken["Lime200"] = "#A8CD14";
  ColorToken["Lime300"] = "#89A117";
  ColorToken["Lime400"] = "#70840F";
  ColorToken["Lime500"] = "#5C6E00";
  ColorToken["SpecialFallbackRangeColor_NOT_WCAG"] = "#EB9814";
})(ColorToken || (exports.ColorToken = ColorToken = {}));

let ColorAlias;
exports.ColorAlias = ColorAlias;

(function (ColorAlias) {
  ColorAlias["SpecialFallbackRangeColor_NOT_WCAG"] = "SpecialFallbackRangeColor_NOT_WCAG";
  ColorAlias["FoundationPlate"] = "FoundationPlate";
  ColorAlias["FoundationSmidgen"] = "FoundationSmidgen";
  ColorAlias["FoundationPinch"] = "FoundationPinch";
  ColorAlias["FoundationPinch2"] = "FoundationPinch2";
  ColorAlias["FoundationDash"] = "FoundationDash";
  ColorAlias["FoundationDollop"] = "FoundationDollop";
  ColorAlias["FoundationGraphic"] = "FoundationGraphic";
  ColorAlias["FoundationText4"] = "FoundationText4";
  ColorAlias["FoundationText3"] = "FoundationText3";
  ColorAlias["FoundationText2"] = "FoundationText2";
  ColorAlias["FoundationText1"] = "FoundationText1";
  ColorAlias["ActionSmidgen"] = "ActionSmidgen";
  ColorAlias["ActionPinch"] = "ActionPinch";
  ColorAlias["ActionDash"] = "ActionDash";
  ColorAlias["ActionDollop"] = "ActionDollop";
  ColorAlias["ActionGraphic"] = "ActionGraphic";
  ColorAlias["ActionPrimary"] = "ActionPrimary";
  ColorAlias["Accent4"] = "Accent4";
  ColorAlias["Accent3"] = "Accent3";
  ColorAlias["Accent2"] = "Accent2";
  ColorAlias["Accent1"] = "Accent1";
  ColorAlias["ErrorSmidgen"] = "ErrorSmidgen";
  ColorAlias["ErrorPinch"] = "ErrorPinch";
  ColorAlias["ErrorDash"] = "ErrorDash";
  ColorAlias["ErrorDollop"] = "ErrorDollop";
  ColorAlias["ErrorGraphic"] = "ErrorGraphic";
  ColorAlias["ErrorAA"] = "ErrorAA";
  ColorAlias["ErrorAccent"] = "ErrorAccent";
  ColorAlias["ErrorFocus"] = "ErrorFocus";
  ColorAlias["WarningSmidgen"] = "WarningSmidgen";
  ColorAlias["WarningPinch"] = "WarningPinch";
  ColorAlias["WarningDash"] = "WarningDash";
  ColorAlias["WarningDollop"] = "WarningDollop";
  ColorAlias["WarningGraphic"] = "WarningGraphic";
  ColorAlias["WarningAA"] = "WarningAA";
  ColorAlias["SuccessSmidgen"] = "SuccessSmidgen";
  ColorAlias["SuccessPinch"] = "SuccessPinch";
  ColorAlias["SuccessDash"] = "SuccessDash";
  ColorAlias["SuccessDollop"] = "SuccessDollop";
  ColorAlias["SuccessGraphic"] = "SuccessGraphic";
  ColorAlias["SuccessAA"] = "SuccessAA";
  ColorAlias["InfoSmidgen"] = "InfoSmidgen";
  ColorAlias["InfoPinch"] = "InfoPinch";
  ColorAlias["InfoDash"] = "InfoDash";
  ColorAlias["InfoDollop"] = "InfoDollop";
  ColorAlias["InfoGraphic"] = "InfoGraphic";
  ColorAlias["InfoAA"] = "InfoAA";
  ColorAlias["AdminSmidgen"] = "AdminSmidgen";
  ColorAlias["AdminPinch"] = "AdminPinch";
  ColorAlias["AdminDash"] = "AdminDash";
  ColorAlias["AdminDollop"] = "AdminDollop";
  ColorAlias["AdminGraphic"] = "AdminGraphic";
  ColorAlias["AdminAA"] = "AdminAA";
  ColorAlias["ContentAuthoringSmidgen"] = "ContentAuthoringSmidgen";
  ColorAlias["ContentAuthoringPinch"] = "ContentAuthoringPinch";
  ColorAlias["ContentAuthoringDash"] = "ContentAuthoringDash";
  ColorAlias["ContentAuthoringDollop"] = "ContentAuthoringDollop";
  ColorAlias["ContentAuthoringGraphic"] = "ContentAuthoringGraphic";
  ColorAlias["ContentAuthoringAA"] = "ContentAuthoringAA";
  ColorAlias["EventsSmidgen"] = "EventsSmidgen";
  ColorAlias["EventsPinch"] = "EventsPinch";
  ColorAlias["EventsDash"] = "EventsDash";
  ColorAlias["EventsDollop"] = "EventsDollop";
  ColorAlias["EventsGraphic"] = "EventsGraphic";
  ColorAlias["EventsAA"] = "EventsAA";
  ColorAlias["NetworkDesignSmidgen"] = "NetworkDesignSmidgen";
  ColorAlias["NetworkDesignPinch"] = "NetworkDesignPinch";
  ColorAlias["NetworkDesignDash"] = "NetworkDesignDash";
  ColorAlias["NetworkDesignDollop"] = "NetworkDesignDollop";
  ColorAlias["NetworkDesignGraphic"] = "NetworkDesignGraphic";
  ColorAlias["NetworkDesignAA"] = "NetworkDesignAA";
  ColorAlias["PersonnelSmidgen"] = "PersonnelSmidgen";
  ColorAlias["PersonnelPinch"] = "PersonnelPinch";
  ColorAlias["PersonnelDash"] = "PersonnelDash";
  ColorAlias["PersonnelDollop"] = "PersonnelDollop";
  ColorAlias["PersonnelGraphic"] = "PersonnelGraphic";
  ColorAlias["PersonnelAA"] = "PersonnelAA";
  ColorAlias["ReportsAnalyticsSmidgen"] = "ReportsAnalyticsSmidgen";
  ColorAlias["ReportsAnalyticsPinch"] = "ReportsAnalyticsPinch";
  ColorAlias["ReportsAnalyticsDash"] = "ReportsAnalyticsDash";
  ColorAlias["ReportsAnalyticsDollop"] = "ReportsAnalyticsDollop";
  ColorAlias["ReportsAnalyticsGraphic"] = "ReportsAnalyticsGraphic";
  ColorAlias["ReportsAnalyticsAA"] = "ReportsAnalyticsAA";
  ColorAlias["TechOpsSmidgen"] = "TechOpsSmidgen";
  ColorAlias["TechOpsPinch"] = "TechOpsPinch";
  ColorAlias["TechOpsDash"] = "TechOpsDash";
  ColorAlias["TechOpsDollop"] = "TechOpsDollop";
  ColorAlias["TechOpsGraphic"] = "TechOpsGraphic";
  ColorAlias["TechOpsAA"] = "TechOpsAA";
})(ColorAlias || (exports.ColorAlias = ColorAlias = {}));

let Customer;
exports.Customer = Customer;

(function (Customer) {
  Customer["SimSpace"] = "SimSpace";
  Customer["PCTE"] = "pcte";
})(Customer || (exports.Customer = Customer = {}));

const customerLightThemeOverrides = {
  [Customer.SimSpace]: {},
  [Customer.PCTE]: {// // Old overrides
    //   brandAccentColor: Colors.PCTEPurple,
    //   brandIcon: 'layers' as const,
    //   introductionTagline: ['Persistent Cyber Training Environment'],
    //   introductionOctagonColor: '#9A37B9',
  }
};
const activeCustomer = __CUSTOMER_VARIANT__ === 'PCTE' ? Customer.PCTE : Customer.SimSpace;
const monorailLightTheme = {
  // Official Color Aliases:
  // https://www.figma.com/file/RkTw45xhrtmtDD8ot26CjC/Named-Colors
  // Foundation
  [ColorAlias.FoundationPlate]: ColorToken.Neutral000,
  [ColorAlias.FoundationSmidgen]: ColorToken.Neutral050,
  [ColorAlias.FoundationPinch]: ColorToken.Neutral100,
  [ColorAlias.FoundationPinch2]: ColorToken.Neutral150,
  [ColorAlias.FoundationDash]: ColorToken.Neutral200,
  [ColorAlias.FoundationDollop]: ColorToken.Neutral300,
  [ColorAlias.FoundationGraphic]: ColorToken.Neutral400,
  [ColorAlias.FoundationText4]: ColorToken.Neutral500,
  [ColorAlias.FoundationText3]: ColorToken.Neutral600,
  [ColorAlias.FoundationText2]: ColorToken.Neutral700,
  [ColorAlias.FoundationText1]: ColorToken.Neutral800,
  // Action
  [ColorAlias.ActionSmidgen]: ColorToken.Blue050,
  [ColorAlias.ActionPinch]: ColorToken.Blue100,
  [ColorAlias.ActionDash]: ColorToken.Blue200,
  [ColorAlias.ActionDollop]: ColorToken.Blue300,
  [ColorAlias.ActionGraphic]: ColorToken.Blue400,
  [ColorAlias.ActionPrimary]: ColorToken.Blue500,
  // Accent
  [ColorAlias.Accent4]: ColorToken.Blue600,
  [ColorAlias.Accent3]: ColorToken.Blue700,
  [ColorAlias.Accent2]: ColorToken.Blue800,
  [ColorAlias.Accent1]: ColorToken.Blue900,
  // Statuses
  [ColorAlias.ErrorSmidgen]: ColorToken.Red050,
  [ColorAlias.ErrorPinch]: ColorToken.Red100,
  [ColorAlias.ErrorDash]: ColorToken.Red200,
  [ColorAlias.ErrorDollop]: ColorToken.Red300,
  [ColorAlias.ErrorGraphic]: ColorToken.Red400,
  [ColorAlias.ErrorAA]: ColorToken.Red500,
  [ColorAlias.ErrorAccent]: ColorToken.Red600,
  [ColorAlias.ErrorFocus]: ColorToken.Red700,
  [ColorAlias.WarningSmidgen]: ColorToken.Orange050,
  [ColorAlias.WarningPinch]: ColorToken.Orange100,
  [ColorAlias.WarningDash]: ColorToken.Orange200,
  [ColorAlias.WarningDollop]: ColorToken.Orange300,
  [ColorAlias.WarningGraphic]: ColorToken.Orange400,
  [ColorAlias.WarningAA]: ColorToken.Orange500,
  [ColorAlias.SuccessSmidgen]: ColorToken.Green050,
  [ColorAlias.SuccessPinch]: ColorToken.Green100,
  [ColorAlias.SuccessDash]: ColorToken.Green200,
  [ColorAlias.SuccessDollop]: ColorToken.Green300,
  [ColorAlias.SuccessGraphic]: ColorToken.Green400,
  [ColorAlias.SuccessAA]: ColorToken.Green500,
  [ColorAlias.InfoSmidgen]: ColorToken.Blue050,
  [ColorAlias.InfoPinch]: ColorToken.Blue100,
  [ColorAlias.InfoDash]: ColorToken.Blue200,
  [ColorAlias.InfoDollop]: ColorToken.Blue300,
  [ColorAlias.InfoGraphic]: ColorToken.Blue400,
  [ColorAlias.InfoAA]: ColorToken.Blue500,
  // Scores -- To Be Added
  // CKT -- To Be Added
  [ColorAlias.AdminSmidgen]: ColorToken.Slate050,
  [ColorAlias.AdminPinch]: ColorToken.Slate100,
  [ColorAlias.AdminDash]: ColorToken.Slate200,
  [ColorAlias.AdminDollop]: ColorToken.Slate300,
  [ColorAlias.AdminGraphic]: ColorToken.Slate400,
  [ColorAlias.AdminAA]: ColorToken.Slate500,
  [ColorAlias.ContentAuthoringSmidgen]: ColorToken.Purple050,
  [ColorAlias.ContentAuthoringPinch]: ColorToken.Purple100,
  [ColorAlias.ContentAuthoringDash]: ColorToken.Purple200,
  [ColorAlias.ContentAuthoringDollop]: ColorToken.Purple300,
  [ColorAlias.ContentAuthoringGraphic]: ColorToken.Purple400,
  [ColorAlias.ContentAuthoringAA]: ColorToken.Purple500,
  [ColorAlias.EventsSmidgen]: ColorToken.Green050,
  [ColorAlias.EventsPinch]: ColorToken.Green100,
  [ColorAlias.EventsDash]: ColorToken.Green200,
  [ColorAlias.EventsDollop]: ColorToken.Green300,
  [ColorAlias.EventsGraphic]: ColorToken.Green400,
  [ColorAlias.EventsAA]: ColorToken.Green500,
  [ColorAlias.NetworkDesignSmidgen]: ColorToken.Orange050,
  [ColorAlias.NetworkDesignPinch]: ColorToken.Orange100,
  [ColorAlias.NetworkDesignDash]: ColorToken.Orange200,
  [ColorAlias.NetworkDesignDollop]: ColorToken.Orange300,
  [ColorAlias.NetworkDesignGraphic]: ColorToken.Orange400,
  [ColorAlias.NetworkDesignAA]: ColorToken.Orange500,
  [ColorAlias.PersonnelSmidgen]: ColorToken.Teal050,
  [ColorAlias.PersonnelPinch]: ColorToken.Teal100,
  [ColorAlias.PersonnelDash]: ColorToken.Teal200,
  [ColorAlias.PersonnelDollop]: ColorToken.Teal300,
  [ColorAlias.PersonnelGraphic]: ColorToken.Teal400,
  [ColorAlias.PersonnelAA]: ColorToken.Teal500,
  [ColorAlias.ReportsAnalyticsSmidgen]: ColorToken.Red050,
  [ColorAlias.ReportsAnalyticsPinch]: ColorToken.Red100,
  [ColorAlias.ReportsAnalyticsDash]: ColorToken.Red200,
  [ColorAlias.ReportsAnalyticsDollop]: ColorToken.Red300,
  [ColorAlias.ReportsAnalyticsGraphic]: ColorToken.Red400,
  [ColorAlias.ReportsAnalyticsAA]: ColorToken.Red500,
  [ColorAlias.TechOpsSmidgen]: ColorToken.Magenta050,
  [ColorAlias.TechOpsPinch]: ColorToken.Magenta100,
  [ColorAlias.TechOpsDash]: ColorToken.Magenta200,
  [ColorAlias.TechOpsDollop]: ColorToken.Magenta300,
  [ColorAlias.TechOpsGraphic]: ColorToken.Magenta400,
  [ColorAlias.TechOpsAA]: ColorToken.Magenta500,
  [ColorAlias.SpecialFallbackRangeColor_NOT_WCAG]: ColorToken.SpecialFallbackRangeColor_NOT_WCAG,
  // Charts/Blue -- To Be Added
  // Charts/Cider -- To Be Added
  // Charts/Green -- To Be Added
  // Charts/Wine -- To Be Added
  // Charts/Purple -- To Be Added
  ...customerLightThemeOverrides[activeCustomer]
};
exports.monorailLightTheme = monorailLightTheme;
const monorailDarkTheme = { ...monorailLightTheme
};
exports.monorailDarkTheme = monorailDarkTheme;
const pcteLightTheme = { ...monorailLightTheme
};
exports.pcteLightTheme = pcteLightTheme;