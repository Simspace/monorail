import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface FlexDrawerClasses {
  /** Styles applied to the root element */
  root: string
  /** Styles applied to the root element if `variant="persistent"`. */
  docked: string
  /** Styles applied to the container element if `variant="temporary"`. */
  temporaryContainer: string
  /** Styles applied to the Paper component. */
  paper: string
  /** Styles applied to the Paper component if `anchor="left"`. */
  paperAnchorLeft: string
  /** Styles applied to the Paper component if `anchor="right"`. */
  paperAnchorRight: string
  /** Styles applied to the Paper component if `anchor="top"`. */
  paperAnchorTop: string
  /** Styles applied to the Paper component if `anchor="bottom"`. */
  paperAnchorBottom: string
  /** Styles applied to the Paper component if `anchor="left"` and `variant` is not "temporary". */
  paperAnchorDockedLeft: string
  /** Styles applied to the Paper component if `anchor="top"` and `variant` is not "temporary". */
  paperAnchorDockedTop: string
  /** Styles applied to the Paper component if `anchor="right"` and `variant` is not "temporary". */
  paperAnchorDockedRight: string
  /** Styles applied to the Paper component if `anchor="bottom"` and `variant` is not "temporary". */
  paperAnchorDockedBottom: string
  /** Styles applied to the Modal component. */
  modal: string
  /** Styled applied to the drag area */
  dragArea: string
  /** Styled applied to the drag area when dragging */
  dragAreaDragging: string
  /** Styled applied to the drag handle */
  handle: string
  /** Styled applied to the drag handle when dragging */
  handleDragging: string
}

export type FlexDrawerClassKey = keyof FlexDrawerClasses

export function getFlexDrawerUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailFlexDrawer', slot)
}

export const flexDrawerClasses: FlexDrawerClasses = generateUtilityClasses(
  'MonorailFlexDrawer',
  [
    'root',
    'docked',
    'temporaryContainer',
    'paper',
    'paperAnchorLeft',
    'paperAnchorRight',
    'paperAnchorTop',
    'paperAnchorBottom',
    'paperAnchorDockedLeft',
    'paperAnchorDockedRight',
    'paperAnchorDockedTop',
    'paperAnchorDockedBottom',
    'modal',
    'dragArea',
    'dragAreaDragging',
    'handle',
    'handleDragging',
  ],
)
