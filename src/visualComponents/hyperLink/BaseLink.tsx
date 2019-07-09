import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router'

// BaseLink does prop stripping for styled-components so that we don't have to strip props for every styled-component that uses a link.

export const BaseLink: FC<LinkProps & { className?: string }> = ({
  onlyActiveOnIndex,
  to,
  activeClassName,
  activeStyle,
  className,
  children,
  onClick,
}) => (
  <Link
    onlyActiveOnIndex={onlyActiveOnIndex}
    to={to}
    activeClassName={activeClassName}
    activeStyle={activeStyle}
    className={className}
    onClick={onClick}
  >
    {children}
  </Link>
)
