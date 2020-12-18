import React, { useState } from 'react'

import { Icon } from '@monorail/visualComponents/icon/Icon'

export const ToggleController = ({ children }) => {
  const [checked, setChecked] = useState(true)

  return (
    <>
      {/* Render an icon before Toggle so Styled components doesn't override 'StyledIconChecked' css with Icon css */}
      <Icon
        icon="add"
        cssOverrides={`
          display: none;
        `}
      />
      {children({ checked, onChange: () => setChecked(!checked) })}
    </>
  )
}
