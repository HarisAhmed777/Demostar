import React from "react";
import './custompackages.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp3.jpg';

const packages = [
    {
        img: cp1,
        title: "California sunset twilight boat Cruise",
        duration: "2 days 3 nights",
        guest:"4 to 6 guest",
        price: "1000rs/person"
    },
    {
        img: cp2,
        title: "Mountain Adventure Retreat",
        duration: "5 days 4 nights",
        guest:"4 to 6 guest",
        price: "5000rs/person"
    },
    {
        img: cp3,
        title: "Desert Safari and Camping",
        duration: "3 days 2 nights",
        guest:"4 to 6 guest",
        price: "3000rs/person"
    }
];

function Custompackages(){
    return(
        <div className="container w-75">
            <div className="conatinerhead">
                <h2 className="text-start">Our Custom Packages</h2>
                <p className="text-start">Favourite Destinations Based on customer reviews</p>
            </div>
            <div className="cards-container">
                {packages.map((pkg, index) => (
                    <div key={index} className="card ms-3">
                        <img className="cardimg" src={pkg.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{pkg.title}</h5>
                            <div className="d-flex ">
                            <p className="card-text">{pkg.duration}</p>
                            <p className="card-text ms-3">{pkg.guest}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{pkg.price}</p>
                                <button className="pb-2 pe-3 rounded-pill tbnn">Book now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Custompackages;
