import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Bestoffers.css';
import Offer from './Offer';
import cp1 from '../images/cp1.jpg';
import cp2 from '../images/cp2.avif';
import cp3 from '../images/cp3.jpg';

function Bestoffers(){

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
        title: "California sunset twilight boat Cruise",
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
        <div className='bestoffbg mb-5'>
        <div className='container-fluid  pb-4 w-75 '>
            <h1 className=''>Best Offers </h1>
            <div className='container bfcont'>
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
                </Carousel>;
            </div>
        </div>
      </div>
        </>
    )
}


export default Bestoffers;