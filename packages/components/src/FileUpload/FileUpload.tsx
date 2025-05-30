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
  Initial = 'initial',
  Dropping = 'dropping',
  InProgress = 'inProgress',
  Uploaded = 'uploaded',
  Error = 'error',
}

const defaultIconMapping = {
  [DropTargetStatus.Initial]: <Upload fontSize="inherit" />,
  [DropTargetStatus.Dropping]: <Upload fontSize="inherit" />,
  [DropTargetStatus.InProgress]: <UploadFile fontSize="inherit" />,
  [DropTargetStatus.Uploaded]: <UploadFile fontSize="inherit" />,
  [DropTargetStatus.Error]: <Error fontSize="inherit" />,
}

type DropTargetMonitor = {
  getItem: () => { files: ReadonlyArray<File> }
}

interface FileUploadRootProps
  extends Omit<FileUploadProps, 'files' | 'uploadProgress' | 'onChange'> {
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
    'ref' | 'files' | 'uploadProgress' | 'onChange'
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
  [`.${fileUploadClasses.statusInitial} &`]: {
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
    multiple = false,
    disabled = false,
    error = false,
    files,
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

  let helperTextPrimary = multiple
    ? 'Drop one or more files here to upload'
    : 'Drop a file here to upload'
  let helperTextSecondary = 'or'

  let errorTextPrimary = 'Something went wrong.'
  let errorTextSecondary = 'Select a file and try again.'

  let icon

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(_, monitor: DropTargetMonitor) {
      const files = monitor.getItem().files
      onChangeProp(Array.from(files))
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
      uploaded: files !== null,
      inProgress: uploadProgress !== null,
      error: !isDropping && error,
    })
  }, [canDrop, isOver, files, uploadProgress, error])

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
        fileUploadStatus === DropTargetStatus.InProgress
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
      onChangeProp(Array.from(files))

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
      case DropTargetStatus.Initial:
        return {
          primary: helperTextPrimary,
          secondary: helperTextSecondary,
        }
      case DropTargetStatus.Dropping:
        return {
          primary: 'Drop file here',
          secondary: null,
        }
      case DropTargetStatus.InProgress:
      case DropTargetStatus.Uploaded:
        if (multiple) {
          const totalSize =
            files?.reduce((acc, file) => acc + (file.size ?? 0), 0) ?? 0
          return {
            primary: `Uploaded ${files?.length} files`,
            secondary: `${formatSize(bytesToSize(totalSize))} in total`,
          }
        } else {
          const { primary, secondary } = files?.[0]
            ? {
                primary: files[0].name,
                secondary: formatSize(bytesToSize(files[0].size)),
              }
            : { primary: null, secondary: null }

          return {
            primary,
            secondary,
          }
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
    files,
    fileUploadStatus,
    helperTextPrimary,
    helperTextSecondary,
    multiple,
  ])

  const buttonText = React.useMemo(() => {
    switch (fileUploadStatus) {
      case DropTargetStatus.Initial:
      case DropTargetStatus.Error:
        return multiple ? 'Select files' : 'Select a File'
      case DropTargetStatus.Dropping:
        return null
      case DropTargetStatus.InProgress:
        return 'Cancel'
      case DropTargetStatus.Uploaded:
        return `Remove File${multiple ? 's' : ''}`
      default:
        return null
    }
  }, [fileUploadStatus, multiple])

  if (fileUploadStatus !== undefined) {
    icon = iconMapping[fileUploadStatus] ?? defaultIconMapping[fileUploadStatus]
  }

  const title = React.useMemo(() => {
    if (multiple) {
      return 'Multiple files selected'
    }
    if (files !== null) {
      return files?.[0]?.name
    }
  }, [files, multiple])

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
              lineClamp={files !== null ? 1 : undefined}
              title={title}
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
          multiple={props.multiple ?? false}
          accept={props.accept}
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
    files,
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
      files !== null && 'fileName',
      isDragging === true && 'isDragging',
    ],
    textSecondary: [
      'textSecondary',
      error === true && 'error',
      files !== null && 'fileSize',
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
    ? DropTargetStatus.InProgress
    : uploaded
    ? DropTargetStatus.Uploaded
    : DropTargetStatus.Initial
}
