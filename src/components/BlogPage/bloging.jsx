import React from "react";
import { useLocation } from "react-router-dom";

function Bloging(){
    const location = useLocation();
    const { blog } = location.state || {};
    console.log(blog)

    return(
        <>
        <div className="">
            <img src={blog.img} alt=""  className="blogingimg mb-4"/>
            <div className="container">
                <h2 className="ms-3 mb-4">{blog.heading}</h2>
                <p className=" ms-3 mb-4">{blog.para}</p>
                <p className=" ms-3 mb-4">{blog.secondpars}</p>
            </div>
        </div>
        
        </>
    )
}

export default Bloging;