"use strict";

var _react = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _a11y = require("../../../../testHelpers/a11y");

var _render = require("../../../../testHelpers/render");

var stories = _interopRequireWildcard(require("../__stories__/SelectionPaginationBar.stories"));

var _SelectionPaginationBar2 = require("../SelectionPaginationBar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `yarn test SelectionPaginationBar`
describe('SelectionPaginationBar', () => {
  (0, _a11y.generateA11yStoryTests)(stories);
  describe('Selection Summary', () => {
    it('is visible when there is a selection', async () => {
      // Arrange
      const {
        getByTestId
      } = (0, _render.renderStory)(stories.Basic); // Assert - Selection summary is visible

      expect(getByTestId(_SelectionPaginationBar2.TestId.TotalSelectedLabel)).toBeVisible();
    });
    it('is hidden when nothing is selected', async () => {
      // Arrange
      const {
        queryByTestId
      } = (0, _render.renderStory)(stories.NoneSelected); // Assert - Selection summary is not visible

      expect(queryByTestId(_SelectionPaginationBar2.TestId.TotalSelectedLabel)).toBeNull();
    });
  });
  describe('Pagination', () => {
    it('has Previous button when there are prior pages available', async () => {
      // Arrange
      const {
        queryByTestId
      } = (0, _render.renderStory)(stories.OnLastPage); // Assert - Previous button is not disabled

      expect(queryByTestId(_SelectionPaginationBar2.TestId.PreviousPage)).not.toBeDisabled();
    });
    it('has Next button when there are subsequent pages available', async () => {
      // Arrange
      const {
        queryByTestId
      } = (0, _render.renderStory)(stories.OnFirstPage); // Assert - Next button is not disabled

      expect(queryByTestId(_SelectionPaginationBar2.TestId.NextPage)).not.toBeDisabled();
    });
    it('has disabled Previous button when on first page', async () => {
      // Arrange
      const {
        queryByTestId
      } = (0, _render.renderStory)(stories.OnFirstPage); // Assert - Previous button is disabled

      expect(queryByTestId(_SelectionPaginationBar2.TestId.PreviousPage)).toBeDisabled();
    });
    it('has disabled Next button when on last page', async () => {
      // Arrange
      const {
        queryByTestId
      } = (0, _render.renderStory)(stories.OnLastPage); // Assert - Next button is disabled

      expect(queryByTestId(_SelectionPaginationBar2.TestId.NextPage)).toBeDisabled();
    });
  });
  describe('Results Shown Per Page', () => {
    it('has 20, 50, 100, and "All" options', async () => {
      // Arrange
      const expectedOptions = [20, 50, 100, 'All'];
      const {
        getByTestId,
        getAllByRole
      } = (0, _render.renderStory)(stories.Basic);
      const selectTrigger = getByTestId(_SelectionPaginationBar2.TestId.ItemsPerPage);
      expect(selectTrigger).toBeVisible(); // Act - open Select

      _userEvent.default.click(selectTrigger); // Assert


      await (0, _react.waitFor)(() => {
        const options = getAllByRole('option'); // there are options...

        expect(options).toHaveLength(expectedOptions.length); // ...and they have the correct labels

        options.forEach((option, index) => {
          const {
            getByText
          } = (0, _react.within)(option);
          expect(getByText(expectedOptions[index])).toBeInTheDocument();
        });
      });
    });
  });
});