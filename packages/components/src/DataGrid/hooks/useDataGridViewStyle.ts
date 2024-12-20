 
import React from 'react'
import { useGridApiMethod } from '@mui/x-data-grid-premium'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type { GridPrivateApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

export function useDataGridViewStyle(
  apiRef: React.MutableRefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    'viewStyle' | 'onViewStyleChange' | 'galleryProps'
  >,
): void {
  const { onViewStyleChange, viewStyle, galleryProps } = props

  const setViewStyle = React.useCallback(
    (newViewStyle: 'table' | 'gallery', external?: boolean) => {
      if (newViewStyle === 'gallery' && galleryProps === undefined) {
        apiRef.current
          .getLogger('useDataGridViewStyle')
          .warn(
            'View style has been changed to "gallery", but "galleryProps" is undefined. Maintaining "table" view style.',
          )
        return
      }
      if (!external) {
        onViewStyleChange?.(newViewStyle)
      }
      const shouldUpdate = apiRef.current.setState(state => ({
        ...state,
        viewStyle: newViewStyle,
      }))
      if (shouldUpdate) {
        apiRef.current.forceUpdate()
      }
    },
    [onViewStyleChange, apiRef, galleryProps],
  )

  useGridApiMethod(apiRef, { setViewStyle }, 'public')

  React.useEffect(() => {
    if (viewStyle) {
      apiRef.current.setViewStyle(viewStyle, true)
    }
  }, [viewStyle, apiRef])
}
