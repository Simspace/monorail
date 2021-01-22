"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDropdownCustomSkin = exports.useDropdownSkin = exports.DropdownSkin = exports.ItemContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _downshift = _interopRequireDefault(require("downshift"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _exports = require("../../helpers/exports");

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _PortalController = require("../../metaComponents/portal/PortalController");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _inputTypes = require("../inputs/inputTypes");

var _Label = require("../inputs/Label");

var _StdErr = require("../inputs/StdErr");

var _Menu = require("../menu/Menu");

var _DropdownItem = require("./DropdownItem");

var _render = require("./render");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "skin__DropdownWrapper",
  componentId: "uzu9ln-0"
})(["", " min-height:25px;flex:1;"], (0, _exports.flexFlow)('column'));

const DropdownContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "skin__DropdownContainer",
  componentId: "uzu9ln-1"
})(({
  disabled,
  error
}) => (0, _styledComponents.css)(["", ";", ";", ";flex:1;position:relative;width:100%;min-height:24px;", " ", ";"], (0, _exports.borderRadius)(_exports.BorderRadius.Small), (0, _exports.flexFlow)('column'), (0, _exports.typographyFont)(400, _exports.FontSizes.Title5), error && (0, _styledComponents.css)(["", ";input{background:inherit;", ";}"], _exports.baseErrorBackgroundStyles, _exports.baseErrorBorderStyles), disabled && _exports.baseDisabledStyles));

const HandlerContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "skin__HandlerContainer",
  componentId: "uzu9ln-2"
})(["", ";border-radius:inherit;flex:1;pointer-events:auto;position:relative;width:100%;"], (0, _exports.flexFlow)('column'));

const MenuContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "skin__MenuContainer",
  componentId: "uzu9ln-3"
})(["height:100%;overflow:auto;"]);

const ItemContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "skin__ItemContainer",
  componentId: "uzu9ln-4"
})([""]);

exports.ItemContainer = ItemContainer;

var _StyledMenu = /*#__PURE__*/(0, _styledComponents.default)(_Menu.Menu).withConfig({
  displayName: "skin___StyledMenu",
  componentId: "uzu9ln-5"
})(["", "{padding:0;}"], _Menu.MenuContent);

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "skin___StyledDiv",
  componentId: "uzu9ln-6"
})(["position:absolute;left:0;top:100%;"]);

const DropdownSkin = ({
  skin,
  state,
  render
}) => {
  /** Menu references **/
  const [menuTarget, setMenuTarget] = (0, _react.useState)();
  const menuRef = (0, _react.useRef)(null);
  /* eslint-disable react-hooks/exhaustive-deps */

  (0, _react.useLayoutEffect)(() => {
    if (menuRef && menuRef.current) {
      setMenuTarget(menuRef.current);
    }
  }, [menuRef.current]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const {
    items,
    downshiftProps
  } = state;
  const {
    disabled,
    error,
    label,
    required,
    display,
    clearable
  } = skin;

  const renderHandler = () => {
    const {
      getInputProps,
      itemToString,
      selectedItem,
      toggleMenu
    } = downshiftProps;
    const {
      interaction,
      placeholder
    } = skin;
    const dropdownValue = (0, _pipeable.pipe)(O.fromNullable(selectedItem), O.map(itemToString), O.toUndefined);
    const inputOptions = {
      disabled,
      placeholder,
      onKeyDown: interaction.eventHandler(state),
      onClick: () => toggleMenu({
        type: _downshift.default.stateChangeTypes.clickButton,
        highlightedIndex: (0, _pipeable.pipe)(O.fromNullable(selectedItem), O.fold(() => -1, item => items.indexOf(item)))
      })
    };
    const handlerProps = { ...getInputProps(inputOptions),
      display
    };
    return /*#__PURE__*/_react.default.createElement(HandlerContainer, {
      ref: menuRef
    }, /*#__PURE__*/_react.default.createElement("select", {
      disabled: disabled || display === _inputTypes.DisplayType.View,
      required: required,
      value: (0, _pipeable.pipe)(O.fromNullable(selectedItem), O.map(itemToString), O.toUndefined),
      style: {
        position: 'absolute',
        bottom: 0,
        left: 4,
        opacity: 0
      },
      tabIndex: -1
    }, dropdownValue && /*#__PURE__*/_react.default.createElement("option", {
      value: dropdownValue,
      key: 1
    })), /*#__PURE__*/_react.default.createElement(render.handler, {
      downshiftProps,
      handlerProps,
      clearable
    }));
  };

  const renderList = () => {
    const {
      parser
    } = skin;
    const {
      getItemProps,
      highlightedIndex,
      selectedItem,
      itemToString
    } = downshiftProps;
    const ListComponent = (0, _typeGuards.isUndefined)(render.list) ? _react.default.Fragment : render.list;
    return /*#__PURE__*/_react.default.createElement(ListComponent, {
      items: items,
      parser: parser,
      downshiftProps: downshiftProps
    }, items.map((item, index) => {
      const itemProps = {
        item,
        disabled: !parser.isActive(item),
        highlighted: highlightedIndex === index,
        selected: (0, _pipeable.pipe)(O.fromNullable(selectedItem), O.fold(() => false, parser.compare(item)))
      };
      const itemDownshiftProps = getItemProps({ ...itemProps,
        index
      });
      return /*#__PURE__*/_react.default.createElement(ItemContainer, _extends({
        key: `item-${index}`
      }, itemDownshiftProps), /*#__PURE__*/_react.default.createElement(render.item, itemProps, itemToString(item)));
    }));
  };

  const renderMenu = () => {
    const {
      isOpen,
      getMenuProps,
      toggleMenu
    } = downshiftProps;
    const {
      extraWidth = 0
    } = skin;
    const menuProps = getMenuProps();
    const position = menuTarget ? (0, _PopOver.getOverlayPosition)({
      target: menuTarget
    }) : _PopOver.defaultPopOverPosition;
    const width = menuTarget ? menuTarget.getBoundingClientRect().width + extraWidth : 0;
    return /*#__PURE__*/_react.default.createElement("div", menuProps, /*#__PURE__*/_react.default.createElement(_PortalController.PortalController, {
      isRendered: isOpen
    }, /*#__PURE__*/_react.default.createElement(_StyledMenu, {
      isOpen: isOpen,
      position: position,
      togglePopOver: () => toggleMenu({
        type: _downshift.default.stateChangeTypes.keyDownEscape,
        inputValue: ''
      }),
      closingAnimationCompleted: () => {},
      onClick: () => {},
      width: width
    }, /*#__PURE__*/_react.default.createElement(MenuContainer, null, items.length > 0 ? renderList() : /*#__PURE__*/_react.default.createElement(_DropdownItem.DropdownItem, {
      selected: false,
      highlighted: false,
      disabled: true
    }, "No results")))));
  };

  const renderError = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, error && (0, _pipeable.pipe)(error, O.fold(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), msg => /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement(_StdErr.StdErr, {
    err: true,
    msg: msg
  })))));

  return /*#__PURE__*/_react.default.createElement(DropdownWrapper, null, label && /*#__PURE__*/_react.default.createElement(_Label.Label, {
    label: label,
    required: required,
    err: !(0, _typeGuards.isUndefined)(error) && O.isSome(error),
    display: display
  }), /*#__PURE__*/_react.default.createElement(DropdownContainer, {
    disabled: !!disabled,
    error: !(0, _typeGuards.isUndefined)(error) && O.isSome(error)
  }, renderHandler(), !disabled && renderMenu(), renderError()));
};

exports.DropdownSkin = DropdownSkin;

const createDropdownSkin = render => skin => state => /*#__PURE__*/_react.default.createElement(DropdownSkin, {
  render: render,
  state: state,
  skin: skin
});

const useDropdownSkin = skin => createDropdownSkin((0, _render.createDefaultDropdownRender)())(skin);

exports.useDropdownSkin = useDropdownSkin;

const createDropdownCustomSkin = render => createDropdownSkin({ ...(0, _render.createDefaultDropdownRender)(),
  ...render
});

exports.createDropdownCustomSkin = createDropdownCustomSkin;