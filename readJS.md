# How to read javascript
When reading javascript, most code can be grouped into one of the following fundamental constructs. Learning to read and identify these constructs is critical for reading code. Each construct has common example code and links to documentation.  

1. [variable declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations) (includes function/method parameters)  
   1. variable declaration `let x;`  
   2.  constant declaration `const pi = 3.1416;` 
2. [literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#literals)  
    1. boolean  `true false`
    2. number `3.1416`
    3. string `"hello world"`
    4. regular expression `/pattern/modifier`
    5. array  `[]`
    6. object `{ prop: 1, prop2: “x”}`
    7. [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) intentional absence of a value `null`
    8. [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) default value of unassigned variables `undefined`
3. access/evaluate a variable or object property
    1. variable_name  
    2. obj.property_name
4. [operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
    1. [assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) `=`  
        includes [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    2. [math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators) `+ - * / ()`
    3. [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators) and, or, not `&& || !`
    4. [comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators) `< > <= >= === !== `
    5. [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `…`
5. [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) or [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
   1. function keyword `function function_name(param) { … }`
   2. [arrow/lambda](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) functions  `() => { … } `
6. [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) statement
7. [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) declaration  
   `class MyClass extends SuperClass {...}`
8. function/method call  
    1. function `function_name(param1, param2)` 
    2. method call `obj.method_name(param1, param2)`
    3. object constructor creates a new object. `new Object()`
9.  conditional statements: [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement, switch statements   
    `if ( expression ) `
10. [loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)  
    1. [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop  `for(let i = 0; i < 9; i++){ ... }`  
    2. [for... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
    3. [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) `while(expression){...}`
11. [try, catch, finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) blocks
    `try {
        ...
    } catch (e){
        ...
    }`

12. [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements  

Javascript code composes these constructs and can be read as in the following examples.  
`let foo = 0;`  
The literal(3) value 0 is assigned(5) to the newly declared variable(1) foo.  