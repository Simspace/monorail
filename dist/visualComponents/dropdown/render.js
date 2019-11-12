"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDefaultDropdownRender = exports.useCustomHandler = exports.DropdownPlaceholder = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Option = require("fp-ts/lib/Option");

var _react = _interopRequireWildcard(require("react"));

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _flex = require("../../helpers/flex");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _TextField = require("../inputs/TextField");

var _DropdownItem = require("./DropdownItem");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DropdownPlaceholder = _styledComponents2.default.span`
  ${_exports.ellipsis};

  color: ${(0, _color.getColor)(_color.Colors.Black54)};
  font-style: italic;
`;
exports.DropdownPlaceholder = DropdownPlaceholder;
const HandlerWrapper = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)('row')}
  border-radius: inherit;
  flex: 1;
  min-height: 1rem;
  overflow: hidden;
  padding: 4px 30px 4px 8px;
  position: relative;
`;

const StyledHandler = _styledComponents2.default.div(({
  searching = false
}) => _styledComponents2.css`
    ${(0, _exports.visible)(!searching)}
    ${(0, _flex.flexFlow)('row')}
    ${_exports.ellipsis};

    align-items: center;
    flex: 1;
    pointer-events: none;
  `);

const TextFieldStyles = (searching = false) => _styledComponents2.css`
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

    border-radius: inherit;
    cursor: pointer;
  }
`;

const List = ({
  children
}) => {
  return _react.default.createElement(_react.default.Fragment, null, children);
};

const Item = ({
  children,
  disabled = false,
  highlighted = false,
  selected = false
}) => {
  return _react.default.createElement(_DropdownItem.DropdownItem, {
    selected: selected,
    highlighted: highlighted,
    disabled: disabled
  }, children);
};

var _StyledSpan =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "render___StyledSpan",
  componentId: "tq4m77-0"
})(["", ""], _exports.ellipsis);

const renderHandlerLabelDefault = ({
  downshiftProps,
  handlerProps
}) => (0, _Option.fromNullable)(downshiftProps.selectedItem).fold(_react.default.createElement(DropdownPlaceholder, null, handlerProps.placeholder), item => _react.default.createElement(_StyledSpan, null, downshiftProps.itemToString(item)));

var _StyledTextField =
/*#__PURE__*/
(0, _styledComponents.default)(_TextField.TextField).withConfig({
  displayName: "render___StyledTextField",
  componentId: "tq4m77-1"
})(["", ""], p => p._css);

const Handler = ({
  customRender = renderHandlerLabelDefault,
  downshiftProps,
  handlerProps
}) => {
  const inputRef = (0, _react.useRef)(null);
  const {
    isOpen,
    inputValue
  } = downshiftProps;
  const searching = isOpen && !(0, _typeGuards.isEmptyString)(inputValue);
  return _react.default.createElement(HandlerWrapper, null, _react.default.createElement(_StyledTextField, _extends({}, handlerProps, {
    htmlValidation: false,
    iconLeft: searching ? 'search' : '',
    iconRight: !searching ? 'arrow_drop_down' : '',
    ref: inputRef,
    hideStdErr: true,
    _css: TextFieldStyles(searching)
  })), _react.default.createElement(StyledHandler, {
    searching: searching
  }, customRender({
    handlerProps,
    downshiftProps
  })));
};

const useCustomHandler = (customRender = renderHandlerLabelDefault) => props => _react.default.createElement(Handler, _extends({}, props, {
  customRender: customRender
}));

exports.useCustomHandler = useCustomHandler;

const useDefaultDropdownRender = () => ({
  handler: Handler,
  item: Item,
  list: List
});

exports.useDefaultDropdownRender = useDefaultDropdownRender;