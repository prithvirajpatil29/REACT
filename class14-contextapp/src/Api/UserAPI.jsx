import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const url = 'https://jsonplaceholder.typicode.com/users'
const UserAPI = () => {
    const [user, setUser] = useState([])
    const getUser = useCallback(() => {
        const readUsers = async () => {
            axios.get(`https://jsonplaceholder.typicode.com/users`).then((out) => {
                console.log(out)
                setUser(out.data)
            }).catch(error => toast.error(error.message))
        }
        readUsers()
    },[])
    useEffect(() => {getUser()},[])
  return {
    users : [user,setUser]
  }
}

export default UserAPI