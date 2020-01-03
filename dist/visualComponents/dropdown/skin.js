"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDropdownCustomSkin = exports.useDropdownSkin = exports.DropdownSkin = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _portal = _interopRequireDefault(require("@reach/portal"));

var _downshift = _interopRequireDefault(require("downshift"));

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Label = require("../inputs/Label");

var _StdErr = require("../inputs/StdErr");

var _Menu = require("../menu/Menu");

var _DropdownItem = require("./DropdownItem");

var _render = require("./render");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DropdownWrapper = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('column')}

  flex: 1;
`;

const DropdownContainer = _styledComponents2.default.div(({
  disabled,
  error
}) => _styledComponents2.css`
    ${(0, _exports.borderRadius)(_exports.BorderRadius.Large)};
    ${(0, _exports.flexFlow)('column')};
    ${(0, _exports.typography)(400, _exports.FontSizes.Title5)};

    flex: 1;
    position: relative;
    width: 100%;

    ${error && _styledComponents2.css`
        ${_exports.baseErrorBackgroundStyles};

        input {
          background: inherit;
          ${_exports.baseErrorBorderStyles};
        }
      `}

    ${disabled && _exports.baseDisabledStyles};
  `);

const HandlerContainer = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('column')};

  border-radius: inherit;
  flex: 1;
  pointer-events: auto;
  position: relative;
  width: 100%;
`;
const MenuContainer = _styledComponents2.default.div`
  height: 100%;
  overflow: auto;
`;
const ItemContainer = _styledComponents2.default.div``;

var _StyledMenu =
/*#__PURE__*/
(0, _styledComponents.default)(_Menu.Menu).withConfig({
  displayName: "skin___StyledMenu",
  componentId: "uzu9ln-0"
})(["", "{padding:0;}"], _Menu.MenuContent);

var _StyledDiv =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "skin___StyledDiv",
  componentId: "uzu9ln-1"
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
    const dropdownValue = (0, _Option.fromNullable)(selectedItem).map(itemToString).toUndefined();
    const inputOptions = {
      disabled,
      placeholder,
      onKeyDown: interaction.eventHandler(state),
      onClick: () => toggleMenu({
        type: _downshift.default.stateChangeTypes.clickButton,
        highlightedIndex: (0, _Option.fromNullable)(selectedItem).fold(-1, item => items.indexOf(item))
      })
    };
    const handlerProps = { ...getInputProps(inputOptions),
      display
    };
    return _react.default.createElement(HandlerContainer, {
      ref: menuRef
    }, _react.default.createElement("select", {
      required: required,
      value: (0, _Option.fromNullable)(selectedItem).map(itemToString).toUndefined(),
      style: {
        position: 'absolute',
        bottom: 0,
        left: 4,
        opacity: 0
      },
      tabIndex: -1
    }, dropdownValue && _react.default.createElement("option", {
      value: dropdownValue,
      key: 1
    })), _react.default.createElement(render.handler, {
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
    return _react.default.createElement(_react.default.Fragment, null, items.map((item, index) => {
      const itemProps = {
        item,
        disabled: !parser.isActive(item),
        highlighted: highlightedIndex === index,
        selected: (0, _Option.fromNullable)(selectedItem).fold(false, parser.compare(item))
      };
      const itemDownshiftProps = getItemProps({ ...itemProps,
        index,
        key: `item-${index}`
      });
      return _react.default.createElement(ItemContainer, itemDownshiftProps, _react.default.createElement(render.item, itemProps, itemToString(item)));
    }));
  };

  const renderMenu = () => {
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
    return _react.default.createElement("div", menuProps, isOpen && _react.default.createElement(_portal.default, null, _react.default.createElement(_StyledMenu, {
      isOpen: isOpen,
      position: position,
      togglePopOver: () => toggleMenu({
        type: _downshift.default.stateChangeTypes.keyDownEscape,
        inputValue: ''
      }),
      closingAnimationCompleted: () => {},
      onClick: () => {},
      width: width
    }, _react.default.createElement(MenuContainer, null, items.length > 0 ? renderList() : _react.default.createElement(_DropdownItem.DropdownItem, {
      selected: false,
      highlighted: false,
      disabled: true
    }, "No results")))));
  };

  const renderError = () => _react.default.createElement(_react.default.Fragment, null, error && error.fold(_react.default.createElement(_react.default.Fragment, null), msg => _react.default.createElement(_StyledDiv, null, _react.default.createElement(_StdErr.StdErr, {
    err: true,
    msg: msg
  }))));

  return _react.default.createElement(DropdownWrapper, null, label && _react.default.createElement(_Label.Label, {
    label: label,
    required: required,
    err: !(0, _typeGuards.isUndefined)(error) && error.isSome(),
    display: display
  }), _react.default.createElement(DropdownContainer, {
    disabled: !!disabled,
    error: !(0, _typeGuards.isUndefined)(error) && error.isSome()
  }, renderHandler(), !disabled && renderMenu(), renderError()));
};

exports.DropdownSkin = DropdownSkin;

const useDropdownHook = render => skin => state => _react.default.createElement(DropdownSkin, {
  render: render,
  state: state,
  skin: skin
});

const useDropdownSkin = skin => useDropdownHook((0, _render.useDefaultDropdownRender)())(skin);

exports.useDropdownSkin = useDropdownSkin;

const useDropdownCustomSkin = render => useDropdownHook({ ...(0, _render.useDefaultDropdownRender)(),
  ...render
});

exports.useDropdownCustomSkin = useDropdownCustomSkin;