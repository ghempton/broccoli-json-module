# broccoli-json-module

Converts JSON files to ES6 modules. `.json` files will be transpiled into `.js` files with the json contents as the default export.

A file named `config.json` with contents `{}` will be transformed into `config.js` with contents `export default {};`.
  
## Installation

```bash
npm install --save-dev broccoli-json-module
```

## Usage

```js
var json = require('broccoli-json-module');
tree = json(tree);
```
