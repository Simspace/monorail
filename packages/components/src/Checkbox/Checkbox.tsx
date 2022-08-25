import type { CheckboxProps, CSSObject } from '@mui/material'
import { Checkbox as MuiCheckbox, checkboxClasses, styled } from '@mui/material'

import { excludeProps, sx } from '@monorail/utils'

declare module '@mui/material/Checkbox/Checkbox' {
  interface CheckboxProps {
    disableHover?: boolean
  }
}

/**
 *
 * Demos:
 *
 * - [Checkboxes](https://mui.com/material-ui/react-checkbox/)
 * - [Transfer list](https://mui.com/material-ui/react-transfer-list/)
 *
 * API:
 *
 * - [Checkbox API](https://mui.com/material-ui/api/checkbox/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
export const Checkbox: typeof MuiCheckbox = styled(MuiCheckbox, {
  shouldForwardProp: excludeProps('disableHover'),
})(getCheckboxStyles) as typeof MuiCheckbox

function getCheckboxStyles({ disableHover }: CheckboxProps): CSSObject {
  return sx({
    ...(disableHover === true && {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }),
    [`&.${checkboxClasses.checked}`]: {
      ...(disableHover === true && {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }),
    },
    [`.${checkboxClasses.indeterminate}`]: {
      ...(disableHover === true && {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }),
    },
  })
}

export * from '@mui/material/Checkbox'
