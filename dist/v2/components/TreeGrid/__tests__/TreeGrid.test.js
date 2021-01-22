"use strict";

var _react = _interopRequireDefault(require("react"));

var tlr = _interopRequireWildcard(require("@testing-library/react"));

var _fpTsImports = require("../../../../sharedHelpers/fp-ts-imports");

var _typeGuards = require("../../../../sharedHelpers/typeGuards");

var _render = require("../../../../testHelpers/render");

var _TreeGrid = require("../TreeGrid");

require("@testing-library/jest-dom/extend-expect");

var _TreeGridProps = require("../__mocks__/TreeGridProps.mock");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

describe('TreeGrid', () => {
  /**
   * Note from https://www.w3.org/TR/wai-aria-practices-1.1/examples/treegrid/treegrid-1.html
   * "Due to an error in the ARIA 1.1 specification, the aria-posinset and
   * aria-setsize properties are not supported on row elements. This is being
   * corrected in ARIA 1.2. Consequently, when validating the HTML in this
   * example, errors are generated.""
   */
  // generateA11yStoryTests(stories)
  it('virtualizes rendering of rows', () => {
    (0, _render.renderWithTheme)( /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '500px'
      }
    }, /*#__PURE__*/_react.default.createElement(_TreeGrid.TreeGrid, _TreeGridProps.mockTreeGridProps)));
    const rows = tlr.screen.getAllByRole('row');
    expect(rows.length).toBeGreaterThan(1 // because the header row is always there
    );
    expect(rows.length).toBeLessThan((0, _fpTsImports.pipe)(_TreeGridProps.mockTreeGridProps.content, _fpTsImports.E.fold((0, _fpTsImports.constant)(0), xs => xs.length)));
  });
  it('expands and collapses parent rows on button click', () => {
    const _rendered = (0, _render.renderWithTheme)( /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '500px'
      }
    }, /*#__PURE__*/_react.default.createElement(_TreeGrid.TreeGrid, _TreeGridProps.mockTreeGridProps)));

    const allVisibleRowsAreLevel1 = tlr.screen.getAllByRole('row').map(row => row.getAttribute('aria-level')).filter(_typeGuards.isNotNil).every(rowLevel => rowLevel === '1');
    expect(allVisibleRowsAreLevel1).toBe(true);
    const expandBtns = tlr.screen.getAllByRole('button', {
      name: 'Expand'
    });
    expandBtns.forEach(btn => {
      tlr.fireEvent.click(btn);
    });
    const someVisibleRowsAreLevel2 = tlr.screen.getAllByRole('row').map(row => row.getAttribute('aria-level')).filter(_typeGuards.isNotNil).some(rowLevel => rowLevel === '2');
    expect(someVisibleRowsAreLevel2).toBe(true);
    expandBtns.forEach(btn => {
      tlr.fireEvent.click(btn);
    });
    const allVisibleRowsAreLevel1Again = tlr.screen.getAllByRole('row').map(row => row.getAttribute('aria-level')).filter(_typeGuards.isNotNil).every(rowLevel => rowLevel === '1');
    expect(allVisibleRowsAreLevel1Again).toBe(true);
  });
  it('renders arbitrary jsx when props.content is Left<JSX>', () => {
    const rendered = (0, _render.renderWithTheme)( /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '500px'
      }
    }, /*#__PURE__*/_react.default.createElement(_TreeGrid.TreeGrid, _extends({}, _TreeGridProps.mockTreeGridProps, {
      content: _fpTsImports.E.left( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _TreeGridProps.EMPTY_VIEW_TEXT_CONTENT))
    }))));
    expect(rendered.container).toHaveTextContent(_TreeGridProps.EMPTY_VIEW_TEXT_CONTENT);
  });
});