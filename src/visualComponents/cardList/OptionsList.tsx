import React from 'react'
import { constVoid } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as RNEA from 'fp-ts/lib/ReadonlyNonEmptyArray'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import {
  Banner,
  CustomNoData,
  IconBox,
} from '@monorail/visualComponents/dataStates/DataStates'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { Choice } from '@monorail/visualComponents/inputs/Choice'
import {
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@monorail/visualComponents/list/List'

const ListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
`

const ListItemTextRow = styled(ListItemText)`
  margin-left: 4px;
  width: 100%;
`

const StyledChoice = styled(Choice)`
  ${Icon} {
    left: 16px;
  }

  ${IconBox} {
    height: 80px;
    width: 80px;
  }

  ${Banner} {
    color: ${getColor(Colors.Black89a)};

    ${typography(400, FontSizes.Title2, '24px auto')}
  }
`

const StyledCustomNoData = styled(CustomNoData)`
  height: 100%;
  ${flexFlow('column')}
  place-items: center;

  ${IconBox} {
    height: 56px;
    width: 56px;
  }
  ${Banner} {
    color: ${getColor(Colors.Black54a)};

    ${typography(400, FontSizes.Title5)}
    margin-top: 12px;
  }
`

export type ListItemProps = {
  id: string
  primaryText: string
  secondaryText?: string
}

export type RenderChoiceProps<A> = {
  item: A
  disabled?: boolean
  type: 'checkbox' | 'radio'
  onChange: () => void
  handleClick?: (item: A) => void
  checked: boolean
} & ListItemProps

const RenderChoice = <A extends unknown>({
  item,
  disabled,
  type,
  onChange,
  handleClick = constVoid,
  checked,
  id,
  primaryText,
  secondaryText,
  children,
}: RenderChoiceProps<A> & {
  children: (props: ListItemProps) => JSX.Element
}) => (
  <StyledChoice
    disabled={disabled}
    key={id}
    type={type}
    centeredInput
    checked={checked}
    onClick={() => handleClick(item)}
    onChange={onChange}
  >
    {children({
      id,
      primaryText,
      secondaryText,
    })}
  </StyledChoice>
)

export const renderDefaultListItem = (props: ListItemProps) => (
  <ListItemTextRow>
    <ListItemPrimaryText title={props.primaryText}>
      {props.primaryText}
    </ListItemPrimaryText>
    <ListItemSecondaryText>{props.secondaryText}</ListItemSecondaryText>
  </ListItemTextRow>
)

export const renderIconListItem = (
  props: ListItemProps & { iconName: IconType },
) => (
  <ListItemContainer>
    <Icon size={22} icon={props.iconName} />
    <ListItemTextRow>
      <ListItemPrimaryText title={props.primaryText}>
        {props.primaryText}
      </ListItemPrimaryText>
      <ListItemSecondaryText>{props.secondaryText}</ListItemSecondaryText>
    </ListItemTextRow>
  </ListItemContainer>
)

export type OptionsListProps<A> = {
  noDataHeading?: string
  options: ReadonlyArray<RenderChoiceProps<A>>
  renderListItem?: (props: ListItemProps) => JSX.Element
}

export const OptionsList = <A extends unknown>({
  noDataHeading = 'No Results Found',
  options,
  renderListItem = renderDefaultListItem,
}: OptionsListProps<A>) =>
  pipe(
    options,
    RNEA.fromReadonlyArray,
    O.fold(
      () => <StyledCustomNoData headingText={noDataHeading} details={[]} />,
      nonEmptyOptions => (
        <>
          {nonEmptyOptions.map(choiceProps => (
            <RenderChoice key={choiceProps.id} {...choiceProps}>
              {renderListItem}
            </RenderChoice>
          ))}
        </>
      ),
    ),
  )
