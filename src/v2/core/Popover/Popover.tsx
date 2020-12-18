import React from 'react'
import * as MUI from '@material-ui/core'
import { useId } from '@react-aria/utils'

import { NegativeSize, Size } from '@monorail/helpers/size'
import styled from '@monorail/helpers/styled-components'
import { isNil, isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { OmitBannedProps, propBlockerConfig } from '@monorail/v2/shared/helpers'

//#region hooks
export type UsePopoverReturn = {
  triggerProps: {
    'aria-expanded': boolean
    'aria-controls': string | undefined
    onClick: (e: React.MouseEvent<HTMLElement>) => void
  }
  popoverProps: {
    id: string | undefined
    open: boolean
    anchorEl: HTMLElement | null
    onClose: () => void
  }
  isOpen: boolean
}

export const usePopover = (): UsePopoverReturn => {
  const id = useId()
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const onClose = () => {
    setAnchorEl(null)
  }

  const isOpen = !isNil(anchorEl)
  const popoverId = isOpen ? id : undefined

  return {
    triggerProps: {
      'aria-expanded': isOpen,
      'aria-controls': popoverId,
      // Note: [KP 2020-09] 'aria-haspopup' could be needed if this is a menu,
      //   but likely to use MUI Menu instead of Popover
      onClick,
    },
    popoverProps: {
      id: popoverId,
      open: isOpen,
      anchorEl,
      onClose,
    },
    isOpen,
  }
}
//#endregion

//#region Popover
const convertToPx = (value?: number) => (isNotNil(value) ? `${value}px` : '0')

const marginToCSS = ({ margin }: PopoverProps) =>
  isNotNil(margin)
    ? `margin: ${convertToPx(margin.top)} ${convertToPx(
        margin.right,
      )} ${convertToPx(margin.bottom)} ${convertToPx(margin.left)};`
    : undefined

export type PopoverProps = OmitBannedProps<MUI.PopoverProps> & {
  /**
   * Space between the anchor and the Popover
   */
  margin?: {
    top?: Size | NegativeSize
    right?: Size | NegativeSize
    bottom?: Size | NegativeSize
    left?: Size | NegativeSize
  }
}

const StyledPopover = styled(MUI.Popover as typeof Popover).withConfig(
  propBlockerConfig<PopoverProps>(['margin']),
)`
  & > .MuiPopover-paper {
    ${marginToCSS}
  }
`

/**
 * An overlay positioned relative to its anchor element
 *
 * - [Popover | Material-UI](https://material-ui.com/components/popover/#popover)
 */
export function Popover(props: PopoverProps) {
  return <StyledPopover role="dialog" {...props} />
}
;(Popover as any).muiName = (MUI.Popover as any).muiName // eslint-disable-line
//#endregion
