import React,{ useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Carousel from 'react-bootstrap/Carousel';
import './homeimg.css';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/TCP1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Homeimg() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
        <div className="homeimg position-relative mb-5">
            <Carousel className="w-100 pt-5">
                <Carousel.Item className="w-100">
                    <div className="carousel-bg" style={{ backgroundImage: `url(${cp1})` }}>
                        <div className="carousel-content">
                            <button className="rounded-pill p-3">Discover The world</button>
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
        <div className="bg-white container w-75 position-absolute abs p-2">
            <button
                    className={` rounded-pill absbtn ${activeButton === 'Picnic' ? 'bg-dark text-white' : ''}`}
                    onClick={() => handleButtonClick('Picnic')}
                >
                    Picnic
            </button>
            <button
                    className={` rounded-pill  ms-3 absbtn ${activeButton === 'Package' ? 'bg-dark text-white' : ''}`}
                    onClick={() => handleButtonClick('Package')}
                >
                    Package
            </button>
            <button
                    className={` rounded-pill ms-3 absbtn ${activeButton === 'Offer' ? 'bg-dark text-white' : ''}`}
                    onClick={() => handleButtonClick('Offer')}
                >
                    Offer
            </button>

            <div className="d-flex justify-content-between mt-2">
                <div>
                    <label className="fw-light">location</label><br />
                    <select className="rounded-pill">
                        <option>New York,US</option>
                        <option>Goa,India</option>
                        <option>New York,USA</option>
                        <option>New York,USA</option>
                    </select>
                </div>
                <div>
                    <label>Start Date</label> <br />
                    <DatePicker className="rounded-pill" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div>
                    <label>End Date</label> <br />
                    <DatePicker selected={endDate} className="rounded-pill" onChange={(date) => setEndDate(date)} />
                </div>
                <div>
                    <label className="fw-light">Guest</label><br />
                    <select className="rounded-pill">
                        <option>1 adult</option>
                        <option>2 adults</option>
                        <option>3 adults</option>
                        <option>4 adults</option>
                        <option>5 adults</option>
                        <option>2 adults ,1 children</option>
                        <option>2 adults ,2 children</option>
                        <option>2 adults ,3 children</option>
                        <option>2 adults ,4 children</option>
                        <option>2 adults ,5 children</option>
                        <option>4 adults ,1 children</option>
                        <option>4 adults ,2 children</option>
                        <option>4 adults ,3 children</option>
                        <option>4 adults ,4 children</option>
                    </select>
                </div>
                <div>
                    <button className="bg-dark rounded-pill mt-3 sraechbtn"><FontAwesomeIcon icon={faMagnifyingGlass}  className="me-2"/>Search</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Homeimg;
