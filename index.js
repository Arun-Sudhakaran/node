var _ = require('underscore');

/*
    How a require() works
    1) Check in core module
    2) Check for File or Folder
    3) Check in node_modules
*/

var result = _.contains([1,2,3], 4);
console.log(result);