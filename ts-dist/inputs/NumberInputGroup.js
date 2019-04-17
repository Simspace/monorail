import React from 'react';
import styled from 'styled-components';
import { lookup } from 'fp-ts/lib/Record';
import { typography, FontSizes } from '@monorail/helpers/exports';
const NumberInputGroupWrapper = styled.div ``;
const Label = styled.p `
  ${typography(500, FontSizes.Title5)};
  margin-bottom: 8px;
  height: 16px;
`;
const Input = styled.input `
  flex: 0 0 50px;
  height: 24px !important;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }
`;
const InputItemWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 0 0 0 8px;
`;
const InputItemLabel = styled.p `
  ${typography(500, FontSizes.Title5)};
`;
export const NumberInputGroup = ({ label, items, onSelect, value, required, }) => {
    return (React.createElement(NumberInputGroupWrapper, null,
        label && (React.createElement(Label, null,
            label,
            required && '*')),
        items.map((item, k) => {
            const val = lookup(item.key, value).getOrElse(0);
            return (React.createElement(InputItemWrapper, { key: k },
                React.createElement(InputItemLabel, null, item.label),
                React.createElement(Input, { min: item.min, max: item.max, type: "number", name: label, key: k, value: val, onChange: v => onSelect(item.key, Number(v.target.value)), required: required })));
        })));
};
//# sourceMappingURL=NumberInputGroup.js.map