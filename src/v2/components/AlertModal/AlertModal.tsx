import React, { ReactNode } from 'react'
import { useId } from '@react-aria/utils'

import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import {
  FontSizes,
  FontWeights,
  typographyFont,
} from '@monorail/helpers/typography'
import { isNil, isObject, isString } from '@monorail/sharedHelpers/typeGuards'
import { Button } from '@monorail/v2/core/Button/Button'
import {
  Modal,
  ModalProps as ModalPropsType,
} from '@monorail/v2/core/Modal/Modal'
import { ModalContent } from '@monorail/v2/core/Modal/ModalConent'
import { ModalFooter } from '@monorail/v2/core/Modal/ModalFooter'
import { CloseButton } from '@monorail/v2/core/Modal/ModalHeader'
import * as Icons from '@monorail/v2/icons/Icons'
import { Text } from '@monorail/visualComponents/typography/Text'

/*
 * Alert Modal:
 *
 *   =============================================
 *   |   label                                   |
 *   =============================================
 *   |   title                                   |
 *   |                                           |
 *   |   description                             |
 *   |                                           |
 *   |   {children}                              |
 *   ---------------------------------------------
 *   |           secondaryAction   primaryAction |
 *   =============================================
 */

// Essentially an Enum
const ALERT_TYPE = {
  Error: 'error',
  Warning: 'warning',
  Success: 'success',
  Info: 'info',
} as const

// Union of "Enum" values
type AlertType = typeof ALERT_TYPE[keyof typeof ALERT_TYPE]

//#region CSS
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px 0 24px;
  flex-shrink: 0;
  user-select: none;
  border-bottom: 1px solid;
  font-size: 20px; /* Affects Icon's size */
`

const HeaderTitle = styled.h1`
  ${typographyFont(FontWeights.Bold, FontSizes.Title3)}
  color: ${({ theme }) => theme.v2.FoundationText1};
  white-space: nowrap;
  margin-left: 24px;
`

const headerContainerStylesForType: Record<AlertType, CSSProp> = {
  [ALERT_TYPE.Error]: css`
    color: ${({ theme }) => theme.v2.ErrorGraphic};
    border-color: ${({ theme }) => theme.v2.ErrorGraphic};
  `,
  [ALERT_TYPE.Warning]: css`
    color: ${({ theme }) => theme.v2.WarningGraphic};
    border-color: ${({ theme }) => theme.v2.WarningGraphic};
  `,
  [ALERT_TYPE.Success]: css`
    color: ${({ theme }) => theme.v2.SuccessGraphic};
    border-color: ${({ theme }) => theme.v2.SuccessGraphic};
  `,
  [ALERT_TYPE.Info]: css`
    color: ${({ theme }) => theme.v2.InfoGraphic};
    border-color: ${({ theme }) => theme.v2.InfoGraphic};
  `,
}
//#endregion

const alertIcon: Record<AlertType, React.ComponentType> = {
  [ALERT_TYPE.Error]: Icons.Error,
  [ALERT_TYPE.Warning]: Icons.Warning,
  [ALERT_TYPE.Success]: Icons.CheckCircle,
  [ALERT_TYPE.Info]: Icons.Info,
}

const headerLabel: Record<AlertType, string> = {
  [ALERT_TYPE.Error]: 'Error',
  [ALERT_TYPE.Warning]: 'Warning',
  [ALERT_TYPE.Success]: 'Success',
  [ALERT_TYPE.Info]: 'Info',
}

// Returns label for string-based or object-based prop passed in
const getLabel = (item: string | { label: string }) =>
  isString(item) ? item : item.label

export type AlertModalProps = {
  /**
   * Whether the modal is visible and active
   */
  open: boolean
  /**
   * Callback for when the modal is closed
   */
  onClose: () => void
  /**
   * The visual style and default `label`
   *
   * Default: `info`
   */
  type?: AlertType
  /**
   * The text shown in the header, after the icon
   */
  label?: string
  /**
   * The title of the message
   */
  title?: string
  /**
   * The body of the message
   */
  description?: string
  /**
   * Placed after `description` and before the actions
   */
  children?: ReactNode
  /**
   * String label or config object of the primary action
   */
  primaryAction?:
    | string
    | {
        label: string
        onClick: () => void
        disabled?: boolean
      }
  /**
   * String label or config object of the secondary action
   */
  secondaryAction?:
    | string
    | {
        label: string
        onClick: () => void
      }
  /*
   * Modal subcomponent props
   */
  ModalProps?: Partial<ModalPropsType>
}

/**
 * An alert modal informs the user about situations that require acknowledgement.
 *
 * - [Alerts | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=17564%3A21)
 */
export const AlertModal = (props: AlertModalProps) => {
  const {
    type = ALERT_TYPE.Info,
    open,
    onClose,
    label = headerLabel[type],
    title,
    description,
    children,
    primaryAction,
    secondaryAction,
    ModalProps,
  } = props

  const labelId = useId()
  const descriptionId = props.description ? `${labelId}-description` : undefined
  const AlertIcon = alertIcon[type]

  return (
    <Modal
      open={open}
      role="alertdialog"
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      onClose={onClose}
      {...ModalProps}
    >
      <HeaderContainer css={headerContainerStylesForType[type]}>
        <AlertIcon aria-hidden />
        <HeaderTitle id={labelId}>{label}</HeaderTitle>
        <CloseButton display="chromeless" size="large" onClose={onClose} />
      </HeaderContainer>

      <ModalContent>
        {title && (
          <Text
            fontSize={FontSizes.Title4}
            fontWeight={FontWeights.Bold}
            margin="0 0 8px"
          >
            {title}
          </Text>
        )}
        {description && (
          <Text
            id={descriptionId}
            fontSize={FontSizes.Title5}
            fontWeight={FontWeights.Book}
            margin="8px 0 0"
          >
            {description}
          </Text>
        )}
        {children}
      </ModalContent>

      <ModalFooter>
        {secondaryAction && (
          <Button
            // Focus the least-descructive action
            autoFocus
            onClick={
              isObject(secondaryAction) ? secondaryAction.onClick : onClose
            }
            display="chromeless"
            css={`
              margin-right: 8px;
            `}
          >
            {getLabel(secondaryAction)}
          </Button>
        )}
        {primaryAction && (
          <Button
            // Focus action, if secondary doesn't exist
            autoFocus={isNil(secondaryAction)}
            disabled={isObject(primaryAction) && primaryAction.disabled}
            onClick={isObject(primaryAction) ? primaryAction.onClick : onClose}
          >
            {getLabel(primaryAction)}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  )
}
