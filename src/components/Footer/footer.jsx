import React from "react";
import './footer.css';



function Footer(){

    return(
        <>
            <div className="bg-dark text-white">
                <div className="row">
                    <div className="text-center col-lg-6 mt-5">
                        <h3>Subscibe to see secrtr detail prices <br />drop the moment you sign up</h3>
                    </div>
                    <div className="col-lg-6 text-center">
                        <input type="text" className="bg-dark rounded-pill p-2" placeholder="Enter you email" />
                        <button className="bg-warning p-2 mt-5 border-top rounded-pill ms-3 text-dark">Subscribe</button>
                    </div>
                </div>
                <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-2">
                        <h5 className="fw-bold">Star Holidays</h5>
                        <p className="fw-light">90/7 Chennai 60032</p>
                        <p className="fw-light">working hours :09.00am to 06.30pm</p>
                        <p className="fw-light">starholidays@gmail.com</p>
                        <p className="fw-light">need help call us on <br />
                        <span className="fw-bold text-warning"> 1800-222-3333</span>
                        </p>
                        
                    </div>
                    <div className="col-lg-2">
                        <h5 className="fw-bold">Support</h5>
                        <p className="fw-light">Forom Support</p>
                        <p className="fw-light">Live Chat</p>
                        <p className="fw-light">Help Center</p>
                        <p className="fw-light">How it works</p>
                        <p className="fw-light">Security</p>
                        <p className="fw-light">Privacy</p>
                        <p className="fw-light">Changes logs</p>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="fw-bold">About Us</h5>
                        <p className="fw-light">Community Blog</p>
                        <p className="fw-light">Jobs and carries</p>
                        <p className="fw-light">Contact Us</p>
                        <p className="fw-light">Our Awards</p>
                        <p className="fw-light">Agency</p>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="fw-bold">Services</h5>
                        <p className="fw-light">Tour guide</p>
                        <p className="fw-light">Tour Booking</p>
                        <p className="fw-light">Hotel Booking</p>
                        <p className="fw-light">Ticket Booking</p>
                        <p className="fw-light">Rentel Services</p>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="fw-bold">Legal</h5>
                        <p className="fw-light">Terms and services</p>
                        <p className="fw-light">Privacy Policy</p>
                        <p className="fw-light">Data Processing</p>
                        <p className="fw-light">Data Policy</p>
                        <p className="fw-light">Refund Policy</p>
                    </div>

                </div>
                </div>
            </div>

        </>
    )
}

export default Footer;