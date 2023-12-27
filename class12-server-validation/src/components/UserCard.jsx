import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


const baseURL ='http://localhost:4000'
const UserCard = (props) => {
    const {address,id,name,image,email,mobile} = props.contacts;
    const deleteContact = (id) => {
        if (window.confirm(`Do you want to delete the records of ${id}`)) {
            axios.delete(`${baseURL}/contacts${id}`)
            .then((res) => {
                toast.success('Successfully deleted');
                window.location.reload();
            }).catch(err => console.log(err))
        } else {
            toast.error("You are cancled the delete operation")
        }
    }
  return (
    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-2'>
        <div className="card">
            <img src={image} className=' shadow' height={'250px'} alt="" />
        
        <div className="card-body shadow">
            <h5 className="text-center text-uppercase mt-2">{name}</h5>
            <ul className="list-group">
                <li className="list-group-item"><b>Email :</b> {email}</li>
                <li className="list-group-item"><b>Mobile :</b> {mobile}</li>
                <li className="list-group-item"><b>Address :</b> {address}</li>
            </ul>
        </div>
        <div className="card-footer">
            <NavLink to={`/update/${id}`} className='btn btn-sm btn-info'>
                <i className="bi bi-pen"></i>
            </NavLink>
            <NavLink className="btn btn-sm btn-danger float-end">
                <i className="bi bi-trash" onClick={() => {deleteContact(id)}}></i>
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default UserCard