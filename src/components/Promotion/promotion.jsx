import React from "react";
import './promotion.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Promotion() {
    return (
        <>
        <div className="container mb-5">
            <div className="container row cont">
                <div className="col-lg-4 pro1 col-12 col-md-4 mb-3">
                    <h4 className="mt-3">Waking Away <br /> in a <br />Far Away <br />Place</h4>
                    <button className="btnpro p-2 rounded-pill fw-bold">View More<FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className="col-lg-4 pro2 col-12 col-md-4 ms-3">
                <h4 className="mt-3 text-white">Big Promotions<br />at the  <br />End of <br />The year</h4>
                    <button className="btnpro p-2 rounded-pill fw-bold">View More<FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Promotion;
