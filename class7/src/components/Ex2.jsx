import React, { useState } from 'react'

//useState = hook => functional components
// state variables => value
// state handler => method => used change/modify the valus of the state
const Ex2 = () => {
    //const [state,handler] = useState(initValue)
    let [count, setCount] = useState(1);
    const sayHi = (parametr1) =>{
        alert(`Hello ${parametr1}`)
    }
  return (
        <div className="row">
            <div className="col-12 text-center">
                <div className="lead my-3 p-3 border">
                    <p>
                        <b>3 Call multiple functions in an onCLick event handler</b>
                    </p>
                    <button className='btn btn-outline-info' onClick={()=>{
                        sayHi("React");
                        setCount(count+1)
                    }}>
                        Increase
                    </button>
                    <p><b>Increment : </b>{count}</p>
                </div>
            </div>
        </div>
  )
}

export default Ex2