import React, { ChangeEvent, FormEvent, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from './Services/axios';
import { toast } from 'react-toastify';

type FormDataTypes = {
    username: string;
    email: string;
    gender: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const navigate = useNavigate()
    const normalFormData: FormDataTypes = {
        username: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: ""
    };
    const [formData, setFormData] = useState<FormDataTypes>(normalFormData)
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // console.log(formData)
        try {
            setLoading(!loading)
            const response = axios.post("/users/register", formData).then((res) => {
                if (res.status === 201) {
                    toast.success(res.data.message)
                    setLoading(!loading)
                    navigate("/login")

                    console.log("Registration Successful")
                }
            }).catch((err) => {
                setLoading(!loading)
                toast.error(err.response.error)
                console.log(err.response.error)
            })
            console.log(response)
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div className='form min-vh-100 d-flex justify-content-center align-items-center '>
            <div className='border'>
                <form className='input' style={{ color: "white" }} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputUsername">Username</label>
                        <input type="text" className="form-control" value={formData.username} onChange={handleInputChange} name='username'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={formData.email} onChange={handleInputChange} name='email'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                        <input type="gender" className="form-control" value={formData.gender} onChange={handleInputChange} name='gender'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={formData.password} onChange={handleInputChange} name='password'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" value={formData.confirmPassword} onChange={handleInputChange} name='confirmPassword'/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                    <p>Already a User<Link to={"/login"}>Login here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register