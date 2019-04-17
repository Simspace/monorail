import React, { Component, createRef } from 'react';
import styled, { css } from 'styled-components';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import { getColor, Colors, flexFlow, typography, FontSizes, borderRadius, BorderRadius, } from '@monorail/helpers/exports';
import { Icon } from '@monorail/icon/Icon';
import { baseChromelessStyles } from '@monorail/helpers/baseStyles';
/*
* Styles
*/
const getStateStyles = (step, styles) => {
    if (step.isActive) {
        return styles.isActive;
    }
    else if (step.isCompleted) {
        return styles.isCompleted;
    }
    return styles.isDisabled;
};
const StepStateStyles = {
    isActive: css ``,
    isDisabled: css `
    pointer-events: none;
  `,
    isCompleted: css ``,
};
const BodyStateStyles = {
    isActive: css ``,
    isDisabled: css `
    opacity: 0.4;
  `,
    isCompleted: css ``,
};
const NumberStateStyles = (darkMode) => ({
    isActive: css `
    background-color: ${getColor(Colors.BrandLightBlue)};
    border-color: ${getColor(Colors.BrandLightBlue)};
    color: ${getColor(Colors.White)};
  `,
    isDisabled: css ``,
    isCompleted: css `
    background-color: ${getColor(Colors.White)};
    border-color: ${darkMode
        ? getColor(Colors.White)
        : getColor(Colors.BrandLightBlue)};
  `,
});
const HorizontalStepperContainer = styled.div `
  ${flexFlow('row')};
  justify-content: flex-start;
  flex-shrink: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;
const HorizontalStepperWrapper = styled.div `
  ${flexFlow('row')};
  height: 100%;
  justify-content: flex-start;
  overflow-y: auto;
  flex-shrink: 0;
  max-width: 100%;
`;
const Step = styled.div(({ step }) => css `
    ${flexFlow('row')};
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all ease 0.25s;
    cursor: pointer;

    ${getStateStyles(step, StepStateStyles)};
  `);
const Body = styled.div(({ step, darkMode }) => css `
    ${flexFlow('row')};
    ${baseChromelessStyles(darkMode ? Colors.White : Colors.BrandLightBlue)};
    align-items: center;
    padding: 8px;
    height: 100%;

    ${getStateStyles(step, BodyStateStyles)};
  `);
const StyledIcon = styled(Icon)(({ darkMode }) => css `
    color: ${darkMode
    ? getColor(Colors.White)
    : getColor(Colors.BrandLightBlue)};
    margin: auto 8px;
    flex-shrink: 0;
  `);
const Number = styled.div(({ step, darkMode }) => css `
    ${flexFlow('row')};
    ${borderRadius(BorderRadius.Round)};
    ${typography(700, FontSizes.Title5)};

    align-items: center;
    border: 2px solid
      ${darkMode ? getColor(Colors.White) : getColor(Colors.Black54)};
    color: ${darkMode ? getColor(Colors.White) : getColor(Colors.Black54)};
    flex-shrink: 0;
    height: 20px;
    justify-content: center;
    margin: auto 8px;
    width: 20px;

    ${getStateStyles(step, NumberStateStyles(darkMode))};
  `);
const Text = styled.div `
  ${flexFlow('column')};
  padding-right: 8px;
`;
const Title = styled.div(({ darkMode }) => css `
    color: ${darkMode ? getColor(Colors.White) : getColor(Colors.Black74)};
    ${typography(700, FontSizes.Title4)};
  `);
const Subtitle = styled.div(({ darkMode }) => css `
    color: ${darkMode ? getColor(Colors.White) : getColor(Colors.Black74)};
    ${typography(300, FontSizes.Title5)};
  `);
const Line = styled.div(({ darkMode }) => css `
    background-color: ${darkMode
    ? getColor(Colors.White)
    : getColor(Colors.Black24)};
    height: 1px;
    width: 32px;
    margin: auto 8px;
  `);
/*
* Components
*/
export class HorizontalStepper extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeStepIndex: 0,
        };
        this.activeStepRef = createRef();
        this.scrollStepIntoView = () => {
            const activeStep = this.activeStepRef.current;
            if (!isNil(activeStep)) {
                activeStep.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            }
        };
        this.renderSection = (step, index) => {
            const { onStepClick, darkMode, steps } = this.props;
            const { activeStepIndex } = this.state;
            if (step.isActive && activeStepIndex !== index) {
                this.setState({ activeStepIndex: index });
            }
            return (React.createElement(Step, { key: index, step: step, onClick: () => onStepClick(step, index), "data-test-id": `horizontal-stepper-step-${index}`, ref: step.isActive ? this.activeStepRef : null },
                React.createElement(Body, { darkMode: darkMode, step: step },
                    step.isCompleted && !step.isActive ? (React.createElement(StyledIcon, { icon: "check_circle_outline", darkMode: darkMode, size: 20 })) : (React.createElement(Number, { darkMode: darkMode, step: step }, index + 1)),
                    React.createElement(Text, null,
                        React.createElement(Title, { darkMode: darkMode }, step.label),
                        !isNil(step.subtitle) && (React.createElement(Subtitle, { darkMode: darkMode }, step.subtitle)))),
                index !== steps.length - 1 && React.createElement(Line, { darkMode: darkMode })));
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.activeStepIndex !== this.state.activeStepIndex) {
            this.scrollStepIntoView();
        }
    }
    render() {
        const { className } = this.props;
        return (React.createElement(HorizontalStepperContainer, { className: className },
            React.createElement(HorizontalStepperWrapper, null, this.props.steps.map(this.renderSection))));
    }
}
HorizontalStepper.defaultProps = {
    darkMode: false,
};
//# sourceMappingURL=HorizontalStepper.js.map