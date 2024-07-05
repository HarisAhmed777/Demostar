import React from "react";
import './Contact.css';


function Contact(){
 return(
    <>
        <div className=" pt-5 container ms-5 contact-conatiner">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-12 ">
                    <h2 className="text-center">Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis! Nihil impedit nemo deserunt, temporibus porro labore optio quia itaque!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis! Nihil impedit nemo deserunt, temporibus porro labore optio quia itaque!</p>
                    <h5>For futher assistance</h5>
                    <p>Call us on <span className="text-primary fw-bold">+919876543210</span></p>
                    <p>Monday to Saturday(9.30am to 7.00pm)
                        and on public holidays (9.30am to 5.00pm)
                    </p>
                    <div className="d-flex flex-wrap justify-content-around">
                            <p>Feeback <br /><span className="fw-bold text-primary">startholidays@gmail.com</span></p>
                            <p>Feeback <br /><span className="fw-bold text-primary">startholidays@gmail.com</span></p>

                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12 bg-dark contactadress">
                    <h5>Our Office Address</h5>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Chennai,TamilNadu</p>
                    <p>+919876543210</p>

                </div>
            </div>
        </div>
    </>
 )
}

export default Contact;