"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _downshift = _interopRequireDefault(require("downshift"));

var _Do = require("fp-ts-contrib/lib/Do");

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireWildcard(require("react"));

var _useDebounce = require("use-debounce");

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _Portal = require("../../metaComponents/portal/Portal");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _DropdownItem = require("./DropdownItem");

var _helpers = require("./helpers");

var _Icon = require("../icon/Icon");

var _TextField = require("../inputs/TextField");

var _Menu = require("../menu/Menu");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownContainer = _styledComponents2.default.div`
  ${(0, _exports.typography)(400, _exports.FontSizes.Title5)};

  position: relative;
  width: 256px;
  max-width: 100%;
`;

const RootContainer = _styledComponents2.default.div(({
  disabled
}) => _styledComponents2.css`
    ${(0, _exports.borderRadius)(_exports.BorderRadius.Large)};
    ${(0, _exports.flexFlow)('row')};
    ${(0, _exports.typography)(400, _exports.FontSizes.Title5)};

    margin: auto;
    position: relative;

    ${disabled && _exports.baseDisabledStyles}
  `);

const TextFieldStyles = (searching = false, err = false) => _styledComponents2.css`
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;

  input {
    ${err && _exports.baseErrorBackgroundStyles}
    ${err && _exports.baseErrorBorderStyles}
    ${!searching && 'text-indent: -100vw;'};

    border-radius: inherit;
    cursor: pointer;
  }

  ${_Icon.Icon} {
    bottom: 50%;
    margin-bottom: -0.5em;
  }
`;

const HandlerContainer = _styledComponents2.default.div`
  border-radius: inherit;
  display: block;
  pointer-events: auto;
  position: relative;
  width: 100%;
`;
const MenuContainer = _styledComponents2.default.div`
  height: 100%;
  overflow: auto;
`;
const ItemContainer = _styledComponents2.default.div``;
const Handler = _styledComponents2.default.div`
  min-height: 1rem;
  padding: 4px 30px 4px 8px;
  pointer-events: none;
  position: relative;
`;
/** Partial definitions to Solve Downshift typing */

var _StyledHandler =
/*#__PURE__*/
(0, _styledComponents.default)(Handler).withConfig({
  displayName: "Dropdown___StyledHandler",
  componentId: "f8qt0h-0"
})(["", ""], p => p._css2);

var _StyledTextField =
/*#__PURE__*/
(0, _styledComponents.default)(_TextField.TextField).withConfig({
  displayName: "Dropdown___StyledTextField",
  componentId: "f8qt0h-1"
})(["", ""], p => p._css);

var _StyledMenu =
/*#__PURE__*/
(0, _styledComponents.default)(_Menu.Menu).withConfig({
  displayName: "Dropdown___StyledMenu",
  componentId: "f8qt0h-2"
})(["", "{padding:0;}"], _Menu.MenuContent);

const Dropdown = ({
  searchable = false,
  placeholder = '...',
  disabled = false,
  items: collection,
  value,
  onChange,
  itemToDropdownType,
  matchItem,
  renderHandler,
  renderItem,
  err,
  ...domProps
}) => {
  const [inputText, setInputText] = (0, _react.useState)('');
  const [menuTarget, setMenuTarget] = (0, _react.useState)();
  const [clearInputTextDebounced] = (0, _useDebounce.useDebouncedCallback)(() => setInputText(''), 750);
  const inputRef = (0, _react.useRef)(null);
  const menuRef = (0, _react.useRef)(null);
  const getDropdownItem = (0, _react.useCallback)(item => itemToDropdownType ? itemToDropdownType(item) : (0, _helpers.parseAsDropdownItem)(item), [itemToDropdownType]);

  const dropdownItemToString = item => getDropdownItem(item).label;

  const matchItemByLabel = (0, _react.useCallback)((item, text) => {
    const itemProps = getDropdownItem(item);
    const label = itemProps.label.trim().toLowerCase();
    return label.includes(text.trim().toLowerCase());
  }, [getDropdownItem]);
  const matchItemCallback = (0, _react.useCallback)(text => item => (matchItem || matchItemByLabel)(item, text), [matchItem, matchItemByLabel]);
  const filteredItems = (0, _react.useMemo)(() => searchable ? collection.filter(matchItemCallback(inputText)) : collection, [searchable, collection, inputText, matchItemCallback]);
  const [selectedDropdownItem, setSelectedDropdownItem] = (0, _react.useState)(_Option.none);

  const shouldUpdateSelectedItem = item => (0, _Do.Do)(_Option.option).bind('newItem', item).bind('currentItem', selectedDropdownItem).return(({
    newItem,
    currentItem
  }) => getDropdownItem(newItem).value !== getDropdownItem(currentItem).value).getOrElse(true);

  const updateSelectedItem = (item, downshiftProps) => {
    const itemOption = (0, _Option.fromNullable)(item);

    if (shouldUpdateSelectedItem(itemOption)) {
      setSelectedDropdownItem(itemOption);

      if (onChange) {
        onChange(item, downshiftProps);
      }
    }
  };

  const updateInputText = text => {
    if (text !== inputText) {
      setInputText(text);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  (0, _react.useEffect)(() => {
    /*
     * We need to check if the value is in the collection,
     * or if the selectedItem is in the collection.
     */
    const updatedItem = (0, _Option.some)(value).alt(selectedDropdownItem.map(item => getDropdownItem(item).value)).mapNullable(val => collection.find(item => getDropdownItem(item).value === val));

    if (shouldUpdateSelectedItem(updatedItem)) {
      setSelectedDropdownItem(updatedItem);
    }
  }, [value, collection]);
  (0, _react.useLayoutEffect)(() => {
    if (menuRef && menuRef.current) {
      setMenuTarget(menuRef.current);
    }
  }, [menuRef.current]);
  /* eslint-enable react-hooks/exhaustive-deps */
  // Item handling

  const isActiveItem = item => !getDropdownItem(item).disabled;
  /** Handle keyboard input for non search dropdown */


  const setFilterHighlighted = ({
    setHighlightedIndex
  }) => {
    const items = filteredItems;
    const selectedIndex = selectedDropdownItem.map(item => items.indexOf(item)).getOrElse(-1);
    setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : items.findIndex(isActiveItem));
  };

  const getIndexToHighlight = (textValue, items) => {
    const activeItems = items.filter(isActiveItem);
    const index = activeItems.findIndex(matchItemCallback(textValue));
    return index >= 0 && activeItems.length !== items.length ? items.indexOf(activeItems[index]) : index;
  };

  const setSelectHighlighted = (inputValue, downshiftProps) => {
    const {
      isOpen,
      setHighlightedIndex
    } = downshiftProps;

    if (!(0, _typeGuards.isEmptyString)(inputValue)) {
      const index = getIndexToHighlight(inputValue, collection);

      if (index >= 0) {
        if (isOpen) {
          setHighlightedIndex(index);
        } else {
          updateSelectedItem(collection[index], downshiftProps);
        }
      }
    }
  };

  const onSearchInputChange = (inputValue = '', downshiftProps) => {
    if (searchable) {
      setFilterHighlighted(downshiftProps);
    } else {
      clearInputTextDebounced();
      setSelectHighlighted(inputValue, downshiftProps);
    }
  }; // Downshift state reducer


  const stateReducer = (state, changes) => {
    switch (changes.type) {
      case _downshift.default.stateChangeTypes.clickButton:
      case _downshift.default.stateChangeTypes.keyDownEnter:
        return { ...changes,
          inputValue: ''
        };

      case _downshift.default.stateChangeTypes.keyDownEscape:
      case _downshift.default.stateChangeTypes.blurInput:
      case _downshift.default.stateChangeTypes.mouseUp:
        return {
          inputValue: '',
          isOpen: false
        };

      case _downshift.default.stateChangeTypes.changeInput:
        return { ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: searchable || state.isOpen
        };

      default:
        return changes;
    }
  }; // Keyboard event handling and interaction


  const cursorInteraction = (key, items, downshiftProps) => {
    const {
      isOpen,
      setHighlightedIndex,
      selectItem
    } = downshiftProps;
    const activeItems = items.filter(isActiveItem);
    const indexValue = (0, _helpers.nextHighlightedIndex)(key, (0, _helpers.getHighlightedItem)(items, downshiftProps).alt(selectedDropdownItem).fold(-1, item => activeItems.indexOf(item)), activeItems.length - 1);

    if (isOpen) {
      setHighlightedIndex(items.indexOf(activeItems[indexValue]));
    } else {
      selectItem(activeItems[indexValue], {
        inputValue: '',
        isOpen: false
      });
    }
  };

  const onKeyDownHandler = (items, downshiftProps) => event => {
    const {
      isOpen,
      selectHighlightedItem,
      toggleMenu
    } = downshiftProps;

    switch (event.key) {
      case 'Enter':
        if (isOpen) {
          selectHighlightedItem({
            inputValue: ''
          });
        } else {
          toggleMenu({
            type: _downshift.default.stateChangeTypes.keyDownEnter,
            highlightedIndex: selectedDropdownItem.fold(-1, item => items.indexOf(item))
          });
          event.preventDownshiftDefault = true;
        }

        break;

      case 'Home':
      case 'End':
      case 'PageDown':
      case 'PageUp':
      case 'ArrowUp':
      case 'ArrowDown':
        // Update Highlighted item
        cursorInteraction(event.key, items, downshiftProps);
        event.preventDownshiftDefault = true;
        event.preventDefault();
        break;

      default:
        return;
    }
  };

  const renderDefaultHandler = downshiftProps => selectedDropdownItem.fold(placeholder, downshiftProps.itemToString);

  const renderHandlerNode = (items, downshiftProps) => {
    const {
      getInputProps,
      isOpen,
      toggleMenu,
      inputValue
    } = downshiftProps;
    const searching = isOpen && searchable && !(0, _typeGuards.isEmptyString)(inputValue);
    const inputProps = {
      disabled,
      placeholder,
      onKeyDown: onKeyDownHandler(items, downshiftProps),
      onClick: () => toggleMenu({
        type: _downshift.default.stateChangeTypes.clickButton,
        highlightedIndex: selectedDropdownItem.fold(-1, item => items.indexOf(item))
      })
    };
    return _react.default.createElement(HandlerContainer, {
      ref: menuRef
    }, _react.default.createElement(_StyledTextField, _extends({}, getInputProps(inputProps), {
      disabled: disabled,
      iconLeft: searching ? 'search' : '',
      iconRight: !searching ? 'arrow_drop_down' : '',
      ref: inputRef,
      hideStdErr: true,
      _css: TextFieldStyles(searching, err)
    })), _react.default.createElement(_StyledHandler, {
      _css2: (0, _exports.visible)(!searching)
    }, renderHandler ? renderHandler({
      item: selectedDropdownItem.toNullable(),
      placeholder,
      isOpen,
      disabled
    }) : renderDefaultHandler(downshiftProps)));
  };

  const renderDefaultItem = props => _react.default.createElement(_DropdownItem.DropdownItem, {
    selected: props.selected,
    highlighted: props.highlighted,
    disabled: props.item.disabled
  }, props.item.label);

  const RenderItemsList = ({
    items,
    downshiftProps
  }) => {
    const {
      getItemProps,
      highlightedIndex
    } = downshiftProps;
    const renderList = (0, _react.useCallback)(() => items.map((item, index) => {
      const dropdownItem = getDropdownItem(item);
      const itemProps = getItemProps({
        item,
        index,
        key: `item-${index}`,
        disabled: dropdownItem.disabled
      });
      const isSelected = selectedDropdownItem.exists(selected => selected === item);
      return _react.default.createElement(ItemContainer, itemProps, renderItem ? renderItem({
        item,
        selected: isSelected,
        highlighted: highlightedIndex === index
      }) : renderDefaultItem({
        item: dropdownItem,
        selected: isSelected,
        highlighted: highlightedIndex === index
      }));
    }), [items, highlightedIndex, getItemProps]);
    return _react.default.createElement(_react.default.Fragment, null, renderList());
  };

  const renderMenu = (items, downshiftProps) => {
    const {
      isOpen,
      getMenuProps,
      toggleMenu
    } = downshiftProps;
    const menuProps = getMenuProps();
    const position = menuTarget ? (0, _PopOver.getOverlayPosition)({
      target: menuTarget
    }) : _PopOver.defaultPopOverPosition;
    const width = menuTarget ? menuTarget.getBoundingClientRect().width : 0;
    return _react.default.createElement(_Portal.Portal, {
      document: document
    }, _react.default.createElement(_StyledMenu, {
      isOpen: isOpen,
      position: position,
      togglePopOver: () => toggleMenu({
        type: _downshift.default.stateChangeTypes.keyDownEscape
      }),
      width: width
    }, _react.default.createElement(MenuContainer, menuProps, isOpen ? items.length > 0 ? _react.default.createElement(RenderItemsList, {
      items: items,
      downshiftProps: downshiftProps
    }) : _react.default.createElement(_DropdownItem.DropdownItem, {
      selected: false,
      highlighted: false,
      disabled: true
    }, "No results") : _react.default.createElement(_react.default.Fragment, null))));
  };

  const onStateChange = (options, downshiftProps) => {
    switch (options.type) {
      case _downshift.default.stateChangeTypes.changeInput:
        if (options.inputValue) {
          onSearchInputChange(options.inputValue, downshiftProps);
        }

        break;

      default:
        break;
    }
  };

  return _react.default.createElement(DropdownContainer, domProps, _react.default.createElement(_downshift.default, {
    initialSelectedItem: selectedDropdownItem.toNullable(),
    inputValue: inputText,
    itemToString: dropdownItemToString,
    onChange: updateSelectedItem,
    stateReducer: stateReducer,
    onInputValueChange: updateInputText,
    onStateChange: onStateChange
  }, downshiftProps => {
    const {
      getRootProps
    } = downshiftProps;
    const items = filteredItems;
    return _react.default.createElement(RootContainer, _extends({}, getRootProps(), {
      disabled: disabled
    }), renderHandlerNode(items, downshiftProps), !disabled && renderMenu(items, downshiftProps));
  }));
};

exports.Dropdown = Dropdown;