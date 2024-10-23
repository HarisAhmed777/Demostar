import React, { useContext } from 'react';
import { Context } from '../context';
import 'react-multi-carousel/lib/styles.css';
import './Bestoffers.css';
import { Link } from 'react-router-dom';
import Offer from './Offer';

import { offers } from './offersdata';
function Bestoffers() {
  const { theme } = useContext(Context);
  

  

  return (
    <div className={`container ${theme ? "bg-dark text-white" : ""}`}>
      <div className="mb-5">
        <div className='container mb-4'>
          <div className='d-flex justify-content-between align-items-center  '>
          <h2 className='mb-2 container-heading '>Exclusive Holiday Deals</h2>
          <Link to = '/exclusiceholidaypage'> <p className='me-5 fw-bold text-primary cursor-pointer'>View More</p></Link>
          </div>
          <p className='mb-4 ms-1'>Explore exclusive holiday deals crafted to make your dream vacation a reality.</p>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-12'>
              <Offer {...offers[0]}/>
              </div>
              <div className='col-lg-3 col-md-6 col-12'>
              <Offer {...offers[7]}/>
              </div>
              <div className='col-lg-3 col-md-6 col-12'>
              <Offer {...offers[6]}/>
              </div>
              <div className='col-lg-3 col-md-6 col-12'>
              <Offer {...offers[5]}/>
              </div>
              

          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestoffers;
