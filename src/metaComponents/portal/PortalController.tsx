import Portal from '@reach/portal'
import React, { FC } from 'react'

export type PortalControllerProps = {
  isRendered: boolean
}

export const PortalController: FC<PortalControllerProps> = ({
  children,
  isRendered,
}) => {
  return isRendered ? <Portal>{children}</Portal> : null
}
