import React from "react";
import './Testimonials.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profile from '../images/profile.avif';
import DataTesti from "./testimonialsdata";

function Testimonials(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const testimonials = [
        {
            heading:"Best Booking System",
            comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi consequatur neque voluptatibus? Libero, autem consequatur qui architecto ut expedita nemo.",
            img:profile,
            name:"Haris Ahmed"
        }
      ]
    return(
        <>
        <div className="container">
            <h3 className="fw-bold">Dont take our word for it</h3>
        </div>
        <Carousel responsive={responsive} className="container">
        <DataTesti {...testimonials[0]}/>
        <DataTesti {...testimonials[0]}/>
        <DataTesti {...testimonials[0]}/>
        <DataTesti {...testimonials[0]}/>
        <DataTesti {...testimonials[0]}/>
        <DataTesti {...testimonials[0]}/>
        </Carousel>;


        </>
    )
}

export default Testimonials;