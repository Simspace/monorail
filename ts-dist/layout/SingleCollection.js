import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { flexFlow } from '@monorail/helpers/exports';
import { ScrollAnimation } from '@monorail/layout/ScrollAnimation';
const SingleCollectionContainer = styled.div `
  ${flexFlow()};

  overflow-x: auto;
  height: 100%;
`;
export class SingleCollection extends Component {
    constructor() {
        super(...arguments);
        this.singleCollectionContainer = createRef();
        this.pageHeaderShadow = createRef();
    }
    render() {
        const { header, content } = this.props;
        return (React.createElement(ScrollAnimation, { animationFunction: calculateOpacity, animatingElement: this.pageHeaderShadow, scrollContainer: this.singleCollectionContainer, animationTermination: 64 },
            header({
                shadowRef: this.pageHeaderShadow,
                willAnimateShadow: true,
            }),
            React.createElement(SingleCollectionContainer, { ref: this.singleCollectionContainer }, content)));
    }
}
const calculateOpacity = ({ scrollAmount, animationTermination }) => {
    if (scrollAmount === 0) {
        return 'opacity: 0;';
    }
    if (scrollAmount > animationTermination) {
        return 'opacity: 0.9999;';
    }
    return `opacity: ${Math.min((0.9999 / animationTermination) * scrollAmount, 0.9999)};`;
};
//# sourceMappingURL=SingleCollection.js.map