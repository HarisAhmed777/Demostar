import React from 'react';
import { offers } from './offersdata';
import Offer from './Offer';
function Exclusiceholidaypage(
) {
  return (
    <div className='paddingtop'>
        <div   className="packageimg">
        <h1 className="text-white mb-5">
          Your Exclusice Holiday<br />
          Package of The weak
        </h1>
        <p className="text-white fw-bold">
          Himachal Holiday Starting at <span className="text-priamry">Rs:17000/</span>
        </p>
      </div>
      <div className='container'>
      <h2>Exclusive Holidays </h2>
      <div className='row '>
        {
            offers.map((value,index)=>(
                <div className='col-lg-3 mb-3 col-12 col-md-4' key={index}>
                <Offer {...value}/>
                </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Exclusiceholidaypage