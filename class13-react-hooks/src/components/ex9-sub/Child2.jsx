import React, { Fragment } from 'react'
import GrandChild2 from './sub/GrandChild2'

const Child2 = () => {
  return (
    <Fragment>
        <div className="row">
            <div className="col text-center">
                <h3 className="text-secondary">
                    This is Child Component - 2
                </h3>
            </div>
        </div>
        <GrandChild2></GrandChild2>
    </Fragment>
  )
}

export default Child2