import { checkboxClasses, Components, Theme } from '@mui/material'

import { dataGridClasses } from './internal'

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
        [`&.${dataGridClasses.grouped}`]: {
          backgroundColor: theme.palette.default.mediumEmphasis.light,
        },
        ['&:hover']: {
          backgroundColor: theme.palette.default.weakEmphasis.hover,
        },
        [`&.${dataGridClasses.grouped}:hover`]: {
          cursor: 'pointer',
        },
      }
    },
    columnHeaders: ({ theme }) => {
      return {
        backgroundColor: theme.palette.default.mediumEmphasis.main,
        borderBottom: 'none',
        boxShadow: `inset 0px -1px ${theme.palette.divider}`,
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
    columnHeadersInner: {
      height: '100%',
    },
    columnHeaderDraggableContainer: () => {
      return {
        height: '100%',
      }
    },
    columnHeaderTitleContainer: {
      height: '100%',
      [`& > .${dataGridClasses.columnHeaderTitleContainerContent}`]: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
    },
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
    footerContainer: ({ theme }) => {
      return {
        backgroundColor: theme.palette.default.mediumEmphasis.main,
        borderTop: `1px solid ${theme.palette.divider}`,
      }
    },
    columnSeparator: () => {
      return {
        width: '16px',
        alignItems: 'center',
      }
    },
    iconSeparator: ({ theme }) => {
      return {
        color: theme.palette.divider,
        backgroundColor: theme.palette.divider,
        borderColor: theme.palette.divider,
        width: '1px',
        height: theme.spacing(10),
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
        backgroundColor: theme.palette.default.mediumEmphasis.light,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    },
  },
}
