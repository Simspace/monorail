import styled, { css, SimpleInterpolation } from 'styled-components'
import {
  borderRadius,
  Colors,
  getColor,
  ElevationRange,
  flexFlow,
  getElevation,
} from '@monorail/helpers/exports'

type LogoBoxProps = {
  alignRight?: boolean
  alignLeft?: boolean
  cssOverrides?: SimpleInterpolation
}

export const LogoBox = styled.div<LogoBoxProps>(
  ({ alignLeft, alignRight, cssOverrides }) => css`
    ${borderRadius()};
    ${flexFlow('column')};
    ${getElevation(ElevationRange.Elevation0)};

  background: ${getColor(Colors.White)};
  height: 32px;
  justify-content: center;
  max-width: 144px;
  padding: 4px 8px;
  position: relative;

    ${alignLeft &&
      css`
        position: absolute;
        left: 8px;
        top: 8px;
      `}
    ${alignRight &&
      css`
        position: absolute;
        right: 8px;
        top: 8px;
      `}
    ${cssOverrides};
  `,
)
