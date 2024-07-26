import React, { useState, useContext,useRef,useEffect } from "react";
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
    const [location, setLocation] = useState('Munnar,Kerala');
    const [guests, setGuests] = useState('1 adult');
    const navigate = useNavigate();
    const home1ImgRef = useRef(null);
    const home2ImgRef = useRef(null);
    const home3ImgRef = useRef(null);



    const handleBookClick = () => {
        const datas = {
            startDate,
            endDate,
            location,
            tab:key
        };
        navigate('/bookingpage', { state: {datas} });
    };
    useEffect(() => {
        function setWindowHeight() {
          var windowHeight = window.innerHeight;
          if (home1ImgRef.current) {
            home1ImgRef.current.style.height = windowHeight -35+ "px";
          }
        }
      
        window.addEventListener('resize', setWindowHeight);
      
        // Initial call to set the height when the page loads
        setWindowHeight();
      
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', setWindowHeight);
      }, []);
      useEffect(() => {
        function setWindowHeight() {
          var windowHeight = window.innerHeight;
          if (home2ImgRef.current) {
            home2ImgRef.current.style.height = windowHeight -35+ "px";
          }
        }
      
        window.addEventListener('resize', setWindowHeight);
      
        // Initial call to set the height when the page loads
        setWindowHeight();
      
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', setWindowHeight);
      }, []);
      useEffect(() => {
        function setWindowHeight() {
          var windowHeight = window.innerHeight;
          if (home3ImgRef.current) {
            home3ImgRef.current.style.height = windowHeight -35+ "px";
          }
        }
      
        window.addEventListener('resize', setWindowHeight);
      
        // Initial call to set the height when the page loads
        setWindowHeight();
      
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', setWindowHeight);
      }, []);
    return (
        <>
            <div className={`w-100  ${theme ? "bg-dark text-white" : null}`}>
                <div className={`homeimg `}>
                    <Carousel className="w-100 paddingtop  mb-5" >
                        <Carousel.Item className="w-100 caro1"  >
                            <div className="carousel-bg caro1" ref = {home1ImgRef}
                             style={{ backgroundImage: `url(${cp1})` }}>
                                <div className="carousel-content caro1">
                                    <h1>"Discover Your Perfect Holiday: <br />Unwrap Unforgettable Adventures!" </h1>
                                    <Link to='/packagepage'><button className="rounded-pill p-3 bgc text-white "> Enter the world of Packages</button></Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className="carousel-bg caro1"ref = {home2ImgRef}   style={{ backgroundImage: `url(${cp2})` }}>
                                <div className="carousel-content">
                                
                                    <h1>"Unlock Exclusive Offers: <br /> Your Dream Holiday Awaits!"</h1>
                                    <Link to='/offerpage'><button className="p-3 rounded-pill bgc text-white fw-bold">Enjoy Your Holidays with OFFERS</button></Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-bg caro1"ref = {home3ImgRef} style={{ backgroundImage: `url(${cp3})` }}>
                                <div className="carousel-content">

                                    <h1>"Plan Your Perfect Picnic: <br/> Where Memories Blossom! </h1>
                                    <Link to='/picnicpage'><button className="rounded-pill p-3 bgc text-white">Discover The world of Picnic</button></Link>
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
                                    <div className="col-lg-12 col-md-2 col-12 mb-2 pp">
                                        <label className="fw-light text-dark w-100">Location</label>
                                        <select className="stdate mt-3 stt" value={location} onChange={(e) => setLocation(e.target.value)}>
                                            <option>Munnar,Kerala</option>
                                            <option>Kodaikanal,Tamil Nadu</option>
                                            <option>Tada,Andhra </option>
                                            <option>Yelagiri,TamilNadu</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-5 col-md-2 col-12 mb-2">
                                        <label className="text-dark mt-3 ">Start Date</label>
                                        <DatePicker className="stdate form-control fw-bold" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                    <div className="col-lg-5 ms-2 col-md-2 col-12 mb-2">
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
