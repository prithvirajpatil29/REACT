import React, { useEffect, useState } from 'react'
import { readAllTask } from '../data/task'
import { NavLink } from 'react-router-dom';
import {toast} from 'react-toastify'
const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const data = readAllTask();
    setTasks(data);
  },[])
  const deleteHandler = () => {
    
  }
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="dosplay-3 tex-dark text-center">
                    Home
                </div>
            </div>
        </div>
        <div className="row">
          {
            tasks && tasks.map((item, index) => {
              return (
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="text-success text-center">
                        {item.title}
                      </h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Start Date</strong>
                          <span className="text-success float-end">
                            {
                              item.start
                            }
                          </span>
                        </li>
                        <li className="list-group-item">
                        <strong>End Date</strong>
                          <span className="text-success float-end">
                            {
                              item.end
                            }
                          </span>
                        </li>
                        <li className="list-group-item">
                        <strong>Description </strong>
                          <span className="text-success float-end">
                            {
                              item.desc
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer">
                      <NavLink className="btn btn-info"> <i className="bi bi-pencil"></i> </NavLink>
                      <button className="btn btn-danger" onClick={() => deleteHandler(item.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Home