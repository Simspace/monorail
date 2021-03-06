"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultDropdownRender = exports.createCustomHandler = exports.DropdownPlaceholder = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _flex = require("../../helpers/flex");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _inputTypes = require("../inputs/inputTypes");

var _TextField = require("../inputs/TextField");

var _Text = require("../typography/Text");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _DropdownItem = require("./DropdownItem");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownPlaceholder = _styledComponents2.default.span`
  ${_exports.ellipsis};

  color: ${(0, _color.getColor)(_color.Colors.Black54a)};
  font-style: italic;
`;
exports.DropdownPlaceholder = DropdownPlaceholder;
const HandlerWrapper = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')}
  border-radius: inherit;
  flex: 1;
  min-height: 1rem;
  overflow: hidden;
  padding: 6px 30px 6px 8px;
  position: relative;
`;

const StyledHandler = _styledComponents2.default.div(({
  searching = false
}) => (0, _styledComponents2.css)`
    ${(0, _exports.visible)(!searching)}
    ${(0, _flex.flexFlow)('row')}
    ${_exports.ellipsis};

    align-items: center;
    flex: 1;
    pointer-events: none;
  `);

const TextFieldStyles = (searching = false) => (0, _styledComponents2.css)`
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;

  ${_TextField.IconsAndInputContainer} {
    border-radius: inherit;
  }

  input {
    ${!searching && 'text-indent: -100vw;'};
    padding-top: 3px; /* Fix dropdown bottom border being hidden. Padding comes from StyledInput in TextField */
    border-radius: inherit;
    cursor: pointer;
  }
`;

const List = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

const Item = ({
  children,
  disabled = false,
  highlighted = false,
  selected = false
}) => {
  return /*#__PURE__*/_react.default.createElement(_DropdownItem.DropdownItem, {
    selected: selected,
    highlighted: highlighted,
    disabled: disabled
  }, children);
};

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "render___StyledText",
  componentId: "tq4m77-0"
})(["", ""], p => p._css);

const renderHandlerLabelDefault = ({
  downshiftProps,
  handlerProps
}) => (0, _pipeable.pipe)(O.fromNullable(downshiftProps.selectedItem), O.fold(() => /*#__PURE__*/_react.default.createElement(DropdownPlaceholder, null, handlerProps.placeholder), item => /*#__PURE__*/_react.default.createElement(_StyledText, {
  noWrap: true,
  _css: 'font-size: inherit; font-family: inherit; font-weight: inherit'
}, downshiftProps.itemToString(item))));

var _StyledTextField = /*#__PURE__*/(0, _styledComponents.default)(_TextField.TextField).withConfig({
  displayName: "render___StyledTextField",
  componentId: "tq4m77-1"
})(["", ""], p => p._css2);

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "render___StyledIconButton",
  componentId: "tq4m77-2"
})(["margin:auto 0;"]);

const Handler = ({
  customRender = renderHandlerLabelDefault,
  downshiftProps,
  handlerProps,
  clearable = true
}) => {
  const inputRef = (0, _react.useRef)(null);
  const {
    display = _inputTypes.DisplayType.Edit,
    ...textFieldProps
  } = handlerProps;
  const {
    isOpen,
    inputValue
  } = downshiftProps;
  const searching = isOpen && !(0, _typeGuards.isEmptyString)(inputValue);
  return display === _inputTypes.DisplayType.Edit ? /*#__PURE__*/_react.default.createElement(HandlerWrapper, null, /*#__PURE__*/_react.default.createElement(_StyledTextField, _extends({}, textFieldProps, {
    htmlValidation: false,
    iconLeft: searching ? 'search' : '',
    iconRight: !searching ? 'arrow_drop_down' : '',
    ref: inputRef,
    hideStdErr: true,
    _css2: TextFieldStyles(searching)
  })), /*#__PURE__*/_react.default.createElement(StyledHandler, {
    searching: searching
  }, customRender({
    handlerProps,
    downshiftProps
  })), (0, _typeGuards.isNotNil)(downshiftProps.selectedItem) && clearable && /*#__PURE__*/_react.default.createElement(_StyledIconButton, {
    icon: "close",
    display: _buttonTypes.ButtonDisplay.Chromeless,
    size: _buttonTypes.ButtonSize.Dense,
    onClick: () => downshiftProps.clearSelection()
  })) : customRender({
    handlerProps,
    downshiftProps
  });
};

const createCustomHandler = (customRender = renderHandlerLabelDefault) => props => /*#__PURE__*/_react.default.createElement(Handler, _extends({}, props, {
  customRender: customRender
}));

exports.createCustomHandler = createCustomHandler;

const createDefaultDropdownRender = () => ({
  handler: Handler,
  item: Item,
  list: List
});

exports.createDefaultDropdownRender = createDefaultDropdownRender;