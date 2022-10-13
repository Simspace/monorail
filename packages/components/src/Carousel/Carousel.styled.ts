import { styled } from '@mui/material'

export const Wrapper = styled('div')(({ theme }) => ({
  margin: theme.spacing(0, 'auto'),
  position: 'relative',
  height: '100%',
  flexGrow: 1,
}))

export const GliderCarousel = styled('div')(({ theme }) => ({
  height: '100%',
  flexGrow: 1,

  '& .glider-contain': {
    width: '100%',
    margin: theme.spacing(0, 'auto'),
    position: 'relative',
    height: '100%',
    flexGrow: 1,
  },

  '& .glider': {
    margin: theme.spacing(0, 'auto'),
    position: 'relative',
    overflowY: 'hidden',
    webkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
    transform: 'translateZ(0)',
    height: '100%',
    flexGrow: 1,
  },

  '& .glider.draggable': {
    userSelect: 'none',
    cursor: 'grab',

    '& .glider-track': {
      transform: 'translateZ(0)',
      width: '100%',
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      display: 'flex',
      zIndex: 1,
      height: '100%',
      flexGrow: 1,
    },
  },

  '& .glider.draggable .glider-slide img': {
    userSelect: 'none',
    pointerEvents: 'none',
  },

  '& .glider.drag': {
    cursor: 'grabbing',
  },

  '& .glider-slide': {
    userSelect: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    minWidth: 150,
  },

  '& .glider-slide img': {
    maxWidth: '100%',
  },

  '& .glider::-webkit-scrollbar': {
    opacity: 0,
    height: 0,
  },

  '& .glider-hide': {
    opacity: 0,
  },

  '& .glider-dots': {
    userSelect: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(0, 'auto'),
    padding: theme.spacing(0),

    '& .glider-dot': {
      border: 0,
      padding: 0,
      userSelect: 'none',
      outline: 'none',
      display: 'block',
      cursor: 'pointer',
      color: theme.palette.default.lowEmphasis.dark,
      borderRadius: 999,
      backgroundColor: theme.palette.default.lowEmphasis.dark,
      width: 12,
      height: 12,
      margin: theme.spacing(1.75), // 7px TODO: investigate why it's 7px

      '&:focus': {
        background: theme.palette.default.shades[500],
      },
      '&:hover': {
        background: theme.palette.default.shades[500],
      },
      '&.active': {
        background: theme.palette.default.shades[500],
      },
    },
  },

  // TODO: Tokenize carousel breakpoint and investigate how to change unit
  // [theme.breakpoints.up('')]: {},
  '@media (max-width: 36em)': {
    '& .glider::-webkit-scrollbar': {
      opacity: 1,
      width: theme.spacing(1.75), // 7px TODO: investigate why it's 7px
      height: theme.spacing(0.75), // 7px TODO: investigate why it's 3px,
    },
    '& .glider::-webkit-scrollbar-thumb': {
      opacity: 1,
      borderRadius: 99,
      backgroundColor: theme.palette.default.lowEmphasis.dark,
      boxShadow: `0 0 1px ${theme.palette.background.paper}25`,
    },
  },

  '& .glider-prev.disabled, .glider-next.disabled': {
    opacity: theme.palette.action.disabledOpacity,
    cursor: 'default',
    pointerEvents: 'none',
  },

  '& .glider-prev.disabled + .shadow-prev': {
    opacity: 0,
  },

  '& .glider-next.disabled + .shadow-next': {
    opacity: 0,
  },
}))
