"use strict";

var _react = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _a11y = require("../../../../testHelpers/a11y");

var _render = require("../../../../testHelpers/render");

var stories = _interopRequireWildcard(require("../__stories__/ReactTableSelect.stories"));

var _SelectionPaginationBar = require("../SelectionPaginationBar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `yarn test ReactTableSelect`
describe('ReactTableSelect', () => {
  (0, _a11y.generateA11yStoryTests)(stories);
  describe('With Pagination', () => {
    it('shows 1 page when showing "All" items', async () => {
      // Arrange
      const {
        getByRole,
        getByTestId
      } = (0, _render.renderStory)(stories.WithPagination);
      const selectTrigger = getByTestId(_SelectionPaginationBar.TestId.ItemsPerPage);
      expect(getByTestId(_SelectionPaginationBar.TestId.Pages).childNodes).not.toHaveLength(1); // Act - open Select menu

      _userEvent.default.click(selectTrigger);

      await (0, _react.waitFor)(() => {
        const allOption = getByRole('option', {
          name: /All/i
        });
        expect(allOption).toBeInTheDocument(); // click the All option

        _userEvent.default.click(allOption);
      }); // Assert - There is only one page

      expect(getByTestId(_SelectionPaginationBar.TestId.Pages).childNodes).toHaveLength(1);
    });
  });
});