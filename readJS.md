# Reading Javascript: fundamental constructs
When reading javascript, most code can be grouped into one of the following fundamental constructs. Learning to read and identify these constructs is critical for reading code. Each construct has common example code and links to documentation.  

1. [variable declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations)  
   1. variable declaration `let x;`  
   2.  constant declaration `const pi = 3.1416;` 
2. [literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#literals)  
    1. boolean  `true false`
    2. number `3.1416`
    3. string  (single quotes, double quotes or [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)) `"hello world"`  
    4. regular expression `/pattern/modifier`
    5. array  `[]`
    6. object `{ prop: 1, prop2: “x”}`
    7. [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) intentional absence of a value `null`
    8. [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) default value of unassigned variables `undefined`
3. access a variable or object property
    1. variables are accessed by their name `variable_name` 
    2. object properties are accessed by dot notation `object.property` or by bracket notation `object["property"]`
    3. arrays values are accessed by index `array_name[0]`
4. [operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
    1. [assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) `=`  
        includes [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    2. [math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators) `+ - * / ()`
    3. [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators) and, or, not `&& || !`
    4. [comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators) `< > <= >= === !== `
    5. [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...`
5. [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)  
   1. function declaration `function function_name(param) { ... }`
   2. [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) `const function_name = (param){ ... }`
   3. [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  `() => { ... } `
   4. functions have optional parameters that are similar to variable declarations.  
   5. functions can contain an optional [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) statement
   6. functions have the option of being [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) 
6. [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) declaration  
   `class MyClass extends SuperClass {...}`
7. function/method call  
    1. function `function_name(param1, param2)` 
    2. method call `obj.method_name(param1, param2)`
    3. object constructor creates a new object. `new Object()`
    4. asnyc functions can use [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) to wait on a promise to be fulfilled. 
    5. When a function is [immediately invoked](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) it combines the declaration and the call.  
8.  conditional statements: [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement, [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statements.   
    1. `if ( expression ) {...}  `
    2. the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) can also be used for conditional statements. `condition ? exprIfTrue : exprIfFalse`
9.  [loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)  
    1. [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop  `for(let i = 0; i < 9; i++){ ... }`  
    2. [for... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) `for (const property in object) {...}`
    3. [for... of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) `for (let element of arr) {...}`
    4. [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) `while(expression){...}`
    5. [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) statements can be use to control loop behavior.  
    6. Another common way to loop through an array is with the [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method. This is a method call from a fundamental constructs perspective.  
10. [try, catch, finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) blocks
    `try {
        ...
    } catch (e){
        ...
    }`

11. [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements  

* [Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#comments) don't affect Javascript programs.  

## Reading Javascript
Javascript code composes these constructs and can be read as in the following examples.  
`let foo = 0;`  
The literal(2) value 0 is assigned(4) to the newly declared variable(1) foo.  