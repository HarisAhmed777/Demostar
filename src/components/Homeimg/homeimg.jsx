import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from 'react-bootstrap/Carousel';
import './homeimg.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/TCP1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../context";

function Homeimg() {
    const { theme } = useContext(Context);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            <div className={`w-100 container-fluid ${theme ? "bg-dark text-white" : null}`}>
                <div className={`homeimg position-relative `}>
                    <Carousel className="w-100 pt-5 mb-5">
                        <Carousel.Item className="w-100 caro1">
                            <div className="carousel-bg caro1" style={{ backgroundImage: `url(${cp1})` }}>
                                <div className="carousel-content caro1">
                                    <button className="rounded-pill p-3 ">Discover The world</button>
                                    <h1>Unleash Your Wanderlust <br />Book Your Next Journey</h1>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-bg" style={{ backgroundImage: `url(${cp2})` }}>
                                <div className="carousel-content">
                                    <button className="rounded-pill p-3">Discover The world</button>
                                    <h1>Unleash Your Wanderlust <br />Book Your Next Journey</h1>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-bg" style={{ backgroundImage: `url(${cp3})` }}>
                                <div className="carousel-content">
                                    <button className="rounded-pill p-3">Discover The world</button>
                                    <h1>Unleash Your Wanderlust <br />Book Your Next Journey</h1>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={`container abs ${theme ? "bg-dark text-white" : "bg-white text-dark"}`}>
                    <div className="row text-center btnthree">
                        <button
                            className={` rounded-pill col-lg-2 col-3 btn1 ms-2 ${activeButton === 'Picnic' ? 'bg-dark text-white' : ''}`}
                            onClick={() => handleButtonClick('Picnic')}
                        >
                            Picnic
                        </button>
                        <button
                            className={` rounded-pill col-lg-2 btn1 col-4 ms-2 ${activeButton === 'Package' ? 'bg-dark text-white' : ''}`}
                            onClick={() => handleButtonClick('Package')}
                        >
                            Package
                        </button>
                        <button
                            className={` rounded-pill col-lg-2 col-3 btn1 ms-2 ${activeButton === 'Offer' ? 'bg-dark text-white' : ''}`}
                            onClick={() => handleButtonClick('Offer')}
                        >
                            Offer
                        </button>
                    </div>
                    <div className="container comtt">
                        <div className={`row mt-2 entirerowdiv comtt`}>
                            <div className="col-lg-2 col-md-5 col-12 mb-2">
                                <label className="fw-light">Location</label><br />
                                <select className="stdate ">
                                    <option>New York, US</option>
                                    <option>Goa, India</option>
                                    <option>New York, USA</option>
                                    <option>New York, USA</option>
                                </select>
                            </div>
                            <div className="col-lg-2 col-md-5 col-12 mb-2">
                                <label>Start Date</label> <br />
                                <DatePicker className="stdate form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="col-lg-2 ms-2 col-md-5 col-12 mb-2">
                                <label>End Date</label> <br />
                                <DatePicker selected={endDate} className="stdate form-control" onChange={(date) => setEndDate(date)} />
                            </div>
                            <div className="col-lg-2 col-md-5 col-12 mb-2">
                                <label className="fw-light">Guest</label><br />
                                <select className="stdate">
                                    <option>1 adult</option>
                                    <option>2 adults</option>
                                    <option>3 adults</option>
                                    <option>4 adults</option>
                                    <option>5 adults</option>
                                    <option>2 adults, 1 child</option>
                                    <option>2 adults, 2 children</option>
                                    <option>2 adults, 3 children</option>
                                    <option>2 adults, 4 children</option>
                                    <option>2 adults, 5 children</option>
                                    <option>4 adults, 1 child</option>
                                    <option>4 adults, 2 children</option>
                                    <option>4 adults, 3 children</option>
                                    <option>4 adults, 4 children</option>
                                </select>
                            </div>
                            <div className="col-lg-2 col-md-12 text-center col-12 mb-2 searchbtndiv">
                                <button className="bg-dark rounded-pill mt-3 sraechbtn">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homeimg;
