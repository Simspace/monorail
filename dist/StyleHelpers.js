"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = exports.Div = exports.styled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * TODO: Get rid of this. This was something Dan added that isn't correctly typed. Any references should be replaced
 * with styled<Props, 'div'>('div')
 */
const styled = tagName => (0, _styledComponents.default)(tagName);

exports.styled = styled;

/**
 * The Div helper is a component that accepts `css` prop so we can easily inline CSS Objects with TypeScript support.
 * The `cssLoose` property offers a relaxed typing for arbitrary string keys (escape hatch, e.g. `& > #blah`)
 *
 * Usage:
 ```
  <Div
    css={{ display: 'flex'}}
    cssLoose={{ '& > div': { display: 'flex' }}}
  />
 ```
 */
const Div = (0, _styledComponents.default)('div')`
  ${({
  css: cssOverrides
}) => cssOverrides}
`;
exports.Div = Div;
const Form = (0, _styledComponents.default)('form')`
  ${({
  css: cssOverrides
}) => cssOverrides}
`;
exports.Form = Form;