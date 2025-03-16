import React from 'react'
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const LoginForm = ({ registerPath, resetPath }) => {
    return (
        <>
            <h2 className="fs-20 fw-bolder mb-4">Login</h2>
            <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
            <p className="fs-12 fw-medium text-muted">Thank you for get back <strong>The Women Empowerment Society</strong> Admin Dashboard, let's access our the best recommendation for you.</p>
            <form action="/" className="w-100 mt-4 pt-2">
                <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Email or Username"required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">Login</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm