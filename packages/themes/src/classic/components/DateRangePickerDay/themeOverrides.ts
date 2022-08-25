import type { Components, Theme } from '@mui/material'
import { buttonBaseClasses } from '@mui/material'
import {
  dateRangePickerDayClasses,
  pickersDayClasses,
} from '@mui/x-date-pickers-pro'

export const MonorailDateRangePickerDayOverrides: Components<Theme>['MuiDateRangePickerDay'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => {
        const BORDER_RADIUS = 4
        const classes = {
          /**
           * (Default) Day on the calendar that is not selected
           */
          unselectedDay: `& .${buttonBaseClasses.root}.${dateRangePickerDayClasses.day}.${dateRangePickerDayClasses.dayOutsideRangeInterval}.${dateRangePickerDayClasses.notSelectedDate}.${pickersDayClasses.root}`,
          /**
           * Individual day in between a selected range
           */
          dayInsideRangeUnselected: `& .${buttonBaseClasses.root}.${dateRangePickerDayClasses.day}.${dateRangePickerDayClasses.dayInsideRangeInterval}.${dateRangePickerDayClasses.notSelectedDate}.${pickersDayClasses.root}`,
          /**
           * Grey dashed border when selecting a range
           */
          rangePreviewBorder: `& .${dateRangePickerDayClasses.rangeIntervalPreview}.${dateRangePickerDayClasses.rangeIntervalDayPreview}`,
          /**
           * Start of highlighted range, selected (dark blue) or unselected (light blue)
           */
          rangeHighlightStart: `&.${dateRangePickerDayClasses.rangeIntervalDayHighlightStart}`,
          /**
           * End of highlighted range, selected (dark blue) or unselected (light blue)
           */
          rangeHighlightEnd: `&.${dateRangePickerDayClasses.rangeIntervalDayHighlightEnd}`,
        }

        return {
          '& button': {
            borderRadius: BORDER_RADIUS,
            '&:hover': {
              borderColor: 'transparent',
            },
          },
          // Start of each selected row
          '&:first-of-type': {
            borderTopLeftRadius: BORDER_RADIUS,
            borderBottomLeftRadius: BORDER_RADIUS,
          },
          // End of each selected row
          '&:last-of-type': {
            borderTopRightRadius: BORDER_RADIUS,
            borderBottomRightRadius: BORDER_RADIUS,
          },
          [classes.unselectedDay]: {
            '&:hover': {
              border: `1px solid ${theme.palette.primary.border.light}`,
              backgroundColor: 'transparent',
            },
            '&:active': {
              border: `1px solid ${theme.palette.primary.border.main}`,
              backgroundColor: theme.palette.primary.lowEmphasis.light,
            },
            // Start day selected
            [classes.unselectedDay + '.Mui-selected']: {
              '&:hover': {
                backgroundColor: theme.palette.primary.hover,
              },
              '&:active': {
                backgroundColor: theme.palette.primary.active,
              },
            },
          },
          [classes.dayInsideRangeUnselected]: {
            '&:hover': {
              border: `1px solid ${theme.palette.primary.border.light}`,
              backgroundColor: theme.palette.primary.lowEmphasis.main,
            },
            '&:active': {
              border: `1px solid ${theme.palette.primary.border.main}`,
              backgroundColor: theme.palette.primary.lowEmphasis.dark,
            },
          },
          [`&.${dateRangePickerDayClasses.rangeIntervalDayHighlight}`]: {
            backgroundColor: theme.palette.primary.lowEmphasis.main,
            '&:first-of-type': {
              borderTopLeftRadius: BORDER_RADIUS,
              borderBottomLeftRadius: BORDER_RADIUS,
            },
          },
          [classes.rangePreviewBorder]: {
            borderRadius: BORDER_RADIUS,
          },
          [classes.rangeHighlightStart]: {
            borderTopLeftRadius: BORDER_RADIUS,
            borderBottomLeftRadius: BORDER_RADIUS,
          },
          [classes.rangeHighlightEnd]: {
            borderTopRightRadius: BORDER_RADIUS,
            borderBottomRightRadius: BORDER_RADIUS,
          },
        }
      },
    },
  }
