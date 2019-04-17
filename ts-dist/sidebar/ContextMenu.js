import React, { Component, createRef, } from 'react';
import { SidebarDropDown } from '@monorail/sidebar/SidebarDropDown';
import { Search } from '@monorail/inputs/Search';
import { ListContainer, ListItemGraphic, ListItem, ListItemPrimaryText, ListItemText, ListItemSecondaryText, } from '@monorail/list/List';
import Link from 'react-router/lib/Link';
import { Colors, getColor, ellipsis, flexFlow, FontSizes, Sizes, typography, } from '@monorail/helpers/exports';
import styled, { css } from 'styled-components';
import { SearchController } from '@monorail/inputs/SearchController';
import { array, isEmpty } from 'fp-ts/lib/Array';
import { some, none } from 'fp-ts/lib/Option';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
const SearchContainer = styled.div `
  ${flexFlow('row')};

  align-items: center;
  flex-shrink: 0;
`;
const MenuHeader = styled.span(({ cssOverrides }) => css `
    ${typography(500, FontSizes.Title5, '12px')};
    ${ellipsis};

    color: ${getColor(Colors.Black62)};
    flex-shrink: 0;

    ${cssOverrides};
  `);
const MenuItemIconRow = styled.div `
  ${flexFlow('row')};

  flex: 1 1 100%;
  margin: 8px 6px 12px;
`;
const ContextMenuItem = ({ leftIcon, rightIcon, primaryText, secondaryText, children, dense, meta, size, cssOverrides, ...otherProps }) => (React.createElement(ListItem, Object.assign({ dense: dense, size: size, cssOverrides: css `
      padding: 0 6px;

      ${cssOverrides};
    ` }, otherProps),
    !isNil(leftIcon) && (React.createElement(ListItemGraphic, { icon: leftIcon, dense: dense, cssOverrides: css `
          margin-top: 12px;
        ` })),
    isNil(secondaryText) && isNil(meta) ? (React.createElement(ListItemPrimaryText, { cssOverrides: css `
          margin-top: 12px;
        ` }, primaryText)) : (React.createElement(ListItemText, null,
        React.createElement(ListItemPrimaryText, { cssOverrides: css `
            margin-top: 6px;
          ` }, primaryText),
        isNil(secondaryText) ? null : (React.createElement(ListItemSecondaryText, { cssOverrides: css `
              margin-bottom: 6px;
            ` }, secondaryText)),
        meta)),
    !isNil(rightIcon) && React.createElement(ListItemGraphic, { icon: rightIcon, dense: dense }),
    children));
export class ContextMenu extends Component {
    constructor() {
        super(...arguments);
        this.searchRef = createRef();
        this.renderContextMenuItems = (compareSearch) => {
            const { contextItems, icon, onClick } = this.props;
            return contextItems.map(event => {
                const groupHeader = (React.createElement(MenuHeader, { key: event.title }, event.title));
                const items = event.items
                    .filter(item => compareSearch(item.title) ||
                    compareSearch(item.description) ||
                    compareSearch(event.title))
                    .map(item => (React.createElement(ContextMenuItem, { as: ({ as: _as, cssOverrides: _cssOverrides, ...linkProps }) => (React.createElement(Link, Object.assign({}, linkProps))), key: item.key, leftIcon: icon, primaryText: item.title, secondaryText: item.description, size: Sizes.DP40, to: item.link, onClick: onClick, tabIndex: 1, meta: isNil(item.icons) ? null : (React.createElement(MenuItemIconRow, null, item.icons)) })));
                return items.length > 0 ? some([groupHeader, items]) : none;
            });
        };
    }
    componentDidUpdate(prevProps) {
        const searchRef = this.searchRef.current;
        if (!isNil(searchRef) && !prevProps.isOpen && this.props.isOpen) {
            window.setTimeout(() => searchRef.focus(), 50);
        }
    }
    render() {
        const { isOpen, position, onClick, renderFilter, togglePopOver, width, } = this.props;
        return (React.createElement(SidebarDropDown, { isOpen: isOpen, position: position, onClick: onClick, togglePopOver: togglePopOver, width: width },
            React.createElement(SearchController, null, ({ compareSearch, value, onChange }) => {
                const contextMenuItems = array.compact(this.renderContextMenuItems(compareSearch));
                return (React.createElement(React.Fragment, null,
                    React.createElement(SearchContainer, null,
                        React.createElement(Search, { value: value, onChange: onChange, cssOverrides: css `
                      flex-grow: 1;
                      margin: 12px;
                      flex-shrink: unset;
                    `, searchRef: this.searchRef }),
                        renderFilter()),
                    React.createElement(ListContainer, { cssOverrides: css `
                    padding: 0 0 4px;
                  `, emptyText: "Loading..." }, isEmpty(contextMenuItems) ? (React.createElement(ContextMenuItem, { size: Sizes.DP40, primaryText: "No results." })) : (contextMenuItems))));
            })));
    }
}
ContextMenu.defaultProps = {
    renderFilter: () => null,
};
//# sourceMappingURL=ContextMenu.js.map