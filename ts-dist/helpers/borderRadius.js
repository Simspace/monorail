import { css } from 'styled-components';
export var BorderRadius;
(function (BorderRadius) {
    BorderRadius[BorderRadius["Small"] = 3] = "Small";
    BorderRadius[BorderRadius["Medium"] = 4] = "Medium";
    BorderRadius[BorderRadius["Large"] = 6] = "Large";
    BorderRadius[BorderRadius["XLarge"] = 8] = "XLarge";
    BorderRadius[BorderRadius["Round"] = 1000] = "Round";
})(BorderRadius || (BorderRadius = {}));
export const borderRadius = (borderRadius2 = BorderRadius.Small) => css `
    border-radius: ${borderRadius2}px;
  `;
//# sourceMappingURL=borderRadius.js.map