"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.DropdownContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _downshift = _interopRequireDefault(require("downshift"));

var _function = require("fp-ts/lib/function");

var _Option = require("fp-ts/lib/Option");

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _inputTypes = require("../inputs/inputTypes");

var _behavior = require("./behavior");

var _interaction = require("./interaction");

var _parsers = require("./parsers");

var _skin = require("./skin");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownContainer = _styledComponents.default.div(({
  cssOverrides
}) => (0, _styledComponents.css)`
    ${(0, _exports.flexFlow)('column')};
    ${(0, _exports.typographyFont)(400, _exports.FontSizes.Title5)};

    position: relative;
    width: 256px;
    max-width: 100%;
    ${cssOverrides}
  `);

exports.DropdownContainer = DropdownContainer;

const createKeyboardInteractionDefault = parser => (0, _interaction.createKeyboardInteraction)()(parser);

const Dropdown = ({
  label,
  placeholder = 'Select',
  disabled = false,
  clearable = true,
  extraWidth = 0,
  items: collection,
  value,
  onChange,
  triggerOnAllSelections = false,
  behavior = _behavior.useAsFilter,
  skin = _skin.useDropdownSkin,
  parser = _parsers.createDropdownTypeParser,
  interaction = createKeyboardInteractionDefault,
  error,
  required,
  display = _inputTypes.DisplayType.Edit,
  cssOverrides,
  ...domProps
}) => {
  /** Controllers **/
  const parserController = parser();
  const interactionController = interaction(parserController);
  const behaviorController = behavior(collection, parserController);
  /** Selected Dropdown Item **/

  const [selectedDropdownItem, setSelectedDropdownItem, selectedItemChanged] = (0, _behavior.useControlledDropdown)({
    value,
    collection,
    parser: parserController
  });
  const skinController = skin({
    parser: parserController,
    interaction: interactionController,
    disabled,
    clearable,
    placeholder,
    error,
    required,
    label,
    display,
    extraWidth
  });

  const onChangeHandler = (item, downshiftProps) => {
    setSelectedDropdownItem((0, _Option.fromNullable)(item));
    onChange && onChange(item, downshiftProps);
  }; // Base Downshift state reducer


  const reduceStateBase = () => changes => {
    switch (changes.type) {
      case _downshift.default.stateChangeTypes.clickButton:
      case _downshift.default.stateChangeTypes.clickItem:
        return { ...changes,
          inputValue: ''
        };

      case _downshift.default.stateChangeTypes.mouseUp:
        return {
          type: changes.type,
          inputValue: '',
          isOpen: false
        };

      default:
        return changes;
    }
  };

  const stateReducer = (state, changes) => (0, _function.pipe)(changes, reduceStateBase(state), behaviorController.stateReducer(state), interactionController.stateReducer(state));

  return /*#__PURE__*/_react.default.createElement(_downshift.default, _extends({}, behaviorController.downshiftProps, {
    selectedItem: (0, _Option.toNullable)(selectedDropdownItem),
    itemToString: parserController.label // onChange only triggers on value CHANGES, onSelect triggers no matter which value is chosen
    ,
    onChange: !triggerOnAllSelections ? onChangeHandler : undefined,
    onSelect: triggerOnAllSelections ? onChangeHandler : undefined,
    selectedItemChanged: selectedItemChanged,
    stateReducer: stateReducer
  }), downshiftProps => {
    const {
      getRootProps,
      inputValue
    } = downshiftProps;
    const rootProps = getRootProps();
    return /*#__PURE__*/_react.default.createElement(DropdownContainer, _extends({
      cssOverrides: cssOverrides
    }, domProps, rootProps), skinController({
      items: behaviorController.getItems(inputValue || ''),
      downshiftProps
    }));
  });
};

exports.Dropdown = Dropdown;