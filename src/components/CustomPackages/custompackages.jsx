import React,{useContext}from "react";
import './custompackages.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp3.jpg';
import { Context } from "../context";
import {Link,useNavigate} from 'react-router-dom'
const packages = [
    {
        img: cp1,
        title: "California sunset  Cruise",
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
    const {theme} = useContext(Context);
    const navigate = useNavigate();

    function handlebooking(pkg){
        navigate('/bookingpage', { state:pkg });

    }
    return(
        <div className={`w-100 container mb-5 ${theme?"bg-dark text-white":null}`}>
        <div className={` w-100 text-center `}>
            <div className="conatinerhead  ">
                <h2 className="text-start conatinerheading mb-3">Custom Holiday Packages </h2>
                <p className="text-start  conatinerpara mb-4">Explore personalised holiday packages tailored to your unique preferences at Star Holidays, where 
every detail is crafted to exceed your expectations. </p>
            </div>
            <div className={`cards-container`}>
                {packages.map((pkg, index) => (
                    <div key={index} className="card ">
                        <img className="cardimg" src={pkg.img} alt="Card image cap"/>
                        <div className={`card-bbody ${theme?"bg-dark text-white":null}`}>
                            <h5 className="card-title">{pkg.title}</h5>
                            <div className="d-flex ">
                            <p className="card-text">{pkg.duration}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{pkg.price}</p>
                               <button className="pb-2 pe-3 rounded-pill  bgc tbnn" onClick={()=>handlebooking(pkg)}>Book now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Custompackages;
