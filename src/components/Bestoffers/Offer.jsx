import React from "react";



function Offer({img,title,duration,price}){
    return(
        <>
        <div className="cards-container">
                    <div className="card ms-3">
                        <img className="cardimg" src={img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{duration}</p>
                            <div className="d-flex justify-content-between">
                                <p className="pt-1">{price}</p>
                                <p className="fw-bold mt-1">Book now</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Offer;