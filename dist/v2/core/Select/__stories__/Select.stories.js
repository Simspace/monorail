"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsingObjectValues = exports.ClickToOpenAbove = exports.ClickToOpen = exports.Disabled = exports.Placeholder = exports.Open = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybook = require("../../../../helpers/storybook");

var _SelectMeta = _interopRequireDefault(require("./Select.meta.json"));

var _Select = require("../Select");

var _SelectItem = require("../SelectItem");

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//#region Metadata for ALL stories
var _default = (0, _storybook.meta)(_SelectMeta.default, {
  title: 'monorail/core/Select',
  argTypes: {
    ref: _storybook.DISABLED_ARG_TYPE
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 400
    }
  }
}); //#endregion
//#region Helpers


exports.default = _default;
const values = [20, 50, 100, 'All'];
const Template = (0, _storybook.story)(args => {
  const [selectedValue, setSelectedValue] = _react.default.useState(undefined);

  return /*#__PURE__*/_react.default.createElement(_Select.Select, _extends({
    "aria-label": "ARIA input fields must have an accessible name",
    popoverPosition: "below",
    value: selectedValue,
    onChange: event => {
      (0, _addonActions.action)('onChange')(event.target.value);
      setSelectedValue(event.target.value);
    }
  }, args), values.map((value, index) => /*#__PURE__*/_react.default.createElement(_SelectItem.SelectItem, {
    key: index,
    value: value
  }, value)));
}, {
  parameters: { ..._storybook.A11Y_ELEMENT__COMPONENT,
    layout: 'centered'
  },
  args: {
    defaultValue: values[0]
  }
});
const users = [{
  name: 'alice',
  id: 0
}, {
  name: 'bob',
  id: 1
}, {
  name: 'carol',
  id: 2
}];
/**
 * Note that objects still need a string representation for `SelectItem`'s `value`.
 * Using `JSON.stringify/parse` is likely not a great solution, but good enough for this demonstration.
 */

const ObjectTemplate = (0, _storybook.story)(args => {
  const [selectedValue, setSelectedValue] = _react.default.useState(users[0]);

  return /*#__PURE__*/_react.default.createElement(_Select.Select, _extends({
    "aria-label": "ARIA input fields must have an accessible name",
    popoverPosition: "below",
    value: selectedValue,
    renderValue: value => value.name,
    onChange: event => {
      (0, _addonActions.action)('onChange')(event.target.value);
      setSelectedValue(JSON.parse(event.target.value));
    }
  }, args), users.map(user => /*#__PURE__*/_react.default.createElement(_SelectItem.SelectItem, {
    key: user.id,
    value: JSON.stringify(user)
  }, user.name)));
}, {
  parameters: { ..._storybook.A11Y_ELEMENT__COMPONENT,
    layout: 'centered'
  }
}); //#endregion
//#region Hero story in Docs

const Open = (0, _storybook.story)(Template, {
  args: {
    open: true
  },
  parameters: {
    a11y: {
      element: _storybook.A11yElement.Popover
    }
  }
}); //#endregion
//#region Distinct configurations

exports.Open = Open;
const Placeholder = (0, _storybook.story)(Template, {
  args: {
    defaultValue: 'Placeholder'
  }
});
exports.Placeholder = Placeholder;
const Disabled = (0, _storybook.story)(Template, {
  args: {
    disabled: true
  }
});
exports.Disabled = Disabled;
const ClickToOpen = (0, _storybook.story)(Template);
exports.ClickToOpen = ClickToOpen;
const ClickToOpenAbove = (0, _storybook.story)(Template, {
  args: {
    popoverPosition: 'above'
  }
});
exports.ClickToOpenAbove = ClickToOpenAbove;
const UsingObjectValues = (0, _storybook.story)(ObjectTemplate); //#endregion

exports.UsingObjectValues = UsingObjectValues;