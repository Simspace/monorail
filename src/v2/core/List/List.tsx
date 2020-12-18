import React from 'react'
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

//#region CSS
export const StyledList = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.List as typeof List, // as-cast necessary in order to allow for additional Monorail pass-through props
)``
//#endregion CSS

export type ListProps = OmitBannedProps<MUI.ListProps>

/**
 * Wrapper for Lists
 *
 * - [Lists | Material-UI](https://material-ui.com/components/lists/)
 * - [List | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=107%3A510)
 */
export const List = React.forwardRef((props: ListProps, ref) => {
  return <StyledList ref={ref} {...props} />
})
;(List as any).muiName = (MUI.List as any).muiName // eslint-disable-line
