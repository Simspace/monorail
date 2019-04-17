import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import { TextField } from './TextField';
import { flexFlow, typography, FontSizes } from '@monorail/helpers/exports';
// TODO - duplicate from text field container
const MultipleTextFieldContainer = styled.label(({ cssOverrides }) => css `
    ${flexFlow()};

    float: none;
    width: 100%;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${cssOverrides};
  `);
// TODO - consolidate label into a common component
export const BBTextFieldLabel = styled.p `
  ${typography(500, FontSizes.Title5)};
  margin: 4px 0;
`;
const TextFieldsWrapper = styled.div `
  display: flex;
  align-items: center;
`;
export class MultipleTextField extends Component {
    render() {
        const { label, textFields, cssOverrides, onChange, children } = this.props;
        return (React.createElement(MultipleTextFieldContainer, { cssOverrides: cssOverrides },
            !isNil(label) && React.createElement(BBTextFieldLabel, null, label),
            React.createElement(TextFieldsWrapper, null,
                textFields.map((t, k) => (React.createElement(TextField, Object.assign({ key: k }, t, { onChange: e => onChange(t.key, t.type === 'number' ? Number(e.target.value) : e.target.value), cssOverrides: {
                        paddingLeft: k === 0 ? '0px' : '4px',
                        paddingRight: k === textFields.length - 1 ? '0px' : '4px',
                        ...(t.cssOverrides || {}),
                    } })))),
                children && children)));
    }
}
//# sourceMappingURL=MultipleTextField.js.map