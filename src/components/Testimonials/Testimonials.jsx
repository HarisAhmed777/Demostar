import React from "react";
import './Testimonials.css';
import "react-multi-carousel/lib/styles.css";
import DataTesti from "./testimonialsdata";
import { testimonials } from "./TestimonialData";

function Testimonials(){   
    return(
        <>
        <div className="container">
            <h3 className="mb-4 ms-4">Testimonilas</h3>
            <div className="row">
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <DataTesti {...testimonials[0]} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <DataTesti {...testimonials[0]} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <DataTesti {...testimonials[0]} />
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <DataTesti {...testimonials[0]} />
          </div>
        </div>
        </div>
        </>
    )
}

export default Testimonials;