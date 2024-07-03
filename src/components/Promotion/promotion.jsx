import React, { useContext } from "react";
import './promotion.css';
import { Context } from "../context"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';

function Promotion() {
    const { theme } = useContext(Context);

    const isMobilePortrait = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <>
        <div className={`container-fluid ${theme ? "bg-dark text-white" : null}`}>
            <div className="container">
                <div className={`container row cont d-flex ${isMobilePortrait ? 'flex-column' : 'flex-row'}`}>
                    <div className="col-lg-3 pro1 col-12 col-md-5 mb-3">
                        <h4 className="mt-3">Waking Away <br /> in a <br />Far Away <br />Place</h4>
                        <button className="btnpro p-2 rounded-pill fw-bold">View More<FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <div className="col-lg-3 pro2 col-12 col-md-5">
                        <h4 className="mt-3 text-white">Big Promotions<br />at the  <br />End of <br />The year</h4>
                        <button className="btnpro p-2 rounded-pill fw-bold">View More<FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Promotion;
