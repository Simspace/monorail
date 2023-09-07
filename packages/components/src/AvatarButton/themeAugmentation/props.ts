import type { AvatarButtonProps } from '../avatarButtonProps.js'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailAvatarButton: AvatarButtonProps
  }
}

export {}
