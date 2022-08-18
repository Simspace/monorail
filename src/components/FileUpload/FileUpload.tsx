import React, { CSSProperties } from 'react'
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import CancelIcon from '@mui/icons-material/Cancel'
import DescriptionIcon from '@mui/icons-material/Description'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import WarningIcon from '@mui/icons-material/Warning'
import { experimental_sx, SxProps, Theme } from '@mui/material'

import { styled } from '../../styles'
import { bytesToSize, formatSize } from '../../utils/helpers/fileSizeFormatters'
import { excludeProps } from '../../utils/styled/excludeProps'
import { sx } from '../../utils/sx'
import { Box } from '../Box'
import { Button } from '../Button'
import { FormControl } from '../FormControl'
import { FormHelperText, FormHelperTextProps } from '../FormHelperText'
import { FormLabel } from '../FormLabel'
import { IconButton } from '../IconButton'
import { LinearProgress } from '../LinearProgress'
import { Typography, TypographyProps } from '../Typography'

//#region Status
const DROP_TARGET_STATUS = {
  Active: 'active',
  HasFile: 'hasFile',
  Initial: 'initial',
  Uploading: 'uploading',
} as const

type Status = typeof DROP_TARGET_STATUS[keyof typeof DROP_TARGET_STATUS]

const getDropTargetStatus = ({
  isActive,
  hasFile,
  uploading,
}: {
  isActive: boolean
  hasFile: boolean
  uploading: boolean
}): Status =>
  isActive
    ? DROP_TARGET_STATUS.Active
    : uploading
    ? DROP_TARGET_STATUS.Uploading
    : hasFile
    ? DROP_TARGET_STATUS.HasFile
    : DROP_TARGET_STATUS.Initial
//#endregion Status

//#region DropTargetIcon
const DropTargetIcon = ({ status }: { status: Status | 'error' }) => {
  switch (status) {
    case DROP_TARGET_STATUS.Active:
      return <FileUploadIcon viewBox={'2 2 20 20'} color="primary" />
    case 'error':
      return <WarningIcon viewBox={'2 2 20 20'} color="error" />
    case DROP_TARGET_STATUS.HasFile:
      return <DescriptionIcon viewBox={'2 2 20 20'} color="default" />
    case DROP_TARGET_STATUS.Initial:
      return <FileUploadIcon viewBox={'2 2 20 20'} color="default" />
    case DROP_TARGET_STATUS.Uploading:
      return <DescriptionIcon viewBox={'2 2 20 20'} color="default" />
    default:
      return <></>
  }
}
//#end-region DropTargetIcon

//#region DropTargetText
const StyledHelperText = styled(FormHelperText)<FormHelperTextProps>(
  ({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.body2.fontSize,
    margin: theme.spacing(2),
    color: theme.palette.text.primary,
  }),
)

const StyledDropTargetText = styled(Typography)<TypographyProps>(
  sx(theme => ({
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.body2.fontSize,
    my: theme.spacing(2),
    color: theme.palette.text.primary,
  })),
)

interface DropTargetTextProps {
  status: Status | 'error'
  file: File | null
  helperText?: string
}

const DropTargetText = ({ status, file, helperText }: DropTargetTextProps) => {
  if (status === DROP_TARGET_STATUS.Active) {
    return (
      <StyledDropTargetText sx={{ color: 'primary.main' }}>
        Drop file here
      </StyledDropTargetText>
    )
  }
  if (file === null || file === undefined) {
    return <StyledHelperText>{helperText}</StyledHelperText>
  }
  return (
    <div>
      <StyledDropTargetText>{file.name}</StyledDropTargetText>
      <StyledDropTargetText
        sx={{ fontWeight: 'regular', color: 'text.secondary' }}
      >
        ({formatSize(bytesToSize(file.size))})
      </StyledDropTargetText>
    </div>
  )
}
//#endregion DropTargetText

//#region DropTargetAction
interface DropTargetActionProps {
  status: Status
  uploadProgress: number | null
  onClick: () => void
}

const DropTargetAction = ({
  status,
  uploadProgress,
  onClick,
}: DropTargetActionProps) => {
  switch (status) {
    case DROP_TARGET_STATUS.Active:
      return <></>
    case DROP_TARGET_STATUS.HasFile:
      return (
        <Button variant="text" onClick={onClick} sx={{ mt: 2 }}>
          Change File
        </Button>
      )
    case DROP_TARGET_STATUS.Initial:
      return (
        <Button
          variant="outlined"
          sx={theme => ({ mt: 2, bgcolor: theme.palette.common.white })}
          onClick={onClick}
        >
          Choose File
        </Button>
      )
    case DROP_TARGET_STATUS.Uploading:
      return uploadProgress !== null ? (
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
      ) : (
        <></>
      )
  }
}
//#endregion DropTargetAction

type DropTargetProps = {
  status: Status | 'error'
  isDragging: boolean
  onlyVisibleWhileDragging: boolean
  sx?: SxProps<Theme>
}

const DropTarget = styled('div', {
  shouldForwardProp: excludeProps(
    'status',
    'isDragging',
    'onlyVisibleWhileDragging',
    'sx',
  ),
})<DropTargetProps>(
  ({ theme, onlyVisibleWhileDragging, isDragging, status, sx }) => {
    const dropTargetStatusStyles: Record<string, CSSProperties> = {
      [DROP_TARGET_STATUS.Active]: {
        background: theme.palette.primary.lowEmphasis.light,
        border: `2px dashed ${theme.palette.primary.border.light}`,
      },
      [DROP_TARGET_STATUS.Initial]: {
        background: theme.palette.default.lowEmphasis.light,
        border: `2px dashed ${theme.palette.default.border.light}`,
      },
      [DROP_TARGET_STATUS.HasFile]: {
        background: theme.palette.common.white,
        border: `1px solid ${theme.palette.default.border.light}`,
      },
      [DROP_TARGET_STATUS.Uploading]: {
        background: theme.palette.common.white,
        border: `1px solid ${theme.palette.default.border.light}`,
      },
      error: {
        background: theme.palette.error.lowEmphasis.light,
        border: `1px solid ${theme.palette.error.border.light}`,
      },
    }

    return experimental_sx({
      boxSizing: 'border-box',
      position: 'relative',
      display: onlyVisibleWhileDragging && !isDragging ? 'none' : 'flex',
      flexDirection: 'column',
      minWidth: 232,
      p: 4,
      borderRadius: 1,
      height: '100%',
      minHeight: 240,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      ...dropTargetStatusStyles[status],
      ...(sx !== undefined && sx),
    })
  },
)

const DropTargetContent = styled('div')({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export interface FileUploadProps {
  file: File | null
  uploadProgress: number | null
  error?: boolean
  onChange: (file: File | null) => void
  onlyVisibleWhileDragging?: boolean
  label?: string
  required?: boolean
  helperText?: string
  DropTargetProps?: {
    sx?: SxProps<Theme>
  }
}

type DropTargetMonitor = {
  getItem: () => { files: Array<File> }
}

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
 */
export const FileUpload: React.VFC<FileUploadProps> = ({
  required = false,
  onlyVisibleWhileDragging = false,
  ...props
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click()
    }
  }
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(_, monitor: DropTargetMonitor) {
      const files = monitor.getItem().files
      props.onChange(files[0] ?? null)
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files !== null) {
      props.onChange(files[0] ?? null)

      if (inputRef.current !== null) {
        event.target.value = ''
      }
    }
  }

  const status = React.useMemo(
    () =>
      getDropTargetStatus({
        isActive: canDrop && isOver,
        hasFile: props.file !== null,
        uploading: props.uploadProgress !== null,
      }),
    [props.file, props.uploadProgress, canDrop, isOver],
  )

  // Error status is used for container styles and icon
  const statusWithError = React.useMemo(() => {
    if (
      status === DROP_TARGET_STATUS.Active ||
      props.error === null ||
      props.error === undefined
    ) {
      return status
    }
    return 'error' as const
  }, [status, props.error])

  const label = React.useMemo(() => {
    if (props.label !== undefined) {
      return (
        <FormLabel
          required={required}
          sx={{
            display: 'block',
            mb: 0,
          }}
        >
          {props.label}
        </FormLabel>
      )
    }
    return null
  }, [props.label, required])

  const removeFileButton = React.useMemo(
    () =>
      status === 'hasFile' && (
        <IconButton
          aria-label="Remove File"
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
          }}
          onClick={() => props.onChange(null)}
        >
          <CancelIcon />
        </IconButton>
      ),
    [status, props],
  )

  const helperText = React.useMemo(() => {
    const DEFAULT_ERROR_MESSAGE =
      'Something went wrong, select another file and try again.'
    const DEFAULT_HELPER_TEXT = 'Drop your file here.'
    if (props.helperText !== undefined) {
      return props.helperText
    }
    if (props.helperText === undefined) {
      return DEFAULT_HELPER_TEXT
      if (statusWithError === 'error') {
        return DEFAULT_ERROR_MESSAGE
      }
    }
  }, [statusWithError, props.helperText])

  return (
    <FormControl error={props.error} fullWidth sx={{ height: '100%' }}>
      {label}
      <DropTarget
        ref={drop}
        status={statusWithError}
        onlyVisibleWhileDragging={onlyVisibleWhileDragging}
        isDragging={canDrop}
        sx={props.DropTargetProps?.sx}
      >
        {removeFileButton}

        <DropTargetContent>
          <DropTargetIcon status={statusWithError} />

          <DropTargetText
            file={props.file}
            status={statusWithError}
            helperText={helperText}
          />

          <DropTargetAction
            onClick={onClick}
            uploadProgress={props.uploadProgress}
            status={status}
          />
        </DropTargetContent>
        <input
          onChange={onChange}
          ref={inputRef}
          style={{ display: 'none' }}
          type="file"
        />
      </DropTarget>
    </FormControl>
  )
}
//#endregion DropTarget
