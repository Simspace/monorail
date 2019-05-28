import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/icon/Icon'

export const Temporary: ComponentType<CustomIconProps> = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path d="M13.8531 12.1577L12.9568 12.6763V22L21.0273 17.3402V8.0166L13.8531 12.1577Z" />
    <path d="M15.3136 3.79668L12.2099 2L3.91528 6.78838L7.02317 8.58506L15.3136 3.79668Z" />
    <path d="M20.5004 6.78839L16.9236 4.75105L8.63318 9.53942L9.10621 9.78424L12.2099 11.5768L15.2971 9.79669L20.5004 6.78839Z" />
    <path d="M8.00658 12.9668L6.5211 12.2033V9.82986L3.45886 8.06638V17.3236L11.4713 21.9502V12.6929L8.00658 10.6971V12.9668Z" />
  </svg>
)
