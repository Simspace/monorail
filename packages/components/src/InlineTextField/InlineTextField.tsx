import { alpha, styled } from '@monorail/utils'

import { outlinedInputClasses } from '../OutlinedInput.js'
import { selectClasses } from '../Select.js'
import type { TextFieldProps, TextFieldVariants } from '../TextField.js'
import { TextField } from '../TextField.js'

export const InlineTextField = styled(TextField)(({ theme }) =>
  theme.unstable_sx({
    minHeight: 'fit-content',
    [`& .${outlinedInputClasses.root}`]: {
      minHeight: 'fit-content',
    },
    [`&:not(:hover)`]: {
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: alpha(theme.palette.default.border.main, 0),
      },
      [`& .${selectClasses.icon}`]: {
        opacity: 0,
      },
    },
    [`&:hover`]: {
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        border: `1px solid ${theme.palette.default.border.main}`,
      },
      [`&.${outlinedInputClasses.error}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          border: `1px solid ${theme.palette.error.border.dark}`,
        },
      },
      [`& .${selectClasses.icon}`]: {
        opacity: 1,
      },
    },
    [`& .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: theme.palette.default.border.main,
      transition: theme.transitions.create('border-color', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    [`& .${selectClasses.icon}`]: {
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    [`& .${outlinedInputClasses.root}.Mui-focused`]: {
      [`&>.${selectClasses.icon}`]: {
        opacity: 1,
      },
    },
  }),
) as <Variant extends TextFieldVariants>(
  props: TextFieldProps<Variant>,
) => JSX.Element
