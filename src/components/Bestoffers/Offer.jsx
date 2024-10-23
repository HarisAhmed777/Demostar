import React from "react";
import {useNavigate} from 'react-router-dom'
import './Bestoffers.css'

function Offer({img,title,duration,price,mainpara,subpara,Transportation,day1city,day1plan,day2city,day2mainpara,day2plan,packagecostperstudent,foodplan,Groupsize,perheadcost,costincludes,costexcludes}){
    const navigate = useNavigate();
    function handlebookclick(title,img){
        const catogory = "Custom Packages";
        const pkg= {
            title: title,
            img:img,
            catogory: catogory,
            mainpara:mainpara,
            subpara:subpara,
            Transportation:Transportation,
            day1city:day1city,
            day1plan:day1plan,
            day2city:day2city,
            day2mainpara:day2mainpara,
            day2plan:day2plan,
            packagecostperstudent:packagecostperstudent,
            foodplan:foodplan,
            Groupsize:Groupsize,
            perheadcost:perheadcost,
            costincludes:costincludes,
            costexcludes:costexcludes

        };
        navigate('/bookingpage', { state: pkg });
        }
    
    return(
        <>
        <div className={`cards-contaier`}>
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