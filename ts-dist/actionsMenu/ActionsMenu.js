import React from 'react';
import { PopOver } from '@monorail/popOver/PopOver';
import { SimpleListItem } from '@monorail/list/List';
import { IconButton } from '@monorail/buttons/IconButton';
import { Menu } from '@monorail/menu/Menu';
import { ButtonDisplay } from '@monorail/buttons/buttonTypes';
/*
* Components
*/
export const ActionsMenu = ({ menuItems }) => (React.createElement(React.Fragment, null, menuItems.length > 0 && (React.createElement(PopOver, { popOver: props => (React.createElement(Menu, Object.assign({}, props), menuItems.map((menuItem, idx) => (React.createElement(SimpleListItem, { key: idx + menuItem.label, size: 32, leftIcon: menuItem.iconName, primaryText: menuItem.label, onClick: menuItem.onClick }))))), toggle: props => (React.createElement(IconButton, Object.assign({ icon: "more_vert", display: ButtonDisplay.Chromeless }, props))) }))));
//# sourceMappingURL=ActionsMenu.js.map