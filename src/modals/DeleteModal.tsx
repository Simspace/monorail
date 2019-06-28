import React, { FC } from 'react'

import { Button } from '@monorail/buttons/Button'
import { ButtonDisplay } from '@monorail/buttons/buttonTypes'
import { Colors, getColor } from '@monorail/helpers/color'
import { css } from '@monorail/helpers/styled-components'
import { FontSizes } from '@monorail/helpers/typography'
import { MediumModal } from '@monorail/modals/MediumModal'
import {
  BBModalContent,
  BBModalFooter,
  BBModalHeaderContainer,
} from '@monorail/modals/Modals'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import { Text } from '@monorail/typography/Text'

const deleteModalStyles = css`
  ${BBModalHeaderContainer} {
    background: ${getColor(Colors.Red)};
  }
`

export type DeleteModalProps = PopOverChildProps & {
  itemName: string
  onSubmit: () => void
}

export const DeleteModal: FC<DeleteModalProps> = props => {
  const {
    closingAnimationCompleted,
    isOpen,
    itemName,
    onClick,
    onSubmit,
    position,
    togglePopOver,
  } = props

  return (
    <MediumModal
      onClick={onClick}
      closingAnimationCompleted={closingAnimationCompleted}
      position={position}
      togglePopOver={togglePopOver}
      title="Warning"
      isOpen={isOpen}
      iconLeft="error"
      css={deleteModalStyles}
    >
      <BBModalContent css="padding: 24px;">
        <Text fontSize={FontSizes.Title4} fontWeight={700} margin="0 0 8px">
          Are you sure you want to delete <i>{itemName}</i>?
        </Text>

        <Text fontSize={FontSizes.Title5} fontWeight={400} margin="8px 0 0 ">
          Deleting is permanent action that can not be recovered.
        </Text>
      </BBModalContent>

      <BBModalFooter>
        <Button
          onClick={onClick}
          display={ButtonDisplay.Chromeless}
          css="margin-right: 8px;"
        >
          No
        </Button>
        <Button
          onClick={() => {
            onSubmit()
            togglePopOver()
          }}
        >
          Yes
        </Button>
      </BBModalFooter>
    </MediumModal>
  )
}
