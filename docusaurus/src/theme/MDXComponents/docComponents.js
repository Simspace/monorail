/* Doc Components */
import {
  CardSlide,
  FullSlide,
  FullWidth,
  SlideOne,
  SlideTwo,
  SlideThree,
  CardOne,
  CardTwo,
  CardThree,
} from '../../../docs/docComponents/CarouselStyles'
import {
  dropdownItems,
  getTeamIcon,
  customItemTypeRender,
  customItemTypeSkin,
  renderDropdownHandler,
  renderDropdownItem,
  sortItemType,
  CollectionDropdownContainer,
  CollectionDropdownLeft,
  CollectionDropdownRight,
} from '../../../docs/docComponents/DropdownDoc'
import {
  exampleSteps,
  exampleStepsWithSubtitles,
  exampleStepsWithDisabled,
  exampleStepsWithIcons,
  ControlledStepper,
} from '../../../docs/docComponents/StepperDoc'
import { TYPE_OPTIONS } from '../../../docs/docComponents/InputsDoc'
import {
  AccordionContent,
  accordionDummyData,
} from '../../../docs/docComponents/AccordionDoc'
import { TagInputContent } from '../../../docs/docComponents/TagInputDoc'
import { TileAsIndividual } from '../../../docs/docComponents/TileDoc'
import { ToggleController } from '../../../docs/docComponents/ToggleDoc'
import {
  mockData,
  TreeListController,
  TreeListContainer,
  TreeRowContainer,
} from '../../../docs/docComponents/TreeListDoc'
import {
  searchFilter,
  renderCard,
  columns,
  data,
} from '../../../docs/docComponents/CollectionPageDoc'

export const DocComponents = {
  // Carousel
  CardSlide,
  FullSlide,
  FullWidth,
  SlideOne,
  SlideTwo,
  SlideThree,
  CardOne,
  CardTwo,
  CardThree,
  // Collection Page
  searchFilter,
  renderCard,
  columns,
  data,
  // Dropdown
  dropdownItems,
  customItemTypeRender,
  customItemTypeSkin,
  getTeamIcon,
  renderDropdownHandler,
  renderDropdownItem,
  sortItemType,
  CollectionDropdownContainer,
  CollectionDropdownLeft,
  CollectionDropdownRight,
  // Stepper
  exampleSteps,
  exampleStepsWithSubtitles,
  exampleStepsWithDisabled,
  exampleStepsWithIcons,
  ControlledStepper,
  // Inputs
  TYPE_OPTIONS,
  // Accordion
  accordionDummyData,
  AccordionContent,
  // Tag Input
  TagInputContent,
  // Tile
  TileAsIndividual,
  // Toggle
  ToggleController,
  // Tree List
  mockData,
  TreeListController,
  TreeListContainer,
  TreeRowContainer,
}
