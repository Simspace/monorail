"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionPaginationBar = exports.PaginationNextButton = exports.PaginationBackButton = exports.TestId = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../helpers/exports");

var _styledComponents2 = require("../../../helpers/styled-components");

var _Select = require("../../../v2/core/Select/Select");

var _SelectItem = require("../../../v2/core/Select/SelectItem");

var _Button = require("../../buttons/Button");

var _buttonTypes = require("../../buttons/buttonTypes");

var _helpers = require("./helpers");

var _Icon = require("../../icon/Icon");

var _Text = require("../../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let TestId; //#region css

exports.TestId = TestId;

(function (TestId) {
  TestId["TotalSelectedLabel"] = "total-selected";
  TestId["ItemsPerPage"] = "items-per-page";
  TestId["PreviousPage"] = "prev-page";
  TestId["NextPage"] = "next-page";
  TestId["Pages"] = "pages";
})(TestId || (exports.TestId = TestId = {}));

const BarRow = _styledComponents2.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  background: ${(0, _exports.getColor)(_exports.Colors.Grey96)};
  padding: 4px 16px;
  ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation4)};
`;
const BarSection = _styledComponents2.styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 0;
`;

var _StyledBarSection2 = /*#__PURE__*/(0, _styledComponents.default)(BarSection).withConfig({
  displayName: "SelectionPaginationBar___StyledBarSection2",
  componentId: "sc-5orvc7-0"
})(["justify-content:flex-end;"]);

var _StyledBarSection = /*#__PURE__*/(0, _styledComponents.default)(BarSection).withConfig({
  displayName: "SelectionPaginationBar___StyledBarSection",
  componentId: "sc-5orvc7-1"
})(["justify-content:center;"]);

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "SelectionPaginationBar___StyledText",
  componentId: "sc-5orvc7-2"
})(p => ({
  color: p._css,
  padding: '0 11px'
}));

var _StyledText2 = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "SelectionPaginationBar___StyledText2",
  componentId: "sc-5orvc7-3"
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
  displayName: "SelectionPaginationBar___StyledSpan",
  componentId: "sc-5orvc7-4"
})({
  padding: '0 11px'
});

const Ellipsis = () => /*#__PURE__*/_react.default.createElement(_StyledSpan, null, "..."); //#endregion
//#region PageControls


var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "SelectionPaginationBar___StyledIcon",
  componentId: "sc-5orvc7-5"
})(p => ({
  color: p._css3
}));

var _StyledText3 = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "SelectionPaginationBar___StyledText3",
  componentId: "sc-5orvc7-6"
})(["margin:0;text-transform:capitalize;color:", ";"], p => p._css4);

const PaginationBackButton = ({
  onClick,
  disabled = false
}) => /*#__PURE__*/_react.default.createElement(_Button.Button, {
  onClick: onClick,
  display: _buttonTypes.ButtonDisplay.Chromeless,
  disabled: disabled,
  cssOverrides: disabled ? 'opacity: 1;' : '',
  "data-test-id": TestId.PreviousPage
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
  displayName: "SelectionPaginationBar___StyledText4",
  componentId: "sc-5orvc7-7"
})(["margin:0;text-transform:capitalize;color:", ";"], p => p._css5);

var _StyledIcon2 = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "SelectionPaginationBar___StyledIcon2",
  componentId: "sc-5orvc7-8"
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
  cssOverrides: disabled ? 'opacity: 1;' : '',
  "data-test-id": TestId.NextPage
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
  displayName: "SelectionPaginationBar___StyledDiv",
  componentId: "sc-5orvc7-9"
})(["display:flex;width:", ";align-items:center;justify-content:space-between;"], p => p._css7);

const PageControls = ({
  page,
  pages,
  onPageChange
}) => {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(PaginationBackButton, {
    onClick: e => changePage(e, page - 1),
    disabled: page === 0
  }), /*#__PURE__*/_react.default.createElement(_StyledDiv, {
    "data-test-id": TestId.Pages,
    _css7: pages > 6 ? '250px' : 'auto'
  }, numbers()), /*#__PURE__*/_react.default.createElement(PaginationNextButton, {
    onClick: e => changePage(e, page + 1),
    disabled: page === pages - 1
  }));
}; //#endregion


const TotalSelectedLabel = props => /*#__PURE__*/_react.default.createElement("div", {
  "data-test-id": TestId.TotalSelectedLabel
}, /*#__PURE__*/_react.default.createElement(_Text.Text, {
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Bold,
  color: _exports.Colors.Gray89
}, props.totalSelectedItems), /*#__PURE__*/_react.default.createElement(_Text.Text, {
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Book,
  color: _exports.Colors.Gray89
}, ' selected'));

const SelectionPaginationBar = props => {
  const {
    sortedData,
    totalItems,
    totalSelectedItems,
    page,
    pages,
    pageSize,
    onPageChange,
    itemsPerPage,
    onItemsPerPageChange
  } = props;
  const startingShownRange = page * pageSize + 1;
  const endingShownRange = Math.min((page + 1) * pageSize, sortedData.length);
  return /*#__PURE__*/_react.default.createElement(BarRow, null, /*#__PURE__*/_react.default.createElement(BarSection, null, totalSelectedItems > 0 && /*#__PURE__*/_react.default.createElement(TotalSelectedLabel, {
    totalSelectedItems: totalSelectedItems
  })), /*#__PURE__*/_react.default.createElement(_StyledBarSection, null, /*#__PURE__*/_react.default.createElement(PageControls, {
    page: page,
    pages: pages,
    onPageChange: onPageChange
  })), /*#__PURE__*/_react.default.createElement(_StyledBarSection2, null, /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Book,
    color: _exports.Colors.Gray89,
    margin: "0 8px 0"
  }, "Show:"), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    popoverPosition: "above",
    value: itemsPerPage,
    onChange: ({
      target: {
        value
      }
    }) => {
      if ((0, _helpers.isItemsPerPageOption)(value)) {
        onItemsPerPageChange(value);
      }
    },
    "aria-label": "Items per page",
    SelectDisplayProps: {
      'data-test-id': TestId.ItemsPerPage
    }
  }, _helpers.ITEMS_PER_PAGE_OPTIONS.map((value, index) => /*#__PURE__*/_react.default.createElement(_SelectItem.SelectItem, {
    key: index,
    value: value
  }, value))), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Book,
    color: _exports.Colors.Gray89,
    margin: "0 0 0 16px"
  }, `${startingShownRange}-${endingShownRange} of ${totalItems}`)));
};

exports.SelectionPaginationBar = SelectionPaginationBar;