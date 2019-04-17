import React from 'react';
import styled from 'styled-components';
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards';
import { typography, FontSizes } from '@monorail/helpers/exports';
import { Choice } from './Choice';
const RadioGroupWrapper = styled.fieldset `
  margin: 0;
  padding: 0;
  border: 0;
`;
const Label = styled.p `
  ${typography(500, FontSizes.Title5)};
  margin-bottom: 8px;
  height: 16px;
`;
const InfoText = styled.p `
  ${typography(300, FontSizes.Title5)};
  margin-left: 32px;
`;
const defaultOptions = {
    label: '',
    key: '',
    info: '',
};
export const RadioGroup = ({ label, options, onSelect, value, required, ...otherProps }) => {
    return (React.createElement(RadioGroupWrapper, Object.assign({}, otherProps),
        !isEmptyString(label) && (React.createElement(Label, null,
            label,
            required && '*')),
        options.map((o = defaultOptions, k) => (React.createElement("div", { key: k + o.label },
            React.createElement(Choice, { type: "radio", name: label, checked: o.key === value, value: o.key, onChange: e => onSelect(o.key, e), required: required, readOnly: false }, o.label),
            React.createElement(InfoText, null, o.key === value && !isEmptyString(o.info)))))));
};
RadioGroup.defaultProps = {
    label: '',
    required: false,
};
//# sourceMappingURL=RadioGroup.js.map