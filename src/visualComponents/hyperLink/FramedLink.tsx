import React, { FC, MouseEventHandler } from 'react'
import { LinkProps } from 'react-router'

import {
  categoryColor,
  categoryIcon,
} from '@monorail/helpers/categoryTransforms'
import { css } from '@monorail/helpers/styled-components'
import { ellipsis } from '@monorail/helpers/typography'
import { HyperLink } from '@monorail/visualComponents/hyperLink/HyperLink'
import { FramedIcon } from '@monorail/visualComponents/icon/FramedIcon'

export const FramedLink: FC<{
  to: LinkProps['to']
  categoryId: string
  isArchived?: boolean
  onClick?: MouseEventHandler
}> = ({ categoryId, children, isArchived, onClick, to }) => (
  <HyperLink
    css={css`
      ${ellipsis};

      padding: 3px 0;
      width: 100%;
    `}
    to={to}
    onClick={onClick}
  >
    <FramedIcon
      icon={categoryIcon(categoryId)}
      frameColor={categoryColor(categoryId)}
      css={css`
        margin: 0 8px -1px 2px;
        transform: translateY(-1px);
        vertical-align: middle;
      `}
      isArchived={isArchived}
    />
    {children}
  </HyperLink>
)
