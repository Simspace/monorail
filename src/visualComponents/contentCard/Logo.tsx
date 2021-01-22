import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'

import { Colors, getColor } from '@monorail/helpers/color'
import { visible } from '@monorail/helpers/exports'
import { isNotNil, isString } from '@monorail/sharedHelpers/typeGuards'

import { Icon } from '../icon/Icon'
import { IconType } from '../icon/IconType'
import { FileType, HiddenSingleFileInput } from '../inputs/FileUpload'

export const StaticLogo = (props: { logo: string | React.ReactElement }) => (
  <LogoContainer hasLogo isEditMode={false}>
    {isString(props.logo) ? <Logo logo={props.logo} /> : props.logo}
  </LogoContainer>
)

export const EditLogo = (props: {
  logo?: string
  onRemove: () => void
  onChange: (file: O.Option<File>) => void
}) => {
  const logoInputRef = useRef<HTMLInputElement>(null)
  const [logoEl, icon, action] = pipe(
    O.fromNullable(props.logo),
    O.fold<string, [React.ReactNode, IconType, () => void]>(
      () => [<></>, 'upload', () => logoInputRef.current?.click()],
      logo => [<Logo key="logo" logo={logo} />, 'delete', props.onRemove],
    ),
  )

  return (
    <LogoContainer hasLogo={isNotNil(props.logo)} isEditMode onClick={action}>
      {logoEl}
      <LogoIconContainer>
        <Icon
          icon={icon}
          size={24}
          css={css`
            color: ${getColor(Colors.Gray54)};
            bottom: 16px;
            left: 16px;
            position: absolute;
          `}
        />
      </LogoIconContainer>
      <HiddenSingleFileInput
        accept={[FileType.JPG, FileType.PNG]}
        inputRef={logoInputRef}
        onChange={props.onChange}
      />
    </LogoContainer>
  )
}

const LogoIconContainer = styled.div`
  width: 48px;
  height: 48px;
  margin: 4px;
  border-radius: 50%;
`

const LogoContainer = styled.div<{ hasLogo?: boolean; isEditMode: boolean }>(
  ({ hasLogo, isEditMode }) => css`
    position: absolute;
    width: 56px;
    height: 56px;
    top: 118px;
    left: 12px;
    border-radius: 50%;
    background-color: ${getColor(Colors.White)};
    pointer-events: auto;
    ${hasLogo &&
      `${LogoIconContainer} {
        ${visible(false)}
      }
      &:hover {
        ${LogoIconContainer} {
          ${visible(true)}
      }`}
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      margin: 4px;
      ${!hasLogo && `border: 2px dashed ${getColor(Colors.Gray54)};`}
    }
    ${isEditMode &&
      `&:hover {
        cursor: pointer;
      }
      &:hover:before {
      background-color: ${getColor(
        hasLogo ? Colors.Black : Colors.Grey90,
        0.6,
      )};
    }`}
  `,
)

const Logo = styled.div<{ logo?: string }>(
  ({ logo }) => css`
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
    height: 48px;
    width: 48px;
    margin: 4px;
    border-radius: 50%;
    flex-shrink: 0;
  `,
)
