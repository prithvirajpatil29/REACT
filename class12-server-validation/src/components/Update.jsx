import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from '../middleware/FormValidate';
import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL ='http://localhost:4000'
const Update = () => {
  const params = useParams();
  const [contact, errors, readValue, submitHandler, setContact] = UserForm();
  useEffect(() => {
    axios
    .get(`${baseURL}/contacts/${params.id}`)
    .then((res) => {
      console.log(res);
      setContact(res.data)
    }).catch(err => toast.error(err.message))
  },[])
  const navigate = useNavigate()

  let updateHandler = async (e) => {
    e.preventDefault();
    await axios.put(`${baseURL}/contacts/${params.id}`,contact)
    .then((res) => {
      setContact(res.data)
      toast.success('User Update');
      navigate('/')
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className='display-3 text-center'>Update {params.id}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-3 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="card">
            <div className="card-body">
              <form action="">
                <div className="form-group my-2">
                  <label htmlFor="">Name</label>
                  <input type="text" name="name" id="name"  className='form-control' required minLength={4} maxLength={10} onChange={readValue} value={contact.name}/>
                  {
                    errors.name?(
                      <div className="alert alert-danger">
                        {errors.name}
                      </div>
                    ):null
                  }
                </div>
                <div className="form-group my-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='form-control' required onChange={readValue} value={contact.email}/>
                    {
                    errors.name?(
                      <div className="alert alert-danger">
                        {errors.email}
                      </div>
                    ):null
                  }
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">Image</label>
                  <input type="url" name="image" id="image" className='form-control' onChange={readValue} value={contact.image}/>
                  {
                    errors.name?(
                      <div className="alert alert-danger">
                        {errors.image}
                      </div>
                    ):null
                  }
                </div>
                <div className="form-group my-2">
                  <label htmlFor="">Mobile</label>
                  <input type="number" name="mobile" id="mobile"  className='form-control' />
                  {
                    errors.name?(
                      <div className="alert alert-danger">
                        {errors.mobile}
                      </div>
                    ):null
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="">Address</label>
                  <textarea name="address" id="" cols="30" rows="5" className='form-control'></textarea>
                  {
                    errors.name?(
                      <div className="alert alert-danger">
                        {errors.address}
                      </div>
                    ):null
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update