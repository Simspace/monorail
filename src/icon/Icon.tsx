import React, { ComponentType, MouseEvent } from 'react'
import styled, {
  css,
  SimpleInterpolation,
  createGlobalStyle,
} from 'styled-components'
import { Academy } from '@monorail/icon/custom/Academy'
import { Admin } from '@monorail/icon/custom/Admin'
import { Catalog } from '@monorail/icon/custom/Catalog'
import { Certificate } from '@monorail/icon/custom/Certificate'
import { ChevronDoubleLeft } from '@monorail/icon/custom/ChevronDoubleLeft'
import { CircleArrowLeft } from '@monorail/icon/custom/CircleArrowLeft'
import {
  Colors,
  getColor,
  convertAppNameToString,
  isAppName,
} from '@monorail/helpers/exports'
import { Dashboard } from '@monorail/icon/custom/Dashboard'
import { ErrorRobot } from '@monorail/icon/custom/ErrorRobot'
import { EventDesign } from '@monorail/icon/custom/EventDesign'
import { Events } from '@monorail/icon/custom/Events'
import { Filter } from '@monorail/icon/custom/Filter'
import { Gauge } from '@monorail/icon/custom/Gauge'
import { Hardhat } from '@monorail/icon/custom/Hardhat'
import { Home } from '@monorail/icon/custom/Home'
import { Impact } from '@monorail/icon/custom/Impact'
import { LMS } from '@monorail/icon/custom/LMS'
import { Omit } from 'typelevel-ts'
import { Range } from '@monorail/icon/custom/Range'
import { ReportsAnalytics } from '@monorail/icon/custom/ReportsAnalytics'
import { Retry } from '@monorail/icon/custom/Retry'
import { Robot } from '@monorail/icon/custom/Robot'
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

// https://fonts.googleapis.com/icon?family=Material+Icons&style=baseline
export const MaterialIconFontFace = createGlobalStyle`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/MaterialIcons-Regular.eot'); /* For IE6-8 */
    src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url('../assets/fonts/MaterialIcons-Regular.woff2') format('woff2'),
    url('../assets/fonts/MaterialIcons-Regular.woff') format('woff'),
    url('../assets/fonts/MaterialIcons-Regular.ttf') format('truetype');
  }
`

// TODO: Refactor [key: string] to more concrete type
const customIcons: { [key: string]: ComponentType<CustomIconProps> } = {
  'academy-app': Academy,
  'admin-app': Admin,
  'catalog-app': Catalog,
  'dashboard-app': Dashboard,
  'event-design-app': EventDesign,
  'events-app': Events,
  'externalLms-app': LMS,
  'hardhat-app': Hardhat,
  'home-app': Home,
  'impact-app': Impact,
  'range-app': Range,
  'repo-app': Catalog,
  'reports-analytics-app': ReportsAnalytics,
  'techops-app': TechOps,
  'tracker-app': Tracker,
  'training-app': Academy,
  certificate: Certificate,
  chevron_double_left: ChevronDoubleLeft,
  circle_arrow_left: CircleArrowLeft,
  errorRobot: ErrorRobot,
  filter: Filter,
  gauge: Gauge,
  retry: Retry,
  robot: Robot,
  server_network: ServerNetwork,
  sort_ascending: SortAscending,
  sort_descending: SortDescending,
  star_filled: StarFilled,
  star_half: StarHalf,
  star_outline: StarOutline,
  threeGears: ThreeGears,
  unscored: Unscored,
  vcenter: VCenter,
}

export const Icon = styled(
  ({ cssOverrides: _cssOverrides, icon, ...otherProps }: IconProps) => {
    const CustomIcon =
      customIcons[icon] ||
      (isAppName(icon) && customIcons[`${convertAppNameToString(icon)}-app`])

    if (CustomIcon) {
      return <CustomIcon {...otherProps} />
    }

    return <i {...otherProps}>{icon}</i>
  },
)<IconProps>(
  ({ size, cssOverrides }) => css`
    ${size
      ? css`
          font-size: ${size}px;
        `
      : css`
          font-size: 16px;
        `};

    color: ${getColor(Colors.Black54)};
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

    ${cssOverrides};
  `,
)

export type IconProps = {
  className?: string
  cssOverrides?: SimpleInterpolation
  icon: string
  onClick?: (event: MouseEvent<Element>) => void
  size?: number
}

export type CustomIconProps = Omit<IconProps, 'icon'>
