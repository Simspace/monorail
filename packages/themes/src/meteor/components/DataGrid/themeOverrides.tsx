import type { Components, Theme } from '@mui/material'
import { checkboxClasses, typographyClasses } from '@mui/material'

import { dataGridClasses } from '@monorail/components'

export const MonorailDataGridOverrides: Components<Theme>['MuiDataGrid'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        border: 'none',
        borderRadius: 0,
        [`& .${dataGridClasses['columnSeparator--sideRight']}`]: {
          right: theme.spacing(-2),
        },
      }
    },
    row: ({ theme }) => {
      return {
        minWidth: '100%',
        '--rowBorderColor': 'transparent', // This is a workaround to remove the border on the rows
        [`&.${dataGridClasses.grouped}`]: {
          backgroundColor: theme.palette.background.default,
        },
        ['&:hover']: {
          backgroundColor: theme.palette.background.default,
        },
        [`&.${dataGridClasses.grouped}:hover`]: {
          cursor: 'pointer',
        },
        [`&.${dataGridClasses.rowDragOverBottom}`]: {
          boxShadow: `inset 0px -2px ${theme.palette.primary.main}`,
        },
        [`&.${dataGridClasses.rowDragOverTop}`]: {
          boxShadow: `inset 0px 2px ${theme.palette.primary.main}`,
        },
        [`&.odd`]: {
          backgroundColor: theme.palette.background.default,
          '&:hover, &.Mui-hovered': {
            background: `
              linear-gradient(0deg, ${theme.palette.action.hover} 0%, ${theme.palette.action.hover} 100%),
              ${theme.palette.background.default}
            `,
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
          '&.Mui-selected': {
            background: `
              linear-gradient(0deg, ${theme.palette.action.selected} 0%, ${theme.palette.action.selected} 100%),
              ${theme.palette.background.default}
            `,
            '&:hover, &.Mui-hovered': {
              background: `
                linear-gradient(0deg, ${theme.palette.action.hover} 0%, ${theme.palette.action.hover} 100%),
                linear-gradient(0deg, ${theme.palette.action.selected} 0%, ${theme.palette.action.selected} 100%),
                ${theme.palette.background.default}
              `,
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                background: `
                  linear-gradient(0deg, ${theme.palette.action.selected} 0%, ${theme.palette.action.selected} 100%),
                  ${theme.palette.background.default}
                `,
              },
            },
          },
        },
        [`&.even`]: {
          '&:hover, &.Mui-hovered': {
            background: `
              linear-gradient(0deg, ${theme.palette.action.hover} 0%, ${theme.palette.action.hover} 100%),
              ${theme.palette.background.paper}
            `,
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
          '&.Mui-selected': {
            background: `
              linear-gradient(0deg, ${theme.palette.action.selected} 0%, ${theme.palette.action.selected} 100%),
              ${theme.palette.background.paper}
            `,
            '&:hover, &.Mui-hovered': {
              background: `
                linear-gradient(0deg, ${theme.palette.action.hover} 0%, ${theme.palette.action.hover} 100%),
                linear-gradient(0deg, ${theme.palette.action.selected} 0%, ${theme.palette.action.selected} 100%),
                ${theme.palette.background.paper}
              `,
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                background: `
                  linear-gradient(0deg, ${theme.palette.action.selected} 0%, ${theme.palette.action.selected} 100%),
                  ${theme.palette.background.paper}
                `,
              },
            },
          },
        },
      }
    },
    virtualScrollerRenderZone: {
      width: '100%',
    },
    columnHeaders: ({ theme }) => {
      return {
        // Mui V7 updated the styles for the column headers. This is a workaround to get the old styles back.
        '--DataGrid-containerBackground': theme.palette.background.paper,
        [`& div[class$="columnHeaderRow"]`]: {
          borderBottom: 'none',
          boxShadow: `inset 0px -2px ${theme.palette.divider}`,
        },
        borderRadius: '0',
        [`&.${dataGridClasses.grouped}`]: {
          backgroundColor: 'transparent',
        },
      }
    },
    columnHeader: ({ theme }) => {
      return {
        padding: 0,
        height: theme.spacing(14),
        '&:focus': {
          outline: 'none',
        },
        '&:focus-within': {
          outline: 'none',
        },
        '&:focus-visible': {
          boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          zIndex: 1,
        },
      }
    },
    columnHeaderDraggableContainer: () => {
      return {
        height: '100%',
      }
    },
    columnHeaderTitleContainer: ({ theme }) => ({
      height: '100%',
      [`& > .${dataGridClasses.columnHeaderTitleContainerContent}`]: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        [`& .${typographyClasses.root}`]: {
          ...theme.typography.tableHeader,
        },
      },
    }),
    columnHeaderCheckbox: {
      padding: 0,
    },
    cell: ({ theme }) => {
      return {
        borderBottom: 'none',
        padding: theme.spacing(0, 2),
        '&:focus-visible': {
          outline: 'none',
          boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          zIndex: 1,
        },
        '&:focus-within': {
          outline: 'none',
        },
        '&:focus': {
          outline: 'none',
        },
      }
    },
    'cell--editing': ({ theme }) => ({
      boxShadow: 'none',
      '&:focus-within': {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
        zIndex: 1,
      },
    }),
    footerContainer: ({ theme }) => {
      return {
        backgroundColor: theme.palette.background.default,
      }
    },
    columnSeparator: () => {
      return {
        visibility: 'visible',
      }
    },
    checkboxInput: {
      ['&:hover']: {
        backgroundColor: 'transparent',
      },
      [`&.${checkboxClasses.checked}:hover`]: {
        backgroundColor: 'transparent',
      },
    },
    toolbarContainer: ({ theme }) => {
      return {
        height: theme.spacing(20),
        padding: theme.spacing(4, 8),
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    },
    editInputCell: {
      ['&.Mui-focused']: {
        boxShadow: 'none',
      },
    },
    panelFooter: ({ theme }) => ({
      padding: theme.spacing(0, 4, 4, 4),
    }),
    filterForm: ({ theme }) => ({
      padding: theme.spacing(4),
      gap: theme.spacing(4),
    }),
    filterFormDeleteIcon: ({ theme }) => ({
      marginBottom: theme.spacing(2),
    }),
  },
}
