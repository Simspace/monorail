// Edit this file to add new stories
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {
  Box,
  FileUpload,
  FileUploadProps,
  Stack,
  Typography,
} from '@monorail/components'

import { story } from '../helpers/storybook'

export default { title: 'Inputs/FileUpload', component: FileUpload }

const Template = story<FileUploadProps>(
  args => {
    return (
      <DndProvider backend={HTML5Backend}>
        <FileUpload
          file={null}
          helperText="File upload"
          onChange={() => {}}
          uploadProgress={null}
          {...args}
        />
      </DndProvider>
    )
  },
  { args: {} },
)

export const Default = story<FileUploadProps>(Template)

export const Showcase = story<FileUploadProps>(args => (
  <DndProvider backend={HTML5Backend}>
    <Stack gap={4}>
      <FileUpload
        file={null}
        helperText="My custom text for drop target"
        label={'Initial'}
        required
        onChange={() => void 0}
        uploadProgress={null}
        {...args}
      />
      <FileUpload
        label="Has File"
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
        label="Uploading"
        file={
          {
            lastModified: new Date().getTime(),
            name: 'the_file_i_totally_dropped',
            size: 3000,
            type: '',
          } as unknown as File
        }
        uploadProgress={67}
        onChange={() => void 0}
        {...args}
      />
      <FileUpload
        label={'Has Error'}
        file={null}
        uploadProgress={null}
        onChange={() => void 0}
        error
        helperText={'Something went wrong, select another file and try again.'}
        {...args}
      />
      <Box
        sx={({ palette }) => ({
          minHeight: 240,
          width: '100%',
          border: `1px solid ${palette.default.border.light}`,
          textAlign: 'center',
          pt: 4,
          mt: 4,
        })}
      >
        <Typography>FileUpload only visible when dragging.</Typography>
        <Typography color="text.secondary">
          (Drag a file to view drop location.)
        </Typography>
        <FileUpload
          file={null}
          onChange={() => void 0}
          uploadProgress={null}
          onlyVisibleWhileDragging
          {...args}
        />
      </Box>
    </Stack>
  </DndProvider>
))
