import React, { useState } from "react";
import './signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../url";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function SignupStep1() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleFirstnameChange = (e)=>{
        const value = e.target.value;
        if (/^[a-zA-Z0-9\s]*$/.test(value)) {
            setFirstname(value);
        }
    }
    const handlelastnamechnage = (e)=>{
        const value = e.target.value;
        if (/^[a-zA-Z0-9\s]*$/.test(value)) {
            setLastname(value);
        }        
    }
    const handleemailchnage = (e)=>{
        const value = e.target.value;
        if (/^[a-zA-Z0-9@]*$/.test(value)) {
            setEmail(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters long and contain at least 1 number');
            return;
        }
        // Send OTP
        axios.post(`${baseUrl}/send-email-otp`, { email })
            .then(res => {
                alert("OTP sent to email successfully");
                navigate('/verify-otp', {
                    state: { firstname, lastname, mobilenumber, email, password }
                });
            })
            .catch(err => {
                setError('Failed to send OTP to email');
            });
    }

    return (
        <div className='signup-container text-dark'>
            <h2 className="text-dark">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input className='form-control-sign text-dark' 
                onChange={handleFirstnameChange}
                value={firstname} 
                placeholder="First Name" 
                type="text" />
                <input className='form-control-sign text-dark' 
                onChange={handlelastnamechnage}
                value = {lastname} 
                placeholder="Last Name" 
                type="text" />
                <PhoneInput
                    country={'in'}
                    value={mobilenumber}
                    onChange={phone => setMobilenumber(phone)}
                    inputClass='form-control-sign phn text-dark border-0 border-bottom border-3 w-100'
                    placeholder="Mobile number"
                />
                <input className='form-control-sign text-dark' 
                onChange={handleemailchnage}
                value = {email} 
                placeholder="Email" 
                type="email" />
                <input className='form-control-sign text-dark' 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                type="password" />
                {error && <p className="error-message text-danger">{error}</p>}
                <button className='btn-login' type="submit">Proceed to Step 2</button>
            </form>
        </div>
    );
}

export default SignupStep1;
