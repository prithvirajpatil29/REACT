import React from 'react'
import users from '../data/users'

const Usercomponents = () => {
  return (
    <div className=''>
      {users.map((user) => (
            <div key={user.id}>
              <h2>Name: {user.name}</h2>
              <p><b>Email :</b>  {user.email}</p>
              <p><b>Age :</b> {user.age}</p>
              <p><b>City :</b> {user.address.city}</p>
              <p><b>Pin :</b> {user.address.pin}</p>
              <h3>Bank Accounts:</h3>
              <ul>
                {user.bank.map(account => (
                  <li key={account.accNo}>
                    <b>Account Number :</b> {account.accNo}, <b>Bank Name :</b> {account.bName},<b> Type :</b> {account.type}
                  </li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  )
}

export default Usercomponents