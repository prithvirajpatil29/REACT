import React from 'react'
import Age from './Age'

const Ageinfo = (props) => {
  return (
    <div className="row">
        <div className="row">
            <div className="col">
                <h3 className="display-3 text-warning">Age Info {props.ageInfo()}</h3>
            </div>
        </div>
        {/* <hr /> */}
       
    </div>
  )
}

export default Ageinfo