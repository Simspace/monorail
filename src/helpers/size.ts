import { css } from '@monorail/helpers/styled-components'
import { CssOverridesType } from '@monorail/types'

export enum Sizes {
  DP8 = 8,
  DP12 = 12,
  DP16 = 16,
  DP24 = 24,
  DP32 = 32,
  DP40 = 40,
  DP48 = 48,
  DP56 = 56,
  DP64 = 64,
}

export type Size = 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64

export type NegativeSize = -8 | -12 | -16 | -24 | -32 | -40 | -48 | -56 | -64

export const sizes = {
  modals: {
    mini: {
      height: 360,
      width: 304,
    },
    small: {
      width: 444,
    },
    medium: {
      width: 584,
    },
    mediumLarge: {
      width: 724,
    },
  },
  menu: {
    width: 176,
  },
  appSwitcher: {
    width: 376,
  },
  page: {
    sideSpace: Sizes.DP32,
  },
}

export const pageSizeMargin: (params?: {
  marginTop?: number
  marginBottom?: number
}) => CssOverridesType = (params = { marginTop: 0, marginBottom: 0 }) => css`
  ${({
    theme: {
      size: { page },
    },
  }) => css`
    ${page.width === 'auto' ? '' : `max-width: ${page.width}px;`}
    margin: ${params.marginTop}px ${sizes.page.sideSpace}px
      ${params.marginBottom}px ${sizes.page.sideSpace}px;
  `};
`

export const pageSizePadding: (params?: {
  paddingTop?: number
  paddingBottom?: number
}) => CssOverridesType = (params = { paddingTop: 0, paddingBottom: 0 }) => css`
  ${({
    theme: {
      size: { page },
    },
  }) => css`
    box-sizing: content-box;
    max-width: ${page.width}px;
    padding: ${params.paddingTop}px ${sizes.page.sideSpace}px
      ${params.paddingBottom}px ${sizes.page.sideSpace}px;
  `};
`
