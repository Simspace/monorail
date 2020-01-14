import { Colors } from '@monorail/helpers/color'

enum AuthSubAppName {
  Academy = 'academy',
  Admin = 'admin',
  Catalog = 'catalog',
  EventDesign = 'event-design',
  Events = 'events',
  Execution = 'execution',
  Hardhat = 'hardhat',
  NetworkSetup = 'network-setup',
  Range = 'range',
  ReportsAnalytics = 'reports-analytics',
  TechOps = 'techops',
  Tracker = 'tracker',
}

export enum AppName {
  Admin = 'admin',
  EventDesign = 'event-design',
  Events = 'events',
  Execution = 'execution',
  Hardhat = 'hardhat',
  Impact = 'impact',
  LMS = 'externalLms',
  MyOrg = 'my-org',
  NetworkSetup = 'network-setup',
  Range = 'range',
  Repo = 'repo',
  ReportsAnalytics = 'reports-analytics',
  TechOps = 'techops',
  Tracker = 'tracker',
  Training = 'training',
}

export type AppOrAuthSubAppName = AppName | AuthSubAppName

export type AppOrAuthSubAppNameString =
  | 'academy'
  | 'admin'
  | 'catalog'
  | 'event-design'
  | 'events'
  | 'execution'
  | 'externalLms'
  | 'hardhat'
  | 'impact'
  | 'my-org'
  | 'network-setup'
  | 'range'
  | 'repo'
  | 'reports-analytics'
  | 'techops'
  | 'tracker'
  | 'training'

export const convertAppNameToColor = (
  appNames: AppOrAuthSubAppName,
): Colors => {
  /* eslint-disable default-case */
  switch (appNames) {
    case AppName.Events:
    case AppName.Execution:
    case AppName.Tracker:
    case AuthSubAppName.Events:
    case AuthSubAppName.Execution:
    case AuthSubAppName.Tracker:
      return Colors.Tracker
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
      return Colors.Catalog
    case AppName.Impact:
    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
      return Colors.Impact
    case AppName.Training:
      return Colors.Training
    case AppName.Repo:
      return Colors.Repo
    case AppName.LMS:
      return Colors.LMS
    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return Colors.TechOps
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return Colors.Admin
    case AppName.MyOrg:
      return Colors.MyOrg
    default:
      return Colors.White
  }
  /* eslint-enable default-case */
}

export const convertAppNameToSecondaryColor = (
  appNames: AppOrAuthSubAppName,
): Colors => {
  /* eslint-disable default-case */
  switch (appNames) {
    case AppName.Events:
    case AppName.Execution:
    case AppName.Tracker:
    case AuthSubAppName.Events:
    case AuthSubAppName.Execution:
    case AuthSubAppName.Tracker:
      return Colors.TrackerAlt
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
      return Colors.CatalogAlt
    case AppName.Impact:
    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
      return Colors.ImpactAlt
    case AppName.Training:
      return Colors.Training
    case AppName.Repo:
      return Colors.Repo
    case AppName.LMS:
      return Colors.LMS
    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return Colors.TechOpsAlt
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return Colors.AdminAlt
    case AppName.MyOrg:
      return Colors.MyOrgAlt
    default:
      return Colors.White
  }
  /* eslint-enable default-case */
}

const assertUnreachable = (msg: string): never => {
  throw new Error(msg)
}

// TODO: lock down appNameString type to only valid appName strings for safety
export const convertStringToAppName = (
  appNameString: string,
): AppOrAuthSubAppName => {
  switch (appNameString) {
    case 'admin':
      return AppName.Admin
    case 'hardhat':
    case 'network-setup':
    case 'catalog':
    case 'academy':
    case 'event-design':
    case 'training':
      return AuthSubAppName.Catalog
    case 'range':
      return AppName.Range
    case 'tracker':
      return AppName.Tracker
    case 'impact':
      return AppName.Impact
    case 'techops':
      return AppName.TechOps
    case 'repo':
      return AppName.Repo
    case 'externalLms':
      return AppName.LMS
    case 'execution':
      return AppName.Execution
    case 'events':
      return AppName.Events
    case 'reports-analytics':
      return AppName.ReportsAnalytics
    case 'my-org':
      return AppName.MyOrg
    default:
      return AppName.Events
  }
}

export const convertAppNameToString = (
  appName: AppOrAuthSubAppName,
): AppOrAuthSubAppNameString => {
  /* eslint-disable default-case */
  switch (appName) {
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return 'admin'
    case AuthSubAppName.Academy:
      return 'academy'
    case AppName.EventDesign:
    case AppName.NetworkSetup:
    case AuthSubAppName.Catalog:
    case AuthSubAppName.EventDesign:
    case AuthSubAppName.NetworkSetup:
      return 'catalog'
    case AppName.Range:
    case AuthSubAppName.Range:
      return 'range'
    case AppName.Tracker:
    case AuthSubAppName.Tracker:
      return 'tracker'
    case AppName.Hardhat:
    case AuthSubAppName.Hardhat:
      return 'hardhat'
    case AppName.Impact:
      return 'impact'
    case AppName.Training:
      return 'training'
    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return 'techops'
    case AppName.Repo:
      return 'repo'
    case AppName.LMS:
      return 'externalLms'
    case AppName.Events:
    case AuthSubAppName.Events:
    case AppName.Execution:
    case AuthSubAppName.Execution:
      return 'events'
    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
      return 'reports-analytics'
    case AppName.MyOrg:
      return 'my-org'
  }
  /* eslint-disable default-case */
}

type AppNameType = string | AppOrAuthSubAppName

export const isAppName = (name: AppNameType): name is AppOrAuthSubAppName =>
  Object.values(AppName).includes(name as AppName) ||
  Object.values(AuthSubAppName).includes(name as AuthSubAppName)
