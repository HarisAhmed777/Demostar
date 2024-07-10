import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../../url';

function EmailVerification() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            axios.get(`${baseUrl}/verify-email`, { params: { token } })
                .then(response => {
                    if (response.data.success) {
                        setMessage('Email verified successfully!');
                        // Optionally, you can navigate to the signup page or any other page
                        navigate('/signup');
                    } else {
                        setMessage(response.data.message);
                    }
                })
                .catch(error => {
                    setMessage('An error occurred while verifying your email.');
                });
        } else {
            setMessage('Invalid verification link.');
        }
    }, [location, navigate]);

    return (
        <div className="email-verification-container">
            <h2>Email Verification</h2>
            <p>{message}</p>
        </div>
    );
}

export default EmailVerification;
