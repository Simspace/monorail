import React, { FC } from 'react'

import { Portal } from '@monorail/portal/Portal'

export type PortalControllerProps = {
  document?: Document
  isRendered: boolean
}

export const PortalController: FC<PortalControllerProps> = ({
  document,
  children,
  isRendered,
}) => {
  return isRendered ? <Portal document={document}>{children}</Portal> : null
}
