var Filter = require('broccoli-filter')

module.exports = JsonModule
JsonModule.prototype = Object.create(Filter.prototype)
JsonModule.prototype.constructor = JsonModule
function JsonModule (inputTree, options) {
  if (!(this instanceof JsonModule)) return new JsonModule(inputTree, options)
  Filter.call(this, inputTree, options)
  options = options || {};
}

JsonModule.prototype.extensions = ['json']
JsonModule.prototype.targetExtension = 'js'
  
JsonModule.prototype.processString = function (string) {
  return "export default " + string + ";";
}
