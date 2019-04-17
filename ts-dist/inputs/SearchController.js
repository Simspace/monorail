import { Component } from 'react';
export class SearchController extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            searchString: '',
        };
        this.onChange = (newSearchString) => {
            this.setState(() => ({
                searchString: newSearchString,
            }));
        };
    }
    render() {
        const { children } = this.props;
        const { searchString } = this.state;
        return children({
            value: searchString,
            onChange: this.onChange,
            compareSearch: stringToCompare => {
                if (searchString === '') {
                    return true;
                }
                return stringToCompare
                    .toLocaleLowerCase()
                    .includes(searchString.toLocaleLowerCase());
            },
        });
    }
}
//# sourceMappingURL=SearchController.js.map