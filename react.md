# React

## JSX
[JSX](https://reactjs.org/docs/introducing-jsx.html) is a syntax extension to javascript that produce react elements.

React DOM uses camelCase property naming convention instead of HTML attribute names.  

html ```class``` attribute is ```className``` in jsx.

Wrap javascript code in jsx with curly braces { } 

## Components
props are read only  

How to pass through all functinality a wrapped component.
```javascript
const MyTable = props => (
    <Table {...props}>
        {props.children}
    </Table>
)
```