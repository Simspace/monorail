import React from 'react'
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import { styled, typographyClasses, useThemeProps } from '@mui/material'
import clsx from 'clsx'

import { Error, Upload, UploadFile } from '@monorail/components/icons'
import type { StandardElementProps } from '@monorail/types'
import { composeClasses } from '@monorail/utils'
import {
  bytesToSize,
  formatSize,
} from '@monorail/utils/helpers/fileSizeFormatters'

import { Box } from '../Box.js'
import type { ButtonProps } from '../Button.js'
import { Button } from '../Button.js'
import { FormControl } from '../FormControl.js'
import type { FormHelperTextProps } from '../FormHelperText.js'
import { FormHelperText } from '../FormHelperText.js'
import { FormLabel } from '../FormLabel.js'
import { LinearProgress } from '../LinearProgress.js'
import { Stack } from '../Stack.js'
import type { TypographyProps } from '../Typography.js'
import { Typography } from '../Typography.js'
import {
  fileUploadClasses,
  getFileUploadUtilityClasses,
} from './fileUploadClasses.js'
import type { FileUploadProps } from './fileUploadProps.js'

//#region Status
enum DropTargetStatus {
  Default = 'default',
  Dropping = 'dropping',
  Uploaded = 'uploaded',
  Progress = 'progress',
  Error = 'error',
}

const defaultIconMapping = {
  [DropTargetStatus.Default]: <Upload fontSize="inherit" />,
  [DropTargetStatus.Dropping]: <Upload fontSize="inherit" />,
  [DropTargetStatus.Progress]: <UploadFile fontSize="inherit" />,
  [DropTargetStatus.Uploaded]: <UploadFile fontSize="inherit" />,
  [DropTargetStatus.Error]: <Error fontSize="inherit" />,
}

const FileUploadIcon = styled('div', {
  name: 'MonorailFileUpload',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})<{ ownerState: FileUploadProps }>(({ ownerState, theme }) => ({
  display: 'flex',
  fontSize: 32,
  color: theme.palette.default.main,
  ...(ownerState.status === DropTargetStatus.Dropping && {
    color: theme.palette.info.main,
  }),
  ...(ownerState.status === DropTargetStatus.Error && {
    color: theme.palette.error.main,
  }),
}))

const FileUploadErrorMessage = styled(FormHelperText, {
  name: 'MonorailFileUpload',
  slot: 'ErrorMessage',
  overridesResolver: (props, styles) => styles.errorMessage,
})<FormHelperTextProps>(({ theme }) => ({
  margin: 'unset',
  color: theme.palette.text.primary,
  flex: 1,
}))

const FileUploadPrimaryText = styled(Typography, {
  name: 'MonorailFileUpload',
  slot: 'PrimaryText',
})<TypographyProps>(({ theme }) => ({
  ...theme.typography.alertTitle,
  color: theme.palette.text.primary,
  flex: 1,
}))

const FileUploadSecondaryText = styled(Typography, {
  name: 'MonorailFileUpload',
  slot: 'SecondaryText',
})<TypographyProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  flex: 1,
}))

const FileUploadFileName = styled(Typography, {
  name: 'MonorailFileUpload',
  slot: 'FileName',
})<TypographyProps>(({ theme }) => ({
  ...theme.typography.inputText,
  color: theme.palette.text.primary,
  flex: 1,
}))

const FileUploadFileSize = styled(Typography, {
  name: 'MonorailFileUpload',
  slot: 'FileSize',
})<TypographyProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  flex: 1,
}))

interface DropTargetTextProps
  extends Pick<
    FileUploadProps,
    'file' | 'helperText' | 'errorMessage' | 'status'
  > {
  helperTextProps?: FormHelperTextProps
}

const renderFileUploadText = ({
  status,
  file,
  helperText,
  errorMessage,
}: DropTargetTextProps) => {
  switch (status) {
    case DropTargetStatus.Default:
      return (
        <>
          {helperText}
          <FileUploadSecondaryText>or</FileUploadSecondaryText>
        </>
      )
    case DropTargetStatus.Dropping:
      return (
        <FileUploadPrimaryText my={2} color="primary.main">
          Drop file here
        </FileUploadPrimaryText>
      )
    case DropTargetStatus.Uploaded:
    case DropTargetStatus.Progress:
      return (
        file !== null && (
          <Stack gap={1} width="100%">
            <FileUploadFileName lineClamp={1} title={file.name}>
              {file.name}
            </FileUploadFileName>
            <FileUploadFileSize>
              ({formatSize(bytesToSize(file.size))})
            </FileUploadFileSize>
          </Stack>
        )
      )
    case 'error':
      return errorMessage
    default:
      return null
  }
}
interface DropTargetActionProps extends StandardElementProps<'div'> {
  status: FileUploadProps['status']
  uploadProgress: number | null
  onClick: () => void
  disabled: boolean
  dropTargetActionSlotProps?: ButtonProps
}

const renderDropTargetAction = ({
  status,
  uploadProgress,
  onClick,
  disabled,
  dropTargetActionSlotProps,
}: DropTargetActionProps) => {
  switch (status) {
    case DropTargetStatus.Dropping:
      return <></>
    case DropTargetStatus.Uploaded:
      return (
        <Button
          variant="text"
          onClick={onClick}
          sx={{ mt: 2 }}
          {...dropTargetActionSlotProps}
        >
          Remove File
        </Button>
      )
    case DropTargetStatus.Default:
    case DropTargetStatus.Error:
      return (
        <Button
          onClick={onClick}
          disabled={disabled}
          sx={{ textTransform: 'revert' }}
          {...dropTargetActionSlotProps}
        >
          Select a File
        </Button>
      )
    case DropTargetStatus.Progress:
      return uploadProgress !== null ? (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: 240,
            }}
          >
            <Box sx={{ flex: 1, mr: 2 }}>
              <LinearProgress variant="determinate" value={uploadProgress} />
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                uploadProgress,
              )}%`}</Typography>
            </Box>
          </Box>
          <Button onClick={onClick} {...dropTargetActionSlotProps}>
            Cancel
          </Button>
        </>
      ) : (
        <></>
      )
    default:
      return null
  }
}

interface DropTargetContainerProps
  extends Omit<
    FileUploadProps,
    'ref' | 'file' | 'uploadProgress' | 'onChange'
  > {
  ownerState: FileUploadProps
}

const DropTarget = styled(Box, {
  name: 'MonorailFileUpload',
  slot: 'DropTarget',
  overridesResolver: (props, styles) => styles.dropTarget,
})<DropTargetContainerProps>(({ ownerState, theme }) => ({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  minHeight: 240,
  minWidth: 232,
  padding: theme.spacing(4, '10%'),
  borderRadius: theme.shape.borderRadius,
  [`&.${fileUploadClasses.onlyVisibleWhileDragging}`]: {
    display: 'none',
  },
  [`& .${fileUploadClasses.content}`]: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(3),
    minWidth: '50%',
    maxWidth: '100%',

    [`& .${typographyClasses.root}`]: {
      textAlign: 'center',
      flex: '0 1 auto',
      width: '100%',
    },
  },
  ...(ownerState.status === DropTargetStatus.Default && {
    backgroundColor: theme.palette.default.lowEmphasis.light,
    border: `2px dashed ${theme.palette.default.border.light}`,
  }),
  ...(ownerState.status === DropTargetStatus.Dropping && {
    backgroundColor: theme.palette.info.lowEmphasis.light,
    border: `2px dashed ${theme.palette.info.border.light}`,
  }),
  ...(ownerState.status === DropTargetStatus.Progress && {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.default.border.light}`,
  }),
  ...(ownerState.status === DropTargetStatus.Uploaded && {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.default.border.light}`,
  }),
  ...(ownerState.status === DropTargetStatus.Error && {
    backgroundColor: theme.palette.error.lowEmphasis.light,
    border: `1px solid ${theme.palette.error.border.light}`,
  }),
}))

type DropTargetMonitor = {
  getItem: () => { files: Array<File> }
}

interface FileUploadRootProps
  extends Omit<FileUploadProps, 'file' | 'uploadProgress' | 'onChange'> {
  ownerState: FileUploadProps
}

const FileUploadRoot = styled(FormControl, {
  name: 'MonorailFileUpload',
  slot: 'Root',
  overridesResolver: (props: FileUploadRootProps, styles) => {
    const {
      ownerState: { status },
    } = props
    return [status !== undefined && styles[status], styles.root]
  },
})<FileUploadRootProps>(({ theme }) => ({
  display: 'flex',
  height: '100%',
  [`&.${fileUploadClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: 'none',
  },
}))

/**
 * File Upload Component that can handle both selecting files through a button
 * interaction, or by dragging files over the box drop target and dropping them
 *
 * The component is styled differently according to its current state, with special
 * styling for when it is empty, has a file, a file is being dropped into it, has an error,
 * or upload is in progress.
 *
 * It has a min height and width to accommodate content without shifting in different states,
 * but otherwise, will grow to fill the container it is put in.
 *
 * Demos:
 *
 * - [FileUpload](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-fileupload--default)
 */
export const FileUpload = React.forwardRef(function FileUpload(
  inProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const props = useThemeProps({ props: inProps, name: 'MonorailFileUpload' })
  const {
    className,
    disabled = false,
    error = false,
    errorMessage: errorMessageProp,
    file,
    helperText: helperTextProp,
    iconMapping = defaultIconMapping,
    label,
    onChange: onChangeProp,
    onlyVisibleWhileDragging = false,
    required = false,
    uploadProgress,
    slotProps = {},
    ...other
  } = props

  let errorMessage
  let helperText
  let icon

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(_, monitor: DropTargetMonitor) {
      const files = monitor.getItem().files
      onChangeProp(files[0] ?? null)
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const fileUploadStatus = React.useMemo(() => {
    const isDropping = canDrop && isOver
    return getDropTargetStatus({
      isDropping,
      uploaded: file !== null,
      inProgress: uploadProgress !== null,
      error: !isDropping && error,
    })
  }, [canDrop, isOver, file, uploadProgress, error])

  const ownerState: FileUploadProps = {
    ...props,
    required,
    disabled,
    error,
    isDragging: canDrop,
    onlyVisibleWhileDragging,
    status: fileUploadStatus,
  }

  const inputRef = React.useRef<HTMLInputElement>(null)

  const classes = useUtilityClasses(ownerState)

  const onClick = () => {
    if (inputRef.current !== null) {
      if (
        fileUploadStatus === DropTargetStatus.Uploaded ||
        fileUploadStatus === DropTargetStatus.Progress
      ) {
        onChangeProp(null)
      } else {
        inputRef.current.click()
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files !== null) {
      onChangeProp(files[0] ?? null)

      if (inputRef.current !== null) {
        inputRef.current.value = ''
      }
    }
  }

  // if (helperTextProp === undefined) {
  //   helperText = (
  //     // Default helper text
  //     <FileUploadPrimaryText {...slotProps.helperText}>
  //       Drop a file here to upload
  //     </FileUploadPrimaryText>
  //   )
  // } else {
  //   if (typeof helperTextProp === 'string') {
  //     helperText = (
  //       <FileUploadPrimaryText {...slotProps.helperText}>
  //         {helperTextProp}
  //       </FileUploadPrimaryText>
  //     )
  //   } else {
  //     errorMessage = helperTextProp
  //   }
  // }

  // if (errorMessageProp === undefined) {
  //   errorMessage = (
  //     // Default error message
  //     <FileUploadErrorMessage
  //       className={classes.errorMessage}
  //       sx={{ fontWeight: 600, textAlign: 'center' }}
  //       {...slotProps.errorMessage}
  //     >
  //       Something went wrong.
  //       <br />
  //       <Typography component="span" variant="inherit" sx={{ fontWeight: 400 }}>
  //         Select a file and try again.
  //       </Typography>
  //     </FileUploadErrorMessage>
  //   )
  // } else {
  //   if (typeof errorMessageProp === 'string') {
  //     errorMessage = (
  //       <FileUploadErrorMessage {...slotProps.errorMessage}>
  //         {errorMessageProp}
  //       </FileUploadErrorMessage>
  //     )
  //   } else {
  //     errorMessage = errorMessageProp
  //   }
  // }

  if (fileUploadStatus !== undefined) {
    icon = iconMapping[fileUploadStatus] ?? defaultIconMapping[fileUploadStatus]
  }

  return (
    <FileUploadRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      ref={ref}
      error={error}
      {...other}
    >
      {label !== undefined && label.length > 0 && (
        <FormLabel className={classes.label} {...slotProps.label}>
          {label}
        </FormLabel>
      )}

      <DropTarget
        ref={drop}
        className={classes.dropTarget}
        ownerState={ownerState}
        {...slotProps.dropTarget}
      >
        <Stack className={classes.content} {...slotProps.content}>
          <FileUploadIcon className={classes.icon} ownerState={ownerState}>
            {icon}
          </FileUploadIcon>

          {/* {renderFileUploadText({
            status: fileUploadStatus,
            file,
            helperText,
            errorMessage,
          })}

          {renderDropTargetAction({
            status: fileUploadStatus,
            uploadProgress,
            onClick,
            disabled,
            dropTargetActionSlotProps: slotProps.dropTargetAction,
          })} */}
        </Stack>
        <input
          onChange={handleChange}
          ref={inputRef}
          style={{ display: 'none' }}
          type="file"
        />
      </DropTarget>
    </FileUploadRoot>
  )
}) as (props: FileUploadProps) => JSX.Element

function useUtilityClasses(ownerState: FileUploadProps) {
  const { classes, disabled, status, onlyVisibleWhileDragging, isDragging } =
    ownerState
  const slots = {
    root: [
      'root',
      disabled === true && 'disabled',
      onlyVisibleWhileDragging === true && 'onlyVisibleWhileDragging',
      `${status}`,
    ],
    label: ['label'],
    helperText: ['helperText'],
    errorMessage: ['errorMessage'],
    dropTarget: [
      'dropTarget',
      onlyVisibleWhileDragging === true &&
        isDragging === false &&
        'onlyVisibleWhileDragging',
    ],
    content: ['content'],
    icon: ['icon'],
    dropTargetText: ['dropTargetText'],
    dropTargetAction: ['dropTargetAction'],
  }

  return composeClasses(slots, getFileUploadUtilityClasses, classes)
}

function getDropTargetStatus({
  isDropping,
  uploaded,
  inProgress,
  error,
}: {
  isDropping: boolean
  uploaded: boolean
  inProgress: boolean
  error: boolean
}): DropTargetStatus {
  return isDropping
    ? DropTargetStatus.Dropping
    : error
    ? DropTargetStatus.Error
    : inProgress
    ? DropTargetStatus.Progress
    : uploaded
    ? DropTargetStatus.Uploaded
    : DropTargetStatus.Default
}
