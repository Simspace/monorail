import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const SupervisedUserCircle: ComponentType<CustomIconProps> = props => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1.333A6.67 6.67 0 001.333 8 6.67 6.67 0 008 14.667 6.67 6.67 0 0014.667 8 6.67 6.67 0 008 1.333zm2.407 4.227c.713 0 1.286.573 1.286 1.287 0 .713-.573 1.286-1.286 1.286A1.283 1.283 0 019.12 6.847a1.279 1.279 0 011.287-1.287zm-2.427.52c0-.867-.707-1.573-1.573-1.573-.874 0-1.574.7-1.574 1.573 0 .867.707 1.573 1.574 1.573.866 0 1.573-.706 1.573-1.573zm-1.573 4.513v2.5A5.338 5.338 0 012.98 9.787c.7-.747 2.447-1.127 3.427-1.127.353 0 .8.053 1.266.147-1.093.58-1.266 1.346-1.266 1.786zm1.066 2.714c.174.02.347.026.527.026 2.26 0 4.187-1.413 4.967-3.393-.614-.507-1.847-.767-2.56-.767-.974 0-2.934.474-2.934 1.42v2.714z"
    />
  </svg>
)
