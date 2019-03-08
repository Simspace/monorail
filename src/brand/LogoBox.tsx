import styled, { SimpleInterpolation } from 'styled-components'
import {
  borderRadius,
  Colors,
  colors,
  ElevationRange,
  getElevation,
} from '@monorail/CommonStyles'

type LogoBoxProps = {
  alignRight?: boolean
  alignLeft?: boolean
  cssOverrides?: SimpleInterpolation
}

export const LogoBox = styled<LogoBoxProps, 'div'>('div')`
  ${getElevation(ElevationRange.Elevation0)};
  ${borderRadius()};

  background: ${colors(Colors.White)};
  display: inline-block;
  height: 32px;
  max-width: 200px;
  padding: 4px 8px;
  position: relative;

  ${({ alignLeft }) => alignLeft && `position: absolute; left: 8px; top:8px;`}
  ${({ alignRight }) =>
    alignRight && `position: absolute; right: 8px; top:8px;`}

  ${({ cssOverrides }) => cssOverrides};
`
