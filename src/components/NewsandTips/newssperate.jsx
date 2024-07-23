import React from "react";
import { useLocation } from "react-router-dom";


function SeperateNews(){
    const location = useLocation();
    const {news} = location.state || {};
    console.log(news);
    
    return(
        <>
        <div className="">
            <img src={news.img} alt=""  className="blogingimg mb-4"/>
            <div className="container">
                <h2 className=" mb-4">{news.title}</h2>
                <p className="  mb-4">{news.para}</p>
                <p className="  mb-4">{news.secondpars}</p>
            </div>
        </div>
        
        </>
    )
}

export default SeperateNews;