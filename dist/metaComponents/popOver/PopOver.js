"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopOver = exports.getDropAmounts = exports.getOverlayPosition = exports.defaultPopOverPosition = exports.dropDirections = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Portal = require("../portal/Portal");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let dropDirections;
exports.dropDirections = dropDirections;

(function (dropDirections) {
  dropDirections["Bottom"] = "bottom";
  dropDirections["Left"] = "left";
  dropDirections["Right"] = "right";
  dropDirections["Top"] = "top";
})(dropDirections || (exports.dropDirections = dropDirections = {}));

const defaultPopOverPosition = {
  dropXAmount: 0,
  dropXDirection: dropDirections.Left,
  dropYAmount: 0,
  dropYDirection: dropDirections.Top,
  gap: 8,
  maxHeight: 360,
  maxWidth: 304,
  originHeight: 0,
  originWidth: 0,
  maxHeightCalc: '100vh',
  maxWidthCalc: '100vw'
};
exports.defaultPopOverPosition = defaultPopOverPosition;

const getOverlayPosition = ({
  target,
  gap = 8,
  toSide = false,
  xDirection,
  yDirection
}) => {
  // Get basic dimensions about the the Toggle and the window.
  const boundingRect = target.getBoundingClientRect();
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight; // Determine the direction the PopOver should go.

  const dropYDirection = yDirection || (innerHeight / 2 > boundingRect.top + boundingRect.height / 2 ? dropDirections.Top : dropDirections.Bottom);
  const dropXDirection = xDirection || (innerWidth / 2 > boundingRect.left + boundingRect.width / 2 ? dropDirections.Left : dropDirections.Right);
  return { ...getDropAmounts({
      boundingRect,
      dropXDirection,
      dropYDirection,
      gap,
      innerHeight,
      innerWidth,
      toSide
    }),
    dropXDirection,
    dropYDirection,
    gap,
    originHeight: boundingRect.height,
    originWidth: boundingRect.width
  };
};

exports.getOverlayPosition = getOverlayPosition;

const getDropAmounts = ({
  dropXDirection,
  dropYDirection,
  innerHeight,
  innerWidth,
  ...otherProps
}) => ({ ...getDropXAmount({
    dropXDirection,
    innerWidth,
    ...otherProps
  }),
  ...getDropYAmount({
    dropYDirection,
    innerHeight,
    ...otherProps
  }),
  ...getMaxHeight({
    dropYDirection,
    innerHeight,
    ...otherProps
  }),
  ...getMaxWidth({
    dropXDirection,
    innerWidth,
    ...otherProps
  }),
  ...getMaxHeightCalc({
    dropYDirection,
    innerHeight,
    ...otherProps
  }),
  ...getMaxWidthCalc({
    dropXDirection,
    innerWidth,
    ...otherProps
  })
});

exports.getDropAmounts = getDropAmounts;

const getDropXAmount = ({
  dropXDirection,
  innerWidth,
  boundingRect,
  toSide,
  gap
}) => {
  const isLeft = dropXDirection === dropDirections.Left;

  const dropXAmountForToSide = () => isLeft ? boundingRect.left + boundingRect.width + gap : innerWidth - boundingRect.right + boundingRect.width + gap;

  const dropXAmountForNotToSide = () => isLeft ? boundingRect.left : innerWidth - boundingRect.right;

  return {
    dropXAmount: toSide ? dropXAmountForToSide() : dropXAmountForNotToSide()
  };
};

const getDropYAmount = ({
  dropYDirection,
  innerHeight,
  boundingRect,
  toSide,
  gap
}) => {
  const isTop = dropYDirection === dropDirections.Top;

  const dropYAmountForToSide = () => isTop ? boundingRect.top : innerHeight - boundingRect.bottom;

  const dropYAmountForNotToSide = () => isTop ? boundingRect.top + boundingRect.height + gap : innerHeight - boundingRect.bottom + boundingRect.height + gap;

  return {
    dropYAmount: toSide ? dropYAmountForToSide() : dropYAmountForNotToSide()
  };
};

const getMaxHeight = ({
  dropYDirection,
  innerHeight,
  boundingRect,
  toSide,
  gap
}) => {
  const isTop = dropYDirection === dropDirections.Top;

  const maxHeightForToSide = () => isTop ? innerHeight - boundingRect.top - gap * 2 : boundingRect.top + boundingRect.height - gap * 2;

  const maxHeightForNotToSide = () => isTop ? innerHeight - (boundingRect.top + boundingRect.height) - gap * 2 : boundingRect.top - gap * 2;

  return {
    maxHeight: toSide ? maxHeightForToSide() : maxHeightForNotToSide()
  };
};

const getMaxWidth = ({
  dropXDirection,
  innerWidth,
  boundingRect,
  toSide,
  gap
}) => {
  const isLeft = dropXDirection === dropDirections.Left;

  const maxWidthForToSide = () => isLeft ? innerWidth - boundingRect.left - boundingRect.width - gap * 2 : boundingRect.left - gap * 2;

  const maxWidthForNotToSide = () => isLeft ? innerWidth - boundingRect.left - gap * 2 : boundingRect.left + boundingRect.width - gap * 2;

  return {
    maxWidth: toSide ? maxWidthForToSide() : maxWidthForNotToSide()
  };
};

const getMaxHeightCalc = ({
  dropYDirection,
  innerHeight,
  boundingRect,
  toSide,
  gap
}) => {
  const isTop = dropYDirection === dropDirections.Top;

  const maxHeightForToSide = () => isTop ? `calc(100vh - ${boundingRect.bottom + gap * 2}px)` : `calc(100vh - ${innerHeight - boundingRect.bottom + gap}px)`;

  const maxHeightForNotToSide = () => isTop ? `calc(100vh - ${boundingRect.bottom + gap * 2}px)` : `calc(100vh - ${innerHeight - boundingRect.top + gap * 2}px)`;

  return {
    maxHeightCalc: toSide ? maxHeightForToSide() : maxHeightForNotToSide()
  };
};

const getMaxWidthCalc = ({
  dropXDirection,
  innerWidth,
  boundingRect,
  toSide,
  gap
}) => {
  const isLeft = dropXDirection === dropDirections.Left;

  const maxWidthForToSide = () => isLeft ? `calc(100vw - ${boundingRect.right + gap * 2}px)` : `calc(100vw - ${innerWidth - boundingRect.left + gap}px)`;

  const maxWidthForNotToSide = () => isLeft ? `calc(100vw - ${boundingRect.left + gap}px)` : `calc(100vw - ${innerWidth - boundingRect.right + gap}px)`;

  return {
    maxWidthCalc: toSide ? maxWidthForToSide() : maxWidthForNotToSide()
  };
};

class PopOver extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isOpen: false,
      isRendered: false,
      position: defaultPopOverPosition
    };

    this.togglePopOver = () => {
      const {
        onToggle
      } = this.props;
      this.setState(({
        isOpen,
        isRendered
      }) => {
        const newIsOpen = !isOpen;
        const newIsRendered = newIsOpen ? true : isRendered;
        onToggle && onToggle(newIsOpen);
        return {
          isOpen: newIsOpen,
          isRendered: newIsRendered
        };
      });
    };

    this.closingAnimationCompleted = () => {
      this.setState(() => ({
        isRendered: false
      }));
    };

    this.onClick = event => {
      const {
        gap,
        toSide,
        onToggle,
        xDirection,
        yDirection
      } = this.props;
      const position = getOverlayPosition({
        gap,
        target: event.currentTarget,
        toSide,
        xDirection,
        yDirection
      });
      this.setState(({
        isOpen,
        isRendered
      }) => {
        const newIsOpen = !isOpen;
        const newIsRendered = newIsOpen ? true : isRendered;
        onToggle && onToggle(newIsOpen);
        return {
          isOpen: newIsOpen,
          isRendered: newIsRendered,
          position
        };
      });
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { ...state,
      isOpen: props.isOpen !== undefined ? props.isOpen : state.isOpen,
      isRendered: props.isOpen !== undefined ? props.isOpen : state.isRendered
    };
  }

  render() {
    const {
      popOver,
      toggle,
      document,
      alwaysRender
    } = this.props;
    const {
      isRendered,
      isOpen,
      position
    } = this.state;
    return _react.default.createElement(_react.default.Fragment, null, toggle({
      onClick: this.onClick,
      isActive: isOpen
    }), (isRendered || alwaysRender) && _react.default.createElement(_Portal.Portal, {
      document: document
    }, popOver({
      isOpen,
      position,
      onClick: this.togglePopOver,
      togglePopOver: this.togglePopOver,
      closingAnimationCompleted: this.closingAnimationCompleted
    })));
  }

}

exports.PopOver = PopOver;
PopOver.defaultProps = {
  gap: 8,
  toSide: false,
  alwaysRender: false
};