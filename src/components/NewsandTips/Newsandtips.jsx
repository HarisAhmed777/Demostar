import React from "react";
import './Newsandtips.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp3.jpg';
import profile from '../images/profile.avif';
const newstips = [
    {
        img: cp1,
        title: "Ultimate Travel guide: 10 tips for a seemless journay",
        date:"18 sep 2024",
        time:"6mins",
        comments:"38 comments",
        name:"Haris"
    },
    {
        img: cp2,
        title: "Mountain Adventure Retreat",
        date:"18 sep 2024",
        time:"6mins",
        comments:"38 comments",
        name:"Haris"

    },
    {
        img: cp3,
        title: "Desert Safari and Camping",
        date:"18 sep 2024",
        time:"6mins",
        comments:"38 comments",
        name:"Haris"

    }
];

function Newsandtips(){
    return(
        <>
            <div className="container mt-5">
                <div  className="d-flex justify-content-between">
                    <div>
                        <h3 className="fw-bold">News,Tips & Guides</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, maxime.</p>
                    </div>
                    <div>
                    <button className="p-2 rounded-pill mt-3 text-white bg-dark">View More</button>
                    </div>
                </div>
                <div className="cards-container">
                {newstips.map((pkg, index) => (
                    <div key={index} className="card ms-3">
                        <img className="cardimg" src={pkg.img} alt="Card image cap"/>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <p>{pkg.date}</p>
                                <p>{pkg.time}</p>
                                <p>{pkg.comments}</p>

                            </div>
                            <h5 className="card-title">{pkg.title}</h5>
                            <div className="d-flex justify-content-between">
                                <div>
                                <img src={profile}alt="" className="newstipsimg" />
                                <p className="d-inline fw-bold">{pkg.name}</p>
                                </div>
                                <div>
                                <p className="txt-dark fw-bold mt-4">Keep Reading</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Newsandtips