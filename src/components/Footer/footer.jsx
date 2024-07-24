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
                            <ul>
                            <h5 className="fw-bold lii">Star Holidays</h5>
                            <li className="fw-light lii">90/7 Chennai 60032</li>
                            <li className="fw-light lii">working hours :09.00am to 06.30pm</li>
                            <li className="fw-light lii">starholidays@gmail.com</li>
                            <li className="fw-light lii">need help call us on <br />
                                <span className="fw-bold text-warning lii">1800-222-3333</span>
                            </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 text-start ">
                            <ul>
                            <h5 className="fw-bold">Support</h5>
                            <Link to = '/blogpage'><li className="fw-light footerhover lii">Blog</li></Link>
                            <Link to = '/contactus'><li  className="fw-light footerhover lii">Contact Us</li></Link>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 text-start ">
                            <h5 className="fw-bold">People Also Visit</h5>
                            <ul>
                            <Link to = '/offerpage'><li className="fw-light footerhover lii">Offers</li></Link>
                            <Link to = '/picnicpage'><li className="fw-light footerhover lii">Picnics</li></Link>
                            <Link to = '/packagepage'><li className="fw-light footerhover lii">Packages</li></Link>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 text-start ">
                            <h5 className="fw-bold">Privacy Policy</h5>
                            <ul>
                            <Link to = '/PrivacyPolicy'><li className="fw-light footerhover lii">Privacy Policy</li></Link>
                            <Link to = '/ServiceProviders'><li className="fw-light footerhover lii">Service providers</li></Link>
                            <Link to = '/ThirdpartyInformation'><li className="fw-light footerhover lii">Third Party Information</li></Link>
                            <Link to = '/legalDisclaimer'><li className="fw-light footerhover lii">Legal Disclaimer</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
