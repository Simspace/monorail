"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;
exports.DisplayType = void 0;
let DisplayType;
/**
 * Pattern match on a {@link DisplayType}
 *
 * usage example:
 *
 * ```jsx
 * const myDisplayType = DisplayType.Edit
 *
 *
 * <div>
 *   {match({
 *     Edit: () => <button>edit</button>,
 *     View: () => <a href="">view</a>
 *   })}
 * </div>
 * ```
 *
 * @param matchers an object of functions that will be invoked
 *                 for each view type
 */

exports.DisplayType = DisplayType;

(function (DisplayType) {
  DisplayType["Edit"] = "Edit";
  DisplayType["View"] = "View";
})(DisplayType || (exports.DisplayType = DisplayType = {}));

function match(matchers) {
  return d => d === DisplayType.Edit ? matchers.Edit() : matchers.View();
}