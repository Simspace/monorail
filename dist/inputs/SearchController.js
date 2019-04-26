"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchController = void 0;

var _react = require("react");

class SearchController extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      searchString: ''
    };

    this.onChange = newSearchString => {
      this.setState(() => ({
        searchString: newSearchString
      }));
    };
  }

  render() {
    const {
      children
    } = this.props;
    const {
      searchString
    } = this.state;
    return children({
      value: searchString,
      onChange: this.onChange,
      compareSearch: stringToCompare => {
        if (searchString === '') {
          return true;
        }

        return stringToCompare.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
      }
    });
  }

}

exports.SearchController = SearchController;