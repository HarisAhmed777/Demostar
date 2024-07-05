import React, { useState, useContext } from "react";
import axios from "axios";
import { baseUrl } from "../../../url";
import { Link, useNavigate } from 'react-router-dom';
import {Context} from '../context'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    const { setIsAuthorized, setUser } = useContext(Context);

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/login`, { email, password }, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                if (res.data.status === "Success") {
                    setIsAuthorized(true);
                    if (res.data.role === "user") {
                        setUser(res.data.name);
                        console.log(res.data.name);
                        localStorage.setItem('jwtToken', res.data.token);
                        navigate('/');
                    } else if (res.data.role === "admin") {
                        navigate('/admin');
                    }
                }
            })
            .catch(err => {
                if (err.response) {
                    setError(err.response.data.error); 
                } else {
                    setError('An unexpected error occurred');
                }

            });
    }

    return (
        <div className='login-container'>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <input className='form-control-both text-dark' onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
                <input className='form-control-both text-dark' onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
                {error && <p className="error-messagelogin text-danger">{error}</p>} 
                <button className='btn-login'>LOGIN</button>
                <Link to ="/forgotpassword"><span className="text-warning">Forgot Password?</span></Link>
            </form>
        </div>
    );
}

export default Login;