import { Colors, getColor } from '@monorail/helpers/color'
import { IconType } from '@monorail/visualComponents/icon/IconType'

export enum AlertLevel {
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

export const AlertColors = {
  [AlertLevel.Info]: Colors.Info,
  [AlertLevel.Success]: Colors.Success,
  [AlertLevel.Error]: Colors.Error,
  [AlertLevel.Warning]: Colors.Warning,
}

export const AlertIcons: Record<AlertLevel, IconType> = {
  [AlertLevel.Info]: 'info',
  [AlertLevel.Success]: 'check_circle',
  [AlertLevel.Error]: 'error',
  [AlertLevel.Warning]: 'warning',
}
