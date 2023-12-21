import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import UserCard from './UserCard';


const baseURL ='http://localhost:4000'

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    await axios.get(`${baseURL}/contacts`).then(res => {
      console.log('Contacts = ',res)
      setContacts(res.data)
    }).catch((err) => {toast.error(err.message)})
  }
  // console.log(contacts)
  useEffect(() => {getContacts()},[])
  return (
    <div className='container'>
      <div className="row">
        <div className="col text-center">
          <div className="display-3">
            Contact List
          </div>
        </div>
      </div>
      <div className="row">
        {
          contacts && contacts.map((item, index) => {
            return (<UserCard key={index} contacts={item}></UserCard>)
          })
        }
      </div>
    </div>
  )
}

export default Home