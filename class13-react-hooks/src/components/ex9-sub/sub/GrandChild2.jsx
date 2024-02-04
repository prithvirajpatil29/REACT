import React, { useContext } from 'react'
import { userDetailszContext } from '../../Ex9';

const GrandChild2 = () => {
    const contextData = useContext(userDetailszContext);
  return (
    <div className="row">
        <div className="col-12">
            <h3 className="text-secondary">
                This is the Grandchild Component -2
            </h3>
        </div>
        <div className="col-12">
            <div className="lead border p-3 rounded my-2">
                <p>User Name is {contextData.name}</p>
                <p>User Age is {contextData.age}</p>
            </div>
        </div>
    </div>
  )
}

export default GrandChild2