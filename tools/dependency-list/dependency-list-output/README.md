# Output files

- `raw_dependency_graph.json` - raw dependency graph, where the keys are components, and the values are the components on which the key component depends.
- `dependency_list.json` - processed dependency tree, where each index is a rank for component dependencies. E.g. rank `0` has no dependencies, rank `1` depends on components in previous ranks, and so on.
- `dependency_list_topological_sort.json` - processed dependency list, giving a flat "execution sequence" in which components can be themed to ensure that dependencies are themed before higher-level components.
- `dependency_graph.svg` - graph visualization of the dependency tree (view in an SVG viewer/editor, like a web browser)
