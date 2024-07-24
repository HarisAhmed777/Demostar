import React from "react";
import {Link} from 'react-router-dom'

function Offer({img,title,duration,price}){
    
    return(
        <>
        <div className={`cards-container`}>
                    <div className="card bestofferborderradius">
                        <img className="cardimg bfcardimg" src={img} alt="Card image cap"/>
                        <div className={`card-body`}>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{duration}</p>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{price}</p>
                                <Link to ='/bookingpage'><p className="fw-bold mt-1 no-link-style">Book now</p></Link>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Offer;