import React, { Fragment } from 'react'

const Grandchild1 = (props) => {
    const {age, name} = props.userDetails;
    
  return (
    <Fragment>
        <div className="row">
            <div className="col-12">
                <h3 className="text-secondary">
                    This is the Grandchild Component -1
                </h3>
            </div>
            <div className="col-12">
                <div className="lead border p-3 rounded my-2">
                    <p>User Name is {name}</p>
                    <p>User Age is {age}</p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Grandchild1