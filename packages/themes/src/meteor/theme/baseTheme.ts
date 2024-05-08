// eslint-disable-next-line no-restricted-imports
import { createTheme } from '@mui/material'

import {
  FontFamily,
  fontFamilyFallback,
  monospaceFallback,
} from '@monorail/themes/common/FontFamily'
import { FontSize, LineHeight } from '@monorail/themes/common/FontSize'
import { FontWeight } from '@monorail/themes/common/FontWeight'
import type {} from '@monorail/types'

// This "default" theme should house the global defaults that apply to all themes. This would likely include
// common settings that are not likely to differ between specific themes, like spacing, shadows, breakpoints, etc.
// Specific themes can override these settings, but hopefully won't want/need to.
// All other themes should use this as a baseline.

const fontStack: Record<string, React.CSSProperties['fontFamily']> = {
  base: [FontFamily.Inter, ...fontFamilyFallback].join(','),
  headings: [FontFamily.IBMPlexSans, ...fontFamilyFallback].join(','),
  mono: [FontFamily.IBMPlexMono, ...monospaceFallback].join(','),
}

const BASE_FONT_STACK = fontStack.base

export const baseTheme = createTheme(
  {
    // TODO[M3 Phase 2]: Define breakpoints in preparation for rebrand
    // breakpoints: {},

    spacing: 4,

    typography: {
      htmlFontSize: 16,
      fontFamily: BASE_FONT_STACK,
      data1: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.Data1,
        lineHeight: LineHeight.Data1,
        fontWeight: FontWeight.Light,
      },
      data2: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.Data2,
        lineHeight: LineHeight.Data2,
        fontWeight: FontWeight.Light,
      },
      data3: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.Data3,
        lineHeight: LineHeight.Data3,
        fontWeight: FontWeight.Light,
      },
      h1: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.H1,
        lineHeight: LineHeight.H1,
        fontWeight: FontWeight.Medium,
      },
      h2: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.H2,
        lineHeight: LineHeight.H2,
        fontWeight: FontWeight.Medium,
      },
      h3: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.H3,
        lineHeight: LineHeight.H3,
        fontWeight: FontWeight.Medium,
      },
      h4: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.H4,
        lineHeight: LineHeight.H4,
        fontWeight: FontWeight.Medium,
      },
      h5: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.H5,
        lineHeight: LineHeight.H5,
        fontWeight: FontWeight.Medium,
      },
      h6: {
        fontFamily: fontStack.headings,
        fontSize: FontSize.H6,
        lineHeight: LineHeight.H6,
        fontWeight: FontWeight.Medium,
      },
      body1: {
        fontSize: FontSize.Body1,
        lineHeight: LineHeight.Body1,
        fontWeight: FontWeight.Book,
      },
      body2: {
        fontSize: FontSize.Body2,
        lineHeight: LineHeight.Body2,
        fontWeight: FontWeight.Book,
      },
      subtitle1: {
        fontSize: FontSize.Subtitle1,
        lineHeight: LineHeight.Subtitle1,
        fontWeight: FontWeight.SemiBold,
      },
      subtitle2: {
        fontSize: FontSize.Subtitle2,
        lineHeight: LineHeight.Subtitle2,
        fontWeight: FontWeight.SemiBold,
      },
      monoBody1: {
        fontFamily: fontStack.mono,
        fontSize: FontSize.MonoBody1,
        lineHeight: LineHeight.MonoBody1,
        fontWeight: FontWeight.Book,
      },
      monoBody2: {
        fontFamily: fontStack.mono,
        fontSize: FontSize.MonoBody2,
        lineHeight: LineHeight.MonoBody2,
        fontWeight: FontWeight.Book,
      },
      monoBody3: {
        fontFamily: fontStack.mono,
        fontSize: FontSize.MonoBody3,
        lineHeight: LineHeight.MonoBody3,
        fontWeight: FontWeight.Medium,
        letterSpacing: 0,
      },
      overline: {
        fontSize: FontSize.Overline,
        lineHeight: LineHeight.Overline,
        fontWeight: FontWeight.Book,
        textTransform: 'uppercase',
      },
      caption: {
        fontSize: FontSize.Caption,
        lineHeight: LineHeight.Caption,
        fontWeight: FontWeight.Book,
      },
      // Components
      alertTitle: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.AlertTitle,
        lineHeight: LineHeight.AlertTitle,
        fontWeight: FontWeight.SemiBold,
      },
      avatarInitials: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.AvatarInitials,
        lineHeight: LineHeight.AvatarInitials,
        fontWeight: FontWeight.SemiBold,
      },
      badgeLabel: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.BadgeLabel,
        lineHeight: LineHeight.BadgeLabel,
        fontWeight: FontWeight.SemiBold,
      },
      bottomNavActiveLabel: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.BottomNavActiveLabel,
        lineHeight: LineHeight.BottomNavActiveLabel,
        fontWeight: FontWeight.Book,
        letterSpacing: 0.2,
      },
      button: {
        fontSize: FontSize.Button,
        lineHeight: LineHeight.ButtonMedium,
        fontWeight: FontWeight.SemiBold,
        textTransform: 'capitalize',
      },
      chip: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.Chip,
        lineHeight: LineHeight.Chip,
        fontWeight: FontWeight.Medium,
      },
      inputLabel: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.InputLabel,
        lineHeight: LineHeight.InputLabel,
        fontWeight: FontWeight.Medium,
      },
      helperText: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.HelperText,
        lineHeight: LineHeight.HelperText,
        fontWeight: FontWeight.Medium,
      },
      inputText: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.InputText,
        lineHeight: LineHeight.InputText,
        fontWeight: FontWeight.Book,
      },
      tableHeader: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.TableHeader,
        lineHeight: LineHeight.TableHeader,
        fontWeight: FontWeight.Medium,
        letterSpacing: 0.2,
      },
      listSubheader: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.ListSubheader,
        lineHeight: LineHeight.ListSubheader,
        fontWeight: FontWeight.Medium,
      },
      menuItem: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.MenuItem,
        lineHeight: LineHeight.MenuItem,
        fontWeight: FontWeight.Book,
      },
      menuItemDense: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.MenuItemDense,
        lineHeight: LineHeight.MenuItemDense,
        fontWeight: FontWeight.Book,
        letterSpacing: 0.2,
      },
      tabActive: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.TabActive,
        lineHeight: LineHeight.TabActive,
        fontWeight: FontWeight.SemiBold,
      },
      tabInactive: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.TabInactive,
        lineHeight: LineHeight.TabInactive,
        fontWeight: FontWeight.SemiBold,
      },
      tooltip: {
        fontFamily: BASE_FONT_STACK,
        fontSize: FontSize.Tooltip,
        lineHeight: LineHeight.Tooltip,
        fontWeight: FontWeight.Medium,
      },
    },

    shadows: [
      'none',
      '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
      '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
      '0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)',
      '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)',
      '0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)',
      '0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)',
      '0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)',
      '0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)',
      '0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)',
      '0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)',
      '0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)',
      '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)',
      '0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)',
      '0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)',
      '0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)',
      '0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)',
      '0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)',
      '0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)',
      '0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)',
      '0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)',
      '0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)',
      '0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)',
      '0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)',
      '0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)',
    ],

    transitions: {
      // We are accepting MUI's defaults for Phase 1.
      // TODO[M3 Phase 2]: Pair with UX to figure out what needs to be adjusted
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },

    zIndex: {
      // These are MUI's defaults. We can adjust the levels as we theme components.
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1050,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
  },
  {},
)
