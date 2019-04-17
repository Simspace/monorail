import { Component } from 'react';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
export class ScrollAnimation extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasEventHandler: false,
        };
        this.handleScroll = event => {
            const { animationTermination, animatingElement: { current: animatingElement }, animationFunction, } = this.props;
            if (!isNil(event.currentTarget) && !isNil(animatingElement)) {
                const scrollElement = event.currentTarget; /* Josh don't hate me! */
                const scrollAmount = scrollElement.scrollTop;
                requestAnimationFrame(() => {
                    if (scrollAmount <= animationTermination) {
                        animatingElement.style.cssText = animationFunction({
                            scrollAmount,
                            animationTermination,
                        });
                    }
                });
            }
        };
    }
    componentDidMount() {
        const { scrollContainer } = this.props;
        const { hasEventHandler } = this.state;
        if (!hasEventHandler && !isNil(scrollContainer.current)) {
            this.setState(() => ({ hasEventHandler: true }));
            scrollContainer.current.addEventListener('scroll', this.handleScroll);
        }
    }
    componentDidUpdate() {
        const { scrollContainer: { current: scrollContainer }, } = this.props;
        const { hasEventHandler } = this.state;
        if (!hasEventHandler && !isNil(scrollContainer)) {
            this.setState(() => ({ hasEventHandler: true }));
            scrollContainer.addEventListener('scroll', this.handleScroll);
        }
    }
    componentWillUnmount() {
        const { scrollContainer: { current: scrollContainer }, } = this.props;
        if (!isNil(scrollContainer)) {
            scrollContainer.removeEventListener('scroll', this.handleScroll);
        }
    }
    render() {
        const { children } = this.props;
        return children;
    }
}
//# sourceMappingURL=ScrollAnimation.js.map