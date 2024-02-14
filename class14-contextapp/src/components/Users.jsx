import React, { useCallback, useContext, useState } from 'react'
import UserAPI from '../API/UserAPI'
import { DataContext } from '../context/Context'
import Usercard from './Usercard';
const Users = () => {
    const context = useContext(DataContext)
    const [users] = context.userApi.users
  return (
    <div className='container'>
        <div className="row">
          <div className="col">
            <h1 className="display-3 text-success">Users</h1>
          </div>
        </div>
        <div className="row">
          {
            users && users.map((item, index) => {
              return(<Usercard key={index} {...item}></Usercard>) 
            })
          }
        </div>
    </div>
  )
}

export default Users