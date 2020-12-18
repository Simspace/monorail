import React, { MouseEvent, ReactNode } from 'react'

import {
  ElevationRange,
  flexFlow,
  FontSizes,
  getElevationShadow,
  typographyFont,
} from '@monorail/helpers/exports'
import styled, { css, StyledProps } from '@monorail/helpers/styled-components'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import {
  IconButton,
  IconButtonProps,
} from '@monorail/v2/core/IconButton/IconButton'
import { MODAL_SIZE, ModalSize } from '@monorail/v2/core/Modal/modalTypes'
import * as Icons from '@monorail/v2/icons/Icons'

export type ModalHeaderProps = {
  title: string
  TitleProps?: Partial<StyledProps & HeaderTitleProps>
  size?: ModalSize
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  closeButton?: ReactNode
  onClose?: (event: MouseEvent) => void
}

type HeaderTitleProps = Pick<ModalHeaderProps, 'size'>

// #region CSS
export const ModalHeaderContainer = styled.div<Pick<ModalHeaderProps, 'size'>>(
  ({ size, theme }) => css`
    ${flexFlow('row')};
    ${getElevationShadow(ElevationRange.Elevation2)};

    align-items: center;
    height: ${size === MODAL_SIZE.Mini || size === MODAL_SIZE.Small
      ? 48
      : 56}px;
    padding: 0 16px;
    width: 100%;
    overflow: hidden;
    background: ${theme.v2.Accent1};
    flex-shrink: 0;
    user-select: none;
    box-sizing: border-box;
    color: ${theme.v2.FoundationPlate};
  `,
)

// TODO: [kp 2020-10] use the Header component that Dan is working on instead?
/**
 * WCAG note: This heading uses an `h1`.
 * Since it is displayed in a modal, it does not affect other headings on the page.
 */
export const ModalHeaderTitle = styled.h1.attrs(_ => ({
  'data-test-id': 'modal-header-title',
}))<HeaderTitleProps>(
  ({ size }) => css`
    ${size === MODAL_SIZE.Mini || size === MODAL_SIZE.Small
      ? typographyFont(700, FontSizes.Title4)
      : typographyFont(700, FontSizes.Title3)};
    white-space: nowrap;
    margin: 0;
  `,
)
// #endregion CSS

const CLOSE_BUTTON_TEXT = 'Close'

export type CloseButtonProps = Pick<ModalHeaderProps, 'onClose'> &
  Pick<IconButtonProps, 'display' | 'size'>

export const CloseButton = ({
  display = 'chromelessContrast',
  size = 'default',
  onClose,
}: CloseButtonProps) => (
  <IconButton
    shape="square"
    display={display}
    size={size}
    onClick={onClose}
    aria-label={CLOSE_BUTTON_TEXT}
    css={`
      margin-left: auto;
    `}
  >
    <Icons.Close titleAccess={CLOSE_BUTTON_TEXT} />
  </IconButton>
)

/**
 * Top banner of the modal dialog
 */
export const ModalHeader = (props: ModalHeaderProps) => {
  const {
    closeButton,
    size = MODAL_SIZE.Medium,
    title,
    startAdornment,
    endAdornment,
    onClose,
    TitleProps,
    ...rest
  } = props

  return (
    <ModalHeaderContainer size={size} {...rest}>
      {startAdornment}
      <ModalHeaderTitle
        size={size}
        css={`
          ${isNotNil(startAdornment) && `margin-left: 16px`}
          ${isNotNil(endAdornment) && `margin-right: 16px`}
        `}
        {...TitleProps}
      >
        {title}
      </ModalHeaderTitle>
      {endAdornment}
      {isNotNil(closeButton) ? closeButton : <CloseButton onClose={onClose} />}
    </ModalHeaderContainer>
  )
}
