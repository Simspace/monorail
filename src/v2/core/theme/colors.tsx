/**
 * Context-free named colors. Only meant to be used by aliases
 */
export enum ColorToken {
  Transparent = 'transparent',

  // Official Color Tokens:
  // https://www.figma.com/file/RkTw45xhrtmtDD8ot26CjC/Named-Colors
  Neutral000 = '#FFFFFF',
  Neutral050 = '#F5F5F5',
  Neutral100 = '#F0F0F0',
  Neutral150 = '#EBEBEB',
  Neutral200 = '#E0E0E0',
  Neutral300 = '#C2C2C2',
  Neutral400 = '#8F8F8F',
  Neutral500 = '#757575',
  Neutral600 = '#616161',
  Neutral700 = '#424242',
  Neutral800 = '#1C1C1C',

  Blue050 = '#F5F9FF',
  Blue100 = '#D9E4FD',
  Blue200 = '#A1C1FF',
  Blue300 = '#7AA8FF',
  Blue400 = '#558DF6',
  Blue500 = '#1465FF',
  Blue600 = '#1050CB',
  Blue700 = '#0C3D99',
  Blue800 = '#1A2974',
  Blue900 = '#161C4F',

  Red050 = '#FFF6F5',
  Red100 = '#FFE3E0',
  Red200 = '#F8B6AF',
  Red300 = '#FF6B66',
  Red400 = '#F54545',
  Red500 = '#D41C0B',
  Red600 = '#AD0C00',
  Red700 = '#890900',

  Magenta050 = '#FFF5FB',
  Magenta100 = '#FCE3F2',
  Magenta200 = '#F0B7D8',
  Magenta300 = '#EE77BC',
  Magenta400 = '#DA56A2',
  Magenta500 = '#B83581',

  Orange050 = '#FFF8F0',
  Orange100 = '#FFE6C7',
  Orange200 = '#FFAB57',
  Orange300 = '#FF8000',
  Orange400 = '#E56000',
  Orange500 = '#B84514',

  Green050 = '#E8FCEE',
  Green100 = '#BBF7CD',
  Green200 = '#5BD780',
  Green300 = '#0FBD6F',
  Green400 = '#08A45E',
  Green500 = '#007544',

  Teal050 = '#E5FBFF',
  Teal100 = '#C2F0F9',
  Teal200 = '#79D3EC',
  Teal300 = '#21B2E2',
  Teal400 = '#1F95BC',
  Teal500 = '#177097',

  Purple050 = '#F7F5FF',
  Purple100 = '#EAE3FF',
  Purple200 = '#CBC3F9',
  Purple300 = '#AD9AFA',
  Purple400 = '#8D74F1',
  Purple500 = '#6C35F2',

  Slate050 = '#F5F8FA',
  Slate100 = '#E2E9EF',
  Slate200 = '#BACDDE',
  Slate300 = '#88A8C3',
  Slate400 = '#668FB2',
  Slate500 = '#4B7192',

  Yellow050 = '#FFF8D6',
  Yellow100 = '#F9E886',
  Yellow200 = '#F7CF08',
  Yellow300 = '#F59F19',
  Yellow400 = '#CB7E06',
  Yellow500 = '#9F6B04',

  Lime050 = '#F2FDE8',
  Lime100 = '#C6F499',
  Lime200 = '#A8CD14',
  Lime300 = '#89A117',
  Lime400 = '#70840F',
  Lime500 = '#5C6E00',

  SpecialFallbackRangeColor_NOT_WCAG = '#EB9814',
}

/** Aliases for BaseColor. Used by the theme. */
export enum ColorAlias {
  /** Special color added for hardhat because Matt R doesn't like the new color */
  SpecialFallbackRangeColor_NOT_WCAG = 'SpecialFallbackRangeColor_NOT_WCAG',

  // Official Color Aliases:
  // https://www.figma.com/file/RkTw45xhrtmtDD8ot26CjC/Named-Colors

  // Foundation
  FoundationPlate = 'FoundationPlate',
  FoundationSmidgen = 'FoundationSmidgen',
  FoundationPinch = 'FoundationPinch',
  FoundationPinch2 = 'FoundationPinch2',
  FoundationDash = 'FoundationDash',
  FoundationDollop = 'FoundationDollop',
  FoundationGraphic = 'FoundationGraphic',
  FoundationText4 = 'FoundationText4',
  FoundationText3 = 'FoundationText3',
  FoundationText2 = 'FoundationText2',
  FoundationText1 = 'FoundationText1',

  // Action
  ActionSmidgen = 'ActionSmidgen',
  ActionPinch = 'ActionPinch',
  ActionDash = 'ActionDash',
  ActionDollop = 'ActionDollop',
  ActionGraphic = 'ActionGraphic',
  ActionPrimary = 'ActionPrimary',

  // Accent
  Accent4 = 'Accent4',
  Accent3 = 'Accent3',
  Accent2 = 'Accent2',
  Accent1 = 'Accent1',

  // Statuses
  ErrorSmidgen = 'ErrorSmidgen',
  ErrorPinch = 'ErrorPinch',
  ErrorDash = 'ErrorDash',
  ErrorDollop = 'ErrorDollop',
  ErrorGraphic = 'ErrorGraphic',
  ErrorAA = 'ErrorAA',
  ErrorAccent = 'ErrorAccent',
  ErrorFocus = 'ErrorFocus',

  WarningSmidgen = 'WarningSmidgen',
  WarningPinch = 'WarningPinch',
  WarningDash = 'WarningDash',
  WarningDollop = 'WarningDollop',
  WarningGraphic = 'WarningGraphic',
  WarningAA = 'WarningAA',

  SuccessSmidgen = 'SuccessSmidgen',
  SuccessPinch = 'SuccessPinch',
  SuccessDash = 'SuccessDash',
  SuccessDollop = 'SuccessDollop',
  SuccessGraphic = 'SuccessGraphic',
  SuccessAA = 'SuccessAA',

  InfoSmidgen = 'InfoSmidgen',
  InfoPinch = 'InfoPinch',
  InfoDash = 'InfoDash',
  InfoDollop = 'InfoDollop',
  InfoGraphic = 'InfoGraphic',
  InfoAA = 'InfoAA',

  // Scores -- To Be Added
  // CKT -- To Be Added

  // App Colors
  AdminSmidgen = 'AdminSmidgen',
  AdminPinch = 'AdminPinch',
  AdminDash = 'AdminDash',
  AdminDollop = 'AdminDollop',
  AdminGraphic = 'AdminGraphic',
  AdminAA = 'AdminAA',

  ContentAuthoringSmidgen = 'ContentAuthoringSmidgen',
  ContentAuthoringPinch = 'ContentAuthoringPinch',
  ContentAuthoringDash = 'ContentAuthoringDash',
  ContentAuthoringDollop = 'ContentAuthoringDollop',
  ContentAuthoringGraphic = 'ContentAuthoringGraphic',
  ContentAuthoringAA = 'ContentAuthoringAA',

  EventsSmidgen = 'EventsSmidgen',
  EventsPinch = 'EventsPinch',
  EventsDash = 'EventsDash',
  EventsDollop = 'EventsDollop',
  EventsGraphic = 'EventsGraphic',
  EventsAA = 'EventsAA',

  NetworkDesignSmidgen = 'NetworkDesignSmidgen',
  NetworkDesignPinch = 'NetworkDesignPinch',
  NetworkDesignDash = 'NetworkDesignDash',
  NetworkDesignDollop = 'NetworkDesignDollop',
  NetworkDesignGraphic = 'NetworkDesignGraphic',
  NetworkDesignAA = 'NetworkDesignAA',

  PersonnelSmidgen = 'PersonnelSmidgen',
  PersonnelPinch = 'PersonnelPinch',
  PersonnelDash = 'PersonnelDash',
  PersonnelDollop = 'PersonnelDollop',
  PersonnelGraphic = 'PersonnelGraphic',
  PersonnelAA = 'PersonnelAA',

  ReportsAnalyticsSmidgen = 'ReportsAnalyticsSmidgen',
  ReportsAnalyticsPinch = 'ReportsAnalyticsPinch',
  ReportsAnalyticsDash = 'ReportsAnalyticsDash',
  ReportsAnalyticsDollop = 'ReportsAnalyticsDollop',
  ReportsAnalyticsGraphic = 'ReportsAnalyticsGraphic',
  ReportsAnalyticsAA = 'ReportsAnalyticsAA',

  TechOpsSmidgen = 'TechOpsSmidgen',
  TechOpsPinch = 'TechOpsPinch',
  TechOpsDash = 'TechOpsDash',
  TechOpsDollop = 'TechOpsDollop',
  TechOpsGraphic = 'TechOpsGraphic',
  TechOpsAA = 'TechOpsAA',

  // Charts/Blue -- To Be Added
  // Charts/Cider -- To Be Added
  // Charts/Green -- To Be Added
  // Charts/Wine -- To Be Added
  // Charts/Purple -- To Be Added
  // Metrics -- To Be Added
  // Events -- To Be Added
  // Admin -- To Be Added
  // Tech Ops -- To Be Added
  // Performance Management -- To Be Added
  // Network Designer -- To Be Added
  // Content Authoring -- To Be Added
}

export enum Customer {
  SimSpace = 'SimSpace',
  PCTE = 'pcte',
}

export type Theme = Record<ColorAlias, ColorToken>

const customerLightThemeOverrides: Record<Customer, Partial<Theme>> = {
  [Customer.SimSpace]: {},
  [Customer.PCTE]: {
    // // Old overrides
    //   brandAccentColor: Colors.PCTEPurple,
    //   brandIcon: 'layers' as const,
    //   introductionTagline: ['Persistent Cyber Training Environment'],
    //   introductionOctagonColor: '#9A37B9',
  },
}

const activeCustomer: Customer =
  __CUSTOMER_VARIANT__ === 'PCTE' ? Customer.PCTE : Customer.SimSpace

export const monorailLightTheme: Theme = {
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

  [ColorAlias.SpecialFallbackRangeColor_NOT_WCAG]:
    ColorToken.SpecialFallbackRangeColor_NOT_WCAG,

  // Charts/Blue -- To Be Added
  // Charts/Cider -- To Be Added
  // Charts/Green -- To Be Added
  // Charts/Wine -- To Be Added
  // Charts/Purple -- To Be Added

  ...customerLightThemeOverrides[activeCustomer],
}

export const monorailDarkTheme: Theme = {
  ...monorailLightTheme,
}

export const pcteLightTheme: Theme = {
  ...monorailLightTheme,
}
