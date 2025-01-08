"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var ts_morph_1 = require("ts-morph");
var project = new ts_morph_1.Project();
var file = project.createSourceFile(path_1.default.resolve(__dirname, "../packages/components/src/DataGrid/generated/CreateTableOverloads.ts"), undefined, { overwrite: true });
var callSignatures = [];
var _loop_1 = function (i) {
    var typeParameters = [];
    var parameters = [];
    var returnTypeTuple = [];
    for (var j = 0; j < i + 1; j++) {
        typeParameters.push({ name: "K".concat(j), constraint: "string", default: "any" }, { name: "V".concat(j), default: "K".concat(j, " extends keyof R ? R[K").concat(j, "] : any") }, { name: "VG".concat(j), default: "never" }, { name: "F".concat(j), default: "V".concat(j) }, {
            name: "Filter".concat(j),
            constraint: "GridColFilterType",
            default: "GridColFilterType",
        });
        parameters.push({
            name: "d".concat(j),
            type: "MakeTypedColDef<R, K".concat(j, ", V").concat(j, ", VG").concat(j, ", F").concat(j, ", Filter").concat(j, ">"),
        });
        returnTypeTuple.push("typeof d".concat(j));
    }
    callSignatures.push({
        typeParameters: typeParameters,
        parameters: parameters,
        returnType: "TableDef<[".concat(returnTypeTuple.reduce(function (acc, t, index) {
            if (index === 0) {
                return "".concat(t, ", ");
            }
            else if (index < returnTypeTuple.length - 1) {
                return "".concat(acc).concat(t, ", ");
            }
            else {
                return "".concat(acc).concat(t);
            }
        }, ""), "]>"),
    });
};
for (var i = 0; i < 20; i++) {
    _loop_1(i);
}
file.insertStatements(0, "/* eslint-disable */");
file.addImportDeclaration({
    namedImports: ["GridValidRowModel"],
    isTypeOnly: true,
    moduleSpecifier: "../internal",
});
file.addImportDeclaration({
    namedImports: ["MakeTypedColDef"],
    isTypeOnly: true,
    moduleSpecifier: "../models/makeTypedColDef",
});
file.addImportDeclaration({
    namedImports: ["GridColFilterType"],
    isTypeOnly: true,
    moduleSpecifier: "../models/gridColFilterType",
});
file.addImportDeclaration({
    namedImports: ["TableDef"],
    isTypeOnly: true,
    moduleSpecifier: "../models/tableDef",
});
file.addInterface({
    name: "CreateTableOverloads",
    isExported: true,
    typeParameters: [
        {
            name: "R",
            constraint: "GridValidRowModel",
        },
    ],
    callSignatures: callSignatures,
});
file.saveSync();
