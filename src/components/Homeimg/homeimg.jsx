import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './homeimg.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/TCP1.jpg';
import { Context } from "../context";
import { Link, useNavigate } from 'react-router-dom';

function Homeimg() {
    const { theme } = useContext(Context);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [key, setKey] = useState('picnic');
    const [location, setLocation] = useState('New York, US');
    const [guests, setGuests] = useState('1 adult');
    const navigate = useNavigate();

    const handleBookClick = () => {
        const bookingData = {
            startDate,
            endDate,
            location,
            guests,
            tab:key
        };
        navigate('/bookingpage', { state: bookingData });
    };

    return (
        <>
            <div className={`w-100 ${theme ? "bg-dark text-white" : null}`}>
                <div className={`homeimg position-relative`}>
                    <Carousel className="w-100  mb-5">
                        <Carousel.Item className="w-100 caro1">
                            <div className="carousel-bg caro1" style={{ backgroundImage: `url(${cp1})` }}>
                                <div className="carousel-content caro1">
                                   <Link to='/packagepage'><button className="rounded-pill p-3 ">Discover The world</button></Link>
                                    <h1>Unleash Your Wanderlust <br />Book Your Next Package</h1>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-bg caro1" style={{ backgroundImage: `url(${cp2})` }}>
                                <div className="carousel-content">
                                    <h1>Unleash Your Wanderlust <br />See your offers</h1>
                                    <Link to='/offerpage'><button className="p-3 rounded-pill">Click to view more</button></Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-bg caro1" style={{ backgroundImage: `url(${cp3})` }}>
                                <div className="carousel-content">
                                    <Link to='/picnicpage'><button className="rounded-pill p-3">Discover The world</button></Link>
                                    <h1>Unleash Your Wanderlust <br />where you wanna go for picnic</h1>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={`container abs ${theme ? "bg-dark text-white" : "bg-white text-dark"}`}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="picnic" title="Picnic">
                            <div className="container comtt">
                                <div className={`row mt-2 entirerowdiv comtt d-flex justify-content-around`}>
                                    <div className="col-lg-2 col-md-5 col-12 mb-2">
                                        <label className="fw-light">Location</label><br />
                                        <select className="stdate mt-3" value={location} onChange={(e) => setLocation(e.target.value)}>
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
                                        <select className="stdate mt-2" value={guests} onChange={(e) => setGuests(e.target.value)}>
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
                                        <button className="bg-dark rounded-pill mt-3 sraechbtn" onClick={handleBookClick}>Book</button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="package" title="Package">
                            <div className="container comtt">
                                <div className={`row mt-2 entirerowdiv comtt d-flex justify-content-around`}>
                                    <div className="col-lg-2 col-md-5 col-12 mb-2">
                                        <label className="fw-light">Location</label><br />
                                        <select className="stdate mt-3" value={location} onChange={(e) => setLocation(e.target.value)}>
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
                                        <select className="stdate mt-2" value={guests} onChange={(e) => setGuests(e.target.value)}>
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
                                        <button className="bg-dark rounded-pill mt-3 sraechbtn" onClick={handleBookClick}>Book</button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
        
                        <Tab eventKey="offer" title="Offer">
                            <div className="container comtt">
                                <div className={`row mt-2 entirerowdiv comtt d-flex justify-content-around`}>
                                    <div className="col-lg-2 col-md-5 col-12 mb-2">
                                        <label className="fw-light">Location</label><br />
                                        <select className="stdate mt-3" value={location} onChange={(e) => setLocation(e.target.value)}>
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
                                        <select className="stdate mt-2" value={guests} onChange={(e) => setGuests(e.target.value)}>
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
                                        <button className="bg-dark rounded-pill mt-3 sraechbtn" onClick={handleBookClick}>Book</button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default Homeimg;
