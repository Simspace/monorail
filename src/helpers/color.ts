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
  Execution = 'execution',
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
    [Colors.Execution]: { h: 196, s: 75, l: 50, a: alpha },

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

export const getColor = (color: Colors, alpha = 1) =>
  convertHSLAMapToCss(colorHSLAMap({ color, alpha }))
