"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = exports.Div = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * The Div helper is a component that accepts `css` prop so we can easily inline CSS Objects with TypeScript support.
 * The `cssLoose` property offers a relaxed typing for arbitrary string keys (escape hatch, e.g. `& > #blah`)
 *
 * Usage:
 ```
  <Div
    cssOverrides={{ display: 'flex'}}
    cssLoose={{ '& > div': { display: 'flex' }}}
  />
 ```
 */
const Div =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "StyleHelpers__Div",
  componentId: "pyarqy-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";"], cssOverrides));

exports.Div = Div;

const Form =
/*#__PURE__*/
_styledComponents.default.form.withConfig({
  displayName: "StyleHelpers__Form",
  componentId: "pyarqy-1"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";"], cssOverrides));

exports.Form = Form;