import React from 'react';
import Custompackages from '../CustomPackages/custompackages';
import Picnicpackages from '../Picnichomepage/Picnichomepage';
import Homeimg from '..//Homeimg/homeimg';
import Promotion from '../Promotion/promotion';
import Bestoffers from '../Bestoffers/Bestoffers';
import Travelwithus from '../WhyTravelwithus/Travelwithus';
import FAQ from '../FAQ/faq';
import Testimonials from '../Testimonials/Testimonials';
import Newsandtips from '../NewsandTips/Newsandtips';

function HomePage(){
    return(
        <>
        <Homeimg/>
      <Custompackages/>
      <Picnicpackages/>
      <Promotion/>
      <Bestoffers/>
      <Travelwithus/>
      <FAQ/>
      <Testimonials/>
      <Newsandtips/>
        </>
    )
}

export default HomePage;