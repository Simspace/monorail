import React from 'react'

import { BorderRadius, borderRadius, flexFlow } from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'

// #region CSS
const Div = styled.div``
const IconFrameStyled = styled(Div as typeof IconFrame).attrs(props => ({
  frameSize: props.frameSize ?? 32,
}))`
  ${borderRadius(BorderRadius.Small)};
  ${flexFlow('row')}

  align-items: center;
  background-color: ${({ theme }) => theme.v2.FoundationDash};
  flex-shrink: 0;
  justify-content: center;
  height: ${({ frameSize }) => frameSize}px;
  width: ${({ frameSize }) => frameSize}px;
  font-size: ${({ frameSize }) => frameSize - 4}px;
`
// #endregion CSS

export type IconFrameProps = React.PropsWithChildren<{ frameSize?: number }>

/**
 * Visual square wrapper for Icon. Defaults to 32px
 *
 * Deprecates v1/FramedIcon
 */
export function IconFrame(props: IconFrameProps) {
  return <IconFrameStyled {...props} />
}
