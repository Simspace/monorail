import React, { FC } from 'react'

import {
  BorderRadius,
  borderRadius,
  Colors,
  flexFlow,
  getColor,
  Sizes,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { isBoolean } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType, CssOverridesType } from '@monorail/types'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import {
  ListItem,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@monorail/visualComponents/list/List'
import { Status } from '@monorail/visualComponents/status/Status'
import { Step as StepType } from '@monorail/visualComponents/stepper/types'

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
  iconLeftColor?: Colors
  iconLeftActiveColor?: Colors
  iconRight?: IconType
  iconRightColor?: Colors
  iconRightActiveColor?: Colors
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
  iconLeftColor,
  iconLeftActiveColor,
  iconRight,
  iconRightColor,
  iconRightActiveColor,
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
          color={
            isActive
              ? iconLeftActiveColor ?? Colors.BrandLightBlue
              : iconLeftColor ?? iconColor
          }
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
          cssOverrides={css`
            ${borderRadius(BorderRadius.Round)};

            background: ${getColor(statusIconColor)};
            color: ${getColor(Colors.White)};
            padding: 2px;
          `}
        />
      ) : iconRight ? (
        <Icon
          icon={iconRight}
          color={
            isActive
              ? iconRightActiveColor ?? Colors.BrandLightBlue
              : iconRightColor ?? iconColor
          }
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
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              isActive: isBoolean(child.props?.isActive)
                ? child.props?.isActive
                : props.value === idx,
              onClick: () => {
                props.onChange?.(idx)
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                child.props?.onClick?.()
              },
            })
          : null
      })}
    </Container>
  )
}
