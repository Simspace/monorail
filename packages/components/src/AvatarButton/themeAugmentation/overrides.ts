import type { AvatarButtonClassKey } from '../avatarButtonClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailAvatarButton: AvatarButtonClassKey
  }
}
