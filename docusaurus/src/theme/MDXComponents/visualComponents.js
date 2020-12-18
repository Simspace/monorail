import * as StyleHelpers from '@monorail/StyleHelpers'
import { Accordion } from '@monorail/visualComponents/accordion/Accordion'
import { ActionsMenu } from '@monorail/visualComponents/actionsMenu/ActionsMenu'
import { AlertBanner } from '@monorail/visualComponents/alertBanner/AlertBanner'
import { AlertModal } from '@monorail/visualComponents/alerts/AlertModal'
import { AppIcon } from '@monorail/visualComponents/appIcon/AppIcon'
import { ArrowButtons } from '@monorail/visualComponents/arrowButtons/ArrowButtons'
import { Avatar } from '@monorail/visualComponents/avatar/Avatar'
import { SimSpaceLogo } from '@monorail/visualComponents/brand/Logo'
import { LogoBox } from '@monorail/visualComponents/brand/LogoBox'
import { Button } from '@monorail/visualComponents/buttons/Button'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import {
  ButtonsBar,
  ToolbarsContainer,
} from '@monorail/visualComponents/buttonsBar/ButtonsBar'
import { BBCardBackground } from '@monorail/visualComponents/cards/Cards'
import { Carousel } from '@monorail/visualComponents/carousel/Carousel'
import {
  ChevronStep,
  ChevronStepper,
} from '@monorail/visualComponents/chevronStepper/ChevronStepper'
import { Collapsible } from '@monorail/visualComponents/collapsible/Collapsible'
import { CollapsibleTextInput } from '@monorail/visualComponents/collapsibleInput/CollapsibleTextInput'
import { CollectionView } from '@monorail/visualComponents/collection/Collection'
import { ContentCard } from '@monorail/visualComponents/contentCard/ContentCard'
import { TBodyInfiniteVirtualFixedSizeList } from '@monorail/visualComponents/dataTable/ReactTableComponents/TbodyComponent/TBodyInfiniteVirtualList'
import { TBodyVirtualFixedSizeList } from '@monorail/visualComponents/dataTable/ReactTableComponents/TbodyComponent/TBodyVirtualList'
import { Divider } from '@monorail/visualComponents/divider/Divider'
import { useAsSelect } from '@monorail/visualComponents/dropdown/behavior'
import {
  Dropdown,
  DropdownChangeHandler,
  DropdownProps,
} from '@monorail/visualComponents/dropdown/Dropdown'
import { DropdownItem } from '@monorail/visualComponents/dropdown/DropdownItem'
import { createKeyboardInteraction } from '@monorail/visualComponents/dropdown/interaction'
import { createCustomParser } from '@monorail/visualComponents/dropdown/parsers'
import {
  DropdownPlaceholder,
  DropdownRender,
  RenderHandlerProps,
  RenderItemProps,
  createCustomHandler,
} from '@monorail/visualComponents/dropdown/render'
import { createDropdownCustomSkin } from '@monorail/visualComponents/dropdown/skin'
import {
  EmptyState,
  EmptyStateSizes,
} from '@monorail/visualComponents/emptyState/EmptyState'
import { Header } from '@monorail/visualComponents/header/Header'
import { HyperLink } from '@monorail/visualComponents/hyperLink/HyperLink'
import { FramedIcon } from '@monorail/visualComponents/icon/FramedIcon'
// import { HorizontalStepper } from '@monorail/visualComponents/stepper/HorizontalStepper'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { MaterialIconFontFace } from '@monorail/visualComponents/icon/Icon'
/* Illustrations */
import { BrowseContentCatalog } from '@monorail/visualComponents/illustrations/BrowseContentCatalog'
import { Calendar } from '@monorail/visualComponents/illustrations/Calendar'
import { ContentCatalogTraining } from '@monorail/visualComponents/illustrations/ContentCatalogTraining'
import { DnsOutline } from '@monorail/visualComponents/illustrations/DnsOutline'
import { EmptyUpload } from '@monorail/visualComponents/illustrations/EmptyUpload'
import { GhostEmpty } from '@monorail/visualComponents/illustrations/GhostEmpty'
import { GhostShrug } from '@monorail/visualComponents/illustrations/GhostShrug'
import { HappySun } from '@monorail/visualComponents/illustrations/HappySun'
import { MysteryMan } from '@monorail/visualComponents/illustrations/MysteryMan'
import { NoFaceCaptain } from '@monorail/visualComponents/illustrations/NoFaceCaptain'
import { NoFaceGlasses } from '@monorail/visualComponents/illustrations/NoFaceGlasses'
import { NoFaceHardHat } from '@monorail/visualComponents/illustrations/NoFaceHardHat'
import { NoFaceMonocle } from '@monorail/visualComponents/illustrations/NoFaceMonocle'
import { NoFaceNurse } from '@monorail/visualComponents/illustrations/NoFaceNurse'
import { NoFaceSupportPerson } from '@monorail/visualComponents/illustrations/NoFaceSupportPerson'
import { PacMan } from '@monorail/visualComponents/illustrations/PacMan'
import { ShieldCheckered } from '@monorail/visualComponents/illustrations/ShieldCheckered'
import { ShieldKey } from '@monorail/visualComponents/illustrations/ShieldKey'
import { ShortSword } from '@monorail/visualComponents/illustrations/ShortSword'
import { Shrug } from '@monorail/visualComponents/illustrations/Shrug'
import { TargetEmpty } from '@monorail/visualComponents/illustrations/TargetEmpty'
import { Telescope } from '@monorail/visualComponents/illustrations/Telescope'

/* Inputs */
import { CheckboxSelect } from '@monorail/visualComponents/inputs/CheckboxSelect'
import { Choice } from '@monorail/visualComponents/inputs/Choice'
import {
  DateInputProps,
  TypedDatetime,
} from '@monorail/visualComponents/inputs/DateTime'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { RadioGroup } from '@monorail/visualComponents/inputs/RadioGroup'
import { Search } from '@monorail/visualComponents/inputs/Search'
import { SelectOption } from '@monorail/visualComponents/inputs/Select'
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr'
import { TagInput } from '@monorail/visualComponents/inputs/TagInput'
import { TextArea } from '@monorail/visualComponents/inputs/TextArea'
import { TextField } from '@monorail/visualComponents/inputs/TextField'
import { Section } from '@monorail/visualComponents/layout/Layout'
/* ------ */
import {
  ColumnLayout,
  EmptyLayoutList,
  LayoutContentWrapper,
  LayoutDetailHeader,
  LayoutOutline,
  OutlineActions,
  OutlineItemBaseType,
  OutlineListItem,
  RowLayout,
  useControlledList,
} from '@monorail/visualComponents/layout/LayoutOutline'
import {
  ListContainer,
  SimpleListItem,
} from '@monorail/visualComponents/list/List'
import { Loading } from '@monorail/visualComponents/loading/Loading'
import { Menu } from '@monorail/visualComponents/menu/Menu'
import { MiniModal } from '@monorail/visualComponents/modals/MiniModal'
import { MediumModal } from '@monorail/visualComponents/modals/MediumModal'
import { MediumLargeModal } from '@monorail/visualComponents/modals/MediumLargeModal'
import { LargeModal } from '@monorail/visualComponents/modals/LargeModal'
import { FullScreenModal } from '@monorail/visualComponents/modals/FullScreenModal'
import {
  BBModalContent,
  BBModalFooter,
} from '@monorail/visualComponents/modals/Modals'
import { SmallModal } from '@monorail/visualComponents/modals/SmallModal'
import { PageHeader } from '@monorail/visualComponents/pageHeader/PageHeader'
import { Fill, Rating, Size } from '@monorail/visualComponents/rating/Rating'
import { Status } from '@monorail/visualComponents/status/Status'
import {
  Step,
  Stepper,
  StepProps,
} from '@monorail/visualComponents/stepper/Stepper'
import { Tab } from '@monorail/visualComponents/tabs/Tab'
import { TabBar } from '@monorail/visualComponents/tabs/TabBar'
import {
  Tag,
  TagCircle,
  TagClose,
  TagIcon,
  TagIconClose,
  TagLabel,
} from '@monorail/visualComponents/tags/Tag'
import { Tile } from '@monorail/visualComponents/tile/Tile'
import { TileStatus } from '@monorail/visualComponents/tile/TileStatus'
import { Toast } from '@monorail/visualComponents/toast/Toast'
import { Toggle } from '@monorail/visualComponents/toggle/Toggle'
import { TooltipMonorail } from '@monorail/visualComponents/tooltips/Tooltip'
import {
  TreeRowToggleAndDepthLine,
  useTreeList,
} from '@monorail/visualComponents/treeList/TreeList'
import { Details } from '@monorail/visualComponents/typography/Details'
import { DetailsSize } from '@monorail/visualComponents/typography/detailsTypes'
import { SectionHeader } from '@monorail/visualComponents/typography/SectionHeader'
/* Typography */
import { Text } from '@monorail/visualComponents/typography/Text'
/* ---------- */

export const MonorailComponents = {
  ...StyleHelpers,
  ActionsMenu,
  AppIcon,
  AlertBanner,
  AlertModal,
  Avatar,
  Accordion,
  ArrowButtons,
  BBCardBackground,
  Button,
  ButtonsBar,
  // Calendar,
  Carousel,
  ChevronStepper,
  ChevronStep,
  Collapsible,
  CollapsibleTextInput,
  CollectionView,
  ContentCard,
  Divider,
  /* Dropdown */
  Dropdown,
  DropdownChangeHandler,
  DropdownProps,
  DropdownItem,
  createKeyboardInteraction,
  createCustomParser,
  DropdownPlaceholder,
  DropdownRender,
  RenderHandlerProps,
  RenderItemProps,
  createCustomHandler,
  useAsSelect,
  createDropdownCustomSkin,
  /* -------- */
  EmptyStateSizes,
  EmptyState,
  Header,
  // HorizontalStepper,
  HyperLink,
  IconButton,
  Icon,
  FramedIcon,
  /* Inputs */
  CheckboxSelect,
  Choice,
  DateInputProps,
  DisplayType,
  ErrorProps,
  RadioGroup,
  Search,
  SelectOption,
  TagInput,
  TextArea,
  TextField,
  TypedDatetime,
  /* ------ */
  /* LayoutOutline */
  ColumnLayout,
  EmptyLayoutList,
  LayoutContentWrapper,
  LayoutDetailHeader,
  LayoutOutline,
  OutlineActions,
  OutlineItemBaseType,
  OutlineListItem,
  RowLayout,
  useControlledList,
  /* ------------- */
  Loading,
  ListContainer,
  LogoBox,
  Menu,
  MiniModal,
  MediumModal,
  MediumLargeModal,
  FullScreenModal,
  LargeModal,
  BBModalContent,
  BBModalFooter,
  SmallModal,
  MaterialIconFontFace,
  /* Illustrations */
  BrowseContentCatalog,
  Calendar,
  ContentCatalogTraining,
  DnsOutline,
  EmptyUpload,
  GhostEmpty,
  GhostShrug,
  HappySun,
  MysteryMan,
  NoFaceCaptain,
  NoFaceGlasses,
  NoFaceHardHat,
  NoFaceMonocle,
  NoFaceNurse,
  NoFaceSupportPerson,
  PacMan,
  ShieldCheckered,
  ShieldKey,
  ShortSword,
  Shrug,
  TargetEmpty,
  Telescope,
  /* ------------- */
  PageHeader,
  Fill,
  Rating,
  Size,
  // -------
  Section,
  SimpleListItem,
  SimSpaceLogo,
  Status,
  Stepper,
  Step,
  StepProps,
  Tab,
  TabBar,
  Tag,
  TagIcon,
  TagCircle,
  TagLabel,
  TagClose,
  TagIconClose,
  Tile,
  TileStatus,
  Toast,
  Toggle,
  ToolbarsContainer,
  TooltipMonorail,
  /* Table */
  TBodyVirtualFixedSizeList,
  TBodyInfiniteVirtualFixedSizeList,
  /* TreeList */
  useTreeList,
  TreeRowToggleAndDepthLine,
  /* Typography */
  Text,
  Details,
  DetailsSize,
  SectionHeader,
}
