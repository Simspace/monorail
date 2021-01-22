"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.story = story;
exports.meta = meta;
exports.A11Y_ELEMENT__COMPONENT = exports.A11Y_ELEMENT__ROOT = exports.PADDING_REMOVED = exports.DISABLED_ARG_TYPE = exports.DISABLED_A11Y = exports.ENABLED_ACTIONS = exports.DISABLED_ACTIONS = exports.DISABLED_CONTROLS = exports.A11yElement = exports.NO_GENERATED_META = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-restricted-imports */

/* eslint-enable no-restricted-imports */
const NO_GENERATED_META = {};
/**
 * Selectors used by a11y tools to target specific elements for a11y checks
 */

exports.NO_GENERATED_META = NO_GENERATED_META;
let A11yElement; //#region Parameters

exports.A11yElement = A11yElement;

(function (A11yElement) {
  A11yElement["Root"] = "#root";
  A11yElement["Component"] = "#root > *";
  A11yElement["Modal"] = ".MuiDialog-root";
  A11yElement["Popover"] = ".MuiPopover-root";
  A11yElement["Drawer"] = ".MuiDrawer-root";
})(A11yElement || (exports.A11yElement = A11yElement = {}));

const DISABLED_CONTROLS = {
  controls: {
    disable: true
  }
};
exports.DISABLED_CONTROLS = DISABLED_CONTROLS;
const DISABLED_ACTIONS = {
  actions: {
    disable: true
  }
};
exports.DISABLED_ACTIONS = DISABLED_ACTIONS;
const ENABLED_ACTIONS = {
  actions: {
    disable: false
  }
};
exports.ENABLED_ACTIONS = ENABLED_ACTIONS;
const DISABLED_A11Y = {
  a11y: {
    disable: true
  }
};
exports.DISABLED_A11Y = DISABLED_A11Y;
const DISABLED_ARG_TYPE = {
  table: {
    disable: true
  }
};
exports.DISABLED_ARG_TYPE = DISABLED_ARG_TYPE;
const PADDING_REMOVED = {
  layout: 'fullscreen'
};
/**
 * This is the default a11y selector. Only use it when overriding a custom selector.
 */

exports.PADDING_REMOVED = PADDING_REMOVED;
const A11Y_ELEMENT__ROOT = {
  a11y: {
    element: A11yElement.Root
  }
};
exports.A11Y_ELEMENT__ROOT = A11Y_ELEMENT__ROOT;
const A11Y_ELEMENT__COMPONENT = {
  a11y: {
    element: A11yElement.Component
  }
}; //#endregion
//#region Helper functions

exports.A11Y_ELEMENT__COMPONENT = A11Y_ELEMENT__COMPONENT;

/**
 * Helper function for creating a story from a Template.
 * Also handy for creating new stories from a normal component.
 * - Storybook's documented approach of manually adding configuration as properties to the Story is tedious and error-prone.
 *
 * @param Template A renderable Template or Component
 * @param config Properties added to the returned Story
 *
 * @example using Template:
 * export const Disabled = story(BasicTemplate, { args: { disabled: true }})
 *
 * @example using a component:
 * export const Other = story(() => <div />, { storyName: "Example"})
 *
 */
function story(Template, {
  args,
  argTypes,
  parameters,
  storyName
} = {}) {
  const NewStory = Template.bind({});
  NewStory.args = { ...Template.args,
    ...args
  };
  NewStory.argTypes = { ...Template.argTypes,
    ...argTypes
  };
  NewStory.parameters = { ...Template.parameters,
    ...parameters
  };

  if ((0, _typeGuards.isNonEmptyString)(storyName)) {
    NewStory.storyName = storyName;
  }

  return NewStory;
}
/**
 * Creates a Meta object used for the default export of a stories file
 *
 * @example
 * export default meta(require('./meta.json'), {title: 'Component'})
 *
 * @example
 * export default meta(NO_GENERATED_META, {title: 'Component'})
 */


function meta(generatedMeta, meta) {
  return (0, _deepmerge.default)(generatedMeta, meta);
} //#endregion