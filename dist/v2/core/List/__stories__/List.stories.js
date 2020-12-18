"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithSubHeaders = exports.WithMultiLine = exports.WithTextOverflow = exports.WithSecondaryActions = exports.AsButtons = exports.WithInset = exports.TextListWithIcons = exports.TextList = exports.EmptyList = exports.UnstyledList = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _ReadonlyArray = require("fp-ts/lib/ReadonlyArray");

var _storybook = require("../../../../helpers/storybook");

var _ListMeta = _interopRequireDefault(require("./List.meta.json"));

var _List = require("../List");

var _ListItem = require("../ListItem");

var _ListItemIcon = require("../ListItemIcon");

var _ListItemSecondaryAction = require("../ListItemSecondaryAction");

var _ListItemText = require("../ListItemText");

var _ListSubheader = require("../ListSubheader");

var Icons = _interopRequireWildcard(require("../../../icons/Icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _storybook.meta)(_ListMeta.default, {
  title: 'monorail/core/List'
});

exports.default = _default;
const Template = (0, _storybook.story)(args => {
  return /*#__PURE__*/_react.default.createElement(_List.List, args);
}); //#region Hero story in Docs

const UnstyledList = (0, _storybook.story)(Template, {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    layout: 'fullscreen'
  },
  args: {
    disablePadding: true,
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.UnstyledListItem, null, "Foo"), /*#__PURE__*/_react.default.createElement(_ListItem.UnstyledListItem, null, "Bar"), /*#__PURE__*/_react.default.createElement(_ListItem.UnstyledListItem, null, "Baz"))
  }
}); //#endregion
//#region Distinct configurations

exports.UnstyledList = UnstyledList;
const EmptyList = (0, _storybook.story)(Template, {
  parameters: { ..._storybook.DISABLED_ACTIONS
  }
});
exports.EmptyList = EmptyList;
const TextList = (0, _storybook.story)(Template, {
  parameters: { ..._storybook.DISABLED_ACTIONS
  },
  args: {
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Sorry!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Puppy!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })))
  }
});
exports.TextList = TextList;
const TextListWithIcons = (0, _storybook.story)(Template, {
  parameters: { ..._storybook.DISABLED_ACTIONS
  },
  args: {
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Academy, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Apps, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Sorry!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Warning, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Puppy!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.BarChart, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })))
  }
});
exports.TextListWithIcons = TextListWithIcons;
const WithInset = (0, _storybook.story)(Template, {
  parameters: { ..._storybook.DISABLED_ACTIONS
  },
  args: {
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Academy, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      inset: true,
      primary: "No Icon + Inset"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Warning, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      inset: true,
      primary: "You can use inset + icon, but it will look weird!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.AspectRatio, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "No Icon + No inset"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      inset: true,
      primary: "No Icon + Inset"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, null, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.CheckCircle, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })))
  }
});
exports.WithInset = WithInset;
const AsButtons = (0, _storybook.story)(Template, {
  args: {
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Academy, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      inset: true,
      primary: "Sorry!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Warning, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Puppy!"
    })), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      inset: true,
      primary: "Hello!"
    })))
  }
});
exports.AsButtons = AsButtons;
const WithSecondaryActions = (0, _storybook.story)(Template, {
  args: {
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Academy, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello!"
    }), /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null))), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      inset: true,
      primary: "Sorry!"
    }), /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null))), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Warning, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Puppy!"
    }), /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null))), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      inset: true,
      primary: "Hello!"
    }), /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null))))
  }
});
exports.WithSecondaryActions = WithSecondaryActions;
const WithTextOverflow = (0, _storybook.story)(Template, {
  args: {
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Academy, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primaryTextProps: {
        noWrap: true
      },
      primary: "Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
    }), /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null))), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primaryTextProps: {
        noWrap: true
      },
      primary: "Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
    })))
  }
});
exports.WithTextOverflow = WithTextOverflow;
const WithMultiLine = (0, _storybook.story)(Template, {
  args: {
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Academy, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
    }), /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null))), /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
      button: true,
      onClick: (0, _addonActions.action)('onClick')
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
      primary: "Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
    })))
  }
});
exports.WithMultiLine = WithMultiLine;
const WithSubHeaders = (0, _storybook.story)(() => {
  const SubheaderItem = () => /*#__PURE__*/_react.default.createElement(_ListItem.ListItem, {
    button: true,
    onClick: (0, _addonActions.action)('onClick')
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icons.Academy, null)), /*#__PURE__*/_react.default.createElement(_ListItemText.ListItemText, {
    primaryTextProps: {
      noWrap: true
    },
    primary: "Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. Hello! I am an item that has a lot of text to display, so much that it will likely cause the text to grow outside its bounding box. "
  }), /*#__PURE__*/_react.default.createElement(_ListItemSecondaryAction.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(Icons.CheckStar, null)));

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _ReadonlyArray.range)(0, 10).map(i => /*#__PURE__*/_react.default.createElement(_List.List, {
    key: i,
    subheader: /*#__PURE__*/_react.default.createElement(_ListSubheader.ListSubheader, null, "List subheader")
  }, (0, _ReadonlyArray.range)(0, 10).map(i => /*#__PURE__*/_react.default.createElement(SubheaderItem, {
    key: i
  })))));
}, {
  parameters: { ..._storybook.DISABLED_CONTROLS,
    ..._storybook.DISABLED_ACTIONS
  }
}); //#endregion

exports.WithSubHeaders = WithSubHeaders;