import React,{useContext} from "react";
import { Context } from '../context';
import {Link} from 'react-router-dom'
import './picnichomepage.css';
import TCP1 from '../images/TCP1.jpg';
import TCP2 from '../images/TCP2.jpg';
import TCP3 from '../images/TCP3.jpg';
import TCP4 from '../images/TCP4.jpg';
import TCP5 from '../images/TCP5.avif';
import TCP6 from '../images/TCP6.jpg';
import TCP7 from '../images/TCP7.jpg';
import TCP8 from '../images/TCP8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const picnicpackages = [
    {
        img: TCP1,
        title: "Mountains",
        para: "356 tours 246 activites"
    },
    {
        img: TCP2,
        title: "Safari",
        para: "356 tours 246 activites"
    },
    {
        img: TCP3,
        title: "Desert",
        para: "356 tours 246 activites"
    },
    {
        img: TCP4,
        title: "Flower",
        para: "356 tours 246 activites"
    },
    {
        img: TCP5,
        title: "Beach",
        para: "356 tours 246 activites"
    },
    {
        img: TCP6,
        title: "Temples",
        para: "356 tours 246 activites"
    },
    {
        img: TCP7,
        title: "Yatch",
        para: "356 tours 246 activites"
    },
    {
        img: TCP8,
        title: "Valley",
        para: "356 tours 246 activites"
    }
];

function Picnicpackages() {
    const {theme} = useContext(Context);
    return (
        <div className={`container  ${theme?"bg-dark text-white":null}`} >
        <div className="ms-3 mb-4 w-100">
            <div className="">
                <h2 className="text-start">Top Picnic spots</h2>
                <p className="text-start">Favourite Destinations Based on customer reviews</p>
            </div>
            <div className="picnic-cards-container">
                {picnicpackages.map((pkg, index) => (
                    <div key={index} className="picnic-card ">
                        <div className="d-flex w-100"><img className="picnic-card-img " src={pkg.img} alt="Card image cap" /></div>
                        <div className={`picnic-card-body ${theme?"bg-dark text-white":null}`}>
                            <h5 className="picnic-card-title">{pkg.title}</h5>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{pkg.para}</p>
                                <Link to = '/picnicpage'><p><FontAwesomeIcon icon={faArrowRight} /></p></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>

        
    )
}

export default Picnicpackages;
