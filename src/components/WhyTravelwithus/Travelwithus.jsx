import React from "react";
import './Travelwithus.css'
import profile from '../images/profile.avif';
import visa from '../images/visa.png';
import paypal from '../images/Paypal.png';
import panoerr from '../images/payneer.png';
import discover from '../images/Dsicover.png';
import bitcoin from '../images/Bitcoin.png';
import stripe from '../images/stripe.png';





function Travelwithus() {
    const Traveldata = [
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "pink",
        },
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "peach",
        },
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "lightblue",
        },
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "pink",
        }
    ];

    return (
        <div className="wholetravel ms-3">
            <h1 className="text-center">Why Travel with us</h1>
            <p className="text-center">The best booking platform you can trust</p>
            <div className="container">
            <div className="row">
                {Traveldata.map((value, key) => (
                    <div key={key} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card" style={{ backgroundColor: value.bgcolor }}>
                            <div className="text-center p-3">
                                <img src={value.img} className="travelprofileimg mb-3" alt="profile" />
                                <h5>{value.heading}</h5>
                                <p>{value.para}</p>
                                <p>Learn More <span>--</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <img src={paypal} alt="" className="paymentimgs" />
                    <img src={stripe} alt="" className="paymentimgs" />
                    <img src={panoerr} alt="" className="paymentimgs" />
                    <img src={visa} alt="" className="paymentimgs" />
                    <img src={bitcoin} alt="" className="paymentimgs" />
                    <img src={discover} alt="" className="paymentimgs" />
                    <img src={visa} alt="" className="paymentimgs" />


                </div>

            </div>
        </div>
    );
}

export default Travelwithus;
