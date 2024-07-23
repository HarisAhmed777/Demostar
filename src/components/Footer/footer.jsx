import React from "react";
import './footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="bg-dark text-white overflow-hidden">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 text-start">
                            <h5 className="fw-bold">Star Holidays</h5>
                            <p className="fw-light">90/7 Chennai 60032</p>
                            <p className="fw-light">working hours :09.00am to 06.30pm</p>
                            <p className="fw-light">starholidays@gmail.com</p>
                            <p className="fw-light">need help call us on <br />
                                <span className="fw-bold text-warning">1800-222-3333</span>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-3 text-start">
                            <h5 className="fw-bold">Support</h5>
                            <Link to = '/blogpage'><p className="fw-light footerhover">Blog</p></Link>
                            <Link to = '/contactus'><p className="fw-light footerhover">Contact Us</p></Link>
                        </div>
                        <div className="col-lg-3 col-md-3 text-start">
                            <h5 className="fw-bold">People Also Visit</h5>
                            <Link to = '/offerpage'><p className="fw-light footerhover">Offers</p></Link>
                            <Link to = '/picnicpage'><p className="fw-light footerhover">Picnics</p></Link>
                            <Link to = '/packagepage'><p className="fw-light footerhover">Packages</p></Link>
                        </div>
                        <div className="col-lg-3 col-md-3 text-start">
                            <h5 className="fw-bold">Services</h5>
                            <Link to = '/packagepage'><p className="fw-light footerhover">School Tour</p></Link>
                            <Link to = '/packagepage'><p className="fw-light footerhover">College Tour</p></Link>
                            <Link to = '/packagepage'><p className="fw-light footerhover">Industrial Visit</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
