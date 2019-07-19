"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.Item = exports.isDropdownItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _downshift = _interopRequireDefault(require("downshift"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _Portal = require("../../metaComponents/portal/Portal");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _TextField = require("../inputs/TextField");

var _Menu = require("../menu/Menu");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// DropdownItemType Typeguard
const isDropdownItem = item => (0, _typeGuards.hasKey)(item, 'value') && (0, _typeGuards.hasKey)(item, 'label');

exports.isDropdownItem = isDropdownItem;

const DropdownContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Dropdown__DropdownContainer",
  componentId: "f8qt0h-0"
})(["", ";position:relative;width:100%;"], (0, _exports.typography)(400, _exports.FontSizes.Title5));

const RootContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Dropdown__RootContainer",
  componentId: "f8qt0h-1"
})(({
  disabled
}) => (0, _styledComponents2.css)(["", ";", ";", ";margin:auto;position:relative;", ""], (0, _exports.borderRadius)(_exports.BorderRadius.Large), (0, _exports.flexFlow)('row'), (0, _exports.typography)(400, _exports.FontSizes.Title5), disabled && _exports.baseDisabledStyles));

const TextFieldStyles = (searching = false) => (0, _styledComponents2.css)(["border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0;input{", " border-radius:inherit;cursor:pointer;}", "{bottom:50%;margin-bottom:-0.5em;}"], !searching && 'text-indent: -100vw;', _Icon.Icon);

const HandlerContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Dropdown__HandlerContainer",
  componentId: "f8qt0h-2"
})(["border-radius:inherit;display:block;pointer-events:auto;position:relative;width:100%;"]);

const MenuContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Dropdown__MenuContainer",
  componentId: "f8qt0h-3"
})(["height:100%;overflow:auto;"]);

const ItemContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Dropdown__ItemContainer",
  componentId: "f8qt0h-4"
})([""]);

const Handler =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Dropdown__Handler",
  componentId: "f8qt0h-5"
})(["min-height:1rem;padding:4px 30px 4px 8px;pointer-events:none;position:relative;"]);

const Item =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Dropdown__Item",
  componentId: "f8qt0h-6"
})(({
  selected,
  highlighted,
  disabled
}) => (0, _styledComponents2.css)(["position:relative;cursor:pointer;display:block;text-align:left;line-height:1em;font-size:11px;padding:8px;", ";"], disabled ? (0, _styledComponents2.css)(["cursor:default;opacity:0.24;"]) : (0, _styledComponents2.css)(["", ";", ";", ";"], highlighted && (0, _styledComponents2.css)(["background:", ";"], (0, _exports.getColor)(_exports.Colors.Black24, 0.16)), selected && (0, _styledComponents2.css)(["background:", ";"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.2)), highlighted && selected && (0, _styledComponents2.css)(["background:", ";"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.24)))));

exports.Item = Item;

const getKeyboardMoveDelta = key => {
  switch (key) {
    case 'ArrowLeft':
    case 'PageUp':
      return -10;

    case 'ArrowRight':
    case 'PageDown':
      return 10;

    case 'ArrowUp':
      return -1;

    case 'ArrowDown':
      return 1;

    default:
      return 0;
  }
};

const getKeyboardMoveIndex = (key, initial, max) => {
  switch (key) {
    case 'Home':
      return 0;

    case 'End':
      return max;

    default:
      return initial + getKeyboardMoveDelta(key);
  }
};

const getNewHighlightedIndex = (key, initial, max) => {
  const index = getKeyboardMoveIndex(key, initial, max);
  return index < 0 ? 0 : index >= max ? max : index;
};

const getMenuWidth = element => {
  return element.getBoundingClientRect().width;
};
/** Partial definitions to Solve Downshift typing */


class Dropdown extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      keyboardEventTime: 0
    };
    this.inputRef = (0, _react.createRef)();
    this.menuRef = (0, _react.createRef)();

    this.getItemByValue = () => {
      const {
        items,
        value
      } = this.props;
      return items.find(item => this.getDropdownItem(item).value === value);
    };

    this.getDropdownItem = item => {
      const {
        itemToDropdownType
      } = this.props;

      if (item) {
        if (itemToDropdownType) {
          return itemToDropdownType(item);
        } else if (isDropdownItem(item)) {
          return item;
        }
      }

      return {
        value: String(item),
        label: String(item),
        disabled: false
      };
    };

    this.isActiveItem = item => !this.getDropdownItem(item).disabled;

    this.matchItemByLabel = (item, text) => {
      const itemProps = this.getDropdownItem(item);
      const label = itemProps.label.trim().toLowerCase();
      return label.indexOf(text.trim().toLowerCase()) === 0;
    };

    this.matchItem = text => item => (this.props.matchItem || this.matchItemByLabel)(item, text);

    this.getItems = (text = '') => {
      const {
        items,
        searchable
      } = this.props;
      return searchable && !(0, _typeGuards.isEmptyString)(text) ? items.filter(this.matchItem(text)) : items;
    };

    this.getIndexToHighlight = (textValue, items) => {
      const activeItems = items.filter(this.isActiveItem);
      const activeIndex = activeItems.findIndex(item => this.matchItemByLabel(item, textValue));
      return activeIndex >= 0 && activeItems.length !== items.length ? items.indexOf(activeItems[activeIndex]) : activeIndex;
    };

    this.handleNonSearchInputChange = (state, changes) => {
      const {
        keyboardEventTime
      } = this.state;
      const eventTime = Date.now();
      const timeout = eventTime - keyboardEventTime > 750; // Debounce key interaction

      const textValue = changes.inputValue ? changes.inputValue.slice(timeout ? -1 : 0) : '';
      const newChanges = { ...changes,
        isOpen: state.isOpen,
        inputValue: textValue
      };

      if (!(0, _typeGuards.isEmptyString)(textValue)) {
        const items = this.getItems();
        const indexValue = this.getIndexToHighlight(textValue, items);

        if (indexValue >= 0) {
          if (state.isOpen) {
            newChanges.highlightedIndex = indexValue;
          } else {
            newChanges.selectedItem = items[indexValue];
          }
        }
      }

      this.setState(() => ({
        keyboardEventTime: eventTime
      }));
      return newChanges;
    };

    this.setDefaultHighlightedIndex = (inputValue, downshiftProps) => {
      const {
        selectedItem,
        setHighlightedIndex
      } = downshiftProps;
      const items = this.getItems(inputValue);
      const selectedIndex = selectedItem ? items.indexOf(selectedItem) : -1;
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : items.findIndex(this.isActiveItem));
    };

    this.onSearchInputChange = (inputValue, downshiftProps) => {
      if (this.props.searchable && downshiftProps.isOpen) {
        this.setDefaultHighlightedIndex(inputValue, downshiftProps);
      }
    };

    this.stateReducer = (state, changes) => {
      const {
        searchable
      } = this.props;

      switch (changes.type) {
        case _downshift.default.stateChangeTypes.blurInput:
        case _downshift.default.stateChangeTypes.keyDownEscape:
        case _downshift.default.stateChangeTypes.keyDownEnter:
        case _downshift.default.stateChangeTypes.clickButton:
        case _downshift.default.stateChangeTypes.clickItem:
          return { ...changes,
            inputValue: ''
          };

        case _downshift.default.stateChangeTypes.changeInput:
          if (searchable) {
            return { ...changes,
              highlightedIndex: state.highlightedIndex
            };
          } else {
            return this.handleNonSearchInputChange(state, changes);
          }

        default:
          break;
      }

      return changes;
    };

    this.getActiveIndex = (activeItems, items, downshiftProps) => {
      const {
        highlightedIndex,
        selectedItem
      } = downshiftProps;

      if (!(0, _typeGuards.isNil)(highlightedIndex) && highlightedIndex >= 0) {
        return activeItems.indexOf(items[highlightedIndex]);
      } else if (selectedItem) {
        return activeItems.indexOf(selectedItem);
      } else {
        return -1;
      }
    };

    this.cursorInteraction = (key, items, downshiftProps) => {
      const {
        isOpen,
        setHighlightedIndex,
        selectItem
      } = downshiftProps;
      const activeItems = (isOpen ? items : this.props.items).filter(this.isActiveItem);
      const indexValue = getNewHighlightedIndex(key, this.getActiveIndex(activeItems, items, downshiftProps), activeItems.length - 1);

      if (isOpen) {
        setHighlightedIndex(items.indexOf(activeItems[indexValue]));
      } else {
        selectItem(activeItems[indexValue], {
          inputValue: '',
          isOpen: false
        });
      }
    };

    this.onKeyDownHandler = (items, downshiftProps) => event => {
      const {
        highlightedIndex,
        isOpen,
        selectHighlightedItem,
        selectedItem,
        toggleMenu
      } = downshiftProps;

      switch (event.key) {
        case 'Enter':
          if (isOpen) {
            if (!(0, _typeGuards.isNil)(highlightedIndex)) {
              selectHighlightedItem({
                inputValue: ''
              });
            }
          } else {
            toggleMenu({
              type: _downshift.default.stateChangeTypes.keyDownEnter,
              highlightedIndex: selectedItem && items.indexOf(selectedItem),
              inputValue: ''
            });
          }

          event.preventDownshiftDefault = true;
          break;

        case 'Home':
        case 'End':
        case 'PageDown':
        case 'PageUp':
        case 'ArrowUp':
        case 'ArrowDown':
          // Update Highlighted item
          event.preventDownshiftDefault = true;
          event.preventDefault();
          this.cursorInteraction(event.key, items, downshiftProps);
          break;

        default:
          return;
      }

      this.setState(() => ({
        keyboardEventTime: 0
      }));
    };

    this.renderDefaultHandler = downshiftProps => {
      const {
        itemToString,
        selectedItem
      } = downshiftProps;
      const {
        placeholder
      } = this.props;
      return selectedItem ? itemToString(selectedItem) : placeholder;
    };

    this.renderHandlerNode = (items, downshiftProps) => {
      const {
        getInputProps,
        isOpen,
        toggleMenu,
        selectedItem,
        inputValue
      } = downshiftProps;
      const {
        disabled,
        placeholder,
        searchable,
        renderHandler
      } = this.props;
      const searching = isOpen && searchable && !(0, _typeGuards.isEmptyString)(inputValue);
      const inputProps = {
        disabled,
        placeholder,
        onKeyDown: this.onKeyDownHandler(items, downshiftProps),
        onClick: () => {
          toggleMenu({
            type: _downshift.default.stateChangeTypes.clickButton,
            inputValue: ''
          });
        }
      };
      return _react.default.createElement(HandlerContainer, {
        ref: this.menuRef
      }, _react.default.createElement(_StyledTextField, _extends({}, getInputProps(inputProps), {
        disabled: disabled,
        iconLeft: searching ? 'search' : '',
        iconRight: !searching ? 'arrow_drop_down' : '',
        ref: this.inputRef,
        _css: TextFieldStyles(searching)
      })), _react.default.createElement(_StyledHandler, {
        _css2: (0, _exports.visible)(!searching)
      }, renderHandler ? renderHandler({
        item: selectedItem,
        placeholder,
        isOpen,
        disabled
      }) : this.renderDefaultHandler(downshiftProps)));
    };

    this.renderDefaultItem = props => _react.default.createElement(Item, {
      selected: props.selected,
      highlighted: props.highlighted,
      disabled: props.item.disabled
    }, props.item.label);

    this.renderItemsList = (items, downshiftProps) => {
      const {
        getItemProps,
        selectedItem,
        highlightedIndex
      } = downshiftProps;
      const {
        renderItem
      } = this.props;
      return items.map((item, index) => {
        const dropdownItem = this.getDropdownItem(item);
        const itemProps = getItemProps({
          item,
          index,
          key: `item-${index}`,
          disabled: dropdownItem.disabled
        });
        return _react.default.createElement(ItemContainer, itemProps, renderItem ? renderItem({
          item,
          selected: selectedItem === item,
          highlighted: highlightedIndex === index
        }) : this.renderDefaultItem({
          item: dropdownItem,
          selected: selectedItem === item,
          highlighted: highlightedIndex === index
        }));
      });
    };

    this.renderMenu = (items, downshiftProps) => {
      const {
        isOpen,
        getMenuProps,
        closeMenu,
        toggleMenu
      } = downshiftProps;
      const menuProps = getMenuProps();
      const position = this.menuRef.current ? (0, _PopOver.getOverlayPosition)(this.menuRef.current) : _PopOver.defaultPopOverPosition;
      const width = this.menuRef.current ? getMenuWidth(this.menuRef.current) : 0;
      return _react.default.createElement(_Portal.Portal, {
        document: document
      }, _react.default.createElement(_StyledMenu, {
        isOpen: isOpen,
        position: position,
        closingAnimationCompleted: closeMenu,
        togglePopOver: () => {
          toggleMenu({
            type: _downshift.default.stateChangeTypes.keyDownEscape,
            inputValue: ''
          });
        },
        width: width
      }, _react.default.createElement(MenuContainer, menuProps, items.length > 0 ? this.renderItemsList(items, downshiftProps) : _react.default.createElement(Item, {
        selected: false,
        highlighted: false,
        disabled: true
      }, "No results"))));
    };
  }

  render() {
    const {
      disabled,
      onChange,
      ...domProps
    } = this.props;
    return _react.default.createElement(DropdownContainer, domProps, _react.default.createElement(_downshift.default, {
      initialSelectedItem: this.getItemByValue(),
      itemToString: item => this.getDropdownItem(item).label,
      onChange: onChange,
      stateReducer: this.stateReducer,
      onInputValueChange: this.onSearchInputChange
    }, downshiftProps => {
      const {
        isOpen,
        getRootProps,
        inputValue
      } = downshiftProps;
      const items = this.getItems(isOpen ? inputValue || '' : '');
      return _react.default.createElement(RootContainer, _extends({}, getRootProps(), {
        disabled: disabled
      }), this.renderHandlerNode(items, downshiftProps), !disabled && this.renderMenu(items, downshiftProps));
    }));
  }

}

exports.Dropdown = Dropdown;
Dropdown.defaultProps = {
  placeholder: '...',
  disabled: false,
  searchable: true
};

var _StyledTextField = (0, _styledComponents.default)(_TextField.TextField)`${p => p._css}`;

var _StyledHandler = (0, _styledComponents.default)(Handler)`${p => p._css2}`;

var _StyledMenu = (0, _styledComponents.default)(_Menu.Menu)`${_Menu.MenuContent}{padding:0;}`;