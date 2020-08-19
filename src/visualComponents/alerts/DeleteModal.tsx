import React, { FC } from 'react'

import { flexFlow, FontSizes } from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import {
  AlertModal,
  AlertModalProps,
} from '@monorail/visualComponents/alerts/AlertModal'
import { AlertType } from '@monorail/visualComponents/alerts/alertType'
import { Text } from '@monorail/visualComponents/typography/Text'

const DeletionText = styled.div`
  ${flexFlow('column')};
`

export type DeleteModalProps = Omit<AlertModalProps, 'alertType'> & {
  itemName: string
  itemType?: string
}

export const DeleteModal: FC<DeleteModalProps> = props => {
  const {
    itemName,
    titleText,
    subtitleText,
    primaryButtonText,
    secondaryButtonText,
    itemType = '',
    ...domProps
  } = props

  return (
    <AlertModal
      {...domProps}
      titleText="This is a potentially destructive action."
      alertType={AlertType.Warning}
      primaryButtonText="Delete"
      secondaryButtonText="Cancel"
      subtitleText={
        <DeletionText>
          <Text fontSize={FontSizes.Title5} fontWeight={400} margin="8px 0">
            You have chosen to delete the following
            {itemType ? ` ${itemType}` : ''}:
          </Text>
          <Text fontSize={FontSizes.Title4} fontWeight={500} margin="8px 0">
            {itemName}
          </Text>
          <Text fontSize={FontSizes.Title5} fontWeight={400} margin="8px 0">
            {subtitleText || 'Deletion is permanent and cannot be recovered.'}
          </Text>
        </DeletionText>
      }
    />
  )
}
