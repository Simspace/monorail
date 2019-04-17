import styled, { css, } from 'styled-components';
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
export const Div = styled.div(({ cssOverrides }) => css `
      ${cssOverrides};
    `);
export const Form = styled.form(({ cssOverrides }) => css `
      ${cssOverrides};
    `);
//# sourceMappingURL=StyleHelpers.js.map