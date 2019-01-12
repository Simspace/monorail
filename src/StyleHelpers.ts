import React from "react";
import { default as styledOrig, SimpleInterpolation } from "styled-components";

/**
 * TODO: Get rid of this. This was something Dan added that isn't correctly typed. Any references should be replaced
 * with styled<Props, 'div'>('div')
 */
export const styled = <P, E = HTMLDivElement>(
  tagName: string | React.ComponentType<P>
) => styledOrig<P & React.HTMLProps<E>, any>(tagName);

type DivProps = { css?: SimpleInterpolation };

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
export const Div = styledOrig<DivProps, "div">("div")`
  ${({ css: cssOverrides }) => cssOverrides}
`;
