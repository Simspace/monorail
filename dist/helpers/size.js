"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = exports.sizes = void 0;
const sizes = {
  modals: {
    mini: {
      height: 360,
      width: 304
    }
  },
  menu: {
    width: 176
  },
  appSwitcher: {
    width: 376
  }
};
exports.sizes = sizes;
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