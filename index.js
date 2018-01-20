var Filter = require('broccoli-persistent-filter')

module.exports = JsonModule
JsonModule.prototype = Object.create(Filter.prototype)
JsonModule.prototype.constructor = JsonModule
function JsonModule (inputTree, options) {
  if (!(this instanceof JsonModule)) return new JsonModule(inputTree, options)

  options = options || {};
  if (!options.hasOwnProperty('persist')) {
    options.persist = true;
  }

  Filter.call(this, inputTree, options)
}

JsonModule.prototype.extensions = ['json']
JsonModule.prototype.targetExtension = 'js'

JsonModule.prototype.processString = function (string) {
  return "export default " + string + ";";
}

JsonModule.prototype.baseDir = function () {
  return __dirname
}
