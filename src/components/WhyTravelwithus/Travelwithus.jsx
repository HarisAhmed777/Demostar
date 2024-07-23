import React from "react";
import './Travelwithus.css'
import profile from '../images/profile.avif';





function Travelwithus() {
    const Traveldata = [
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "#e4f9f9",
        },
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "#fcf2fa",
        },
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "#e3f0ff",
        },
        {
            img: profile,
            heading: "Security Insurance",
            para: "Demonstrates commitment to user data security through encryption and secure payment practices.",
            bgcolor: "#f6f3fc",
        }
    ];

    return (
        <div className="container wholetravel mb-5">
            <h2 className="ms-2">Why Travel with us</h2>
            <p className=" ms-2">The best booking platform you can trust</p>
            <div className=" ms-2 ">
            <div className="row ">
                {Traveldata.map((value, key) => (
                    <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card cardi" style={{ backgroundColor: value.bgcolor }}>
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
        </div>
    );
}

export default Travelwithus;
