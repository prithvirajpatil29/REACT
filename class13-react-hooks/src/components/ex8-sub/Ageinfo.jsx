import React from 'react'

const Ageinfo = (props) => {
  return (
    <div className="row">
        <div className="row">
            <div className="col">
                <h3 className="display-3 text-warning">Age Info {props.updateAge()}</h3>
            </div>
        </div>
    </div>
  )
}

export default Ageinfo