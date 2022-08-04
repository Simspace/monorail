import path from 'path'
import {
  CallSignatureDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure,
  Project,
  TypeParameterDeclarationStructure,
} from 'ts-morph'

const project = new Project()

const file = project.createSourceFile(
  path.resolve(
    __dirname,
    '../src/components/DataGrid/generated/CreateTableOverloads.ts',
  ),
  undefined,
  { overwrite: true },
)

const callSignatures: Array<OptionalKind<CallSignatureDeclarationStructure>> =
  []

for (let i = 0; i < 20; i++) {
  const typeParameters: Array<OptionalKind<TypeParameterDeclarationStructure>> =
    []
  const parameters: Array<OptionalKind<ParameterDeclarationStructure>> = []
  const returnTypeTuple: Array<string> = []
  for (let j = 0; j < i + 1; j++) {
    typeParameters.push(
      { name: `K${j}`, constraint: 'string', default: 'any' },
      { name: `V${j}`, default: `K${j} extends keyof R ? R[K${j}] : any` },
      { name: `F${j}`, default: `V${j}` },
      {
        name: `Filter${j}`,
        constraint: 'GridFilterType',
        default: 'GridFilterType',
      },
    )
    parameters.push({
      name: `d${j}`,
      type: `MakeTypedColDef<R, K${j}, V${j}, F${j}, Filter${j}>`,
    })
    returnTypeTuple.push(`typeof d${j}`)
  }
  callSignatures.push({
    typeParameters,
    parameters,
    returnType: `TableDef<[${returnTypeTuple.reduce((acc, t, index) => {
      if (index === 0) {
        return `${t}, `
      } else if (index < returnTypeTuple.length - 1) {
        return `${acc}${t}, `
      } else {
        return `${acc}${t}`
      }
    }, '')}]>`,
  })
}

file.insertStatements(0, '/* eslint-disable */')

file.addImportDeclaration({
  namedImports: ['GridValidRowModel'],
  isTypeOnly: true,
  moduleSpecifier: '../internal',
})

file.addImportDeclaration({
  namedImports: ['MakeTypedColDef'],
  isTypeOnly: true,
  moduleSpecifier: '../models/makeTypedColDef',
})

file.addImportDeclaration({
  namedImports: ['GridFilterType'],
  isTypeOnly: true,
  moduleSpecifier: '../models/gridFilterType',
})

file.addImportDeclaration({
  namedImports: ['TableDef'],
  isTypeOnly: true,
  moduleSpecifier: '../models/tableDef',
})

file.addInterface({
  name: 'CreateTableOverloads',
  isExported: true,
  typeParameters: [
    {
      name: 'R',
      constraint: 'GridValidRowModel',
    },
  ],
  callSignatures,
})

file.saveSync()
