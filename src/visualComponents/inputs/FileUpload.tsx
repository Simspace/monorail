import React, { createRef, FC } from 'react'
import styled from 'styled-components'
import * as A from 'fp-ts/lib/Array'
import { intercalate } from 'fp-ts/lib/Foldable'
import { monoidString } from 'fp-ts/lib/Monoid'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { flexFlow } from '@monorail/helpers/exports'
import {
  isNonEmptyArray,
  isUndefined,
} from '@monorail/sharedHelpers/typeGuards'
import { Button } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { IconType } from '@monorail/visualComponents/icon/IconType'

const FileUploadWrapper = styled.div`
  ${flexFlow('row')};

  align-items: center;
  flex-grow: 1;
`

const FileName = styled.div`
  margin: 0 16px;
`

// This is not necessarily exhaustive for all file types;
// if you see a type not included here, please add it
export enum FileType {
  AnyImage,
  PNG,
  JPG,
  WordDoc,
  PDF,
  PlainText,
  VirtualAppliance,
  Yaml,
  Excel,
  Json,
}

// [MM 2020-07-30] Convert a known file type from our finite definition to a
// valid "unique specifier" for use with the file input's `accept` field. This
// can be either a valid MIME type or a file extensions. See:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
const fileTypeToAccept = (f: FileType) => {
  switch (f) {
    case FileType.AnyImage:
      return 'image/*'
    case FileType.PNG:
      return 'image/png'
    case FileType.JPG:
      return 'image/jpg,image/jpeg'
    case FileType.WordDoc:
      return '.doc,.docx'
    case FileType.PDF:
      return '.pdf'
    case FileType.PlainText:
      return 'text/plain'
    case FileType.VirtualAppliance:
      return '.ova'
    case FileType.Yaml:
      return '.yaml,.yml'
    case FileType.Excel:
      return '.xlsx'
    case FileType.Json:
      return '.json'
  }
}

export type InputProps = {
  onChange: (file: O.Option<File>) => void
  name?: string
  required?: boolean
  accept?: Array<FileType>
}

export const HiddenSingleFileInput = (
  props: InputProps & { inputRef: React.RefObject<HTMLInputElement> },
) => {
  const accept = isNonEmptyArray(props.accept)
    ? pipe(props.accept, A.map(fileTypeToAccept), xs =>
        intercalate(monoidString, A.array)(',', xs),
      )
    : undefined

  return (
    <input
      className="deprecated-input"
      ref={props.inputRef}
      name={props.name}
      hidden
      type="file"
      accept={accept}
      required={props.required}
      onChange={e =>
        pipe(
          O.fromNullable(e.target.files),
          O.chain(files => A.head(Array.from(files))),
          props.onChange,
        )
      }
      // This is needed to fire onChange() when the same file is selected as before
      onClick={e => (e.currentTarget.value = '')}
    />
  )
}

export type FileUploadProps = {
  value?: File
  buttonType?: ButtonDisplay
  label?: string
  iconLeft?: IconType
  showFilename?: boolean
} & InputProps

export const FileUpload: FC<FileUploadProps> = props => {
  // pulling out fieldType so it doesn't get passed to the html input
  const {
    label = 'Upload File',
    value,
    iconLeft,
    buttonType,
    showFilename = true,
    ...inputProps
  } = props

  const ref = createRef<HTMLInputElement>()

  return (
    <FileUploadWrapper>
      <Button
        iconLeft={iconLeft}
        display={buttonType}
        onClick={() => {
          if (ref.current) {
            ref.current.click()
          }
        }}
      >
        {label}
      </Button>

      {showFilename && (
        <FileName>
          {isUndefined(value) ? 'No file chosen' : value.name}
        </FileName>
      )}

      {value !== undefined && (
        <IconButton
          icon="close"
          size={ButtonSize.Default}
          display={ButtonDisplay.Chromeless}
          onClick={() => props.onChange(O.none)}
        />
      )}

      <HiddenSingleFileInput {...inputProps} inputRef={ref} />
    </FileUploadWrapper>
  )
}
