import { Colors } from '@monorail/helpers/color'

enum AuthSubAppName {
  Academy = 'academy',
  Admin = 'admin',
  Catalog = 'catalog',
  Dashboard = 'dashboard',
  Hardhat = 'hardhat',
  Range = 'range',
  TechOps = 'techops',
  Tracker = 'tracker',
  Execution = 'execution',
  Home = 'home',
  Events = 'events',
  EventDesign = 'event-design',
  ReportsAnalytics = 'reports-analytics',
}

export enum AppName {
  Admin = 'admin',
  Dashboard = 'dashboard',
  Hardhat = 'hardhat',
  Impact = 'impact',
  LMS = 'externalLms',
  Range = 'range',
  Repo = 'repo',
  TechOps = 'techops',
  Tracker = 'tracker',
  Training = 'training',
  Execution = 'execution',
  Home = 'home',
  Events = 'events',
  EventDesign = 'event-design',
  ReportsAnalytics = 'reports-analytics',
}

export type AppOrAuthSubAppName = AppName | AuthSubAppName

export type AppOrAuthSubAppNameString =
  | 'admin'
  | 'academy'
  | 'catalog'
  | 'dashboard'
  | 'range'
  | 'tracker'
  | 'hardhat'
  | 'impact'
  | 'training'
  | 'techops'
  | 'repo'
  | 'externalLms'
  | 'execution'
  | 'home'
  | 'events'
  | 'event-design'
  | 'reports-analytics'

export const convertAppNameToColor = (
  appNames: AppOrAuthSubAppName,
): Colors => {
  switch (appNames) {
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return Colors.Admin
    case AuthSubAppName.Academy:
      return Colors.Academy
    case AuthSubAppName.Catalog:
      return Colors.Catalog
    case AppName.Dashboard:
    case AuthSubAppName.Dashboard:
      return Colors.Dashboard
    case AppName.Home:
    case AuthSubAppName.Home:
    case AppName.Events:
    case AuthSubAppName.Events:
    case AppName.EventDesign:
    case AuthSubAppName.EventDesign:
    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
    case AuthSubAppName.Execution:
    case AppName.Execution:
      return Colors.White
    case AppName.Range:
    case AuthSubAppName.Range:
      return Colors.Range
    case AppName.Tracker:
    case AuthSubAppName.Tracker:
      return Colors.Tracker
    case AppName.Hardhat:
    case AuthSubAppName.Hardhat:
      return Colors.Hardhat
    case AppName.Impact:
      return Colors.Impact
    case AppName.Training:
      return Colors.Training
    case AppName.TechOps:
    case AuthSubAppName.TechOps:
      return Colors.TechOps
    case AppName.Repo:
      return Colors.Repo
    case AppName.LMS:
      return Colors.LMS
  }
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
    case 'academy':
      return AuthSubAppName.Academy
    case 'catalog':
      return AuthSubAppName.Catalog
    case 'dashboard':
      return AppName.Dashboard
    case 'range':
      return AppName.Range
    case 'tracker':
      return AppName.Tracker
    case 'hardhat':
      return AppName.Hardhat
    case 'impact':
      return AppName.Impact
    case 'training':
      return AppName.Training
    case 'techops':
      return AppName.TechOps
    case 'repo':
      return AppName.Repo
    case 'externalLms':
      return AppName.LMS
    case 'execution':
      return AppName.Execution
    case 'home':
      return AppName.Home
    case 'events':
      return AppName.Events
    case 'event-design':
      return AppName.EventDesign
    case 'reports-analytics':
      return AppName.ReportsAnalytics
    default:
      return assertUnreachable('Invalid appName')
  }
}

export const convertAppNameToString = (
  appName: AppOrAuthSubAppName,
): AppOrAuthSubAppNameString => {
  switch (appName) {
    case AppName.Admin:
    case AuthSubAppName.Admin:
      return 'admin'
    case AuthSubAppName.Academy:
      return 'academy'
    case AuthSubAppName.Catalog:
      return 'catalog'
    case AppName.Dashboard:
    case AuthSubAppName.Dashboard:
      return 'dashboard'
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
    case AppName.Home:
    case AuthSubAppName.Home:
      return 'home'
    case AppName.Events:
    case AuthSubAppName.Events:
    case AppName.Execution:
    case AuthSubAppName.Execution:
      return 'events'
    case AppName.EventDesign:
    case AuthSubAppName.EventDesign:
      return 'event-design'
    case AppName.ReportsAnalytics:
    case AuthSubAppName.ReportsAnalytics:
      return 'reports-analytics'
  }
}

type AppNameType = string | AppOrAuthSubAppName

export const isAppName = (name: AppNameType): name is AppOrAuthSubAppName =>
  Object.values(AppName).includes(name) ||
  Object.values(AuthSubAppName).includes(name)
