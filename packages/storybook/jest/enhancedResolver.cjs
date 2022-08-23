const resolver = require('enhanced-resolve').create.sync({
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  mainFields: ["exports", "import", "require", "module", "main"],
  conditionNames: ['require', 'node', 'default', 'import'],
})

function resolve(request, options) {
  if(request.indexOf('@monorail') === 0){
    return resolver(options.basedir, request)
  } else {
    return options.defaultResolver(request, options)
  }
}

module.exports = resolve
