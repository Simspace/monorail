import React, { ReactType } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Omit } from 'typelevel-ts';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { ButtonProps } from '@monorail/visualComponents/buttons/Button';
import { ButtonDisplay, ButtonSize, IconButtonShape } from '@monorail/visualComponents/buttons/buttonTypes';
export declare const StyledIconButton: import("styled-components").StyledComponent<FCwDP<import("../../types").CommonComponentType & import("../../types").LinkProps & {
    passedAs?: "symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
}, {
    iconLeft: string;
    iconRight: string;
} & {
    className: string;
    disabled: boolean;
    display: ButtonDisplay;
    isActive: boolean;
    mode: import("./buttonTypes").ButtonMode;
    onClick: import("./Button").OnClick;
    onMouseDown?: import("./Button").OnClick | undefined;
    onMouseUp?: import("./Button").OnClick | undefined;
    pressed: boolean;
    size: ButtonSize;
    status?: ((props: {
        style: React.CSSProperties;
    }) => React.ReactNode) | undefined;
    title?: string | undefined;
    type: "button" | "submit" | "reset";
}>, import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type Props = {
    icon: string;
    passedAs?: ReactType;
};
declare type DefaultProps = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
    shape: IconButtonShape;
    iconCss: SimpleInterpolation;
};
export declare type IconButtonProps = Props & DefaultProps & Pick<ButtonProps, 'status'>;
export declare const IconButton: FCwDP<Props, DefaultProps>;
export {};
