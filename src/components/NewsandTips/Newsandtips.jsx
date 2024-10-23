import React from "react";
import './Newsandtips.css';
import { newstips } from "./News";
import Blogs from "./Blogs";

function Newsandtips(){

    return(
        <>
            <div className="container  mt-5 mb-5">
                <div  className="d-flex ms-4 ">
                    <div >
                        <div className="heaidnss d-flex justify-content-between ">
                        <h3 className="fw-bold newsheading mb-3">News,Tips & Guides</h3>
                        <p className="fw-bold cursor-pointer text-primary ">View More</p>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, maxime.</p>
                    </div>
                    <div>
            
                    </div>
                </div>
        
                {/* {newstips.map((pkg, index) => (
                        
                ))} */}
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                <Blogs {...newstips[0]}/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                <Blogs {...newstips[1]}/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                <Blogs {...newstips[2]}/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                <Blogs {...newstips[3]}/>
                </div>
               
                
                </div>

            
            </div>
        </>
    )
}

export default Newsandtips