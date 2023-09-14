import type { CSSObject } from '@mui/material'

export function getLineClampStyles(lineClamp: number): CSSObject {
  if (lineClamp === 1) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  } else {
    return {
      display: '-webkit-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: 'vertical',
    }
  }
}
