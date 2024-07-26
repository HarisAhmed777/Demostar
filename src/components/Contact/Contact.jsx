import React, { useState } from "react";
import './Contact.css';
import {baseUrl} from '../../../url'
import axios from 'axios'


function Contact(){
    const [name,setName] =  useState('');
    const [email,setemail] =  useState('');
    const [feedback,setfeedback] =  useState('');


    async function handleFeedback() {
        if (name && email && feedback) {
            try {
                const response = await axios.post(`${baseUrl}/feedback`, {
                    name,
                    email,
                    feedback
                });
                if (response.status === 200) {
                    alert('Feedback submitted successfully');
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

    
 return(
    <>
        <div className=" paddingtop container  ">
            <div className="row ms-2 mt-4">
                <div className="col-lg-9 col-md-8 col-12 ">
                    <h2 className="">Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis! Nihil impedit nemo deserunt, temporibus porro labore optio quia itaque!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis! Nihil impedit nemo deserunt, temporibus porro labore optio quia itaque!</p>
                    <h5>For futher assistance</h5>
                    <p>Call us on <span className="text-primary fw-bold">+919876543210</span></p>
                    <p>Call us on <span className="text-primary fw-bold">+919876543210</span></p>

                    <p>Monday to Saturday(9.30am to 7.00pm)
                        and on public holidays (9.30am to 5.00pm)
                    </p>
                    <div className="d-flex flex-wrap justify-content-around">
                            <p>Feeback <br /><span className="fw-bold text-primary">startholidays@gemail.com</span></p>
                            <p>Feeback <br /><span className="fw-bold text-primary">startholidays@gemail.com</span></p>

                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 mb-4 bg-dark contactadress">
                    <h5>Our Office Address</h5>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Chennai,TamilNadu</p>
                    <p>+919876543210</p>

                </div>
            </div>
            <div className="container feedbackform mt-4 mb-4">
                <h2 className="">Feedback form</h2>
                <input className="input p-2" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                <input className="input p-2" placeholder="Enter Your email id " onChange={(e)=>setemail(e.target.value)}/>
                <textarea className="input p-2" placeholder="Enter Your feedback " rows={5} onChange={(e)=>setfeedback(e.target.value)} />
                <button onClick={handleFeedback} className="d-block bgc">Submit</button>

            </div>
        </div>
    </>
 )
}

export default Contact;