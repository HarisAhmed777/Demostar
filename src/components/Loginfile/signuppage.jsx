import React, { useState } from "react";
import './signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../url";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Signup() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters long and contain at least 1 number');
            return;
        }
        axios.post(`${baseUrl}/register`, { firstname, lastname, mobilenumber, email, password })
            .then(res => {
                alert("Account created successfully");
                navigate('/');
            })
            .catch(err => {
                if (err.response && err.response.status === 409) {
                    setError('User already exists');
                } else {
                    setError('An unexpected error occurred');
                }

            });
    }

    return (
        <div className='signup-container text-dark'>
            <h2 className="text-dark">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input className='form-control-sign text-dark' onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" type="text" />
                <input className='form-control-sign text-dark' onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" type="text" />
                <PhoneInput
                    country={'us'}
                    value={mobilenumber}
                    onChange={phone => setMobilenumber(phone)}
                    inputClass='form-control-sign phn text-dark border-0 border-bottom border-3 w-100 '
                    placeholder="Mobile number"
                />
                <input className='form-control-sign text-dark' onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input className='form-control-sign text-dark' onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                {error && <p className="error-message text-danger">{error}</p>} 
                <button className='btn-login '>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
