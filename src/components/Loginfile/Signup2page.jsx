import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../url";
import './signup.css';

function SignupStep2() {
    const [emailOtp, setEmailOtp] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { firstname, lastname, mobilenumber, email, password } = location.state || {};

    useEffect(() => {
        if (!email) {
            navigate('/signup');
        }
    }, [email, navigate]);

    const handleVerifyEmailOtp = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/verify-email-otp`, { email, emailOtp })
            .then(res => {
                alert("Email verified successfully");
                // Create account after successful OTP verification
                axios.post(`${baseUrl}/register`, { firstname, lastname, mobilenumber, email, password })
                    .then(res => {
                        alert("Account created successfully");
                        navigate('/login');
                    })
                    .catch(err => {
                        setError('Failed to create account');
                    });
            })
            .catch(err => {
                setError('Invalid OTP for email');
            });
    }

    return (
        <div className="paddingtop d-flex signup2">

        <div className='signup-container  text-dark'>
            <h2 className="text-dark">Verify Email OTP</h2>
            <form onSubmit={handleVerifyEmailOtp}>
                <input className='form-control-sign text-dark' onChange={(e) => setEmailOtp(e.target.value)} placeholder="Enter OTP" type="text" />
                {error && <p className="error-message text-danger">{error}</p>}
                <button className='btn-login' type="submit">Verify OTP</button>
            </form>
        </div>
        </div>
    );
}

export default SignupStep2;
