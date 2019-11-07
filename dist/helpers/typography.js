"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gothamFontFamily = exports.shortHandDeconstruction = exports.typographyMargin = exports.typography = exports.FontSizes = exports.FontWeights = exports.ellipsis = void 0;

var _styledComponents = require("styled-components");

const ellipsis =
/*#__PURE__*/
(0, _styledComponents.css)(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
exports.ellipsis = ellipsis;
let FontWeights;
exports.FontWeights = FontWeights;

(function (FontWeights) {
  FontWeights[FontWeights["ExtraLight"] = 200] = "ExtraLight";
  FontWeights[FontWeights["Light"] = 300] = "Light";
  FontWeights[FontWeights["Book"] = 400] = "Book";
  FontWeights[FontWeights["Medium"] = 500] = "Medium";
  FontWeights[FontWeights["Bold"] = 700] = "Bold";
  FontWeights[FontWeights["Black"] = 800] = "Black";
})(FontWeights || (exports.FontWeights = FontWeights = {}));

let FontSizes;
exports.FontSizes = FontSizes;

(function (FontSizes) {
  FontSizes["Hyper1"] = "hyper1";
  FontSizes["Hyper2"] = "hyper2";
  FontSizes["Hyper3"] = "hyper3";
  FontSizes["Hyper4"] = "hyper4";
  FontSizes["Title1"] = "title1";
  FontSizes["Title2"] = "title2";
  FontSizes["Title3"] = "title3";
  FontSizes["Title4"] = "title4";
  FontSizes["Title5"] = "title5";
  FontSizes["Micro"] = "micro";
})(FontSizes || (exports.FontSizes = FontSizes = {}));

const fontSizeLookUp = {
  [FontSizes.Hyper1]: {
    fontSize: '44px',
    lineHeight: '56px'
  },
  [FontSizes.Hyper2]: {
    fontSize: '38px',
    lineHeight: '40px'
  },
  [FontSizes.Hyper3]: {
    fontSize: '33px',
    lineHeight: '36px'
  },
  [FontSizes.Hyper4]: {
    fontSize: '25px',
    lineHeight: '32px'
  },
  [FontSizes.Title1]: {
    fontSize: '22px',
    lineHeight: '28px'
  },
  [FontSizes.Title2]: {
    fontSize: '19px',
    lineHeight: '24px'
  },
  [FontSizes.Title3]: {
    fontSize: '16px',
    lineHeight: '20px'
  },
  [FontSizes.Title4]: {
    fontSize: '14px',
    lineHeight: '18px'
  },
  [FontSizes.Title5]: {
    fontSize: '11px',
    lineHeight: '16px'
  },
  [FontSizes.Micro]: {
    fontSize: '8px',
    lineHeight: '10px'
  }
};

const typography = (weight, size, margin) => ({
  fontWeight: weight,
  ...fontSizeLookUp[size],
  ...(margin ? typographyMargin(size, margin) : {})
});

exports.typography = typography;
const fontMarginLookUp = {
  [FontSizes.Hyper1]: {
    top: -11,
    bottom: -13
  },
  [FontSizes.Hyper2]: {
    top: -5,
    bottom: -7
  },
  [FontSizes.Hyper3]: {
    top: -6,
    bottom: -6
  },
  [FontSizes.Hyper4]: {
    top: -7,
    bottom: -7
  },
  [FontSizes.Title1]: {
    top: -6,
    bottom: -6
  },
  [FontSizes.Title2]: {
    top: -4,
    bottom: -6
  },
  [FontSizes.Title3]: {
    top: -3,
    bottom: -5
  },
  [FontSizes.Title4]: {
    top: -4,
    bottom: -4
  },
  [FontSizes.Title5]: {
    top: -4,
    bottom: -4
  },
  [FontSizes.Micro]: {
    top: -2,
    bottom: -2
  }
};

const typographyMargin = (size, margin = '') => {
  const fontSizeMargins = fontMarginLookUp[size];
  const marginObject = shortHandDeconstruction(margin);
  const mergedObject = {
    top: mergeValues(marginObject.top, fontSizeMargins.top),
    right: mergeValues(marginObject.right, fontSizeMargins.right),
    bottom: mergeValues(marginObject.bottom, fontSizeMargins.bottom),
    left: mergeValues(marginObject.left, fontSizeMargins.left)
  };
  return {
    margin: sizingObjectToString(mergedObject)
  };
};

exports.typographyMargin = typographyMargin;

const mergeValues = (firstValue = 0, secondValue = 0) => {
  if (firstValue === 'auto' || secondValue === 'auto') {
    return 'auto';
  }

  return firstValue + secondValue;
};

const stripPx = value => {
  if (value === 'auto') {
    return value;
  }

  return Number(value.replace(/px/gi, ''));
};

const addPx = value => {
  if (!value) {
    return '0px';
  }

  if (value === 'auto') {
    return value;
  }

  return value + 'px';
};

const shortHandDeconstruction = value => {
  if (value === '') {
    return {};
  }

  const splitValue = value.split(' ').map(stripPx);

  switch (splitValue.length) {
    case 4:
      return {
        top: splitValue[0],
        right: splitValue[1],
        bottom: splitValue[2],
        left: splitValue[3]
      };

    case 3:
      return {
        top: splitValue[0],
        right: splitValue[1],
        bottom: splitValue[2],
        left: splitValue[1]
      };

    case 2:
      return {
        top: splitValue[0],
        right: splitValue[1],
        bottom: splitValue[0],
        left: splitValue[1]
      };

    default:
    case 1:
      return {
        top: splitValue[0],
        right: splitValue[0],
        bottom: splitValue[0],
        left: splitValue[0]
      };
  }
};

exports.shortHandDeconstruction = shortHandDeconstruction;

const sizingObjectToString = size => {
  return `${addPx(size.top)} ${addPx(size.right)} ${addPx(size.bottom)} ${addPx(size.left)}`;
};

const gothamFontFamily =
/*#__PURE__*/
(0, _styledComponents.css)(["font-family:'Gotham SSm A','Gotham SSm B',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;letter-spacing:initial;text-rendering:optimizeLegibility;"]);
exports.gothamFontFamily = gothamFontFamily;