import React from 'react'
import { useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'
import {
  PixelFontSize as CommonPixelFontSize,
  PixelLineHeight as CommonPixelLineHeight,
} from '@monorail/themes/common/FontSize'
import {
  PixelFontSize as LegacyPixelFontSize,
  PixelLineHeight as LegacyPixelLineHeight,
} from '@monorail/themes/legacy/FontSizeLegacy'

import { ThemeName } from '../palette/palette.types'
import { TypographyTokenTable } from './typography.components'
import type {
  TypographyTokenColumns,
  TypographyTokenRowProps,
} from './typography.types'

export default {
  title: 'Theme/Typography/Components',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

const getPixelFontProperties = (themeName: ThemeName) => {
  switch (themeName) {
    case ThemeName.MeteorLight:
    case ThemeName.MeteorDark:
    case ThemeName.ClassicLight:
    case ThemeName.ClassicDark:
    case ThemeName.MUILight:
    case ThemeName.MUIDark:
      return {
        PixelFontSize: CommonPixelFontSize,
        PixelLineHeight: CommonPixelLineHeight,
      }
    case ThemeName.LegacyLight:
    case ThemeName.LegacyDark:
    case ThemeName.LegacyPlexLight:
    case ThemeName.LegacyPlexDark:
    case ThemeName.PCTELight:
    case ThemeName.PCTEDark:
      return {
        PixelFontSize: LegacyPixelFontSize,
        PixelLineHeight: LegacyPixelLineHeight,
      }
  }
}

const columns: TypographyTokenColumns = [
  { id: 'column-variant', label: 'Token Name' },
  { id: 'column-figmaStyle', label: 'Figma Style' },
  { id: 'column-fontFamily', label: 'Font Family' },
  { id: 'column-fontWeight', label: 'Font Weight', align: 'center' },
  { id: 'column-fontSize', label: 'Font Size' },
  { id: 'column-fontSizePx', label: '(px)' },
  { id: 'column-lineHeight', label: 'Line Height' },
  { id: 'column-lineHeightPx', label: '(px)' },
  { id: 'column-underlyingElement', label: 'Underlying HTML Element' },
  { id: 'column-description', label: 'Description' },
]

export const Components = () => {
  const theme = useTheme()

  const { PixelFontSize, PixelLineHeight } = getPixelFontProperties(theme.name)

  const rows: Array<TypographyTokenRowProps> = React.useMemo(
    () => [
      {
        variant: 'alertTitle',
        figmaStyle: 'Typography/Alert Title',
        fontSizePx: PixelFontSize.AlertTitle,
        lineHeightPx: PixelLineHeight.AlertTitle,
        styles: theme.typography.alertTitle,
        underlyingElement: 'span',
        description: 'Font styles applied to AlertTitle.',
      },
      {
        variant: 'avatarInitials',
        figmaStyle: 'Typography/Avatar Initials',
        fontSizePx: PixelFontSize.AvatarInitials,
        lineHeightPx: PixelLineHeight.AvatarInitials,
        styles: theme.typography.avatarInitials,
        underlyingElement: 'span',
        description: 'Font styles applied to Avatar when child is a string.',
      },
      {
        variant: 'badgeLabel',
        figmaStyle: 'Typography/Badge Label',
        fontSizePx: PixelFontSize.BadgeLabel,
        lineHeightPx: PixelLineHeight.BadgeLabel,
        styles: theme.typography.badgeLabel,
        underlyingElement: 'span',
        description: 'Font styles applied to the Badge component’s content.',
      },
      {
        variant: 'bottomNavActiveLabel',
        figmaStyle: 'Typography/Bottom Navigation Active Label',
        fontSizePx: PixelFontSize.BottomNavActiveLabel,
        lineHeightPx: PixelLineHeight.BottomNavActiveLabel,
        styles: theme.typography.bottomNavActiveLabel,
        underlyingElement: 'span',
        description: 'Font styles applied to BottomNavigation when selected.',
      },
      {
        variant: 'buttonLarge',
        figmaStyle: 'Typography/Button Large',
        fontSizePx: PixelFontSize.ButtonLarge,
        lineHeightPx: PixelLineHeight.ButtonLarge,
        styles: theme.typography.buttonLarge,
        underlyingElement: 'span',
        description: 'Font styles applied to Button when size=”large”.',
      },
      {
        variant: 'buttonMedium',
        figmaStyle: 'Typography/Button Medium',
        fontSizePx: PixelFontSize.ButtonMedium,
        lineHeightPx: PixelLineHeight.ButtonMedium,
        styles: theme.typography.buttonMedium,
        underlyingElement: 'span',
        description: 'Font styles applied to Button when size=”medium”.',
      },
      {
        variant: 'buttonSmall',
        figmaStyle: 'Typography/Button Small',
        fontSizePx: PixelFontSize.ButtonSmall,
        lineHeightPx: PixelLineHeight.ButtonSmall,
        styles: theme.typography.buttonSmall,
        underlyingElement: 'span',
        description: 'Font styles applied to Button when size=”small”.',
      },
      {
        variant: 'chip',
        figmaStyle: 'Typography/Chip',
        fontSizePx: PixelFontSize.Chip,
        lineHeightPx: PixelLineHeight.Chip,
        styles: theme.typography.chip,
        underlyingElement: 'span',
        description: 'Font styles applied to Chip’s label.',
      },
      {
        variant: 'inputLabel',
        figmaStyle: 'Typography/Input Label',
        fontSizePx: PixelFontSize.InputLabel,
        lineHeightPx: PixelLineHeight.InputLabel,
        styles: theme.typography.inputLabel,
        underlyingElement: 'span',
        description: 'Font styles applied to FormLabel and InputLabel.',
      },
      {
        variant: 'helperText',
        figmaStyle: 'Typography/Helper Text',
        fontSizePx: PixelFontSize.HelperText,
        lineHeightPx: PixelLineHeight.HelperText,
        styles: theme.typography.helperText,
        underlyingElement: 'span',
        description: 'Font styles applied to FormHelperText.',
      },
      {
        variant: 'inputText',
        figmaStyle: 'Typography/Input Text',
        fontSizePx: PixelFontSize.InputText,
        lineHeightPx: PixelLineHeight.InputText,
        styles: theme.typography.inputText,
        underlyingElement: 'span',
        description: 'Font styles applied to Input.',
      },
      {
        variant: 'tableHeader',
        figmaStyle: 'Typography/Table Header',
        fontSizePx: PixelFontSize.TableHeader,
        lineHeightPx: PixelLineHeight.TableHeader,
        styles: theme.typography.tableHeader,
        underlyingElement: 'span',
        description: 'Font styles applied to DataGridColumnHeader.',
      },
      {
        variant: 'listSubheader',
        figmaStyle: 'Typography/List Subheader',
        fontSizePx: PixelFontSize.ListSubheader,
        lineHeightPx: PixelLineHeight.ListSubheader,
        styles: theme.typography.listSubheader,
        underlyingElement: 'span',
        description: 'Font styles applied to ListSubheader.',
      },
      {
        variant: 'menuItem',
        figmaStyle: 'Typography/Menu Item',
        fontSizePx: PixelFontSize.MenuItem,
        lineHeightPx: PixelLineHeight.MenuItem,
        styles: theme.typography.menuItem,
        underlyingElement: 'span',
        description: 'Font styles applied to MenuItem if dense={false}.',
      },
      {
        variant: 'menuItemDense',
        figmaStyle: 'Typography/Menu Item Dense',
        fontSizePx: PixelFontSize.MenuItemDense,
        lineHeightPx: PixelLineHeight.MenuItemDense,
        styles: theme.typography.menuItemDense,
        underlyingElement: 'span',
        description: 'Font styles applied to MenuItem if dense={true}.',
      },
      {
        variant: 'tabActive',
        figmaStyle: 'Typography/Tab Active',
        fontSizePx: PixelFontSize.TabActive,
        lineHeightPx: PixelLineHeight.TabActive,
        styles: theme.typography.tabActive,
        underlyingElement: 'span',
        description: 'Font styles applied to Tab if selected={true}.',
      },
      {
        variant: 'tabInactive',
        figmaStyle: 'Typography/Tab Inactive',
        fontSizePx: PixelFontSize.TabInactive,
        lineHeightPx: PixelLineHeight.TabInactive,
        styles: theme.typography.tabInactive,
        underlyingElement: 'span',
        description: 'Font styles applied to Tab if selected={false}.',
      },
      {
        variant: 'tooltip',
        figmaStyle: 'Typography/Tooltip',
        fontSizePx: PixelFontSize.Tooltip,
        lineHeightPx: PixelLineHeight.Tooltip,
        styles: theme.typography.tooltip,
        underlyingElement: 'span',
        description: 'Font styles applied to Tooltip.',
      },
    ],
    [
      PixelFontSize.AlertTitle,
      PixelFontSize.AvatarInitials,
      PixelFontSize.BadgeLabel,
      PixelFontSize.BottomNavActiveLabel,
      PixelFontSize.ButtonLarge,
      PixelFontSize.ButtonMedium,
      PixelFontSize.ButtonSmall,
      PixelFontSize.Chip,
      PixelFontSize.HelperText,
      PixelFontSize.InputLabel,
      PixelFontSize.InputText,
      PixelFontSize.ListSubheader,
      PixelFontSize.MenuItem,
      PixelFontSize.MenuItemDense,
      PixelFontSize.TabActive,
      PixelFontSize.TabInactive,
      PixelFontSize.TableHeader,
      PixelFontSize.Tooltip,
      PixelLineHeight.AlertTitle,
      PixelLineHeight.AvatarInitials,
      PixelLineHeight.BadgeLabel,
      PixelLineHeight.BottomNavActiveLabel,
      PixelLineHeight.ButtonLarge,
      PixelLineHeight.ButtonMedium,
      PixelLineHeight.ButtonSmall,
      PixelLineHeight.Chip,
      PixelLineHeight.HelperText,
      PixelLineHeight.InputLabel,
      PixelLineHeight.InputText,
      PixelLineHeight.ListSubheader,
      PixelLineHeight.MenuItem,
      PixelLineHeight.MenuItemDense,
      PixelLineHeight.TabActive,
      PixelLineHeight.TabInactive,
      PixelLineHeight.TableHeader,
      PixelLineHeight.Tooltip,
      theme.typography.alertTitle,
      theme.typography.avatarInitials,
      theme.typography.badgeLabel,
      theme.typography.bottomNavActiveLabel,
      theme.typography.buttonLarge,
      theme.typography.buttonMedium,
      theme.typography.buttonSmall,
      theme.typography.chip,
      theme.typography.helperText,
      theme.typography.inputLabel,
      theme.typography.inputText,
      theme.typography.listSubheader,
      theme.typography.menuItem,
      theme.typography.menuItemDense,
      theme.typography.tabActive,
      theme.typography.tabInactive,
      theme.typography.tableHeader,
      theme.typography.tooltip,
    ],
  )

  return (
    <Box p={4}>
      <Box mb={4}>
        <Typography variant="h2" gutterBottom>
          Component Typography Tokens
        </Typography>
        <Typography gutterBottom>{`theme.typography`}</Typography>
      </Box>
      <TypographyTokenTable columns={columns} rows={rows} />
    </Box>
  )
}
