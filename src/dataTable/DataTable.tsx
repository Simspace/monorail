import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'

// Types

type TableSizeType = {
  singleCollection?: boolean
  dense?: boolean
  collapsible?: boolean
}

type TableDataType = {
  textAlign?: string
  flex?: number | string
  width?: number
}

// Helper Functions

const rowPadding: (props: TableSizeType) => SimpleInterpolation = ({
  singleCollection,
  collapsible,
}) => {
  if (singleCollection) {
    if (collapsible) {
      return css`
        padding: 0 24px 0 8px;
      `
    } else {
      return css`
        padding: 0 24px;
      `
    }
  } else {
    if (collapsible) {
      return css`
        padding: 0 8px;
      `
    } else {
      return css`
        padding: 0 8px;
      `
    }
  }
}

const tableDataStyles: (props: TableDataType) => SimpleInterpolation = ({
  textAlign,
  flex,
  width,
}) => css`
  ${textAlign &&
    css`
      text-align: ${textAlign};
    `};
  ${flex &&
    css`
      flex: ${flex};
    `};
  ${width &&
    css`
      width: ${width}px;
    `};
`

// Components

// Main Wrapper

export const TableContainer = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    height: 100%;
    overflow: hidden;

    ${cssOverrides};
  `,
)

// Header Components

export const TableHeaderContainer = styled.div<
  CommonComponentType & TableSizeType
>(
  ({
    collapsible = false,
    cssOverrides,
    dense = false,
    singleCollection = false,
  }) => css`
    ${flexFlow('row')};
    ${rowPadding({ singleCollection, dense, collapsible })};

    align-items: center;
    border-bottom: 1px solid ${getColor(Colors.Grey94)};
    box-sizing: border-box;
    flex-shrink: 0;
    min-height: 32px;

    ${cssOverrides};
  `,
)

export const TableHeaderData = styled.div<
  CommonComponentType & TableDataType & { hasSorter?: boolean }
>(
  ({ cssOverrides, flex, hasSorter = false, textAlign, width }) => css`
    ${flexFlow('row')};
    ${typography(500, FontSizes.Title5)};

    align-items: center;
    color: ${getColor(Colors.Black89)};
    height: 100%;
    padding: 8px 8px 7px; /* 7px bottom because of the bottomBorder on the row. */

    ${tableDataStyles({ textAlign, width, flex })};

    ${hasSorter &&
      css`
        cursor: pointer;
        user-select: none;

        &:hover {
          background: ${getColor(Colors.Grey94)};
        }
      `};

    ${cssOverrides};
  `,
)

// Body Components

export const TableBody = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    flex: 1 1 100%;
    overflow-y: auto;

    ${cssOverrides};
  `,
)

export const TableRowContainer = styled.div<
  CommonComponentType & TableSizeType
>(
  ({
    collapsible = false,
    cssOverrides,
    dense = false,
    singleCollection = false,
  }) => css`
    ${flexFlow('row')};
    ${rowPadding({ singleCollection, dense, collapsible })};

    align-items: center;
    flex-shrink: 0;
    min-height: ${dense ? 32 : 40}px;
    position: relative; /* Need pos:rel so that the pseudo element for the indented border works. */

    &::after {
      background: ${getColor(Colors.Grey96)};
      bottom: 0;
      content: '';
      height: 1px;
      left: 6px;
      position: absolute;
      right: 6px;
      z-index: -5; /* Needs negative z-index so that it appears below the scroll bar. */
    }

    ${cssOverrides};
  `,
)

export const TableRowData = styled.div<CommonComponentType & TableDataType>(
  ({ textAlign, width, flex, cssOverrides }) => css`
    ${flexFlow('row')};
    ${typography(400, FontSizes.Title5)};

    align-items: center;
    color: ${getColor(Colors.Black89)};
    padding: 12px 8px;
    height: 100%;

    ${tableDataStyles({ textAlign, width, flex })};

    ${cssOverrides};
  `,
)

export const TableRowGroupHeader = styled.div<
  CommonComponentType & TableSizeType
>(
  ({
    collapsible = false,
    cssOverrides,
    dense = false,
    singleCollection = false,
  }) => css`
    ${flexFlow('row')};
    ${rowPadding({ singleCollection, dense, collapsible })};

    align-items: center;
    cursor: pointer;
    height: 40px;
    user-select: none;

    ${cssOverrides};
  `,
)

export const TableEmptyMessage = styled.div`
  padding: 16px;

  ${typography(400, FontSizes.Title5)};
`

// Table Footer

export const TableFooterContainer = styled.div<
  CommonComponentType & TableSizeType
>(
  ({
    collapsible = false,
    cssOverrides,
    dense = false,
    singleCollection = false,
  }) => css`
    ${flexFlow('row')};
    ${rowPadding({ singleCollection, dense, collapsible })};

    align-items: center;
    background: ${getColor(Colors.Grey99)};
    flex-shrink: 0;
    height: 24px;

    ${cssOverrides};
  `,
)

export const TableFooterMeta = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${typography(400, FontSizes.Title5)};

    color: ${getColor(Colors.Black74)};
    margin-left: auto;

    ${cssOverrides};
  `,
)
