"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterCollection = exports.createFilterGroup = void 0;

var _IO = require("../CoreUtils/IO");

var _general = require("../CoreUtils/general");

var _optics = require("../CoreUtils/optics");

var _String = require("../CoreUtils/String");

var _Array = require("../CoreUtils/Array");

var _Option = require("../CoreUtils/Option");

var _primitiveGuards = require("../CoreUtils/primitive-guards");

var _Array2 = require("fp-ts/lib/Array");

var _function = require("fp-ts/lib/function");

var _Option2 = require("fp-ts/lib/Option");

var _Record = require("fp-ts/lib/Record");

var _monocleTs = require("monocle-ts");

var _react = require("react");

const intializeFilterState = filterGroups => {
  const initStrMap = {};
  const initFilterState = {};
  return _Array2.array.reduce(filterGroups, initFilterState, (groups, group) => (0, _Record.insert)(group.id, _Array2.array.reduce(group.filters, initStrMap, (filters, filterItem) => (0, _Record.insert)(filterItem.value, true, filters)), groups));
};
/**
 * Helper function to reduce the boilerplate of creating typed a `FilterGroup`
 */


const createFilterGroup = collectionItem => collectionItem;

exports.createFilterGroup = createFilterGroup;

class FilterCollection extends _react.Component {
  constructor(...args) {
    super(...args);
    this.initialFilterState = intializeFilterState(this.props.filterGroups);
    this.state = {
      searchText: '',
      filterState: this.initialFilterState,
      sorterGroup: this.props.sorterGroup
    };
    this.mkStatePropLens = _monocleTs.Lens.fromProp();
    this.stateToFilterStateLens = this.mkStatePropLens('filterState');
    this.stateToSearchTextLens = this.mkStatePropLens('searchText');
    this.stateToSorterGroupOptional = _monocleTs.Optional.fromNullableProp()('sorterGroup');
    this.sorterGroupToSortersLens = _monocleTs.Lens.fromProp()('sorters');
    this.stateToSortersOptional = this.stateToSorterGroupOptional.composeLens(this.sorterGroupToSortersLens);

    this.onSorterChange = key => {
      const {
        sorterGroup
      } = this.state;
      const sorterGroupOpt = (0, _Option2.fromNullable)(sorterGroup);

      const toggleSelected = s => s.key === key || s.selected ? { ...s,
        selected: !s.selected
      } : s;

      const transition = this.stateToSortersOptional.modify((0, _Array.map)(toggleSelected));
      const setStateIO = (0, _IO.mkIO)(() => this.setState(transition));
      const constSetStateIO = (0, _function.constant)(setStateIO);
      const noOpIO = (0, _IO.mkIO)(_general.constVoid);
      const onSorterChangeIO = sorterGroupOpt.fold(noOpIO, constSetStateIO);
      (0, _IO.runIO)(onSorterChangeIO);
    };

    this.onFilterChange = (groupKey, filterKey, value) => {
      const stateToFilterKeyOptional = this.stateToFilterStateLens.composeOptional((0, _optics.mkRecordKeyOptional)(groupKey)).composeOptional((0, _optics.mkRecordKeyOptional)(filterKey));
      const transition = stateToFilterKeyOptional.set(value);
      const setStateIO = (0, _IO.mkIO)(() => this.setState(transition));
      (0, _IO.runIO)(setStateIO);
    };

    this.resetFilters = () => {
      const transition = this.stateToFilterStateLens.set(this.initialFilterState);
      const setStateIO = (0, _IO.mkIO)(() => this.setState(transition));
      (0, _IO.runIO)(setStateIO);
    };

    this.onSearchChange = searchText => {
      const transition = this.stateToSearchTextLens.set(searchText);
      const setStateIO = (0, _IO.mkIO)(() => this.setState(transition));
      (0, _IO.runIO)(setStateIO);
    };

    this.renderCollection = () => {
      const {
        catalog,
        itemRender,
        searchByKey,
        filterGroups,
        sorterGroup
      } = this.props;
      const {
        searchText,
        filterState
      } = this.state; // sanitize search text

      const sanitizedSearchText = (0, _String.toLocaleLower)(searchText); // Here we loop through all the filter groups and filter out the
      // filters that are unchecked. This is an optimization so
      // we don't need to do this work every time in the below map

      const initStrArr = [];

      const getMakeAppliedFilters = group => (appliedFilters, filterItem // if the filter is true, add it to the applied filters array
      ) => filterState[group.id][filterItem.value] ? (0, _Array2.snoc)(appliedFilters, filterItem.value) : appliedFilters;

      const toAppliedFilterGroup = group => {
        // couldn't use spread without casting due to below issue:
        // https://github.com/Microsoft/TypeScript/pull/13288
        const result = {
          label: group.label,
          filterKey: group.filterKey,
          transform: group.transform,
          filters: _Array2.array.reduce(group.filters, initStrArr, getMakeAppliedFilters(group))
        };
        return result;
      };

      const appliedFilterGroups = _Array2.array.map(filterGroups, toAppliedFilterGroup);

      const filtered = _Array2.array.filter(catalog, catalogItem => {
        // If search exists and item does not match, filter it out
        const searchValue = catalogItem[searchByKey];
        const findIndexLocaleLower = (0, _general.o)((0, _String.findIndex)(sanitizedSearchText), _String.toLocaleLower);
        const isNotFound = (0, _general.o)(x => (0, _Option2.isNone)(x), findIndexLocaleLower);

        if (typeof searchValue !== 'string') {
          console.error('tried to search non-string value'); // tslint:disable-line
        } else if ((0, _Array.len)(searchText) > 0 && isNotFound(searchValue)) {
          return false;
        } // Otherwise loop through filters groups and make sure that for
        // each filter group that at least one of the applied filters matches
        // the item, otherwise filter the item out


        const doesMatchFilter = (0, _Array.notAny)(appliedFilterGroups, group => {
          // Check if the filter matches the item data after
          // its been run through the filter transform
          const matches = filterTerm => {
            const target = group.filterKey;
            const value = catalogItem[target];

            if ((0, _primitiveGuards.isNil)(group.transform) && typeof value === 'string') {
              return filterTerm === value;
            } else if (!(0, _primitiveGuards.isNil)(group.transform)) {
              return filterTerm === group.transform(value);
            } else {
              const errorMsg = `error: lookup value for ${group.filterKey}` + `must be a string, but received a ${typeof value} (${value})`;
              console.error(errorMsg); // tslint:disable-line

              throw new Error(errorMsg);
            }
          }; // If none of the filters match, this will return
          // true and exit early


          return (0, _Array.notAny)(group.filters, matches);
        });
        return doesMatchFilter;
      });

      const filteredReactNodes = _Array2.array.map(filtered, itemRender); // sort filtered items


      if (!sorterGroup) {
        return filteredReactNodes;
      }

      const foundSorter = (0, _Array2.findFirst)(sorterGroup.sorters, s => s.selected);

      const toSortedFilteredReactNodes = x => _Array2.array.map(x.onSort(filtered), itemRender);

      return (0, _Option.fold)(foundSorter, filteredReactNodes, toSortedFilteredReactNodes);
    };
  }

  render() {
    const {
      filterGroups,
      children
    } = this.props;
    const {
      searchText,
      filterState,
      sorterGroup
    } = this.state; // add the checked value to each filter item and compute
    // how many filters in each group are applied (we need this
    // for the filter button rendering)

    const filterGroupsWithStateData = _Array2.array.map(filterGroups, g => {
      const filtersWithCheckedData = _Array2.array.map(g.filters, f => {
        const filterStateMap = filterState[g.id];
        const checked = filterStateMap[f.value];
        const filterWithCheckedData = { ...f,
          checked
        };
        return filterWithCheckedData;
      });

      const activeFilterCount = _Array2.array.filter(filtersWithCheckedData, f => f.checked).length; // couldn't use spread without casting due to below issue:
      // https://github.com/Microsoft/TypeScript/pull/13288


      const filterGroupWithData = {
        label: g.label,
        filterKey: g.id,
        transform: g.transform,
        activeFilterCount,
        filters: filtersWithCheckedData
      };
      return filterGroupWithData;
    }); // Check if the filter state has changed, we need this to know
    // whether or not to show the reset button


    const isFiltered = this.initialFilterState !== filterState;
    return children({
      filters: {
        resetFilters: this.resetFilters,
        filterGroups: filterGroupsWithStateData,
        onFilterChange: this.onFilterChange,
        isFiltered
      },
      sorters: {
        sorterGroup,
        onSorterChange: this.onSorterChange
      },
      search: {
        onSearchChange: this.onSearchChange,
        searchText
      },
      collection: this.renderCollection()
    });
  }

}

exports.FilterCollection = FilterCollection;