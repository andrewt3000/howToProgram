# Reading Javascript: fundamental constructs
When reading javascript, most code can be grouped into one of the following fundamental constructs. Learning to read and identify these constructs is critical for reading code. 

1. [variable declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#declarations)  
   ``` creates a reference to  memory ```
   1. variable declaration `var foo;`  
   2. block scoped variable declaration `let foo;`  
   3.  constant declaration `const pi = 3.1416;` 
2. [literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#literals)  
   ```creates data```  
    1. boolean  `true false`
    2. number `3.1416`
    3. string  (single quotes, double quotes or [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)) `"hello world"`  
    4. regular expression `/pattern/modifier`
    5. array  `[]`
    6. object `{ prop: 1, prop2: “x”}`
    7. [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) intentional absence of a value `null`
    8. [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) default value of unassigned variables `undefined`
3. [assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) operator  
   ```writes to memory```
   1. the assignment opertor `=` assigns the value on the right to the variable on the left. ```foo = 100```   
   2. [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) assigns values
4. access a variable   
   ```reads memory```
    1. variables are accessed by their name `foo` 
    2. object properties are accessed by dot notation `object.property` or by bracket notation `object["property"]`
    3. arrays values are accessed by index `array_name[0]`
    4. In a class declaration, use the `this` keyword to access the current object. `this.propertyName`
    5. [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) access object properties without risking a null error `object?.property`
5. [operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)  
```apply logical and mathmatical operations to data in the cpu.```  
    1. [math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators) `+ - * / ()`
    1. [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators) and, or, not `&& || !`
    2. [comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators) `< > <= >= === !== `
    4. [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...`
    5. [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
6.  conditional statements  
   ```executes code based on conditional, boolean logic.```  
    1. [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement  `if ( expression ) {...}  `
    2. the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) can also be used for conditional statements. `condition ? exprIfTrue : exprIfFalse`
    3. [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statements.
7.  [loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)   
   ```executes code repeatedly based on conditional, boolean logic.```  
    1. [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) loop  `for(let i = 0; i < 9; i++){ ... }`  
    2. [for... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) `for (const property in object) {...}`
    3. [for... of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) `for (let element of arr) {...}`
    4. [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) `while(expression){...}`
    5. [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) statements can be use to control loop behavior.  
    6. Another common way to loop through an array is with the Array [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) or [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method. This is a method call from a fundamental constructs perspective.  

8. Functions   
```creates a reusable block of code ```    
   1. [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) `function function_name(param) { ... }`
   2. [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) `const function_name = (param){ ... }`
   3. [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  `() => { ... } `
   4. functions have optional parameters that are similar to variable declarations.  
   5. functions can contain an optional [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) statement
   6. functions have the option of being [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) 
9. function/method call   
    ```executes a function```
    1. function `function_name(param1, param2)` 
    2. method call `obj.method_name(param1, param2)`
    3. object constructor creates a new object. `new Object()`
    4. asnyc functions can use [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) to wait on a promise to be fulfilled. 
    5. When a function is [immediately invoked](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) it combines the declaration and the call.  
10. [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) declaration  
```defines a collection of variables and functions. (also called properties and methods)```   
   `class MyClass extends SuperClass {...}`

11. [try, catch, finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) blocks
    ```creates flow control for error conditions```  
    `try {
        ...
    } catch (e){
        ...
    }`

12. [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements  
```import and export code to different source code files.```  

* [Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#comments) don't affect Javascript programs.  

## Reading Javascript
Javascript code composes these constructs and can be read as in the following examples.  
`let foo = 0;`  
The literal(2) value 0 is assigned(4) to the newly declared variable(1) foo.  
