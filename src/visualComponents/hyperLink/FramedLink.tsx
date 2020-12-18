import React, { FC, MouseEventHandler } from 'react'
import { Link, LinkProps } from 'react-router'

import {
  categoryColor,
  categoryIcon,
  CategoryId,
} from '@monorail/helpers/categoryTransforms'
import { baseHyperLinkStyles, flexFlow } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { ellipsis } from '@monorail/helpers/typography'
import { isNonEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { FramedIcon } from '@monorail/visualComponents/icon/FramedIcon'
import { Text } from '@monorail/visualComponents/typography/Text'

export const LinkContainer = styled(Link)`
  ${baseHyperLinkStyles()};

  cursor: pointer;
  transition: color ease 25ms;
`

export const FramedLink: FC<{
  to: LinkProps['to']
  categoryId: CategoryId
  isArchived?: boolean
  onClick?: MouseEventHandler
  title?: string
}> = ({ categoryId, children, isArchived, onClick, to, title }) => (
  <LinkContainer
    css={css`
      ${flexFlow('row')}

      align-items: center;
      min-width: 0;
      width: 100%;
    `}
    to={to}
    title={title}
    onClick={onClick}
  >
    <FramedIcon
      icon={categoryIcon(categoryId)}
      frameColor={categoryColor(categoryId)}
      css={css`
        margin-right: 8px;
      `}
      isArchived={isArchived}
    />
    <Text
      title={isNonEmptyString(children) ? children : undefined}
      css={css`
        ${ellipsis};

        color: inherit;
        text-decoration: underline;
      `}
    >
      {children}
    </Text>
  </LinkContainer>
)
