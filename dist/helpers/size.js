"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageSizePadding = exports.pageSizeMargin = exports.sizes = exports.Sizes = void 0;

var _styledComponents = require("./styled-components");

let Sizes;
exports.Sizes = Sizes;

(function (Sizes) {
  Sizes[Sizes["DP8"] = 8] = "DP8";
  Sizes[Sizes["DP16"] = 16] = "DP16";
  Sizes[Sizes["DP24"] = 24] = "DP24";
  Sizes[Sizes["DP32"] = 32] = "DP32";
  Sizes[Sizes["DP40"] = 40] = "DP40";
  Sizes[Sizes["DP48"] = 48] = "DP48";
  Sizes[Sizes["DP56"] = 56] = "DP56";
  Sizes[Sizes["DP64"] = 64] = "DP64";
})(Sizes || (exports.Sizes = Sizes = {}));

const sizes = {
  modals: {
    mini: {
      height: 360,
      width: 304
    },
    medium: {
      width: 584
    }
  },
  menu: {
    width: 176
  },
  appSwitcher: {
    width: 376
  },
  page: {
    sideSpace: Sizes.DP32
  }
};
exports.sizes = sizes;

const pageSizeMargin = (params = {
  marginTop: 0,
  marginBottom: 0
}) => _styledComponents.css`
  ${({
  theme: {
    size: {
      page
    }
  }
}) => _styledComponents.css`
    max-width: ${page.width}px;
    margin: ${params.marginTop}px ${sizes.page.sideSpace}px
      ${params.marginBottom}px ${sizes.page.sideSpace}px;
  `};
`;

exports.pageSizeMargin = pageSizeMargin;

const pageSizePadding = (params = {
  paddingTop: 0,
  paddingBottom: 0
}) => _styledComponents.css`
  ${({
  theme: {
    size: {
      page
    }
  }
}) => _styledComponents.css`
    box-sizing: content-box;
    max-width: ${page.width}px;
    padding: ${params.paddingTop}px ${sizes.page.sideSpace}px
      ${params.paddingBottom}px ${sizes.page.sideSpace}px;
  `};
`;

exports.pageSizePadding = pageSizePadding;