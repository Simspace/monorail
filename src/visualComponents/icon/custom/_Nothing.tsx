import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

// TODO: This is a fallback icon for cases where people use '' as an icon
// Ideally, we should delete this component when we can get rid of '' icon usage
export const _Nothing: ComponentType<CustomIconProps> = props => <></>
