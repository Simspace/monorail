import React, { FC } from 'react'

import {
  borderRadius,
  BorderRadius,
  Colors,
  flexFlow,
  getColor,
  Sizes,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import {
  ListItem,
  ListItemPrimaryText,
  ListItemText,
  ListItemSecondaryText,
} from '@monorail/visualComponents/list/List'
import { Step as StepType } from '@monorail/visualComponents/stepper/types'
import { Status } from '@monorail/visualComponents/status/Status'
import { CommonComponentType, CssOverridesType } from '@monorail/types'

const Container = styled.div`
  ${flexFlow('column')};
`

export type StepperProps = CommonComponentType & {
  steps: Array<StepType>
  onStepClick: (index: number) => void
  activeStepIndex: number
  isNumbered?: boolean
}

export type VerticalStepperProps = CommonComponentType & {
  children: React.ReactNode
  isNumbered?: boolean
  value: number
  onChange: (index: number) => void
}
export type InjectedStepProps = {
  /* Even though these are marked as optional,
     they will always be applied to <Step />
     by <Stepper />
     
     AR - 2020/03/25
  */
  index?: number
  isActive?: boolean
  isNumbered?: boolean
  key?: string
  onClick?: () => void
}

export type StepProps = {
  cssOverrides?: CssOverridesType
  iconLeft?: IconType
  iconRight?: IconType
  iconColor?: Colors
  isDisabled?: boolean
  label: string
  statusIconName?: IconType
  statusIconColor?: Colors
  subtitle?: string
}

export const Step: FC<StepProps & InjectedStepProps> = ({
  cssOverrides,
  iconColor = Colors.Gray54,
  iconLeft,
  iconRight,
  index = 0,
  isActive = false,
  isDisabled,
  isNumbered = true,
  label,
  onClick = () => {},
  statusIconName,
  statusIconColor,
  subtitle,
}) => {
  const textStyles = css`
    color: ${isActive ? getColor(Colors.BrandLightBlue) : 'inherit'};
    margin-left: ${isNumbered || iconLeft ? `12px;` : `0`};
  `

  return (
    <ListItem
      cssOverrides={cssOverrides}
      size={Sizes.DP32}
      onClick={onClick}
      disabled={isDisabled}
      className={isActive ? 'is-active' : ''}
    >
      {isNumbered ? (
        <Status inactive={!isActive || isDisabled}>{index + 1}</Status>
      ) : iconLeft ? (
        <Icon
          icon={iconLeft}
          color={isActive ? Colors.BrandLightBlue : iconColor}
        />
      ) : null}

      {subtitle ? (
        <ListItemText>
          <ListItemPrimaryText cssOverrides={textStyles}>
            {label}
          </ListItemPrimaryText>
          <ListItemSecondaryText cssOverrides={textStyles}>
            {subtitle}
          </ListItemSecondaryText>
        </ListItemText>
      ) : (
        <ListItemPrimaryText cssOverrides={textStyles}>
          {label}
        </ListItemPrimaryText>
      )}

      {statusIconName && statusIconColor ? (
        <Icon
          icon={statusIconName}
          size={12}
          css={css`
            ${borderRadius(BorderRadius.Round)};

            background: ${getColor(statusIconColor)};
            color: ${getColor(Colors.White)};
            padding: 2px;
          `}
        />
      ) : iconRight ? (
        <Icon
          icon={iconRight}
          color={isActive ? Colors.BrandLightBlue : iconColor}
        />
      ) : null}
    </ListItem>
  )
}

export const Stepper = (props: VerticalStepperProps) => {
  const { isNumbered = true, children, ...domProps } = props

  return (
    <Container {...domProps}>
      {React.Children.map(children, (child, idx) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              key: `${idx}-vertical-stepper`,
              isNumbered,
              index: idx,
              isActive: props.value === idx,
              onClick: () => {
                props.onChange && props.onChange(idx)
              },
            })
          : null
      })}
    </Container>
  )
}
