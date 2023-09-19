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

# props drilling

props are used to tranfer data fron one component to another

- how to avoid props drillings
  using Context Api
  useContext hook

# Context Api

Create , provide , consume

steps

- import createContext
- createContext() // cosnt data =createContext()
- wrap the component in data.Provider // <data.Provider value={name}>
- export {data}

- import {data}
- data.Consumer
- allowed only one function
- inside return only
- for multiple data use nested

return(
<>
<data.Consumer>
{
(name)=>{
return (my name is {name})
}
}
</data.Consumer>
<>
)

<data.Provider value={{name:"xyz", gender:"Female"}}></<data.Provider>

# useContext

if we want to pass the data from our parenet component to our lower component without passing that data to each and every component

const name = useContext(data)

inside return
{name}

# useMemo

<Hr>

# Redux

Redux is a predictable state container in javascript app

- redux is a library for javascript applications
- you can use redux together with React or with any other view library(Angular , Vue)
- Redux is a State Container

## Core concept of Redux

- Store - Holds State of your Applications
- Action - Describes the changes in the state of application
- Reducer - Actually carries out the state transition depending on the action

Example - Book shop

shop(store) <----> shopkeeper(Reducer) <---> customer(action)

## Rules of Redux

- The state of uour application is stored in an object tree within a single store.
  {
  NumberOfBooks:10
  }
- only way to change the state is to emit an action, an object describing what happened.
  {
  Type:"buyBook"
  }
- to specify how the state tree is transformed by actions, we write pure reducer

=> How does Redux works
so what ever the state which is there in our javascript/React appliction we keep that state into redux store after that if we want to change state we have to send action from application to reducer than it will make changes into our state

application - action - reducer - store - application

## installation of redux

- npm i redux
- npm i react-redux

## Actions

- Actions are javascript object that contains information
- Actions are the only source of information for the store. It only tells us what has happened
- Actions have a type property and it should be defined in string constraint
- it is compulsory to include the type property in the object

- Syntax
  const Actions(name any thing)={
  type(compulasory):"buyBook"
  }

  Actions -> import {name}
  Types -> export const name = "name"

  actionCreater(function) -> return action

  files

  - BookTypes.js
  - BookAction.js

  ## Reducer

  - Reducer decides how the state of application changes depending upon the action sent to the store
  - Reducer are the function that accepts state and action as parameter and returns the next state of the application

  (peviousState,action) => new State

- BookReducer.js

## Redux Store

- entire application contains single store
- it is responsible for holding apllication state
- getState() method gives access to state it holds
- dispatch(action) method allow state to be updated
- it has subscribe(listner) method as well by which we can register listeners.

this method accept function (listner ) as a parameter which execute anytime when the state in redux store changes

steps:-
1- createStore -> "redux"
2- Provider -> "react-redux"
