import React, { useState } from 'react'

const Ex1 = () => {

    //const [state, stateHandler] = useState(initValue) declare react states in functional component
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Welcome to react state');
    const [isView, setIsView] = useState(true);
    const [colors, setColors] = useState(['red','orange','voilet'])
    const [user, setUser] = useState({
        name : 'Raju',
        email : 'raju@gmail.com'
    })
    const [inputValue, setInputvalue] = useState('React Hooks')
    const increment = () => {
        setCount(count+1);
        setIsView(!isView)
    }
    const changeInput = (e) => {
        setInputvalue(e.target.value);
    }
    return (
    <div className="container">
        <div className="row">
            <div className="col text-center my-1">
                <h1>State Hook</h1>
                <p>THAT ALLOWS YOUT TO HAVE A STATE VARIABLE IN FUNCTIONAL COMPONENTS</p>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col">
                <div className="lead p-3 border rounded">
                    <h3>Example - 1</h3>
                    <p><b>Count = </b>{count}</p>
                    <button className="btn btn-outline-secondary" onClick={increment}>Increment</button>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="lead p-3 border rounded">
                    <h3>Example - 2</h3>
                    <p><b>Count = </b>{count}</p>
                    <button className="btn btn-outline-secondary">Increment</button>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="lead p-3 border rounded">
                    <h3>Example - 3</h3>
                    <title>{title}</title>
                    <p><b>isView = </b>{isView?'Condition is true':'Condition is false'}</p>
                    <button className="btn btn-outline-secondary" onClick={increment}>Increment</button>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="lead p-3 border rounded">
                    <h3>Example - 4</h3>
                    <p><b>Colors = </b>{colors}</p>
                    <p><b>Colors = </b>{colors && colors.map((item, index) => {
                        return <span key={index}>{item} </span>
                    }) }</p>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="lead p-3 border rounded">
                    <h3>Example - 5</h3>
                    <p><b>User Name = </b>{user.name}</p>
                    <p><b>User Email = </b>{user.email}</p>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="lead p-3 border rounded">
                    <h3>Example - 6</h3>
                    <input type="text" name="name" id="name" className='form-control' placeholder='Enter Input' onChange={changeInput}/>
                    <p className='fs-3'><b>Input Value : </b> {inputValue}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex1