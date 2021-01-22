import React from 'react'

import {
  AppName,
  AppOrAuthSubAppName,
  AuthSubAppName,
} from '@monorail/helpers/exports'
import * as Icons from '@monorail/v2/icons/Icons'
import { logger } from '@monorail/v2/shared/helpers'

const getIconComponent = (name: AppOrAuthSubAppName) => {
  switch (name) {
    case AppName.Home:
      return Icons.Home
    case AppName.TechOps:
      return Icons.TechOps
    case AppName.Events:
      return Icons.Events
    case AuthSubAppName.Catalog:
      return Icons.Catalog
    case AppName.MyOrg:
      return Icons.MyOrg
    case AppName.LMS:
      return Icons.LMS
    case AppName.Admin:
      return Icons.Admin
    case AppName.ReportsAnalytics:
      return Icons.ReportsAnalytics
    default:
      logger(({ error }) =>
        error('Attempted to use an unimplemented AppIcon. Please fix!'),
      )
      return Icons.Warning
  }
}

export type AppIconProps = { appName: AppOrAuthSubAppName }

export const AppIcon = (props: AppIconProps) => {
  const { appName, ...restProps } = props

  const IconComponent = getIconComponent(appName)

  return <IconComponent {...restProps} />
}
