import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    const [task, setTask] = useState({
        title : '',
        start : '',
        end : '',
        desc : ''
    })
    const params = useParams();
    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('update code ', task);
    }
    const readValue = (event) => {
        const {name, value} = event.target;
    }
  return (
    <div className="continer">
        <div className="row">
            <div className="col-md-2 text-center">
                <h3 className="display-3 text-dark">Update</h3>
            </div>
        </div>
    </div>
  )
}

export default Update