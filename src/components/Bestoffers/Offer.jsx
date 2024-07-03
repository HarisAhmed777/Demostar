import React,{useContext} from "react";
import { Context } from "../context";
import {Link} from 'react-router-dom'

function Offer({img,title,duration,price}){
    const {theme} =  useContext(Context);
    return(
        <>
        <div className={`cards-container ${theme?"bg-dark textwhite":null}`}>
                    <div className="card ms-3">
                        <img className="cardimg bfcardimg" src={img} alt="Card image cap"/>
                        <div className={`card-body ${theme?"bg-dark text-white":null}`}>
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