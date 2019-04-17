import { array } from 'fp-ts/lib/Array';
import React, { Component } from 'react';
import { Status } from '@monorail/status/Status';
import { css } from 'styled-components';
import { FontSizes, typography } from '@monorail/helpers/exports';
const FilterStatusCSS = css `
  margin-left: 4px;
`;
export const ChoiceSorterCss = css `
  ${typography(500, FontSizes.Content)};

  cursor: pointer;
  padding: 8px;

  :hover {
    background: hsla(219, 100%, 54%, 0.1);
  }

  i {
    display: none;
  }
`;
const ChoiceSorterSelectedCss = css `
  background: hsla(219, 100%, 54%, 0.1);
`;
export class BasicFilterController extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
        };
        this.getTitle = () => {
            const { group } = this.props;
            const selectedFilters = array.filter(group.items, item => item.selected);
            const activeFilterCount = selectedFilters.length;
            if (activeFilterCount === group.items.length) {
                // If unchanged, just show label
                return group.label;
            }
            else if (activeFilterCount > 1) {
                // If changed and label is greater than 1, show the count
                return (React.createElement(React.Fragment, null,
                    group.label,
                    React.createElement(Status, { cssOverrides: FilterStatusCSS }, activeFilterCount)));
            }
            else {
                // If equal to 1, show the label and the single active filter
                return `${group.label} - ${activeFilterCount ? selectedFilters[0].label : 'None'}`;
            }
        };
        this.updateTitle = () => this.setState({ title: this.getTitle() });
        this.onFilterChange = (filter) => {
            filter.selected = !filter.selected;
            this.updateTitle();
        };
        this.componentDidMount = this.updateTitle;
    }
    render() {
        const { children, document, group } = this.props;
        const { title } = this.state;
        return children({
            collection: group.items,
            document,
            title,
            isActive: !group.items.every(item => item.selected),
            onChange: this.onFilterChange,
            key: group.key,
        });
    }
}
export class BasicSorterController extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
        };
        this.getTitle = () => {
            const { group } = this.props;
            const selectedSorter = group.items.find(item => item.selected);
            if (selectedSorter) {
                return group.label + ' ' + selectedSorter.label;
            }
            else {
                return group.label;
            }
        };
        this.updateTitle = () => this.setState({ title: this.getTitle() });
        this.sorterItemStyle = (selected) => selected && ChoiceSorterSelectedCss;
        this.onSorterChange = (key) => {
            const { group } = this.props;
            group.items.map(item => {
                item.selected = item.value === key && !item.selected;
            });
            this.updateTitle();
        };
        this.componentDidMount = this.updateTitle;
    }
    render() {
        const { children, document, group } = this.props;
        const { title } = this.state;
        return children({
            key: group.key,
            collection: group.items,
            document,
            title,
            isActive: group.items.some(item => item.selected),
            onChange: this.onSorterChange,
            style: this.sorterItemStyle,
        });
    }
}
//# sourceMappingURL=BasicFilterController.js.map