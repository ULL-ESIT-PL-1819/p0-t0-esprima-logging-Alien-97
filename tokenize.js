var esprima = require('esprima');
const tokens = esprima.tokenize('answer = 42', { range: true })
console.log(tokens);