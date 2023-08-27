# What is React ?

React is a javaScript library used for creating UI
It allow user to create Reusable UI component

- It used in making Single page Application

# What is Component in React ?

Component are Independent and Reusable Bits of code

- indivisual peice of code in react is called as component

# What is JSX ?

jsx stand for javascript extension or xml

it convert html tag into react element

# Rules of writing JSX ?

- all the tags must have one top level tag(Html tag must warp into one top level element)
  <> empty tag we call it as fragment
- js expressions in jsx must be wrapped in {}
- no if else condition inside jsx but ternary operator is okay
- Attribute
  class =className

# Component

- react component are independent and reusable unit of code
- a piece of code which is indivisual and reusable we call that component
- components are building block of react
- it is same as function in js but return HTML

# types of components

- class
- function

# Props

by the help props of we can easily transfer our data from one component to another

- props stand for properties
- props are used to transfer data from one component to another
- props are read only
- props are just like function in javascript

props pass as an object
key="value"
{props.key}

# state

state is an object which store data of an component

- the state is an inbuilt react object that is used to contain data or information about the component

# Rules of Hooks

- must be written inside functional component
- must be import in component
- must be call at the top level of component
- cannot be conditional

# useState ()

() => number, string, array, object, boolean

it return two things
1 current state
2 function => it helps in updating state

# useEffect ()

we use this hook when ever we want to perform side effect task in our functional component

side effect operation

- setTimeout
- setInterval
- directly update our DOM
- data fetch

useEffect(function,)

- when ever state update useEffect run

(function , [])

# useRef()

by the help of this hook we can easily manuplate our DOM

- dom manuplate
