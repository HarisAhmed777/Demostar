import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

 
function DataTesti({ heading, comment, img, name }) {
    return (
        <>
            <div className="ms-4 ">
                <div className="row">
                    <div className="">
                        <h5>{heading}</h5>
                        <p>{comment}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <img src={img} alt="" className="testiimg" />
                                <p className="mt-3 d-inline">Haris</p>
                            </div>
                            <div className="rating">
                                {[...Array(5)].map((star, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} color="gold" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataTesti;
