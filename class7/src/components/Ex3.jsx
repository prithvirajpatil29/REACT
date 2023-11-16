import React, { useState } from 'react'

const Ex3 = () => { 
    //const [state,handler] = useState(initValue)
    let [num, setNum] = useState(1);
    const [isView, setisView] = useState(false);
    const clickHandler = () => {
        setNum(++num);
    }
    const decrement = () => {
        setNum(num-1);
    }
  return (
    <div className="row">
            <div className="col-12 text-center">
                <div className="lead my-3 p-3 border">
                    <p>
                        <b>4) Update the state inside </b>
                    </p>
                    <button className='btn btn-outline-info'>Click for True and flase</button>

                    <button className='btn btn-outline-success mx-3' onClick={clickHandler}>
                        Increment
                    </button>
                    <button className='btn btn-outline-danger' onClick={decrement}>Decrement</button>
                    <p className='my-2'><b>Num : </b>{num}</p>
                    <div>
                        {
                            isView ? <h3 className='text-success'>It's true</h3> : <h3 className='text-danger'>It's false</h3>
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <div className="lead my-3 p-3 border">
                    <p>
                        <b>5) Use synthetic events : directly inside inside an onClick event handler </b>
                    </p>
                    <button value={"Prithviraj Patil"} className='btn btn-outline-info' onClick={(e) => alert(e.target.value)}>Click Me</button>
                </div>
            </div>
    </div>
    )
}

export default Ex3