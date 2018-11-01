import React from 'react'
import styled, { SimpleInterpolation } from 'styled-components'

import {
  Colors,
  colors,
  FontSizes,
  typography,
} from 'CommonStyles'

const size = 16

export const Status = styled<{ css?: SimpleInterpolation }, 'div'>('div')`
  ${typography(700, FontSizes.Title5)};

  background: ${colors(Colors.BrandLightBlue)};
  border-radius: ${size / 2}px;
  color: ${colors(Colors.White)};
  height: ${size}px;
  min-width: ${size}px;
  text-align: center;

  ${({ css: cssOverrides }) => cssOverrides};
`
