import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useState } from 'react'

// example - 2
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1, showText: state.showText}
      break;
    case 'toggleshowtext':
      return {count: state.count, showText: !state.showText}
    default:
      return state
  }
}
// example - 3
// intial state
const initialState = {width:50}
const reduce = (states, action) => {
  switch (action.type) {
    case 'plus':
      return {width : states.width + 10};
      break;
    case 'diff':
      return {width: states.width-10}
  
    default:
      break;
  }
}


export const Ex2 = () => {
  const [counter, setCounter] = useState(0);
  const [isView, setIsView] = useState(true)

  // const [state, dispatcher] = useReducer(reducer, initialstate or IntialValue)
  // state = is used for declare variables or state
  // dispatcher = 1) is used for call state object.
  //              2) helps to passing an action constants through dispatcher
  // reducer = 1) is a function, is used for handle the actions.
           //  2) Action is used for to determine what kind of action try to take
  const[state, dispatcher] = useReducer(reducer, {count:0,showText:true})
  const [states, dispatch] = useReducer(reduce,initialState)
  const increment = () => {
    setCounter(counter+1);
    setIsView(!isView)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3">useReducer Hook</h5>
          <p className="text-secondary">
            useReducer is usually preferably to useState when you have complex state logic involves multiple sub-values or when the next depends on the previous one.
          </p>
          <p className="text-secondary">
            useReducer also lets you optimize performance for components that trigger deep updates
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 1</h3>
            <p><b>Counter =</b>{counter}</p>
            <p><b>isView = </b>{isView ? 'Condition is true' : 'Condition is false'}</p>
            <button className='btn btn-outline-secondary' onClick={increment}>Click Here</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 2</h3>
            <p><b>Counte = </b>{state.count}</p>
            <p><b>showText = </b>{state.showText ? 'Condition is true' : 'Condition is false'}</p>
            <button className="btn btn-outline-secondary" onClick={()=>{
              dispatcher({type:'increment'});
              dispatcher(({type:'toggleshowtext'}))
          }}>Reducaer</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 3</h3>
            <article className="bg-secondary text-white p-2 my-2" style={{width:states.width}}>Article</article>
            <button className="btn btn-outline-success " onClick={() => dispatch({ type: 'plus' })}>Increment</button>
            <button className="btn btn-outline-danger float-end " onClick={() => dispatch({ type: 'diff'})}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  )
}