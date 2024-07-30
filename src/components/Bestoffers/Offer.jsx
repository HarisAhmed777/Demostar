import React from "react";
import {useNavigate} from 'react-router-dom'

function Offer({img,title,duration,price}){
    const navigate = useNavigate();
    function handlebookclick(title,img){
        const catogory = "Custom Packages";
        const pkg= {
            title: title,
            img:img,
            catogory: catogory
        };
        navigate('/bookingpage', { state: pkg });
        console.log(packageDetails);
        }
    
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
                                <p className="fw-bold mt-1 no-link-style" onClick={()=>handlebookclick(title,img)}>Book now</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Offer;