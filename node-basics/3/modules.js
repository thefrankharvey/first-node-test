var PI = Math.PI;

exports.area = function(r) {
    return PI * r * r;
}

exports.circumference = function(r) {
    return 2 * PI * r;
}

// can include modules from node_modules file like below
// include module in node cli like this
// > var circle = require('./node-basics/3/modules.js')
// > circle
// { area: [Function], circumference: [Function] }
// > circle.area(4);
// 50.26548245743669
// > circle.circumference(4)
// 25.132741228718345
// > circle. << double-tapped tab to show available methods (below)
// circle.__defineGetter__
// circle.__defineSetter__
// circle.__lookupGetter__
// circle.__lookupSetter__
// circle.__proto__
// circle.constructor
// circle.hasOwnProperty
// circle.isPrototypeOf
// circle.propertyIsEnumerable
// circle.toLocaleString
// circle.toString
// circle.valueOf

// circle.area
// circle.circumference

// there are also global modules in node core

// node looks first for node modules in global scope 
// then node_modules
// then traverses file/directory tree