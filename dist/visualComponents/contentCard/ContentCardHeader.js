"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentCardHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _exports = require("../../helpers/exports");

var _EmptyUpload = require("../illustrations/EmptyUpload");

var _matchers = require("../../sharedHelpers/matchers");

var _theme = require("../../helpers/theme");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _FileUpload = require("../inputs/FileUpload");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ButtonContainer = _styledComponents.default.div`
  ${(0, _exports.visible)(false)}
  ${(0, _exports.zIndex)(_exports.ZIndexNodeName.ContentCardButton)}
`;
const EmptyIcon = (0, _styledComponents.default)(_EmptyUpload.EmptyUpload)`
  fill: ${(0, _exports.getColor)(_exports.Colors.Gray24)};
`;

const HeaderImgContainer = _styledComponents.default.div(({
  editMode
}) => (0, _styledComponents.css)`
    ${(0, _exports.flexFlow)('column')}
    align-items: center;
    justify-content: center;
    background: #262885; /* TODO: Use Monorail color [GD-2020-06-25] */
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 144px;
    overflow: hidden;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${(0, _exports.getColor)(_exports.Colors.Black)};
      opacity: 0;
    }

    &:hover {
      ${ButtonContainer} {
        ${(0, _exports.visible)(true)}
      }

      ${EmptyIcon} {
        opacity: 0.4;
      }
    }

    ${editMode && `&:hover:before {
        opacity: 0.6;
      }
      `}
  `);

const HeaderImg = _styledComponents.default.div(({
  image
}) => (0, _styledComponents.css)`
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    height: 144px;
    width: 100%;
    flex-shrink: 0;
  `);

const CardActionButton = (0, _styledComponents.default)(_Button.Button).attrs(() => ({
  display: _buttonTypes.ButtonDisplay.Chromeless
}))`
  bottom: 60px;
  left: 40px;
  position: absolute;
  width: 176px;
`;

const EditImage = ({
  image,
  onImageChange,
  onRemoveImage
}) => {
  const imageInputRef = (0, _react.useRef)(null);

  const openFilePicker = () => {
    var _imageInputRef$curren;

    return (_imageInputRef$curren = imageInputRef.current) === null || _imageInputRef$curren === void 0 ? void 0 : _imageInputRef$curren.click();
  };

  const [icon, label, action] = (0, _matchers.matchI)(image)({
    empty: () => ['upload', 'Upload card image', openFilePicker],
    fallback: () => ['upload', 'Upload card image', openFilePicker],
    custom: () => ['delete', 'Remove card image', onRemoveImage]
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ButtonContainer, null, _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: t => ({ ...t,
      mode: _theme.Mode.Dark
    })
  }, _react.default.createElement(CardActionButton, {
    iconLeft: icon,
    onClick: action
  }, label))), (0, _matchers.matchI)(image)({
    empty: () => _react.default.createElement(EmptyIcon, null),
    fallback: () => _react.default.createElement(_react.default.Fragment, null),
    custom: () => _react.default.createElement(_react.default.Fragment, null)
  }), _react.default.createElement(_FileUpload.HiddenSingleFileInput, {
    accept: [_FileUpload.FileType.JPG, _FileUpload.FileType.PNG],
    inputRef: imageInputRef,
    onChange: onImageChange
  }));
};

const getImageUrl = props => (0, _matchers.matchOnI)('mode')(props)({
  view: p => p.image,
  edit: p => (0, _matchers.matchI)(p.image)({
    empty: () => O.none,
    fallback: x => O.some(x.path),
    custom: x => O.some(x.path)
  })
});

const ContentCardHeader = props => {
  return _react.default.createElement(HeaderImgContainer, {
    editMode: props.mode === 'edit'
  }, (0, _pipeable.pipe)(getImageUrl(props), O.fold(() => _react.default.createElement(_react.default.Fragment, null), i => _react.default.createElement(HeaderImg, {
    image: i
  }))), (0, _matchers.matchOnI)('mode')(props)({
    view: () => _react.default.createElement(_react.default.Fragment, null),
    edit: p => _react.default.createElement(EditImage, p)
  }));
};

exports.ContentCardHeader = ContentCardHeader;