"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = exports.HiddenSingleFileInput = exports.FileType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

var _Foldable = require("fp-ts/lib/Foldable");

var _Monoid = require("fp-ts/lib/Monoid");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FileUploadWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "FileUpload__FileUploadWrapper",
  componentId: "sc-1gjxkvs-0"
})(["", ";align-items:center;flex-grow:1;"], (0, _exports.flexFlow)('row'));

const FileName = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "FileUpload__FileName",
  componentId: "sc-1gjxkvs-1"
})(["margin:0 16px;"]); // This is not necessarily exhaustive for all file types;
// if you see a type not included here, please add it


let FileType; // [MM 2020-07-30] Convert a known file type from our finite definition to a
// valid "unique specifier" for use with the file input's `accept` field. This
// can be either a valid MIME type or a file extensions. See:
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers

exports.FileType = FileType;

(function (FileType) {
  FileType[FileType["AnyImage"] = 0] = "AnyImage";
  FileType[FileType["PNG"] = 1] = "PNG";
  FileType[FileType["JPG"] = 2] = "JPG";
  FileType[FileType["WordDoc"] = 3] = "WordDoc";
  FileType[FileType["PDF"] = 4] = "PDF";
  FileType[FileType["PlainText"] = 5] = "PlainText";
  FileType[FileType["VirtualAppliance"] = 6] = "VirtualAppliance";
  FileType[FileType["Yaml"] = 7] = "Yaml";
  FileType[FileType["Excel"] = 8] = "Excel";
  FileType[FileType["Json"] = 9] = "Json";
})(FileType || (exports.FileType = FileType = {}));

const fileTypeToAccept = f => {
  switch (f) {
    case FileType.AnyImage:
      return 'image/*';

    case FileType.PNG:
      return 'image/png';

    case FileType.JPG:
      return 'image/jpg,image/jpeg';

    case FileType.WordDoc:
      return '.doc,.docx';

    case FileType.PDF:
      return '.pdf';

    case FileType.PlainText:
      return 'text/plain';

    case FileType.VirtualAppliance:
      return '.ova';

    case FileType.Yaml:
      return '.yaml,.yml';

    case FileType.Excel:
      return '.xlsx';

    case FileType.Json:
      return '.json';
  }
};

const HiddenSingleFileInput = props => {
  const accept = (0, _typeGuards.isNonEmptyArray)(props.accept) ? (0, _pipeable.pipe)(props.accept, A.map(fileTypeToAccept), xs => (0, _Foldable.intercalate)(_Monoid.monoidString, A.array)(',', xs)) : undefined;
  return /*#__PURE__*/_react.default.createElement("input", {
    className: "deprecated-input",
    ref: props.inputRef,
    name: props.name,
    hidden: true,
    type: "file",
    accept: accept,
    required: props.required,
    onChange: e => (0, _pipeable.pipe)(O.fromNullable(e.target.files), O.chain(files => A.head(Array.from(files))), props.onChange) // This is needed to fire onChange() when the same file is selected as before
    ,
    onClick: e => e.currentTarget.value = ''
  });
};

exports.HiddenSingleFileInput = HiddenSingleFileInput;

const FileUpload = props => {
  // pulling out fieldType so it doesn't get passed to the html input
  const {
    label = 'Upload File',
    value,
    iconLeft,
    buttonType,
    showFilename = true,
    ...inputProps
  } = props;
  const ref = /*#__PURE__*/(0, _react.createRef)();
  return /*#__PURE__*/_react.default.createElement(FileUploadWrapper, null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    iconLeft: iconLeft,
    display: buttonType,
    onClick: () => {
      if (ref.current) {
        ref.current.click();
      }
    }
  }, label), showFilename && /*#__PURE__*/_react.default.createElement(FileName, null, (0, _typeGuards.isUndefined)(value) ? 'No file chosen' : value.name), value !== undefined && /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    icon: "close",
    size: _buttonTypes.ButtonSize.Default,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    onClick: () => props.onChange(O.none)
  }), /*#__PURE__*/_react.default.createElement(HiddenSingleFileInput, _extends({}, inputProps, {
    inputRef: ref
  })));
};

exports.FileUpload = FileUpload;