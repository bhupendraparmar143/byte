import React from 'react'

const SignUp = () => {
  return (
    <div className="container">
            <div className="loginForm">
                <form>
                    <h1 className='text-center mb-3 text-color'>Sign Up Page</h1>
                    <div className="mb-3">
                        <label htmlFor="input" className="form-label">Name</label>
                        <input placeholder='Enter Your Name' type="input" required className="form-control" name='author_name' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email1" className="form-label">Email address</label>
                        <input placeholder='Enter Your Email' type="email" required className="form-control" name='author_email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author_password" className="form-label">Password</label>
                        <input placeholder='Enter Your Password' type="password" required className="form-control" name='author_password' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author_image" className="form-label">Upload Image</label>
                        <input type="file"  required className="form-control" name='author_image' />
                    </div>
                    <button type="submit" className="btn btn-primary animation-bottom wow animate__animated animate__backInUp button">Sign Up</button>
                </form>
            </div>
        </div>
  )
}

export default SignUp
