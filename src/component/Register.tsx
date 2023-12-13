import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='form min-vh-100 d-flex justify-content-center align-items-center'>
        <form className='input' style={{color: "white"}}>
            <div className="mb-3">
                <label htmlFor="exampleInputFullname">Fullname</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                <input type="gender" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <p>Already a User<Link to={"/login"}>Login here</Link></p>
        </form>
    </div>
      )
}

export default Register