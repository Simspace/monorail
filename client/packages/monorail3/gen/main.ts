import { Project, StructureKind, SyntaxKind } from 'ts-morph'

type ModuleInfo = {
  name: string
  muiModuleFileName?: string
  muiPropsTypeName?: string
  muiComponentName?: string
  monorailComponentExtraImports?: Array<string>
  storybookFolder: string
}

const getMuiModuleFileName = (module: ModuleInfo): string =>
  module.muiModuleFileName !== undefined
    ? module.muiModuleFileName
    : `${module.name}.d.ts`

const getMuiPropsTypeName = (module: ModuleInfo): string =>
  module.muiPropsTypeName !== undefined
    ? module.muiPropsTypeName
    : module.name + 'Props'

const getMuiComponentName = (module: ModuleInfo): string =>
  module.muiComponentName !== undefined ? module.muiComponentName : module.name

const getMonorailPropsTypeName = (module: ModuleInfo): string =>
  `${module.name}Props`

const getMonorailComponentName = (module: ModuleInfo): string => module.name

const getMonorailComponentExtraImports = (module: ModuleInfo): Array<string> =>
  module.monorailComponentExtraImports !== undefined
    ? module.monorailComponentExtraImports
    : []

const storybookFolders = {
  buttons: 'Buttons',
  dataDisplay: 'Data Display',
  forms: 'Forms',
  layout: 'Layout',
}

// List of all the modules to generate, including extra metadata to help the code gen
const modules: Array<ModuleInfo> = [
  { name: 'Accordion', storybookFolder: storybookFolders.dataDisplay },
  { name: 'AccordionDetails', storybookFolder: storybookFolders.dataDisplay },
  {
    name: 'AccordionSummary',
    monorailComponentExtraImports: [
      "import { AccordionSummaryTypeMap } from '@material-ui/core/AccordionSummary'",
    ],
    storybookFolder: storybookFolders.dataDisplay,
  },
  {
    name: 'Button',
    monorailComponentExtraImports: [
      "import { ButtonTypeMap } from '@material-ui/core/Button'",
    ],
    storybookFolder: storybookFolders.buttons,
  },
]

// Create the ts-morph project
const project = new Project({})

// Add all the material-ui/core ts files
project.addSourceFilesAtPaths(
  './node_modules/@material-ui/core/**/*{.d.ts,.ts,.tsx}',
)

// Add the monorial3 src files
project.addSourceFilesAtPaths('./src/**/*{.d.ts,.ts,.tsx}')

//project.resolveSourceFileDependencies()

// Get all the source files to inspect
const sourceFiles = project.getSourceFiles()

modules.forEach(module => {
  console.log('-------------------------------------------')
  console.log(`Handling module: ${module.name}`)
  console.log('-------------------------------------------')

  const muiModuleFileName = getMuiModuleFileName(module)

  sourceFiles.forEach(sourceFile => {
    if (sourceFile.getBaseName() !== muiModuleFileName) {
      return
    }

    const muiComponentName = getMuiComponentName(module)

    const muiPropsTypeName = getMuiPropsTypeName(module)

    // Try to find the MUI component props type/interface in the MUI source file
    // We're doing this because we need to preserve the type parameters from the MUI props in our
    // props type alias, and in the component function.
    const muiPropsTypeAliasOrInterface =
      sourceFile.getTypeAlias(muiPropsTypeName) ||
      sourceFile.getInterface(muiPropsTypeName)

    const muiPropsTypeParameters =
      muiPropsTypeAliasOrInterface?.getTypeParameters() || []

    const muiPropsTypeParametersLhsString =
      muiPropsTypeParameters.length > 0
        ? '<' + muiPropsTypeParameters.map(tp => tp.print()) + '>'
        : ''

    const muiPropsTypeParametersRhsString =
      muiPropsTypeParameters.length > 0
        ? '<' + muiPropsTypeParameters.map(tp => tp.getName()).join(', ') + '>'
        : ''

    const monorailPropsTypeName = getMonorailPropsTypeName(module)
    const monorailComponentName = getMonorailComponentName(module)
    const monorailComponentFilePath = `./src/components/${monorailComponentName}/${monorailComponentName}.tsx`
    const monorailComponentExtraFilePath = `./src/components/${monorailComponentName}/${monorailComponentName}.extra.tsx`
    const monorailComponentStoriesFilePath = `./src/components/${monorailComponentName}/__stories__/${monorailComponentName}.stories.tsx`
    const monorailComponentStoriesExtraFilePath = `./src/components/${monorailComponentName}/__stories__/${monorailComponentName}.stories.extra.tsx`

    // Create the monorial component file with the props type and the component wrapper
    // This is an "always regenerate" file, so should always be over-written
    console.log(`Generating main component file: ${monorailComponentFilePath}`)
    project.createSourceFile(
      monorailComponentFilePath,
      writer => {
        writer.writeLine("import React from 'react'")
        writer.writeLine("import * as MUI from '@material-ui/core'")
        getMonorailComponentExtraImports(module).forEach(extraImport =>
          writer.writeLine(extraImport),
        )
        writer.writeLine(
          `export type ${monorailPropsTypeName}${muiPropsTypeParametersLhsString} = MUI.${muiPropsTypeName}${muiPropsTypeParametersRhsString}`,
        )
        writer.writeLine('')
        writer.writeLine(
          `export const ${monorailComponentName} = ${muiPropsTypeParametersLhsString}(props: ${monorailPropsTypeName}${muiPropsTypeParametersRhsString}) => (<MUI.${muiComponentName} {...props} />)`,
        )
        writer.writeLine(`export * from './${monorailComponentName}.extra'`)
      },
      { overwrite: true },
    )

    // Create the '.extra.tsx' file if it doesn't exist
    console.log(
      `Generating placeholder for component extra file (if needed): ${monorailComponentExtraFilePath}`,
    )
    const componentExtraFile = project.getSourceFile(
      monorailComponentExtraFilePath,
    )
    if (componentExtraFile === undefined) {
      project.createSourceFile(monorailComponentExtraFilePath, writer => {
        // Just an empty export b/c we need to export something
        writer.writeLine(
          '// Placeholder for extra functionality - delete and replace this with extra types/values/functions/etc.',
        )
        writer.writeLine('export const __monorailExtra = {}')
      })
    }

    // Generate the __stories__ files
    console.log(
      `Generating storybook file: ${monorailComponentStoriesFilePath}`,
    )
    project.createSourceFile(
      monorailComponentStoriesFilePath,
      writer => {
        writer.writeLine("import React from 'react'")
        writer.writeLine(
          `import { ${monorailComponentName} } from '../${monorailComponentName}'`,
        )
        writer.writeLine(
          `import { story } from '../../__tests__/helpers/storybook'`,
        )
        writer.writeLine(
          `export default { title: ${module.storybookFolder}/${monorailComponentName}, component: ${monorailComponentName} }`,
        )
        writer.writeLine(
          `const Template = (args) => <${monorailComponentName} {...args}`,
        )
        writer.writeLine('/** Default story for controls form */')
        writer.writeLine(`export const Default = story(Template, {})`)
        writer.writeLine(
          `export * from './${monorailComponentName}.stories.extra.tsx'`,
        )
      },
      {
        overwrite: true,
      },
    )

    console.log(
      `Generating storybook extra file (if needed): ${monorailComponentStoriesExtraFilePath}`,
    )
    const componentStoriesExtraFile = project.getSourceFile(
      monorailComponentStoriesExtraFilePath,
    )
    if (componentStoriesExtraFile === undefined) {
      project.createSourceFile(
        monorailComponentStoriesExtraFilePath,
        writer => {
          // Just an empty export b/c we need to export something
          writer.writeLine(
            '// Placeholder for extra functionality - delete and replace this with extra types/values/functions/stories/etc.',
          )
          writer.writeLine('export const __monorailExtra = {}')
        },
      )
    }
  })
})

console.log('-------------------------------------------')
console.log('Saving ts-morph project...')
console.log('-------------------------------------------')

project.saveSync()

console.log('-------------------------------------------')
console.log('Done!')
console.log('-------------------------------------------')
