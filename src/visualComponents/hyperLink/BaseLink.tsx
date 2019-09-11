import PropTypes from 'prop-types'
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import { Link, LinkProps } from 'react-router'

// BaseLink does prop stripping for styled-components so that we don't have to strip props for every styled-component that uses a link.

type BaseLinkProps = LinkProps & { className?: string }

// Redefining PropTypes to include the new object based refs since React Router 3 is old.
Link.propTypes = {
  ...Link.propTypes,
  innerRef: PropTypes.func,
}

export const BaseLink: ForwardRefExoticComponent<
  PropsWithoutRef<BaseLinkProps> & RefAttributes<HTMLAnchorElement>
> = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  (
    {
      onlyActiveOnIndex,
      to,
      activeClassName,
      activeStyle,
      className,
      children,
      onClick,
    },
    ref,
  ) => (
    <Link
      onlyActiveOnIndex={onlyActiveOnIndex}
      to={to}
      activeClassName={activeClassName}
      activeStyle={activeStyle}
      className={className}
      onClick={onClick}
      innerRef={ref}
    >
      {children}
    </Link>
  ),
)
