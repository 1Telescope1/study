const customRequire = require("./index.js")
const k = customRequire("./b.js")
console.log(require, 'require');
console.log(k)