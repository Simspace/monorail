import { generateUtilityClass, generateUtilityClasses } from '@mui/base'

export interface PopupClasses {
  /** Styles applied to the arrow element. */
  arrow: string
  /** Styles applied to the paper element. */
  paper: string
  /** Styles applied to the popper element. */
  popper: string
  /** Styles applied to the popper element if `arrow` is true. */
  popperArrow: string
  /** Styles applied to the popper element if `placement` contains "left". */
  popperPlacementLeft: string
  /** Styles applied to the popper element if `placement` contains "right". */
  popperPlacementRight: string
  /** Styles applied to the popper element if `placement` contains "top". */
  popperPlacementTop: string
  /** Styles applied to the popper element if `placement` contains "bottom". */
  popperPlacementBottom: string
}

export type PopupClassKey = keyof PopupClasses

export function getPopupUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailPopup', slot)
}

export const popupClasses: PopupClasses = generateUtilityClasses(
  'MonorailPopup',
  [
    'arrow',
    'paper',
    'popper',
    'popperArrow',
    'popperPlacementLeft',
    'popperPlacementRight',
    'popperPlacementTop',
    'popperPlacementBottom',
  ],
)
