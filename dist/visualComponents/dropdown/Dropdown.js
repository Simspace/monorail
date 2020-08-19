"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.DropdownContainer = void 0;

var _downshift = _interopRequireDefault(require("downshift"));

var _function = require("fp-ts/lib/function");

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _behavior = require("./behavior");

var _interaction = require("./interaction");

var _parsers = require("./parsers");

var _skin = require("./skin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownContainer = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('column')};
  ${(0, _exports.typographyFont)(400, _exports.FontSizes.Title5)};

  position: relative;
  width: 256px;
  max-width: 100%;
`;
exports.DropdownContainer = DropdownContainer;

const useKeyboardInteractionDefault = parser => (0, _interaction.useKeyboardInteraction)()(parser);

const Dropdown = ({
  label,
  placeholder = 'Select',
  disabled = false,
  clearable = true,
  items: collection,
  value,
  onChange,
  behavior = _behavior.useAsFilter,
  skin = _skin.useDropdownSkin,
  parser = _parsers.useDropdownTypeParser,
  interaction = useKeyboardInteractionDefault,
  error,
  required,
  display,
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
    display
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

  const stateReducer = (state, changes) => (0, _function.flow)(reduceStateBase(state), behaviorController.stateReducer(state), interactionController.stateReducer(state))(changes);

  return _react.default.createElement(_downshift.default, _extends({}, behaviorController.downshiftProps, {
    selectedItem: (0, _Option.toNullable)(selectedDropdownItem),
    itemToString: parserController.label,
    onChange: onChangeHandler,
    selectedItemChanged: selectedItemChanged,
    stateReducer: stateReducer
  }), downshiftProps => {
    const {
      getRootProps,
      inputValue
    } = downshiftProps;
    const rootProps = getRootProps();
    return _react.default.createElement(DropdownContainer, _extends({}, domProps, rootProps), skinController({
      items: behaviorController.getItems(inputValue || ''),
      downshiftProps
    }));
  });
};

exports.Dropdown = Dropdown;