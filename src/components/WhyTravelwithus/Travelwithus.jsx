import React from "react";
import './Travelwithus.css'
import profile from '../images/profile.avif';





function Travelwithus() {
    const Traveldata = [
        {
            img: profile,
            heading: "Personalized Experiences",
            para: " Enjoy tailor-made travel itineraries designed to match your preferences and interests, ensuring every journey is uniquely yours",
            bgcolor: "#e4f9f9",
        },
        {
            img: profile,
            heading: "Local Expertise",
            para: "Benefit from our deep knowledge of Ranipet and Tamil Nadu, offering insider tips and authentic experiences that showcase the region's cultural richness and natural beauty.",
            bgcolor: "#fcf2fa",
        },
        {
            img: profile,
            heading: "Exceptional Service",
            para: "From booking to journey's end, experience dedicated customer support and attention to detail that ensures a seamless and memorable travel experience. ",
            bgcolor: "#e3f0ff",
        },
        {
            img: profile,
            heading: "Exclusive Offers",
            para: "Access special deals and packages that provide great value, making luxury travel affordable and accessible for all adventurers",
            bgcolor: "#f6f3fc",
        }
    ];

    return (
        <div className="container wholetravel mb-5">
            <h2 className="ms-2 conatinerheading">Choose Star Holidays </h2>
            <p className=" ms-2 conatinerpara">Embark on unforgettable adventures with personalised service and insider knowledge. </p>
            <div className=" ms-2 ">
            <div className="row ">
                {Traveldata.map((value, key) => (
                    <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card cardi" style={{ backgroundColor: value.bgcolor }}>
                            <div className="text-center p-3">
                                <img src={value.img} className="travelprofileimg mb-3" alt="profile" />
                                <h5>{value.heading}</h5>
                                <p>{value.para}</p>
                                {/* <p>Learn More <span>--</span></p> */}
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
