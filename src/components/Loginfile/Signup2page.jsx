import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../url";
import './signup.css';

function SignupStep2() {
    const [firstnum, setFirstnum] = useState('');
    const [secondnum, setSecondnum] = useState('');
    const [thirdnum, setThirdnum] = useState('');
    const [fourthnum, setFourthnum] = useState('');
    const [fifthnum, setFifthnum] = useState('');
    const [lastnum, setLastnum] = useState('');

    const [emailOtp, setEmailOtp] = useState('');
    const [error, setError] = useState('');
    const [timeLeft, setTimeLeft] = useState(120); // Set initial time to 2 minutes
    const [otpExpired, setOtpExpired] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const { firstname, lastname, mobilenumber, email, password } = location.state || {};

    useEffect(() => {
        if (!email) {
            navigate('/signup');
        }
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    setOtpExpired(true);
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [email, navigate]);

    const handleVerifyEmailOtp = (e) => {
        e.preventDefault();
        if (otpExpired) {
            setError('OTP has expired. Please resend the OTP.');
            return;
        }
        const otp = firstnum + secondnum + thirdnum + fourthnum + fifthnum + lastnum;
        setEmailOtp(otp);
        axios.post(`${baseUrl}/verify-email-otp`, { email, emailOtp: otp })
            .then(res => {
                alert("Email verified successfully");
                // Create account after successful OTP verification
                axios.post(`${baseUrl}/register`, { firstname, lastname, mobilenumber, email, password })
                    .then(res => {
                        if (res.status ===200) {
                            alert("Account created successfully");
                            navigate('/login');
                        } else if (res.status === 409) {
                            setError('User Already Exists');
                        }
                    })
                    .catch(err => {
                        setError('Failed to create account');
                    });
            })
            .catch(err => {
                setError('Invalid OTP for email');
            });
    };

    const handleInputChange = (setter, e) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            setter(value);
            const nextSibling = e.target.nextElementSibling;
            if (nextSibling) {
                nextSibling.focus();
            }
        } else {
            e.target.value = ''; // Clear invalid input
        }
    };

    const handleResendOtp = () => {
        axios.post(`${baseUrl}/resend-email-otp`, { email })
            .then(res => {
                alert("OTP resent successfully");
                setOtpExpired(false);
                setTimeLeft(120); // Reset timer to 2 minutes
                setError('');
                setFirstnum('');
                setSecondnum('');
                setThirdnum('');
                setFourthnum('');
                setFifthnum('');
                setLastnum('');
            })
            .catch(err => {
                setError('Failed to resend OTP');
            });
    };

    return (
        <div className="paddingtop container">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel autem consequuntur explicabo sapiente totam cumque accusantium hic ut laboriosam perferendis.</p>
            <div className="text-center verifyotpheight">
                <form action="" className="d-flex gap-3 justify-content-center" onSubmit={handleVerifyEmailOtp}>
                    <input type="text" className="otpnum text-center" maxLength="1" onInput={(e) => handleInputChange(setFirstnum, e)} value={firstnum} />
                    <input type="text" className="otpnum text-center" maxLength="1" onInput={(e) => handleInputChange(setSecondnum, e)} value={secondnum} />
                    <input type="text" className="otpnum text-center" maxLength="1" onInput={(e) => handleInputChange(setThirdnum, e)} value={thirdnum} />
                    <input type="text" className="otpnum text-center" maxLength="1" onInput={(e) => handleInputChange(setFourthnum, e)} value={fourthnum} />
                    <input type="text" className="otpnum text-center" maxLength="1" onInput={(e) => handleInputChange(setFifthnum, e)} value={fifthnum} />
                    <input type="text" className="otpnum text-center" maxLength="1" onInput={(e) => handleInputChange(setLastnum, e)} value={lastnum} />
                </form>
                <button className='btn-login verifyotpbutton' type="submit" onClick={handleVerifyEmailOtp}>Verify OTP</button>
                <p className="mt-3">OTP expires in: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</p>
                <p className="mt-3"><button className='btn-link' onClick={handleResendOtp} disabled={!otpExpired}>Resend OTP</button></p>
                {error && <p className="error-message text-danger">{error}</p>}
            </div>
        </div>
    );
}

export default SignupStep2;
