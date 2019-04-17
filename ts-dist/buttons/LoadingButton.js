import React, { Component } from 'react';
import { Button, buttonDefaultProps } from './Button';
/**
 * Takes an `onClick` that returns a Promise and toggles loading/disabled state
 */
export class LoadingButton extends Component {
    constructor() {
        super(...arguments);
        this.state = { loading: false };
        this._isMounted = false;
        this.onClick = async (e) => {
            const origOnClick = this.props.onClick;
            if (!origOnClick) {
                return;
            }
            this.setState({ loading: true });
            try {
                await origOnClick(e);
            }
            finally {
                if (this._isMounted) {
                    this.setState({ loading: false });
                }
            }
        };
    }
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        const { loadingText, ...rest } = this.props;
        return (React.createElement(Button, Object.assign({}, rest, { disabled: this.props.disabled || this.state.loading, onClick: this.onClick }), this.state.loading ? loadingText : this.props.children));
    }
}
LoadingButton.defaultProps = {
    ...buttonDefaultProps,
    loadingText: 'Loading...',
};
//# sourceMappingURL=LoadingButton.js.map