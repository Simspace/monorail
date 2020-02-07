"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionPaginationComponent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _buttonTypes = require("../buttons/buttonTypes");

var _Text = require("../typography/Text");

var _exports = require("../../helpers/exports");

var _Button = require("../buttons/Button");

var _Icon = require("../icon/Icon");

var _styledComponents2 = require("../../helpers/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledButton =
/*#__PURE__*/
(0, _styledComponents.default)(_Button.Button).withConfig({
  displayName: "CollectionPaginationComponent___StyledButton",
  componentId: "sc-1npn9yo-0"
})({
  margin: '0 4px'
});

var _StyledText =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText",
  componentId: "sc-1npn9yo-1"
})(p => ({
  color: p._css
}));

const NumberButton = ({
  number,
  current = false,
  handleClick
}) => _react.default.createElement(_StyledButton, {
  onClick: handleClick,
  display: _buttonTypes.ButtonDisplay.Chromeless
}, _react.default.createElement(_StyledText, {
  fontSize: _exports.FontSizes.Title5,
  fontWeight: 500,
  _css: (0, _exports.getColor)(current ? _exports.Colors.Black54 : _exports.Colors.BrandLightBlue)
}, number));

const Ellipsis = () => _react.default.createElement("span", {
  style: {
    margin: '0 4px'
  }
}, "...");

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "CollectionPaginationComponent___StyledIcon",
  componentId: "sc-1npn9yo-2"
})(p => ({
  color: p._css2
}));

var _StyledText2 =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText2",
  componentId: "sc-1npn9yo-3"
})(["margin:0;color:", ";"], p => p._css3);

var _StyledDiv =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "CollectionPaginationComponent___StyledDiv",
  componentId: "sc-1npn9yo-4"
})(["display:flex;width:250px;align-items:center;justify-content:center;"]);

var _StyledText3 =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText3",
  componentId: "sc-1npn9yo-5"
})(["margin:0;color:", ";"], p => p._css4);

var _StyledIcon2 =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "CollectionPaginationComponent___StyledIcon2",
  componentId: "sc-1npn9yo-6"
})(p => ({
  color: p._css5
}));

var _StyledText4 =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "CollectionPaginationComponent___StyledText4",
  componentId: "sc-1npn9yo-7"
})(["position:absolute;right:8px;margin-top:4px;color:", ";"], p => p._css6);

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

  const changePage = pg => {
    const safePage = getSafePage(pg);

    if (page !== safePage) {
      onPageChange(safePage);
    }
  };

  const linksForEveryPage = () => _react.default.createElement(_react.default.Fragment, null, Array.from(Array(pages).keys()).map(n => _react.default.createElement(NumberButton, {
    number: n + 1,
    current: page === n,
    handleClick: () => changePage(n)
  })));

  const ellipsisAfterBeginning = () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NumberButton, {
    number: 1,
    handleClick: () => changePage(0),
    current: page === 0
  }), _react.default.createElement(NumberButton, {
    number: 2,
    handleClick: () => changePage(1),
    current: page === 1
  }), _react.default.createElement(NumberButton, {
    number: 3,
    handleClick: () => changePage(2),
    current: page === 2
  }), page === 2 ? _react.default.createElement(NumberButton, {
    number: 4,
    handleClick: () => changePage(3)
  }) : null, _react.default.createElement(Ellipsis, null), _react.default.createElement(NumberButton, {
    number: pages,
    handleClick: () => changePage(pages - 1)
  }));

  const ellipsisBeforeEnd = () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NumberButton, {
    number: 1,
    handleClick: () => changePage(0)
  }), _react.default.createElement(Ellipsis, null), page === pages - 3 ? _react.default.createElement(NumberButton, {
    number: pages - 3,
    handleClick: () => changePage(pages - 4),
    current: page === pages - 4
  }) : null, _react.default.createElement(NumberButton, {
    number: pages - 2,
    handleClick: () => changePage(pages - 3),
    current: page === pages - 3
  }), _react.default.createElement(NumberButton, {
    number: pages - 1,
    handleClick: () => changePage(pages - 2),
    current: page === pages - 2
  }), _react.default.createElement(NumberButton, {
    number: pages,
    handleClick: () => changePage(pages - 1),
    current: page === pages - 1
  }));

  const numbers = () => {
    if (pages < 8) {
      return linksForEveryPage();
    }

    if (page < 3) {
      return ellipsisAfterBeginning();
    } else if (page > pages - 4) {
      return ellipsisBeforeEnd();
    } else {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NumberButton, {
        number: 1,
        handleClick: () => changePage(0)
      }), _react.default.createElement(Ellipsis, null), _react.default.createElement(NumberButton, {
        number: page,
        handleClick: () => changePage(page - 1)
      }), _react.default.createElement(NumberButton, {
        number: page + 1,
        current: true,
        handleClick: () => {}
      }), _react.default.createElement(NumberButton, {
        number: page + 2,
        handleClick: () => changePage(page + 1)
      }), _react.default.createElement(Ellipsis, null), _react.default.createElement(NumberButton, {
        number: pages,
        handleClick: () => changePage(pages - 1)
      }));
    }
  };

  return _react.default.createElement("div", {
    style: {
      background: (0, _exports.getColor)(_exports.Colors.Grey98),
      padding: '4px 24px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement(_Button.Button, {
    onClick: () => changePage(page - 1),
    display: _buttonTypes.ButtonDisplay.Chromeless
  }, _react.default.createElement(_StyledIcon, {
    icon: "chevron_left",
    _css2: (0, _exports.getColor)(page > 0 ? _exports.Colors.BrandLightBlue : _exports.Colors.Black54)
  }), _react.default.createElement(_StyledText2, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: 500,
    _css3: (0, _exports.getColor)(page > 0 ? _exports.Colors.BrandLightBlue : _exports.Colors.Black54)
  }, "Previous")), _react.default.createElement(_StyledDiv, null, numbers()), _react.default.createElement(_Button.Button, {
    onClick: () => changePage(page + 1),
    display: _buttonTypes.ButtonDisplay.Chromeless
  }, _react.default.createElement(_StyledText3, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: 500,
    _css4: (0, _exports.getColor)(page < pages - 1 ? _exports.Colors.BrandLightBlue : _exports.Colors.Black54)
  }, "Next"), _react.default.createElement(_StyledIcon2, {
    icon: "chevron_right",
    _css5: (0, _exports.getColor)(page < pages - 1 ? _exports.Colors.BrandLightBlue : _exports.Colors.Black54)
  }))), _react.default.createElement(_StyledText4, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: 500,
    _css6: (0, _exports.getColor)(_exports.Colors.Black54)
  }, "Showing ", min, "-", max, " of ", total, " Results"));
};

exports.CollectionPaginationComponent = CollectionPaginationComponent;