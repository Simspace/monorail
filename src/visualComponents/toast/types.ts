import { Colors, getColor } from '@monorail/helpers/color'

export enum AlertLevel {
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
}

export const AlertColors = {
  [AlertLevel.Info]: getColor(Colors.BrandLightBlue),
  [AlertLevel.Success]: getColor(Colors.Green),
  [AlertLevel.Error]: getColor(Colors.Red),
  [AlertLevel.Warning]: getColor(Colors.Amber),
}

export const AlertIcons = {
  [AlertLevel.Info]: 'info',
  [AlertLevel.Success]: 'check_circle',
  [AlertLevel.Error]: 'error',
  [AlertLevel.Warning]: 'warning',
}
