import React from 'react';
import styled, { css } from 'styled-components';
import { Select } from './Select';
import { typography, FontSizes } from '@monorail/helpers/exports';
import { Choice } from './Choice';
const CheckmarkSelectGroupWrapper = styled.div(({ cssOverrides }) => css `
    ${cssOverrides};
  `);
const Label = styled.p `
  ${typography(500, FontSizes.Title5)};

  margin-bottom: 4px;
  height: 16px;
`;
const CheckmarkSelectWrapper = styled.div(({ cssOverrides }) => css `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${cssOverrides};
  `);
const CheckmarkSelectLabel = styled.p `
  ${typography(500, FontSizes.Title5)};
  flex-grow: 1;
`;
const CheckmarkSelectContent = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
`;
export const CheckmarkSelectGroup = ({ cssOverrides, label, items, onSelect, onCheck, }) => {
    return (React.createElement(CheckmarkSelectGroupWrapper, { cssOverrides: cssOverrides },
        label && React.createElement(Label, null, label),
        items.map((item, k) => {
            const { label: itemLabel, enabled, ...otherProps } = item;
            return (React.createElement(CheckmarkSelectWrapper, { key: k, cssOverrides: { marginBottom: k !== items.length ? '8px' : 0 } },
                React.createElement(Choice, { type: "checkbox", checked: enabled, onChange: () => onCheck(otherProps.key, !enabled) },
                    React.createElement(CheckmarkSelectContent, null,
                        React.createElement(CheckmarkSelectLabel, null, itemLabel),
                        React.createElement(Select, Object.assign({}, otherProps, { onSelect: v => onSelect(otherProps.key, v), cssOverrides: {
                                flex: '0 0 100px',
                            } }))))));
        })));
};
//# sourceMappingURL=CheckmarkSelectGroup.js.map