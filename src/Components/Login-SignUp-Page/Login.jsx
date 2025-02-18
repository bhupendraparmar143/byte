import React from 'react'
import "./Login-SignUp.css"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="container">
                <div className="loginForm">
                    <form>
                        <h1 className='text-center mb-3 text-color'>Login Page</h1>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" placeholder='Enter Email' required className="form-control" name='email' />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" required placeholder='Enter Password' className="form-control" name='password' />
                        </div>
                        <button type="submit" className="btn btn-primary animation-bottom wow animate__animated animate__backInUp button">Login</button>
                        <Link type="submit" to="/signup" className="btn btn-primary m-2 animation-bottom wow animate__animated animate__backInUp button">Sign Up</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
