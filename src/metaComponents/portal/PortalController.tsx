import React, { FC } from 'react'
import Portal from '@reach/portal'

export type PortalControllerProps = {
  /**
   * If true, children will be rendered inside a Portal, otherwise null will be rendered
   */
  isRendered: boolean
}

/**
 * Renders its children inside a Portal, based on the isRendered prop
 */
export const PortalController: FC<PortalControllerProps> = ({
  children,
  isRendered,
}) => {
  return isRendered ? <Portal>{children}</Portal> : null
}
