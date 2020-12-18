import React from 'react'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

import { OmitBannedProps } from '@monorail/v2/shared/helpers'

/**
 * TODO: add `orientation` and `marks` props when full component design
 * specifcation has been completed.
 *
 * The `orientation` and `marks` props are omitted from the Monorail Slider's
 * props API. The vertical orientation and marks variations both require
 * additional styles that will be later determined by the design team and not
 * part of the initial scope that this component is need for. Once the
 * design specification has been completed with considerations for the vertical
 * and marks variations then these props should no longer be omitted.
 *
 * Jakie Rice 12/08/2020
 */
export type SliderProps = Omit<
  OmitBannedProps<MUI.SliderProps>,
  'orientation' | 'marks'
>

/**
 * A slider is an input control for selecting a single value or range of values.
 *
 * - [Slider | Material-UI](https://material-ui.com/components/slider/)
 */
export const Slider = (props: SliderProps) => {
  return <MUI.Slider {...props} />
}
;(Slider as any).muiName = (MUI.Slider as any).muiName // eslint-disable-line
