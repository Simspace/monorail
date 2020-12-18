"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionPaginationComponent = exports.PaginationNextButton = exports.PaginationBackButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = require("../../helpers/styled-components");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText",
  componentId: "sc-1npn9yo-0"
})(p => ({
  color: p._css,
  padding: '0 11px'
}));

var _StyledText2 = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText2",
  componentId: "sc-1npn9yo-1"
})(p => ({
  color: p._css2,
  margin: 0
}));

const NumberButton = ({
  number,
  current = false,
  handleClick
}) => {
  return current ? /*#__PURE__*/_react.default.createElement(_StyledText, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: 500,
    _css: (0, _exports.getColor)(_exports.Colors.Black89a)
  }, number) : /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: handleClick,
    display: _buttonTypes.ButtonDisplay.Chromeless
  }, /*#__PURE__*/_react.default.createElement(_StyledText2, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: 500,
    _css2: (0, _exports.getColor)(_exports.Colors.BrandLightBlue)
  }, number));
};

var _StyledSpan = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "CollectionPaginationComponent___StyledSpan",
  componentId: "sc-1npn9yo-2"
})({
  padding: '0 11px'
});

const Ellipsis = () => /*#__PURE__*/_react.default.createElement(_StyledSpan, null, "...");

var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "CollectionPaginationComponent___StyledIcon",
  componentId: "sc-1npn9yo-3"
})(p => ({
  color: p._css3
}));

var _StyledText3 = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText3",
  componentId: "sc-1npn9yo-4"
})(["margin:0;text-transform:capitalize;color:", ";"], p => p._css4);

const PaginationBackButton = ({
  onClick,
  disabled = false
}) => /*#__PURE__*/_react.default.createElement(_Button.Button, {
  onClick: onClick,
  display: _buttonTypes.ButtonDisplay.Chromeless,
  disabled: disabled,
  cssOverrides: disabled ? 'opacity: 1;' : ''
}, /*#__PURE__*/_react.default.createElement(_StyledIcon, {
  icon: "chevron_left",
  _css3: (0, _exports.getColor)(disabled ? _exports.Colors.Black54a : _exports.Colors.BrandLightBlue)
}), /*#__PURE__*/_react.default.createElement(_StyledText3, {
  fontSize: _exports.FontSizes.Title5,
  fontWeight: 500,
  _css4: (0, _exports.getColor)(disabled ? _exports.Colors.Black54a : _exports.Colors.BrandLightBlue)
}, "Previous"));

exports.PaginationBackButton = PaginationBackButton;

var _StyledText4 = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText4",
  componentId: "sc-1npn9yo-5"
})(["margin:0;text-transform:capitalize;color:", ";"], p => p._css5);

var _StyledIcon2 = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "CollectionPaginationComponent___StyledIcon2",
  componentId: "sc-1npn9yo-6"
})(p => ({
  color: p._css6
}));

const PaginationNextButton = ({
  onClick,
  disabled = false
}) => /*#__PURE__*/_react.default.createElement(_Button.Button, {
  onClick: onClick,
  display: _buttonTypes.ButtonDisplay.Chromeless,
  disabled: disabled,
  cssOverrides: disabled ? 'opacity: 1;' : ''
}, /*#__PURE__*/_react.default.createElement(_StyledText4, {
  fontSize: _exports.FontSizes.Title5,
  fontWeight: 500,
  _css5: (0, _exports.getColor)(disabled ? _exports.Colors.Black54a : _exports.Colors.BrandLightBlue)
}, "Next"), /*#__PURE__*/_react.default.createElement(_StyledIcon2, {
  icon: "chevron_right",
  _css6: (0, _exports.getColor)(disabled ? _exports.Colors.Black54a : _exports.Colors.BrandLightBlue)
}));

exports.PaginationNextButton = PaginationNextButton;

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "CollectionPaginationComponent___StyledDiv",
  componentId: "sc-1npn9yo-7"
})(["background:", ";padding:4px 24px;display:flex;justify-content:center;", ";"], p => p._css7, p => p._css8);

var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "CollectionPaginationComponent___StyledDiv2",
  componentId: "sc-1npn9yo-8"
})(["display:flex;width:", ";align-items:center;justify-content:space-between;flex:1 1 0;"], p => p._css9);

var _StyledText5 = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText5",
  componentId: "sc-1npn9yo-9"
})(["position:absolute;right:8px;margin-top:4px;color:", ";"], p => p._css10);

const CollectionPaginationComponent = ({
  data,
  page,
  pages,
  pageSize,
  onPageChange
}) => {
  const min = 1 + page * pageSize;
  const total = data.length;
  const max = Math.min(min + pageSize - 1, total);

  const getSafePage = pg => {
    return Math.min(Math.max(pg, 0), pages - 1);
  };

  const changePage = (e, pg) => {
    const safePage = getSafePage(pg);

    if (page !== safePage) {
      onPageChange(safePage);
    }

    e.currentTarget.blur();
  };

  const linksForEveryPage = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Array.from(Array(pages).keys()).map((n, i) => /*#__PURE__*/_react.default.createElement(NumberButton, {
    key: i,
    number: n + 1,
    current: page === n,
    handleClick: e => changePage(e, n)
  })));

  const ellipsisAfterBeginning = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: 1,
    handleClick: e => changePage(e, 0),
    current: page === 0
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: 2,
    handleClick: e => changePage(e, 1),
    current: page === 1
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: 3,
    handleClick: e => changePage(e, 2),
    current: page === 2
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: 4,
    handleClick: e => changePage(e, 3),
    current: page === 3
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: 5,
    handleClick: e => changePage(e, 4)
  }), /*#__PURE__*/_react.default.createElement(Ellipsis, null), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: pages,
    handleClick: e => changePage(e, pages - 1)
  }));

  const ellipsisBeforeEnd = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: 1,
    handleClick: e => changePage(e, 0)
  }), /*#__PURE__*/_react.default.createElement(Ellipsis, null), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: pages - 4,
    handleClick: e => changePage(e, pages - 5)
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: pages - 3,
    handleClick: e => changePage(e, pages - 4),
    current: page === pages - 4
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: pages - 2,
    handleClick: e => changePage(e, pages - 3),
    current: page === pages - 3
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: pages - 1,
    handleClick: e => changePage(e, pages - 2),
    current: page === pages - 2
  }), /*#__PURE__*/_react.default.createElement(NumberButton, {
    number: pages,
    handleClick: e => changePage(e, pages - 1),
    current: page === pages - 1
  }));

  const numbers = () => {
    if (pages < 8) {
      return linksForEveryPage();
    }

    if (page < 4) {
      return ellipsisAfterBeginning();
    } else if (page > pages - 5) {
      return ellipsisBeforeEnd();
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(NumberButton, {
        number: 1,
        handleClick: e => changePage(e, 0)
      }), /*#__PURE__*/_react.default.createElement(Ellipsis, null), /*#__PURE__*/_react.default.createElement(NumberButton, {
        number: page,
        key: page,
        handleClick: e => changePage(e, page - 1)
      }), /*#__PURE__*/_react.default.createElement(NumberButton, {
        number: page + 1,
        current: true,
        handleClick: () => {}
      }), /*#__PURE__*/_react.default.createElement(NumberButton, {
        key: page + 2,
        number: page + 2,
        handleClick: e => changePage(e, page + 1)
      }), /*#__PURE__*/_react.default.createElement(Ellipsis, null), /*#__PURE__*/_react.default.createElement(NumberButton, {
        number: pages,
        handleClick: e => changePage(e, pages - 1)
      }));
    }
  };

  return /*#__PURE__*/_react.default.createElement(_StyledDiv, {
    _css7: (0, _exports.getColor)(_exports.Colors.Grey98),
    _css8: (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation4)
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement(PaginationBackButton, {
    onClick: e => changePage(e, page - 1),
    disabled: page === 0
  }), /*#__PURE__*/_react.default.createElement(_StyledDiv2, {
    _css9: pages > 6 ? '250px' : 'auto'
  }, numbers()), /*#__PURE__*/_react.default.createElement(PaginationNextButton, {
    onClick: e => changePage(e, page + 1),
    disabled: page === pages - 1
  })), /*#__PURE__*/_react.default.createElement(_StyledText5, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: 500,
    _css10: (0, _exports.getColor)(_exports.Colors.Black54a)
  }, "Showing ", min, "-", max, " of ", total, " Results"));
};

exports.CollectionPaginationComponent = CollectionPaginationComponent;