// Edit this file to add new stories
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import type { FileUploadProps } from '@monorail/components'
import { Box, FileUpload, Stack, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/FileUpload', component: FileUpload }

const Template = story<FileUploadProps>(
  (args) => {
    const [file, setFile] = React.useState<File | null>(null)
    const [progress, setProgress] = React.useState<number | null>(null)

    React.useEffect(() => {
      if (file === null) {
        setProgress(null)
        return
      }

      setProgress(0)

      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress === null || file === null) {
            return null
          }
          if (prevProgress >= 90) {
            clearInterval(timer)
            return null
          }
          return prevProgress + 10
        })
      }, 300)

      return () => {
        clearInterval(timer)
      }
    }, [file])

    return (
      <DndProvider backend={HTML5Backend}>
        <FileUpload
          file={file}
          label='File upload'
          onChange={(value) => setFile(value)}
          uploadProgress={progress}
          {...args}
        />
      </DndProvider>
    )
  },
  { args: {} },
)

export const Default = story<FileUploadProps>(Template)

export const Status = story<FileUploadProps>((args) => (
  <DndProvider backend={HTML5Backend}>
    <Stack gap={4}>
      <FileUpload
        file={null}
        helperTextPrimary='My custom text for drop target'
        label={'Default'}
        required
        onChange={() => void 0}
        uploadProgress={null}
        {...args}
      />
      <FileUpload
        label='In Progress'
        file={
          {
            lastModified: new Date().getTime(),
            name: 'this_is_a_really_really_long_file_name_that_should_trigger_an_ellipsis_when_its_container_reaches_the_defined_max_width.csv',
            size: 3000,
            type: '',
          } as unknown as File
        }
        uploadProgress={67}
        onChange={() => void 0}
        {...args}
      />
      <FileUpload
        label='Uploaded'
        file={
          {
            lastModified: new Date().getTime(),
            name: 'the_file_i_totally_dropped',
            size: 3000,
            type: '',
          } as unknown as File
        }
        onChange={() => void 0}
        uploadProgress={null}
        {...args}
      />
      <FileUpload
        label={'Error'}
        file={null}
        uploadProgress={null}
        onChange={() => void 0}
        error
        {...args}
      />
      <FileUpload
        disabled
        file={null}
        label={'Disabled'}
        required
        onChange={() => void 0}
        uploadProgress={null}
        {...args}
      />
    </Stack>
  </DndProvider>
))

export const OnlyVisibleWhileDragging = story<FileUploadProps>((args) => (
  <DndProvider backend={HTML5Backend}>
    <Box
      position='relative'
      width='100%'
      border={(theme) => `1px solid ${theme.palette.default.border.light}`}
      p={4}
    >
      <Stack position='absolute' alignItems='center' justifyContent='center' sx={{ inset: '0%' }}>
        <Typography variant='h3'>FileUpload only visible when dragging</Typography>
        <Typography color='text.secondary'>Drag a file to view drop location</Typography>
      </Stack>
      <FileUpload
        file={null}
        onChange={() => void 0}
        uploadProgress={null}
        onlyVisibleWhileDragging
        {...args}
      />
    </Box>
  </DndProvider>
))
