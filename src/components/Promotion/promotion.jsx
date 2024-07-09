import React, { useContext } from "react";
import './promotion.css';
import { Context } from "../context"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom';

function Promotion() {
    const { theme } = useContext(Context);

    const isMobilePortrait = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <>
        <div className={`container-fluid mb-4 ${theme ? "bg-dark text-white" : null}`}>
            <div className="container">
                <div className={`container row cont d-flex ${isMobilePortrait ? 'flex-column' : 'flex-row'}`}>
                    <div className="col-lg-3 pro1 col-12 col-md-5 mb-3">
                        <h4 className="mt-3">20% off<br />for School Trips</h4>
                        <Link to = '/offerpage'><button className="btnpro p-2 rounded-pill fw-bold">View More<FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>
                    <div className="col-lg-3 pro2 col-12 col-md-5">
                        <h4 className="mt-3 text-white">30% off <br />for <br />College Trips</h4>
                        <Link to = '/offerpage'><button className="btnpro p-2 rounded-pill fw-bold">View More<FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Promotion;
