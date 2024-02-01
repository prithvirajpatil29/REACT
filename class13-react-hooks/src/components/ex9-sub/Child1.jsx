import React, { Fragment } from 'react'
import Grandchild1 from './sub/Grandchild1';

const Child1 = (props) => {
    const {age, name} = props.userDetails;
  return (
    <Fragment>
        <div className="row">
            <div className="col-12 text-center">
                <h3 className="text-secondary">This is Child Component - 1</h3>
            </div>
            <div className="col-12">
                <div className="lead border p-3 rounded my-2">
                    <p>User Name is {name}</p>
                    <p>User Age is {age}</p>
                </div>
            </div>
        </div>
        <Grandchild1 userDetails={props.userDetails}></Grandchild1>
    </Fragment>
  )
}

export default Child1