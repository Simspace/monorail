"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var madge_1 = require("madge");
var fs_1 = require("fs");
var path_1 = require("path");
var function_1 = require("fp-ts/lib/function");
var R = require("fp-ts/lib/ReadonlyRecord");
var A = require("fp-ts/lib/ReadonlyArray");
var O = require("fp-ts/lib/Option");
var str = require("fp-ts/lib/string");
var S = require("fp-ts/lib/Set");
var TE = require("fp-ts/lib/TaskEither");
var T = require("fp-ts/lib/Task");
var TS = require("topological-sort");
var splitPath = function (s) {
    var p = path_1.default.parse(s);
    return [p.dir, p.name];
};
var normalizeInput = function (input) {
    return (0, function_1.pipe)(R.keys(input), A.filter(function (s) { return s !== 'index.js'; }), A.reduce({}, function (out, k) {
        var _a, _b;
        var outKeys = Object.keys(out);
        var _c = splitPath(k), dir = _c[0], file = _c[1];
        var deps = input[k];
        var filteredDeps = (0, function_1.pipe)(deps, A.filterMap(function (dep) {
            var _a = splitPath(dep), dirDep = _a[0], fileDep = _a[1];
            if (dirDep === dir) {
                if (fileDep === dirDep) {
                    return O.none;
                }
                else {
                    return O.some("".concat(dirDep, "/").concat(fileDep));
                }
            }
            else {
                if (fileDep === dirDep || fileDep === 'index') {
                    return O.some(dirDep);
                }
                else {
                    return O.some("".concat(dirDep, "/").concat(fileDep));
                }
            }
        }));
        if (A.isNonEmpty(filteredDeps) || !A.elem(str.Eq)(dir)(outKeys)) {
            if (dir !== file && file !== 'index') {
                return __assign(__assign({}, out), (_a = {}, _a["".concat(dir, "/").concat(file)] = filteredDeps, _a));
            }
            else {
                return __assign(__assign({}, out), (_b = {}, _b[dir] = filteredDeps, _b));
            }
        }
        else {
            return out;
        }
    }));
};
var processRawData = function (input) {
    input = normalizeInput(input);
    // Pull out every dependency
    var allDependencies = (0, function_1.pipe)(input, R.reduceWithIndex(str.Ord)([], function (k, acc, deps) { return __spreadArray(__spreadArray([
        k
    ], acc, true), deps, true); }), A.uniq(str.Eq));
    // Pull out all non empty dependencies
    var allNonEmptyDependencies = (0, function_1.pipe)(input, R.filter(A.isNonEmpty), R.keys);
    // Filter all dependencies, finding ones with no dependencies
    var noDependencies = (0, function_1.pipe)(allDependencies, A.difference(str.Eq)(allNonEmptyDependencies), A.sort(str.Ord));
    // loop and diff the dependencies
    var remaining = (0, function_1.pipe)(input, R.filterWithIndex(function (k) { return !A.elem(str.Eq)(k)(noDependencies); }));
    var union = noDependencies.slice();
    var output = [];
    while (R.keys(remaining).length > 0) {
        var _a = (0, function_1.pipe)(remaining, R.partitionWithIndex(function (k, deps) {
            if (A.elem(str.Eq)(k)(union)) {
                return false;
            }
            for (var _i = 0, deps_1 = deps; _i < deps_1.length; _i++) {
                var d = deps_1[_i];
                if (!A.elem(str.Eq)(d)(union)) {
                    return false;
                }
            }
            return true;
        })), rem = _a.left, out = _a.right;
        union = (0, function_1.pipe)(union, A.union(str.Eq)(R.keys(out)));
        remaining = rem;
        output.push(out);
        if (R.keys(out).length === 0) {
            break;
        }
    }
    return __assign({ 0: noDependencies }, (0, function_1.pipe)(output, A.reduceWithIndex({}, function (i, b, a) {
        var _a;
        return (__assign(__assign({}, b), (_a = {}, _a[i + 1] = a, _a)));
    })));
};
var topologicalSort = function (input) {
    // Normalize/clean all the dependency names
    var normalizedInput = normalizeInput(input);
    // Create the graph nodes by using all the unique component names - the keys and values of the `input` record.
    // The nodes are a map with a key for the node, and the node metadata value - in this case we don't care about
    // the metadata value for nodes, so just using {} for every node.
    var nodes = (0, function_1.pipe)(normalizedInput, R.reduceWithIndex(new Set(), function (component, acc, dependencies) {
        acc.add(component);
        dependencies.forEach(function (dependency) { return acc.add(dependency); });
        return acc;
    }), S.toArray(str.Ord), A.map(function (component) { return [component, {}]; }), function (tuples) { return new Map(tuples); });
    // Create the graph using all the nodes
    var graph = new TS.TopologicalSort(nodes);
    //console.log(graph)
    // Add the graph edges
    // The input map has a component name as a key and the dependencies as the value array, so add edges from the key to all the value nodes
    (0, function_1.pipe)(normalizedInput, R.toReadonlyArray, function (a) {
        return a.forEach(function (_a) {
            var component = _a[0], dependencies = _a[1];
            dependencies.forEach(function (dependency) {
                console.log('edge', component, dependency);
                try {
                    // Edges represent dependencies
                    graph.addEdge(component, dependency);
                }
                catch (e) {
                    // There seems to be a double accounting for certain edges, just ignore them
                    console.error('Ignoring bad edge:', component, dependency);
                }
            });
        });
    });
    // Do the sort - reverse the list to create the right order of dependencies
    var sortedGraph = graph.sort();
    console.log(sortedGraph);
    // Reverse the list to get execution order of dependencies
    var sortedGraphKeys = __spreadArray([], sortedGraph.keys(), true).reverse();
    return sortedGraphKeys;
};
var mkdir = function (path, options) {
    return (0, function_1.pipe)(TE.taskify(fs_1.default.mkdir)(path, options), TE.map(function_1.constVoid));
};
var stat = TE.taskify(fs_1.default.stat);
var ensureDirExists = function (dir) {
    return (0, function_1.pipe)(stat(dir), TE.map(function (stats) { return stats.isDirectory(); }), TE.matchEW(function (err) {
        return err.code === 'ENOENT' ? mkdir(dir, { recursive: true }) : TE.left(err);
    }, function (b) {
        return b
            ? TE.right(undefined)
            : TE.left(new Error("File ".concat(dir, " exists but is not a directory")));
    }));
};
var writeFile = TE.taskify(fs_1.default.writeFile);
var toError = function (err) {
    return err instanceof Error ? err : new Error(String(err));
};
var program = function (source, config) {
    return (0, function_1.pipe)(TE.tryCatch(function () { return (0, madge_1.default)(source, config); }, toError), TE.bindTo('madgeInstance'), TE.bind('rawDependencyGraph', function (_a) {
        var madgeInstance = _a.madgeInstance;
        return TE.right(madgeInstance.obj());
    }), TE.bind('dependencyList', function (_a) {
        var rawDependencyGraph = _a.rawDependencyGraph;
        return TE.right(processRawData(rawDependencyGraph));
    }), TE.bind('dependencyListTopological', function (_a) {
        var rawDependencyGraph = _a.rawDependencyGraph;
        return TE.right(topologicalSort(rawDependencyGraph));
    }), TE.chainFirst(function () { return ensureDirExists('dependency-list-output'); }), TE.chain(function (_a) {
        var madgeInstance = _a.madgeInstance, rawDependencyGraph = _a.rawDependencyGraph, dependencyList = _a.dependencyList, dependencyListTopological = _a.dependencyListTopological;
        return TE.sequenceArray([
            (0, function_1.pipe)(TE.tryCatch(function () { return madgeInstance.svg(); }, toError), TE.chain(function (svg) {
                return writeFile('dependency-list-output/dependency_graph.svg', svg);
            })),
            writeFile('dependency-list-output/raw_dependency_graph.json', JSON.stringify(rawDependencyGraph, null, 2)),
            writeFile('dependency-list-output/dependency_list.json', JSON.stringify(dependencyList, null, 2)),
            writeFile('dependency-list-output/dependency_list_topological_sort.txt', dependencyListTopological.join('\n')),
        ]);
    }), TE.matchE(function (err) {
        return T.fromIO(function () {
            console.error(err);
            process.exit(1);
        });
    }, function () {
        return T.fromIO(function () {
            process.exit(0);
        });
    }));
};
var config = {
    fileExtensions: ['js', 'ts', 'jsx', 'tsx'],
    excludeRegExp: [
        /^test$/,
        /(.+)test.([jt]sx?)/,
        /svg-icons/,
        /use(.+).([jt]sx?)/,
        /^styled.js/,
        /colors\/(.+)/,
        /styles\/(.+)/,
        /utils\/(.+)/,
        /(.+).d.ts/,
        /(.+)spec.([jt]sx?)/,
        /(.+)Classes.([jt]sx?)/,
        /(.+)Context.([jt]sx?)/,
        /(.+)utils.([jt]sx?)/,
        /(.+)\/(?!index)[a-z](.+)/,
    ],
    rankdir: 'RL',
};
var source = process.argv.slice(-1)[0];
if (!source) {
    console.error('Please specify a source to analyze');
    process.exit(1);
}
program(source, config)();
