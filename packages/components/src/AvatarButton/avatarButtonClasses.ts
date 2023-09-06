import generateUtilityClass from '@mui/utils/generateUtilityClass'
import generateUtilityClasses from '@mui/utils/generateUtilityClasses'

export interface AvatarButtonClasses {
  /** Styles applied to the root element. */
  root: string
  /**Styles applied to the root element if color="default". */
  colorDefault: string
  /**Styles applied to the root element if color="primary". */
  colorPrimary: string
  /**Styles applied to the root element if color="secondary". */
  colorSecondary: string
  /**Styles applied to the root element if color="info". */
  colorInfo: string
  /**Styles applied to the root element if color="success". */
  colorSuccess: string
  /**Styles applied to the root element if color="warning". */
  colorWarning: string
  /**Styles applied to the root element if color="error". */
  colorError: string
}

export type AvatarButtonClassKey = keyof AvatarButtonClasses

export function getAvatarButtonUtilityClasses(slot: string): string {
  return generateUtilityClass('ThirdrailAvatarButton', slot)
}

export const avatarButtonClasses: AvatarButtonClasses = generateUtilityClasses(
  'ThirdrailAvatarButton',
  [
    'root',
    'colorDefault',
    'colorPrimary',
    'colorSecondary',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'colorError',
  ],
)
