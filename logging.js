let escodegen = require('escodegen');
let esprima = require('esprima');
let estraverse = require('estraverse');

function addLogging(code) {
    let ast = esprima.parse(code);
    estraverse.traverse(ast, {
        enter: function(node, parent) {
            if (node.type === 'FunctionDeclaration' ||
                node.type === 'FunctionExpression') {
                addBeforeCode(node);
            }
        }
    });
    return escodegen.generate(ast);
}

function addBeforeCode(node) {
    let name = node.id ? node.id.name : '<anonymous function>';

    let num_param;
    var valores= "";
    for(num_param=0; num_param < node.params.length ; num_param++){
    	valores = valores+node.params[num_param].name;
    	if(num_param < node.params.length -1){
    		valores = valores + ", ";
    	}
    }

    let beforeCode = `console.log('Entering ${name}(${valores})');`;
    let beforeNodes = esprima.parse(beforeCode).body;
    node.body.body = beforeNodes.concat(node.body.body);
}

/*para escribir cadena multilínea hay que añadir ese tic, el acento francés*/
const input = ` 
function foo(a, b) {
  var x = 'blah';
  var y = (function () {
    return 3;
  })();
}
foo(1, 'wut', 3);
`;

const output = addLogging(input);

console.log(`input:\n${input}\n---`); // Dollar llavita abrir significa evalúa la expresión y sustituye en JS, en Ruby eso se hace con #
console.log(`output:\n${output}\n---`);
