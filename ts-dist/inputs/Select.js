import React from 'react';
import styled, { css } from 'styled-components';
import { typography, FontSizes } from '@monorail/helpers/exports';
const SelectGroupWrapper = styled.div(({ cssOverrides }) => css `
    margin: 0;
    padding: 0;
    border: 0;

    ${cssOverrides};
  `);
const SelectElementWrapper = styled.div `
  background-color: white;
  width: 100%;
  height: 24px;
  border: 1px solid #e5e5e5;
  padding: 0 0 0 0;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;
const SelectElement = styled.select `
  width: calc(100% - 8px);
  height: 22px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Label = styled.p `
  ${typography(500, FontSizes.Title5)};
  margin-bottom: 4px;
  height: 16px;
`;
export const Select = ({ label, onSelect, onBlur, value, required, placeholder, options, cssOverrides, name, onChange, }) => {
    return (React.createElement(SelectGroupWrapper, { cssOverrides: cssOverrides },
        label && (React.createElement(Label, null,
            label,
            required && '*')),
        React.createElement(SelectElementWrapper, null,
            React.createElement(SelectElement, { name: name, placeholder: placeholder || 'Select', value: value, onBlur: onBlur, onChange: e => {
                    onChange && onChange(e);
                    onSelect && onSelect(e.target.value);
                } }, options.map((o, key) => (React.createElement("option", { key: o.value, value: o.value }, o.label)))))));
};
//# sourceMappingURL=Select.js.map