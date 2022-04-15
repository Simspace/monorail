import { Components, Theme } from '@mui/material'

const switchTokens = {
  track: {
    hover: 50,
    focused: 50,
    disabled: 200,
  },
  border: {
    idle: 300,
    hover: 600,
  },
  thumb: {
    idle: 300,
    hover: 300,
  },
  icon: 600,

  checked: {
    track: { disabled: 300 },
    thumb: {
      hover: 50,
      disabled: 50,
    },
  },
} as const

export const MonorailSwitchOverrides: Components<Theme>['MuiSwitch'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '4px 16px 4px 8px',
      '&:hover': {
        '& .MuiSwitch-track': {
          borderColor: theme.palette.default[switchTokens.border.hover],
          backgroundColor: theme.palette.default[switchTokens.track.hover],
        },
      },
    }),
    switchBase: ({ ownerState: { color = 'primary' }, theme }) => ({
      padding: 8,
      transform: 'translate(5px)',
      '&.Mui-focusVisible': {
        '& + .MuiSwitch-track': {
          boxShadow: `0 0 0 3px ${theme.palette.primary.focusRing.outer}`,
          borderColor: theme.palette.primary.focusRing.inner,
        },
      },
      '&:hover': {
        backgroundColor: 'transparent',
        '&.Mui-checked .MuiSwitch-thumb': {
          backgroundColor:
            theme.palette[color][switchTokens.checked.thumb.hover],
        },
        '&.Mui-disabled': {
          borderColor: 'transparent',
        },
      },
      '&.Mui-checked': {
        transform: 'translate(32px)',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette[color].main,
          opacity: 1,
          borderColor: 'transparent',
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.common.white,
        },
        '&.Mui-focusVisible': {
          '& + .MuiSwitch-track': {
            boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
            borderColor: theme.palette[color].focusRing.inner,
          },
        },
      },
      '&.Mui-disabled': {
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.default[switchTokens.track.disabled],
          opacity: 1,
          borderColor: 'transparent',
        },
        '& > .MuiSwitch-thumb': {
          backgroundColor: theme.palette.common.white,
        },
        '&.Mui-checked': {
          '& + .MuiSwitch-track': {
            backgroundColor:
              theme.palette.default[switchTokens.checked.track.disabled],
          },
          '& > .MuiSwitch-thumb': {
            backgroundColor:
              theme.palette.default[switchTokens.checked.thumb.disabled],
          },
        },
      },
    }),
    // checked doesn't seem to work, so I used `.Mui-checked` inside `switchBase` -GS 4/15/22
    checked: {},
    thumb: ({ theme }) => ({
      backgroundColor: theme.palette.default[switchTokens.thumb.idle],
      boxShadow: 'none',
      width: 24,
      height: 24,
    }),
    track: ({ theme }) => ({
      border: `2px solid ${theme.palette.default[switchTokens.border.idle]}`,
      backgroundColor: theme.palette.common.white,
      borderRadius: 100,
      opacity: 1,
    }),
    sizeMedium: {
      height: 40,
      width: 84,
    },
    disabled: {},
    sizeSmall: {
      height: 32,
      width: 62,
      padding: '4px 12px 4px 6px',
      '& > .MuiSwitch-switchBase': {
        padding: 8,
        transform: 'translate(2px)',
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(22px)',
      },
    },
  },
}
