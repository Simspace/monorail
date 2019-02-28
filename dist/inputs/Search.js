"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = exports.BBSearchInput = exports.BBSearchContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../../icon/Icon");

var _IconButton = require("../../buttons/IconButton");

var _CommonStyles = require("../../CommonStyles");

var _buttonTypes = require("../../buttons/buttonTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//
// Styles
//
const BBSearchIconPos = 3;
const BBSearchContainer = _styledComponents.default.label`
  ${({
  darkMode
}) => darkMode ? _styledComponents.css`
          background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.2)};
          border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.2)};

          &:hover {
            background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.22)};
          }

          &:focus {
            background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.24)};
          }
        ` : _styledComponents.css`
          border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.08)};

          &:hover {
            border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.5)};
          }

          &:focus {
            border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
          }
        `};

  ${(0, _CommonStyles.flexFlow)('row')};
  border-radius: 100px;
  box-sizing: border-box;
  overflow: hidden; /* So the child element (BBSearchInput) doesn't cut into BBSearchContainer's border */
  position: relative; /* position: relative; so that BBSearchIcon can be positioned absolute to this. */
  height: 24px;
  flex-shrink: 0;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.BBSearchContainer = BBSearchContainer;
const BBSearchIcon = (0, _styledComponents.default)(({
  darkMode,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))`
  color: ${({
  darkMode
}) => darkMode && (0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  left: 8px;
  pointer-events: none;
  position: absolute;
  top: ${BBSearchIconPos}px;
`;
const BBSearchInput = _styledComponents.default.input`
  ${({
  darkMode
}) => darkMode ? _styledComponents.css`
          background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.2)};
          border: 0;
          color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};

          ::placeholder {
            color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
          }

          &:hover {
            background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.22)};
          }

          &:focus {
            background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White, 0.24)};
          }
        ` : _styledComponents.css`
          border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.08)};

          ::placeholder {
            color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black54)};
            font-style: italic;
            font-weight: 300;
          }

          &:hover {
            border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue, 0.5)};
          }

          &:focus {
            border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
          }
        `};

  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
  border: 0;
  flex: 1 1 100%;
  height: 100%;
  outline: none;
  padding: 0 22px 0 28px;

  border-radius: 100px;
  box-sizing: border-box;

  ${_CommonStyles.buttonTransition};
`;
exports.BBSearchInput = BBSearchInput;

//
// Component
//
class Search extends _react.Component {
  render() {
    const {
      css: overrideCss,
      darkMode,
      onChange,
      placeholder = 'Search',
      value,
      onClick,
      searchRef
    } = this.props;
    return _react.default.createElement(BBSearchContainer, {
      css: overrideCss,
      darkMode: darkMode
    }, _react.default.createElement(BBSearchIcon, {
      icon: "search_icon",
      darkMode: darkMode
    }), _react.default.createElement(BBSearchInput, {
      className: "new-input",
      darkMode: darkMode,
      onChange: event => {
        onChange(event.currentTarget.value, event);
      },
      placeholder: placeholder,
      type: "text",
      value: value,
      onClick: onClick,
      ref: searchRef
    }), _react.default.createElement(_IconButton.IconButton, {
      display: _buttonTypes.IconButtonDisplay.Circle,
      shape: _buttonTypes.IconButtonShape.Circle,
      css: _styledComponents.css`
            ${(0, _CommonStyles.visible)(!!value)};

            position: absolute;
            top: ${BBSearchIconPos}px;
            right: ${BBSearchIconPos}px;
          `,
      size: _buttonTypes.ButtonSize.Dense,
      icon: "close",
      onClick: event => {
        event.preventDefault();
        onChange('');
      }
    }));
  }

}

exports.Search = Search;
Search.defaultProps = {
  darkMode: false,
  placeholder: 'Search'
};