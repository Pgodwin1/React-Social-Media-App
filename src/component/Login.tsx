import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='form min-vh-100 d-flex justify-content-center align-items-center'>
        <div className='border'>
    <form className='input' style={{color: "white"}}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p>Not a User<Link to={"/"}>Register here</Link></p>
    </form>
    </div>
</div>
  )
}

export default Login