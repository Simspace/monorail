"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileStatus = void 0;
let TileStatus;
exports.TileStatus = TileStatus;

(function (TileStatus) {
  TileStatus["Ready"] = "ready";
  TileStatus["NotReady"] = "notReady";
  TileStatus["Unassigned"] = "unassigned";
  TileStatus["Warning"] = "warning";
  TileStatus["Empty"] = "empty";
})(TileStatus || (exports.TileStatus = TileStatus = {}));