import React, { FC } from 'react'

import { Colors, getColor } from '@monorail/helpers/color'
import { css } from '@monorail/helpers/styled-components'
import { FontSizes } from '@monorail/helpers/typography'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import { AlertType } from '@monorail/visualComponents/alerts/alertType'
import { Button } from '@monorail/visualComponents/buttons/Button'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { MediumModal } from '@monorail/visualComponents/modals/MediumModal'
import {
  BBModalContent,
  BBModalFooter,
  BBModalHeaderContainer,
} from '@monorail/visualComponents/modals/Modals'
import { Text } from '@monorail/visualComponents/typography/Text'

/*
 * Styles
 */

const alertModalStyles = {
  [AlertType.Error]: css`
    ${BBModalHeaderContainer} {
      background: ${getColor(Colors.Error)};
    }
  `,
  [AlertType.Warning]: css`
    ${BBModalHeaderContainer} {
      background: ${getColor(Colors.Warning)};
    }
  `,
  [AlertType.Success]: css`
    ${BBModalHeaderContainer} {
      background: ${getColor(Colors.Success)};
    }
  `,
  [AlertType.Info]: css`
    ${BBModalHeaderContainer} {
      background: ${getColor(Colors.Info)};
    }
  `,
}

const alertIcon = {
  [AlertType.Error]: 'error',
  [AlertType.Warning]: 'warning',
  [AlertType.Success]: 'check_circle',
  [AlertType.Info]: 'info',
}

const headerTitle = {
  [AlertType.Error]: 'Error',
  [AlertType.Warning]: 'Warning',
  [AlertType.Success]: 'Success',
  [AlertType.Info]: 'Info',
}

/*
 * Props
 */

type Props = PopOverChildProps & {
  alertType: AlertType
  headerText?: string
  onSubmit: () => void
  primaryButtonText?: string
  secondaryButtonText?: string
  subtitleText?: React.ReactNode
  titleText?: React.ReactNode
}

/*
 * Component
 */

export const AlertModal: FC<Props> = props => {
  const {
    alertType,
    closingAnimationCompleted,
    headerText,
    isOpen,
    onClick,
    onSubmit,
    position,
    primaryButtonText,
    secondaryButtonText,
    subtitleText,
    titleText,
    togglePopOver,
  } = props

  return (
    <MediumModal
      onClick={onClick}
      closingAnimationCompleted={closingAnimationCompleted}
      position={position}
      togglePopOver={togglePopOver}
      title={headerText || headerTitle[alertType]}
      isOpen={isOpen}
      iconLeft={alertIcon[alertType]}
      css={alertModalStyles[alertType]}
    >
      <BBModalContent css="padding: 24px;">
        <Text fontSize={FontSizes.Title4} fontWeight={700} margin="0 0 8px">
          {titleText}
        </Text>

        <Text fontSize={FontSizes.Title5} fontWeight={400} margin="8px 0 0 ">
          {subtitleText}
        </Text>
      </BBModalContent>

      <BBModalFooter>
        {secondaryButtonText && (
          <Button
            onClick={onClick}
            display={ButtonDisplay.Chromeless}
            css="margin-right: 8px;"
          >
            {secondaryButtonText}
          </Button>
        )}
        {primaryButtonText && (
          <Button
            onClick={() => {
              onSubmit()
              togglePopOver()
            }}
          >
            {primaryButtonText}
          </Button>
        )}
      </BBModalFooter>
    </MediumModal>
  )
}
