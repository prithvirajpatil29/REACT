import React, { createContext, useState } from 'react'
import Child1 from './ex9-sub/Child1';
import GrandChild2 from './ex9-sub/sub/GrandChild2';
import Child2 from './ex9-sub/Child2';

export const userDetailszContext = createContext(null)
const Ex9 = () => {
    const [userDetails, setuserdetails] = useState({
        name:'raju',
        age : 30
    });
  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <h5 className="display-3">createContext and useContext Hook</h5>
                <p className="text-secondary">is used to create a common data that can be accessed throughtout the component hierarchy</p>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col text-center">
                <h3 className="display-6 text-secondary">
                    This is a parent component
                </h3>
            </div>
        </div>
        <hr />
        <Child1 userDetails = {userDetails}></Child1>
        <userDetailszContext.Provider value={userDetails}>
            <GrandChild2></GrandChild2>
            <Child2></Child2>
        </userDetailszContext.Provider>
    </div>
  )
}

export default Ex9