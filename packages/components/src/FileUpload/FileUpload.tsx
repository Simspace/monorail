import React from 'react'
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import {
  capitalize,
  styled,
  typographyClasses,
  useThemeProps,
} from '@mui/material'
import clsx from 'clsx'

import { Error, Upload, UploadFile } from '@monorail/components/icons'
import { composeClasses } from '@monorail/utils'
import {
  bytesToSize,
  formatSize,
} from '@monorail/utils/helpers/fileSizeFormatters'

import { Box } from '../Box.js'
import { Button } from '../Button.js'
import { FormControl } from '../FormControl.js'
import { FormLabel } from '../FormLabel.js'
import { LinearProgress } from '../LinearProgress.js'
import { Stack } from '../Stack.js'
import { Typography } from '../Typography.js'
import {
  fileUploadClasses,
  getFileUploadUtilityClasses,
} from './fileUploadClasses.js'
import type { FileUploadProps } from './fileUploadProps.js'

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
    return [
      styles.root,
      status !== undefined && styles[`status${capitalize(status)}`],
    ]
  },
})<FileUploadRootProps>(({ theme }) => ({
  display: 'flex',
  height: '100%',
  [`&.${fileUploadClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: 'none',
  },
}))

interface DropTargetProps
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
})<DropTargetProps>(({ ownerState, theme }) => ({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  visibility:
    ownerState.onlyVisibleWhileDragging === true &&
    ownerState.isDragging === false
      ? 'hidden'
      : 'visible',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100%',
  minHeight: 240,
  minWidth: 232,
  padding: theme.spacing(4, '10%'),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.default.border.light}`,

  [`& .${fileUploadClasses.content}`]: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '50%',
    maxWidth: '100%',

    [`& .${typographyClasses.root}`]: {
      textAlign: 'center',
      flex: '0 1 auto',
      width: '100%',
    },
  },
  [`& .${fileUploadClasses.textPrimary}`]: {
    ...theme.typography.alertTitle,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
    display: 'block',
    flex: 1,
    [`&.${fileUploadClasses.fileName}`]: {
      ...theme.typography.inputText,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1),
      flex: 1,
    },
  },
  [`& .${fileUploadClasses.textSecondary}`]: {
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    display: 'block',
    flex: 1,
    [`&.${fileUploadClasses.fileSize}`]: {
      ...theme.typography.subtitle2,
      color: theme.palette.text.secondary,
      flex: 1,
    },
  },
  [`.${fileUploadClasses.statusDefault} &`]: {
    backgroundColor: theme.palette.default.lowEmphasis.light,
    border: `2px dashed ${theme.palette.default.border.light}`,
  },
  [`.${fileUploadClasses.statusDropping} &`]: {
    backgroundColor: theme.palette.info.lowEmphasis.light,
    border: `2px dashed ${theme.palette.info.border.main}`,
    [`& .${fileUploadClasses.textPrimary}`]: {
      ...theme.typography.alertTitle,
      color: theme.palette.text.primary,
    },
  },
  [`.${fileUploadClasses.statusError} &`]: {
    backgroundColor: theme.palette.error.lowEmphasis.light,
    border: `1px solid ${theme.palette.error.border.light}`,
    [`& .${fileUploadClasses.textPrimary}`]: {
      ...theme.typography.alertTitle,
      marginBottom: theme.spacing(0),
      color: theme.palette.error.lowEmphasis.contrastText,
    },
    [`& .${fileUploadClasses.textSecondary}`]: {
      color: theme.palette.error.lowEmphasis.contrastText,
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(3),
    },
  },
}))

const FileUploadIcon = styled('div', {
  name: 'MonorailFileUpload',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})<{ ownerState: FileUploadProps }>(({ ownerState, theme }) => ({
  display: 'flex',
  fontSize: 32,
  color: theme.palette.default.main,
  marginBottom: theme.spacing(3),
  ...(ownerState.status === DropTargetStatus.Error && {
    color: theme.palette.error.main,
  }),
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
    file,
    helperTextPrimary: helperTextPrimaryProp,
    helperTextSecondary: helperTextSecondaryProp,
    errorTextPrimary: errorTextPrimaryProp,
    errorTextSecondary: errorTextSecondaryProp,
    iconMapping = defaultIconMapping,
    label,
    onChange: onChangeProp,
    onlyVisibleWhileDragging = false,
    required = false,
    uploadProgress,
    slotProps = {},
    ...other
  } = props

  let helperTextPrimary = 'Drop a file here to upload'
  let helperTextSecondary = 'or'

  let errorTextPrimary = 'Something went wrong.'
  let errorTextSecondary = 'Select a file and try again.'

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

  if (helperTextPrimaryProp !== undefined && helperTextPrimaryProp.length > 0) {
    helperTextPrimary = helperTextPrimaryProp
  }

  if (
    helperTextSecondaryProp !== undefined &&
    helperTextSecondaryProp.length > 0
  ) {
    helperTextSecondary = helperTextSecondaryProp
  }

  if (errorTextPrimaryProp !== undefined && errorTextPrimaryProp.length > 0) {
    errorTextPrimary = errorTextPrimaryProp
  }

  if (
    errorTextSecondaryProp !== undefined &&
    errorTextSecondaryProp.length > 0
  ) {
    errorTextSecondary = errorTextSecondaryProp
  }

  const dropTargetText = React.useMemo(() => {
    switch (fileUploadStatus) {
      case DropTargetStatus.Default:
        return {
          primary: helperTextPrimary,
          secondary: helperTextSecondary,
        }
      case DropTargetStatus.Dropping:
        return {
          primary: 'Drop file here',
          secondary: null,
        }
      case DropTargetStatus.Uploaded:
      case DropTargetStatus.Progress:
        return {
          primary: file !== null && file.name,
          secondary: file !== null && formatSize(bytesToSize(file.size)),
        }
      case DropTargetStatus.Error:
        return {
          primary: errorTextPrimary,
          secondary: errorTextSecondary,
        }
      default:
        return {
          primary: null,
          secondary: null,
        }
    }
  }, [
    errorTextPrimary,
    errorTextSecondary,
    file,
    fileUploadStatus,
    helperTextPrimary,
    helperTextSecondary,
  ])

  const buttonText = React.useMemo(() => {
    switch (fileUploadStatus) {
      case DropTargetStatus.Default:
      case DropTargetStatus.Error:
        return 'Select a File'
      case DropTargetStatus.Dropping:
        return null
      case DropTargetStatus.Progress:
        return 'Cancel'
      case DropTargetStatus.Uploaded:
        return 'Remove File'
      default:
        return null
    }
  }, [fileUploadStatus])

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
        <FormLabel
          required={required}
          className={classes.label}
          {...slotProps.label}
        >
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

          {dropTargetText.primary !== null && (
            <Typography
              lineClamp={file !== null ? 1 : undefined}
              title={file !== null ? file.name : undefined}
              className={classes.textPrimary}
              {...slotProps.textPrimary}
            >
              {dropTargetText.primary}
            </Typography>
          )}

          {dropTargetText.secondary !== null && (
            <Typography
              className={classes.textSecondary}
              {...slotProps.textSecondary}
            >
              {dropTargetText.secondary}
            </Typography>
          )}

          {uploadProgress !== null &&
            fileUploadStatus !== DropTargetStatus.Dropping && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: 240,
                  mb: 3,
                }}
              >
                <Box sx={{ flex: 1, mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={uploadProgress}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >{`${Math.round(uploadProgress)}%`}</Typography>
                </Box>
              </Box>
            )}

          {buttonText !== null && (
            <Button
              className={classes.action}
              disabled={disabled}
              onClick={onClick}
              {...slotProps.action}
            >
              {buttonText}
            </Button>
          )}
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
  const {
    classes,
    disabled,
    status,
    error,
    file,
    onlyVisibleWhileDragging,
    isDragging,
  } = ownerState
  const slots = {
    root: [
      'root',
      disabled === true && 'disabled',
      onlyVisibleWhileDragging === true && 'onlyVisibleWhileDragging',
      status !== undefined && `status${capitalize(status)}`,
    ],
    label: ['label'],
    dropTarget: ['dropTarget'],
    content: ['content'],
    icon: ['icon'],
    action: ['action'],
    textPrimary: [
      'textPrimary',
      error === true && 'error',
      file !== null && 'fileName',
      isDragging === true && 'isDragging',
    ],
    textSecondary: [
      'textSecondary',
      error === true && 'error',
      file !== null && 'fileSize',
    ],
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
