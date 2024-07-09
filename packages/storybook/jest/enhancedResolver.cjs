const resolver = require('enhanced-resolve').create.sync({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  mainFields: ['exports', 'import', 'require', 'module', 'main'],
  conditionNames: ['require', 'node', 'default', 'import'],
})

const NEEDS_EXPLICIT_NODE_PATH = ['@mui/x-data-grid/']

function resolve(request, options) {
  if (!options.basedir.includes('node_modules') && request.startsWith('.')) {
    return options.defaultResolver(request.replace('.js', ''), options)
  } else if (request.indexOf('@monorail') === 0) {
    return resolver(options.basedir, request)
  } else {
    for (const prefix of NEEDS_EXPLICIT_NODE_PATH) {
      if (request.indexOf(prefix) === 0) {
        const [_, path] = request.split(prefix)
        return options.defaultResolver(`${prefix}/node/${path}`, options)
      }
    }
    return options.defaultResolver(request, options)
  }
}

module.exports = resolve
