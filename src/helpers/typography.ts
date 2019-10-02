import { css } from 'styled-components'

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
  [FontSizes.Micro]: {
    fontSize: '8px',
    lineHeight: '10px',
  },
}
export const typography = (
  weight: number,
  size: FontSizes,
  margin?: string,
) => ({
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
    top: -3,
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
  [FontSizes.Micro]: {
    top: -2,
    bottom: -2,
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

  const splitValue = value.split(' ').map(stripPx)

  switch (splitValue.length) {
    case 4:
      return {
        top: splitValue[0],
        right: splitValue[1],
        bottom: splitValue[2],
        left: splitValue[3],
      }
    case 3:
      return {
        top: splitValue[0],
        right: splitValue[1],
        bottom: splitValue[2],
        left: splitValue[1],
      }
    case 2:
      return {
        top: splitValue[0],
        right: splitValue[1],
        bottom: splitValue[0],
        left: splitValue[1],
      }
    default:
    case 1:
      return {
        top: splitValue[0],
        right: splitValue[0],
        bottom: splitValue[0],
        left: splitValue[0],
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
