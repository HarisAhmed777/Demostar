import React, { useState, useContext,useRef,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from 'react-bootstrap/Carousel';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './homeimg.css';
import cp11 from '../images/Package.webp';
import cp22 from '../images/Offers.webp';
import cp33 from '../images/Picnic.webp';
import { Context } from "../context";
import { Link, useNavigate } from 'react-router-dom';

function Homeimg() {
    const { theme } = useContext(Context);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [key, setKey] = useState('picnic');
    const [location, setLocation] = useState('Munnar,Kerala'); 
    const navigate = useNavigate();
    const home1ImgRef = useRef(null);
    const home2ImgRef = useRef(null);
    const home3ImgRef = useRef(null);



    const handleBookClick = () => {
        const catogory = "Picnic";
        const pkg= {
            title: location,
            catogory: catogory,
            mainpara:"Experience an exclusively crafted 2-day Kodaikanal student tour package, meticulously designed to explore all the key attractions in Kodaikanal. Our comprehensive package encompasses accommodation, delectable meals, entrance tickets, expert guides, and immersive sightseeing. Uncover the essence of your study tour with the assurance of the best and most affordable prices. Embrace a low-cost guarantee for an enriching educational journey.",
            subpara:"Our primary concern amid the COVID-19 (Coronavirus) pandemic is ensuring strict adherence to all safety protocols mandated by the local and state government authorities and the Health Department.",
            Transportation:"49 seater AC Couch",
            day1city:"Kodaikanal",
             day1: "Arrive at kodaikanal railway station and transfer to the hotel. After fresh up proceed for local sightseeing. This day you will cover……",
            day1plan: [
                  {
                    NTR: "Garden",
                    Lumbni: "Park",
                    DrAmbedkarStatue: "Dr. Ambedkar Statue",
                    TelenganaMartyrsMemorial: "Telengana Martyrs memorial",
                    SalarjungMuseum: "Salarjung Museum",
                    Charminar: "Charminar",
                    MeccaMasjid: "Mecca Masjid"
                  }
                ],
              day2city:"Kodaikanal",
              day2mainpara:"After breakfast proceed for Ramoji film city tour. One day will take to enjoy Ramoji Film City.",
              day2plan:"After dinner transfer and drop at Hyderabad railway station. From there you will board train depart to your hometown.",
              packagecostperstudent:"Min 45",
              foodplan:"With Food",
              Groupsize:"45 Students",
              perheadcost:2000,
              costincludes:[
                {
                    accomodation:"accomadation in non A/c rooms",
                    assistance:"assistance on arrival",
                    complimentary:"complimentary trip for 2 teachers",
                    sharingplan:"Accomadation on quad share basic",
                    meals:"2 BreakFast + 2Lunch + 3 dinners",
    
                }
              ],
              costexcludes:[
                {
                    fare:"train/flight fare",
                    portage:"Any portage at airports and hotels, and all items of personal nature.",
                    laundry:"laundry",
                    cam:"camera fees",
                }
              ]
        };
        navigate('/bookingpage', { state: pkg });
        console.log(pkg);
    };
    useEffect(() => {
        function setWindowHeight() {
          var windowHeight = window.innerHeight;
          if (home1ImgRef.current) {
            home1ImgRef.current.style.height = windowHeight -90+ "px";
          }
        }
      
        window.addEventListener('resize', setWindowHeight);
      
        setWindowHeight();
      
        return () => window.removeEventListener('resize', setWindowHeight);
      }, []);
      useEffect(() => {
        function setWindowHeight() {
          var windowHeight = window.innerHeight;
          if (home2ImgRef.current) {
            home2ImgRef.current.style.height = windowHeight -90+ "px";
          }
        }
      
        window.addEventListener('resize', setWindowHeight);
      
        setWindowHeight();
      
        return () => window.removeEventListener('resize', setWindowHeight);
      }, []);
      useEffect(() => {
        function setWindowHeight() {
          var windowHeight = window.innerHeight;
          if (home3ImgRef.current) {
            home3ImgRef.current.style.height = windowHeight -90 + "px";
          }
        }
      
        window.addEventListener('resize', setWindowHeight);
      
        setWindowHeight();
      
        return () => window.removeEventListener('resize', setWindowHeight);
      }, []);
    return (
        <>
<div className={`w-100 ${theme ? "bg-dark text-white" : null}`}>
    <div className={`homeimg`}>
        <Carousel className="w-100 paddingtop mb-5">
            <Carousel.Item className="w-100 caro1">
                <div className="carousel-bg caro1" ref={home1ImgRef} style={{ backgroundImage: `url(${cp11})` }}>
                    <div className="overlay"></div>
                    <div className="carousel-content caro1">
                        <div className="text-overlay">
                            <h1>Discover Your Perfect Holiday: <br />Unwrap Unforgettable Adventures!</h1>
                            <Link to='/packagepage'>
                                <button className="rounded-pill p-3 bgc text-white">Enter the world of Packages</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-bg caro1" ref={home2ImgRef} style={{ backgroundImage: `url(${cp22})` }}>
                    <div className="overlay"></div>
                    <div className="carousel-content">
                        <div className="text-overlay">
                            <h1>Unlock Exclusive Offers: <br />Your Dream Holiday Awaits!</h1>
                            <Link to='/offerpage'>
                                <button className="p-3 rounded-pill bgc text-white fw-bold">Enjoy Your Holidays with OFFERS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-bg caro1" ref={home3ImgRef} style={{ backgroundImage: `url(${cp33})` }}>
                    <div className="overlay"></div>
                    <div className="carousel-content">
                        <div className="text-overlay">
                            <h1>Plan Your Perfect Picnic: <br />Where Memories Blossom!</h1>
                            <Link to='/picnicpage'>
                                <button className="rounded-pill p-3 bgc text-white">Discover The world of Picnic</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>

                <div className="container">
                <div className="row mb-5">
                     <div className="col-lg-6">
                        <h2 className="ms-3">About US</h2>
                        <p className="ms-3">
                        Welcome to Star Holidays, your premier destination for booking unforgettable holidays in Ranipet, Tamil Nadu. We specialise in crafting personalised travel experiences that highlight the beauty and culture of our vibrant region. Whether you dream of serene nature retreats, immersive cultural tours, or thrilling adventures, our expert team is here to design the perfect itinerary for you. 
                      </p>
                      <p className="ms-3">As a locally owned business, we take pride in our deep knowledge of Ranipet and Tamil Nadu, ensuring you receive insider insights and authentic experiences. From luxurious accommodations to off-the-beaten-path discoveries, we're committed to making every aspect of your journey seamless and memorable. Explore Ranipet and beyond with Star Holidays and embark on a trip filled with lasting memories and enriching experiences. 

                      </p>
                    </div>
                    <div className={`container col-lg-6   mb-4 abs ${theme ? "bg-dark text-white" : "bg-white "}`}>
                    <div className="ms-3">

                    <div className="">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 custom-tab-list  "
                    >
                        <Tab eventKey="picnic" title="Picnic" className={` custom-tab ${key === 'picnic' ? 'active' : ''}`}>
                            <div className="container comtt">
                                <div className={`row mt-2 entirerowdiv comtt `}>
                                    <div className="col-lg-12 col-md-3 col-12 mb-2 pp">
                                        <label className="fw-light text-dark text-start w-100">Location</label>
                                        <select className="stdate mt-3 stt" value={location} onChange={(e) => setLocation(e.target.value)}>
                                            <option>Munnar,Kerala</option>
                                            <option>Kodaikanal,Tamil Nadu</option>
                                            <option>Tada,Andhra </option>
                                            <option>Yelagiri,TamilNadu</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-5 col-md-3 col-12 mb-2">
                                        <label className="text-dark mt-3 ">Start Date</label>
                                        <DatePicker className="stdate form-control fw-bold" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                    <div className="col-lg-5 ms-2 col-md-3 col-12 mb-2">
                                        <label className="text-dark mt-3">End Date</label>
                                        <DatePicker selected={endDate} className="stdate form-control fw-bold" onChange={(date) => setEndDate(date)} />
                                    </div>

                                    <div className="col-lg-12 col-md-2 text-center col-12 mb-2 mt-3 searchbtndiv">
                                        <button className=" mt-3 sraechbtn" onClick={handleBookClick}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="package" title="Packages" className={`custom-tab ${key === 'package' ? 'active' : ''}`}id="controlled-tab-example">
                            <div className="container comtt">
                                <div className={`row mt-2 entirerowdiv comtt d-flex justify-content-around`}>
                                    <div className="col-lg-12 col-md-3 col-12 mb-2">
                                        <label className="fw-light text-dark ">Select Package</label><br />
                                        <select className="stdate mt-3 stt mb-4" value={location} onChange={(e) => setLocation(e.target.value)}>
                                            <option>School Package</option>
                                            <option>College Package</option>
                                            <option>Industiral visit</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-5 col-md-2 col-12 mb-2">
                                        <label className="text-dark">Start Date</label> 
                                        <DatePicker className="stdate form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                    <div className="col-lg-5  col-md-2 col-12 mb-2">
                                        <label className="text-dark">End Date</label> 
                                        <DatePicker selected={endDate} className="stdate form-control" onChange={(date) => setEndDate(date)} />
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-2 text-center col-12 mb-2 mt-3 searchbtndiv">
                                        <button className=" mt-3 sraechbtn" onClick={handleBookClick}>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Homeimg;
