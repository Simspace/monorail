import { newIO, runIO } from '@monorail/sharedHelpers/fp-ts-ext/IO';
import { constVoid, o } from '@monorail/sharedHelpers/fp-ts-ext/function';
import { mkRecordKeyOptional } from '@monorail/sharedHelpers/optics';
import { findIndex, toLower } from '@monorail/sharedHelpers/strings';
import { len, map, notAny } from '@monorail/sharedHelpers/fp-ts-ext/Array';
import { fold } from '@monorail/sharedHelpers/fp-ts-ext/Option';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import { array, findFirst, snoc } from 'fp-ts/lib/Array';
import { constant } from 'fp-ts/lib/function';
import { isNone, fromNullable } from 'fp-ts/lib/Option';
import { insert } from 'fp-ts/lib/Record';
import { Lens, Optional } from 'monocle-ts';
import { Component } from 'react';
import { isEqual } from 'lodash/fp';
const intializeFilterState = (filterGroups) => {
    const initStrMap = {};
    const initFilterState = {};
    return array.reduce(filterGroups, initFilterState, (groups, group) => insert(group.id, array.reduce(group.filters, initStrMap, (filters, filterItem) => insert(filterItem.value, true, filters)), groups));
};
/**
 * Helper function to reduce the boilerplate of creating typed a `FilterGroup`
 */
export const createFilterGroup = (collectionItem) => collectionItem;
export class FilterCollection extends Component {
    constructor() {
        super(...arguments);
        this.initialFilterState = intializeFilterState(this.props.filterGroups);
        this.state = {
            searchText: '',
            filterState: this.initialFilterState,
            sorterGroup: this.props.sorterGroup,
        };
        this.mkStatePropLens = Lens.fromProp();
        this.stateToFilterStateLens = this.mkStatePropLens('filterState');
        this.stateToSearchTextLens = this.mkStatePropLens('searchText');
        this.stateToSorterGroupOptional = Optional.fromNullableProp()('sorterGroup');
        this.sorterGroupToSortersLens = Lens.fromProp()('sorters');
        this.stateToSortersOptional = this.stateToSorterGroupOptional.composeLens(this.sorterGroupToSortersLens);
        this.onSorterChange = (key) => {
            const { sorterGroup } = this.state;
            const sorterGroupOpt = fromNullable(sorterGroup);
            const toggleSelected = (s) => s.key === key || s.selected ? { ...s, selected: !s.selected } : s;
            const transition = this.stateToSortersOptional.modify(map(toggleSelected));
            const setStateIO = newIO(() => this.setState(transition));
            const constSetStateIO = constant(setStateIO);
            const noOpIO = newIO(constVoid);
            const onSorterChangeIO = sorterGroupOpt.fold(noOpIO, constSetStateIO);
            runIO(onSorterChangeIO);
        };
        this.onFilterChange = (groupKey, filterKey, value) => {
            const stateToFilterKeyOptional = this.stateToFilterStateLens
                .composeOptional(mkRecordKeyOptional(groupKey))
                .composeOptional(mkRecordKeyOptional(filterKey));
            const transition = stateToFilterKeyOptional.set(value);
            const setStateIO = newIO(() => this.setState(transition));
            runIO(setStateIO);
        };
        this.resetFilters = () => {
            const transition = this.stateToFilterStateLens.set(this.initialFilterState);
            const setStateIO = newIO(() => this.setState(transition));
            runIO(setStateIO);
        };
        this.onSearchChange = (searchText) => {
            const transition = this.stateToSearchTextLens.set(searchText);
            const setStateIO = newIO(() => this.setState(transition));
            runIO(setStateIO);
        };
        this.renderCollection = () => {
            const { catalog, itemRender, searchByKey, filterGroups, sorterGroup, } = this.props;
            const { searchText, filterState } = this.state;
            // sanitize search text
            const sanitizedSearchText = toLower(searchText);
            // Here we loop through all the filter groups and filter out the
            // filters that are unchecked. This is an optimization so
            // we don't need to do this work every time in the below map
            const initStrArr = [];
            const getMakeAppliedFilters = (group) => (appliedFilters, filterItem) => 
            // if the filter is true, add it to the applied filters array
            filterState[group.id][filterItem.value]
                ? snoc(appliedFilters, filterItem.value)
                : appliedFilters;
            const toAppliedFilterGroup = (group) => {
                // couldn't use spread without casting due to below issue:
                // https://github.com/Microsoft/TypeScript/pull/13288
                const result = {
                    label: group.label,
                    filterKey: group.filterKey,
                    transform: group.transform,
                    filters: array.reduce(group.filters, initStrArr, getMakeAppliedFilters(group)),
                };
                return result;
            };
            const appliedFilterGroups = array.map(filterGroups, toAppliedFilterGroup);
            const filtered = array.filter(catalog, catalogItem => {
                // If search exists and item does not match, filter it out
                const searchValue = catalogItem[searchByKey];
                const findIndexLocaleLower = o(findIndex(sanitizedSearchText), toLower);
                const isNotFound = o((x) => isNone(x), findIndexLocaleLower);
                if (typeof searchValue !== 'string') {
                    console.error('tried to search non-string value'); // tslint:disable-line:no-console
                }
                else if (len(searchText) > 0 && isNotFound(searchValue)) {
                    return false;
                }
                // Otherwise loop through filters groups and make sure that for
                // each filter group that at least one of the applied filters matches
                // the item, otherwise filter the item out
                const doesMatchFilter = notAny(appliedFilterGroups, group => {
                    // Check if the filter matches the item data after
                    // its been run through the filter transform
                    const matches = (filterTerm) => {
                        const target = group.filterKey;
                        const value = catalogItem[target];
                        if (isNil(group.transform) && typeof value === 'string') {
                            return filterTerm === value;
                        }
                        else if (!isNil(group.transform)) {
                            return filterTerm === group.transform(value);
                        }
                        else {
                            const errorMsg = `error: lookup value for ${group.filterKey}` +
                                `must be a string, but received a ${typeof value} (${value})`;
                            console.error(errorMsg); // tslint:disable-line:no-console
                            throw new Error(errorMsg);
                        }
                    };
                    // If none of the filters match, this will return
                    // true and exit early
                    return notAny(group.filters, matches);
                });
                return doesMatchFilter;
            });
            const filteredReactNodes = array.map(filtered, itemRender);
            // sort filtered items
            if (!sorterGroup) {
                return filteredReactNodes;
            }
            const foundSorter = findFirst(sorterGroup.sorters, s => s.selected);
            const toSortedFilteredReactNodes = (x) => array.map(x.onSort(filtered), itemRender);
            return fold(foundSorter, filteredReactNodes, toSortedFilteredReactNodes);
        };
    }
    render() {
        const { filterGroups, children } = this.props;
        const { searchText, filterState, sorterGroup } = this.state;
        // add the checked value to each filter item and compute
        // how many filters in each group are applied (we need this
        // for the filter button rendering)
        const filterGroupsWithStateData = array.map(filterGroups, g => {
            const filtersWithCheckedData = array.map(g.filters, f => {
                const filterStateMap = filterState[g.id];
                const checked = filterStateMap[f.value];
                const filterWithCheckedData = {
                    ...f,
                    checked,
                };
                return filterWithCheckedData;
            });
            const activeFilterCount = array.filter(filtersWithCheckedData, f => f.checked).length;
            // couldn't use spread without casting due to below issue:
            // https://github.com/Microsoft/TypeScript/pull/13288
            const filterGroupWithData = {
                label: g.label,
                filterKey: g.id,
                transform: g.transform,
                activeFilterCount,
                filters: filtersWithCheckedData,
            };
            return filterGroupWithData;
        });
        // Check if the filter state has changed, we need this to know
        // whether or not to show the reset button
        const isFiltered = !isEqual(this.initialFilterState, filterState);
        return children({
            filters: {
                resetFilters: this.resetFilters,
                filterGroups: filterGroupsWithStateData,
                onFilterChange: this.onFilterChange,
                isFiltered,
            },
            sorters: {
                sorterGroup,
                onSorterChange: this.onSorterChange,
            },
            search: {
                onSearchChange: this.onSearchChange,
                searchText,
            },
            collection: this.renderCollection(),
        });
    }
}
//# sourceMappingURL=FilterCollection.js.map