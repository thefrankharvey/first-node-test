'use strict';

const fs = require('fs');

const fileName = './node-test.txt';
fs.readFile(fileName, function (err, data) {
   console.log(data);
   console.log(Buffer.byteLength(data))
});