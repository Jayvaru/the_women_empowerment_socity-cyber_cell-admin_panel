import React, { useEffect, useState } from 'react'
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../../api/Auth';
import { useCookies } from 'react-cookie';
import Home from '../../pages/home';

const LoginForm = ({ registerPath, resetPath }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [cookies, setCookies,removeCookie] = useCookies(['token', 'id', 'name']);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Auth.login(formData);
            console.log(response);
            if (response.status === 200) {
                setCookies("token", response.data.token);
                setCookies("id", response.data?.admin.id);
                setCookies("name", response.data?.admin.email);
                // window.location.href = '/';
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
            console.log(err);
        }
    };
    console.log(cookies);

    return (
        <>
            <h2 className="fs-20 fw-bolder mb-4">Login</h2>
            <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
            <p className="fs-12 fw-medium text-muted">Thank you for get back <strong>The Women Empowerment Society</strong> Admin Dashboard, let's access our the best recommendation for you.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" className="form-control" placeholder="Email or Username" required />
                </div>
                <div className="mb-3">
                    <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" className="form-control" placeholder="Password" required />
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">Login</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm