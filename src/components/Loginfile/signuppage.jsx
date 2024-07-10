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
    const [phoneOtp, setPhoneOtp] = useState('');
    const [emailOtp, setEmailOtp] = useState('');
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSendPhoneOtp = () => {
        axios.post(`${baseUrl}/send-otp`, { mobilenumber })
            .then(res => {
                alert("OTP sent to phone successfully");
            })
            .catch(err => {
                setError('Failed to send OTP to phone');
            });
    }

    const handleVerifyPhoneOtp = () => {
        axios.post(`${baseUrl}/verify-otp`, { mobilenumber, phoneOtp })
            .then(res => {
                setIsPhoneVerified(true);
                alert("Phone number verified successfully");
            })
            .catch(err => {
                setError('Invalid OTP for phone');
            });
    }

    const handleSendEmailOtp = () => {
        axios.post(`${baseUrl}/send-email-otp`, { email })
            .then(res => {
                alert("OTP sent to email successfully");
            })
            .catch(err => {
                setError('Failed to send OTP to email');
            });
    }

    const handleVerifyEmailOtp = () => {
        axios.post(`${baseUrl}/verify-email-otp`, { email, emailOtp })
            .then(res => {
                setIsEmailVerified(true);
                alert("Email verified successfully");
            })
            .catch(err => {
                setError('Invalid OTP for email');
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordRegex = /^(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters long and contain at least 1 number');
            return;
        }
        if (!isPhoneVerified) {
            setError('Please verify your phone number first');
            return;
        }
        if (!isEmailVerified) {
            setError('Please verify your email first');
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
                    country={'in'}
                    value={mobilenumber}
                    onChange={phone => setMobilenumber(phone)}
                    inputClass='form-control-sign phn text-dark border-0 border-bottom border-3 w-100'
                    placeholder="Mobile number"
                />
                <button type="button" onClick={handleSendPhoneOtp}>Send OTP to Phone</button>
                <input className='form-control-sign text-dark' onChange={(e) => setPhoneOtp(e.target.value)} placeholder="Enter Phone OTP" type="text" />
                <button type="button" onClick={handleVerifyPhoneOtp}>Verify Phone OTP</button>
                <input className='form-control-sign text-dark' onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <button type="button" onClick={handleSendEmailOtp}>Send OTP to Email</button>
                <input className='form-control-sign text-dark' onChange={(e) => setEmailOtp(e.target.value)} placeholder="Enter Email OTP" type="text" />
                <button type="button" onClick={handleVerifyEmailOtp}>Verify Email OTP</button>
                <input className='form-control-sign text-dark' onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                {error && <p className="error-message text-danger">{error}</p>}
                <button className='btn-login'>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
