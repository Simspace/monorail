import React, { useRef } from 'react'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import {
  Colors,
  flexFlow,
  getColor,
  visible,
  zIndex,
  ZIndexNodeName,
} from '@monorail/helpers/exports'
import styled, { css, ThemeProvider } from '@monorail/helpers/styled-components'
import { Mode } from '@monorail/helpers/theme'
import { matchI, matchOnI } from '@monorail/sharedHelpers/matchers'
import { Button } from '@monorail/visualComponents/buttons/Button'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { EmptyUpload } from '@monorail/visualComponents/illustrations/EmptyUpload'
import {
  FileType,
  HiddenSingleFileInput,
} from '@monorail/visualComponents/inputs/FileUpload'

const ButtonContainer = styled.div`
  ${visible(false)}
  ${zIndex(ZIndexNodeName.ContentCardButton)}
`

const EmptyIcon = styled(EmptyUpload)`
  fill: ${getColor(Colors.Gray24)};
`

const HeaderImgContainer = styled.header<{ editMode: boolean }>(
  ({ editMode }) => css`
    ${flexFlow('column')}
    align-items: center;
    justify-content: center;
    background: #262885; /* TODO: Use Monorail color [GD-2020-06-25] */
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 144px;
    overflow: hidden;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${getColor(Colors.Black)};
      opacity: 0;
    }
    &:hover {
      ${ButtonContainer} {
        ${visible(true)}
      }
      ${EmptyIcon} {
        opacity: 0.4;
      }
    }
    ${editMode &&
      `&:hover:before {
        opacity: 0.6;
      }
      `}
  `,
)

const HeaderImg = styled.div<{ image: string }>(
  ({ image }) => css`
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    height: 144px;
    width: 100%;
    flex-shrink: 0;
  `,
)

const CardActionButton = styled(Button).attrs(() => ({
  display: ButtonDisplay.Chromeless,
}))`
  bottom: 60px;
  left: 40px;
  position: absolute;
  width: 176px;
`

type ImageUrl = string

type ViewProps = {
  mode: 'view'
  image: O.Option<ImageUrl>
}

export type ImageFallbackData =
  | { tag: 'empty' }
  | { tag: 'fallback'; path: ImageUrl }
  | { tag: 'custom'; path: ImageUrl }

type EditProps = {
  mode: 'edit'
  image: ImageFallbackData
  onImageChange: (img: O.Option<File>) => void
  onRemoveImage: () => void
}

const EditImage = ({ image, onImageChange, onRemoveImage }: EditProps) => {
  const imageInputRef = useRef<HTMLInputElement>(null)
  const openFilePicker = () => imageInputRef.current?.click()

  const [icon, label, action] = matchI(image)<[IconType, string, () => void]>({
    empty: () => ['upload', 'Upload card image', openFilePicker],
    fallback: () => ['upload', 'Upload card image', openFilePicker],
    custom: () => ['delete', 'Remove card image', onRemoveImage],
  })

  return (
    <>
      <ButtonContainer>
        <ThemeProvider theme={t => ({ ...t, mode: Mode.Dark })}>
          <CardActionButton iconLeft={icon} onClick={action}>
            {label}
          </CardActionButton>
        </ThemeProvider>
      </ButtonContainer>
      {matchI(image)({
        empty: () => <EmptyIcon />,
        fallback: () => <></>,
        custom: () => <></>,
      })}
      <HiddenSingleFileInput
        accept={[FileType.JPG, FileType.PNG]}
        inputRef={imageInputRef}
        onChange={onImageChange}
      />
    </>
  )
}

const getImageUrl = (props: ContentCardHeaderProps): O.Option<ImageUrl> =>
  matchOnI('mode')(props)({
    view: p => p.image,
    edit: p =>
      matchI(p.image)({
        empty: () => O.none,
        fallback: x => O.some(x.path),
        custom: x => O.some(x.path),
      }),
  })

export type ContentCardHeaderProps = ViewProps | EditProps

export const ContentCardHeader = (props: ContentCardHeaderProps) => {
  return (
    <HeaderImgContainer editMode={props.mode === 'edit'}>
      {pipe(
        getImageUrl(props),
        O.fold(
          () => <></>,
          i => <HeaderImg image={i} />,
        ),
      )}
      {matchOnI('mode')(props)({
        view: () => <></>,
        edit: p => <EditImage {...p} />,
      })}
    </HeaderImgContainer>
  )
}
