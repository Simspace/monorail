import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const QuestionMark: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M10.333 17.833h2.5v2.5h-2.5v-2.5zM12 3.667c4.458.183 6.4 4.683 3.75 8.058-.692.833-1.808 1.383-2.358 2.083-.559.692-.559 1.525-.559 2.359h-2.5c0-1.392 0-2.567.559-3.4.55-.834 1.666-1.325 2.358-1.875 2.017-1.867 1.517-4.509-1.25-4.725a2.5 2.5 0 00-2.5 2.5H7a5 5 0 015-5z" />
  </svg>
)
