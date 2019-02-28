import { Colors, colors } from '@monorail/CommonStyles'
import { Academy } from '@monorail/icon/custom/Academy'
import { Admin } from '@monorail/icon/custom/Admin'
import { Catalog } from '@monorail/icon/custom/Catalog'
import { Certificate } from '@monorail/icon/custom/Certificate'
import { ChevronDoubleLeft } from '@monorail/icon/custom/ChevronDoubleLeft'
import { CircleArrowLeft } from '@monorail/icon/custom/CircleArrowLeft'
import { Dashboard } from '@monorail/icon/custom/Dashboard'
import { ErrorRobot } from '@monorail/icon/custom/ErrorRobot'
import { Filter } from '@monorail/icon/custom/Filter'
import { Gauge } from '@monorail/icon/custom/Gauge'
import { Hardhat } from '@monorail/icon/custom/Hardhat'
import { Impact } from '@monorail/icon/custom/Impact'
import { LMS } from '@monorail/icon/custom/LMS'
import { Range } from '@monorail/icon/custom/Range'
import { Retry } from '@monorail/icon/custom/Retry'
import { ServerNetwork } from '@monorail/icon/custom/ServerNetwork'
import { SortAscending } from '@monorail/icon/custom/SortAscending'
import { SortDescending } from '@monorail/icon/custom/SortDescending'
import { StarFilled } from '@monorail/icon/custom/StarFilled'
import { StarHalf } from '@monorail/icon/custom/StarHalf'
import { StarOutline } from '@monorail/icon/custom/StarOutline'
import { TechOps } from '@monorail/icon/custom/TechOps'
import { ThreeGears } from '@monorail/icon/custom/ThreeGears'
import { Tracker } from '@monorail/icon/custom/Tracker'
import { Unscored } from '@monorail/icon/custom/Unscored'
import { VCenter } from '@monorail/icon/custom/VCenter'
import React, { ComponentType, MouseEvent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Omit } from 'typelevel-ts'

// TODO: Refactor [key: string] to more concrete type
const customIcons: { [key: string]: ComponentType<CustomIconProps> } = {
  academy: Academy,
  admin: Admin,
  catalog: Catalog,
  certificate: Certificate,
  chevron_double_left: ChevronDoubleLeft,
  circle_arrow_left: CircleArrowLeft,
  dashboard: Dashboard,
  errorRobot: ErrorRobot,
  externalLms: LMS,
  filter: Filter,
  gauge: Gauge,
  hardhat: Hardhat,
  impact: Impact,
  range: Range,
  repo: Catalog,
  server_network: ServerNetwork,
  sort_ascending: SortAscending,
  sort_descending: SortDescending,
  techops: TechOps,
  threeGears: ThreeGears,
  tracker: Tracker,
  training: Academy,
  unscored: Unscored,
  vcenter: VCenter,
  retry: Retry,
  star_filled: StarFilled,
  star_outline: StarOutline,
  star_half: StarHalf,
}

export const Icon = styled<IconProps>(({ icon, ...otherProps }: IconProps) => {
  const CustomIcon = customIcons[icon]

  if (CustomIcon) {
    return <CustomIcon {...otherProps} />
  }

  return <i {...otherProps}>{icon}</i>
})`
  ${({ size }) =>
    size
      ? css`
          font-size: ${size}px;
        `
      : css`
          font-size: 16px;
        `};

  color: ${colors(Colors.Black54)};
  direction: ltr;
  display: inline-block;
  fill: currentColor; /* Custom icons are svg and need this so that color works correct. */
  flex-shrink: 0; /* Fixes custom icons shrinking when font icons wont. */
  font-family: 'Material Icons'; /* stylelint-disable-line font-family-no-missing-generic-family-keyword */
  font-style: normal;
  font-weight: normal;
  height: 1em;
  letter-spacing: normal;
  line-height: 1;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  width: 1em;
  word-wrap: normal;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';

  ${({ css: cssOverrides }) => cssOverrides};
`

export type IconProps = {
  className?: string
  css?: SimpleInterpolation
  icon: string
  onClick?: (event: MouseEvent<Element>) => void
  size?: number
}

export type CustomIconProps = Omit<IconProps, 'icon'>
