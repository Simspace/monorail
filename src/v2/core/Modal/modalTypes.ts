export const MODAL_SIZE = {
  Mini: 'mini',
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  FullScreen: 'fullScreen',
} as const

export type ModalSize = typeof MODAL_SIZE[keyof typeof MODAL_SIZE]
