import React, { ComponentType, forwardRef, MouseEvent } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { Omit } from 'typelevel-ts'

import { Colors, getColor } from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'
import { Academy } from '@monorail/visualComponents/icon/custom/Academy'
import { Admin } from '@monorail/visualComponents/icon/custom/Admin'
import { Bam } from '@monorail/visualComponents/icon/custom/Bam'
import { Catalog } from '@monorail/visualComponents/icon/custom/Catalog'
import { Certificate } from '@monorail/visualComponents/icon/custom/Certificate'
import { ChevronDoubleLeft } from '@monorail/visualComponents/icon/custom/ChevronDoubleLeft'
import { CircleArrowLeft } from '@monorail/visualComponents/icon/custom/CircleArrowLeft'
import { Clipboard } from '@monorail/visualComponents/icon/custom/Clipboard'
import { CodeBlock } from '@monorail/visualComponents/icon/custom/CodeBlock'
import { Copy } from '@monorail/visualComponents/icon/custom/Copy'
import { Database } from '@monorail/visualComponents/icon/custom/Database'
import { EmptySyllabusList } from '@monorail/visualComponents/icon/custom/EmptySyllabusList'
import { ErrorRobot } from '@monorail/visualComponents/icon/custom/ErrorRobot'
import { EventDesign } from '@monorail/visualComponents/icon/custom/EventDesign'
import { Events } from '@monorail/visualComponents/icon/custom/Events'
import { FileTree } from '@monorail/visualComponents/icon/custom/FileTree'
import { Filter } from '@monorail/visualComponents/icon/custom/Filter'
import { Gauge } from '@monorail/visualComponents/icon/custom/Gauge'
import { Grade } from '@monorail/visualComponents/icon/custom/Grade'
import { H1 } from '@monorail/visualComponents/icon/custom/H1'
import { H2 } from '@monorail/visualComponents/icon/custom/H2'
import { Home } from '@monorail/visualComponents/icon/custom/Home'
import { Impact } from '@monorail/visualComponents/icon/custom/Impact'
import { Information } from '@monorail/visualComponents/icon/custom/Information'
import { InformationTaskAddBlue } from '@monorail/visualComponents/icon/custom/InformationTaskAddBlue'
import { InformationTaskAddGrey } from '@monorail/visualComponents/icon/custom/InformationTaskAddGrey'
import { LMS } from '@monorail/visualComponents/icon/custom/LMS'
import { NetworkSetup } from '@monorail/visualComponents/icon/custom/NetworkSetup'
import { NoResults } from '@monorail/visualComponents/icon/custom/NoResults'
import { NoUsers } from '@monorail/visualComponents/icon/custom/NoUsers'
import { OrgGroup } from '@monorail/visualComponents/icon/custom/OrgGroup'
import { Puzzle } from '@monorail/visualComponents/icon/custom/Puzzle'
import { QuestionMark } from '@monorail/visualComponents/icon/custom/QuestionMark'
import { QuestionTaskAddBlue } from '@monorail/visualComponents/icon/custom/QuestionTaskAddBlue'
import { QuestionTaskAddGrey } from '@monorail/visualComponents/icon/custom/QuestionTaskAddGrey'
import { Range } from '@monorail/visualComponents/icon/custom/Range'
import { ReportsAnalytics } from '@monorail/visualComponents/icon/custom/ReportsAnalytics'
import { Robot } from '@monorail/visualComponents/icon/custom/Robot'
import { ServerNetwork } from '@monorail/visualComponents/icon/custom/ServerNetwork'
import { SortAscending } from '@monorail/visualComponents/icon/custom/SortAscending'
import { SortDescending } from '@monorail/visualComponents/icon/custom/SortDescending'
import { StarFilled } from '@monorail/visualComponents/icon/custom/StarFilled'
import { StarHalf } from '@monorail/visualComponents/icon/custom/StarHalf'
import { StarOutline } from '@monorail/visualComponents/icon/custom/StarOutline'
import { Strikethrough } from '@monorail/visualComponents/icon/custom/Strikethrough'
import { Switch } from '@monorail/visualComponents/icon/custom/Switch'
import { Target } from '@monorail/visualComponents/icon/custom/Target'
import { TechOps } from '@monorail/visualComponents/icon/custom/TechOps'
import { Temporary } from '@monorail/visualComponents/icon/custom/Temporary'
import { ThreeGears } from '@monorail/visualComponents/icon/custom/ThreeGears'
import { Tracker } from '@monorail/visualComponents/icon/custom/Tracker'
import { TreasureChest } from '@monorail/visualComponents/icon/custom/TreasureChest'
import { Unscored } from '@monorail/visualComponents/icon/custom/Unscored'
import { Upload } from '@monorail/visualComponents/icon/custom/Upload'
import { VCenter } from '@monorail/visualComponents/icon/custom/VCenter'
import { VMTemplates } from '@monorail/visualComponents/icon/custom/VMTemplates'
import { Wand } from '@monorail/visualComponents/icon/custom/Wand'

// https://fonts.googleapis.com/icon?family=Material+Icons&style=baseline
export const MaterialIconFontFace = createGlobalStyle`
  @font-face {
    font-display: block;
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
  // 'dashboard-app': Dashboard,
  'event-design-app': EventDesign,
  'events-app': Events,
  'externalLms-app': LMS,
  'hardhat-app': Catalog,
  'home-app': Home,
  'impact-app': Impact,
  'network-setup-app': NetworkSetup,
  'no-results': NoResults,
  'range-app': Range,
  'repo-app': Catalog,
  'reports-analytics-app': ReportsAnalytics,
  'techops-app': TechOps,
  'tracker-app': Tracker,
  'training-app': Academy,
  bam: Bam,
  certificate: Certificate,
  chevron_double_left: ChevronDoubleLeft,
  circle_arrow_left: CircleArrowLeft,
  clipboard: Clipboard,
  copy: Copy,
  errorRobot: ErrorRobot,
  codeBlock: CodeBlock,
  database: Database,
  empty_syllabus_list: EmptySyllabusList,
  file_tree: FileTree,
  filter: Filter,
  gauge: Gauge,
  h1: H1,
  h2: H2,
  information: Information,
  information_task_add_blue: InformationTaskAddBlue,
  information_task_add_grey: InformationTaskAddGrey,
  no_users: NoUsers,
  org_group: OrgGroup,
  puzzle: Puzzle,
  question_task_add_blue: QuestionTaskAddBlue,
  question_task_add_grey: QuestionTaskAddGrey,
  robot: Robot,
  server_network: ServerNetwork,
  sort_ascending: SortAscending,
  sort_descending: SortDescending,
  star_filled: StarFilled,
  star_half: StarHalf,
  star_outline: StarOutline,
  strikethrough: Strikethrough,
  switch: Switch,
  target: Target,
  temporary: Temporary,
  threeGears: ThreeGears,
  unscored: Unscored,
  vcenter: VCenter,
  vmtemplates: VMTemplates,
  wand: Wand,
  treasure_chest: TreasureChest,
  grade: Grade,
  upload: Upload,
  question_mark: QuestionMark,
}

export const Icon = styled(
  forwardRef<HTMLElement, IconProps>(
    ({ cssOverrides: _cssOverrides, icon, ...otherProps }, ref) => {
      const CustomIcon = customIcons[icon]

      if (CustomIcon) {
        // TODO: Forward ref to custom icon.. but all those SVG components need to be wrapped in forwardRef! -_-
        return <CustomIcon {...otherProps} />
      }

      return (
        <i ref={ref} {...otherProps}>
          {icon}
        </i>
      )
    },
  ),
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

export type OnClick = (event: MouseEvent<Element>) => void

export type IconProps = CommonComponentType & {
  className?: string
  icon: string
  onClick?: OnClick
  size?: number
  title?: string
}

export type CustomIconProps = Omit<IconProps, 'icon'>
