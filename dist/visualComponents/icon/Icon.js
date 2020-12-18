"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.MaterialIconFontFace = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _Nothing2 = require("./custom/_Nothing");

var _Academy = require("./custom/Academy");

var _AccountGroup = require("./custom/AccountGroup");

var _AccountTie = require("./custom/AccountTie");

var _AddGroup = require("./custom/AddGroup");

var _AddList = require("./custom/AddList");

var _Admin = require("./custom/Admin");

var _AutomatedAttacks = require("./custom/AutomatedAttacks");

var _Bam = require("./custom/Bam");

var _BypassEllipsis = require("./custom/BypassEllipsis");

var _BypassEmpty = require("./custom/BypassEmpty");

var _BypassError = require("./custom/BypassError");

var _BypassInProgress = require("./custom/BypassInProgress");

var _BypassStopped = require("./custom/BypassStopped");

var _BypassSuccess = require("./custom/BypassSuccess");

var _BypassWaiting = require("./custom/BypassWaiting");

var _Calculator = require("./custom/Calculator");

var _Catalog = require("./custom/Catalog");

var _Certificate = require("./custom/Certificate");

var _CheckStar = require("./custom/CheckStar");

var _ChevronDoubleDown = require("./custom/ChevronDoubleDown");

var _ChevronDoubleLeft = require("./custom/ChevronDoubleLeft");

var _ChevronDoubleRight = require("./custom/ChevronDoubleRight");

var _ChevronDoubleUp = require("./custom/ChevronDoubleUp");

var _CircleArrowLeft = require("./custom/CircleArrowLeft");

var _CircleArrowRight = require("./custom/CircleArrowRight");

var _Clipboard = require("./custom/Clipboard");

var _CodeBlock = require("./custom/CodeBlock");

var _Copy = require("./custom/Copy");

var _Crown = require("./custom/Crown");

var _Cube = require("./custom/Cube");

var _Database = require("./custom/Database");

var _Download = require("./custom/Download");

var _Education = require("./custom/Education");

var _EmptySyllabusList = require("./custom/EmptySyllabusList");

var _ErrorRobot = require("./custom/ErrorRobot");

var _EssayAnswered = require("./custom/EssayAnswered");

var _EssayDefault = require("./custom/EssayDefault");

var _EventDesign = require("./custom/EventDesign");

var _EventLogs = require("./custom/EventLogs");

var _Events = require("./custom/Events");

var _EyeClosed = require("./custom/EyeClosed");

var _EyeOpen = require("./custom/EyeOpen");

var _FightsOff = require("./custom/FightsOff");

var _FightsOn = require("./custom/FightsOn");

var _FileTree = require("./custom/FileTree");

var _Filter = require("./custom/Filter");

var _Gauge = require("./custom/Gauge");

var _GearCheckmark = require("./custom/GearCheckmark");

var _GhostEmpty = require("./custom/GhostEmpty");

var _GhostVm = require("./custom/GhostVm");

var _Grade = require("./custom/Grade");

var _GroupSquare = require("./custom/GroupSquare");

var _H = require("./custom/H1");

var _H2 = require("./custom/H2");

var _Home = require("./custom/Home");

var _HourglassHalf = require("./custom/HourglassHalf");

var _Impact = require("./custom/Impact");

var _InfoOutline = require("./custom/InfoOutline");

var _Information = require("./custom/Information");

var _InformationTaskAddBlue = require("./custom/InformationTaskAddBlue");

var _InformationTaskAddGrey = require("./custom/InformationTaskAddGrey");

var _InProgress = require("./custom/InProgress");

var _Live = require("./custom/Live");

var _LMS = require("./custom/LMS");

var _LoadingDots = require("./custom/LoadingDots");

var _LogoMono = require("./custom/LogoMono");

var _Mitre = require("./custom/Mitre");

var _MyOrg = require("./custom/MyOrg");

var _MyTeam = require("./custom/MyTeam");

var _NetworkImpact = require("./custom/NetworkImpact");

var _NetworkSetup = require("./custom/NetworkSetup");

var _NoResults = require("./custom/NoResults");

var _NoUsers = require("./custom/NoUsers");

var _OrgGroup = require("./custom/OrgGroup");

var _PackageVariant = require("./custom/PackageVariant");

var _PeopleGear = require("./custom/PeopleGear");

var _PersonGear = require("./custom/PersonGear");

var _PersonSearch = require("./custom/PersonSearch");

var _Profile = require("./custom/Profile");

var _Puppet = require("./custom/Puppet");

var _PuppetOutline = require("./custom/PuppetOutline");

var _Puzzle = require("./custom/Puzzle");

var _QuestionMark = require("./custom/QuestionMark");

var _QuestionTaskAddBlue = require("./custom/QuestionTaskAddBlue");

var _QuestionTaskAddGrey = require("./custom/QuestionTaskAddGrey");

var _Range = require("./custom/Range");

var _ReportsAnalytics = require("./custom/ReportsAnalytics");

var _RestoreFromTrash = require("./custom/RestoreFromTrash");

var _Robot = require("./custom/Robot");

var _Rocket = require("./custom/Rocket");

var _SelfEnroll = require("./custom/SelfEnroll");

var _ServerNetwork = require("./custom/ServerNetwork");

var _Shoes = require("./custom/Shoes");

var _SiteMap = require("./custom/SiteMap");

var _SortAscending = require("./custom/SortAscending");

var _SortDescending = require("./custom/SortDescending");

var _Square = require("./custom/Square");

var _StarFilled = require("./custom/StarFilled");

var _StarHalf = require("./custom/StarHalf");

var _StarOutline = require("./custom/StarOutline");

var _Strikethrough = require("./custom/Strikethrough");

var _Switch = require("./custom/Switch");

var _Sword = require("./custom/Sword");

var _Target = require("./custom/Target");

var _TargetArchery = require("./custom/TargetArchery");

var _TechOps = require("./custom/TechOps");

var _Telescope = require("./custom/Telescope");

var _Temporary = require("./custom/Temporary");

var _ThreeGears = require("./custom/ThreeGears");

var _Tie = require("./custom/Tie");

var _Tools = require("./custom/Tools");

var _Tracker = require("./custom/Tracker");

var _TrackingItem = require("./custom/TrackingItem");

var _TrashCanWithCheck = require("./custom/TrashCanWithCheck");

var _TreasureChest = require("./custom/TreasureChest");

var _UELogo = require("./custom/UELogo");

var _Unscored = require("./custom/Unscored");

var _Upload = require("./custom/Upload");

var _VCenter = require("./custom/VCenter");

var _VMTemplates = require("./custom/VMTemplates");

var _Wand = require("./custom/Wand");

var _Chickenlets = require("../illustrations/Chickenlets");

var _DnsOutline = require("../illustrations/DnsOutline");

var _GhostShrug = require("../illustrations/GhostShrug");

var _HappySun = require("../illustrations/HappySun");

var _MysteryMan = require("../illustrations/MysteryMan");

var _NoFaceCaptain = require("../illustrations/NoFaceCaptain");

var _NoFaceGlasses = require("../illustrations/NoFaceGlasses");

var _NoFaceHardHat = require("../illustrations/NoFaceHardHat");

var _NoFaceMonocle = require("../illustrations/NoFaceMonocle");

var _NoFaceNurse = require("../illustrations/NoFaceNurse");

var _NoFaceSupportPerson = require("../illustrations/NoFaceSupportPerson");

var _ShieldCheckered = require("../illustrations/ShieldCheckered");

var _ShieldKey = require("../illustrations/ShieldKey");

var _ShortSword = require("../illustrations/ShortSword");

var _Shrug = require("../illustrations/Shrug");

var _TargetEmpty = require("../illustrations/TargetEmpty");

var _InvertedInformation = require("./custom/InvertedInformation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// https://fonts.googleapis.com/icon?family=Material+Icons&style=baseline
const MaterialIconFontFace = /*#__PURE__*/(0, _styledComponents.createGlobalStyle)`
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
`; // TODO: fix naming conventions - vs _

exports.MaterialIconFontFace = MaterialIconFontFace;
const customIcons = {
  '': _Nothing2._Nothing,
  // TODO: We should really try to remove this and discourage '' usage as an icon. Components that have an optional Icon should use optional props or an actual fp-ts `Option`
  'academy-app': _Academy.Academy,
  'admin-app': _Admin.Admin,
  'automated-attacks-app': _AutomatedAttacks.AutomatedAttacks,
  'catalog-app': _Catalog.Catalog,
  'event-design-app': _EventDesign.EventDesign,
  'events-app': _Events.Events,
  'externalLms-app': _LMS.LMS,
  'hardhat-app': _Catalog.Catalog,
  'home-app': _Home.Home,
  'impact-app': _Impact.Impact,
  'in-progress': _InProgress.InProgress,
  'in-progress-bypass': _BypassInProgress.BypassInProgress,
  'loading-dots': _LoadingDots.LoadingDots,
  'my-org-app': _MyOrg.MyOrg,
  'network-setup-app': _NetworkSetup.NetworkSetup,
  'no-results': _NoResults.NoResults,
  'range-app': _Range.Range,
  'repo-app': _Catalog.Catalog,
  'reports-analytics-app': _ReportsAnalytics.ReportsAnalytics,
  'techops-app': _TechOps.TechOps,
  'tracker-app': _Tracker.Tracker,
  'training-app': _Academy.Academy,
  // 'dashboard-app': Dashboard,
  account_group: _AccountGroup.AccountGroup,
  account_tie: _AccountTie.AccountTie,
  add_group: _AddGroup.AddGroup,
  add_list: _AddList.AddList,
  bam: _Bam.Bam,
  bypass_ellipsis: _BypassEllipsis.BypassEllipsis,
  bypass_empty: _BypassEmpty.BypassEmpty,
  bypass_error: _BypassError.BypassError,
  bypass_stopped: _BypassStopped.BypassStopped,
  bypass_success: _BypassSuccess.BypassSuccess,
  bypass_waiting: _BypassWaiting.BypassWaiting,
  calculator: _Calculator.Calculator,
  certificate: _Certificate.Certificate,
  check_gear: _GearCheckmark.GearCheckmark,
  check_star: _CheckStar.CheckStar,
  chevron_double_down: _ChevronDoubleDown.ChevronDoubleDown,
  chevron_double_left: _ChevronDoubleLeft.ChevronDoubleLeft,
  chevron_double_right: _ChevronDoubleRight.ChevronDoubleRight,
  chevron_double_up: _ChevronDoubleUp.ChevronDoubleUp,
  chickenlets: _Chickenlets.Chickenlets,
  circle_arrow_left: _CircleArrowLeft.CircleArrowLeft,
  circle_arrow_right: _CircleArrowRight.CircleArrowRight,
  clipboard: _Clipboard.Clipboard,
  codeBlock: _CodeBlock.CodeBlock,
  copy: _Copy.Copy,
  crown: _Crown.Crown,
  cube: _Cube.Cube,
  database: _Database.Database,
  dns_outline: _DnsOutline.DnsOutline,
  download: _Download.Download,
  education: _Education.Education,
  empty_syllabus_list: _EmptySyllabusList.EmptySyllabusList,
  errorRobot: _ErrorRobot.ErrorRobot,
  essay_answered: _EssayAnswered.EssayAnswered,
  essay_default: _EssayDefault.EssayDefault,
  event_logs: _EventLogs.EventLogs,
  eye_closed: _EyeClosed.EyeClosed,
  eye_open: _EyeOpen.EyeOpen,
  fights_off: _FightsOff.FightsOff,
  fights_on: _FightsOn.FightsOn,
  file_tree: _FileTree.FileTree,
  filter: _Filter.Filter,
  gauge: _Gauge.Gauge,
  ghost_empty: _GhostEmpty.GhostEmpty,
  ghost_shrug: _GhostShrug.GhostShrug,
  ghost_vm: _GhostVm.GhostVm,
  grade: _Grade.Grade,
  group_square: _GroupSquare.GroupSquare,
  h1: _H.H1,
  h2: _H2.H2,
  happy_sun: _HappySun.HappySun,
  hourglass_half: _HourglassHalf.HourglassHalf,
  in_progress: _InProgress.InProgress,
  info_outline: _InfoOutline.InfoOutline,
  information: _Information.Information,
  information_task_add_blue: _InformationTaskAddBlue.InformationTaskAddBlue,
  information_task_add_grey: _InformationTaskAddGrey.InformationTaskAddGrey,
  inverted_information: _InvertedInformation.InvertedInformation,
  live: _Live.Live,
  logo_mono: _LogoMono.LogoMono,
  mitre: _Mitre.Mitre,
  my_team: _MyTeam.MyTeam,
  mystery_man: _MysteryMan.MysteryMan,
  network_impact: _NetworkImpact.NetworkImpact,
  no_face_captain: _NoFaceCaptain.NoFaceCaptain,
  no_face_glasses: _NoFaceGlasses.NoFaceGlasses,
  no_face_hard_hat: _NoFaceHardHat.NoFaceHardHat,
  no_face_monocle: _NoFaceMonocle.NoFaceMonocle,
  no_face_nurse: _NoFaceNurse.NoFaceNurse,
  no_face_support_person: _NoFaceSupportPerson.NoFaceSupportPerson,
  no_users: _NoUsers.NoUsers,
  org_group: _OrgGroup.OrgGroup,
  package_variant: _PackageVariant.PackageVariant,
  people_gear: _PeopleGear.PeopleGear,
  person_gear: _PersonGear.PersonGear,
  person_search: _PersonSearch.PersonSearch,
  profile: _Profile.Profile,
  puppet: _Puppet.Puppet,
  puppet_outline: _PuppetOutline.PuppetOutline,
  puzzle: _Puzzle.Puzzle,
  question_mark: _QuestionMark.QuestionMark,
  question_task_add_blue: _QuestionTaskAddBlue.QuestionTaskAddBlue,
  question_task_add_grey: _QuestionTaskAddGrey.QuestionTaskAddGrey,
  restore_from_trash: _RestoreFromTrash.RestoreFromTrash,
  robot: _Robot.Robot,
  rocket: _Rocket.Rocket,
  self_enroll: _SelfEnroll.SelfEnroll,
  server_network: _ServerNetwork.ServerNetwork,
  shield_checkered: _ShieldCheckered.ShieldCheckered,
  shield_key: _ShieldKey.ShieldKey,
  shoes: _Shoes.Shoes,
  short_sword: _ShortSword.ShortSword,
  shrug: _Shrug.Shrug,
  site_map: _SiteMap.SiteMap,
  sort_ascending: _SortAscending.SortAscending,
  sort_descending: _SortDescending.SortDescending,
  square: _Square.Square,
  star_filled: _StarFilled.StarFilled,
  star_half: _StarHalf.StarHalf,
  star_outline: _StarOutline.StarOutline,
  strikethrough: _Strikethrough.Strikethrough,
  switch: _Switch.Switch,
  sword: _Sword.Sword,
  target: _Target.Target,
  target_archery: _TargetArchery.TargetArchery,
  target_empty: _TargetEmpty.TargetEmpty,
  temporary: _Temporary.Temporary,
  telescope: _Telescope.Telescope,
  trash_can_with_check: _TrashCanWithCheck.TrashCanWithCheck,
  threeGears: _ThreeGears.ThreeGears,
  tie: _Tie.Tie,
  tools: _Tools.Tools,
  tracking_item: _TrackingItem.TrackingItem,
  treasure_chest: _TreasureChest.TreasureChest,
  ue_logo: _UELogo.UELogo,
  unscored: _Unscored.Unscored,
  upload: _Upload.Upload,
  vcenter: _VCenter.VCenter,
  vmtemplates: _VMTemplates.VMTemplates,
  wand: _Wand.Wand
};
const Icon = /*#__PURE__*/(0, _styledComponents.default)( /*#__PURE__*/(0, _react.forwardRef)(({
  cssOverrides: _cssOverrides,
  icon,
  ...otherProps
}, ref) => {
  const CustomIcon = customIcons[icon]; // Cast b/c `icon` is of type IconType, not CustomIconType

  if (CustomIcon) {
    // TODO: Forward ref to custom icon.. but all those SVG components need to be wrapped in forwardRef! -_-
    return /*#__PURE__*/_react.default.createElement(CustomIcon, otherProps);
  }

  return /*#__PURE__*/_react.default.createElement("i", _extends({
    ref: ref,
    className: "material-icons"
  }, otherProps), icon);
})).withConfig({
  displayName: "Icon",
  componentId: "sc-1f9fjf5-0"
})(({
  size,
  color,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";direction:ltr;display:inline-block;fill:currentColor;flex-shrink:0;font-family:'Material Icons';font-style:normal;font-weight:normal;height:1em;letter-spacing:normal;line-height:1;text-transform:none;user-select:none;white-space:nowrap;width:1em;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga';", ";"], size ? (0, _styledComponents.css)(["font-size:", "px;"], size) : (0, _styledComponents.css)(["font-size:16px;"]), color ? (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(color)) : // TODO: This is invalid CSS, but I'm afraid to fix it since it changes the default of every icon. Currently
// instead it is defaulting to black
(0, _styledComponents.css)(["color", ";"], (0, _exports.getColor)(_exports.Colors.Gray54)), cssOverrides));
exports.Icon = Icon;