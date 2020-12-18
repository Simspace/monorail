import React, { DOMAttributes } from 'react'

import { Colors } from '@monorail/helpers/exports'
import { css } from '@monorail/helpers/styled-components'
import { FontSizes } from '@monorail/helpers/typography'
import { isEmptyString, isNil } from '@monorail/sharedHelpers/typeGuards'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Text } from '@monorail/visualComponents/typography/Text'

import { Icon } from '../icon/Icon'
import { TooltipMonorail } from '../tooltips/Tooltip'

type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  label?: string | number
  title?: string
  required?: boolean
  err?: boolean
  display?: DisplayType
  details?: string | React.ReactElement
}

export const Label = ({
  label,
  required,
  err,
  details,
  display = DisplayType.View,
  ...domProps
}: InputLabelProps) => {
  return !isNil(label) && !isEmptyString(label) ? (
    <Text
      fontWeight={500}
      fontSize={FontSizes.Title5}
      color={err ? Colors.Red : Colors.Black89a}
      margin="0 0 8px"
      {...domProps}
    >
      {label}
      {required && display === DisplayType.Edit && '*'}
      {details && (
        <TooltipMonorail label={details}>
          {trigger => (
            <span {...trigger}>
              <Icon
                css={css`
                  cursor: pointer;
                  margin-left: 8px;
                  position: relative;
                  top: 4px;
                `}
                icon="info"
                color={Colors.Gray54}
              />
            </span>
          )}
        </TooltipMonorail>
      )}
    </Text>
  ) : (
    <></>
  )
}
