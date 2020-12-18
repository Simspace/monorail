import React from 'react'

import { Colors } from '@monorail/helpers/color'
import { FontSizes, FontWeights } from '@monorail/helpers/exports'
import { HyperLink } from '@monorail/visualComponents/hyperLink/HyperLink'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { Tile } from '@monorail/visualComponents/tile/Tile'
import { TileStatus } from '@monorail/visualComponents/tile/TileStatus'
import { Text } from '@monorail/visualComponents/typography/Text'

export const SlotTypeIcon: Record<string, IconType> = {
  workrole: 'person',
  subteam: 'device_hub',
}

export const TileAsIndividual = props => {
  const {
    member,
    workRole,
    teamSlot,
    readiness = TileStatus.Unassigned,
  } = props
  return (
    <Tile
      status={readiness}
      icon={SlotTypeIcon.workrole}
      actions={
        workRole && [
          {
            label: 'View Individual Profile',
            onClick: () => {},
          },
          {
            label: 'Change Work Role',
            onClick: () => {},
          },
          {
            label: 'Unassign',
            onClick: () => {},
          },
        ]
      }
    >
      {member.to ? (
        <HyperLink to={member.to} css="margin-bottom: 4px; display: block;">
          <Text
            color={Colors.BrandLightBlue}
            fontSize={FontSizes.Title5}
            fontWeight={FontWeights.Book}
            margin="0 0 8px"
            as="div"
          >
            {member.name}
          </Text>
        </HyperLink>
      ) : (
        <Text
          fontSize={FontSizes.Title5}
          fontWeight={FontWeights.Book}
          margin="0 0 8px"
          as="div"
        >
          {member.name}
        </Text>
      )}
      {workRole && (
        <>
          {!teamSlot && (
            <Text
              fontSize={FontSizes.Title5}
              fontWeight={FontWeights.Book}
              margin="0 0 8px"
              as="div"
            >
              {workRole.name}
            </Text>
          )}
          <Text
            color={Colors.Black54a}
            fontSize={FontSizes.Title5}
            fontWeight={FontWeights.Book}
            margin="0 0 8px"
            as="div"
          >
            {workRole.proficiency}
          </Text>
        </>
      )}
    </Tile>
  )
}
