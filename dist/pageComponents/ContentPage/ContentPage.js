"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _size = require("../../helpers/size");

var _styledComponents = require("../../helpers/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContentPage = props => {
  const {
    children,
    fullWidth = false
  } = props;
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme => ({ ...theme,
      size: { ...theme.size,
        page: {
          width: fullWidth ? 'auto' : 1064 + _size.sizes.page.sideSpace * 2
        }
      }
    })
  }, _react.default.createElement(_react.default.Fragment, null, children));
};

exports.ContentPage = ContentPage;