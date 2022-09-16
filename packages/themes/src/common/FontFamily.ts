export enum FontFamily {
  GothamSsmA = 'Gotham SSm A',
  GothamSsmB = 'Gotham SSm B',
  IBMPlexSans = 'IBM Plex Sans',
  IBMPlexMono = 'IBM Plex Mono',
  Inter = 'Inter',
  Menlo = 'Menlo',
}

export const fontFamilyFallback = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

export const monospaceFallback = [
  'SFMono-Regular',
  'Consolas',
  'Liberation Mono',
  'Courier',
  'monospace',
]
