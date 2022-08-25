import type { ComponentType, CSSProperties } from 'react'
import React from 'react'
import styled, { css } from '@mui/styled-engine'

import type { SvgIconProps } from './types.js'

/**
 * We'll likely have sharedHelpers/typeGuards in a separate workspace/package
 * TODO: Replace isNotNaN once we have that in palce - GS 2/23/22
 */
export const isNotNaN = (x: unknown): x is number =>
  typeof x === 'number' && !isNaN(x)

export interface IllustrationProps extends SvgIconProps {
  Svg: ComponentType<SvgIconProps>
  $height?: CSSProperties['height']
  $width?: CSSProperties['width']
}

/**
 * The Illustration helper lets the dev control the size of an SvgIcon better without having to use `css` prop
 * on all uses.
 *
 * Font-size is the primary size manager on SvgIcon, but that isn't always sufficient for Illustrations
 *
 * Use the $width and $height props to only set on css without passing down to the underlying svg
 * (only numbers are allowed height/width properties on an svg)
 */
export const Illustration = styled(
  ({ Svg, ...svgProps }: IllustrationProps) => <Svg {...svgProps} />,
)<IllustrationProps>(({ $width, width, $height, height }) => {
  const illustrationWidth = $width ?? width ?? 'unset'
  const illustrationHeight = $height ?? height ?? 'unset'
  return css`
    width: ${isNotNaN(Number(illustrationWidth))
      ? `${illustrationWidth}px`
      : illustrationWidth};
    height: ${isNotNaN(Number(illustrationHeight))
      ? `${illustrationHeight}px`
      : illustrationHeight};
    font-size: unset;
  `
})
