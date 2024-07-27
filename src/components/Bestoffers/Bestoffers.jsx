import React,{useContext }from 'react';
import { Context } from '../context'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Bestoffers.css';
import Offer from './Offer';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp3.jpg';

function Bestoffers(){
  const {theme} =  useContext(Context);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      
const offersdata = [
    {
        img: cp1,
        title: "California twilight boat Cruise",
        duration: "2 days 3 nights",
        price: "1000rs/person"
    },
    {
        img: cp2,
        title: "Mountain Adventure Retreat",
        duration: "5 days 4 nights",
        price: "5000rs/person"
    },
    {
        img: cp3,
        title: "Desert Safari and Camping",
        duration: "3 days 2 nights",
        price: "3000rs/person"
    }
];
    return(
        <>
        <div class={`container ${theme?"bg-dark text-white":null}`}>
        <div className={`mb-5`}>
        <div className='container mb-4 '>
            <h2 className='mb-2conatinerheading'>Exclusive Holiday Deals </h2>
            <p className='mb-4 '>Explore exclusive holiday deals crafted to make your dream vacation a reality. </p>
            <div className=''>
                <Carousel responsive={responsive}>
                <Offer {...offersdata[0]}/>
                <Offer {...offersdata[1]}/>
                <Offer {...offersdata[2]}/>
                <Offer {...offersdata[0]}/>
                <Offer {...offersdata[1]}/>
                <Offer {...offersdata[2]}/>
                <Offer {...offersdata[0]}/>
                <Offer {...offersdata[1]}/>
                <Offer {...offersdata[2]}/>
                <Offer {...offersdata[0]}/>
                <Offer {...offersdata[1]}/>
                <Offer {...offersdata[2]}/>
                </Carousel>
            </div>
        </div>
      </div>
      </div>
        </>
    )
}


export default Bestoffers;