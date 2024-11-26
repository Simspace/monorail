import { alpha, type Components, type Theme } from '@mui/material'

import {
  toggleButtonClasses,
  toggleButtonGroupClasses,
} from '@monorail/components'

export const MonorailToggleButtonOverrides: Components<Theme>['MuiToggleButton'] =
  {
    defaultProps: {
      color: 'secondary',
    },
    styleOverrides: {
      root: ({ theme, ownerState: { color = 'secondary' } }) => {
        return {
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'transparent',
            transition: theme.transitions.create(['background-color'], {
              duration: theme.transitions.duration.shortest,
            }),
          },
          [`&.${toggleButtonGroupClasses.groupedHorizontal}:first-of-type`]: {
            '&::before': {
              borderTopLeftRadius: '3px',
              borderBottomLeftRadius: '3px',
            },
          },
          [`&.${toggleButtonGroupClasses.groupedHorizontal}:last-of-type`]: {
            '&::before': {
              borderTopRightRadius: '3px',
              borderBottomRightRadius: '3px',
            },
          },
          [`&.${toggleButtonGroupClasses.groupedVertical}:first-of-type`]: {
            '&::before': {
              borderTopLeftRadius: '3px',
              borderTopRightRadius: '3px',
            },
          },
          [`&.${toggleButtonGroupClasses.groupedVertical}:last-of-type`]: {
            '&::before': {
              borderBottomLeftRadius: '3px',
              borderBottomRightRadius: '3px',
            },
          },
          color: theme.palette[color].lowEmphasis.contrastText,
          backgroundColor: theme.palette[color].lowEmphasis.light,
          borderColor: theme.palette[color].border.light,
          '&:hover': {
            backgroundColor: theme.palette[color].lowEmphasis.light,
            '&::before': {
              backgroundColor: theme.palette.action.hover,
            },
          },
          [`&.${toggleButtonClasses.selected}`]: {
            color: theme.palette[color].lowEmphasis.contrastText,
            backgroundColor: theme.palette[color].lowEmphasis.light,
            borderColor: theme.palette[color].border.dark,
            '&::before': {
              backgroundColor: theme.palette.action.selected,
            },
            '&:hover': {
              '&::before': {
                backgroundColor: alpha(
                  theme.palette.grey[100],
                  theme.palette.action.hoverOpacity +
                    theme.palette.action.selectedOpacity,
                ),
              },
            },
          },
        }
      },
      sizeSmall: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(2.75),
      }),
    },
  }

export const MonorailToggleButtonGroupOverrides: Components<Theme>['MuiToggleButtonGroup'] =
  {
    defaultProps: {
      color: 'secondary',
    },
    styleOverrides: {
      root: ({ theme, color = 'secondary', borderless }) => ({
        ...(borderless === true && {
          [`& .${toggleButtonClasses.root}`]: {
            border: `1px solid transparent`,
            borderRadius: theme.spacing(1),
            '&::before': {
              width: 'calc(100% + 2px)',
              height: 'calc(100% + 2px)',
              top: '-1px',
              left: '-1px',
              borderRadius: theme.spacing(1),
            },
            [`&.${toggleButtonClasses.selected}`]: {
              border: `1px solid transparent`,
            },
            [`&.${toggleButtonClasses.disabled}`]: {
              border: `1px solid transparent`,
            },
          },
          [`&.${toggleButtonGroupClasses.horizontal}`]: {
            [`& .${toggleButtonGroupClasses.grouped}.${toggleButtonClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonClasses.selected}`]:
              {
                borderLeft: `1px solid transparent`,
                marginLeft: -1,
              },
            [`& .${toggleButtonClasses.selected} + .${toggleButtonClasses.root}`]:
              {
                borderLeftColor: 'transparent',
              },
            [`& .${toggleButtonClasses.root}:not(.${toggleButtonClasses.selected})`]:
              {
                borderLeftColor: 'transparent',
              },
          },
          [`&.${toggleButtonGroupClasses.vertical}`]: {
            [`& .${toggleButtonGroupClasses.grouped}.${toggleButtonClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonClasses.selected}`]:
              {
                borderTop: `1px solid transparent`,
                marginTop: -1,
              },
            [`& .${toggleButtonClasses.selected} + .${toggleButtonClasses.root}`]:
              {
                borderTopColor: 'transparent',
              },
            [`& .${toggleButtonClasses.root}:not(.${toggleButtonClasses.selected})`]:
              {
                borderTopColor: 'transparent',
              },
          },
        }),
        ...(borderless !== true && {
          [`&.${toggleButtonGroupClasses.horizontal}`]: {
            [`& .${toggleButtonGroupClasses.groupedHorizontal} + .${toggleButtonClasses.root}`]:
              {
                borderLeftColor: theme.palette[color].border.dark,
              },
            [`& .${toggleButtonClasses.selected} + .${toggleButtonClasses.root}:not(.${toggleButtonClasses.selected})`]:
              {
                borderLeftColor: theme.palette[color].border.dark,
              },
            [`& .${toggleButtonClasses.root}:not(.${toggleButtonClasses.selected})`]:
              {
                borderLeftColor: theme.palette[color].border.light,
              },
          },
          [`&.${toggleButtonGroupClasses.vertical}`]: {
            [`& .${toggleButtonGroupClasses.groupedVertical} + .${toggleButtonClasses.root}`]:
              {
                borderTopColor: theme.palette[color].border.dark,
              },
            [`& .${toggleButtonClasses.selected} + .${toggleButtonClasses.root}:not(.${toggleButtonClasses.selected})`]:
              {
                borderTopColor: theme.palette[color].border.dark,
              },
            [`& .${toggleButtonClasses.root}:not(.${toggleButtonClasses.selected})`]:
              {
                borderTopColor: theme.palette[color].border.light,
              },
          },
        }),
      }),
    },
  }
