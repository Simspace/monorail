import React, { ComponentType, forwardRef, MouseEvent } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'

import { Colors, getColor } from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'
import { _Nothing } from '@monorail/visualComponents/icon/custom/_Nothing'
import { Academy } from '@monorail/visualComponents/icon/custom/Academy'
import { AccountGroup } from '@monorail/visualComponents/icon/custom/AccountGroup'
import { AccountTie } from '@monorail/visualComponents/icon/custom/AccountTie'
import { AddGroup } from '@monorail/visualComponents/icon/custom/AddGroup'
import { AddList } from '@monorail/visualComponents/icon/custom/AddList'
import { Admin } from '@monorail/visualComponents/icon/custom/Admin'
import { AutomatedAttacks } from '@monorail/visualComponents/icon/custom/AutomatedAttacks'
import { Bam } from '@monorail/visualComponents/icon/custom/Bam'
import { BypassEllipsis } from '@monorail/visualComponents/icon/custom/BypassEllipsis'
import { BypassEmpty } from '@monorail/visualComponents/icon/custom/BypassEmpty'
import { BypassError } from '@monorail/visualComponents/icon/custom/BypassError'
import { BypassInProgress } from '@monorail/visualComponents/icon/custom/BypassInProgress'
import { BypassStopped } from '@monorail/visualComponents/icon/custom/BypassStopped'
import { BypassSuccess } from '@monorail/visualComponents/icon/custom/BypassSuccess'
import { BypassWaiting } from '@monorail/visualComponents/icon/custom/BypassWaiting'
import { Calculator } from '@monorail/visualComponents/icon/custom/Calculator'
import { Catalog } from '@monorail/visualComponents/icon/custom/Catalog'
import { Certificate } from '@monorail/visualComponents/icon/custom/Certificate'
import { CheckStar } from '@monorail/visualComponents/icon/custom/CheckStar'
import { ChevronDoubleDown } from '@monorail/visualComponents/icon/custom/ChevronDoubleDown'
import { ChevronDoubleLeft } from '@monorail/visualComponents/icon/custom/ChevronDoubleLeft'
import { ChevronDoubleRight } from '@monorail/visualComponents/icon/custom/ChevronDoubleRight'
import { ChevronDoubleUp } from '@monorail/visualComponents/icon/custom/ChevronDoubleUp'
import { CircleArrowLeft } from '@monorail/visualComponents/icon/custom/CircleArrowLeft'
import { CircleArrowRight } from '@monorail/visualComponents/icon/custom/CircleArrowRight'
import { Clipboard } from '@monorail/visualComponents/icon/custom/Clipboard'
import { CodeBlock } from '@monorail/visualComponents/icon/custom/CodeBlock'
import { Copy } from '@monorail/visualComponents/icon/custom/Copy'
import { Crown } from '@monorail/visualComponents/icon/custom/Crown'
import { Cube } from '@monorail/visualComponents/icon/custom/Cube'
import { Database } from '@monorail/visualComponents/icon/custom/Database'
import { Download } from '@monorail/visualComponents/icon/custom/Download'
import { Education } from '@monorail/visualComponents/icon/custom/Education'
import { EmptySyllabusList } from '@monorail/visualComponents/icon/custom/EmptySyllabusList'
import { ErrorRobot } from '@monorail/visualComponents/icon/custom/ErrorRobot'
import { EssayAnswered } from '@monorail/visualComponents/icon/custom/EssayAnswered'
import { EssayDefault } from '@monorail/visualComponents/icon/custom/EssayDefault'
import { EventDesign } from '@monorail/visualComponents/icon/custom/EventDesign'
import { EventLogs } from '@monorail/visualComponents/icon/custom/EventLogs'
import { Events } from '@monorail/visualComponents/icon/custom/Events'
import { EyeClosed } from '@monorail/visualComponents/icon/custom/EyeClosed'
import { EyeOpen } from '@monorail/visualComponents/icon/custom/EyeOpen'
import { FightsOff } from '@monorail/visualComponents/icon/custom/FightsOff'
import { FightsOn } from '@monorail/visualComponents/icon/custom/FightsOn'
import { FileTree } from '@monorail/visualComponents/icon/custom/FileTree'
import { Filter } from '@monorail/visualComponents/icon/custom/Filter'
import { Gauge } from '@monorail/visualComponents/icon/custom/Gauge'
import { GearCheckmark } from '@monorail/visualComponents/icon/custom/GearCheckmark'
import { GhostEmpty } from '@monorail/visualComponents/icon/custom/GhostEmpty'
import { GhostVm } from '@monorail/visualComponents/icon/custom/GhostVm'
import { Grade } from '@monorail/visualComponents/icon/custom/Grade'
import { GroupSquare } from '@monorail/visualComponents/icon/custom/GroupSquare'
import { H1 } from '@monorail/visualComponents/icon/custom/H1'
import { H2 } from '@monorail/visualComponents/icon/custom/H2'
import { Home } from '@monorail/visualComponents/icon/custom/Home'
import { HourglassHalf } from '@monorail/visualComponents/icon/custom/HourglassHalf'
import { Impact } from '@monorail/visualComponents/icon/custom/Impact'
import { InfoOutline } from '@monorail/visualComponents/icon/custom/InfoOutline'
import { Information } from '@monorail/visualComponents/icon/custom/Information'
import { InformationTaskAddBlue } from '@monorail/visualComponents/icon/custom/InformationTaskAddBlue'
import { InformationTaskAddGrey } from '@monorail/visualComponents/icon/custom/InformationTaskAddGrey'
import { InProgress } from '@monorail/visualComponents/icon/custom/InProgress'
import { Live } from '@monorail/visualComponents/icon/custom/Live'
import { LMS } from '@monorail/visualComponents/icon/custom/LMS'
import { LoadingDots } from '@monorail/visualComponents/icon/custom/LoadingDots'
import { LogoMono } from '@monorail/visualComponents/icon/custom/LogoMono'
import { Mitre } from '@monorail/visualComponents/icon/custom/Mitre'
import { MyOrg } from '@monorail/visualComponents/icon/custom/MyOrg'
import { MyTeam } from '@monorail/visualComponents/icon/custom/MyTeam'
import { NetworkImpact } from '@monorail/visualComponents/icon/custom/NetworkImpact'
import { NetworkSetup } from '@monorail/visualComponents/icon/custom/NetworkSetup'
import { NoResults } from '@monorail/visualComponents/icon/custom/NoResults'
import { NoUsers } from '@monorail/visualComponents/icon/custom/NoUsers'
import { OrgGroup } from '@monorail/visualComponents/icon/custom/OrgGroup'
import { PackageVariant } from '@monorail/visualComponents/icon/custom/PackageVariant'
import { PeopleGear } from '@monorail/visualComponents/icon/custom/PeopleGear'
import { PersonGear } from '@monorail/visualComponents/icon/custom/PersonGear'
import { PersonSearch } from '@monorail/visualComponents/icon/custom/PersonSearch'
import { Profile } from '@monorail/visualComponents/icon/custom/Profile'
import { Puppet } from '@monorail/visualComponents/icon/custom/Puppet'
import { PuppetOutline } from '@monorail/visualComponents/icon/custom/PuppetOutline'
import { Puzzle } from '@monorail/visualComponents/icon/custom/Puzzle'
import { QuestionMark } from '@monorail/visualComponents/icon/custom/QuestionMark'
import { QuestionTaskAddBlue } from '@monorail/visualComponents/icon/custom/QuestionTaskAddBlue'
import { QuestionTaskAddGrey } from '@monorail/visualComponents/icon/custom/QuestionTaskAddGrey'
import { Range } from '@monorail/visualComponents/icon/custom/Range'
import { ReportsAnalytics } from '@monorail/visualComponents/icon/custom/ReportsAnalytics'
import { RestoreFromTrash } from '@monorail/visualComponents/icon/custom/RestoreFromTrash'
import { Ribbon } from '@monorail/visualComponents/icon/custom/Ribbon'
import { Robot } from '@monorail/visualComponents/icon/custom/Robot'
import { Rocket } from '@monorail/visualComponents/icon/custom/Rocket'
import { SelfEnroll } from '@monorail/visualComponents/icon/custom/SelfEnroll'
import { ServerNetwork } from '@monorail/visualComponents/icon/custom/ServerNetwork'
import { Shoes } from '@monorail/visualComponents/icon/custom/Shoes'
import { SiteMap } from '@monorail/visualComponents/icon/custom/SiteMap'
import { SortAscending } from '@monorail/visualComponents/icon/custom/SortAscending'
import { SortDescending } from '@monorail/visualComponents/icon/custom/SortDescending'
import { Square } from '@monorail/visualComponents/icon/custom/Square'
import { StarFilled } from '@monorail/visualComponents/icon/custom/StarFilled'
import { StarHalf } from '@monorail/visualComponents/icon/custom/StarHalf'
import { StarOutline } from '@monorail/visualComponents/icon/custom/StarOutline'
import { Strikethrough } from '@monorail/visualComponents/icon/custom/Strikethrough'
import { SupervisedUserCircle } from '@monorail/visualComponents/icon/custom/SupervisedUserCircle'
import { Switch } from '@monorail/visualComponents/icon/custom/Switch'
import { Sword } from '@monorail/visualComponents/icon/custom/Sword'
import { Target } from '@monorail/visualComponents/icon/custom/Target'
import { TargetArchery } from '@monorail/visualComponents/icon/custom/TargetArchery'
import { TechOps } from '@monorail/visualComponents/icon/custom/TechOps'
import { Telescope } from '@monorail/visualComponents/icon/custom/Telescope'
import { Temporary } from '@monorail/visualComponents/icon/custom/Temporary'
import { ThreeGears } from '@monorail/visualComponents/icon/custom/ThreeGears'
import { TicketCorrelation } from '@monorail/visualComponents/icon/custom/TicketCorrelation'
import { Tie } from '@monorail/visualComponents/icon/custom/Tie'
import { Tools } from '@monorail/visualComponents/icon/custom/Tools'
import { Tracker } from '@monorail/visualComponents/icon/custom/Tracker'
import { TrackingItem } from '@monorail/visualComponents/icon/custom/TrackingItem'
import { TrashCanWithCheck } from '@monorail/visualComponents/icon/custom/TrashCanWithCheck'
import { TreasureChest } from '@monorail/visualComponents/icon/custom/TreasureChest'
import { UELogo } from '@monorail/visualComponents/icon/custom/UELogo'
import { Unscored } from '@monorail/visualComponents/icon/custom/Unscored'
import { Upload } from '@monorail/visualComponents/icon/custom/Upload'
import { VCenter } from '@monorail/visualComponents/icon/custom/VCenter'
import { VMTemplates } from '@monorail/visualComponents/icon/custom/VMTemplates'
import { Wand } from '@monorail/visualComponents/icon/custom/Wand'
import { CustomIconType } from '@monorail/visualComponents/icon/CustomIconType'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { Chickenlets } from '@monorail/visualComponents/illustrations/Chickenlets'
import { DnsOutline } from '@monorail/visualComponents/illustrations/DnsOutline'
import { GhostShrug } from '@monorail/visualComponents/illustrations/GhostShrug'
import { HappySun } from '@monorail/visualComponents/illustrations/HappySun'
import { MysteryMan } from '@monorail/visualComponents/illustrations/MysteryMan'
import { NoFaceCaptain } from '@monorail/visualComponents/illustrations/NoFaceCaptain'
import { NoFaceGlasses } from '@monorail/visualComponents/illustrations/NoFaceGlasses'
import { NoFaceHardHat } from '@monorail/visualComponents/illustrations/NoFaceHardHat'
import { NoFaceMonocle } from '@monorail/visualComponents/illustrations/NoFaceMonocle'
import { NoFaceNurse } from '@monorail/visualComponents/illustrations/NoFaceNurse'
import { NoFaceSupportPerson } from '@monorail/visualComponents/illustrations/NoFaceSupportPerson'
import { ShieldCheckered } from '@monorail/visualComponents/illustrations/ShieldCheckered'
import { ShieldKey } from '@monorail/visualComponents/illustrations/ShieldKey'
import { ShortSword } from '@monorail/visualComponents/illustrations/ShortSword'
import { Shrug } from '@monorail/visualComponents/illustrations/Shrug'
import { TargetEmpty } from '@monorail/visualComponents/illustrations/TargetEmpty'

import { InvertedInformation } from './custom/InvertedInformation'

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

// TODO: fix naming conventions - vs _
const customIcons: Record<CustomIconType, ComponentType<CustomIconProps>> = {
  '': _Nothing, // TODO: We should really try to remove this and discourage '' usage as an icon. Components that have an optional Icon should use optional props or an actual fp-ts `Option`
  'academy-app': Academy,
  'admin-app': Admin,
  'automated-attacks-app': AutomatedAttacks,
  'catalog-app': Catalog,
  'event-design-app': EventDesign,
  'events-app': Events,
  'externalLms-app': LMS,
  'hardhat-app': Catalog,
  'home-app': Home,
  'impact-app': Impact,
  'in-progress': InProgress,
  'in-progress-bypass': BypassInProgress,
  'loading-dots': LoadingDots,
  'my-org-app': MyOrg,
  'network-setup-app': NetworkSetup,
  'no-results': NoResults,
  'range-app': Range,
  'repo-app': Catalog,
  'reports-analytics-app': ReportsAnalytics,
  'techops-app': TechOps,
  'tracker-app': Tracker,
  'training-app': Academy,
  // 'dashboard-app': Dashboard,
  account_group: AccountGroup,
  account_tie: AccountTie,
  add_group: AddGroup,
  add_list: AddList,
  bam: Bam,
  bypass_ellipsis: BypassEllipsis,
  bypass_empty: BypassEmpty,
  bypass_error: BypassError,
  bypass_stopped: BypassStopped,
  bypass_success: BypassSuccess,
  bypass_waiting: BypassWaiting,
  calculator: Calculator,
  certificate: Certificate,
  check_gear: GearCheckmark,
  check_star: CheckStar,
  chevron_double_down: ChevronDoubleDown,
  chevron_double_left: ChevronDoubleLeft,
  chevron_double_right: ChevronDoubleRight,
  chevron_double_up: ChevronDoubleUp,
  chickenlets: Chickenlets,
  circle_arrow_left: CircleArrowLeft,
  circle_arrow_right: CircleArrowRight,
  clipboard: Clipboard,
  codeBlock: CodeBlock,
  copy: Copy,
  crown: Crown,
  cube: Cube,
  database: Database,
  dns_outline: DnsOutline,
  download: Download,
  education: Education,
  empty_syllabus_list: EmptySyllabusList,
  errorRobot: ErrorRobot,
  essay_answered: EssayAnswered,
  essay_default: EssayDefault,
  event_logs: EventLogs,
  eye_closed: EyeClosed,
  eye_open: EyeOpen,
  fights_off: FightsOff,
  fights_on: FightsOn,
  file_tree: FileTree,
  filter: Filter,
  gauge: Gauge,
  ghost_empty: GhostEmpty,
  ghost_shrug: GhostShrug,
  ghost_vm: GhostVm,
  grade: Grade,
  group_square: GroupSquare,
  h1: H1,
  h2: H2,
  happy_sun: HappySun,
  hourglass_half: HourglassHalf,
  in_progress: InProgress,
  info_outline: InfoOutline,
  information: Information,
  information_task_add_blue: InformationTaskAddBlue,
  information_task_add_grey: InformationTaskAddGrey,
  inverted_information: InvertedInformation,
  live: Live,
  logo_mono: LogoMono,
  mitre: Mitre,
  my_team: MyTeam,
  mystery_man: MysteryMan,
  network_impact: NetworkImpact,
  no_face_captain: NoFaceCaptain,
  no_face_glasses: NoFaceGlasses,
  no_face_hard_hat: NoFaceHardHat,
  no_face_monocle: NoFaceMonocle,
  no_face_nurse: NoFaceNurse,
  no_face_support_person: NoFaceSupportPerson,
  no_users: NoUsers,
  org_group: OrgGroup,
  package_variant: PackageVariant,
  people_gear: PeopleGear,
  person_gear: PersonGear,
  person_search: PersonSearch,
  profile: Profile,
  puppet: Puppet,
  puppet_outline: PuppetOutline,
  puzzle: Puzzle,
  question_mark: QuestionMark,
  question_task_add_blue: QuestionTaskAddBlue,
  question_task_add_grey: QuestionTaskAddGrey,
  restore_from_trash: RestoreFromTrash,
  ribbon: Ribbon,
  robot: Robot,
  rocket: Rocket,
  self_enroll: SelfEnroll,
  server_network: ServerNetwork,
  shield_checkered: ShieldCheckered,
  shield_key: ShieldKey,
  shoes: Shoes,
  short_sword: ShortSword,
  shrug: Shrug,
  site_map: SiteMap,
  sort_ascending: SortAscending,
  sort_descending: SortDescending,
  square: Square,
  star_filled: StarFilled,
  star_half: StarHalf,
  star_outline: StarOutline,
  strikethrough: Strikethrough,
  supervised_user_circle: SupervisedUserCircle,
  switch: Switch,
  sword: Sword,
  target: Target,
  target_archery: TargetArchery,
  target_empty: TargetEmpty,
  temporary: Temporary,
  telescope: Telescope,
  ticket_correlation: TicketCorrelation,
  trash_can_with_check: TrashCanWithCheck,
  threeGears: ThreeGears,
  tie: Tie,
  tools: Tools,
  tracking_item: TrackingItem,
  treasure_chest: TreasureChest,
  ue_logo: UELogo,
  unscored: Unscored,
  upload: Upload,
  vcenter: VCenter,
  vmtemplates: VMTemplates,
  wand: Wand,
}

export const Icon = styled(
  forwardRef<HTMLElement, IconProps>(
    ({ cssOverrides: _cssOverrides, icon, ...otherProps }, ref) => {
      const CustomIcon = customIcons[icon as CustomIconType] // Cast b/c `icon` is of type IconType, not CustomIconType

      if (CustomIcon) {
        // TODO: Forward ref to custom icon.. but all those SVG components need to be wrapped in forwardRef! -_-
        return <CustomIcon {...otherProps} />
      }

      return (
        <i ref={ref} className="material-icons" {...otherProps}>
          {icon}
        </i>
      )
    },
  ),
)<IconProps>(
  ({ size, color, cssOverrides }) => css`
    ${size
      ? css`
          font-size: ${size}px;
        `
      : css`
          font-size: 16px;
        `};
    ${color
      ? css`
          color: ${getColor(color)};
        `
      : // TODO: This is invalid CSS, but I'm afraid to fix it since it changes the default of every icon. Currently
        // instead it is defaulting to black
        css`
          color${getColor(Colors.Gray54)};
        `};
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
  icon: IconType
  onClick?: OnClick
  size?: number
  /**
   * NOTE: `title` does not work for custom icons unless the custom icon handles
   * it specifically. See `TrackingItem` for an example.
   */
  title?: string
  color?: Colors
}

export type CustomIconProps = Omit<IconProps, 'icon'>
