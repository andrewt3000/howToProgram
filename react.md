# React

## JSX
[JSX](https://reactjs.org/docs/introducing-jsx.html) is a syntax extension to javascript that produce react elements.

React DOM uses camelCase property naming convention instead of HTML attribute names.  

html ```class``` attribute is ```className``` in jsx.

Wrap javascript code in jsx with curly braces { } 

## Components
A functional react component returns one or more react elements.  

[props are read only](https://reactjs.org/docs/components-and-props.html#props-are-read-only)  

How to pass through all functinality a wrapped component.
```javascript
const MyTable = props => (
    <Table {...props}>
        {props.children}
    </Table>
)
```

## Rules of hooks
Hooks work only in functional components (not classes).  
Hooks can’t be in conditional statements and must be at the top of the function. They must be called in the same order.  

## State hooks
state hooks use array destructuring syntax to return the variable for the state value and the setter. The parameter to useState is the initial value.  
```
const[count, setCount] = useState(0)
```

## Effect hooks
```useEffect``` handles lifecycle events.   
The first parameter to useEffect is the function execute.  
The second parameters is an array of variables that triggers side effects.  
If the second parameter is an empty array, it indicates to fire when the component has mounted.  
If the second parameter is not incllude, it indicates to fire on every render.  
```
useEffect(() => {
    // code runs after component mounts
  }, []);
```