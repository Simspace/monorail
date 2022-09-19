import React from 'react'
import { useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'
import {
  PixelFontSize,
  PixelLineHeight,
} from '@monorail/themes/common/FontSize'

import { TypographyTokenTable } from './typography.components'
import type { TypographyTokenRowProps } from './typography.types'

export default {
  title: 'Theme/Typography/Components',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

export const Components = () => {
  const theme = useTheme()

  const rows: Array<TypographyTokenRowProps> = React.useMemo(
    () => [
      {
        token: 'alertTitle',
        figmaStyle: 'Typography/Alert Title',
        fontSizePx: PixelFontSize.AlertTitle,
        lineHeightPx: PixelLineHeight.AlertTitle,
        styles: theme.typography.alertTitle,
      },
      {
        token: 'avatarInitials',
        figmaStyle: 'Typography/Avatar Initials',
        fontSizePx: PixelFontSize.AvatarInitials,
        lineHeightPx: PixelLineHeight.AvatarInitials,
        styles: theme.typography.avatarInitials,
      },
      {
        token: 'badgeLabel',
        figmaStyle: 'Typography/Badge Label',
        fontSizePx: PixelFontSize.BadgeLabel,
        lineHeightPx: PixelLineHeight.BadgeLabel,
        styles: theme.typography.badgeLabel,
      },
      {
        token: 'bottomNavActiveLabel',
        figmaStyle: 'Typography/Bottom Navigation Active Label',
        fontSizePx: PixelFontSize.BottomNavActiveLabel,
        lineHeightPx: PixelLineHeight.BottomNavActiveLabel,
        styles: theme.typography.bottomNavActiveLabel,
      },
      {
        token: 'buttonLarge',
        figmaStyle: 'Typography/Button Large',
        fontSizePx: PixelFontSize.ButtonLarge,
        lineHeightPx: PixelLineHeight.ButtonLarge,
        styles: theme.typography.buttonLarge,
      },
      {
        token: 'buttonMedium',
        figmaStyle: 'Typography/Button Medium',
        fontSizePx: PixelFontSize.ButtonMedium,
        lineHeightPx: PixelLineHeight.ButtonMedium,
        styles: theme.typography.buttonMedium,
      },
      {
        token: 'buttonSmall',
        figmaStyle: 'Typography/Button Small',
        fontSizePx: PixelFontSize.ButtonSmall,
        lineHeightPx: PixelLineHeight.ButtonSmall,
        styles: theme.typography.buttonSmall,
      },
      {
        token: 'chip',
        figmaStyle: 'Typography/Chip',
        fontSizePx: PixelFontSize.Chip,
        lineHeightPx: PixelLineHeight.Chip,
        styles: theme.typography.chip,
      },
      {
        token: 'inputLabel',
        figmaStyle: 'Typography/Input Label',
        fontSizePx: PixelFontSize.InputLabel,
        lineHeightPx: PixelLineHeight.InputLabel,
        styles: theme.typography.inputLabel,
      },
      {
        token: 'helperText',
        figmaStyle: 'Typography/Helper Text',
        fontSizePx: PixelFontSize.HelperText,
        lineHeightPx: PixelLineHeight.HelperText,
        styles: theme.typography.helperText,
      },
      {
        token: 'inputText',
        figmaStyle: 'Typography/Input Text',
        fontSizePx: PixelFontSize.InputText,
        lineHeightPx: PixelLineHeight.InputText,
        styles: theme.typography.inputText,
      },
      {
        token: 'tableHeader',
        figmaStyle: 'Typography/Table Header',
        fontSizePx: PixelFontSize.TableHeader,
        lineHeightPx: PixelLineHeight.TableHeader,
        styles: theme.typography.tableHeader,
      },
      {
        token: 'listSubheader',
        figmaStyle: 'Typography/List Subheader',
        fontSizePx: PixelFontSize.ListSubheader,
        lineHeightPx: PixelLineHeight.ListSubheader,
        styles: theme.typography.listSubheader,
      },
      {
        token: 'menuItem',
        figmaStyle: 'Typography/Menu Item',
        fontSizePx: PixelFontSize.MenuItem,
        lineHeightPx: PixelLineHeight.MenuItem,
        styles: theme.typography.menuItem,
      },
      {
        token: 'menuItemDense',
        figmaStyle: 'Typography/Menu Item Dense',
        fontSizePx: PixelFontSize.MenuItemDense,
        lineHeightPx: PixelLineHeight.MenuItemDense,
        styles: theme.typography.menuItemDense,
      },
      {
        token: 'tabActive',
        figmaStyle: 'Typography/Tab Active',
        fontSizePx: PixelFontSize.TabActive,
        lineHeightPx: PixelLineHeight.TabActive,
        styles: theme.typography.tabActive,
      },
      {
        token: 'tabInactive',
        figmaStyle: 'Typography/Tab Inactive',
        fontSizePx: PixelFontSize.TabInactive,
        lineHeightPx: PixelLineHeight.TabInactive,
        styles: theme.typography.tabInactive,
      },
      {
        token: 'tooltip',
        figmaStyle: 'Typography/Tooltip',
        fontSizePx: PixelFontSize.Tooltip,
        lineHeightPx: PixelLineHeight.Tooltip,
        styles: theme.typography.tooltip,
      },
    ],
    [theme.typography],
  )

  return (
    <Box p={4}>
      <Box mb={4}>
        <Typography variant="h2" gutterBottom>
          Component Typography Tokens
        </Typography>
        <Typography gutterBottom>{`theme.typography`}</Typography>
      </Box>
      <TypographyTokenTable rows={rows} />
    </Box>
  )
}
