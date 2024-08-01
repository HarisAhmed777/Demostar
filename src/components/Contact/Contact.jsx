import React, { useState } from "react";
import './Contact.css';
import { baseUrl } from '../../../url';
import axios from 'axios';
import SimpleMap from "./SImpleMap";
function Contact() {
    const [firstname, setFirstName] = useState('');
    const [secondname, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setFirstName(value);
        }
    };

    const handleSecondNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setSecondname(value);
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9@]*$/.test(value)) {
            setEmail(value);
        }
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setPhonenumber(value);
        }
    };

    const handleFeedbackChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9\s]*$/.test(value)) {
            setFeedback(value);
        }
    };

    async function handleFeedback() {
        if (firstname && secondname && email && phonenumber && feedback) {
            try {
                const response = await axios.post(`${baseUrl}/feedback`, {
                    firstname,
                    secondname,
                    email,
                    phonenumber,
                    feedback
                });
                if (response.status === 200) {
                    alert('Feedback submitted successfully');
                    setEmail("");
                    setFeedback("");
                    setFirstName("");
                    setPhonenumber("");
                    setSecondname("");
                } else {
                    alert('Failed to submit feedback');
                }
            } catch (error) {
                alert('Error submitting feedback: ' + error.message);
            }
        } else {
            alert('Please fill in all fields');
        }
    }

    return (
        <>
            <div className="paddingtop container">
                <div className="container">
                    <h2>Get in Touch</h2>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <p>Call Us <br /><span className="cllr fw-bold">+919876543210</span></p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p>Email <br /><span className="cllr fw-bold">info@starholiday.com</span></p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p>Office<br /><span className="cllr fw-bold">Navalpur Mosque Street <br />Ranipet-632401</span></p>
                        </div>
                    </div>
                </div>
                <div className="container feedbackform mt-4 mb-4">
                    <h2 className="">Send a message or Come Visit Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam voluptate voluptates doloribus rem minus ducimus at quasi nostrum veritatis?</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="">Name</label><br />
                            <div className="row mb-3">
                                <input
                                    className="inp p-2 col-lg-1"
                                    placeholder="Enter your First Name"
                                    onChange={handleFirstNameChange}
                                    value={firstname}
                                />
                                <input
                                    className="inp p-2 col-lg-1"
                                    placeholder="Enter your Last Name"
                                    onChange={handleSecondNameChange}
                                    value={secondname}
                                />
                            </div>
                            <label htmlFor="">Email</label><br />
                            <input
                                className="input p-2 mb-3"
                                placeholder="Enter Your email id"
                                onChange={handleEmailChange}
                                value={email}
                            />
                            <label htmlFor="">Phone Number</label><br />
                            <input
                                className="input p-2 mb-3"
                                placeholder="Enter Your phone number"
                                onChange={handlePhoneNumberChange}
                                value={phonenumber}
                                type="text"
                            />
                            <label htmlFor="">Message</label><br />
                            <textarea
                                className="input p-2 mb-3"
                                placeholder="Enter Your feedback"
                                rows={5}
                                onChange={handleFeedbackChange}
                                value={feedback}
                            />
                            <button onClick={handleFeedback} className="d-block bgc">Submit</button>
                        </div>
                        <div className="col-lg-6">
                            <SimpleMap/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
