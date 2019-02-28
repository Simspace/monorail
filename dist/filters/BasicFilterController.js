"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicSorterController = exports.BasicFilterController = exports.ChoiceSorterCss = void 0;

var _Array = require("fp-ts/lib/Array");

var _react = _interopRequireWildcard(require("react"));

var _Status = require("../status/Status");

var _styledComponents = require("styled-components");

var _CommonStyles = require("../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const FilterStatusCSS = _styledComponents.css`
  margin-left: 4px;
`;
const ChoiceSorterCss = _styledComponents.css`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Content)};

  cursor: pointer;
  padding: 8px;

  :hover {
    background: hsla(219, 100%, 54%, 0.1);
  }

  i {
    display: none;
  }
`;
exports.ChoiceSorterCss = ChoiceSorterCss;
const ChoiceSorterSelectedCss = _styledComponents.css`
  background: hsla(219, 100%, 54%, 0.1);
`;

class BasicFilterController extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: ''
    };

    this.getTitle = () => {
      const {
        group
      } = this.props;

      const selectedFilters = _Array.array.filter(group.items, item => item.selected);

      const activeFilterCount = selectedFilters.length;

      if (activeFilterCount === group.items.length) {
        // If unchanged, just show label
        return group.label;
      } else if (activeFilterCount > 1) {
        // If changed and label is greater than 1, show the count
        return _react.default.createElement(_react.default.Fragment, null, group.label, _react.default.createElement(_Status.Status, {
          css: FilterStatusCSS
        }, activeFilterCount));
      } else {
        // If equal to 1, show the label and the single active filter
        return `${group.label} - ${activeFilterCount ? selectedFilters[0].label : 'None'}`;
      }
    };

    this.updateTitle = () => this.setState({
      title: this.getTitle()
    });

    this.onFilterChange = filter => {
      filter.selected = !filter.selected;
      this.updateTitle();
    };

    this.componentDidMount = this.updateTitle;
  }

  render() {
    const {
      children,
      document,
      group
    } = this.props;
    const {
      title
    } = this.state;
    return children({
      collection: group.items,
      document,
      title,
      isActive: !group.items.every(item => item.selected),
      onChange: this.onFilterChange,
      key: group.key
    });
  }

}

exports.BasicFilterController = BasicFilterController;

class BasicSorterController extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: ''
    };

    this.getTitle = () => {
      const {
        group
      } = this.props;
      const selectedSorter = group.items.find(item => item.selected);

      if (selectedSorter) {
        return group.label + ' ' + selectedSorter.label;
      } else {
        return group.label;
      }
    };

    this.updateTitle = () => this.setState({
      title: this.getTitle()
    });

    this.sorterItemStyle = selected => selected && ChoiceSorterSelectedCss;

    this.onSorterChange = key => {
      const {
        group
      } = this.props;
      group.items.map(item => {
        item.selected = item.value === key && !item.selected;
      });
      this.updateTitle();
    };

    this.componentDidMount = this.updateTitle;
  }

  render() {
    const {
      children,
      document,
      group
    } = this.props;
    const {
      title
    } = this.state;
    return children({
      key: group.key,
      collection: group.items,
      document,
      title,
      isActive: group.items.some(item => item.selected),
      onChange: this.onSorterChange,
      style: this.sorterItemStyle
    });
  }

}

exports.BasicSorterController = BasicSorterController;