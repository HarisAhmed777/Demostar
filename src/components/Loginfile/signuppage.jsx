import React, { useState, useEffect } from "react";
import './signup.css';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../../../url";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Signup() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailVerified = params.get('emailVerified');

        if (emailVerified === 'true') {
            setIsEmailVerified(true);
        }
    }, [location]);

    const handleSendOtp = () => {
        axios.post(`${baseUrl}/send-otp`, { mobilenumber })
            .then(res => {
                alert("OTP sent successfully");
            })
            .catch(err => {
                setError('Failed to send OTP');
            });
    }

    const handleVerifyOtp = () => {
        axios.post(`${baseUrl}/verify-otp`, { mobilenumber, otp })
            .then(res => {
                setIsPhoneVerified(true);
                alert("Phone number verified successfully");
            })
            .catch(err => {
                setError('Invalid OTP');
            });
    }

    const handleSendVerificationEmail = () => {
        axios.post(`${baseUrl}/send-verification-email`, { email })
            .then(res => {
                alert("Verification email sent successfully");
            })
            .catch(err => {
                setError('Failed to send verification email');
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
                    country={'IN'}
                    value={mobilenumber}
                    onChange={phone => setMobilenumber(phone)}
                    inputClass='form-control-sign phn text-dark border-0 border-bottom border-3 w-100'
                    placeholder="Mobile number"
                />
                <button type="button" onClick={handleSendOtp}>Send OTP</button>
                <input className='form-control-sign text-dark' onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" type="text" />
                <button type="button" onClick={handleVerifyOtp}>Verify OTP</button>
                <input className='form-control-sign text-dark' onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <button type="button" onClick={handleSendVerificationEmail}>Send Verification Email</button>
                <input className='form-control-sign text-dark' onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                {error && <p className="error-message text-danger">{error}</p>}
                <button className='btn-login'>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
