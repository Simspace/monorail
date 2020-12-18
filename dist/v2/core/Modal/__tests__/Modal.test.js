"use strict";

var _react = require("@testing-library/react");

var _a11y = require("../../../../testHelpers/a11y");

var _render = require("../../../../testHelpers/render");

var stories = _interopRequireWildcard(require("../__stories__/Modal.stories"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Modal', () => {
  (0, _a11y.generateA11yStoryTests)(stories);
  it('reveals when triggered', async () => {
    // Arrange
    const {
      getByRole,
      queryByRole
    } = (0, _render.renderStory)(stories.ClickToOpen); // Act - Trigger modal

    _react.fireEvent.click(getByRole('button')); // Assert - Modal is visible


    await (0, _react.waitFor)(() => {
      expect(queryByRole('dialog')).toBeVisible();
    });
  });
  describe('ESC pressed', () => {
    it('closes modal', async () => {
      // Arrange - Modal is visible
      const {
        getByRole,
        queryByRole
      } = (0, _render.renderStory)(stories.ClickToOpen);

      _react.fireEvent.click(getByRole('button'));

      await (0, _react.waitFor)(() => {
        expect(queryByRole('dialog')).toBeVisible();
      }); // Act - Press ESC

      _react.fireEvent.keyDown(getByRole('dialog'), {
        key: 'Escape',
        code: 'Escape'
      }); // Assert - Modal is no longer visible


      await (0, _react.waitForElementToBeRemoved)(queryByRole('dialog'));
    });
    it('does nothing when ESC is disabled', async () => {
      // Arrange - Modal is visible
      const {
        getByRole,
        queryByRole
      } = (0, _render.renderStory)(stories.DisableEscape);

      _react.fireEvent.click(getByRole('button'));

      await (0, _react.waitFor)(() => {
        expect(queryByRole('dialog')).toBeVisible();
      }); // Act - Press ESC

      _react.fireEvent.keyDown(getByRole('dialog'), {
        key: 'Escape',
        code: 'Escape'
      }); // Assert - Modal is still visible


      (0, _react.waitForElementToBeRemoved)(queryByRole('dialog')).then(() => {
        fail('Dialog should not have been removed!');
      });
    });
  });
});