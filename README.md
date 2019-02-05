## About

This repository contains code samples from the talk [Parsing, Compiling, and
Static Metaprogramming][talk] at JSConfEU 2013. You can find [slides for the
talk on Speaker Deck](https://speakerdeck.com/pdubroy/parsing-compiling-and-static-metaprogramming).


[talk]: http://2013.jsconf.eu/speakers/patrick-dubroy-parsing-compiling-and-static-metaprogramming.html

## Master the Art of the AST and Take Control of Your JS

See also the video [Master the Art of the AST and Take Control of Your JS][ast]. 

Here is another version of the talk at Javascript Israel](https://500tech.com/blog/all/yonatan-mevorach-on-abstract-syntax-trees) 
[Here are the slides](ast-talk-codemotion-170406094223.pdf)

* <a href="https://astexplorer.net/" target="_blank">astexplorer.net demo</a>
* <a href="https://eslint.org/docs/developer-guide/working-with-plugins" target="_blank">ESLint: Working with Plugins</a>
* <a href="https://github.com/cowchimp/eslint-plugin-piggyback" target="_blank">eslint-plugin-piggyback</a>

* <a href="http://docs.w3cub.com/babel/plugins/transform-remove-debugger/" target="_blank">Babel plugin Remove debugger transform. This plugin removes all `debugger;` statements</a>
* <a href="https://github.com/babel/minify/tree/a24dd066f16db5a7d5ab13c2af65e767347ef550/packages/babel-plugin-transform-remove-debugger" target="_blank">babel-plugin-transform-remove-debugger at GitHub</a>

* <a href="https://github.com/facebook/jscodeshift" target="_blank">codeshift at GitHub</a>
* <a href="https://www.toptal.com/javascript/write-code-to-rewrite-your-code" target="_blank">Write Code to Rewrite Your Code: jscodeshift</a>
* <a href="https://glebbahmutov.com/blog/jscodeshift-example/" target="_blank">jscodeshift example</a>
* <a href="https://github.com/cpojer/js-codemod/blob/master/transforms/no-vars.js" target="_blank">jscodeshift cpojer/js-codemod no-vars.js</a>


[ast]: https://youtu.be/C06MohLG_3s

### Esprima Examples

* `checkstyle.coffee` and `logging.coffee` contain the original source code for
the style checker and logging examples presented in the talk. 
* `checkstyle.js` and `logging.js` are the slightly simplified JS versions that were shown in
the talk.
* `syntax-highlight.js` is taken from the Esprima tutorial [Chapter 3. Lexical Analysis (Tokenization)¶](http://esprima.readthedocs.io/en/latest/lexical-analysis.html)

### PEG.js Example

`altjs.coffee` is the code for the "AltJS language in 5 minutes" section
presented in the second half of the talk.

### Extra Special Bonus!

`idgrep.coffee` (and `idgrep.js`) is another example of using Esprima
to do static analysis on JavaScript code.

### REPL example

```js
> esprima = require('esprima')
{ parse: [Function: parse],
  parseModule: [Function: parseModule],
  parseScript: [Function: parseScript],
  tokenize: [Function: tokenize],
  Syntax: 
   { ... },
  version: '4.0.1' }

> esprima.tokenize('answer = 42', { range: true })
[ { type: 'Identifier', value: 'answer', range: [ 0, 6 ] },
  { type: 'Punctuator', value: '=', range: [ 7, 8 ] },
  { type: 'Numeric', value: '42', range: [ 9, 11 ] } ]

> esprima.parseScript('const answer = 42', { tokens: true })
Script {
  type: 'Program',
  body: 
   [ VariableDeclaration {
       type: 'VariableDeclaration',
       declarations: [Array],
       kind: 'const' } ],
  sourceType: 'script',
  tokens: 
   [ { type: 'Keyword', value: 'const' },
     { type: 'Identifier', value: 'answer' },
     { type: 'Punctuator', value: '=' },
     { type: 'Numeric', value: '42' } ] }

> inspect = require('util')
{ ... }

> console.log(util.inspect(esprima.parseScript('answer = 42'), {depth: null}))
Script {
  type: 'Program',
  body: 
   [ ExpressionStatement {
       type: 'ExpressionStatement',
       expression: 
        AssignmentExpression {
          type: 'AssignmentExpression',
          operator: '=',
          left: Identifier { type: 'Identifier', name: 'answer' },
          right: Literal { type: 'Literal', value: 42, raw: '42' } } } ],
  sourceType: 'script' }
undefined
> 
```
