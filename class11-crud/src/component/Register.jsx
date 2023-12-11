import React, { useRef } from 'react'
import {registerUser} from '../data/user'
const Register = () => {
  const fName = useRef();
  const fEmail = useRef();
  const fMobile = useRef();
  const fPass = useRef();

  const submitHandler = async(e) => {
    e.preventDefault();
    const data = {
      name : fName.current.value,
      email : fEmail.current.value,
      mobile : fMobile.current.value,
      password : fPass.current.value
    };
    console.table("New Data", data)
    await registerUser(data);
  }
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="displa-3 text-dark text-center my-2">
                    <h1>Register</h1>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
            <div className="card">
              <div className="card-body">
                <form  autoComplete='off' onSubmit={submitHandler}>
                  <div className="form-group ">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="name" className='form-control' required ref={fName} />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" className='form-control' required ref={fEmail} />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">Mobile</label>
                    <input type="number" name="mobile" id="mobile" required className='form-control' ref={fMobile}/>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" required className='form-control' ref={fPass} />
                  </div>
                  <div className="form-group mt-2">
                    <input type="submit" value="Register" className='btn btn-outline-info' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register