/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const { execSync } = require('node:child_process')

const packageName = process.argv[2]

const PACKAGE_REGEX = /@simspace\/.*/

if (!PACKAGE_REGEX.test(packageName)) {
  throw new Error('Invalid package name')
}

const output = execSync(
  `yarn npm info "${packageName}" --fields version --json`,
).toString('utf-8')

const version = JSON.parse(output).version

if (typeof version !== 'string') {
  throw new Error(`Could not parse ${packageName} version: ${version}`)
}

process.stdout.write(version.toString())
