"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateA11yStoryTests = generateA11yStoryTests;

var _jestAxe = require("jest-axe");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _storybook = require("../helpers/storybook");

var _render = require("./render");

const axe = (0, _jestAxe.configureAxe)({
  rules: {
    // Ignore page-level rules
    'landmark-one-main': {
      enabled: false
    },
    region: {
      enabled: false
    },
    'page-has-heading-one': {
      enabled: false
    }
  }
});

function shouldCheckA11y(item) {
  var _item$parameters, _item$parameters$a11y;

  return !((_item$parameters = item.parameters) === null || _item$parameters === void 0 ? void 0 : (_item$parameters$a11y = _item$parameters.a11y) === null || _item$parameters$a11y === void 0 ? void 0 : _item$parameters$a11y.disable);
} //#region Type Guards


function isStory(item) {
  return typeof item === 'function';
}

function isA11yStoryEntry(entry) {
  return isStory(entry[1]) && shouldCheckA11y(entry[1]);
}
/**
 * Valid if it exists, and is not an auto-added Storybook element
 *
 * i.e. It is not dependent on Storybook's Preview implementation, so it'll work in JSDom (Jest)
 */


function isValidTargetElement(targetElement) {
  return (0, _typeGuards.isNotNil)(targetElement) && targetElement !== _storybook.A11yElement.Root && targetElement !== _storybook.A11yElement.Component;
} //#endregion

/**
 * Generates Jest a11y tests for all stories in a module
 *
 * Note: `color-contrast` rule is NOT checked, and it is not likely to be fixed soon.
 * - https://github.com/dequelabs/axe-core/issues/2610
 * - https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform
 * - Verify it is/isn't checked with a `console.log(results)` below
 */


async function generateA11yStoryTests(storyModule) {
  var _storyModule$default$, _storyModule$default$2;

  const storiesTargetElement = (_storyModule$default$ = storyModule.default.parameters) === null || _storyModule$default$ === void 0 ? void 0 : (_storyModule$default$2 = _storyModule$default$.a11y) === null || _storyModule$default$2 === void 0 ? void 0 : _storyModule$default$2.element;
  Object.entries(storyModule).filter(isA11yStoryEntry).forEach(([storyName, story]) => {
    it(`${storyName} story is accessible`, async () => {
      var _story$parameters$a, _story$parameters, _story$parameters$a2, _baseElement$querySel;

      const targetElement = (_story$parameters$a = (_story$parameters = story.parameters) === null || _story$parameters === void 0 ? void 0 : (_story$parameters$a2 = _story$parameters.a11y) === null || _story$parameters$a2 === void 0 ? void 0 : _story$parameters$a2.element) !== null && _story$parameters$a !== void 0 ? _story$parameters$a : storiesTargetElement;
      const {
        baseElement,
        container
      } = (0, _render.renderStory)(story);
      const results = isValidTargetElement(targetElement) ? await axe((_baseElement$querySel = baseElement.querySelector(targetElement)) !== null && _baseElement$querySel !== void 0 ? _baseElement$querySel : baseElement) : await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
}