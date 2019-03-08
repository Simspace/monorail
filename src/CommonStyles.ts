import {
  css,
  SimpleInterpolation,
  keyframes,
  Keyframes,
  Styles,
} from 'styled-components'
import { PopOverPosition } from '@monorail/popOver/PopOver'

enum AuthSubAppName {
  Academy = 'academy',
  Admin = 'admin',
  Catalog = 'catalog',
  Dashboard = 'dashboard',
  Hardhat = 'hardhat',
  Range = 'range',
  TechOps = 'techops',
  Tracker = 'tracker',
}

export const visible = (isVisible = false): Styles =>
  isVisible
    ? {
        visibility: 'visible',
        opacity: 0.9999, // Doing .9999 keeps the GPU activated on this element so that it can quickly change back to 0.
      }
    : {
        visibility: 'hidden',
        opacity: 0,
      }

/*
* Elevation
*/

export enum ElevationRange {
  Elevation0 = 'elevation0',
  Elevation1 = 'elevation1',
  Elevation2 = 'elevation2',
  Elevation3 = 'elevation3',
  Elevation4 = 'elevation4',
  Elevation5 = 'elevation5',
  Elevation6 = 'elevation6',
  Elevation7 = 'elevation7',
  Elevation8 = 'elevation8',
  Elevation9 = 'elevation9',
  Elevation10 = 'elevation10',
  Elevation11 = 'elevation11',
  Elevation12 = 'elevation12',
  Elevation13 = 'elevation13',
  Elevation14 = 'elevation14',
  Elevation15 = 'elevation15',
  Elevation16 = 'elevation16',
  Elevation17 = 'elevation17',
  Elevation18 = 'elevation18',
  Elevation19 = 'elevation19',
  Elevation20 = 'elevation20',
  Elevation21 = 'elevation21',
  Elevation22 = 'elevation22',
  Elevation23 = 'elevation23',
  Elevation24 = 'elevation24',
}

const elevationStyles = {
  [ElevationRange.Elevation0]:
    '0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation1]:
    '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation2]:
    '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation3]:
    '0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation4]:
    '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation5]:
    '0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation6]:
    '0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation7]:
    '0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)',
  [ElevationRange.Elevation8]:
    '0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)',
  [ElevationRange.Elevation9]:
    '0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)',
  [ElevationRange.Elevation10]:
    '0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)',
  [ElevationRange.Elevation11]:
    '0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)',
  [ElevationRange.Elevation12]:
    '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation13]:
    '0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation14]:
    '0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation15]:
    '0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation16]:
    '0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation17]:
    '0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation18]:
    '0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)',
  [ElevationRange.Elevation19]:
    '0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)',
  [ElevationRange.Elevation20]:
    '0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation21]:
    '0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation22]:
    '0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation23]:
    '0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)',
  [ElevationRange.Elevation24]:
    '0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)',
}

export const getElevation = (elevation: ElevationRange): Styles => ({
  boxShadow: elevationStyles[elevation],
})

/*
* Flex Helpers
*/

const defaultDirection = 'column'
const defaultWrap = 'nowrap'

export const flexFlow = (
  direction = defaultDirection,
  wrap = defaultWrap,
): Styles => ({
  display: 'flex',
  flexFlow: `${direction} ${wrap}`,
})

/*
* Typography
*/

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export enum FontWeights {
  ExtraLight = 200,
  Light = 300,
  Book = 400,
  Medium = 500,
  Bold = 700,
  Black = 800,
}

export enum FontSizes {
  Hyper1 = 'hyper1',
  Hyper2 = 'hyper2',
  Hyper3 = 'hyper3',
  Hyper4 = 'hyper4',
  Title1 = 'title1',
  Title2 = 'title2',
  Title3 = 'title3',
  Title4 = 'title4',
  Title5 = 'title5',
  Content = 'content',
  Micro = 'micro',
}

const fontSizeLookUp = {
  [FontSizes.Hyper1]: {
    fontSize: '44px',
    lineHeight: '56px',
  },
  [FontSizes.Hyper2]: {
    fontSize: '38px',
    lineHeight: '40px',
  },
  [FontSizes.Hyper3]: {
    fontSize: '33px',
    lineHeight: '36px',
  },
  [FontSizes.Hyper4]: {
    fontSize: '25px',
    lineHeight: '32px',
  },
  [FontSizes.Title1]: {
    fontSize: '22px',
    lineHeight: '28px',
  },
  [FontSizes.Title2]: {
    fontSize: '19px',
    lineHeight: '24px',
  },
  [FontSizes.Title3]: {
    fontSize: '16px',
    lineHeight: '20px',
  },
  [FontSizes.Title4]: {
    fontSize: '14px',
    lineHeight: '18px',
  },
  [FontSizes.Title5]: {
    fontSize: '11px',
    lineHeight: '16px',
  },
  [FontSizes.Content]: {
    fontSize: '8px',
    lineHeight: '10px',
  },
  [FontSizes.Micro]: {
    fontSize: '5px',
    lineHeight: '6px',
  },
}

export const typography = (
  weight: number,
  size: FontSizes,
  margin?: string,
): Styles => ({
  fontWeight: weight,
  ...fontSizeLookUp[size],
  ...(margin ? typographyMargin(size, margin) : {}),
})

export type Margin = {
  bottom?: number | 'auto'
  left?: number | 'auto'
  right?: number | 'auto'
  top?: number | 'auto'
}

const fontMarginLookUp: { [key in FontSizes]: Margin } = {
  [FontSizes.Hyper1]: {
    top: -11,
    bottom: -13,
  },
  [FontSizes.Hyper2]: {
    top: -5,
    bottom: -7,
  },
  [FontSizes.Hyper3]: {
    top: -6,
    bottom: -6,
  },
  [FontSizes.Hyper4]: {
    top: -7,
    bottom: -7,
  },
  [FontSizes.Title1]: {
    top: -6,
    bottom: -6,
  },
  [FontSizes.Title2]: {
    top: -4,
    bottom: -6,
  },
  [FontSizes.Title3]: {
    top: -5,
    bottom: -5,
  },
  [FontSizes.Title4]: {
    top: -4,
    bottom: -4,
  },
  [FontSizes.Title5]: {
    top: -4,
    bottom: -4,
  },
  [FontSizes.Content]: {
    top: -2,
    bottom: -2,
  },
  [FontSizes.Micro]: {
    top: -1,
    bottom: -1,
  },
}

export const typographyMargin = (
  size: FontSizes,
  margin: string = '',
): { margin: string } => {
  const fontSizeMargins = fontMarginLookUp[size]
  const marginObject = shortHandDeconstruction(margin)

  const mergedObject = {
    top: mergeValues(marginObject.top, fontSizeMargins.top),
    right: mergeValues(marginObject.right, fontSizeMargins.right),
    bottom: mergeValues(marginObject.bottom, fontSizeMargins.bottom),
    left: mergeValues(marginObject.left, fontSizeMargins.left),
  }

  return {
    margin: sizingObjectToString(mergedObject),
  }
}

const mergeValues = (
  firstValue: number | 'auto' = 0,
  secondValue: number | 'auto' = 0,
): number | 'auto' => {
  if (firstValue === 'auto' || secondValue === 'auto') {
    return 'auto'
  }

  return firstValue + secondValue
}

const stripPx = (value: string): number | 'auto' => {
  if (value === 'auto') {
    return value
  }

  return Number(value.replace(/px/gi, ''))
}

const addPx = (value?: number | 'auto'): string => {
  if (!value) {
    return '0px'
  }

  if (value === 'auto') {
    return value
  }

  return value + 'px'
}

export const shortHandDeconstruction = (value: string): Margin => {
  if (value === '') {
    return {}
  }

  const spiltValue = value.split(' ').map(stripPx)

  switch (spiltValue.length) {
    case 4:
      return {
        top: spiltValue[0],
        right: spiltValue[1],
        bottom: spiltValue[2],
        left: spiltValue[3],
      }
    case 3:
      return {
        top: spiltValue[0],
        right: spiltValue[1],
        bottom: spiltValue[2],
        left: spiltValue[1],
      }
    case 2:
      return {
        top: spiltValue[0],
        right: spiltValue[1],
        bottom: spiltValue[0],
        left: spiltValue[1],
      }
    default:
    case 1:
      return {
        top: spiltValue[0],
        right: spiltValue[0],
        bottom: spiltValue[0],
        left: spiltValue[0],
      }
  }
}

const sizingObjectToString = (size: Margin): string => {
  return `${addPx(size.top)} ${addPx(size.right)} ${addPx(size.bottom)} ${addPx(
    size.left,
  )}`
}

export const gothamFontFamily = css`
  font-family: 'Gotham SSm A', 'Gotham SSm B', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  letter-spacing: initial;
  text-rendering: optimizeLegibility;
`

//#region App Name

/**
 * App Name
 */

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
}

//#endregion App Name

export enum EventState {
  // In Progress
  Active = 'active',
  // Canceled
  Canceled = 'canceled',
  // Complete
  Finished = 'finished',
  // Enrolled
  Scheduled = 'scheduled',
  // Pending
  Requested = 'requested',
  // Paused
  Inactive = 'inactive',
}

export enum Colors {
  // Black, Gray, and White.
  Black24 = 'black24',
  Black54 = 'black54',
  Black62 = 'black62',
  Black74 = 'black74',
  Black89 = 'black89',
  Black = 'black',
  White89 = 'white89',
  White = 'white',
  Grey94 = 'grey94',
  Grey96 = 'grey96',
  Grey97 = 'grey97',
  Grey98 = 'grey98',
  Grey99 = 'grey99',

  // Brand Colors
  BrandLightBlue = 'brandLightBlue',
  BrandDarkBlue = 'brandDarkBlue',

  // PCTE Brand
  PCTEPurple = 'PCTEPurple',

  // Accent
  // Blue
  AccentBlue300 = 'accentBlue300',
  AccentBlue400 = 'accentBlue400',
  AccentBlue500 = 'accentBlue500',
  AccentBlue600 = 'accentBlue600',
  AccentBlue700 = 'accentBlue700',

  // Purple
  AccentPurple500 = 'accentPurple500',
  AccentPurple700 = 'accentPurple700',

  // In Progress
  Active = 'active',
  // Canceled
  Canceled = 'canceled',
  // Complete
  Finished = 'finished',
  // Enrolled
  Scheduled = 'scheduled',
  // Pending
  Requested = 'requested',
  // Paused
  Inactive = 'inactive',

  Academy = 'academy',
  Admin = 'admin',
  Catalog = 'catalog',
  Dashboard = 'dashboard',
  Range = 'range',
  Tracker = 'tracker',
  Hardhat = 'hardhat',
  Impact = 'impact',
  Training = 'training',
  TechOps = 'techops',
  Repo = 'repo',
  LMS = 'externalLms',

  Green = 'green',
  Red = 'red',
  Amber = 'amber',
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

const assertUnreachable = (msg: string): never => {
  throw new Error(msg)
}

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
  }
}

export const convertEventStateToColor = (eventState: EventState): Colors => {
  switch (eventState) {
    case EventState.Active:
      return Colors.Active
    case EventState.Inactive:
      return Colors.Inactive
    case EventState.Finished:
      return Colors.Finished
    case EventState.Scheduled:
      return Colors.Scheduled
    case EventState.Requested:
      return Colors.Requested
    case EventState.Canceled:
      return Colors.Canceled
  }
}

type HSLAMapType = {
  h: number
  s: number
  l: number
  a: number
}

export const colorHSLAMap = ({
  color,
  alpha = 1,
}: {
  color: Colors
  alpha: number
}): HSLAMapType => {
  const baseColors = {
    // Base Colors
    [Colors.Black24]: { h: 0, s: 0, l: 0, a: 0.24 },
    [Colors.Black54]: { h: 0, s: 0, l: 0, a: 0.54 },
    [Colors.Black62]: { h: 0, s: 0, l: 0, a: 0.62 },
    [Colors.Black74]: { h: 0, s: 0, l: 0, a: 0.74 },
    [Colors.Black89]: { h: 0, s: 0, l: 0, a: 0.89 },
    [Colors.Black]: { h: 0, s: 0, l: 0, a: alpha },
    [Colors.White89]: { h: 0, s: 0, l: 100, a: 0.89 },
    [Colors.White]: { h: 0, s: 0, l: 100, a: alpha },
    [Colors.Grey94]: { h: 0, s: 0, l: 94, a: alpha },
    [Colors.Grey96]: { h: 0, s: 0, l: 96, a: alpha },
    [Colors.Grey97]: { h: 0, s: 0, l: 97, a: alpha },
    [Colors.Grey98]: { h: 0, s: 0, l: 98, a: alpha },
    [Colors.Grey99]: { h: 0, s: 0, l: 99, a: alpha },

    // Brand Colors
    [Colors.BrandLightBlue]: { h: 219, s: 100, l: 54, a: alpha },
    [Colors.BrandDarkBlue]: { h: 234, s: 56, l: 20, a: alpha },

    // PCTE
    [Colors.PCTEPurple]: { h: 285, s: 52, l: 25, a: alpha },

    // Accent
    // Blue
    [Colors.AccentBlue300]: { h: 219, s: 100, l: 54, a: alpha },
    [Colors.AccentBlue400]: { h: 219, s: 85, l: 48, a: alpha },
    [Colors.AccentBlue500]: { h: 219, s: 85, l: 43, a: alpha },
    [Colors.AccentBlue600]: { h: 219, s: 85, l: 37, a: alpha },
    [Colors.AccentBlue700]: { h: 219, s: 85, l: 32, a: alpha },

    // Purple
    [Colors.AccentPurple500]: { h: 299, s: 43, l: 48, a: alpha },
    [Colors.AccentPurple700]: { h: 295, s: 42, l: 32, a: alpha },

    // App Colors
    [Colors.Academy]: { h: 196, s: 75, l: 50, a: alpha },
    [Colors.Admin]: { h: 210, s: 82, l: 54, a: alpha },
    [Colors.Catalog]: { h: 79, s: 59, l: 49, a: alpha },
    [Colors.Dashboard]: { h: 257, s: 70, l: 60, a: alpha },
    [Colors.Range]: { h: 37, s: 84, l: 50, a: alpha },
    [Colors.Tracker]: { h: 145, s: 63, l: 42, a: alpha },
    [Colors.Hardhat]: { h: 12, s: 98, l: 59, a: alpha },
    [Colors.Impact]: { h: 353, s: 52, l: 42, a: alpha },
    [Colors.Training]: { h: 196, s: 75, l: 50, a: alpha },
    [Colors.TechOps]: { h: 324, s: 60, l: 60, a: alpha },
    [Colors.Repo]: { h: 79, s: 59, l: 49, a: alpha },
    [Colors.LMS]: { h: 2, s: 61, l: 50, a: alpha },

    // Event Status
    // In Progress
    [Colors.Active]: { h: 227, s: 67, l: 34, a: alpha },
    // Canceled
    [Colors.Canceled]: { h: 0, s: 0, l: 81, a: alpha },
    // Complete
    [Colors.Finished]: { h: 119, s: 32, l: 30, a: alpha },
    // Enrolled
    [Colors.Scheduled]: { h: 278, s: 34, l: 29, a: alpha },
    // Pending
    [Colors.Requested]: { h: 29, s: 83, l: 34, a: alpha },
    // Paused
    [Colors.Inactive]: { h: 51, s: 71, l: 48, a: alpha },

    // State
    [Colors.Green]: { h: 145, s: 68, l: 45, a: alpha },
    [Colors.Red]: { h: 4, s: 90, l: 58, a: alpha },
    [Colors.Amber]: { h: 45, s: 100, l: 51, a: alpha },
  }

  return baseColors[color]
}

export const convertHSLAMapToCss = (HSLAMap: HSLAMapType): string =>
  `hsla(${HSLAMap.h}, ${HSLAMap.s}%, ${HSLAMap.l}%, ${HSLAMap.a})`

export const colors = (color: Colors, alpha = 1) =>
  convertHSLAMapToCss(colorHSLAMap({ color, alpha }))

export const baseFocusStyles: (
  addPositionToParent?: boolean,
) => SimpleInterpolation = (addPositionToParent = true) => css`
  ${addPositionToParent &&
    css`
      position: relative;
    `};

  &::after {
    ${visible(false)};

    border-radius: inherit;
    border: 1px solid ${colors(Colors.BrandLightBlue)};
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:focus {
    opacity: 0.85;
    outline: none;

    &::after {
      ${visible(true)};
    }
  }
`

export const baseOutlineStyles = (color: Colors = Colors.BrandLightBlue) => css`
  background: transparent;
  border: 1px solid ${colors(color)};
  color: ${colors(color)};

  &:hover {
    background: ${colors(color, 0.08)};
  }

  &:active {
    background: ${colors(color, 0.16)};
  }
`

export const baseChromelessStyles = (
  color: Colors = Colors.BrandLightBlue,
  isActive?: boolean,
) => css`
  background: ${isActive ? colors(color, 0.2) : 'transparent'};

  &:hover {
    background: ${isActive ? colors(color, 0.2) : colors(color, 0.1)};
  }

  &.is-active,
  &:active {
    background: ${colors(color, 0.2)};
  }
`

export const baseSecondaryStyles = (
  color: Colors = Colors.BrandLightBlue,
  isActive?: boolean,
) => css`
  background: ${isActive ? colors(color, 0.24) : colors(color, 0.08)};
  border: 0;
  color: ${colors(color)};

  &:hover {
    background: ${isActive ? colors(color, 0.24) : colors(color, 0.16)};
  }

  &:active {
    background: ${colors(color, 0.24)};
  }
`

export const basePrimaryStyles = (color: Colors = Colors.BrandLightBlue) => css`
  background: ${colors(color)};
  color: ${colors(Colors.White)};

  &:hover {
    background: ${colors(color, 0.85)};
  }

  &:active {
    background: ${colors(color, 0.7)};
  }
`

export const baseDisabledStyles = css`
  cursor: default;
  opacity: 0.4;
  pointer-events: none;
`

/*
* Border Radius
*/

export enum BorderRadius {
  Small = 3,
  Medium = 4,
  Large = 6,
  XLarge = 8,
  Round = 1000,
}

export const borderRadius = (
  borderRadius2: BorderRadius = BorderRadius.Small,
) =>
  css`
    border-radius: ${borderRadius2}px;
  `

/*
* Animation
*/

const easeCurve: (v: number, pow?: number) => number = (v, pow = 4) => {
  return 1 - Math.pow(1 - Math.max(v, Math.min(0, 1)), pow)
}

// https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse

const frameTime = 1000 / 60
const nFrames: (duration: number) => number = duration =>
  Math.round(duration / frameTime)

const append: (
  params: {
    endX: number
    endY: number
    i: number
    innerAnimation: string[]
    isOpen: boolean
    nFramesDuration: number
    outerAnimation: string[]
    percentage: string
    startX: number
    startY: number
    step: number
  },
) => void = ({
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
  step,
}) => {
  const xScale = startX + (endX - startX) * step
  const yScale = startY + (endY - startY) * step

  const invScaleX = (1 / xScale).toFixed(5)
  const invScaleY = (1 / yScale).toFixed(5)

  outerAnimation.push(`
      ${percentage}% {
        transform: scale(${xScale}, ${yScale});
      }`)

  innerAnimation.push(`
      ${percentage}% {
        transform: scale(${invScaleX}, ${invScaleY});
      }`)
}

const createEaseAnimations: (
  props: {
    animationDuration: number
    isOpen: boolean
    position: PopOverPosition
    x: number
    y: number
  },
) => {
  menuAnimation: Keyframes
  menuContentsAnimation: Keyframes
} = ({ isOpen, position, x, y, animationDuration }) => {
  const menuExpandAnimation: string[] = []
  const menuExpandContentsAnimation: string[] = []
  const menuCollapseAnimation: string[] = []
  const menuCollapseContentsAnimation: string[] = []

  const nFramesDuration = nFrames(animationDuration)
  const percentIncrement = 100 / nFramesDuration

  for (let i = 0; i <= nFramesDuration; i++) {
    const step = easeCurve(i / nFramesDuration)
    const percentage = (i * percentIncrement).toFixed(5)
    const endX = 1
    const endY = 1

    // Expand animation.
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
      step,
    })

    // Collapse animation.
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
      step,
    })
  }

  return {
    menuAnimation: isOpen
      ? keyframes`${menuExpandAnimation.join('')}`
      : keyframes`${menuCollapseAnimation.join('')}`,
    menuContentsAnimation: isOpen
      ? keyframes`${menuExpandContentsAnimation.join('')}`
      : keyframes`${menuCollapseContentsAnimation.join('')}`,
  }
}

export const generateScaleAnimation: (
  params: {
    position: PopOverPosition
    isOpen: boolean
    elementHeight: number
    elementWidth: number
  },
) => {
  outSideContentStyles: SimpleInterpolation
  inSideContentStyles: SimpleInterpolation
} = ({ position, isOpen, elementHeight, elementWidth }) => {
  const animationDuration = 150

  const keyFrame = createEaseAnimations({
    animationDuration,
    isOpen,
    position,
    x: position.originWidth / Math.min(position.maxWidth, elementWidth),
    y: position.originHeight / Math.min(position.maxHeight, elementHeight),
  })

  return {
    outSideContentStyles: css`
      ${position.dropXDirection}: ${position.dropXAmount}px;
      ${position.dropYDirection}: ${position.dropYAmount}px;
      ${visible(isOpen)};

      max-height: ${position.maxHeightCalc};
      max-width: ${position.maxWidthCalc};
      position: fixed;
      transform-origin: ${position.dropYDirection} ${position.dropXDirection};
      will-change: transform, opacity, visibility;

      transition: opacity ${animationDuration}ms ease-in,
        visibility ${animationDuration}ms ease-in;

      animation: ${keyFrame.menuAnimation} linear ${animationDuration}ms
        forwards;
    `,
    inSideContentStyles: css`
      transform-origin: ${position.dropYDirection} ${position.dropXDirection};

      animation: ${keyFrame.menuContentsAnimation} linear ${animationDuration}ms
        forwards;

      will-change: transform;
    `,
  }
}

export const ease = (isActive: boolean) => (isActive ? 'ease-in' : 'ease-out')

export const buttonTransition = css`
  transition: all ease 75ms;
`

export const transition: (
  props: {
    properties?: Array<string>
    easing: string
    duration: number
  },
) => SimpleInterpolation = ({ properties = ['all'], easing, duration }) => {
  return css`
    transition: ${properties
      .map(property => `${property} ${easing} ${duration}ms`)
      .join()};
  `
}

/*
* Size
*/

export const sizes = {
  modals: {
    mini: {
      height: 360,
      width: 304,
    },
  },
  menu: {
    width: 176,
  },
  appSwitcher: {
    width: 368,
  },
}

export enum Sizes {
  DP8 = 8,
  DP16 = 16,
  DP24 = 24,
  DP32 = 32,
  DP40 = 40,
  DP48 = 48,
  DP56 = 56,
  DP64 = 64,
}
